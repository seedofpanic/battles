FROM node:10-alpine
ADD . /battles

RUN chmod +x /battles/scripts/entrypoint.sh && \
    cd /battles && \
    npm install

EXPOSE 3003


ENTRYPOINT [ "/battles/scripts/entrypoint.sh" ]