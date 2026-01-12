'use client';

import dynamic from 'next/dynamic';

const ContactMap = dynamic(() => import('./contact-map'), {
    ssr: false,
    loading: () => <div className="w-full h-full bg-muted animate-pulse rounded-lg" />
});

export default function ContactMapWrapper() {
    return <ContactMap />;
}
