
FROM node:4-onbuild
COPY . /usr/src/app
# replace this with your application's default port
EXPOSE 8888
