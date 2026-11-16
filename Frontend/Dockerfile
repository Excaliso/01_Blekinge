FROM node:22-alpine
RUN npm install -g nodemon
EXPOSE 5173
WORKDIR /app
COPY . .
RUN npm install
ENV DEBUG='frontend:*'
ENTRYPOINT ["npm", "run", "dev", "--", "--host", "0.0.0.0"]