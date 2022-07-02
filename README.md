# Ubuntu中安装docker+jenkins，实现项目部署

## Ubuntu更新系统软件

```
sudo apt-get update
```

## 卸载已安装的旧版本docker

```
sudo apt-get remove docker docker-engine docker.io containerd runc
```

## 安装ssl证书--因为要访问https协议的网站

```
sudo apt-get install apt-transport-https ca-certificates
```
或者
```
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
	```

## 增加一个docker的官方GPG key

```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

## 下载并安装docker，安装完成后自动启动

``` 自动安装
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```
或者
```
curl -sSL https://get.daocloud.io/docker | sh
```

## 再次更新系统

```
sudo apt-get update
```

## 安装docker-ce软件

```
sudo apt-get install docker-ce docker-ce-cli containerd.io -y
```

## 查看是否启动docker

```
ps aux|grep docker
```

## 测试运行一个docker容器

```
sudo docker run hello-world
```
结果：Hello from Docker表示成功

## Docker图形化管理工具

拉取镜像
```
docker pull portainer/portainer
```

创建容器命令
```
docker run -d -p 9000:9000 \
--name portainer \
--restart always \
-v /var/run/docker.sock:/var/run/docker.sock \
-v /tmp/portainer_data:/data \
portainer/portainer
```
命令解释：
-d                                   # 后台模式
-p 9000:9000                         # 端口映射
--restart always                     # 重启Docker时自动重启该容器(一般是开机重启)
-v /var/run/docker.sock:/var/run/docker.sock  # 解释见下面
-v /tmp/portainer_data:/data         # 数据卷映射
portainer/portainer                  # 镜像名 

-v /var/run/docker.sock:/var/run/docker.sock的使用
目的： 将宿主机中的docker.sock 映射到 容器中的docker.sock
原因： docker由client和server组成，我们输入的命令实际上是通过客户端将请求发送到服务端(也就是下面图中的Docker Daemon)，
再由服务端返回信息，客户端收到信息后展示在控制台上， 示意图如下。查看官方文档可知， Docker Daemon监听/var/run/docker.sock， 
即docker操作是通过向/var/run/docker.sock中发送命令。那么， 我们只需要将该目录映射到创建的portainer/portainer容器中，也就可以通过该容器控制Docker

## Docker中Jenkins 安装

1、搜索
```
docker search jenkins
```

2、拉取镜像
```
docker pull jenkins/jenkins
```

3、创建挂载文件夹，并且进行文件权限授予
```
#创建文件夹
mkdir -p /home/jenkins_home
#权限
chmod 777 /home/jenkins_home
```

4、创建容器
```
docker run --name jenkins_node -d -v /Users/isaacho/Documents/application/docker/jenkins_home:/var/jenkins_home -p 8081:8080 -p 50000:50000 jenkins/jenkins:lts
docker run --name jenkins -d -v /home/jenkins_home:/var/jenkins_home -v /etc/localtime:/etc/localtime -uroot -p 9090:8080 -p 50000:50000 jenkins/jenkins
docker run --name jenkins -d -v /home/jenkins_home:/var/jenkins_home -v /etc/localtime:/etc/localtime -p 9090:8080 -p 50000:50000 jenkins/jenkins
```
命令	描述
-d	后台运行容器，并返回容器ID
-uroot	使用 root 身份进入容器，推荐加上，避免容器内执行某些命令时报权限错误
-p 9095:8080	将容器内8080端口映射至宿主机9095端口，这个是访问jenkins的端口
-p 50000:50000	将容器内50000端口映射至宿主机50000端口
--name jenkins	设置容器名称为jenkins
-v /home/jenkins_home:/var/jenkins_home	 :/var/jenkins_home目录为容器jenkins工作目录，我们将硬盘上的一个目录挂载到这个位置，方便后续更新镜像后继续使用原来的工作目录
-v /etc/localtime:/etc/localtime	让容器使用和服务器同样的时间设置
jenkins/jenkins	镜像的名称，这里也可以写镜像ID

备注：jenkins默认端口是8080，容器内的jenkins内部仍是8080，外部映射可以修改
5、日志查看，查找默认密码，复制用于首次登录
```
docker logs jenkins
```
或者
```
docker exec jenkins cat /var/jenkins_home/secrets/initialAdminPassword
```
或者
```
cat /opt/jenkins_data/secrets/initialAdminPassword
```

6、访问Jenkins 
http:ip:9090

7、国内镜像配置（可选）
```
cd /home/jenkins_home/
cat hudson.model.UpdateCenter.xml 
```
修改国内镜像（清华大学官方镜像）连接为：https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json

8、重启容器
```
docker restart jenkins
```

9、进入容器
```
docker exec -it 容器ID /bin/bash            // 进入容器
```

10、修改某个容器内配置文件，由于容器都是精简版，没有vi，vim等命令
``` 拷贝到宿主机
docker cp mysql-test:/etc/mysql/my.cnf /root
```
``` 拷贝回容器
docker cp /root/my.cnf mysql-test:/etc/mysql/ 
```

# Jenkins 工程配置

## GitHub配置

### 工程配置

#### General

1、GitHub项目-》项目URL：https://github.com/comyn/icloudmovie/

#### 源码管理

2、Git-》Repositories->Repository URL:https://github.com/comyn/icloudmovie.git
3、Git-》Repositories->CredentialsGithub账号密码
4、Git-》Branches to build-》指定分支（为空时代表any）	：*/main

#### 构建触发器

1、勾选GitHub hook trigger for GITScm polling
NodeJS Installation：node 14.15.4
npmrc file：- use system default -
Cache location: Default(~/.npm or %APP DATA%\npm-cache)

#### 构建

执行 shell-》命令：
```
#!/bin/bash

# 进入Jenkins工作空间下项目目录
cd /var/lib/jenkins/workspace/icloudmovie

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
rm -rf icloudmovie.tar.gz
    
# 把生成的项目打包成压缩包，方便移动到项目部署目录
tar -zcvf icloudmovie.tar.gz * 

# 输出打包路径
echo ">>>当前工作路径："`pwd`

# 移动到发布目录
# mv icloudmovie.tar.gz /var/www/blogcms.web/
```

#### 构建后操作

Editable Email Notification->
1、Project Recipient List:$DEFAULT_RECIPIENTS,xihatianwang2@163.com,842831983@qq.com
2、Project Reply-To List：$DEFAULT_REPLYTO
3、Content Type：HTML(text/html)
4、Default Subject：$DEFAULT_SUBJECT
5、Default Content：$DEFAULT_CONTENT
Send build artifacts over SSH
1、SSH Publishers-》SSH Server->
Name:myserver
Transfers->Transfer Sert->Source files:docs/.vuepress/dist/icloudmovie.tar.gz
Transfers->Transfer Sert->Remove prefix:docs/.vuepress/dist/
Transfers->Transfer Sert->Exec command:
```
#!/bin/bash

# 把打包后的发版压缩包解压到服务器发布目录
cd /var/www
echo ">>>当前工作路径："`pwd`

shopt -s extglob

# 获取当前运行路径
CRTDIR=$(pwd)
PRO_DIR="/var/www/blogcms.web"
PRO_NAME="icloudmovie.tar.gz"
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

echo ">>>解压：icloudmovie.tar.gz"
tar -zxvf /var/www/${PRO_NAME} -C ${PRO_DIR}

echo ">>>移除：icloudmovie.tar.gz"
rm -rf /var/www/${PRO_NAME}

echo ">>>发布成功"
```

# git配置多用户管理
 
## git 查看全局配置
 
 ```
 git config --global -l
 git config --global --list
 ```
 
 ## 取消全局配置
 
 ```
 git config --global --unset user.name
 git config --global --unset user.email 
 ```
 
 ## 生产钥匙对
 
 ```
 ssh-keygen -t rsa -C “github账号邮箱”
 ```
 
 ## 添加钥匙对
 
```
ssh-add ~/.ssh/id_rsa_github // 将 GitHub 私钥添加到本地
ssh-add ~/.ssh/id_rsa_gitlab // 将 GitLab 私钥添加到本地
```
如果上面命令失败，使用下面命令尝试
```
ssh-agent bash
ssh-add ~/.ssh/first_sa
```

## 修改config文件

在~/.ssh目录下找到config文件，如果没有就创建(其中Host和HostName填写git服务器的域名，IdentityFile指定私钥的路径)

```
# first user(user@xxx.com)
# github
# 建一个github别名，新建的帐号使用这个别名做克隆和更新
Host github
HostName github.com
User comyn
# PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa_github

# second user(user@xxx.com)
# gitee
# 建一个gitee别名，新建的帐号使用这个别名做克隆和更新
Host gitee
HostName gitee.com
User comyn
# PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa_gitee

# third user(user@xxx.com)
# codehub
# 建一个codehub别名，新建的帐号使用这个别名做克隆和更新
Host CodeHub.com
HostName CodeHub.com
User comyn
# PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa
```

## 验证

```
ssh -T git@github.com
ssh -T git@gitee.com
```

## 单独配置

```
git config --local user.name "用户名"
git config --local user.email "邮箱"
```

## 其它

```
ssh-add命令是把专用密钥添加到ssh-agent的高速缓存中。该命令位置在/usr/bin/ssh-add。
语法
ssh-add [-cDdLlXx] [-t life] [file...]ssh-add -s pkcs11ssh-add -e pkcs11

选项

-D：删除ssh-agent中的所有密钥.
-d：从ssh-agent中的删除密钥
-e pkcs11：删除PKCS#11共享库pkcs1提供的钥匙。
-s pkcs11：添加PKCS#11共享库pkcs1提供的钥匙。
-L：显示ssh-agent中的公钥
-l：显示ssh-agent中的密钥
-t life：对加载的密钥设置超时时间，超时ssh-agent将自动卸载密钥
-X：对ssh-agent进行解锁
-x：对ssh-agent进行加锁

实例

1、把专用密钥添加到 ssh-agent 的高速缓存中：
ssh-add ~/.ssh/id_dsa

2、从ssh-agent中删除密钥：
ssh-add -d ~/.ssh/id_xxx.pub

3、查看ssh-agent中的密钥：
ssh-add -l

```