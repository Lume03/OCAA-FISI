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
      <div className="container flex h-20 items-center">
        {/* LOGO */}
        <Link href="/" className="mr-8 flex items-center">
          {logoImage ? (
            <Image
              src={logoImage.imageUrl}
              alt={logoImage.description}
              width={220}
              height={70}
              className="h-14 w-auto"
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
        <nav className="hidden items-center space-x-8 text-sm font-medium md:flex">
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

        {/* MOBILE */}
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="/"
                  className="flex items-center"
                  onClick={() => setIsSheetOpen(false)}
                >
                  {logoImage ? (
                    <Image
                      src={logoImage.imageUrl}
                      alt={logoImage.description}
                      width={200}
                      height={60}
                      className="h-12 w-auto"
                    />
                  ) : (
                    <span className="font-bold">OCAA FISI</span>
                  )}
                </Link>

                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setIsSheetOpen(false)}
                    className={cn(
                      'transition-colors hover:text-primary',
                      pathname === href
                        ? 'text-primary'
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
      </div>
    </header>
  );
}
