FROM node:22-alpine
RUN npm install -g nodemon
EXPOSE 3000
WORKDIR /app
COPY . .
RUN npm install
ENV DEBUG='userworker:*'
ENTRYPOINT ["npm", "run", "dev"]