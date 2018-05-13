FROM node:8

# Add everything in the current directory to our image, in the 'app' folder.
ADD . /gateway

# Install dependencies
RUN cd /gateway; \    
    chmod +x ./wait-for-it.sh; \
    npm install;  \
    npm run build

# Expose our server port.
EXPOSE 3000

# Run our app.
CMD ["ls"]
CMD ["node", "/gateway/dist/server.js"]
