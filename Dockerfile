# use node:carbon as the base image
FROM node:carbon

# define container 9orking directory
WORKDIR /user/dev/b64ms

# copy package*.json files into container working directory
COPY package*.json ./

# install forever
RUN npm install -g forever

# install application dependencies
RUN npm install

# copy all files to container working directory (excluding ignore set)
COPY ./ ./

# expose port 3000
EXPOSE 3000

# launch the application
CMD ["npm", "start"]
