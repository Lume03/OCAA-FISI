export type Document = {
  id: string;
  title: string;
  category: 'Actas' | 'Informes' | 'Resoluciones' | 'Otros';
  date: string;
  description: string;
  type: 'pdf' | 'url';
  url: string;
};

export const documents: Document[] = [
  {
    id: 'doc-001',
    title: 'Informe de Autoevaluación 2023 - Ing. de Sistemas',
    category: 'Informes',
    date: '2023-11-20',
    description: 'Informe final del proceso de autoevaluación del programa de Ingeniería de Sistemas.',
    type: 'pdf',
    url: '/docs/informe-autoevaluacion-2023-sistemas.pdf',
  },
  {
    id: 'doc-002',
    title: 'Resolución de Creación del Comité de Calidad',
    category: 'Resoluciones',
    date: '2022-03-15',
    description: 'Resolución decanal que establece la conformación del comité de calidad de la FISI.',
    type: 'pdf',
    url: '/docs/resolucion-comite-calidad.pdf',
  },
  {
    id: 'doc-003',
    title: 'Acta de Reunión de Sensibilización - Mayo 2024',
    category: 'Actas',
    date: '2024-05-10',
    description: 'Acta de la reunión de sensibilización sobre el nuevo modelo de acreditación.',
    type: 'pdf',
    url: '/docs/acta-reunion-mayo-2024.pdf',
  },
  {
    id: 'doc-004',
    title: 'Modelo de Calidad ICACIT',
    category: 'Otros',
    date: '2023-01-30',
    description: 'Enlace al modelo de calidad oficial de ICACIT para programas de ingeniería.',
    type: 'url',
    url: 'https://www.icacit.org.pe/portal/acreditacion/modelo-de-acreditacion',
  },
  {
    id: 'doc-005',
    title: 'Informe de Autoevaluación 2023 - Ing. de Software',
    category: 'Informes',
    date: '2023-11-22',
    description: 'Informe final del proceso de autoevaluación del programa de Ingeniería de Software.',
    type: 'pdf',
    url: '/docs/informe-autoevaluacion-2023-software.pdf',
  },
  {
    id: 'doc-006',
    title: 'Guía de Procedimientos OCAA',
    category: 'Otros',
    date: '2024-02-01',
    description: 'Manual de procedimientos y funciones de la Oficina de Calidad Académica y Acreditación.',
    type: 'pdf',
    url: '/docs/guia-procedimientos-ocaa.pdf',
  },
   {
    id: 'doc-007',
    title: 'Acta de Aprobación de Plan de Mejoras',
    category: 'Actas',
    date: '2024-06-05',
    description: 'Acta de sesión donde se aprueba el plan de mejoras para el periodo 2024-2025.',
    type: 'pdf',
    url: '/docs/acta-plan-mejoras-2024.pdf',
  },
  {
    id: 'doc-008',
    title: 'Modelo de Calidad SINEACE',
    category: 'Otros',
    date: '2022-09-01',
    description: 'Enlace al modelo de acreditación para programas de estudios de educación superior universitaria.',
    type: 'url',
    url: 'https://www.sineace.gob.pe/acreditacion-de-programas/',
  }
];

export const documentCategories = ['Actas', 'Informes', 'Resoluciones', 'Otros'] as const;
