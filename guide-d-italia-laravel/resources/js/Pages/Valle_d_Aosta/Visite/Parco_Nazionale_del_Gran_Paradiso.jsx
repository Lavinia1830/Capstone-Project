import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Parco_Nazionale_del_Gran_Paradiso(props) {
    return (
        <>
            <Head title="Parco Nazionale del Gran Paradiso"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='parco_nazionale_del_gran_paradiso' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Parco Nazionale del Gran Paradiso</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Il territorio che nel <b>dicembre 1922</b> venne definito Parco Nazionale del Gran Paradiso <b>si estende intorno al massiccio omonimo</b> (la cui vetta supera i 4000 metri) e in passato era densamente popolato. <b>L’architettura dei villaggi</b> è basata sull’idea di <b>casa alpina</b>, 
                            sul lato piemontese con costruzioni interamente realizzate in legno, mentre sul versante valdostano al legno è stata affiancata la pietra. <b>Il massimo splendore di quest’area fu raggiunto verso la metà dell’800</b>, quando i membri di Casa Savoia salivano da queste parti per raggiungere 
                            le postazioni di caccia. La scelta di <b>vietare l’attività venatoria</b> in concomitanza con la creazione del Parco è stata fondamentale per salvare gli stambecchi - che ne sono il simbolo - dall’estinzione. Oggi questo <b>eden di montagna, suddiviso in cinque valli in cui si alternano 
                            ambienti rocciosi, praterie, boschi</b> e i loro margini, è davvero alla portata di tutti: grazie al progetto “<b>un Paradiso Accessibile</b>” l’offerta turistica dell’intera area protetta è in grado di soddisfare le esigenze, gli interessi e le aspettative di un’utenza ampliata. 
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Itinerari</h2>
                        <p>
                            Siamo <b>in alta montagna</b>, per cui ci <b>sono sostanziali differenze tra i sentieri da percorrere</b> in base alla stagione in cui si decide di visitare il Parco: <b>la rete di tracciati si snoda</b> ai piedi del Gran Paradiso <b>per un totale di 500 km</b>, ed è disponibile online 
                            suddivisa per singole vallate, così che ognuno possa scegliere il percorso che preferisce. Ce ne sono da poter <b>affrontare in giornata, in più giorni, a tappe</b>: il successo maggiore è riscosso tra gli altri da <b>Giroparco Gran Paradiso</b>, dall’<b>Alta Via Canavesana</b> e dall’<b>Alta 
                            Via n. 2 in Valle d’Aosta</b>. Una volta sul posto, basta seguire e rispettare la segnaletica, per muoversi in sicurezza sul percorso scelto e rispettare la natura del parco. In inverno ci si sposta <b>con gli sci o con le ciaspole</b>, in estate invece, grazie al progetto “A piedi tra le 
                            nuvole”, si può scegliere tra <b>spostamenti a piedi, in bicicletta o su navetta</b> all’insegna di una <b>mobilità dolce protetta da un forte ridimensionamento del traffico</b> automobilistico.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Sport praticabili</h2>
                        <p>
                            Negli oltre <b>70.000 ettari di territorio</b> su cui si estende il Parco, sono <b>diverse le attività sportive praticabili</b>. In inverno, presso le <b>stazioni sciistiche</b> come <Link href='/destinazioni/valle_d_aosta/cogne' className='text-decoration-none color_link'>Cogne</Link> o <b>Valsavarenche</b>, 
                            si può fare <b>sci di fondo e da discesa</b>. Con la bella stagione ci si può cimentare nell’<b>arrampicata su roccia o ghiaccio</b>, disciplina ricca di sfide e di storia che nel Parco Nazionale Gran Paradiso è di casa. Cinque valli incontaminate dove scegliere tra <b>pareti di solida 
                            roccia e cascate di ghiaccio lucente nel totale silenzio</b>, immersi in uno scenario unico al mondo. Sempre nel Parco o nelle aree limitrofe, è possibile <b>pedalare nella natura</b>, magari aiutati da una e-bike.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Esperienze</h2>
                        <p>
                            Tante e <b>fuori dall’ordinario</b> le esperienze di cui si può fruire al Parco Nazionale del Gran Paradiso: su prenotazione si può <b>visitare una scuola attiva fino a metà del 900</b>, posta a 1600 metri sulla mulattiera del Vallone del Roc, tra gli itinerari più interessanti del 
                            versante piemontese. Si tratta della scuola elementare della <b>Borgata Maison</b>, a Noasca, in cui grazie al recupero dell’arredo e dei veri materiali in uso il tempo sembra essersi fermato. A Valnontey, a 1700 metri di quota nel cuore del parco, su una serie di conche e avvallamenti 
                            naturali si trova il <b>Giardino Botanico Alpino Paradisia</b>: tra giugno e luglio si registra il periodo di maggior fioritura. Soprattutto in questo periodo sono previste visite tematiche guidate e giochi a tema naturalistico. Ogni visita può essere svolta anche autonomamente: ogni ospite 
                            all’entrata riceve un depliant informativo sulle principali caratteristiche del giardino. Ogni pianta, infine, è accompagnata da un cartellino che ne riporta il nome, e la classificazione in <b>specie autoctone o esotiche oppure officinali</b>. Anche agli animali sono dedicate tante 
                            esperienze: osservare dal vivo e da non molto lontano (nel loro habitat naturale) aquile o stambecchi non ha prezzo.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Attrazioni</h2>
                        <p>
                            I borghi del parco conservano intatto un fascino senza tempo, con le <b>tipiche abitazioni di alta montagna</b> di tutto l’arco alpino <b>circondate da boschi di larici</b>, tra valloni e radure; nella frazione di Boschettiera si trova un vecchio forno ancora funzionante. Ma in generale 
                            tutto intorno, nelle cinque valli si possono trovare <b>incisioni rupestri</b> e affreschi, strade e <b>ponti di origine romana</b>, chiese e <Link href='/visite/valle_d_aosta/castelli_medievali' className='text-decoration-none color_link'>castelli medioevali</Link>, come il castello Malgrà a 
                            Rivarolo Canavese, alpeggi, sentieri e mulattiere, testimonianza viva della lunga storia di queste terre. Infine le <b>case reali di caccia</b>, edifici a un solo piano localizzate in <b>ampi pianori oltre i 2000 metri</b>, che erano <b>destinate a ospitare il re e la sua corte</b>, veri 
                            gioielli del Parco da visitare.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126025.6469364405!2d7.24976936259389!3d45.531568761932824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47891f116149b481%3A0xb8f1d32359844c53!2sParco%20Nazionale%20Gran%20Paradiso!5e1!3m2!1sit!2sit!4v1713783308387!5m2!1sit!2sit"
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
