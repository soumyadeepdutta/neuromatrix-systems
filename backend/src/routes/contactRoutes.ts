import { Router } from 'express';
import { 
  submitContactForm, 
  getContactSubmissions, 
  getContactSubmissionById 
} from '../controllers/contactController';
import { validateContactForm, handleValidationErrors } from '../middleware/validation';
import { contactFormRateLimit } from '../middleware/rateLimit';

const router = Router();

// POST /api/contact - Submit contact form
router.post(
  '/',
  contactFormRateLimit,
  validateContactForm(),
  handleValidationErrors,
  submitContactForm
);

// GET /api/contact - Get all contact submissions (for admin purposes)
router.get('/', getContactSubmissions);

// GET /api/contact/:id - Get specific contact submission by ID
router.get('/:id', getContactSubmissionById);

export default router;
