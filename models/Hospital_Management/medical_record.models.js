import mongoose from 'mongoose';

const medicalRecordSchema = new mongoose.Schema(
  {
    previousediagnose: {
      type: String,
      required: true,
    },
    sugarlevel: {
      type: String,
      enum: ['low', 'moderate', 'high'],
      required: true,
    },
    hapitatis: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const MedicalRecord = mongoose.model(
  'MedicalRecord',
  medicalRecordSchema
);
