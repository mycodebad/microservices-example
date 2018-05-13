FROM node:8

# Add everything in the current directory to our image, in the 'app' folder.
ADD . /app

# Install dependencies
RUN cd /app; \    
    chmod +x ./wait-for-it.sh; \
    npm install; \
    npm run build

# Expose our server port.
EXPOSE 4001 27017 5672

# Run our app.
CMD ["ls"]
CMD ["node", "/app/dist/server.js"]
