#!/bin/bash

if [ ! -f "zips.json" ]; then
  wget "http://media.mongodb.org/zips.json"
fi


#mongoimport --drop --db zips --collection zips < ./zips.json
