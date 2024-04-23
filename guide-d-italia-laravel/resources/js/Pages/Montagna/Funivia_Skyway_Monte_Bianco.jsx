import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/inertia-react';
import {Card, CardBody} from 'react-bootstrap';

export default function Funivia_Skyway_Monte_Bianco(props) {

    const [isHoveredCourmayeurMontagna, setIsHoveredCourmayeurMontagna] = useState(false);
    const [isHoveredMonteBianco, setIsHoveredMonteBianco] = useState(false);
    const [isHoveredAosta, setIsHoveredAosta] = useState(false);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='funivia_skyway_monte_bianco' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Funivia Skyway Monte Bianco</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Vero e proprio capolavoro di ingegneria e architettura, raggiungendo i <b>3466 metri</b>, vi porta ai piedi della montagna più bella del mondo permettendo a chiunque di ammirarla da una prospettiva inedita, entrando profondamente in contatto con la maestosità del massiccio 
                        e catturando orizzonti mai raggiunti.
                    </p>
                    <p>
                        Siamo a <b>Courmayeur</b> e la magia di <strong>Skyway Monte Bianco</strong> inizia dal tragitto. Composta da cabine che ruotano a 360 gradi, questa funivia regala una visuale mozzafiato sulla montagna più alta d’Europa, ma anche sulle altre vette valdostane e il risultato 
                        è un viaggio nel viaggio ricco di emozioni. Duemila metri in quindici minuti e un’ascesa dolce, veloce e fluida. 
                    </p>
                    <p>
                        Via privilegiata alla cima, Skyway Courmayeur si integra perfettamente con il paesaggio circostante. La sua storia è legata a doppio filo con quella dell’uomo e di chi, insieme a lui, ha creduto che rendere accessibile a tutti la grande montagna non fosse impossibile.
                    </p>
                    <p>
                        Tre le stazioni che ospitano al loro interno ristoranti e bar, un museo, un cinema, diverse sale conferenze, un giardino botanico e addirittura un’area giochi per far divertire anche i più piccini che resteranno certamente incantati. E poi le terrazze dove vi sembrerà di 
                        vedere per la prima volta.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Skyway del Monte Bianco a Courmayeur: oltre alla vista c’è di più</h2>
                    <p>
                        La partenza è alla stazione <b>Courmayeur/The Valley</b>, a 1.300 m, alimentata con pannelli fotovoltaici per assicurare un impatto minimo sull’ambiente.<br/>
                        Qui si trovano i parcheggi e il bar per una sosta prima dell’avventura, ma è anche possibile bearsi dei tanti ciliegi selvatici piantati sulla collina che sta alla sinistra della stazione di Skyway, parte del <b>progetto #savetheglacier</b> perché riportano il verde e 
                        l’ossigeno ai piedi del Monte Bianco per mitigare l’effetto del riscaldamento globale.<br/>
                        Chi lo desidera può adottare un ciliegio a proprio nome o fare un dono a chi ama. 
                    </p>
                    <p>
                        La fermata successiva è <b>Pavillon du Mont Fréty/The Mountain</b>, a 2.200 m, una stazione intermedia che offre divertimenti per tutti: i golosi non mancheranno la sosta gourmet presso il Mountain Bar e il Ristorante Alpino che propongono i più autentici sapori della zona 
                        mentre i più goderecci si faranno tentare dalle deliziose bollicine offerte dalla Cave du Mont Blanc. La cantina propone gli <b>spumanti “più alti” d’Europa</b>, prodotti a 1.200 m nei vigneti di Morgex e La Salle e poi trasportati in alta quota per la spumantizzazione. 
                    </p>
                    <p>
                        Qui si trovano anche una speciale shopping area, il Giardino alpino Saussurea che ospita numerose specie di fiori alpini, un originale parco divertimenti per bambini e un’ampia terrazza panoramica.
                    </p>
                    <p>
                        Il percorso su Skyway Monte Bianco termina a <b>Punta Helbronner/The Sky</b>, a 3.466 m, punto reso unico dalla <b>spettacolare terrazza</b> che offre una vista impareggiabile sul massiccio e tutte le sue vette.<br/>
                        Anche qui è consigliata una sosta all’insegna del <Link href='/enogastronomia/valle_d_aosta' className='text-decoration-none color_link'>sapore</Link>: nel café più alto d’Italia, il Kartell Bistrot Panoramic, dove si possono degustare specialità come il vino del luogo, 
                        la polenta e le tante torte casalinghe. 
                    </p>
                    <p>
                        I curiosi potranno completare la gita visitando l’esposizione permanente di cristalli di cui il massiccio del Monte Bianco abbonda. 
                    </p>
                    <p>
                        Appassionati di trekking c’è spazio anche per voi. Attraverso un tunnel si raggiunge il Rifugio Torino, punto di partenza ideale per chi è in cerca di percorsi alpinistici e fuori pista che si collegano a Chamonix.
                    </p>
                </div>
                <div className='row d-flex justify-content-center mx-0 mb-4'>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Funivia_Skyway_MB'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/montagna/valle_d_aosta/courmayeur_montagna'
                            onMouseEnter={() => setIsHoveredCourmayeurMontagna(true)}
                            onMouseLeave={() => setIsHoveredCourmayeurMontagna(false)}
                            >Courmayeur Montagna{isHoveredCourmayeurMontagna && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Funivia_Skyway_MB'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/montagna/valle_d_aosta/monte_bianco'
                            onMouseEnter={() => setIsHoveredMonteBianco(true)}
                            onMouseLeave={() => setIsHoveredMonteBianco(false)}
                            >Monte Bianco {isHoveredMonteBianco && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Skyway Monte Bianco tra storia e sogno</h2>
                    <p>
                        L’idea di una funivia che porta al cielo la si deve a Dino Lora Totino che nel 1941 si mette a progettare l’impossibile.<br/>
                        L’ingegnere, senza farsi scoraggiare dalla Seconda guerra mondiale né dalle evidenti difficoltà logistiche, mette su carta il sogno di avvicinare uomo e montagna come mai prima.<br/>
                        Stazione dopo stazione nel 1947 il dislivello di più di duemila metri non è più irraggiungibile e il mezzo di risalita che collega <Link href='/destinazioni/valle_d_aosta' className='text-decoration-none color_link'>Courmayeur</Link> al Rifugio Torino diventa realtà.
                    </p>
                    <p>
                        Nel 2015 inizia la seconda storia di Skyway Monte Bianco, un’opera rinnovata e ripensata per <b>fondersi con la natura</b> senza sconvolgerne l’aspetto e senza perdere quello spirito d’avanguardia che lo anima da quasi 80 anni.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Come raggiungere Skyway Monte Bianco a Courmayeur</h2>
                    <p>
                        <b>Raggiungere Skyway Monte Bianco</b> a Courmayeur è semplice. Chi si muove in auto dall’Italia può imboccare la Strada Statale 26 della Valle d’Aosta e l'autostrada A5 Torino-Aosta-Courmayeur. Sono molto comodi anche gli autobus: Courmayeur offre un servizio di trasporto pubblico con collegamenti 
                        ad Aosta, Valle del Monte Bianco e dalle principali città del Nord Italia.<br/>
                        Chi preferisce l’aereo può scegliere come destinazione l’aeroporto di <Link href='/destinazioni/valle_d_aosta/aosta' className='text-decoration-none color_link'>Aosta</Link> che dista circa 40 km da Courmayeur con collegamenti charter stagionali, ma anche di aviazione generale privata e commerciale. 
                        Per giungere in treno, invece, la linea ferroviaria è quella Chivasso - Aosta.
                    </p>
                </div>
                <div className='row d-flex justify-content-center mx-0 mb-4'>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Funivia_Skyway_MB_Aosta'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/valle_d_aosta/aosta'
                            onMouseEnter={() => setIsHoveredAosta(true)}
                            onMouseLeave={() => setIsHoveredAosta(false)}
                            >Aosta {isHoveredAosta && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
    )
}
