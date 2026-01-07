import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { services } from '@/data/services';

export default function ServicesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
              Nuestras Funciones
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              La OCAA se encarga de planificar, ejecutar y monitorear los procesos de aseguramiento de la calidad y acreditación en la facultad.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-7xl lg:grid-cols-4">
          {services.map((service, index) => (
            <Card key={index} className="h-full flex flex-col shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="font-headline">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
