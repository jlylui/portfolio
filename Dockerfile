FROM node
LABEL author="Joycelyn Lui"
ENV NODE_ENV=development

RUN mkdir /app
WORKDIR /app

COPY package*.json ./
RUN npm install

CMD [ "npm", "run", "dev" ]