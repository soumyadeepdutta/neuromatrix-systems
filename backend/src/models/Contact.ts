import mongoose, { Schema, Document } from 'mongoose';
import { IContactForm } from '../types/contact';

export interface IContactDocument extends IContactForm, Document {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}

const contactSchema = new Schema<IContactDocument>({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters long'],
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Please enter a valid email address'
    ]
  },
  company: {
    type: String,
    trim: true,
    maxlength: [100, 'Company name cannot exceed 100 characters']
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    minlength: [10, 'Message must be at least 10 characters long'],
    maxlength: [2000, 'Message cannot exceed 2000 characters']
  },
  ipAddress: {
    type: String,
    trim: true
  },
  userAgent: {
    type: String,
    trim: true
  }
}, {
  timestamps: true,
  collection: 'contacts'
});

// Index for better query performance
contactSchema.index({ email: 1, createdAt: -1 });
contactSchema.index({ createdAt: -1 });

// Pre-save middleware to sanitize data
contactSchema.pre('save', function(next) {
  if (this.name) {
    this.name = this.name.trim();
  }
  if (this.company) {
    this.company = this.company.trim();
  }
  if (this.message) {
    this.message = this.message.trim();
  }
  next();
});

export const Contact = mongoose.model<IContactDocument>('Contact', contactSchema);
