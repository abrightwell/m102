use zips

// Just to analyze the data for academic purposes.

var results = db.zips.aggregate([
  { $project : { _id : { $substr : ["$city",0,1] } } } , 
  { $group : { _id : "$_id", n : {$sum:1} } },
  { $match : { _id : {$gte : "0"}, _id : {$lte : "9"} } }, 
  { $sort : { _id : 1 } }
]);

var count = 0;

results.result.forEach( function(doc) { 
  print("_id: " + doc._id + " - n: " + doc.n); 
  count += doc.n;
} );

print("total count: " + count);

// The solution.

db.zips.remove({"city" : /^[0-9]/})
db.zips.count();
