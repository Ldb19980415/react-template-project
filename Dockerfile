FROM nginx:alpine

# 安装gettext包提供envsubst工具
# RUN apk add --no-cache gettext

# 复制静态文件
COPY dist/ /usr/share/nginx/html

# 复制nginx配置模板
COPY nginx.conf /etc/nginx/templates/nginx.conf.template

# 配置时区
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && \
    echo 'Asia/Shanghai' > /etc/timezone

# 设置CMD以使用envsubst替换环境变量，然后启动nginx，多个环境变量用逗号隔开
ENTRYPOINT envsubst '$SERVER_IP_PORT,$SERVER_FLOWABLE_IP_PORT' < /etc/nginx/templates/nginx.conf.template > /etc/nginx/nginx.conf && nginx -g 'daemon off;'