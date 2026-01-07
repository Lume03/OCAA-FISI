import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const accreditationStatus = [
    {
        program: "E.P. Ingeniería de Sistemas",
        status: "Acreditado por ICACIT",
        period: "2022 - 2028",
        description: "Reconocimiento que asegura que el programa cumple con los más altos estándares de calidad educativa en ingeniería."
    },
    {
        program: "E.P. Ingeniería de Software",
        status: "Acreditado por ICACIT",
        period: "2022 - 2028",
        description: "Certificación de la calidad del programa, alineada con las mejores prácticas internacionales en la formación de ingenieros de software."
    },
     {
        program: "E.P. Ciencia de la Computación",
        status: "En Proceso de Autoevaluación",
        period: "Fase actual",
        description: "El programa se encuentra en la etapa de autoevaluación con miras a su primera acreditación, demostrando su compromiso con la calidad."
    }
]

export default function AcreditacionPage() {
  return (
    <div className="bg-secondary/30">
        <div className="container mx-auto max-w-5xl py-12 px-4 md:px-6 md:py-24">
            <div className="text-center space-y-4 mb-12">
                <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-primary">Procesos de Acreditación</h1>
                <p className="text-muted-foreground md:text-lg">
                    Conoce el estado de la acreditación de nuestros programas de estudio.
                </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
                {accreditationStatus.map((item, index) => (
                    <Card key={index} className="shadow-md hover:shadow-xl transition-shadow duration-300">
                        <CardHeader className="flex flex-row items-center gap-4">
                           <div className="bg-primary/10 p-3 rounded-full">
                             <CheckCircle className="w-6 h-6 text-primary"/>
                           </div>
                           <div>
                             <CardTitle className="font-headline text-xl">{item.program}</CardTitle>
                             <CardDescription className="text-primary font-semibold">{item.status} ({item.period})</CardDescription>
                           </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground text-sm">{item.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    </div>
  );
}
