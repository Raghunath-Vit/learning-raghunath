const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  first_Name: { 
		type: String, 
		required: true, 
		maxLength: 50 
	},
  last_Name: { 
		type: String, 
		required: true, 
		maxLength: 100 
	},
  dob: { 
		type: Date 
	},
  dod: { 
		Date 
	},
});
module.exports = mongoose.model("Author", authorSchema);
