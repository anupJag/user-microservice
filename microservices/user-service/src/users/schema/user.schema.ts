import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  llId: { type: String, required: true },
  role: { type: String, required: true },
});

export interface User extends mongoose.Document {
  name: string;
  email: string;
  llId: string;
  role: string;
}
