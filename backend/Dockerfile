FROM node:16
WORKDIR /app
COPY package.json .
RUN yarn
COPY . ./
EXPOSE $PORT
CMD ["yarn","dev"]