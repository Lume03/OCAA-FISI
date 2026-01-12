import { documents } from '@/lib/documents';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { notFound } from 'next/navigation';

interface Props {
    params: Promise<{ slug: string }>;
}

export default async function VerDocumentoPage(props: Props) {
    const params = await props.params;
    const document = documents.find((doc) => doc.slug === params.slug && doc.type === 'pdf');

    if (!document) {
        notFound();
    }

    return (
        <div className="flex flex-col h-[calc(100vh-4rem)]">
            <div className="container mx-auto max-w-7xl p-4 flex items-center justify-between border-b bg-background">
                <div className="flex items-center gap-4">
                    <Button asChild variant="outline" size="sm">
                        <Link href="/documentos">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Volver
                        </Link>
                    </Button>
                    <h1 className="font-semibold text-lg md:text-xl truncate max-w-[200px] md:max-w-2xl">
                        {document.title}
                    </h1>
                </div>
                <Button asChild variant="ghost" size="sm">
                    <Link href={document.href} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        <span className="hidden sm:inline">Abrir en nueva pestaña</span>
                        <span className="sm:hidden">Abrir</span>
                    </Link>
                </Button>
            </div>
            <div className="flex-grow bg-secondary/20 p-4">
                <div className="container mx-auto max-w-7xl h-full shadow-2xl rounded-lg overflow-hidden bg-white">
                    <iframe
                        src={document.href}
                        className="w-full h-full border-none"
                        title={document.title}
                    />
                </div>
            </div>
        </div>
    );
}
