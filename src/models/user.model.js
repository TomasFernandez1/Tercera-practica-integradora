import { Schema, model } from "mongoose";

const userColecction = "users";
const userSchema = new Schema({
  first_name: String,
  last_name: String,
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["USER", "ADMIN", "PREMIUM"],
    default: "USER",
  },
  cartId: {
    type: Schema.Types.ObjectId,
    ref: "cart",
  },
});

export default model(userColecction, userSchema);
