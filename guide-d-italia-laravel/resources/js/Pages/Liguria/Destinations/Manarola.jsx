import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';


export default function Manarola(props) {
    return (
        <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        >
        <main>
            <div className='manarola' style={{ position: 'relative' }}>
            <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Manarola</h1>
            <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
            <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
            </div>
            <div className="margin mt-3">
                <h2 className='color-subtitle'>Manarola, come un quadro variopinto nel cuore delle Cinque Terre</h2>
                <p>
                    Le case dal giallo al caldo arancione spuntano dalla scogliera scura, in un forte e meraviglioso contrasto di colori.<br/>
                    <strong>Manarola</strong> sorge qui, <b>su uno sperone a picco sul mare</b>, avvolta in una placida atmosfera romantica.
                </p>
                <p>
                    La natura possente del <b>Parco Nazionale delle</b> <Link href='/destinazioni/le_5_terre' className='text-decoration-none color_link'>Cinque Terre</Link> è solcata da sentieri, tutti da esplorare per ammirare i vigneti e gli uliveti sui tradizionali terrazzamenti.
                </p>
            </div>
            <div className="margin mt-3">
                <h2 className='color-subtitle'>Nel borgo panoramico</h2>
                <p>
                    Dai 70 metri di altitudine fino alla piazzetta sul mare, si snoda un dedalo di strette e ripide viuzze dove perdervi respirando l’aria salmastra. Il <b>borgo è antichissimo</b>, risale all’anno Mille: lo scelsero per la sua posizione strategica di avvistamento e difesa 
                    dalle incursioni dei pirati saraceni.
                </p>
                <p>
                    In un continuo saliscendi, dopo avere apprezzato le chiese più belle, tra cui quella gotica di San Lorenzo, dirigetevi verso il <b>Belvedere</b>, la cui bellezza non smentisce il nome: una sorta di terrazza spalancata sull’acqua, da cui si offre un panorama strepitoso.
                </p>
                <p>
                    Osservate la particolare caratteristica delle <b>“case torri” in stile genovese</b>, su vari piani e addossate l’una all’altra. <b>Non esiste una vera spiaggia qui</b>, ma potete scendere in acqua dagli scogli nella zona del porticciolo.
                </p>
            </div>
            <div className="margin mt-3">
                <h2 className='color-subtitle'>Lungo i sentieri che collegano le Cinque Terre</h2>
                <p>
                    Manarola è la frazione di un altro paese delle Cinque Terre, <b>Riomaggiore</b>, ed è collegata ad esso da un bel sentiero di circa un chilometro e mezzo, inerpicato sulla collina che separa i due borghi.
                </p>
                <p>
                    Un altro <b>percorso scenografico</b> parte direttamente dal villaggio e collega Manarola a Corniglia. Qui vi trovate nel “paesaggio culturale” tipico delle Cinque Terre, Patrimonio dell’Umanità dichiarato dall’Unesco.<br/>
                    Ammirerete i terrazzamenti che con un’antica tecnica, fin dai tempi dei romani, sono stati realizzati per coltivare le pendici impervie della montagna. Sulle terrazze che delineano uno scenario seducente si distendono uliveti, frutteti e vigneti.
                </p>
            </div>
            <div className="margin mt-3">
                <h2 className='color-subtitle'>Una cucina eroica, che unisce terra e mare</h2>
                <p>
                    La vocazione di <b>borgo agricolo e marinaro di Manarola</b> si esprime in una tradizione culinaria all’insegna di una cucina povera, ma straordinaria, in cui terra e mare si incontrano dando vita a grandi sapori, esaltati da vini eccellenti.<br/>
                    Nonostante sia un piccolo borgo, proprio grazie alla ricchezza e alla qualità dei ristoranti è diventata una mecca per gli amanti del buon cibo.
                </p>
                <p>
                    L’olio extravergine d’oliva del posto è superbo: magnifico su una bruschetta e perfetto alleato del pesce alla brace e degli ortaggi, da abbinare ai <b>vini Bianchi DOC</b> delle Cinque Terre.<br/>
                    La <b>focaccia ligure</b>, poi, è riconosciuta come una delle migliori della costa.
                </p>
                <p>
                    Scegliete la locanda che più vi ispira per una cena che non vi deluderà. Potete accomodarvi in un ristorante in collina, per mangiare tra i limoni e ammirare lo scenario dall’alto; oppure prenotare un tavolo al borgo, in deliziosi locali in pietra sui vicoli o con vista mare, 
                    verso il porticciolo. <b>Acciughe, polpi e calamari</b> sono tra le delizie di pesce più comuni, anticipati da una bruschetta al pesto e pomodoro, validissima anche solo per un aperitivo.
                </p>
                <p>
                    Gli ortaggi e le erbe farciscono la <b>torta salata Pasqualina</b>, i fiori di zucchina ripieni e fritti guadagnano in gusto se portati alla bocca con le mani.
                </p>
                <p>
                    Il tocco di classe arriva al dolce, accompagnato da un bicchiere di <b>Sciacchetrà</b> ben freddo: un <b>vino preziosissimo</b> che arriva dai vigneti terrazzati, un passito dalle origini lontane che <b>Slow Food</b> ha catalogato tra i suoi Presidi.
                </p>
            </div>
            <div className="margin mt-3">
                <h2 className='color-subtitle'>5 consigli per muovervi al meglio</h2>
                <p>
                    La raccomandazione è di arrivare a Manarola in treno e poi <b>muoversi sempre e solo a piedi</b>.
                    Nel <b>Parco Nazionale delle Cinque Terre</b> la viabilità è complicata e non esistono parcheggi di grandi dimensioni.
                </p>
                <p>
                    In paese, chiedete come partecipare a <b>degustazioni di vini e corsi di cucina</b>: un’esperienza originale, non solo gratificante per il palato, ma anche ricca di spunti culturali.
                </p>
                <p>
                    La <b>Cinque Terre Card</b> offre vari servizi, tra cui dei tour guidati tra i vigneti della <b>Fondazione Manarola</b>.
                </p>
                <p>
                    Recatevi al molo da cui partono i <b>battelli per le Cinque Terre</b>. Da Manarola potrete esplorare via mare un tratto di litorale incantevole e cogliere tutti i particolari della costa frastagliata, tra scogliere, grotte e insenature.
                </p>
            </div>
            <div className='margin mb-4'>
                <h3 className='color-subtitle text-center'>Mappa</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4032.2647873073774!2d9.727388423457292!3d44.108857217897395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d4fa9b3f42ac93%3A0x2b61928ec00d2b1a!2s19017%20Manarola%20SP!5e1!3m2!1sit!2sit!4v1712842738095!5m2!1sit!2sit"
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
