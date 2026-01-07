import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function NosotrosPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 md:px-6 md:py-24">
      <Card className="overflow-hidden shadow-lg">
        <CardHeader className="bg-secondary/50 p-6 md:p-8">
          <CardTitle className="font-headline text-3xl md:text-4xl text-primary">
            Sobre Nosotros
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 md:p-8 space-y-6">
          <div className="space-y-4 text-foreground/80">
            <p className="leading-relaxed">
              La Oficina de Calidad Académica y Acreditación (OCAA) de la Facultad de Ingeniería de Sistemas e Informática (FISI) de la Universidad Nacional Mayor de San Marcos (UNMSM) es la unidad encargada de planificar, organizar, ejecutar y evaluar los procesos de autoevaluación, acreditación y licenciamiento de los programas de estudio y de la facultad en su conjunto.
            </p>
            <p className="leading-relaxed">
              Nuestro compromiso es promover una cultura de calidad y mejora continua, asegurando que los programas de estudio cumplan con los más altos estándares nacionales e internacionales, en beneficio de nuestros estudiantes, docentes y la sociedad en general.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div>
                  <h3 className="font-headline text-xl font-semibold mb-2">Misión</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                      Gestionar el Sistema de Aseguramiento de la Calidad de la FISI, promoviendo la mejora continua de sus programas de estudio y servicios, para lograr el reconocimiento nacional e internacional a través de la acreditación.
                  </p>
              </div>
              <div>
                  <h3 className="font-headline text-xl font-semibold mb-2">Visión</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                      Ser un referente en la gestión de la calidad universitaria, contribuyendo a que la FISI sea reconocida como una facultad líder en la formación de profesionales competentes y comprometidos con el desarrollo del país.
                  </p>
              </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
