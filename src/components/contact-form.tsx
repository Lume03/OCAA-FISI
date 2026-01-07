'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

const formSchema = z.object({
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

type FormValues = z.infer<typeof formSchema>;

async function submitContactForm(data: FormValues) {
  'use server';
  // In a real application, you would handle the form submission here,
  // e.g., send an email, save to a database, etc.
  console.log('Contact form submitted:', data);

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // For this example, we'll just return a success message.
  return { success: true, message: '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.' };
}

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    try {
      const result = await submitContactForm(values);
      if (result.success) {
        toast({
          title: 'Éxito',
          description: result.message,
        });
        form.reset();
      } else {
        throw new Error('An unknown error occurred');
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Hubo un problema al enviar su mensaje. Por favor, inténtelo de nuevo.',
      });
    } finally {
        setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre Completo</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo Electrónico</FormLabel>
              <FormControl>
                <Input placeholder="su.correo@ejemplo.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensaje</FormLabel>
              <FormControl>
                <Textarea placeholder="Escriba su consulta aquí..." className="min-h-[120px]" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
        </Button>
      </form>
    </Form>
  );
}
