#!/bin/bash

mongoimport --drop --db pcat --collection products < ./products.json
