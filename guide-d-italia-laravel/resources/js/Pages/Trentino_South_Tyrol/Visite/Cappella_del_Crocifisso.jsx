import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Image } from 'react-bootstrap';
import Cappella_del_Crocifisso_Img from '../../../../assets/Trentino_Alto_Adige/Cappella_del_Crocifisso_Trento_Trentino_Alto_Adige1.jpg';

export default function Cappella_del_Crocifisso(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='capella_del_crocifisso' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Cappella del Crocifisso</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Il visitatore che si reca nel <b>Duomo del Trento</b>, tra le opere d'arte da vedere, dovrebbe annoverare il <strong>Crocifisso del Concilio</strong>, così chiamato perché sotto di esso furono firmati i decreti conclusivi del Concilio di Trento (1545-1563). Il Crocifisso è conservato nella <b>Cappella 
                        Alberti</b> costruita nel 1682-1687, sulla parete sd della cattedrale, per volere del principe vescovo di Trento, Fransesco Alberti Poja (1677-1689), come luogo della sua sepoltura e conservazione della reliqua. È un'opera esemplare nel panorama artistico trentino, esempio di arte regionale molto spesso
                        influenzata della scuola tedesca d'Oltralpe.
                    </p>
                    <p>
                        Il vescovo Alberti Poja fece costruire una cappella a pianta quadrata con tamburo ottagonale, cupola con lanterna e una decorazione pittorica e architettonica che doveva esaltare il Crocifisso del Concilio di Tranto. La cappella venne realizzata nello stile barocco dell'epoca che tendeva al meraviglioso 
                        e allo sbalorditivo con pitture di <b>Giuseppe Alberti Aliprandi</b> della Valle d'Intelvi. Purtroppo molte di queste decorazioni sono state rimosse nel restauro del 1843-1845 per smorzare l'aspetto vistosamente barocco della cappell, probabilmente poso apprezzato dalla curia vescovile dell'epoca. Per 
                        fortuna gli stucchi che ornavano la cappella non sono andati tutti persi, alcuni di questi oggi decorano l'altare che contiene il Complesso scultoreo del Crocifisso.
                    </p>
                    <p>
                        La <b>decorazione pittpresca di giuseppe Alberti</b> prevedeva otto <i>Episodi Biblici</i> affrescati nella cupola, scelti per le loro connessioni con il tema della Crocifissione e della salvezza; a questi fanno seguito più in basso, sulle pareti del tamburo, cinque <i>Scene della Passione</i>e, nei 
                        pennacchi, la raffigurazione allegorica di <i>Quattro Virtù</i>, le virtù esercitate da Cristo nel suo sacrificio. A questo tema si legano le rappresentazione della tele laterali della cappella che raffigurano l'<i>Adorazione dei Pastori</i> e la <i>Resurrezione</i>, opere di pittura barocca del bavarese 
                        Carlo Loth. Entro l'altare, infine, il rilievo di <i>Adamo ed Eva davanti all'albero del bene e del male</i> che allude al Peccato originale (la causa del sacrificio di Cristo), le statue della <i>Maddalena</i> e della <i>Veronica</i> (oggi sistemate davanti all'ingresso della cappella) nonché le 
                        rappresentazione dell'<i>Arma Christi</i> che evocano in termini diretti la Passione.
                    </p>
                    <Image src={Cappella_del_Crocifisso_Img} className='mx-auto'/>
                    <p>
                        Questo complesso programma iconografico è stato pensato per esaltare la <b>Crocifissione del Concilio di Trento</b>, un'epoca imponente con i suoi 218 cm di altezza, e della forte drammaticità, tutto da poterla ritenere tra le più tragiche rappresentazioni della morte di Cristo in croce. La scultura è di 
                        un artista tedesco, Sixtus Frei da Norimberga, che realizzò la scultura dopo il 1511, quando arrivò nel capoluogo trentino, in legno dipinto di stile tardogotico, dove ogni dettaglio è stato studiato per trasmettere il dolore di Cristo in croce e la tristezza dei due dolenti, Maria Addolorata e San Giovanni 
                        apostolo. Il Cristo con i capelli che cadono in disordine, le sopracciglia che si inarcano sulla fronte corrugata, gli occhi che furiescono delle occhiaie incavate e la bocca semi apertura accentuano la sofferenza del figlio di Dio. Una sofferenza che viene amplificata dell'ossatura della cassa toracica, 
                        dove si intravedono le costole, da una ferita che mostra il sangue abbondante e da chiodi che fissano il corpo alla croce. I due dolenti, Maria e Giovanni, sono raffigurati in ricchi panneggi ed entrambi evitano di guardare il Crocifisso, come a voler rifuggire dal guardare lo spettacolo drammatico del Cristo morente.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43798.57631651228!2d11.661133277243971!3d46.42107785420301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4778685353a32d7b%3A0xed9ebfe1f9c7d41!2sCappella%20del%20Crocifisso!5e1!3m2!1sit!2sit!4v1712926582648!5m2!1sit!2sit"
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
