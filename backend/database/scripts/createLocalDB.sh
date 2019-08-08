#!/bin/bash

DATABASE_USER=root
DATABASE_PASSWORD=

mysql -u${DATABASE_USER} -p${DATABASE_PASSWORD} -e "drop database raw_magic;"
mysql -u${DATABASE_USER} -p${DATABASE_PASSWORD} -P3306 -e "create database raw_magic;"
