import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Museo_teatrale_alla_scala(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
      <main>
        <div className='m_teatrale_alla_scala' style={{ position: 'relative' }}>
          <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Museo Tratrale alla Scala</h1>
          <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
          <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Visite</p>
        </div>
        <div className="margin mt-3">
          <p>
            ’Mani incolte non mi tocchino’, queste parole da vera diva, sono iscritte su una <i>spinetta</i> (piano) del Settecento. Costumi da arlecchino e carte da gioco lasciate alla Scala sono una testimonianza di secoli di teatro musicale milanese. Potrete vedere i ritratti di Rossini che discute con i 
            suoi mecenati, di Verdi che sembra adombrato dalle critiche discordi, e della Callas che, come una dea, trionfa su ogni critica.
          </p>
        </div>
        <div className='margin mb-4'>
          <h3 className='color-subtitle text-center'>Mappa</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1969.2408101509866!2d9.187795596523824!3d45.46708473771093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786e9fcdf159e89%3A0x74930dbeb2a87779!2sMuseo%20Teatrale%20alla%20Scala!5e1!3m2!1sit!2sit!4v1712657591950!5m2!1sit!2sit"
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
