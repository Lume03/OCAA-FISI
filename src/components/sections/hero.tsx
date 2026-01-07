import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

  return (
    <section className="relative h-[65vh] min-h-[450px] w-full flex items-center justify-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          priority
          className="object-cover object-[center_24%]"
          data-ai-hint={heroImage.imageHint}
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline">
          Oficina de Calidad Académica y Acreditación (OCAA)
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-200">
          Comprometidos con la excelencia educativa y la mejora continua de la
          Facultad de Ingeniería de Sistemas e Informática.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg">
            <Link href="/documentos">Ver Documentos</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-white border-white hover:bg-white hover:text-primary"
          >
            <Link href="/nosotros">Conócenos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
