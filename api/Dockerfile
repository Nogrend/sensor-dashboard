FROM node:14
WORKDIR /backend
COPY package.json package.json
RUN ["npm", "install"]
COPY app.js app.js
CMD ["npm", "run", "start"]
EXPOSE 3000:3000