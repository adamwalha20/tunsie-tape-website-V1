/**
 * Service to handle form submissions via Web3Forms.
 * Web3Forms allows sending emails directly from the frontend without a server.
 * You can get a free access key by visiting https://web3forms.com/
 */

interface ContactSubmission {
  name?: string;
  email: string;
  subject?: string;
  message: string;
  formType: 'contact_page' | 'footer_quick_contact';
}

export async function sendEmail(data: ContactSubmission): Promise<{ success: boolean; message: string }> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  if (!accessKey || accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY_HERE') {
    console.warn('Web3Forms access key is not set. Simulating successful submission in development mode.');
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return {
      success: true,
      message: 'Demo mode: Form submitted successfully! (Set VITE_WEB3FORMS_ACCESS_KEY in .env for real emails)'
    };
  }

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: data.name || 'Anonymous User',
        email: data.email,
        subject: data.subject || `New message from Tunisie Tape Website (${data.formType})`,
        message: data.message,
        from_name: 'Tunisie Tape Website Contact Form',
        replyto: data.email,
      }),
    });

    const result = await response.json();

    if (response.status === 200 && result.success) {
      return { success: true, message: 'Message sent successfully!' };
    } else {
      return { success: false, message: result.message || 'Failed to send message.' };
    }
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'An unexpected error occurred.'
    };
  }
}
