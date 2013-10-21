#!/bin/bash

if [ ! -f "week3.js" ]; then
  curl https://education.mongodb.com/static/m102-september-2013/handouts/week3.66b3090f84e3.js > week3.js
fi

mongo insurance week3.js
