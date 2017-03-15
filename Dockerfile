FROM node:4-onbuild
MAINTAINER Andrew Yee <andrew.yee@mail.com>

COPY . /src/MPBackend
WORKDIR /src/MPBackend

RUN npm install && npm install --save-dev nodemon

CMD ["nodemon", "."]
