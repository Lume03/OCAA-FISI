'use server';

import { formSchema, type FormValues } from './contact-schema';

export async function submitContactForm(data: FormValues) {
  // Validate data on the server
  const parsed = formSchema.safeParse(data);

  if (!parsed.success) {
    return { success: false, message: 'Invalid data provided.' };
  }
  
  // In a real application, you would handle the form submission here,
  // e.g., send an email, save to a database, etc.
  console.log('Contact form submitted:', parsed.data);

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // For this example, we'll just return a success message.
  return { success: true, message: '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.' };
}
