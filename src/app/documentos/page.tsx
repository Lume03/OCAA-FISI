import DocumentList from "@/components/document-list";

export default function DocumentosPage() {
  return (
    <div className="bg-secondary/30 min-h-[calc(100vh-4rem)]">
      <div className="container mx-auto max-w-6xl py-12 px-4 md:px-6 md:py-16">
        <div className="text-center space-y-3 mb-12">
          <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            Repositorio de Documentos
          </h1>
          <p className="text-muted-foreground md:text-lg max-w-3xl mx-auto">
            Encuentra actas, informes, resoluciones y otros documentos relevantes de los procesos de calidad y acreditación.
          </p>
        </div>
        <DocumentList />
      </div>
    </div>
  );
}
