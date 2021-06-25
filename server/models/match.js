const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const postSchema = new mongoose.Schema(
    {
        city: {
            type: String,
          },
          date: {
            type: Date,
          },
          team1: {
            type: String,
          },
          team2: {
            type: String,
          },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Post', postSchema);
