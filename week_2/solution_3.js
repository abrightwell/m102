use pcat

var count = db.products.find({"limits.voice" : {$exists : true}}).count();

print("Answer: " + count);
