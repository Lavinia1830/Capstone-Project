import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Museo_Nazionale_del_Cinema(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='mn_cinema_torino' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Museo Nazionale del Cinema</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
            </div>
            <div className="margin mt-3">
                <p>
                    Questo stravagante museo è un viaggio interattivo nella storia del cinema, dalle prime lanterne magiche alle tecnologie odierne. Sono esposti celebri memorabilia come il bustier di pizzo nero di Marilyn 
                    Monroe, l’abito indossato da Peter O’Toole nel film Lawrence of Arabia e la bara usata nel Dracula con Bela Lugosi.
                </p>
                <p>
                    Maria Adriana Prolo, con la sua passione e dedizione per il cinema, ha raccolto nel corso degli anni una vasta collezione di oggetti, documenti e attrezzature cinematografiche provenienti da tutto il 
                    mondo. La sua visione era quella di creare un luogo che celebrasse la storia e l'evoluzione del cinema, offrendo al pubblico un'esperienza educativa e culturale unica.
                </p>
                <p>
                    Nel corso degli anni, il museo ha continuato a espandersi e arricchire la sua collezione, diventando uno dei musei del cinema più importanti a livello internazionale. Le sue esposizioni permanenti e 
                    temporanee, insieme a proiezioni cinematografiche, eventi speciali e attività educative, hanno attirato visitatori da tutto il mondo, contribuendo a diffondere la passione per il cinema e la sua storia.
                </p>
                <p>
                    Oggi, il Museo del Cinema di Torino continua a svolgere un ruolo fondamentale nel campo della conservazione e della diffusione del patrimonio cinematografico, offrendo al pubblico una panoramica affascinante 
                    e coinvolgente della settima arte. La sua sede nella Mole Antonelliana conferisce al museo un'atmosfera unica e suggestiva, rendendolo una tappa imprescindibile per gli amanti del cinema e i visitatori 
                    interessati alla cultura e alla storia.
                </p>
            </div>
            <div className='margin mb-4'>
                <h3 className='color-subtitle text-center'>Mappa</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3335.1685302173564!2d7.691123499624072!3d45.06891576872959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886dfc345ca2c3%3A0xc2c991f2d588a187!2sMuseo%20Nazionale%20del%20Cinema!5e1!3m2!1sit!2sit!4v1712565656878!5m2!1sit!2sit"
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
