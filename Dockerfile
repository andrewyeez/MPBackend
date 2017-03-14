FROM node:4.2
MAINTAINER Andrew Yee <andrew.yee@mail.com>

COPY . /src

RUN cd /src && npm install express --save

EXPOSE 3000

CMD ["node", "/src/app/app.js"]
