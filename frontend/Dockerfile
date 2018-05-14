FROM node:8

# Add everything in the current directory to our image, in the 'app' folder.
ADD . /frontend

# Install dependencies
RUN cd /frontend; \        
    npm install; \    
    chmod +x ./wait-for-it.sh;     

ENV PORT=3030

# Expose our server port.
EXPOSE 3030
EXPOSE 3031

# RUN cd /frontend; \        
#     npm start;    
# npm rebuild node-sass --force; 