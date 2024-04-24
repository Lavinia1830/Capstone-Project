import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';

export default function Prodotti_Tipici_Valdostani(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='prodotti_tipici_valdostani' style={{ position: 'relative' }}>
                    <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Prodotti Tipici Valdostani</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Enogastronomia</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Tra le tipologie di <b>viaggio</b>, optare per un percorso che segua le <b>tappe del gusto</b> ha il suo perché. Assaporando i <b>piatti tipici</b> di un territorio riuscirete, infatti, in una duplice missione: soddisfare il palato e 
                        conoscere le tradizioni del luogo.<br/>
                        Un <b>itinerario enogastronomico</b> in <Link href='/valle_d_aosta' className='text-decoration-none color_link'>Valle d’Aosta</Link> è questo e molto di più. Sapori di montagna, tradizioni preziose, ingredienti pregiatissimi: 
                        i <b>prodotti tipici della Valle d'Aosta</b> meritano il viaggio e al primo assaggio capirete perché.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Le alte vette delle Alpi: dal latte ai formaggi</h2>
                    <p>
                        Passeggiando per le vallate alpine, sovrastate da alcune delle vette più famose d’Europa, attraversate una natura incontaminata e degustate storici prodotti locali.
                    </p>
                    <p>
                        Il <b>tour dei sapori della</b> <Link href='/valle_d_aosta' className='text-decoration-none color_link'>Valle d’Aosta</Link> inizia dal <b>latte</b>. Qualità e profumo contraddistinguono quello <b>valdostano</b>, grazie ai 
                        pascoli montani e all’allevamento in una terra che nutre le vacche esclusivamente con erba fresca, fiori e acqua purissima.
                    </p>
                    <p>
                        Da un prodotto così pregiato non può che derivare una varietà di <b>formaggi di elevata qualità</b>. Due sono a marchio <b>DOP</b>: la dolce Fontina, dalla pasta morbida e fondente in bocca, e il Valle d’Aosta Fromadzo, il 
                        cui sapore cambia da semidolce a leggermente salato con una punta di piccante, a seconda della stagionatura. Le condizioni geografiche, climatiche e culturali garantiscono il gusto autentico e originale di queste due 
                        prelibatezze.
                    </p>
                    <p>
                        Non è da meno la <b>Toma di Gressoney</b>, formaggio da tavola a pasta semidura dalle importanti proprietà organolettiche, che si inserisce nelle tipologie d’alpeggio. Se siete alla ricerca di una vera chicca, non potete 
                        perdere l’aroma speziato del <b>Salignön</b>, ricotta dalla consistenza cremosa e grassa, perfetta come antipasto. La lista è ancora lunga, ma concludiamo con il morbido <b>Reblec</b>, ricavato dalla panna affiorata 
                        spontaneamente, cui si aggiunge latte crudo intero. 
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">La gastronomia di nicchia: i salumi valdostani</h2>
                    <p>
                        A meritare il piacere dell’assaggio sono anche i <b>salumi valdostani</b>, ennesima testimonianza di una cultura rurale che rispetta la tradizione e la storia della regione.<br/>
                        Visitando le località turistiche della Valle d’Aosta, vi imbatterete in vere e proprie eccellenze, più di <b>30 Prodotti Agroalimentari Tradizionali (PAT)</b>.
                    </p>
                    <p>
                        Dall’antico <b>Boudin</b>, insaccato preparato con patate lesse, lardo, sangue di maiale, sale e spezie, alla <b>Saouseusse</b>, salsiccia secca aromatizzata con sale, pepe, aglio, chiodi di garofano, cannella e noce 
                        moscata, passando per la <b>Motzetta</b>, pezzo di carne di muscolo o di coscia essiccata e insaporita con erbe e spezie locali, il <b>Teuteun</b>, mammella bovina salmistrata e servita con salse e marmellate, e 
                        il <b>Jambon Saint-Oyen</b>, prosciutto cotto alla brace, non avete che l’imbarazzo della scelta!<br/>
                        Beni di nicchia di altissima qualità, che hanno origini antiche e che valorizzano il territorio in cui sono prodotti.
                    </p>
                    <p>
                        Se siete fortunati, sui taglieri valdostani troverete il <b>Vallée d’Aoste Jambon de Bosses</b>, prosciutto crudo stagionato con erbe di montagna, e il pregiato <b>Vallée d’Aoste Lard d’Anard</b>, dal sapore delicato 
                        e il profumo speziato, entrambi a marchio <b>DOP</b>. Accompagnateli con del <b>pane nero valdostano</b>, realizzato principalmente con farina di segale. Il colore scuro, la mollica compatta e la crosta dura e sottile, 
                        insieme al sapore marcato e aromatico, tendente all’acidulo, lo rendono inconfondibile!
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Dal dolce alla frutta: un connubio tra liquori ed erbe officinali</h2>
                    <p>
                        Se è vero che il <b>dolce</b>, secondo il galateo, va servito prima della <b>frutta</b>, ciò non vale in <Link href='/valle_d_aosta' className='text-decoration-none color_link'>Valle d’Aosta</Link>. Nella <b>cultura 
                        gastronomica locale</b>, infatti, i due elementi si fondono. Ne sono una prova le <b>tegole valdostane</b>, così chiamate per la loro forma, simile alle tegole dei tetti. La deliziosa cialda, sottilissima e fragrante, 
                        è realizzata con ingredienti semplici, a base di <b>frutta secca</b>, nello specifico <b>mandorle</b> e <b>nocciole</b>. Spalmatele di <b>miele valdostano</b>, lavorato all’antica, senza alcun trattamento termico. <br/>
                        Accompagnatele con un bel bicchiere di <b>grappa</b>, distillato digestivo ideale, o con un <b>génépy</b>, liquore ricavato dalla linfa dell’artemisia.
                    </p>
                    <p>
                        Ci sono, poi, le <b>erbe officinali</b> che crescono in alta quota, note per le proprietà terapeutiche e utilizzate per insaporire i <b>piatti valdostani</b>.
                    </p>
                    <p>
                        A favorire la variegata <b>frutticoltura</b> sono le peculiari condizioni climatiche e la posizione intramontana della regione. Oltre alla citata <b>frutta secca</b>, cui si aggiungono <b>castagne</b> e <b>noci</b>, il 
                        frutto più diffuso è la <b>mela</b>: <b>renetta</b> o <b>golden</b> ha nel suo succo profumi e gusti del microclima alpino. Idem per l’aroma delle <b>pere martin sec</b>, prevalentemente sciroppate. 
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">La Valle d’Aosta da bere: il ricco panorama vitivinicolo</h2>
                    <p>
                        Sulle pendenze da capogiro che caratterizzano il paesaggio vi imbatterete in numerosi vigneti, risalenti addirittura all’Età del bronzo, che si declinano in una gamma di <b>vini di montagna DOC</b>. Quella valdostana è 
                        una <b>viticoltura eroica</b>, che resiste a scarse precipitazioni, ventilazione costante ed escursioni termiche significative tra giorno e notte. È per questo che l’uva matura con rapidità e sviluppa <b>aromi unici</b>. 
                        Lo scoprite sorseggiando un delicato <b>Blanc de Morgex et de La Salle</b>, bianco secco dall’aroma di erbe d’alta quota, o un vellutato <b>Chambave Muscat</b>, rosso moscato ottimo per i fuori pasto. Magari in una delle 
                        tante visite guidate nelle cantine.
                    </p>
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
    )
}

