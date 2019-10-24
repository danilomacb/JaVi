const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

// DON'T USE ARROW FUNCTION ON THIS FILE
UserSchema.pre("save", function(next) {
  if (this.isNew || this.isModified("password")) {
    const document = this;
    bcrypt.hash(document.password, parseInt(process.env.SALT_ROUNDS), function(
      err,
      hashedPassword
    ) {
      if (err) {
        console.error(err);
        next(err);
      } else {
        document.password = hashedPassword;
        next();
      }
    });
  } else {
    next();
  }
});

UserSchema.methods.isCorrectPassword = function(password, callback) {
  bcrypt.compare(password, this.password, function(err, same) {
    if (err) {
      console.error(err);
      callback(err);
    } else {
      callback(err, same);
    }
  });
};

module.exports = mongoose.model("User", UserSchema);
