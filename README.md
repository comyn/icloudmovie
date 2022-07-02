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