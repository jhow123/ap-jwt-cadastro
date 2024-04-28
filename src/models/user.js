import mongoose from "mongoose";
import { create } from "moongose/models/user_model";

export function userSchema (){
    new mongoose.Schema({
        id: mongoose.Schema.Types.ObjectId,
        name: {type: String , require: true},
        email:{type: String, unique: true},
        password: {type: String, required: true},
        createdAt: {type: Date, default: Date.now}
    });
};