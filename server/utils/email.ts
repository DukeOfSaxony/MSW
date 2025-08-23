import { MailService } from '@sendgrid/mail';
import type { MailDataRequired } from '@sendgrid/mail';

// Initialize SendGrid mail service with API key
export function initializeEmailService() {
  const apiKey = process.env.SENDGRID_API_KEY;
  if (!apiKey) {
    console.warn('SendGrid API key not found. Email functionality will not work.');
    return null;
  }
  
  const mailService = new MailService();
  mailService.setApiKey(apiKey);
  return mailService;
}

// Email service singleton
let mailService: MailService | null = null;

// Get the mail service instance, initializing if necessary
export function getMailService(): MailService | null {
  if (!mailService) {
    mailService = initializeEmailService();
  }
  return mailService;
}

// Interface for email parameters
export interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text: string;
  html: string;
}

// Send email function
export async function sendEmail(params: EmailParams): Promise<boolean> {
  const service = getMailService();
  if (!service) {
    console.error('Mail service not initialized');
    return false;
  }
  
  try {
    const mailData: MailDataRequired = {
      to: params.to,
      from: params.from,
      subject: params.subject,
      text: params.text,
      html: params.html,
    };
    
    await service.send(mailData);
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}