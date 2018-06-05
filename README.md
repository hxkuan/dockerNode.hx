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
docker run -itd -p 3000:3000 -v <挂载目录>:<被挂载目录> --name=<cName> <name>:<tag>


# other
## 登录容器
docker exec -it <name> /bin/bash
## 执行容器中的sh
docker exec -it <name> /bin/bash *.sh

```