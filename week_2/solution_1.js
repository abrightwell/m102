use pcat

// Drop backup if it exists.
db.products_bak.drop();

// Start solution.
print("\n************");
print("* Solution *");
print("************\n");
// Verify count:
print("Products Count: " + db.products.count());

b = db.products_bak;
db.products.find().forEach(function(o){b.insert(o)});

print("Backup Count: " + b.count());
print("\nAnswer: " + homework.a());
