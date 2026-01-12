'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon in Next.js
const iconUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png';
const iconRetinaUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png';
const shadowUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png';

export default function ContactMap() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        // Cleanup function to avoid memory leaks if needed, 
        // though React-Leaflet handles most of this.
        // We mainly need to ensure global L is configured correctly if we were using it directly.

        // We define custom icon to ensure it loads in production
        const DefaultIcon = L.icon({
            iconUrl,
            iconRetinaUrl,
            shadowUrl,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            tooltipAnchor: [16, -28],
            shadowSize: [41, 41]
        });

        L.Marker.prototype.options.icon = DefaultIcon;
    }, []);

    if (!isMounted) {
        return <div className="w-full h-full bg-muted animate-pulse" />;
    }

    // Coordinates for FISI - UNMSM
    const position: [number, number] = [-12.053383242030383, -77.0856949316101];
    const googleMapsUrl = "https://maps.app.goo.gl/Cb3ZdLfbagNP6MHr9";

    return (
        <MapContainer
            center={position}
            zoom={17}
            scrollWheelZoom={false}
            style={{ height: '100%', width: '100%' }}
            className="z-0"
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Tooltip permanent direction="top" offset={[0, -40]} className="font-sans text-sm font-semibold shadow-md">
                    Facultad de Ingeniería de Sistemas e Informática - UNMSM
                </Tooltip>
                <Popup>
                    <div className="text-center">
                        <h3 className="font-bold mb-2 text-sm">Facultad de Ingeniería de Sistemas e Informática - UNMSM</h3>
                        <a
                            href={googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline text-xs font-semibold"
                        >
                            Ampliar mapa
                        </a>
                    </div>
                </Popup>
            </Marker>
        </MapContainer>
    );
}
