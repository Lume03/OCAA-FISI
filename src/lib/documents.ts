export type DocumentItem = {
    id: string;
    title: string;
    type: 'pdf' | 'url';
    href: string; // URL externa o ruta pública del PDF (/pdf/...)
    slug?: string; // Para la ruta interna /documentos/ver/[slug]
    fileName?: string; // Nombre del archivo real en /public/pdf/
};

export const documents: DocumentItem[] = [
    // PDFs Locales
    {
        id: '1',
        title: 'Alcance del Sistema de Gestión de Calidad (SGC)',
        type: 'pdf',
        href: '/pdf/ALCANCE SGC.pdf',
        slug: 'alcance-sgc',
        fileName: 'ALCANCE SGC.pdf',
    },
    {
        id: '2',
        title: 'Certificado ISO 9001:2015',
        type: 'pdf',
        href: '/pdf/CERTIFICADO ISO.pdf',
        slug: 'certificado-iso',
        fileName: 'CERTIFICADO ISO.pdf',
    },
    {
        id: '3',
        title: 'Mapa de Procesos',
        type: 'pdf',
        href: '/pdf/MAPA DE PROCESOS.pdf',
        slug: 'mapa-de-procesos',
        fileName: 'MAPA DE PROCESOS.pdf',
    },
    {
        id: '4',
        title: 'Política del Sistema de Gestión de Calidad',
        type: 'pdf',
        href: '/pdf/POLITICA DE SGC.pdf',
        slug: 'politica-de-sgc',
        fileName: 'POLITICA DE SGC.pdf',
    },
    // Enlaces Externos
    {
        id: '5',
        title: 'Política de Educación con Calidad de San Marcos',
        type: 'url',
        href: 'https://occaa.unmsm.edu.pe/politica',
    },
    {
        id: '6',
        title: 'La Acreditación',
        type: 'url',
        href: 'https://occaa.unmsm.edu.pe/acreditacion',
    },
    {
        id: '7',
        title: 'Documentos de Acreditación',
        type: 'url',
        href: 'https://occaa.unmsm.edu.pe/documentos-acreditacion',
    },
    {
        id: '8',
        title: 'Documentos Institucionales',
        type: 'url',
        href: 'https://occaa.unmsm.edu.pe/documentos-institucionales',
    },
];
