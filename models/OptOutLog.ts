import { Schema, Document, models, model } from 'mongoose';

export interface IOptOutLog extends Document {
    userId: string;
    screenName: string;
    optOutAt: Date;
}

const OptOutLogSchema: Schema = new Schema({
    userId: { type: String, required: true, index: true },
    screenName: { type: String, required: true },
    optOutAt: { type: Date, default: Date.now, required: true },
});

export default models.OptOutLog || model<IOptOutLog>('OptOutLog', OptOutLogSchema);