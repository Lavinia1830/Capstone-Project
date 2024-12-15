import './bootstrap'; 
import '../css/app.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import './i18n';  // Configura i18next
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Configurazione dell'app Inertia con i18next
createInertiaApp({
    title: (title) => `${title}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        // Wrappa l'app Inertia con I18nextProvider
        root.render(
            <I18nextProvider i18n={i18n}>
                <App {...props} />
            </I18nextProvider>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
