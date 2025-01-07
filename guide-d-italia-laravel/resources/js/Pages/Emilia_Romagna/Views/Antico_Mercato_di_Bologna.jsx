import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';

export default function Antico_Mercato_di_Bologna(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
      <main>
        <div className='antico_mercato_del_quadrilatero' style={{ position: 'relative' }}>
          <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Antico mercato del quadrilatero di Bologna</h1>
          <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
          <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
        </div>
        <div className="margin mt-3">
          <h2 className="color-subtitle">Dove la tradizione artigianale e commerciale prende vita in centro Bologna</h2>
            <p>
              Il Quadrilatero è un’area posta <b>nel cuore del centro storico di</b> <Link href='/destinazioni/bologna' className='text-decoration-none color_link'>Bologna</Link>. Il quartiere si articola all’interno di un quadrato composto da Via Rizzoli, Via dell’Archiginnasio, Via Farini e Via Castiglione e si sviluppa nella 
              zona che va da Piazza Maggiore alla Torre degli Asinelli e della Garisenda.
            </p>
            <p>
              In questa zona, tra i vicoli stretti, è collocato il <b>mercato di origine medievale</b>. Si trovano inoltre <b>attività artigianali e commerciali specializzate</b> e di lunga tradizione; botteghe nelle quali, di generazione in generazione, le famiglie si sono tramandate il mestiere o di negozi nei quali sono stati 
              conservati gli arredi e l’architettura storica. 
            </p>
        </div>
        <div className='margin mb-4'>
          <h3 className='color-subtitle text-center'>Mappa</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1684.2647996312812!2d11.34553546709632!3d44.494289633167625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd4be6040e0ab%3A0x2cff6dcbebf82c32!2sIl%20Quadrilatero!5e1!3m2!1sit!2sit!4v1713001266079!5m2!1sit!2sit"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
            className='mx-auto mappa'
          ></iframe>
        </div>
      </main>
      <Footer/>
    </AuthenticatedLayout>
  )
}
