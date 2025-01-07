import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Castello_di_Brescia(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
      <main>
        <div className='castello_di_brescia' style={{ position: 'relative' }}>
          <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Castello di Brescia</h1>
          <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
          <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Visite</p>
        </div>
        <div className="margin mt-3">
          <p>
            Il <strong>Castello di Brescia</strong> è una fortezza medievale ottimamente conservata da cui godere di una splendida vista panoramica sulla città. Situato sul colle Cidneo, un’altura in prossimità del centro storico, è raggiungibile sia a piedi sia in auto. Secondo complesso fortificato più grande d’Europa, è stato 
            testimone del periodo comunale e della dominazione viscontea. Ammirate il suo Mastio, la possente Torre dei Prigionieri, i massicci bastioni e la Torre Mirabella, ultima memoria della chiesa di Santo Stefano in Arce.
          </p>
          <p>
            Superato il fossato, al suo interno ospita il <b>Museo delle Armi “Luigi Marzoli”</b>, una delle più ampie collezioni europee di armi ed armature antiche. L’edificio accoglie anche il primo esempio di monumento ferroviario in Italia, la locomotiva “Numero 1” che un tempo percorreva la tratta ferroviaria Brescia-Edolo. 
            Il Castello è stato inoltre il primo Osservatorio astronomico pubblico d’Italia: il Bastione San Marco, dove è collocato, è tappa obbligata per tutti gli appassionati di astronomia.
          </p>
          <p>
            Il complesso conta molti percorsi sotterranei, compresi i magazzini dell’olio, le antiche riserve d’acqua e la Strada del Soccorso, antica via di fuga. Sono tutti visitabili grazie al calendario di escursioni proposto dall’<b>Associazione Speleologica Bresciana</b>.
          </p>
          <p>
            Se vi trovate in città il primo weekend di giugno, potrete assistere al <b>Festival medievale “Federico II e l’Assedio di Brescia”</b> che rievoca la strenua resistenza della città contro il nipote del Barbarossa.
          </p>
        </div>
        <div className='margin mb-4'>
          <h3 className='color-subtitle text-center'>Mappa</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6808.742727411142!2d10.219982469558843!3d45.541918566296374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781763faa051585%3A0xf7c65b90f8563cf4!2sCastello%20di%20Brescia!5e1!3m2!1sit!2sit!4v1712659288046!5m2!1sit!2sit"
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
