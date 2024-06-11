import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
});

export const City = mongoose.model("City", citySchema);