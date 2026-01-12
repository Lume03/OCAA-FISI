'use client';

import * as React from 'react';
import { documents } from '@/lib/documents';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card } from '@/components/ui/card';
import { Button } from './ui/button';
import Link from 'next/link';
import { FileText, ExternalLink, Search } from 'lucide-react';

export default function DocumentList() {
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredDocuments = React.useMemo(() => {
    return documents.filter((doc) =>
      doc.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <Card className="shadow-xl">
      <div className="p-4 border-b bg-secondary/30">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por título..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Título</TableHead>
              <TableHead className="text-right w-[200px]">Acción</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredDocuments.length > 0 ? (
              filteredDocuments.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell className="font-medium">
                    <p className="font-semibold">{doc.title}</p>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button asChild variant="ghost" size="sm">
                      <Link
                        href={doc.type === 'pdf' ? `/documentos/ver/${doc.slug}` : doc.href}
                        target={doc.type === 'url' ? '_blank' : undefined}
                        rel={doc.type === 'url' ? 'noopener noreferrer' : undefined}
                      >
                        {doc.type === 'pdf' ? (
                          <>
                            <FileText className="mr-2 h-4 w-4" />
                            Ver/Descargar
                          </>
                        ) : (
                          <>
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Visitar
                          </>
                        )}
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={2} className="h-24 text-center">
                  No se encontraron documentos.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}
