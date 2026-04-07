FROM node:22-alpine AS builder

RUN npm install -g pnpm@9 --ignore-scripts

WORKDIR /app

COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./
COPY tsconfig.base.json ./
COPY lib ./lib
COPY artifacts/logisticraft ./artifacts/logisticraft
COPY attached_assets ./attached_assets

RUN pnpm install --frozen-lockfile

ENV NODE_ENV=production
ENV BASE_PATH=/
ENV PORT=3000

RUN cd artifacts/logisticraft && pnpm run build

FROM nginx:alpine

COPY --from=builder /app/artifacts/logisticraft/dist/public /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
