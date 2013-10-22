#!/bin/bash

if [ ! -f "./products.json" ]; then
  curl "https://education.mongodb.com/static/m102-september-2013/handouts/products.3eb7cd1a9633.json" > "products.json"
fi

if [ ! -f "homework2.js" ]; then
  curl "https://education.mongodb.com/static/m102-september-2013/handouts/homework2.a51ae9e0ff0e.js" > "homework2.js"
fi

mongoimport --drop --db pcat --collection products < ./products.json
