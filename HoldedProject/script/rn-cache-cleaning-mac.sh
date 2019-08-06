#!/bin/sh
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd)"

echo "Cache cleaning starting..."
echo "Directory $DIR"

echo "Removing node_modules and .lock files..."
cd ${DIR}/../
rm -fr node_modules && rm *.lock

echo "Yarn cache cleaning..."
yarn cache clean

echo "Npm cache cleaning..."
npm cache clean --force

echo "Installing packages with yarn..."
yarn install

echo "Watchman's state cleaning..."
watchman watch-del-all

echo "Killing watchman process..."
pkill watchman

echo "Delete packager's cache directory..."
rm -fr $TMPDIR/metro*

echo "Cache cleaning done"
