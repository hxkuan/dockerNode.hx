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

## 注意

### --inspect=0.0.0.0

> 在node的inspect中需要将host设置为0.0.0.0（不能为172.0.0.1）否则DevTools将无法监听到；原因未知。
