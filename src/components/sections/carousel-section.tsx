'use client';

import React, { useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const carouselImages = PlaceHolderImages.filter((img) => img.id.startsWith('carousel'));

export default function CarouselSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = useCallback(() => {
    stopAutoplay(); // Ensure no multiple intervals are running
    if (!api) return;
    timerRef.current = setInterval(() => {
      api.scrollNext();
    }, 4500);
  }, [api]);

  const stopAutoplay = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!api) return;
    startAutoplay();
    api.on('select', startAutoplay);
    api.on('pointerDown', stopAutoplay);

    return () => {
      stopAutoplay();
      api.off('select', startAutoplay);
      api.off('pointerDown', stopAutoplay);
    };
  }, [api, startAutoplay, stopAutoplay]);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-12 text-center font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Nuestras Actividades
        </h2>
        <div
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
          onFocus={stopAutoplay}
          onBlur={startAutoplay}
          role="region"
          aria-label="Image Carousel"
          className="relative"
        >
          <Carousel setApi={setApi} className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {carouselImages.map((image, index) => (
                <CarouselItem key={index}>
                  <Card className="overflow-hidden shadow-lg">
                    <CardContent className="relative aspect-[3/2] p-0">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        loading="lazy"
                        className="object-cover transition-transform duration-300 hover:scale-105"
                        data-ai-hint={image.imageHint}
                      />
                    </CardContent>
                  </Card>
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
