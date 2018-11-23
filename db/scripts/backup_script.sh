#!/bin/bash
admin_login=${MONGO_ADMIN}
admin_pass=${MONGO_ADMIN_PASSWORD}
mongo_port=27017
mkdir path_backup=/backup
(
    while :; do
        find /backup -mtime +10 -type f -delete
        name_archive=$(date +%Y-%m-%d-%H%M%S.tag.gz)
        path_archive=$path_backup"/battles_"$name_archive
    
        echo "=>name_archive="$name_archive
        if [ "${MONGO_AUTH}" = true ]; then
            mongodump -h localhost -p $mongo_port --username $admin_login --password $admin_pass --authenticationDatabase admin --gzip --db battlesDB --archive=$path_archive
        else
            mongodump -h localhost --gzip --db battlesDB --archive=$path_archive
        fi
        if [ "${COPY_TO_S3}" = true ]; then
            AWSAccessKeyId=${AWS_ACCESS_KEY_ID}
            AWSSecretKey=${AWS_SECRET_KEY}
            aws_path=${AWS_PATH}
            bucket='battles-backups'
            date=$(date +"%a, %d %b %Y %T %z")
            resource="/${bucket}/$name_archive"
            acl="x-amz-acl:private"
            content_type='application/x-compressed-tar'
            string="PUT\n\n$content_type\n$date\n$acl\n${resource}"
            signature=$(echo -en "${string}" | openssl sha1 -hmac "${AWSSecretKey}" -binary | base64)
            curl -i -X PUT -T "$path/$file" \
            -H "Host: $bucket.s3.amazonaws.com" \
            -H "Date: $date" \
            -H "Content-Type: $content_type" \
            -H "$acl" \
            -H "Authorization: AWS ${AWSAccessKeyId}:$signature" \
            "https://$bucket.s3.amazonaws.com$aws_path$name_archive"
        fi
        sleep 1d
    done
) &
echo "=>Backup's script has run"
