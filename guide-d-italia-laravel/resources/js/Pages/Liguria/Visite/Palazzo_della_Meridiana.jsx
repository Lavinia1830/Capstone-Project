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
                    Gerolamo Grimaldi Oliva e il figlio Battista fanno costruire il palazzo fra 1536 e 1545, quindi prima della creazione di Strada Nuova: Palazzo della Meridiana per questo è una delle prime testimonianze in città del nuovo gusto Rinascimentale.
                </p>
                <p>
                    Anche grazie alle tavole che illustrano il libro di Pietro Paolo Rubens “Palazzi di Genova”  scopriamo che il Palazzo aveva una struttura complessa, in parte perduta con le trasformazioni della zona attorno: l'edificio si sviluppava su più livelli seguendo il pendio, con splendidi 
                    giardini racchiusi fra due grandi ninfei a nord e a sud e ricchi di giochi d'acqua e grotte animate da automi.
                </p>
                <p>
                    I committenti, soprattutto Battista Grimaldi, chiedono soluzioni innovative anche nella decorazione degli interni, dove lavorano artisti del calibro di Lazzaro Calvi, Giovanni Battista Castello il Bergamasco e Luca Cambiaso, che mette in scena la vicenda di Ulisse che saetta i Proci, 
                    nel grande salone del piano nobile, con straordinarie soluzioni prospettiche.
                </p>
                <p>
                    <strong>Palazzo della Meridiana</strong> resta ai Grimaldi fino all'Ottocento, per poi cambiare più volte proprietario; nel 1885 lo affitta Evan Mackenzie come sede della propria società di assicurazioni, e chiama Gino Coppedè a rinnovare la decorazione, ad esempio con la creazione dello spettacolare 
                    lucernario Liberty a coprire il cortile su Salita San Francesco.
                </p>
                <p>
                    L'edificio oggi appartiene a una società privata che, dopo averlo restaurato, lo ha aperto al pubblico come sede di mostre temporanee, attività culturali e ricevimenti.
                </p>
                <p>
                    Il palazzo è aperto per i visitatori individuali una volta al mese, e in occasione di mostre ed eventi.
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
