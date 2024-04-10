import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Museo_civico_di_storia_naturale(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
      <main>
        <div className='mc_di_storia_naturale' style={{ position: 'relative' }}>
          <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Museo civico di storia naturale</h1>
          <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
          <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Visite</p>
        </div>
        <div className="margin mt-3">
          <p>
            Basta una parola per far tornare il sorriso sulle labbra di bambini annoiati da negozi e monumenti: dinosauri! E nel museo più antico d’Italia ce ne sono esposti ben sette, insieme a uova di dinosauro, fossili e pietre preziose. Al piano di sopra, i diorami vecchio stile presentano creature imbalsamate, 
            insieme a molte informazioni interessanti sulla tutela della natura e sulle specie a rischio di estinzione.
          </p>
        </div>
        <div className='margin mb-4'>
          <h3 className='color-subtitle text-center'>Mappa</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.5206968027273!2d9.199802676601!3d45.47277573286598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6b9112aac77%3A0x97f9d21481559097!2sMuseo%20Civico%20di%20Storia%20Naturale%20di%20Milano!5e1!3m2!1sit!2sit!4v1712656619029!5m2!1sit!2sit"
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
