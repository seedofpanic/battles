#!/bin/bash

if [ "${MONGO_DB}" != "admin" ]; then
    echo "=> Creating a ${MONGO_DB} database user with a password in MongoDB"
    mongo admin -u ${MONGO_ADMIN} -p ${MONGO_ADMIN_PASSWORD} << EOF
    echo "Using ${MONGO_DB} database"
    use ${MONGO_DB}
    db.createUser({user: '${MONGO_USER}', pwd: '${MONGO_USER_PASSWORD}', roles:[{role:'dbOwner', db:'${MONGO_DB}'}]})
EOF
fi
sleep 3

echo "MongoDB configured successfully. ."
