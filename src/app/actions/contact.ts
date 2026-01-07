'use server';

import * as z from 'zod';

export const formSchema = z.object({
  name: z.string().min(2, {
    message: 'El nombre debe tener al menos 2 caracteres.',
  }),
  email: z.string().email({
    message: 'Por favor, ingrese un correo electrónico válido.',
  }),
  message: z.string().min(10, {
    message: 'El mensaje debe tener al menos 10 caracteres.',
  }),
});

export type FormValues = z.infer<typeof formSchema>;

export async function submitContactForm(data: FormValues) {
  // In a real application, you would handle the form submission here,
  // e.g., send an email, save to a database, etc.
  console.log('Contact form submitted:', data);

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // For this example, we'll just return a success message.
  return { success: true, message: '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.' };
}
