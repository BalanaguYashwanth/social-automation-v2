import { Schema, Document, models, model } from 'mongoose';

export interface ITwitterUserData {
    id: string;
    screenName: string;
    name: string;
    profileImageUrl: string;
    accessToken: string;
    accessSecret: string;
    linkedAt?: Date;
}

export interface IUser extends Document, Omit<ITwitterUserData, 'id'> {}

const UserSchema: Schema = new Schema({
    _id: { type: String, required: true },
    screenName: { type: String, required: true, index: true },
    name: { type: String, required: true },
    profileImageUrl: { type: String },
    accessToken: { type: String, required: true },
    accessSecret: { type: String, required: true },
    linkedAt: { type: Date, default: Date.now }
});

export default models.User || model<IUser>('User', UserSchema);