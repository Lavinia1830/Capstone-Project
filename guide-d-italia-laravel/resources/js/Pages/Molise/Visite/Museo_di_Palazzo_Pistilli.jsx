import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Museo_di_Palazzo_Pistilli(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='museo_di_palazzo_pistilli' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Museo di Palazzo Pistilli</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Nel centro storico di <b>Campobasso</b> si trova il <strong>Museo di Palazzo Pistilli</strong>, la cui collezione d’arte è stata raccolta da Michele Praitano in un arco di tempo superiore ai cinquant’anni, donandole infine allo Stato nel 2014. Ogni singola opera è ricca di 
                        significati, non solo per quanto riguarda la creazione e l’epoca a cui appartiene, ma anche per l’acquisizione da parte di tale appassionato collezionista. La scelta di Napoli come maggiore punto di ricerca fu influenzata dalla sua volontà di rintracciare i collegamenti con 
                        gli autori molisani nella città cosmopolita. Inoltre, Praitano ha intrecciato relazioni con artisti, antiquari e altre personalità che hanno condizionato le sue preferenze artistiche, incentrate sulla pittura realista, impressionista e classicista otto-novecentesca, portando 
                        a risultati sia positivi che negativi. La collezione di Palazzo Pistilli è dunque un invito alla riflessione ma anche una fonte di piacere. Da segnalare, inoltre la presenza della collezione di Giovanni Eliseo, donata dal figlio Massimo allo Stato il 14 dicembre 2012, e quella 
                        di Giuseppe e Ottavio Eliseo, acquisita dalla Provincia di Campobasso.
                    </p>
                    <p>
                        Il Museo è costituito da due sale espositive ed una sala proiezioni. Nella “Sala d’Ingresso” sono esposti alcuni costumi d’epoca insieme a fotografie, variamente datate, che ritraggono alcuni momenti salienti delle passate manifestazioni e cataloghi con i nomi dei personaggi 
                        più conosciuti che hanno animato la sfilata negli ultimi 40 anni. 
                    </p>
                    <p>
                        Il Museo è costituito da due sale espositive ed una sala proiezioni. Nella “Sala d’Ingresso” sono esposti alcuni costumi d’epoca insieme a fotografie, variamente datate, che ritraggono alcuni momenti salienti delle passate manifestazioni e cataloghi con i nomi dei personaggi 
                        più conosciuti che hanno animato la sfilata negli ultimi 40 anni. 
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d525.2477440077814!2d14.657560805523891!3d41.56185271032725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133a74d3269c87f1%3A0xc6042a0258027a59!2sMuseo%20Palazzo%20Pistilli!5e1!3m2!1sit!2sit!4v1713342414630!5m2!1sit!2sit"
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
