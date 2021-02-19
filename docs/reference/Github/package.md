# Github 包管理

## 常用包管理工具

>- npm (JavaScript)
>- Maven (Java)
>- RubyGems (Ruby)
>- NuGet (.NET)
>- Docker images （用于虚拟化 Docker 操作系统的软件）

## package.json中的name字段对应值必须是

```
@github_username/repository
```

github用户名和仓库名

## package.json中添加内容,OWNER为你的github用户名

```
"publishConfig": {
    "registry": "https://npm.pkg.github.com/OWNER"
  }
```

或者使用本地.npmrc文件

```
registry=https://npm.pkg.github.com/OWNER
```

## 登录github.com平台的包管理

Password不是github密码,是github授权[access_token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token),一定要勾选package管理的read

```
$ npm login --registry=https://npm.pkg.github.com
> Username: USERNAME
> Password: TOKEN
> Email: PUBLIC-EMAIL-ADDRESS
```

## 发布包

```
npm publish
```

## 其他

```
# 原npm地址
npm config set registry http://registry.npmjs.org
# 设置国内镜像
npm config set registry http://registry.npm.taobao.org/
```

