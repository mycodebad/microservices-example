FROM node:8

# Add everything in the current directory to our image, in the 'app' folder.
ADD . /courses

# Install dependencies
RUN cd /courses; \    
    chmod +x ./wait-for-it.sh; \
    npm install; \
    npm run build

# Expose our server port.
EXPOSE 4002 27017

# Run our app.
CMD ["ls"]
CMD ["node", "/courses/dist/server.js"]
