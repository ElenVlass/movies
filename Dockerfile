FROM node:16.14.2

# RUN mkdir -p /app/
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# add app
COPY . ./

# start app
CMD ["npm", "start"]    

# for launch:
# docker run -it --rm \
# -v ${PWD}:/app \
#     -v /app/node_modules \
#     -p 3001:3000 \
#     -e CHOKIDAR_USEPOLLING=true \
#     movies:dev