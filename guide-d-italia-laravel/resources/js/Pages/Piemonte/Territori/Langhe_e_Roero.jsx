import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Langhe_e_Roero(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='langhe_e_roero' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Langhe e Roero</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Territori</p>
            </div>
            <div className="margin mt-3">
                <p>
                  Tra i vigneti delle ondulate colline di Langhe e Roero, immerse fino a 5 milioni di anni fa in un antichissimo mare, affiorano ancora oggi conchiglie e altri sedimenti marini. Queste lingue di terra, da cui pare derivi il nome Langhe, s’innalzano dalla pianura solcata dal fiume Tanaro, alla sinistra del quale 
                  prendono il nome di Roero, e si estendono fino agli Appennini, con uno sguardo sempre rivolto verso l’arco alpino dominato dal Monviso. Non aspettatevi un paesaggio incontaminato: negli ultimi secoli le colline sono state fortemente modellate dall’uomo, che ne ha fatto un territorio antropizzato indissolubilmente 
                  legato alla viticoltura. <b>Camminare nelle Langhe</b> vuol dire perdersi tra questo presente e il passato.
                </p>
                <h2 className='color-subtitle'>Langhe, cosa vedere tra colline e vigneti</h2>
                <p>
                  <b>Barolo</b>, con la sua produzione incessante di nettare di-vino. Le <b>big bench</b>, le panchine giganti delle Langhe frutto di un progetto architettonico diffuso e perfettamente integrato nel territorio che offrono uno sfondo perfetto per le foto, ma anche un punto di vista incredibile sugli itinerari 
                  piemontesi che si snodano tra i borghi langaroli. Chiedersi cosa vedere ad Alba, cuore nevralgico della zona in cui batte un cuore di nocciola e crema spalmabile.
                </p>
                <h2 className='color-subtitle'>Langhe, turismo d’eccellenza</h2>
                <p>
                  Dal 2014, insieme al vicino Monferrato, Langhe e Roero sono stati dichiarati Patrimonio UNESCO. Oggi un tour delle Langhe vuol dire scoprire il vestito elegante della zona, pettinata e impreziosita da relais e cantine magnifiche: i weekend nelle Langhe sono corteggiati da turisti di tutto il mondo, ma nonostante il 
                  successo i piemontesi non dimenticano la fame e la sofferenza passata. Sebbene non manchino strutture per l’accoglienza, tutte di alto profilo, qui la vita procede secondo i ritmi contadini, grazie a tradizioni continuamente rinnovate e alla pace di antichi borghi e castelli rimasti intatti, o quasi, nei secoli. 
                  Per la loro genuinità e diversità, Langhe e Roero sono adatti a ogni tipo di turista. Dallo sportivo al buongustaio, nessuno rimarrà deluso.
                </p>
            </div>
        </main>
        <Footer/>
    </AuthenticatedLayout>
  )
}
