import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Cenacolo_Vinciano(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
      <main>
        <div className='cenacolo_vinciano' style={{ position: 'relative' }}>
          <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Cenacolo Vinciano</h1>
          <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
          <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Visite</p>
        </div>
        <div className="margin mt-3">
          <p>
            Preparatevi a strizzare parecchio gli occhi perché, nonostante gli sforzi di restauro, il Cenacolo di Milano è un capolavoro che si sta gradualmente dissolvendo. Nel 1495, Ludovico Sforza commissionò a Leonardo da Vinci l’affresco delle pareti di questo 
            convento. Leonardo utilizzò per la sua iconica <i>Ultima cena</i>, a Milano un vero simbolo.
          </p>
          <p>
            Il lavoro dei restauratori, continuo e dedicato, fa sì che la visita al Cenacolo e agli altri tesori custoditi nel complesso milanese sia un’esperienza unica e insostituibile.
          </p>
          <h2 className='color-subtitle'>Come visitare il Cenacolo a Milano</h2>
          <p>
           La prenotazione della visita è obbligatoria. Basta inviare una mail a cenacologruppi@adartem.it per accedere. La visita al Cenacolo di Milano ha un costo di 15 euro per gli adulti e 2 euro per i giovani dai 18 ai 25 anni.
          </p>
        </div>
        <div className='margin mb-4'>
          <h3 className='color-subtitle text-center'>Mappa</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d827.9781271338791!2d9.17002248119001!3d45.46610720491972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c15a4fc7a8ef%3A0x6db8f89b95fdff86!2sMuseo%20del%20Cenacolo%20Vinciano!5e1!3m2!1sit!2sit!4v1712655784581!5m2!1sit!2sit"
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
