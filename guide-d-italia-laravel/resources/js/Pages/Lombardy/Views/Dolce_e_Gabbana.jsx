import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Dolce_e_Gabbana(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
      <main>
        <div className='dolce_e_gabbana' style={{ position: 'relative' }}>
          <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Dolce & Gabbana</h1>
          <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
          <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Visite</p>
        </div>
        <div className="margin mt-3">
          <p>
            I fanatici della moda con soldi da buttare non si possono perdere l’enorme emporio di D&G - dove il glamour incontra il sex appeal. I capi delle griffatissime collezioni d’alta moda per uomo e donna e della meno formale linea D&G sono sparsi nei diversi - ma tutti costosissimi - negozi. 
            La sede di Corso Venezia vende la collezione di prêt-à-porter D&G.
          </p>
        </div>
        <div className='margin mb-4'>
          <h3 className='color-subtitle text-center'>Mappa</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1655.8824513853485!2d9.197465418544128!3d45.468619504086604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6b0991bb1ef%3A0xf8580313f565906c!2sDolce%20%26%20Gabbana!5e1!3m2!1sit!2sit!4v1712657269304!5m2!1sit!2sit"
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
