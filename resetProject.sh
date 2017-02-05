#! /bin/bash
# BEFORE USE:chmod 777 restProject.sh
rm -rf .git
git init
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install
rm -rf resetProject.sh
