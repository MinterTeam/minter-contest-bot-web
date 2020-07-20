FROM node:lts as builder

ARG APP_ENV=${APP_ENV}
ARG APP_EXPLORER_API_URL=${APP_EXPLORER_API_URL}

WORKDIR /app
COPY . .
RUN npm ci && npm run production

FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/.docker/vhost.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
