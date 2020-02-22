#!/bin/sh
cd /Users/didi/Desktop/NodeServer/logs
cp access.log $(date +%Y-%m-%d).access.log
echo "" > access.log