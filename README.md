## 简介
> 本application基于`Docker version 18.05.0-ce`。
基于docker的开发，发布环境的koa2的活动系统。

## 常用命令
```shell
# 构建线上环境
## 构建镜像
docker build -f ./dockerfile/productionfile -t <name>:<tag>  .
## 运行镜像
docker run -itd -p 3000:3000 --name=<cName> <name>:<tag>


# 构建开发环境
## 构建镜像
docker build -f ./dockerfile/developfile -t <name>:<tag>  .
## 运行镜像
docker run -itd -p 3000:3000 -p 9229:9229 -v <挂载目录>:<被挂载目录> --name=<cName> <name>:<tag>


# other
## 登录容器
docker exec -it <name> /bin/bash
## 执行容器中的sh
docker exec -it <name> /bin/bash *.sh

```

## controllers规则
暂时为加载文件时组装router，如此启动server的速度较慢；之后production可优化为打包文件时组装。
> src/controllers/文件夹中的文件将自动的根据目录结构加载到router中，index文件则自动加载到index和该目录的根路径上面，
>
> 比如：src/controllers/user/index.js文件将自动挂载到/user和/user/index下面。

> 注意：
> 1. 当文件名和目录（有index）名一致时，由于读取时目录在文件之前，即匹配到的是目录的index
> 2. 该组装同时支持get和post

## 注意

### --inspect=0.0.0.0

> 在node的inspect中需要将host设置为0.0.0.0（不能为172.0.0.1）否则DevTools将无法监听到；原因未知。

>注意
> 1. 如此设置时，访问也必须使用0.0.0.0 

