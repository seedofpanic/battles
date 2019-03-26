FROM mongo:3.4

ADD ./scripts/entrypoint.sh /entrypoint.sh
ADD ./scripts/restore.sh /restore.sh
ADD ./scripts/create_user.sh /create_user.sh
ADD ./scripts/backup_script.sh /backup_script.sh
# Expose the ports for nginx
EXPOSE 27017

RUN \
 chmod +x /entrypoint.sh && \
 chmod +x /restore.sh && \
 chmod +x /create_user.sh && \
 chmod +x /backup_script.sh && \
 mkdir /backup && \
#  apt-get update && \
#  export DEBIAN_FRONTEND=noninteractive && \
#  apt-get install -y tzdata && \
 apt-get clean

CMD ["/entrypoint.sh"]