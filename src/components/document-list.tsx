'use client';

import * as React from 'react';
import { documents, documentCategories } from '@/data/documents';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card } from '@/components/ui/card';
import { Button } from './ui/button';
import Link from 'next/link';
import { FileText, ExternalLink, Search } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';

export default function DocumentList() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [category, setCategory] = React.useState('all');
  const [sortOrder, setSortOrder] = React.useState<'newest' | 'oldest'>('newest');

  const filteredDocuments = React.useMemo(() => {
    return documents
      .filter((doc) => {
        const matchesSearch =
          doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          doc.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = category === 'all' || doc.category === category;
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
      });
  }, [searchTerm, category, sortOrder]);

  return (
    <Card className="shadow-xl">
      <div className="p-4 border-b bg-secondary/30">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="relative flex-grow">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por título o descripción..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Categoría" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas las categorías</SelectItem>
              {documentCategories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={sortOrder} onValueChange={(value) => setSortOrder(value as 'newest' | 'oldest')}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Más recientes</SelectItem>
              <SelectItem value="oldest">Más antiguos</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Título</TableHead>
              <TableHead className="hidden md:table-cell">Categoría</TableHead>
              <TableHead className="hidden lg:table-cell">Fecha</TableHead>
              <TableHead className="text-right">Acción</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredDocuments.length > 0 ? (
              filteredDocuments.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell className="font-medium max-w-[250px] sm:max-w-xs truncate">
                    <p className="font-semibold truncate">{doc.title}</p>
                    <p className="text-xs text-muted-foreground truncate lg:hidden">
                        {format(parseISO(doc.date), "d 'de' MMMM, yyyy", { locale: es })}
                    </p>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">{doc.category}</TableCell>
                  <TableCell className="hidden lg:table-cell">
                    {format(parseISO(doc.date), "d 'de' MMMM, yyyy", { locale: es })}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button asChild variant="ghost" size="sm">
                      <Link href={doc.url} target={doc.type === 'url' ? '_blank' : '_self'} rel="noopener noreferrer">
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
                <TableCell colSpan={4} className="h-24 text-center">
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
