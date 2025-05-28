# EmailJS Setup Guide

This guide will help you set up EmailJS to enable email functionality in your portfolio contact form.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down the **Service ID** (you'll need this later)

### For Gmail:
- Select "Gmail"
- Click "Connect Account" and authorize EmailJS
- Your Service ID will be generated automatically

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Message: {{subject}}

From: {{from_name}} ({{from_email}})
To: {{to_name}}

Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down the **Template ID**

## Step 4: Get Public Key

1. Go to "Account" > "General"
2. Find your **Public Key** (also called User ID)
3. Copy this key

## Step 5: Update Environment Variables

1. Open the `.env` file in your project root
2. Replace the placeholder values with your actual EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## Step 6: Test the Contact Form

1. Restart your development server: `npm run dev`
2. Go to your portfolio contact form
3. Fill out and submit a test message
4. Check your email to confirm it works

## Fallback Behavior

If EmailJS is not configured (environment variables are missing), the contact form will automatically fall back to opening the user's default email client with a pre-filled message.

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- 2 email services
- 1 email template
- Basic support

This should be sufficient for a personal portfolio website.

## Troubleshooting

### Common Issues:

1. **"Service not found"** - Check your Service ID
2. **"Template not found"** - Check your Template ID
3. **"Invalid public key"** - Check your Public Key
4. **Emails not sending** - Verify your email service is properly connected

### Testing:

You can test your EmailJS setup directly in their dashboard:
1. Go to your template
2. Click "Test it"
3. Fill in test values and send

## Security Note

The EmailJS public key is safe to expose in frontend code. It's designed to be public and only allows sending emails through your configured templates and services.
