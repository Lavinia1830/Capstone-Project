import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Fondazione_Prada(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
      <main>
        <div className='fondazione_prada' style={{ position: 'relative' }}>
          <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Fondazione Prada</h1>
          <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
          <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Visite</p>
        </div>
        <div className="margin mt-3">
          <p>
            Abbastanza grande da contenere il modello di un’orca a grandezza naturale realizzato da Tom Sachs con pezzi di polistirolo bianco di riciclo, lo <b>Spazio Prada</b> ospita due o tre grandi mostre monografiche l’anno. La mostra dell’artista americano ci ha punti nel vivo con fragili giganti pericolosamente 
            vicini ad arnesi da lavoro e una torre di controllo abitabile da vero paranoico, con monitor, radar, fucili, sigarette e vodka. La <strong>Fondazione Prada a Milano</strong>  è uno dei punti nevralgici della città, polo che da diversi anni ormai attira migliaia di persone curiose di scoprire il capoluogo 
            meneghino dal punto di vista della sua incredibile passione per l’architettura.
          </p>
        </div>
        <div className='margin mb-4'>
          <h3 className='color-subtitle text-center'>Mappa</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.188544115737!2d9.202725176599785!3d45.444384134760156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c69ef804a0d7%3A0x1545d69fc021179f!2sFondazione%20Prada!5e1!3m2!1sit!2sit!4v1712657841037!5m2!1sit!2sit"
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
