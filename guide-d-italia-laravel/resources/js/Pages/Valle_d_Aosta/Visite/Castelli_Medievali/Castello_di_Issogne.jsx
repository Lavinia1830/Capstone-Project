import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';

export default function Castello_di_Issogne(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='castello_di_issogne' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Castello di Issogne</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Il Castello di Issogne: tesori d’arte e prati immacolati</h2>
                    <p>
                        Uno dei monumenti più notevoli della <b>Bassa</b> <Link href='/valle_d_aosta' className='text-decoration-none color_link'>Valle d’Aosta</Link> è il <strong>Castello di Issogne</strong>, circondato da prati verdeggianti, montagne, oasi naturalistiche.<br/>
                        Fu per secoli la sontuosa residenza della <b>famiglia Challant</b>, che trasformò l’edificio preesistente in uno scrigno d’arte, tra dipinti, affreschi e preziose decorazioni.<br/>
                        Un luogo fuori dal tempo, dove rivivere i fasti rinascimentali.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Nel sontuoso maniero</h2>
                    <p>
                        Da proprietà dei vescovi di Aosta, il castello divenne la dimora di Giorgio di Challant, che tra il 1490 e il 1510 lo trasformò in una residenza raffinata per la cugina Margherita de La Chambre e il figlio Filiberto.<br/>
                        Dopo una serie di restauri, il maniero si presenta oggi nel suo aspetto gotico-rinascimentale.<br/>
                        La struttura è a ferro di cavallo e si affaccia su un vasto cortile e un bel <b>giardino all’italiana</b>.<br/>
                        Rappresenta l’attrazione principale del paese di <b>Issogne</b>, che si è sviluppato intorno ad esso.
                    </p>
                    <p>
                        Soffermatevi ad osservare con attenzione <b>il porticato al pianterreno</b> e concentratevi sulle lunette affrescate, dove potrete ammirare <b>scene di vita quotidiana nel borgo</b>: il corpo di guardia, il fornaio, lo speziale e il pizzicagnolo, il mercato di frutta 
                        e verdura, la sartoria: <b>immagini vivaci di grande realismo</b>.
                    </p>
                    <p>
                        In posizione centrale nel cortile spicca la <b>Fontana del Melograno</b>, sormontata da una scultura in ferro finemente lavorato che rappresenta l’albero simbolo di fortuna e prosperità, nonché della famiglia Challant.
                    </p>
                    <p>
                        Colpisce il contrasto tra l’esterno austero e il tripudio di decorazioni all’interno, fra pitture sulle travi lignee del soffitto e <b>affreschi raffiguranti scene di caccia</b> nella sala da pranzo e nella sala baronale.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Alcuni dettagli vi incuriosiranno</h2>
                    <p>
                        È il caso dei numerosissimi <b>graffiti, iscrizioni e disegni lasciati dagli ospiti del maniero nel corso di quattro secoli</b>: motti fantasiosi e citazioni colte, teoremi euclidei, notizie su avvenimenti storici e messaggi amorosi, alcuni dei quali piuttosto piccanti.
                    </p>
                    <p>
                        Nel 1872 il Castello di Issogne fu acquistato dal <b>pittore torinese Vittorio Avondo</b>, che con cura filologica lo riportò all’antico splendore dopo anni di abbandono.<br/>
                        Si deve a lui l’ambientazione tanto suggestiva, ricca di particolari, <b>arredi e oggetti di uso domestico</b> capaci di riportare il visitatore indietro nel tempo, tra la fine del Quattrocento e il Cinquecento. All’artista è dedicato un nuovo percorso espositivo 
                        all’interno del maniero, in un allestimento multimediale.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Nella vicina Verrès</h2>
                    <p>
                        Dopo la visita al <strong>Castello di Issogne</strong>, potreste spostarvi in quello di <Link href='/visite/valle_d_aosta/castelli_medievali/castel_di_verrès' className='text-decoration-none color_link'>Verrès</Link>. Si trova proprio davanti, a dividerli è soltanto 
                        la <b>Dora Baltea</b> attraversata dai <b>ponti romani</b>, uno dei vanti della regione Valle d’Aosta.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Relax all’aria aperta</h2>
                    <p>
                        Siete a una manciata di chilometri dal <b>Parco Naturale Mont Avic</b>, dove trovate una <Link href='/cosa_fare/valle_d_aosta/itinerari_in_bici_e_in_ebike' className='text-decoration-none color_link'>rete di sentieri</Link> molto ben organizzata e punti panoramici attrezzati 
                        con pannelli ricchi di informazioni.
                    </p>
                    <p>
                        Ancora più vicina è la <b>Riserva Naturale Lago di Villa</b>, a meno di 4 chilometri da Issogne.<br/>
                        Qui si apre <b>un bel lago</b>, dove tra giugno e luglio avrete la sorpresa di vedere affiorare le <b>ninfee bianche</b>. È un luogo molto rilassante, in un alternanza di ambienti palustri e zone aride, adatto a tutti e accessibile anche alle persone con disabilità.<br/>
                        Se imboccate il <b>sentiero numero 11</b>, vi ritroverete lungo un vero e proprio <b>percorso artistico</b>, con 14 opere realizzate utilizzando solo materiali naturali: terra, foglie e legno. <b>Un’esperienza adatta anche ai più piccoli</b>.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Per saperne di più</h2>
                    <p>
                        <b>L’accesso al castello di Issogne</b> prevede un biglietto a pagamento con <b>visita guidata</b> nelle sale interne. 
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d982.4267390484441!2d7.684350670492034!3d45.65417719888707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4788bffaa52e3e69%3A0x5ce85866aaafa7c3!2sCastello%20di%20Issogne!5e1!3m2!1sit!2sit!4v1713792619920!5m2!1sit!2sit"
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
