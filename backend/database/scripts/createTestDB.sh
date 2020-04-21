#!/bin/bash

DATABASE_USER=root

mysql -u${DATABASE_USER} -e "drop database if exists raw_magic_test;"
mysql -u${DATABASE_USER} -e "create database raw_magic_test;"
