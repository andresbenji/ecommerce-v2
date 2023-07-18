import mongoose from "mongoose";

const featuredSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },

  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Featured = mongoose.model("Featured", featuredSchema);

export default Featured;
