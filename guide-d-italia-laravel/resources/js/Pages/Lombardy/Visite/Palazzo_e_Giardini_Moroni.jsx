import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Palazzo_e_Giardini_Moroni(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
      <main>
        <div className='palazzo_e_giardini_moroni' style={{ position: 'relative' }}>
            <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Palazzo e Giardini Moroni</h1>
            <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
            <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Visite</p>
        </div>
        <div className="margin mt-3">
            <p>
                <strong>Palazzo Moroni</strong> sorge in via Porta Dipinta (<b>Città Alta</b>) ed è caratterizzato da interni e arredi eccezionalmente ben conservati, nonché da una ricca collezione d’arte e da un giardino all’italiana con vasta ortaglia. Il magnifico edificio offre dunque ai 
                visitatori non solo arte e storia, ma anche un suggestivo parco storico nel cuore di Bergamo Alta.
            </p>
            <p>
                La famiglia Moroni possiede e abita il palazzo dal 1636. L’impianto originario è stato mantenuto e conservato in maniera accurata; lo Scalone monumentale conduce dalla corte d’ingresso al piano nobile, dietro le cui porte si trovano sale e saloni affrescati e arredati tra Sei 
                e Ottocento.<br/>
                Nelle sale maggiori permangono in tutta la loro bellezza le prove di maestria frescatrice del <b>Barbelli</b>, e qui è conservata anche l'ampia e varia Collezione Moroni, dove spiccano, oltre a opere di <b>Bernardino Luini</b>, <b>Cesare Tallone</b>, i celebri ritratti di Gian Gerolamo 
                Grumelli (Il Cavaliere in Rosa) e di Isotta Brembati, eseguiti dal pittore Giovanni Battista Moroni di Albino.
            </p>
            <p>
                Fin dalla costruzione il palazzo si affaccia su un complesso di giardini all’italiana, articolati in una balconata e tre terrazzamenti che si sviluppano a ridosso del Colle di Sant’Eufemia. Il terzo e più alto terrazzamento dà accesso al Pensatoio del conte, una torretta in stile 
                neomedievale costruita nell’Ottocento sui resti di una più antica struttura, già di pertinenza della Rocca civica, che cinge la cima del colle.<br/>
                Oltre i giardini veri e propri si estendono circa due ettari di ortaglia, annessa alla proprietà nel corso del XIX secolo grazie ai fratelli Pietro e Alessandro Moroni, quest'ultimo studioso di agronomia. Nell'area si trovano ancora viti allevate su pergola, alberi da frutto e un 
                roccolo, cioè un circolo di alberi di carpino, i cui rami intrecciati fungevano da reti per cacciare uccelli vivi a scopo alimentare e ludico. Non mancano poi gli alberi di gelso, uno dei simboli della famiglia, arricchitasi con l’allevamento del baco da seta che si nutre proprio 
                delle foglie di questo albero.
            </p>
        </div>
        <div className='margin mb-4'>
            <h3 className='color-subtitle text-center'>Mappa</h3>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1165.9993300255926!2d9.666868615003786!3d45.70337606323324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47815115e9599dc9%3A0x65f1da493868c30a!2sFAI%20-%20Palazzo%20Moroni!5e1!3m2!1sit!2sit!4v1712674347876!5m2!1sit!2sit"
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
