FROM node
LABEL author="Joycelyn Lui"
ENV NODE_ENV=production
ENV PORT=3000

RUN mkdir /app
WORKDIR /app

COPY package*.json ./
RUN npm install
EXPOSE $PORT

CMD [ "npm", "run", "dev" ]