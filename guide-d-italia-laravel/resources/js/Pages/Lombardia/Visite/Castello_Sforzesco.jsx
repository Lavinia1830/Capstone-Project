import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Castello_Sforzesco(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
      <main>
        <div className='castello_sforzesco' style={{ position: 'relative' }}>
          <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Castello Sforzesco</h1>
          <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
          <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Visite</p>
        </div>
        <div className="margin mt-3">
          <p>
            Ai tempi delle città stato italiane, non si poteva mai essere certi che i dignitari stranieri in visita nelle vicinanze non avessero intenzione di approfittarne per attaccare - da qui il gran numero di castelli fortificati. In quanto potente centro economico, Milano aveva molto da 
            proteggere, e di conseguenza costruì il Castello in grande stile e grandi dimensioni perché fosse un segnale chiaramente interpretabile dai malintenzionati. Nei sotterranei del Castello Sforzesco di Milano si fanno dei veri e propri tour guidati nelle segrete di quello che un tempo 
            era un baluardo cittadino.
          </p>
          <h2 className='color-subtitle'>Il Museo del Castello Sforzesco di Milano</h2>
          <p>
            Il complesso museale che si scopre durante la visita al Castello Sforzesco di Milano è stupefacente, con un’offerta artistica variegata da vedere assolutamente durante la visita in città. Da quello di Arte Antica alla Pinacoteca, nel Castello Sforzesco a Milano mostre ed eventi sono 
            il cuore della proposta culturale cittadina, dentro quello che è un vero e proprio simbolo del capoluogo lombardo.
          </p>
        </div>
        <div className='margin mb-4'>
          <h3 className='color-subtitle text-center'>Mappa</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.6555923963465!2d9.17676294103533!3d45.47047993313958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786fcb60ea97b3d%3A0x6556dd66c472c29b!2sCastello%20Sforzesco!5e1!3m2!1sit!2sit!4v1712654766703!5m2!1sit!2sit"
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
