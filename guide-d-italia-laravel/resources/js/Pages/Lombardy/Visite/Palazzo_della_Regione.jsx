import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Palazzo_della_Regione(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
      <main>
        <div className='palazzo_della_regione' style={{ position: 'relative' }}>
            <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Palazzo della Regione</h1>
            <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
            <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Visite</p>
        </div>
        <div className="margin mt-3">
            <p>
                Recandoti sotto l’antica sede del Comune potrai godere di una visione su quanto di meglio ha creato l’architettura medievale: edifici carichi di storia e di bellezza che uniscono la funzionalità a un raffinato senso estetico.
            </p>
            <p>
                Nel corso della sua lunga vita, il Palazzo è stato più volte danneggiato e ricostruito, venendo destinato a diversi usi (divenne perfino un teatro e una biblioteca!).
            </p>
            <p>
                Ora, dopo 800 anni dalla sua costruzione, esibisce la cultura e la storia della città: sia in se stesso, con la sua architettura, sia come sede di importanti mostre d’arte.
            </p>
            <p>
                Il <strong>Palazzo della Ragione</strong> è una tappa che non può mancare nel tuo itinerario alla scoperta di Bergamo!
            </p>
            <p>
                Ti chiedi da dove derivi il suo nome? Ebbene, il <strong>Palazzo della Ragione</strong> nasce come uno dei primi palazzi comunali italiani, fu infatti costruito quasi mille anni fa per ospitare le assemblee pubbliche della città.
            </p>
            <p>
                L’attuale denominazione discende però dall’uso che ne fecero i veneziani durante il loro dominio su Bergamo, ossia quello di sede del tribunale. Qui i giudici ascoltavano i contenziosi nati fra i cittadini e decidevano usando la “ragione” chi, a norma di legge, avesse “ragione”. Un tribunale assai elegante, 
                come dimostrano gli affreschi conservati al suo interno!
            </p>
            <p>
                Ma le sorprese ti attendono anche fuori dal salone e più precisamente nella loggia sottostante. Qui infatti troverai lo gnomone. Questo orologio solare fu costruito più di 200 anni fa (nel 1798) e attraverso un raggio di sole che colpisce una meridiana incisa nel marmo della pavimentazione, segna ancora con 
                precisione il mezzogiorno locale e la data!
            </p>
        </div>
        <div className='margin mb-4'>
            <h3 className='color-subtitle text-center'>Mappa</h3>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d980.4754334650577!2d9.662018254868478!3d45.70390196437788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47814728d2da3f15%3A0x6624510ad148605a!2sPalazzo%20della%20Ragione!5e1!3m2!1sit!2sit!4v1712672261990!5m2!1sit!2sit"
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
