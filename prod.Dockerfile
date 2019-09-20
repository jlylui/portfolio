FROM node
LABEL author="Joycelyn Lui"
ENV NODE_ENV=production
ENV PORT=3000

# Create app directory
RUN mkdir -p /usr/src
WORKDIR /usr/src

# Install app dependencies
COPY package.json /usr/src/
COPY package-lock.json /usr/src/
RUN npm install

# Bulndle app source
COPY . /usr/src

RUN npm run build
EXPOSE $PORT

ENTRYPOINT [ "node", "server.js" ]