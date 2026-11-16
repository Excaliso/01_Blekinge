FROM node:22-alpine
RUN npm install -g nodemon
EXPOSE 3000
WORKDIR /app
COPY . .
RUN npm install
ENV DEBUG='worker:*'
ENTRYPOINT ["npm", "run", "dev"]