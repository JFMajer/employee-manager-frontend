FROM node:16-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --prod


FROM nginx:1.21.1-alpine


COPY --from=builder /app/dist/ /usr/share/nginx/html

EXPOSE 4200

CMD ["nginx", "-g", "daemon off;"]