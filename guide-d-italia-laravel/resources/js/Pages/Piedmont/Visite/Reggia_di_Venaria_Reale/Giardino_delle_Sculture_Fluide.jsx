import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Giardino_delle_Sculture_Fluide(props) {
    return (
        <>
            <Head title="Giardino delle Sculture Fluide"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='giardino_delle_sculture_fluide' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Giardino delle Sculture Fluide</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p className='fst-italic text-center'>
                            Quattordici opere, pensate come un luogo sensoriale, dall'artista contemporaneo Giuseppe Penone
                        </p>
                    </div>
                    <div className='mb-3'>
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/935IT5KcNbg" 
                            title="La Venaria Reale: &quot;Il giardino delle sculture fluide&quot; di Giuseppe Penone" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen
                            className='mx-auto'>
                        </iframe>
                    </div>
                    <div className='margin mt-3'>
                        <p>
                            <b>Giuseppe Penone</b> è stato <a href='https://ambparigi.esteri.it/it/news/dall_ambasciata/2023/10/cerimonia-dinsediamento-di-giuseppe-penone-come-membro-associato-straniero-dellacademie-des-beaux-arts-19-ottobre-2023/' className='text-decoration-none color_link'>riconosciuto 
                            quale <b>Membro associato straniero</b> dell’autorevole <b>Académie des Beaux-Arts</b> di Parigi</a>: un grande omaggio attribuito dalla Francia all’artista italiano esponente dell’Arte povera, e un valore e un prestigio ulteriori aggiunti anche per i Giardini della Reggia di 
                            Venaria che ospitano le sue opere ormai stimate a livello mondiale.
                        </p>
                        <p>
                            Sviluppato su un terreno che si estende per tre ettari, <i>Il Giardino delle Sculture Fluide</i> di Giuseppe Penone presenta alberi in bronzo, fontane e boschetti ed è strutturato sulla base del Giardino delle Fontane che Amedeo di Castellamonte aveva ideato per il parco della 
                            Reggia. 
                        </p>
                        <p>
                            Si compone di quattordici opere, realizzate tra il 2003 e il 2007, ed è pensato come un <b>luogo sensoriale</b> dove i vari materiali utilizzati (alberi, marmo, acqua, bronzo, pietra e granito) scandiscono il passaggio da una scultura all’altra, in un continuo stato di fluidità 
                            tra gli elementi, al fine di scoprire le analogie che legano i mondi minerale, vegetale e umano. 
                        </p>
                        <p>
                            Il progetto è stato realizzato in collaborazione con il <i>Castello di Rivoli - Museo d’Arte Contemporanea</i>.
                        </p>
                        <p>
                            La particolare conformazione del Parco basso della Venaria e la storia plurisecolare che si è venuta sedimentando nel corso dei secoli sono stati i riferimenti più immediati con cui Giuseppe Penone ha affrontato la specifica committenza. Egli ha avuto a disposizione un’area di circa 
                            cinque ettari suddivisa in riquadri precisi e situata a fianco della Reggia.
                        </p>
                        <p>
                            L’antico livello del Parco basso distrutto all’inizio del Settecento è stato ricostruito per ospitare, al di sotto, le centrali tecnologiche della Reggia. Occorreva tuttavia, e questo è certamente l’aspetto di maggiore originalità che i Giardini della Venaria propongono, restituire 
                            complessità a quegli ambiti del giardino seicentesco un tempo caratterizzati dall’intreccio della componente vegetale con un ricco apparato di sculture e di giochi d’acqua andati completamente perduti.
                        </p>
                    </div>
                    <hr className="margin mt-3" />
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">L’opera</h2>
                        <p>
                            La scelta di conservare lo schema castellamontiano per le riquadrature del terreno che suddividono in una decina di sottoaree il Parco basso permette alle opere ideate dall’artista di ricevere una spaziatura che cadenza e offre pause visive nel percorso di scoperta del progetto 
                            complessivo.<br/>
                            Le opere si inseriscono nel Giardino come nelle stanze di un museo, immaginando gli spazi cadenzati da riquadri precisi entro i quali sono collocate le opere come sale espositive delimitate da file di tigli e di betulle con sullo sfondo le architetture del Castellamonte e in lontananza 
                            le cime delle Alpi. Nel suo insieme il Parco basso è la manifestazione del <b>connubio tra la storia antica e la sensibilità contemporanea</b>, sottolineato dall’intreccio dei materiali più tipici del fare artistico con gli elementi naturali.
                        </p>
                        <p>
                            Non è la prima volta che l’artista progetta installazioni ambientali di carattere permanente. Per il famoso giardino storico francese, <i>le Tuileries</i> di Parigi, egli ha avuto a disposizione dei riquadri, dei bosquets e ha realizzato un giardino anche a Torino, sul Passante Ferroviario, 
                            un progetto basato sulla vegetazione che si dirama seguendo una biforcazione in forma di albero.<br/>
                            «La struttura dei fluidi è analoga in ogni elemento. Un corso d’acqua, un albero nella sua crescita e un sentiero hanno forme simili», scrive Penone in merito all’opera intitolata “<i>Albero Giardino</i>”, ideata per il Passante Ferroviario nel 2000. In questo lavoro all’aperto, l’azione 
                            umana, la cultura quindi, comparata alla forza degli elementi naturali, è espressa nella progettazione di un sentiero tracciato dalla vegetazione che in pianta disegna lo sviluppo di un albero.
                        </p>
                        <p>
                            Anche nel Parco basso della Reggia di Venaria, Penone prosegue nel <b>dialogo con gli elementi della natura</b> attraverso le sue sculture poetiche e innovative. Egli ha riallestito il tratto dei Giardini che si estende tra il muro castellamontiano e la Peschiera con opere ambientali dove 
                            gli elementi vegetali - alberi, siepi, tronchi - e i materiali più tipici del fare artistico - il bronzo, la pietra e il marmo - si fondono armoniosamente in un ritmo vivace che accompagna il visitatore portandolo a scoprire la bellezza della natura e dell’arte e l’affascinante dialogo tra 
                            antico e contemporaneo.
                        </p>
                        <p>
                            In luogo delle vasche e dei compartimenti ornamentali del Giardino seicentesco, ma in relazione al loro ritmo e dimensionamento, l’artista, dopo due anni di progettazione, ha definito le linee de <i>Il giardino delle sculture fluide</i> (2003 – 2007), un insieme di installazioni e sculture per 
                            il Parco basso della Reggia. Il percorso, scandito attualmente da quattordici opere, propone un'originale reinterpretazione del giardino barocco.
                        </p>
                        <p>
                            Fra le <b>installazioni</b> che lo compongono vi sono <i>Tra scorza e scorza</i>, due monumentali cortecce in bronzo che racchiudono un grande albero, <i>Disegno d’acqua</i>, uno specchio d’acqua dove appare e scompare un’impronta digitale.<br/>
                            Poco distante, la grande installazione <i>Pelle di marmo</i>, una superficie di quattrocento metri quadri di estensione composta da lastre di marmo bianco venato in dialogo ravvicinato con la scultura <i>Anatomia</i>, le cui venature rievocano il fluire degli elementi naturali.<br/>
                            Il complesso percorso trova i suoi snodi fondamentali nelle due imponenti opere Direzione “verso la luce” e Direzione “verso il centro della terra”. La prima è costituita da un albero monumentale in bronzo mentre la seconda, posta al termine del giardino, è rovesciata, puntando verso il centro della terra.
                        </p>
                        <p>
                            L’artista ha potuto progettare e realizzare un giardino concepito come un’opera totale grazie ad un’inedita collaborazione tra tutte le istituzioni coinvolte, fatto che ha permesso di affrontare un intervento globale coinvolgendo tutto il Parco basso della Venaria.
                        </p>
                    </div>
                    </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
