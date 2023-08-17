let mongoose = require("mongoose");
let validator = require("validator");

let UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: (value) => {
      return validator.isEmail(value);
    },
  },
  name: String,
});

module.exports = mongoose.model("User", UserSchema);
