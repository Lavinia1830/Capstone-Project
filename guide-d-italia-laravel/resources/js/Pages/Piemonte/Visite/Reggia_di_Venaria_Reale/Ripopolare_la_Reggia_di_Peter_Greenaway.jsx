import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Ripopolare_la_Reggia_di_Peter_Greenaway(props) {
    return (
        <>
            <Head title="Ripopolare la Reggia, di Peter Greenaway"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='ripopolare_la_reggia_di_peter_greenaway' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Scuderia Juvarriane</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <h3 className='text-center color-subtitle fst-italic'>
                            Ripopolare la Reggia è l’installazione creata da Peter Greenaway per la Reggia di Venaria.
                        </h3>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Sviluppata in undici stanze lungo il percorso di visita, racconta la vita di corte scandita in tre grandi temi e adottando, per ciascuno di essi, differenti soluzioni artistiche e tecnologiche.
                        </p>
                        <p>
                            Il progetto è stato realizzato <b>in collaborazione con il Castello di Rivoli</b> - <i>Museo d’Arte Contemporanea e l’Associazione Volumina</i>.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">La presentazione della corte</h2>
                        <p>
                            <b>Dieci personaggi emblematici</b> nella Reggia di Venaria intorno al 1670 accolgono il visitatore: il Marchese e la Marchesa di Caraglio (Ennio Fantastichini e Ornella Muti), il cuoco Tomaso Foco (Giuseppe Battiston), la 
                            prima damigella di camera Antonia Cotta (Martina Stella), il pasticcere Bartolomeo Vernetti (Francesco Martino), il dottore Pierre Thevenot (Alessandro Haber), il cacciatore Alessandro Petitti (Tommaso Ragno), il segretario 
                            Filippo Arduzzi (Mattia Sbragia), il Principe Giacomo della Cisterna (Francesco Rossini) e l’archivista Giovanni Montardi (Remo Girone). <br/>
                            Sono proiettati su sei grandi schermi montati in una struttura circolare e, dalle loro presentazioni e dai colti dialoghi, si intuisce che questi cortigiani sono la prima serie di <b>100 archetipi della vita di corte</b>: il 
                            saggio, la moglie, il tiranno, la civetta, l’ottuso, il ciarlatano, il bravo, il moralista, il libertino e il cinico. <br/>
                            <i>Durata: 19’23”</i>
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Le cucine</h2>
                        <p>
                            Le rumorose e colorate cucine sono il <b>regno del tirannico cuoco e del suo turbolento seguito</b> di sguatteri, apprendisti e macellai (tra cui Davide Scabin). Le sue azioni e quelle dell’energica lavandaia (Iaia Forte), 
                            visibili nel grande schermo centrale, sono amplificate da un sofisticato gioco di proiezioni su 20 schermi trasparenti. Il progetto multimediale crea, attraverso suoni, luci e proiezioni, l’illusione dei fumi, degli odori e 
                            dei rivoli d’acqua. La conservazione degli alimenti, la cottura dei cibi e i <b>rituali gastronomici</b> erano nel ‘600 parte integrante delle feste di corte e si ritrovano nei beffardi <b>elenchi di precetti culinari</b> declamati 
                            con enfasi. Nel sottoscala, pieno dei palchi dei cervi uccisi, alcuni servitori (tra cui Valentina Cervi) fanno da <i>trait d’union</i> tra i sotterranei, un tempo interamente adibiti a cucine, e i piani alti della Reggia. <br/>
                            <i>urata: 12’35”, basement 5’52”</i>
                        </p>
                        <p className='fst-italic'>
                            Temporaneamente chiuse
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">La processione della corte</h2>
                        <p>
                            Le due ampie sale di rappresentanza, un tempo Anticamera dei Valletti e Camera di Parata della Duchessa, si trovano subito dopo la Galleria Grande e sono caratterizzate da proiezioni multiple su ognuna delle quattro pareti. Su un lato 
                            scorre la <i>lenta processione della corte</i> in tre differenti periodi storici, 1640, 1710 e 1790, mentre un araldo annuncia con solennità i nomi degli invitati. In sottofondo, un <b>manipolo di pettegoli</b> (tra cui Piero 
                            Chiambretti e Luciana Littizzetto) si diverte a sparlare di marchesi e contesse, commentando in maniera pungente viaggi in posti esotici o imbarazzanti baciamano a sovrani. <br/>
                            La musica di <i>un quintetto d’archi</i> (Architorti), che esegue una melodia di Fiorè, riflette la <b>natura elegante e fastosa</b> della processione, che si chiude con il sardonico ballo dei severi commentatori. 
                            <i>Durata: 14’53”</i>
                        </p>
                    </div>
                    <hr className='margin mt-3'/>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Peter Greenaway</h2>
                        <p>
                            Pittore, scrittore, regista di film e opere liriche, autore di spettacoli multimediali e curatore di mostre, recentemente anche vj, Peter Greenaway incarna perfettamente la figura dell’artista moderno. Spirito creativo e visionario, abile 
                            nell’incastonare nelle sue opere i riferimenti della tradizione culturale con le potenzialità offerte dalle nuove tecnologie, deve la sua fama al cinema grazie a successi come <i>I misteri del giardino di Compton House, Il ventre 
                            dell’architetto, Il cuoco, il ladro, sua moglie e l’amante e L’ultima tempesta</i>. Il suo indiscusso talento di “creatore di immagini” si è poi affermato con il film-installazione <i>Nightwatching</i> dedicato a Rembrandt. Profondamente legato 
                            alla cultura italiana, ha con Torino un rapporto privilegiato: ha dedicato alla città il libro d’artista <i>Tulse Luper in Turin</i>, realizzato 92 disegni della Mole Antonelliana, girato al castello di Racconigi un episodio di <i>Le valigie di 
                            Tulse Luper</i> e per tre anni ha lavorato all’ambizioso progetto di <i>Ripopolare la Reggia</i>.
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
