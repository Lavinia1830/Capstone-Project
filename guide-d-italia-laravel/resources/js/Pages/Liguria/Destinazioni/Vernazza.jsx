import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';

export default function Vernazza(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
      <main>
        <div className='vernazza' style={{ position: 'relative' }}>
          <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Vernazza</h1>
          <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
          <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
        </div>
        <div className="margin mt-3">
            <h2 className='color-subtitle'>Vernazza, piccolo borgo dalle grandi meraviglie</h2>
            <p>
                Uno sperone disteso verso il mare, alle spalle le alte scogliere, poi le alture verdeggianti e qui, proprio a ridosso del porticciolo, il grappolo di case e monumenti del villaggio. Siamo a <b>Vernazza, uno dei borghi più autentici delle</b> <Link href='/destinazioni/le_5_terre' 
                className='text-decoration-none color_link'>Cinque Terre</Link>.
            </p>
            <p>
                Le piccole abitazioni colorate e le barche attraccate, i fichi d’India e i terrazzamenti coltivati che vi basterà alzare lo sguardo per scorgere tratteggiano un paesaggio incantevole.
            </p>
            <p>
                Respirate a pieni polmoni e avventuratevi nei sentieri di quello che è uno dei <b>borghi più belli d’Italia</b>, per un tuffo nell’incontaminato paesaggio mediterraneo.
            </p>
        </div>
        <div className="margin mt-3">
            <h2 className='color-subtitle'>Lungo vicoli e scalinate</h2>
            <p>
                A <strong>Vernazza</strong> tutto gira attorno al porticciolo e alla piazzetta a ridosso, dove la gente del posto affitta anche appartamenti ai turisti. Da qui si ramificano <b>i carruggi</b>,  <b>le strette viuzze dei villaggi liguri</b>. Si cammina lentamente tra le 
                <b>case-torre</b> colorate e arroccate, nei cortili, sotto portici e logge dove bere un caffè è un piacere e lungo Via Roma, antico canale interrato.
            </p>
            <p>
                Il monumento da non perdere in questo antico borgo, che risale all’anno Mille e che già i romani usavano come porto strategico, è la <b>Chiesa di Santa Maria d’Antiochia</b> dedicata alla patrona del paese, con le bifore che guardano il mare e uno stile sovrapposto di romanico, 
                barocco e gotico. E se accanto al porticciolo fa da vedetta il Bastione Belforte, a dominare dall’alto il paese è il <b>Castello Doria</b>, su un vertiginoso strapiombo.
            </p>
            <p>
                Nei tanti ristoranti potrete gustare un piatto che è la specialità locale, il Tian di Vernazza: patate e alici in tegame all’aroma di erbe mediterranee e scorza di limone. Terra e mare in un unico piatto.
            </p>
        </div>
        <div className="margin mt-3">
            <h2 className='color-subtitle'>A passo lento per contemplare il paesaggio</h2>
            <p>
                Tutte le <b>Cinque Terre</b>, dichiarate dall’<b>UNESCO Patrimonio dell’Umanità</b>, sono dominate da roccia e mare, piccole baie e insenature, vegetazione esuberante. La natura impera e le autorità del Parco Nazionale delle Cinque Terre raccomandano di <b>muoversi con rispetto, 
                possibilmente a piedi o in treno</b>.
            </p>
            <p>
                Portate con voi un telo da mare e distendetelo sulle scogliere subito a destra del molo oppure nei pressi del porto. Fate un bagno, ma poi calzate scarpe da trekking e camminate. Un’ottima soluzione è arrivare con uno spettacolare trekking da Monterosso al Mare o da Corniglia, 
                perché Vernazza si trova proprio tra questi altri due borghi delle Cinque Terre. Siete sul famoso Sentiero Azzurro, che in alcuni punti si restringe inoltrandosi nei boschi, in altri si apre donando la visione improvvisa del mare e della costa alta, in scorci mozzafiato.
            </p>
            <p>
                <b>Un percorso di trekking ad anello</b> sale verso il <b>Santuario di Nostra Signora di Reggio</b> dalla bella facciata romanica. Il piazzale vi regala un panorama di lecci, cedri, ippocastani e a farvi ombra è il più antico cipresso della <Link href='/liguria' className='text-decoration-none 
                color_link'>Liguria</Link>, che prospera qui da 800 anni.
            </p>
            <p>
                Il circuito prosegue in direzione San Bernardino per poi ridiscendere al villaggio, tra campi coltivati e vigneti, muretti a secco, profumata macchia mediterranea, ruscelli e fonti sorgive. Calpestate antichissime mulattiere avvolte nel silenzio e incrociate abitazioni perse nel nulla.<br/>
                Siete fuori dalla civiltà, <b>dentro una natura rigenerante per corpo e mente</b>.
            </p>
        </div>
        <div className='margin mb-4'>
            <h3 className='color-subtitle text-center'>Mappa</h3>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3389.2190949606293!2d9.681162048959472!3d44.1349623835318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d4f02be5dd145f%3A0x775cfff3f41b7b2a!2s19018%20Vernazza%20SP!5e1!3m2!1sit!2sit!4v1712840826598!5m2!1sit!2sit"
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
