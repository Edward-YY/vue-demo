# 使用官方 Node.js 镜像作为基础镜像
FROM node:22.8.0

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 yarn.lock
COPY package.json yarn.lock ./

# 安装 Yarn 4.x (最新的稳定版本可以直接用 corepack)
#RUN corepack enable
#RUN corepack prepare yarn@4.5.0 --activate
RUN npm install -g npm@latest


# 安装项目依赖
#RUN yarn install
RUN npm install

# 复制项目文件到容器
COPY  . .

# 构建 Nuxt 应用
#RUN yarn build
RUN npm run build

# 暴露应用运行的端口（通常是 3000）
EXPOSE 3000

# 启动 Nuxt 应用
#CMD ["yarn", "start"]
CMD ["npm", "start"]
