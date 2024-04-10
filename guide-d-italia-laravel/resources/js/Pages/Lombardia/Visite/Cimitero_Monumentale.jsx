import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Cimitero_Monumentale(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
      <main>
        <div className='cimitero_monumentale' style={{ position: 'relative' }}>
          <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Cimitero Monumentale</h1>
          <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
          <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Visite</p>
        </div>
        <div className="margin mt-3">
          <p>
            Lo straordinario ingresso bianco e nero è un’opera neorinascimentale del 1866, che solleva lo spirito e lo status dei personaggi famosi sepolti in questi mausolei decorati da splendide sculture, tra le quali spicca il bellissimo bronzo di Giannino Castiglioni ispirato all’ <i>Ultima cena</i>, che orna la tomba del magnate 
            dei liquori David Campari. Procuratevi un opuscolo nel cortile per orientarvi nella galleria di tombe.
          </p>
        </div>
        <div className='margin mb-4'>
          <h3 className='color-subtitle text-center'>Mappa</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.7173679786483!2d9.175945726601569!3d45.48644578195361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c1307423a0f3%3A0x5507e2cf7ef01f94!2sCimitero%20Monumentale!5e1!3m2!1sit!2sit!4v1712656883169!5m2!1sit!2sit"
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
