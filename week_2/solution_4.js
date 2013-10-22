db.products.ensureIndex({for:1});

db.products.find({for: "ac3"}, {for:1}).explain();

// Q1 -> 4
// Q2 -> 4
// Q3 -> Yes

