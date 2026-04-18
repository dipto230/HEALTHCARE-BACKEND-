FROM node:22-alpine
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@10.20.0 --activate
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps
COPY . .
EXPOSE 5000
CMD ["sh", "-lc", "CI=true pnpm install && pnpm generate && pnpm dev"]