FROM node:12  

WORKDIR /WsMvnoApi

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3007

CMD ["npm", "start"]

# heroku login
# docker ps
# heroku container:login
# heroku container:push web -a mvno-api-ws
# heroku container:release web -a mvno-api-ws