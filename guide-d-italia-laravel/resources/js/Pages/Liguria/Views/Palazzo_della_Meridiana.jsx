import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Palazzo_della_Meridiana(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='palazzo_della_meridiana' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Palazzo della Meridiana</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
            </div>
            <div className="margin mt-3">
                <p>
                    <b>Gerolamo Grimaldi Oliva</b> e il figlio <b>Battista</b> fanno costruire il palazzo fra <b>1536</b> e <b>1545</b>, quindi prima della creazione di <b>Strada Nuova</b>: <b>Palazzo 
                    della Meridiana</b> per questo è una delle prime testimonianze in città del nuovo gusto <b>Rinascimentale</b>.
                </p>
                <p>
                    Anche grazie alle <b>tavole</b> che illustrano il libro di Pietro Paolo Rubens “<b>Palazzi di Genova</b>”  scopriamo che il <b>Palazzo</b> aveva una <b>struttura complessa</b>, in 
                    parte perduta con le trasformazioni della zona attorno: l'edificio si sviluppava su <b>più livelli</b> seguendo il pendio, con <b>splendidi giardini</b> racchiusi fra <b>due grandi 
                    ninfei</b> a nord e a sud e ricchi di <b>giochi d'acqua</b> e <b>grotte animate da automi</b>.
                </p>
                <p>
                    I <b>committenti</b>, soprattutto <b>Battista Grimaldi</b>, chiedono <b>soluzioni innovative</b> anche nella decorazione degli interni, dove lavorano artisti del calibro di <b>Lazzaro 
                    Calvi</b>, <b>Giovanni Battista Castello il Bergamasco</b> e <b>Luca Cambiaso</b>, che mette in scena la vicenda di <b>Ulisse che saetta i Proci</b>, nel grande salone del piano nobile, 
                    con straordinarie <b>soluzioni prospettiche</b>.
                </p>
                <p>
                    <strong>Palazzo della Meridiana</strong> resta ai Grimaldi fino all'Ottocento, per poi cambiare più volte proprietario; nel <b>1885</b> lo affitta <b>Evan Mackenzie</b> come sede della 
                    propria società di assicurazioni, e chiama <b>Gino Coppedè</b> a rinnovare la decorazione, ad esempio con la creazione dello spettacolare <b>lucernario Liberty</b> a coprire il cortile 
                    su <b>Salita San Francesco</b>.
                </p>
                <p>
                    <b>L'edificio oggi appartiene a una società privata</b> che, <b>dopo averlo restaurato</b>, lo ha aperto al pubblico come <b>sede di mostre temporanee, attività culturali e ricevimenti</b>.
                </p>
                <p>
                    <b>Il palazzo è aperto per i visitatori individuali una volta al mese</b>, e in occasione di mostre ed eventi.
                </p>
            </div>
            <div className='margin mb-4'>
                <h3 className='color-subtitle text-center'>Mappa</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1377.9186456166285!2d8.930672037077024!3d44.41177555475045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d343e6d2a13bd9%3A0x7cda79dcee2e248a!2sPalazzo%20Grimaldi%20della%20Meridiana!5e1!3m2!1sit!2sit!4v1712752351435!5m2!1sit!2sit"
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
