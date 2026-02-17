# Dockerfile for Elecshop Web (Next.js)
FROM node:20-alpine
WORKDIR /app

# Copia arquivos do monorepo (contexto deve ser a raiz!)
COPY pnpm-workspace.yaml pnpm-lock.yaml package.json ./
COPY apps/shared/package.json ./apps/shared/package.json
COPY apps/shared ./apps/shared
COPY apps/web/package.json ./apps/web/package.json
COPY apps/web ./apps/web

RUN apk add --no-cache curl
RUN corepack enable
RUN corepack prepare pnpm@8.15.4 --activate

# Debug: listar arquivos copiados
RUN ls -la && ls -la ./apps/web

# Instala dependências do monorepo e do web
RUN pnpm install --no-frozen-lockfile

WORKDIR /app/apps/web
RUN pnpm build
EXPOSE 3000
CMD ["pnpm", "dev"]
