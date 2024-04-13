import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Image } from 'react-bootstrap';
import Abbazia_di_san_fruttuoso_Interno from '../../../../assets/Liguria/Abbazia_di_san_fruttuoso_Interno_Genova_Liguria.jpg';


export default function Abbazia_di_San_Fruttuoso(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
      <main>
        <div className='abbazia_di_san_fruttuoso' style={{ position: 'relative' }}>
          <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Abbazia di San Fruttuoso</h1>
          <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
          <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
        </div>
        <div className="margin mt-3">
          <p>
            L’Abbazia di San Fruttuoso collocata in riva al mare e circondata dal verde lussureggiante dei boschi è una delle immagini più celebri a chi pensa alle bellezze della Liguria. Questo luogo, grazie alla difficoltà di accesso, ha mantenuto nei secoli tutto il suo fascino selvaggio ed incantevole.
          </p>
          <p>
            Questo complesso monastico fu costruita da monaci greci nel X secolo, ma la struttura venne modificata all’inizio dell’ XI sec. per volontà di Adelaide di Borgogna, vedova dell’imperatore Ottone I.
          </p>
          <p>
            L’Abbazia venne ristrutturata, donata al FAI e aperta al pubblico nel 1983.
          </p>
          
          <p>
            Passò quindi ai monaci Benettini e, grazie alla famiglia genovese dei Doria, fu più volte ampliata: nel XIII secolo vi fu aggiunto il corpo edilizio con il loggiato verso il mare, nel XVI fu ricostruito il chiostro superiore, mentre nel 1562 fu eretto il torrione d’avvistamento. Nel 1983, i Doria Pamphili 
            donarono gli edifici e i terreni al FAI, che oggi li conserva e permette al pubblico di visitarli.
          </p>
          <p>
            Tra gli ambienti più significativi ci sono la chiesa medievale e la chiesa «pubblica», che fu ricavata sopraelevando l’edificio medievale dopo l’abbandono dell’abbazia da parte dei monaci. Notevoli sono anche l’abside, ricavata a ridosso della roccia, la cupola decorata con motivi bizantini e l’antica torre 
            ottagonale.
          </p>
          <p>
            Nella parte inferiore del chiostro si trova il sepolcro della famiglia Doria, con sette tombe realizzate in marmo bianco e pietra grigia.
          </p>
          <Image src={Abbazia_di_san_fruttuoso_Interno} className='mx-auto'/>
        </div>
        <div className='margin mb-4'>
            <h3 className='color-subtitle text-center'>Mappa</h3>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2009.0335559125144!2d9.173412284604625!3d44.31658379484478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d36012a97dffb9%3A0x4582f9e3a82bd4da!2sAbbazia%20di%20San%20Fruttuoso!5e1!3m2!1sit!2sit!4v1712837095918!5m2!1sit!2sit"
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
