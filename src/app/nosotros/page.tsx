import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function NosotrosPage() {
  const chiefImage = PlaceHolderImages.find((img) => img.id === "chief-profile");
  const organigramImage = PlaceHolderImages.find((img) => img.id === "organigram");

  return (
    <div className="container mx-auto max-w-6xl py-12 px-4 md:px-6 md:py-24 space-y-24">
      {/* SECCIÓN JEFE */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl bg-muted group">
            <Image
              src={chiefImage?.imageUrl || "/images/placeholder.jpg"}
              alt={chiefImage?.description || "Foto del Jefe"}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-primary font-headline">
              Mg. Norberto Ullises Román Concha
            </h2>
            <p className="text-muted-foreground font-medium">
              Jefe de la Oficina de Calidad Académica y Acreditación (OCAA)
            </p>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6 text-lg leading-relaxed text-muted-foreground text-justify">
          <p>
            La Oficina de Calidad Académica y Acreditación (OCAA) de la Facultad de Ingeniería de Sistemas e Informática (FISI) de la Universidad Nacional Mayor de San Marcos es la unidad orgánica de asesoría del Decanato, responsable de promover y asegurar la mejora continua de la calidad académica en la Facultad, en concordancia con la política de calidad universitaria de la UNMSM.
          </p>
          <p>
            En un contexto de creciente exigencia y competitividad en la formación profesional, la OCAA orienta sus acciones al fortalecimiento de los servicios académicos, de investigación, de extensión universitaria y de responsabilidad social, en beneficio de los estudiantes, docentes y demás grupos de interés.
          </p>
          <p>
            Entre sus funciones principales se encuentran la planificación, conducción y evaluación de los procesos de autoevaluación y acreditación de los programas de pregrado y posgrado de la FISI, aplicando la estrategia de evaluación–planeación–acción, y trabajando de manera articulada con la Oficina Central de Calidad Académica y Acreditación (OCCAA), que supervisa y realiza el seguimiento de dichos procesos a nivel institucional.
          </p>
        </div>
      </section>

      <Separator />

      {/* MISIÓN Y VISIÓN */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-primary/10 overflow-hidden group">
          <div className="h-2 w-full bg-primary/80 group-hover:bg-primary transition-colors" />
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center font-headline group-hover:text-primary transition-colors">
              Misión
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center text-muted-foreground leading-relaxed">
            <p>
              Promover, conducir y fortalecer la cultura de calidad en la Facultad de Ingeniería de Sistemas e Informática de la Universidad Nacional Mayor de San Marcos, mediante la planificación, ejecución y evaluación de los procesos de autoevaluación y acreditación de sus programas académicos, en concordancia con la política de calidad universitaria, contribuyendo a la mejora continua de la formación profesional, la investigación, la extensión universitaria y la responsabilidad social.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-primary/10 overflow-hidden group">
          <div className="h-2 w-full bg-primary/80 group-hover:bg-primary transition-colors" />
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center font-headline group-hover:text-primary transition-colors">
              Visión
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center text-muted-foreground leading-relaxed">
            <p>
              Ser una oficina líder en aseguramiento de la calidad académica a nivel de la Universidad Nacional Mayor de San Marcos, reconocida por su contribución al logro y sostenibilidad de la acreditación de los programas académicos de la Facultad de Ingeniería de Sistemas e Informática, así como por la consolidación de una gestión académica orientada a la excelencia, la innovación y el cumplimiento de estándares nacionales e internacionales.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* ORGANIGRAMA */}
      <section className="space-y-8 text-center">
        <h2 className="text-4xl font-bold font-headline tracking-tight">Organigrama</h2>
        <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-xl flex items-center justify-center overflow-hidden hover:shadow-lg transition-shadow">
          <Image
            src={organigramImage?.imageUrl || "/images/placeholder-organigram.jpg"}
            alt={organigramImage?.description || "Organigrama"}
            fill
            className="object-contain"
          />
        </div>
      </section>
    </div>
  );
}

