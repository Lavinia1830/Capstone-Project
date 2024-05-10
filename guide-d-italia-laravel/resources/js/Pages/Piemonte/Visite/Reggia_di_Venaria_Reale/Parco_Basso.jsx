import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Parco_Basso(props) {
    return (
        <>
            <Head title="Parco Basso"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='parco_basso' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Parco Basso</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p className='fst-italic text-center'>
                            Il tour nel Parco basso include il grande bacino d'acqua della Peschiera, lo spazio del Giardino delle Sculture Fluide di Giuseppe Penone, le grotte seicentesche, i resti della Fontana dell'Ercole e del Tempio di Diana, collegati dalla visione all'infinito del canale d’acqua, e gli orti e i frutteti 
                            del Potager Royal più grande d'Italia.
                        </p>
                    </div>
                    <div className='margin mt-3'>
                        <h2 className="color-subtitle">Grotte e muro castellamontiano</h2>
                        <p>
                            Come risulta da <b>disegni del Seicento</b>, che rappresentano il complesso della Reggia visto da nord, il muro di terrazzamento, che correva nel tratto compreso tra la Corte d’onore e la Fontana d’Ercole, costituiva per il giardino basso un fondale ricco di valore scenografico con una articolazione di 
                            sporgenze e rientranze corrispondenti alla scansione geometrica del giardino stesso. <br/>
                            Le superfici erano rivestite di concrezioni e scorie minerali, con incrostazioni di conchiglie, che potenziavano gli effetti chiaroscurali prodotti da nicchie e grotte. Fontane e statue di marmo arricchivano il manufatto con significati allegorici e tocchi di luminosità. <br/>
                            La rimozione delle statue avvenne già nel corso del Settecento.
                        </p>
                        <p>
                            Con l’<b>intervento di recupero</b>, la struttura, che era ormai interrata, è stata riportata alla luce. Il restauro puramente conservativo del muraglione, privo delle funzioni decorative seicentesche, evidenzia la sua funzione di sostegno e ne valorizza le linee architettoniche. In una zona limitata, è 
                            stato realizzato un esempio di come era il rivestimento decorativo della superficie muraria. Tra i due livelli, sul lato verso la Fontana d’Ercole, è stato ripristinato il collegamento mediante una scala in ferro e legno che non interferisce con le strutture murarie originarie.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Il Giardino delle Sculture Fluide di Giuseppe Penone</h2>
                        <p>
                            Sviluppato su un terreno che si estende per tre ettari, <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/i_capolavori/giardino_delle_sculture_fluide' className='text-decoration-none color_link'>Il Giardino delle Sculture Fluide di Giuseppe Penone</Link> presenta alberi in bronzo, fontane e 
                            boschetti ed è strutturato sulla base del Giardino delle Fontane che Amedeo di Castellamonte aveva ideato per il parco della Reggia.
                        </p>
                        <p>
                            Si compone di <b>quattordici opere</b>, realizzate tra il 2003 e il 2007, ed è pensato come un luogo sensoriale dove i vari materiali utilizzati (alberi, marmo, acqua, bronzo, pietra e granito) scandiscono il passaggio da una scultura all’altra, in un continuo stato di fluidità tra gli elementi, al fine 
                            di scoprire le analogie che legano i mondi minerale, vegetale e umano.
                        </p>
                        <p>
                            Il progetto è stato realizzato in collaborazione con il Castello di Rivoli - Museo d’Arte Contemporanea.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">La Peschiera</h2>
                        <p>
                            Nella descrizione dei giardini fatta da Amedeo di Castellamonte, che li progettò poco dopo la metà del Seicento, viene dato rilievo al “<b>grande canale</b>” ai piedi dei giardini di settentrione “<b>tra muri, coronato e recinto d’allee piantate d’Alberi di Roveri</b>” in cui confluivano le acque delle 
                            numerose fontane e del torrente Ceronda e in cui le dame e le altezze reali erano solite dilettarsi godendo l’ombra in “<b>pompose Barche</b>” e deliziandosi nella pesca e nella musica.
                        </p>
                        <p>
                            In alcune incisioni del Seicento è rappresentata una grande vasca rettangolare, ma già nel disegno attribuito a Jules Hardouin, Mansart e Robert de Cotte, legato al progetto di <b>Michelangelo Garove</b> del 1699, al suo posto erano fontane e <i>parterre erbosi</i>. <br/> 
                            In un rilievo del 1826 tutta la zona appare trattata a prato.
                        </p>
                        <p>
                            Nell’<b>attuale realizzazione</b>, si è voluto creare un vasto bacino d’acqua in cui la Reggia potesse rispecchiarsi, con l’intento di creare occasioni di svago e prevedendo futuri arricchimenti artistici in corrispondenza della siepe perimetrale di carpini.<br/>
                            Cassoni mobili nell’acqua contengono piante di ninfee, che fioriscono da aprile - maggio fino a settembre. Sotto il livello dell’acqua sono presenti piante ossigenanti autoctone. <br/>
                            Ad est e a ovest della Peschiera piante di varie specie locali ed esotiche, di notevole potenzialità scenografica (<i>Morus Alba, Acer Campestre, Sophora Japonica, Liquidambar</i>), formano boschetti destinati a creare ampie zone d’ombra.
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
