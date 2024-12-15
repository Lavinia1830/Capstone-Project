import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Tartufo_Bianco(props) {
    return (
        <>
            <Head title="Tartufo Bianco"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='tartufo_bianco' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Tartufo Bianco</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Enogastronomia</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Se qualcuno ci dicesse: "Conosci il tuber magnatum pico?", difficilmente saremmo pronti a rispondere con immediatezza, ma alla domanda "Vi piace 
                            il tartufo bianco?" l'assenso sarebbe probabilmente immediato. In effetti, si tratta dello stesso prodotto: è la <b>specie di tartufo più pregiata 
                            in assoluto</b> sia dal punto di vista gastronomico che da quello economico. Infatti, per gli elevatissimi costi che può raggiungere è considerato 
                            il più prezioso dei diamanti. Sicuramente tra i più conosciuti c'è il <b>tartufo bianco di Alba</b>; cittadina piemontese della provincia di 
                            Cuneo che detiene il primato per la più antica <a href='https://www.fieradeltartufo.org/' className='text-decoration-none color_link'>Fiera del 
                            Tartufo bianco</a> che si svolge tra ottobre e novembre.
                        </p>
                        <p>
                            Una <b>fiera</b> ricca di appuntamenti per cittadini e turisti e che culmina il 13 novembre con l'<b>Asta Mondiale del Tartufo bianco 
                            d'Alba</b> nella <b>Sala delle Maschere</b> nel <a href='https://www.castellogrinzane.com/' className='text-decoration-none color_link'>Castello di 
                            Grinzane</a>. Grazie ad un collegamento satellitare altre città di tutto il mondo partecipano in diretta all'asta (nelle scorse edizioni hanno preso 
                            parte città come Parigi, Hong Kong, Mosca, Las Vegas, Londra, Monaco di Baviera, Tokio, New York, Los Angeles, Hollywood). Sin dal principio la 
                            manifestazione si è caratterizzata come un appuntamento <b>internazionale</b> da non perdere e che nel corso degli anni ha visto la partecipazione 
                            di grandi personaggi, dagli sportivi come Joe di Maggio ai registi come Alfred Hitchcock, da Re Farouk a attori come Ugo Tognazzi, Alain Delon, 
                            Gérard Depardieu, e molti altri ancora. Destinata a incrementare la notorietà del tartufo bianco d'Alba in Italia e all'estero, si tratta di 
                            un'Asta da record, basti pensare che nell'edizione del 2010 tredici tartufi sono stati battuti per <b>307,2 mila euro complessivi</b>. I due 
                            esemplari più preziosi sono andati uno a Hong Kong per 105 mila euro, l'altro a Grinzane per 100 mila euro. Sempre Hong Kong si è aggiudicato il 
                            tartufo più prezioso anche nel 2009, un esemplare di 750 grammi pagato ben 100.000 euro.
                        </p>
                        <p>
                            Non tutti sanno che per capovolgere l'idea che il tartufo abbia un'esclusiva destinazione elitaria gran parte del <b>ricavato della vendita è dato 
                            in beneficenza</b> tra borse di studio, enti e istituti filantropici nazionali ed internazionali. Da sottolineare infine che prima del 13 novembre, 
                            giorno della famosa asta, la cittadina di Alba è tutta un fermento di appuntamenti e iniziative, a cominciare dal <b>Mercato Mondiale del Tartufo</b>, 
                            dove il visitatore può trovare trifole certificate. Infatti, il tartufo in vendita è analizzato e garantito da una <b>commissione di controllo</b> che 
                            funziona come sportello del consumatore per tutto l'orario di apertura al pubblico della fiera, a cui il compratore può fare riferimento in ogni momento.
                        </p>
                        <p>
                            A fare da cornice poi a questo mercato c'è la <b>Rassegna enogastronomica AlbaQualità</b>. Oltre cento gli stand in cui il turista può non solo 
                            acquistare, ma anche semplicemente gustare tutti gli altri sapori provenienti dal territorio delle <Link href='/territori/piemonte/langhe_e_roero' 
                            className='text-decoration-none color_link'>Langhe e Roero</Link>: dalla pasticceria artigianale ai formaggi e ai salumi. Tuttavia, protagonisti sono 
                            anche i pregiati vini di questa magnifica terra: il <b>Barolo</b>, <b>il Barbaresco</b>, <b>il Roero</b>, <b>il Nebbiolo</b>, <b>il Dolcetto</b>, <b>la 
                            Barbera</b>, <b>la Favorita</b>, <b>l'Arneis</b> e <b>il Moscato</b>; vini che hanno reso internazionale il territorio langarolo. Un'infinità di prodotti 
                            che rendono ancor più speciali i luoghi che li producono; un motivo in più per visitare questa affascinante zona del Piemonte.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41061.59420873849!2d7.994778432393199!3d44.70106362573118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d2b36d1f25f315%3A0xae82aa8ed7331423!2s12051%20Alba%20CN!5e1!3m2!1sit!2sit!4v1717057946888!5m2!1sit!2sit"
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
        </>
    )
}
