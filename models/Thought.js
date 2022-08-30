const { Schema, model, Types } = require('mongoose');

const { DateTime } = require('luxon');
const now = DateTime.now();

const ReactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: now,
      get: createdAtVal => createdAtVal.toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: now,
      get: createdAtVal => createdAtVal.toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY),
    },
    username: {
      type: String,
      required: true,
    },

    reactions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Reaction',
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

ThoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// Create Thought model using UserSchema
const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
