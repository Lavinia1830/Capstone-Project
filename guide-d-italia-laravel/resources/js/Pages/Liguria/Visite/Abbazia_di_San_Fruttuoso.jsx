import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Image } from 'react-bootstrap';
import Abbazia_di_san_fruttuoso_Interno from '../../../../assets/Liguria/Abbazia_di_san_fruttuoso_Interno_Genova_Liguria.jpg';
import { Head } from '@inertiajs/react';


export default function Abbazia_di_San_Fruttuoso(props) {
  return (
    <>
      <Head title='Abbazia di San Fruttuoso'/>
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
              L’<strong>Abbazia di San Fruttuoso</strong> collocata in <b>riva al mare</b> e circondata dal <b>verde lussureggiante dei boschi</b> è una delle immagini 
              più celebri a chi pensa alle bellezze della Liguria. Questo luogo, grazie alla <b>difficoltà di accesso</b>, ha mantenuto nei secoli tutto il suo 
              fascino <b>selvaggio ed incantevole</b>.
            </p>
            <p>
              Questo complesso monastico fu costruita da <b>monaci greci nel X secolo</b>, ma la struttura venne modificata all’inizio dell’<b>XI sec</b>. per volontà 
              di <b>Adelaide di Borgogna</b>, vedova dell’imperatore <b>Ottone I</b>.
            </p>
            <p>
              L’Abbazia venne ristrutturata, donata al <b>FAI</b> e aperta al pubblico nel <b>1983</b>.
            </p>
            
            <p>
              Passò quindi ai <b>monaci Benettini</b> e, grazie alla famiglia genovese dei <b>Doria</b>, fu più volte ampliata: nel <b>XIII secolo</b> vi fu aggiunto 
              il corpo edilizio con il loggiato verso il mare, nel <b>XVI</b> fu ricostruito il chiostro superiore, mentre nel <b>1562</b> fu eretto il <b>torrione 
              d’avvistamento</b>. Nel <b>1983</b>, i <b>Doria Pamphili</b> donarono gli edifici e i terreni al <b>FAI</b>, che oggi li conserva e permette al pubblico 
              di visitarli.
            </p>
            <p>
              Tra gli ambienti più significativi ci sono la <b>chiesa medievale</b> e la <b>chiesa «pubblica»</b>, che fu ricavata sopraelevando l’edificio medievale 
              dopo l’abbandono dell’abbazia da parte dei monaci. Notevoli sono anche l’<b>abside</b>, ricavata a ridosso della roccia, la <b>cupola decorata con motivi 
              bizantini</b> e l’<b>antica torre ottagonale</b>.
            </p>
            <p>
              Nella parte inferiore del chiostro si trova il <b>sepolcro della famiglia Doria</b>, con <b>sette tombe</b> realizzate in <b>marmo bianco</b> e <b>pietra 
              grigia</b>.
            </p>
            <Image src={Abbazia_di_san_fruttuoso_Interno} className='mx-auto' alt="Interno dell'Abbazia di San Fruttuoso"/>
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
    </>
    
  )
}
