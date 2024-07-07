FROM node:20.14.0

WORKDIR /dklh

COPY package.json yarn.lock ./

RUN npm install -g --force yarn 

RUN yarn

COPY . .

COPY .env.example .env

CMD [ "yarn", "dev", "--", "--host" ]