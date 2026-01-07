'use client';

import React from 'react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const carouselImages = PlaceHolderImages.filter((img) => img.id.startsWith('carousel'));
// Duplicamos las imágenes para asegurar que el loop infinito visual (seamless) funcione correctamente
// incluso en pantallas grandes donde se muestran múltiples slides a la vez.
const allCarouselImages = [...carouselImages, ...carouselImages];

function CarouselCard({ image }: { image: (typeof PlaceHolderImages)[number] }) {
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <Card className="overflow-hidden shadow-lg">
      <CardContent className="relative aspect-video p-0">
        {isLoading && (
          <Skeleton className="absolute inset-0 z-10 h-full w-full animate-pulse bg-muted" />
        )}
        <Image
          src={image.imageUrl}
          alt={image.description}
          fill
          loading="lazy"
          onLoad={() => setIsLoading(false)}
          className={cn(
            'object-cover transition-transform duration-300 hover:scale-105',
            isLoading ? 'scale-105 blur-sm' : 'scale-100 blur-0'
          )}
          data-ai-hint={image.imageHint}
        />
      </CardContent>
    </Card>
  );
}

export default function CarouselSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-12 text-center font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Nuestras Actividades
        </h2>
        <div
          role="region"
          aria-label="Image Carousel"
          className="relative"
        >
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{
              loop: true,
              align: 'start',
            }}
          >
            <CarouselContent className="-ml-4">
              {allCarouselImages.map((image, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <CarouselCard image={image} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 top-1/2 z-10 -translate-y-1/2 sm:left-4" />
            <CarouselNext className="absolute right-2 top-1/2 z-10 -translate-y-1/2 sm:right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
