IMAGE_NAME=sentinel-flow-ui
VERSION=latest



git pull && npm i && npm run build


# 使用docker-compose构建镜像，就无需在这执行docker build命令了
# docker build -t ${IMAGE_NAME}:"${VERSION}" .


 docker-compose -f docker-compse.yml up -d --build
 # 使用docker-compose启动，直接up的话，每次都会构建最新的镜像