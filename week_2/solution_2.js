use pcat

// Define new record.
var new_record = {
	"_id" : "ac9",
	"name" : "AC9 Phone",
	"brand" : "ACME",
	"type" : "phone",
	"price" : 333,
	"warranty_years" : 0.25,
	"available" : true
      }

// Insert new record.
db.products.insert(new_record);

var record = db.products.findOne({"_id": ObjectId("507d95d5719dbef170f15c00")});

// Update record.
record.term_years = 3;
record.limits.sms.over_rate = 0.01;

// Save record.
db.products.save(record);

// Validate solution.
print("****");
print("Answer: " + homework.b());
