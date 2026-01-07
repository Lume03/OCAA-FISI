import { ContactForm } from "@/components/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactoPage() {
  return (
    <div className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-3 mb-12">
          <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            Contáctenos
          </h1>
          <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
            ¿Tiene alguna pregunta o consulta? Envíenos un mensaje o visítenos en nuestra oficina.
          </p>
        </div>
        <div className="grid gap-12 md:grid-cols-2">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Enviar un Mensaje</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
          <div className="space-y-8">
            <h2 className="font-headline text-2xl font-semibold">Información de Contacto</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Dirección</h3>
                  <p className="text-muted-foreground">
                    Facultad de Ingeniería de Sistemas e Informática <br />
                    Calle Germán Amézaga 375, Lima 15081, Perú
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                 <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Correo Electrónico</h3>
                  <p className="text-muted-foreground">ocaa.fisi@unmsm.edu.pe</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                 <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Teléfono</h3>
                  <p className="text-muted-foreground">(+51) 1 619-7000 Anexo XXXX</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
