FROM node
RUN mkdir /app
WORKDIR /app
COPY app.js .
EXPOSE 3000
CMD ["node", "app.js"]
