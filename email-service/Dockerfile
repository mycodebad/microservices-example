FROM node:8

# Add everything in the current directory to our image, in the 'app' folder.
ADD . /email

# Install dependencies
RUN cd /email; \    
    chmod +x ./wait-for-it.sh; \
    npm install; \
    npm run build   

# Expose our server port.
EXPOSE 4003

# Run our app.
CMD ["ls"]
CMD ["node", "/email/dist/server.js"]
