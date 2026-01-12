'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, University } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/acreditacion', label: 'Acreditación' },
  { href: '/documentos', label: 'Documentos' },
  { href: '/contacto', label: 'Contacto' },
];

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const pathname = usePathname();
  const logoImage = PlaceHolderImages.find((img) => img.id === 'logo');

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-20 items-center justify-between md:justify-start">
        {/* MOBILE TRIGGER */}
        <div className="flex items-center md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-transparent">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menú</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="w-[300px] sm:w-[400px] pr-0">
              <div className="px-7">
                <Link
                  href="/"
                  className="flex items-center mb-8"
                  onClick={() => setIsSheetOpen(false)}
                >
                  {logoImage ? (
                    <Image
                      src={logoImage.imageUrl}
                      alt={logoImage.description}
                      width={200}
                      height={60}
                      className="h-10 w-auto"
                    />
                  ) : (
                    <span className="font-bold text-lg">OCAA FISI</span>
                  )}
                </Link>
              </div>
              <nav className="flex flex-col gap-4 px-7">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setIsSheetOpen(false)}
                    className={cn(
                      'block py-2 text-lg font-medium transition-colors hover:text-primary border-b border-border/40 last:border-0',
                      pathname === href
                        ? 'text-primary font-bold'
                        : 'text-muted-foreground'
                    )}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* LOGO */}
        <Link href="/" className="flex items-center md:mr-8 ml-4 md:ml-0">
          {logoImage ? (
            <Image
              src={logoImage.imageUrl}
              alt={logoImage.description}
              width={220}
              height={70}
              className="h-12 w-auto md:h-14"
              priority
            />
          ) : (
            <>
              <University className="h-8 w-8 text-primary" />
              <span className="ml-2 hidden font-bold sm:inline-block">
                OCAA FISI
              </span>
            </>
          )}
        </Link>

        {/* NAV DESKTOP */}
        <nav className="hidden items-center space-x-8 text-sm font-medium md:flex ml-auto">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'inline-block px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105 hover:bg-primary hover:text-primary-foreground',
                pathname === href
                  ? 'bg-primary text-primary-foreground'
                  : 'text-foreground/80'
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
