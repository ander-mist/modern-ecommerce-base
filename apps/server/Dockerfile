# Dockerfile for Elecshop Server (Nest.js)
FROM node:20-alpine
WORKDIR /app

# Copia arquivos do monorepo (contexto deve ser a raiz!)
COPY pnpm-workspace.yaml pnpm-lock.yaml package.json ./
COPY apps/shared/package.json ./apps/shared/package.json
COPY apps/shared ./apps/shared
COPY apps/server/package.json ./apps/server/package.json
COPY apps/server ./apps/server

RUN apk add --no-cache curl
RUN corepack enable
RUN corepack prepare pnpm@8.15.4 --activate

# Debug: listar arquivos copiados
RUN ls -la && ls -la ./apps/server

# Instala dependências do monorepo e do server
RUN pnpm install --no-frozen-lockfile

WORKDIR /app/apps/server
RUN pnpm build
EXPOSE 4000
CMD ["pnpm", "dev"]
