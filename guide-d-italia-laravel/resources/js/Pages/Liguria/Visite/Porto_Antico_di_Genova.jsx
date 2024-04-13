import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Porto_Antico_di_Genova(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='porto_antico_di_genova' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Porto antico di Genova</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
            </div>
            <div className="margin mt-3">
                <h2 className="color-subtitle">Un’antica piazza marittima da vivere ancora oggi</h2>
                <p>
                    L'anima di <b>Genova</b> è nel suo <strong>Porto Antico</strong>, rinato grazie al progetto di Renzo Piano, nel 1992, in occasione della celebrazione dei <b>500 anni dalla scoperta dell'America</b>. Le colline dietro la città e le case colorate fanno da sfondo a questa grande piazza marittima 
                    affacciata sul Mediterraneo.
                </p>
                <p>
                    Al Porto Antico di Genova si passeggia, si mangia, si ammira il panorama, ci si gode il tramonto, si incontrano gli amici, si fa shopping, si va al cinema, in piscina o a una mostra. E si visitano attrazioni da non perdere, come l'<b>Acquario</b> costruito per Expo 92 su 27.000 metri quadrati, 
                    il più grande d’Italia.
                </p>
                <p>
                    A poca distanza si trova il <b>Galeone</b>, un vascello da 63 metri costruito nel 1986 per uso cinematografico. Per un'esplorazione più approfondita del rapporto tra Genova e il mare c'è il <b>Museo Galata</b>: le sue sale sono un vera e propria imbarcazione per un viaggio nel tempo.
                </p>
                <p>
                    Volete gustare una vista panoramica su Genova dall'alto? Prendete il <b>Bigo</b>, l'ascensore panoramico. Per i più piccoli, da visitare è la <b>Città dei bambini e dei ragazzi</b>, un'area gioco interattiva e multimediale ai <b>Magazzini del Cotone</b>, usati nell'Ottocento per stipare le 
                    merci. Da non perdere anche la <b>Biosfera</b>, una struttura in vetro e acciaio che ospita un ecosistema tropicale.
                </p>
            </div>
            <div className='margin mb-4'>
                <h3 className='color-subtitle text-center'>Mappa</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6746.778335999264!2d8.922398889935302!3d44.41009743042567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d343e0e3211487%3A0xe71059f89344b7f4!2sPorto%20Antico%2C%20Genova%20GE!5e1!3m2!1sit!2sit!4v1712759359758!5m2!1sit!2sit"
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
