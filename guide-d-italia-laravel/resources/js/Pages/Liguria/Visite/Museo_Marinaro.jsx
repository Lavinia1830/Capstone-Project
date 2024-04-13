import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Museo_Marinaro(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
      <main>
        <div className='museo_marinaro' style={{ position: 'relative' }}>
          <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Museo Marinaro</h1>
          <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
          <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
        </div>
        <div className="margin mt-3">
          <p>
            Il <strong>Museo Marinaro Gio Bono Ferrari</strong> ospita nella sua sede circa duemila reperti, disposti su due grandi sale sullo stesso piano e collegate tra loro in modo da costituire un’unica area espositiva. Il Museo rappresenta e custodisce tre secoli della ricca storia della marineria camogliese, 
            dei suoi Armatori, Capitani e marinai. Esso rappresenta inoltre la grandezza di una piccola comunità che, grazie al mare, è riuscita a trarne sostentamento e ricchezza, diventando famosa in tutto il mondo. Inoltre, è la storia di persone intelligenti e generose, che hanno saputo trarre profitto dai 
            momenti favorevoli, condividendone i frutti con la popolazione attraverso il sistema delle "carature".<br/>
            Tutti gli oggetti esposti provengono dalle donazioni dei "<b>Uomini di Mare</b>" e dei loro discendenti, per cui ogni modello, attrezzo, strumento, quadro o documento è realmente appartentuto a qualcuno tra i concittadini che ha realmente lavorato e vissuto sui bastimenti e ha poi deciso di farne dono 
            al Museo. Ad ogni reperto è associato un "cartiglio" contenente i nomi e i soprannomi dei nostri concittadini, le loro avventure, le loro sofferenze. Questo fa sì che ogni reperto diventi un luogo di memoria dedicato a persone vere, che hanno vissuto a <b>Camogli</b> e l’hanno resa quello che è oggi.<br/>
            L’ambito storico principale trattato dal Museo è quello compreso tra le <b>guerre napoleoniche</b> e la <b>prima guerra mondiale</b>, ma le donazioni costanti permettono un continuo aggiornamento, anche se i protagonisti non sono più gli Armatori di un tempo, bensì Capitani e Marinai che tuttora lavorano 
            e vivono sul mare.<br/>
            Particolare attenzione è posta alla parte didattica, con visite guidate da volontari Capitani, sia per gruppi di studenti provenienti dai centri liguri e da molte regioni del Nord d’Italia. Di grande interesse è la <b>biblioteca</b>, con la raccolta di volumi dei Lloyd Register e del Registro Italiano 
            navale, documenti nautici del XVIII, XIX e XX secolo, a disposizione di studiosi e studenti che desiderano preparare tesi universitarie.
          </p>
        </div>
        <div className='margin mb-4'>
          <h3 className='color-subtitle text-center'>Mappa</h3>
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2007.9651747370901!2d9.155453322483309!3d44.34778001769049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d35fc5f9146505%3A0xced86b2856a48dfd!2sCivico%20Museo%20Marinaro%20Gio%20Bono%20Ferrari!5e1!3m2!1sit!2sit!4v1712828014146!5m2!1sit!2sit"
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
