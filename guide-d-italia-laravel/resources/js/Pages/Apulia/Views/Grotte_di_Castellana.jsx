import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Grotte_di_Castellana(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='grotte_di_castellana' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Grotte di Castellana</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className='margin mt-3'>
                    
                    <p>
                        Un’escursione alle <strong>Grotte di Castellana</strong> è operabile in ogni periodo dell’anno. Si offrono due itinerari, il primo di 1 chilometro e di durata di 50 minuti, il secondo di 3 chilometri e di durata di circa 2 ore. Durante la visita, le guide turistiche accompagnano i visitatori. 
                        La temperatura costante degli ambienti sotterranei è di circa 18°C e l’umidità è superiore al 90%. La Grave è la prima e più grande grotta ed è unicamente connessa con l’esterno. Il tratto accessibile al pubblico è costituito da ambienti molto vari sia per forma che per dimensioni. Stalattiti, 
                        stalagmiti, cortine, colonne, cristalli si possono ammirare in ogni dove. I nomi dei luoghi visitati sono frutto della fantasia dei primi esploratori, quali la Lupa, i Monumenti, la Civetta, la Madonnina, l’Altare, il Precipizio, il Corridoio del deserto, la Colonna rovesciata, il Corridoio 
                        Rosso, la Cupola. La Grotta Bianca, caratterizzata dalla ricchezza e dal biancore dell’alabastro, è l’ultima e più bella caverna del sistema sotterraneo ed è considerata la più splendida al mondo.
                    </p>
                </div>
                <div className='margin mt-3'>
                    <h2 className="color-subtitle">Un Complesso di cavità sotterranee</h2>
                    <p>
                        Le <strong>Grotte di Castellana</strong>, un complesso di cavità sotterranee di origine carsica, di notevole interesse turistico, tra i più belli e spettacolari d’Italia, sono ubicate nel Comune di Castellana-Grotte, a circa 1,5 km dall’abitato.
                    </p>
                    <p>
                        Si sviluppano per una lunghezza di 3348 metri e raggiungono una profondità massima di 122 metri dalla superficie. La temperatura degli ambienti interni si aggira attorno ai 16,5°C.
                    </p>
                    <p>
                        Situate alle porte della Valle d’Itria, a pochi chilometri da borghi incantevoli come Alberobello, Cisternino, Polignano a Mare, le Grotte di Castellana si aprono nelle Murge sud orientali a 330 m s.l.m. sull’altopiano calcareo formatosi nel Cretaceo superiore, circa novanta-cento milioni di 
                        anni fa.
                    </p>
                    <p>
                        La bellezza delle <strong>Grotte di Castellana</strong> richiama visitatori da tutto il mondo, e dal giorno della loro apertura al pubblico, più di 15 milioni di persone hanno percorso le sue vie sotterranee. La visita alle Grotte si snoda lungo un percorso di 3 Km: una straordinaria escursione guidata, a 
                        circa 70 metri di profondità, in uno scenario stupefacente, dove caverne dai nomi fantastici, canyon, profondi abissi, fossili, stalattiti, stalagmiti, concrezioni dalle forme incredibili e dai colori sorprendenti sollecitano la fantasia di bambini e adulti.
                    </p>
                    <p>
                        Le <strong>Grotte di Castellana</strong> sono, quindi, a pieno titolo, un’imperdibile occasione per ammirare uno dei luoghi naturali più sorprendenti di una Puglia meravigliosa.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1262.4388237581702!2d17.14766587374093!3d40.87532522591924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1347b6d8fa2ab037%3A0x64c3e042a9fe8c1!2sGrotte%20di%20Castellana!5e1!3m2!1sit!2sit!4v1713428579004!5m2!1sit!2sit"
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
