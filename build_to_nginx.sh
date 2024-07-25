git pull && npm i && npm run build

# 新版的docker自带有docker compose，使用命令不用带横杠 “docker compose”
docker-compose -f docker-compse.yml up -d --build