import emailjs from '@emailjs/browser';

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
  method: 'emailjs' | 'mailto';
}

// Check if EmailJS is properly configured
export const isEmailJSConfigured = (): boolean => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  return !!(serviceId && templateId && publicKey &&
           serviceId !== 'your_service_id_here' &&
           templateId !== 'your_template_id_here' &&
           publicKey !== 'your_public_key_here');
};

export const sendEmail = async (data: EmailData): Promise<EmailResponse> => {
  try {
    // Check if EmailJS is properly configured first
    if (!isEmailJSConfigured()) {
      // Create a more compatible mailto URL
      const subject = encodeURIComponent(`Portfolio Contact: ${data.subject}`);
      const bodyText = `Hi Vikas,

Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}

---
This message was sent from your portfolio contact form.`;

      const body = encodeURIComponent(bodyText);
      const mailtoUrl = `mailto:vikasbm.1si22cs199@gmail.com?subject=${subject}&body=${body}`;

      // Try to open mailto link
      try {
        window.location.href = mailtoUrl;
      } catch (error) {
        // If that fails, try window.open
        window.open(mailtoUrl, '_blank');
      }

      return {
        success: true,
        message: 'Email client opened! If it didn\'t work, please copy the contact details and send manually.',
        method: 'mailto'
      };
    }

    // EmailJS is configured, try to send email
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
      to_name: 'Vikas B M',
    };

    await emailjs.send(serviceId, templateId, templateParams, publicKey);

    return {
      success: true,
      message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon!',
      method: 'emailjs'
    };

  } catch (error) {
    console.error('Error sending email:', error);

    // If EmailJS fails, fallback to mailto
    const subject = encodeURIComponent(`Portfolio Contact: ${data.subject}`);
    const bodyText = `Hi Vikas,

Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}

---
This message was sent from your portfolio contact form.`;

    const body = encodeURIComponent(bodyText);
    const mailtoUrl = `mailto:vikasbm.1si22cs199@gmail.com?subject=${subject}&body=${body}`;

    try {
      window.location.href = mailtoUrl;
    } catch (mailtoError) {
      window.open(mailtoUrl, '_blank');
    }

    return {
      success: true,
      message: 'EmailJS failed, but your email client has been opened. If it didn\'t work, please copy the contact details and send manually.',
      method: 'mailto'
    };
  }
};

// Validate email format
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Copy contact details to clipboard
export const copyContactDetails = async (data: EmailData): Promise<boolean> => {
  const contactText = `Hi Vikas,

Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}

---
Please send this to: vikasbm.1si22cs199@gmail.com`;

  try {
    await navigator.clipboard.writeText(contactText);
    return true;
  } catch (error) {
    console.error('Failed to copy to clipboard:', error);
    return false;
  }
};
