FROM nginx:alpine

COPY dist/ /usr/share/nginx/html

COPY nginx.conf /etc/nginx/

# 配置时区
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && \
    echo 'Asia/Shanghai' > /etc/timezone

# JSON 数组格式的 ENTRYPOINT 可以避免产生额外的 shell 进程，提高执行效率。
ENTRYPOINT ["nginx", "-g", "daemon off;"]
