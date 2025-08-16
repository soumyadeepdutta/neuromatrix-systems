import { Request, Response } from 'express';
import { Contact } from '../models/Contact';
import { IContactForm } from '../types/contact';

export const submitContactForm = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, company, message } = req.body;
    
    // Get client IP and user agent
    const ipAddress = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || 'unknown';
    const userAgent = req.get('User-Agent') || 'unknown';
    
    // Create new contact form entry
    const contactData: IContactForm = {
      name,
      email,
      company,
      message,
      ipAddress: typeof ipAddress === 'string' ? ipAddress : 'unknown',
      userAgent
    };
    
    const contact = new Contact(contactData);
    await contact.save();
    
    // Send success response
    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: {
        name: contact.name,
        email: contact.email,
        company: contact.company,
        message: contact.message,
        createdAt: contact.createdAt
      }
    });
    
  } catch (error) {
    console.error('Error submitting contact form:', error);
    
    // Handle MongoDB duplicate key errors
    if (error instanceof Error && error.message.includes('duplicate key')) {
      res.status(400).json({
        success: false,
        message: 'A contact form with this email already exists',
        error: 'Duplicate submission'
      });
      return;
    }
    
    // Handle validation errors
    if (error instanceof Error && error.name === 'ValidationError') {
      res.status(400).json({
        success: false,
        message: 'Validation failed',
        error: error.message
      });
      return;
    }
    
    // Generic error response
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: 'Something went wrong while processing your request'
    });
  }
};

export const getContactSubmissions = async (req: Request, res: Response): Promise<void> => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;
    
    const contacts = await Contact.find({})
      .select('-__v')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);
    
    const total = await Contact.countDocuments({});
    
    res.status(200).json({
      success: true,
      message: 'Contact submissions retrieved successfully',
      data: {
        contacts,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit)
        }
      }
    });
    
  } catch (error) {
    console.error('Error retrieving contact submissions:', error);
    
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: 'Failed to retrieve contact submissions'
    });
  }
};

export const getContactSubmissionById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    
    const contact = await Contact.findById(id).select('-__v');
    
    if (!contact) {
      res.status(404).json({
        success: false,
        message: 'Contact submission not found',
        error: 'The requested contact submission does not exist'
      });
      return;
    }
    
    res.status(200).json({
      success: true,
      message: 'Contact submission retrieved successfully',
      data: contact
    });
    
  } catch (error) {
    console.error('Error retrieving contact submission:', error);
    
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: 'Failed to retrieve contact submission'
    });
  }
};
