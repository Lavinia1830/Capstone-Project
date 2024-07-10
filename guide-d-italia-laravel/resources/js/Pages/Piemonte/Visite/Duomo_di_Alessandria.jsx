import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Duomo_di_Alessandria(props) {
    return (
        <>
            <Head title="Duomo di Alessandria"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='duomo_di_alessandria' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Duomo di Alessandria</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                        <div className="margin mt-3">
                        <p>
                            La <strong>cattedrale di Alessandria</strong>, posta al <b>centro</b> della <b>città</b>, non presenta purtroppo quelle caratteristiche di <b>severa 
                            antichità</b> proprie delle <b>chiese cattedrali</b> delle altre città italiane.
                        </p>
                        <p>
                            Per la verità ad <b>Alessandria</b> vi era una <b>cattedrale</b>, e <b>bellissima</b>, che risaliva al sec. <b>XIII</b>, ma fu abbattuta 
                            nel <b>1803</b> per esigenze militari dal dittatore dell’epoca <b>Napoleone Bonaparte</b>.
                        </p>
                        <p>
                            La prima <b>chiesa cattedrale</b>, col titolo di <b>S. Pietro</b>, era stata fabbricata con la città tra il <b>1170</b> e il <b>1175</b> sull’area
                            dell’attuale piazza della <b>Libertà</b>. Ma risultando troppo piccola per le esigenze della nuova città fu atterrata e sostituita da un secondo 
                            edificio, su disegno dell’arch. <b>Ruffino Bottini</b> di <b>Casale</b>, che la costruì nello stile di <b>transizione lombardo-gotico</b>.
                        </p>
                        <p>
                            La fabbrica iniziatasi nel <b>1228</b>, era ultimata nel <b>1297</b>; il <b>campanile</b> incominciato nel <b>1292</b> veniva finito soltanto 
                            nel <b>1629</b>; la porta maggiore scolpita da <b>Petrobono</b> veniva inaugurata il <b>6 aprile 1384</b>. Si ha notizia di un restauro generale 
                            nel <b>1585</b>.
                        </p>
                        <p>
                            Purtroppo questa seconda e bella <b>cattedrale</b> scompariva, come abbiamo detto, nel <b>1803</b>. Il <b>capitolo</b>, dopo una breve sosta nella 
                            chiesetta dell’<b>Annunziata</b>, in Via <b>Urbano Rattazzi</b>, si trasferiva il <b>19 febbraio 1803</b> nella chiesa di <b>Sant’Alessandro</b>. 
                            Il <b>17 agosto 1805</b> otteneva dallo stesso <b>Napoleone</b>, in sostituzione della vecchia <b>cattedrale</b>, la chiesa di <b>San Marco</b>. 
                            Questa chiesa in stile <b>gotico</b> con quattro <b>cappelle minori</b> esisteva già nel <b>1231</b>, affidata ai <b>canonici 
                            regolari</b> di <b>S. Martino di Mantova</b>.
                        </p>
                        <p>
                            Passò ai <b>domenicani</b> del <b>B. Salomonio</b> dal <b>1253</b> fino al <b>1794</b>, anno in cui per esigenze militari e poi, soppressi i 
                            regolari, fu incamerata dal <b>governo francese</b>, adibendola prima a vari usi, e dopo come <b>quartiere</b>. Il <b>convento attiguo</b> veniva 
                            trasformato in <b>prigione correzionale</b> della città e dipartimento.
                        </p>
                        <p>
                            La chiesa di <b>S. Marco</b>, concessa quale nuova <b>cattedrale</b>, era però ridotta in pessimo stato. Fu necessaria una ricostruzione quasi 
                            totale e questa, su disegno dell’architetto <b>Cristoforo Valizzone</b>, si effettuò tra il <b>maggio 1807</b> e il <b>novembre 1810</b>. Si ebbe 
                            così una chiesa di stile <b>neoclassico</b> in stridente contrasto con le parti vecchie conservate: cioè il <b>voltone</b> della <b>navata 
                            centrale</b> e le <b>colonne</b>.
                        </p>
                        <p>
                            Il <b>1° dicembre 1810</b>, benedetta dal vicario generale di <b>Casale Monferrato</b> mons. <b>Francesco Salina</b>, era riaperta non più con il 
                            titolo di <b>S. Marco</b>, ma di <b>S. Pietro</b> e <b>Marco</b>. Il solenne e processionale <b>trapasso</b> da <b>S. Alessandro</b> in <b>duomo</b>, 
                            causa pioggia abbondante, fu però rimandato al giorno seguente <b>2 dicembre</b>.
                        </p>
                        <p>
                            Negli anni <b>1874-1879</b>, su disegno del conte <b>Emilio Arboreo Mella</b>, vercellese, si eliminò l’inconveniente del doppio stile, 
                            il <b>gotico</b> nella parte vecchia e il <b>neo-classico</b> nella nuova, e si giunse all’attuale architettura in stile <b>bramantesco</b> con <b>cupola</b> dello 
                            stesso stile nell’incrocio dei due bracci. Durante questi <b>restauri</b> il <b>capitolo</b> della <b>cattedrale</b> peregrinò prima 
                            a <b>S. Stefano</b> (<b>15 giugno 1874</b>) e poi nella chiesa della <b>SS. Trinità</b> in Via <b>Ghilini</b> (<b>23 dicembre 1874</b>).
                        </p>
                        <p>
                            L’attuale <b>decorazione</b> risale al <b>1926-29</b> e si fece dopo il terribile <b>incendio</b> che nella notte tra l’<b>1</b> e il <b>2 settembre 
                            1925</b> “tutto sconvolgeva e guastava” nella <b>cattedrale</b> di <b>Alessandrina</b>.
                        </p>
                        <p>
                            Il <b>vescovo</b> S. E. mons. <b>Nicolao Milone</b> si sobbarcava subito il duro compito di portare a “novello splendore il massimo nostro <b>tempio</b>”. 
                            E con le <b>offerte</b> degli alessandrini, alle quali si erano aggiunte quelle più vistose di <b>S. S. Pio XI</b>, del comm. <b>Perego Lavagetto</b>, 
                            del sen. <b>Teresio Borsalino</b>, nella primavera del <b>1926</b> si potevano iniziare i lavori di <b>restauro</b>.
                        </p>
                        <p>
                            La <b>decorazione</b>, in seguito a concorso, veniva affidata al prof. <b>Luigi Morgari</b>; il capo mastro <b>Giuseppe Sacchi</b>, alessandrino, si 
                            assumeva l’onere delle opere murarie.
                        </p>
                        <p>
                            Nell’<b>aprile 1929</b>, l’<b>inaugurazione</b> dei restauri, che coincideva così con la celebrazione cinquantenaria dei restauri <b>1879</b>.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1075.0756132371414!2d8.6171597573041!3d44.91215969994672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4787743dceb6e6f5%3A0x7ada7d548848965c!2sCattedrale%20dei%20Santi%20Pietro%20e%20Marco!5e1!3m2!1sit!2sit!4v1718803222496!5m2!1sit!2sit"
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
