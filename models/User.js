const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: this,
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// Get total count of friends
UserSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

// Get total count of friends
UserSchema.virtual('thoughtCount').get(function () {
  return this.thoughts.length;
});

// Create User model using UserSchema
const User = model('User', UserSchema);

module.exports = User;
