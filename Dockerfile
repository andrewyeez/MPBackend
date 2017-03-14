FROM node:4.2
COPY . /src
ADD . /src
RUN cd /src && npm install express --save
EXPOSE 3000
CMD ["node", "/src/app/app.js"]
