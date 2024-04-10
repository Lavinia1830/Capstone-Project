import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Ascensore_Castello_d_Albertis_Montegalletto(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='ascensore_montegaletto' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>L'Ascensore Castello d'Albertis-Montegalletto</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
            </div>
            <div className="margin mt-3">
                <p>
                    L'<strong>ascensore di Montegalletto</strong> è quello più avanzato dal punto di vista tecnologico, infatti si tratta di un sistema misto orizzontale-verticale che collega Via Balbi con Corso Dogali all'altezza del Castello De Albertis.
                </p>
                <p>
                    Venne inaugurato nel 1929 e durante l'ultima ristrutturazione si decise di trasformarlo in maniera tale da evitare agli utenti di percorrere a piedi la lunga galleria (oltre 200 metri ) con un impianto che al mondo non trova uguali. L'opera venne finanziata con i contributi del Comune di Genova, 
                    della Regione Liguria e del Programma Comunitario Urban II e nel 2004 l'impianto venne finalmente riaperto al pubblico.
                </p>
                <p>
                    Il percorso orizzontale ha una lunghezza di 236 m (cabina 1) e 234 m (cabina 2) mentre il dislivello verticale è di 72 metri (in assoluto il maggiore fra gli ascensori cittadini). Nel tratto orizzontale la cabina è trainata da una fune, chiusa ad anello, alla velocità di 4,5 m/s; in fondo alla 
                    galleria la cabina viene presa in consegna da una serie di pneumatici motorizzati, del tipo in uso nelle travi di lancio delle funivie, che la trasferisce all'interno dell'ascensore. La gabbia dell'ascensore la porta, lungo il pozzo verticale, al piano superiore con velocità di circa 1,6 m/s; i 
                    macchinari di sollevamento sono sistemati nella stessa posizione occupata in precedenza dalle macchine dei vecchi ascensori.
                </p>
                <p>
                    Le due cabine a disposizione, ciascuna con una capienza pari a 23 persone garantiscono una portata oraria di circa 400 persone per ogni senso di marcia. Il pulpito (sito all'imbocco del tunnel di via Balbi) è tuttora presenziato da personale AMT (unico caso fra gli ascensori genovesi) data la complessità 
                    tecnologica del sistema, che tuttora necessità di interventi “on-line” in caso di problemi.
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1686.4917765844502!2d8.922703711240727!3d44.41712954937811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d341581047741b%3A0xb2e0459252f070f5!2sAscensore%20Montegalletto%20-%20Balbi%20%2F%20Dogali%20(Stazione%20Balbi)!5e1!3m2!1sit!2sit!4v1712752986313!5m2!1sit!2sit"
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
