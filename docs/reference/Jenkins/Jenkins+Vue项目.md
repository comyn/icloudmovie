# Jenkins+Vue(vuepress)项目

[toc]

## 概念

[阮一峰](http://www.ruanyifeng.com/blog/2015/09/continuous-integration.html)

### 持续集成

- 基于第一次的commit进行的本地代码提交,第一次是master.
- 后续本地代码的提交都是在分支上开发的
- GitHub有个workflow,持续集成,有个.github目录,里面有个.yml文件,写脚本每次提交,自动执行测试
- 第一轮测试:单元测试(必须)、集成测试(可选)、端对端测试(可选)

### 持续交付

- 持续集成的下一步
- 构建:分支代码合并到主干,触发构建时脚本
- 第二轮测试:单元测试(必须)、集成测试(必须)、端对端测试(必须)
- 构建工具:Jenkins、Travis、Codeship、Strider

### 持续部署

- 持续交付的下一步
- 持续交付后会生成一个发布版本的包,这个包通常是要部署到生产服务器的.
- 备份->删除->解压

### 回滚

- 待完成

## 安装Jenkins

[下载地址](https://www.jenkins.io/zh/)

[文档](https://www.jenkins.io/zh/doc/book/installing/)

## 插件

### Generic Webhook Trigger Plugin

动态关联远程仓库，便于在进行某些git操作，如提交等自动构建项目

### Email Extension Plugin

- 对邮箱进行配置，例如构建项目后，通知相关人员，构建是否成功等
- 主要是个可配置html邮件内容
- smtp密码不是163的登录密码,是授权密码

### Publish over SSH

- 全局配置，用于自动构建后自动部署到服务器

## 构建，执行的shell命令

```bash
#!/bin/bash

# 进入Jenkins工作空间下hxkj项目目录
cd /var/lib/jenkins/workspace/jenkins-test

echo 'node版本：'
node -v 

echo '依赖包安装中，请稍后...'
npm install

# 可选，如果有先删除，如果没有则不用，vue-cli脚手架每次插件dist都会先删除，vuepress项目没有
cd docs/.vuepress/
# 可能会有权限问题
rm -rf dist

# echo '打包start...'
npm run build
# echo '打包完成...'

# 进入生成打包文件的目录
cd dist

# 可选，如果有先删除
rm -rf jenkins-test.tar.gz
    
# 把生成的项目打包成压缩包，方便移动到项目部署目录
tar -zcvf jenkins-test.tar.gz * 

# 输出打包路径
echo ">>>当前工作路径："`pwd`

# 移动到发布目录
# mv jenkins-test.tar.gz /var/www/blogcms.web/
```

## 构建后操作，执行的shell命令

问题一自动部署：

1. `系统管理-》系统配置-》Publish over SSH`中的Remote Directory是只服务器上已经存在的一个目录，不会自动创建
2. `项目-》配置-》构建后操作`中的Remote directory是指`Publish over SSH`中的子目录，如果没有会自动创建，是拼接关系，不要再写一遍`Publish over SSH`中的路径

```bash
#!/bin/bash

# 把打包后的发版压缩包解压到服务器发布目录
cd /var/www
echo ">>>当前工作路径："`pwd`

shopt -s extglob

# 获取当前运行路径
CRTDIR=$(pwd)
PRO_DIR="/var/www/blogcms.web"
PRO_NAME="jenkins-test.tar.gz"
BAK_DIR="/var/www/blogcms.web.bak"
BAK_NAME="${BAK_DIR}/${PRO_NAME}_`date +%Y%m%d%H%M%S`"

# 判断是否有upload文件夹，没有则创建，用于存储备份
if [ ! -d "${BAK_DIR}" ]; then
  mkdir "${BAK_DIR}"
fi

# 除之外--exclude PRO_NAME
cd ${PRO_DIR}
echo ">>>压缩备份：上一次发版内容" 
tar -zcvf ${BAK_NAME} *

echo ">>>删除：上一次发版内容"
rm -rf ${PRO_DIR}/*

echo ">>>解压：jenkins_test.tar.gz"
tar -zxvf /var/www/${PRO_NAME} -C ${PRO_DIR}

echo ">>>移除：jenkins_test.tar.gz"
rm -rf /var/www/${PRO_NAME}

echo ">>>发布成功"
```

