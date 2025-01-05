import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Piazza_Mercato_delle_scarpe(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
      <main>
        <div className='p_mercato_delle_scarpe' style={{ position: 'relative' }}>
          <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Piazza Mercato delle Scarpe</h1>
          <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
          <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Visite</p>
        </div>
        <div className="margin mt-3">
          <p>
            Luogo anticamente dedicato agli scambi e al commercio, è situato nel punto di incontro delle allora più importanti vie di accesso alla Città Alta. <br/>
            Secondo la tradizione deve il proprio nome alla antica presenza della Corporazione dei Calzolai, che aveva sede nel palazzo trecentesco di cui si conserva la facciata, oggi stazione della funicolare entrata in servizio nel 1887. Nella città medievale artigiani e commercianti erano organizzati 
            in corporazioni, la cui attività era regolata da statuti approvati dal Comune, alcuni ancora oggi conservati nella Civica Biblioteca.
          </p>
        </div>
        <div className='margin mb-4'>
          <h3 className='color-subtitle text-center'>Mappa</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d980.4921327303148!2d9.664539528559853!3d45.702949793800336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478151159fdc33b7%3A0x522045d9fe1c18a9!2sPiazza%20Mercato%20delle%20Scarpe!5e1!3m2!1sit!2sit!4v1712670413761!5m2!1sit!2sit"
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
