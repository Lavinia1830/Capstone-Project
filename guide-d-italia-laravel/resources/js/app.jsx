import './bootstrap';
import '../css/app.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n';  // Importa la configurazione di i18next
import { I18nextProvider } from 'react-i18next'; // Importa il provider di i18next
import i18n from 'i18next';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { InertiaApp } from '@inertiajs/inertia-react';


createInertiaApp({
    title: (title) => `${title}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});


const app = document.getElementById('app');

const page = JSON.parse(app.dataset.page);


ReactDOM.createRoot(app).render(
    <I18nextProvider i18n={i18n}> {/* Aggiungi il provider */}
      <InertiaApp
        initialPage={page}
        resolveComponent={(name) =>
          import(`./Pages/${name}`).then((module) => module.default)
        }
      />
    </I18nextProvider>
  );

  export default app;
