import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Museo_Nazionale_della_scienza_e_della_tecnologia_Leonrdo_da_Vinci(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
      <main>
        <div className='mn_scienza_e_tecnologia_ldv' style={{ position: 'relative' }}>
          <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Museo Nazionale della scienza e della tecnologia 'Leonardo da Vinci</h1>
          <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
          <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Visite</p>
        </div>
        <div className="margin mt-3">
          <p>
            I bambini di tutte le età rimarranno a bocca aperta davanti alle più grandi invenzioni di tutti i tempi. Al piano inferiore ci sono spettrali fucine medievali, mentre al piano superiore robot e modellini testano i progetti più bizzarri di Leonardo - le ali inamidate non volano, ma il congegno di raffreddamento 
            che somiglia a un formichiere funziona davvero. All’esterno troverete una stazione ferroviaria piena di locomotive a vapore e un sommergibile degli anni ’40 che è possibile visitare prenotando in anticipo. Consultate il sito <a href="https://www.museoscienza.org/it/leonardo" className='text-decoration-none 
            color_link'>www.museoscienza.org/leonardo</a> per le ’ultime news’ sempre interessanti.
          </p>
        </div>
        <div className='margin mb-4'>
          <h3 className='color-subtitle text-center'>Mappa</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1171.0073429729612!2d9.169679595985636!3d45.46276384178405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c159c26cee9b%3A0x72458fca19e5eb92!2sMuseo%20Nazionale%20Scienza%20e%20Tecnologia%20Leonardo%20da%20Vinci!5e1!3m2!1sit!2sit!4v1712656370694!5m2!1sit!2sit"
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
