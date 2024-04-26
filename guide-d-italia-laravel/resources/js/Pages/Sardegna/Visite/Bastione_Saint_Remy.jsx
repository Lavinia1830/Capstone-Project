import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';

export default function Bastione_Saint_Remy(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='bastione_di_saint_remy' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Bastione di Saint Remy</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className='margin mt-3'>
                    <p className='fst-italic text-center'>
                        Uno scenografico e maestoso edificio di inizio XX secolo si erge nel centro storico di Cagliari, uno dei simboli del capoluogo della Sardegna, che ha assolto nel corso dei decenni a varie funzioni
                    </p>
                    <p>
                        Porta d’accesso dal quartiere di <b>Villanova</b> a quello fortificato di <b>Castello</b>, nel cuore della città vecchia, il bastione, che deve il nome al barone di <i>Saint Remy</i>, primo viceré piemontese, si affaccia su piazza Costituzione, all’incrocio tra due vie storicamente 
                        destinate a passeggiate e shopping, via Garibaldi e via Manno. È inconfondibilmente un simbolo di <Link href='/destinazioni/sardegna/cagliari' className='text-decoration-none color_link'>Cagliari</Link>, uno dei suoi complessi monumentali più maestosi e di maggior pregio, nonché 
                        prestigioso spazio espositivo.<br/>
                        La passeggiata coperta e la maestosa terrazza Umberto I furono progettate da Giuseppe Costa e Fulgenzio Setti, su un’idea di metà Ottocento dall’architetto Gaetano Cima, e costruite in stile classicheggiante tra 1896 e 1902 sulle antiche cortine difensive del circuito fortificato 
                        della città medievale. Il bastione di Saint Remy è il risultato di spianamento e riutilizzo degli antichi bastioni dello Sperone e della Zecca, costruiti dagli spagnoli nella seconda metà del Cinquecento.<br/>
                        L’imponente struttura è composta da colonne in calcare di colore bianco e giallo con capitelli in stile corinzio. Lo scalone principale, lungo e movimentato, si snoda dalla piazza con diverse rampe che si riuniscono a mezza altezza in un ampio pianerottolo. Da qui accederai alla 
                        passeggiata coperta, che si sviluppa con vasti e luminosi ambienti, dipinti con colori vivaci e chiusi da grandi arcate. Sotto un grande arco, che domina tutta la costruzione, si trova un’ulteriore scala con due rampe circolari che conduce fino alla terrazza Umberto I da cui godrai 
                        di un magnifico panorama su tutta la città e verso il mare. Il piazzale ha altre due rampe che conducono al <b>bastione di santa Caterina</b>.<br/>
                        La scalinata e l’arco di trionfo, danneggiati dai bombardamenti della seconda guerra mondiale, a partire dal 1946 furono fedelmente ricostruiti. Durante il corso degli anni, gli ampi spazi della passeggiata coperta furono adibiti a molteplici funzioni: inizialmente sala banchetti, 
                        in epoca bellica infermeria e, successivamente, rifugio per gli sfollati. Nel 1948, inoltre, ospitò la prima edizione della Fiera internazionale della Sardegna.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d928.8594113867122!2d13.3554115234698!3d38.11424413447295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1319ef6198ea25c9%3A0x8cda5f90f930776a!2sCattedrale%20di%20Palermo!5e1!3m2!1sit!2sit!4v1713522767168!5m2!1sit!2sit"
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
