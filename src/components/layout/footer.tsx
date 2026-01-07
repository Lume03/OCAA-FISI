import Link from 'next/link';
import { University } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-secondary/50">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center space-x-2">
            <University className="h-6 w-6 text-primary" />
            <span className="font-bold">OCAA FISI UNMSM</span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} OCAA FISI. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Política de Privacidad
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Términos de Servicio
            </Link>
          </div>
        </div>
        <div className="mt-6 border-t pt-6 text-center text-xs text-muted-foreground">
          <p>Universidad Nacional Mayor de San Marcos, Facultad de Ingeniería de Sistemas e Informática</p>
          <p>Calle Germán Amézaga 375, Lima 15081, Perú</p>
        </div>
      </div>
    </footer>
  );
}
