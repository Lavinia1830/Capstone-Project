import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';

export default function Castello_di_Ussel(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='castello_di_ussel' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Castello di Ussel</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Il Castello di Ussel: lo spettacolo di una fortezza inespugnabile</h2>
                    <p>
                        A mano a mano che avanzate lungo il ripido sentiero, si avvicina la visione solenne del <strong>Castello di Ussel</strong>. E, wow! Nessun muro di cinta difensivo lo protegge, perché il maniero ha già in sé il carattere assoluto della fortezza inespugnabile. 
                        Il parallelepipedo in pietra dalle linee austere svetta su un promontorio roccioso, che con la sua sagoma severa <b>sorveglia le cittadine di Châtillon e Saint-Vincent</b> fino al fondovalle attraversato dalla <Link href='/cosa_fare/valle_d_aosta/rafting' 
                        className='text-decoration-none color_link'>Dora Baltea</Link>. Uno spettacolo grandioso.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Sulla rocca dal panorama vertiginoso</h2>
                    <p>
                        L’ultimo tratto di una cinquantina di metri verso il Castello di Ussel partendo dal pianoro sottostante è percorribile solo a piedi: un modo lento di avvicinamento dal lato di accesso, mentre sull’altro fronte si apre un vertiginoso precipizio. Il maniero 
                        è <b>un caposaldo nella storia dell’architettura militare della</b> <Link href='/valle_d_aosta' className='text-decoration-none color_link'>Valle d’Aosta</Link>.
                        Fu infatti il primo forte ad essere costruito ex novo come un monoblocco, in un unico corpo compatto, da Ebalo II di Challant intorno al 1343. Oggi è una testimonianza perfettamente conservata dell’ultima fase stilistica del <Link 
                        href='/visite/valle_d_aosta/castelli_medievali' className='text-decoration-none color_link'>castello medievale</Link>.
                    </p>
                    <p>
                        Nel corso dei secoli è passato a più riprese dalla famiglia di feudatari degli Challant ai Savoia e fu anche trasformato in prigione dopo la morte dell’ultimo Signore nel 1470, per poi essere del tutto abbandonato cento anni dopo.
                    </p>
                    <p>
                        All’interno si notano <b>tracce dei piani e dei camini monumentali</b> e una delle attrazioni è costituita dalle bifore decorate, che regalano l’inquadratura perfetta per le fotografie: il paesaggio incorniciato dagli archi. Non mancate di rivivere quello che un 
                        tempo era il cammino di ronda, <b>un percorso pedonale affiancato dalle merlature reso fruibile al visitatore solo di recente</b>. Da lassù la vista a 360° sulla piana di Châtillon è davvero strepitosa.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Il Barone e la penna Bic</h2>
                    <p>
                        È storia più recente, ma non meno affascinante, quella del Castello di Ussel <b>acquistato nel 1984 dal barone Marcel Bich</b>, la cui famiglia era originaria proprio di Châtillon. Il nobile era un geniale imprenditore; fu infatti lui ad acquistare <b>il brevetto 
                        della penna a sfera</b> dall’inventore, László József Bíró, per poi commercializzarla in tutto il mondo con il nome di BIC. E sempre lui proseguì nella fortunata ascesa con il successo planetario dei rasoi e degli accendini usa e getta, sempre firmati BIC.
                    </p>
                    <p>
                        Dopo avere acquistato la rocca, il barone <b>la donò alla regione Valle d’Aosta</b>, con la clausola che le istituzioni si impegnassero nel restauro e nell’apertura al pubblico del Castello di Ussel. Cosa che puntualmente avvenne nel 1998 con un’inaugurazione in 
                        grande stile. Da allora il forte è diventato uno <Link href='/cosa_fare/arte_cultura/musei' className='text-decoration-none color_link'>spazio espositivo</Link> per <Link href='cosa_fare/eventi/mostre_esposizioni' className='text-decoration-none color_link'>mostre 
                        temporanee</Link>, la prima delle quali fu naturalmente dedicata al donatore e alle sue BIC.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">A cavallo intorno al maniero</h2>
                    <p>
                        Siete pronti a un’esperienza fuori dal comune? Il <b>Castello di Ussel e i suoi dintorni possono essere visitati in sella a magnifici cavalli</b>. È un giro di 2 ore e mezza, in gruppo e con una <b>guida equestre</b>, adatto a tutti con il solo vincolo dell’età: chi ha meno di 14 
                        anni, infatti, dovrà aspettare ancora un po’.
                    </p>
                    <p>
                        La passeggiata a cavallo è <b>un modo slow e sostenibile di esplorare il territorio</b>. Dimenticate la macchina e mettetevi alla prova anche in brevi passaggi al trotto. Il forte vi si presenta davanti in tutta la sua magnificenza, con la pietra quasi minacciosa, le due torrette, 
                        la roccia viva sulla quale sta letteralmente ancorato. Il resto è paesaggio, perché attraversate una splendida zona della Valle d’Aosta, la vicina Saint-Vincent e i boschi che la circondano; solcate antiche mulattiere e incontrate minuscoli <Link href='/vsite/borghi' 
                        className='text-decoration-none color_link'>borghi</Link> montani dove sopravvivono antichi forni.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1133.276844032268!2d7.627356123019273!3d45.7415676514024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4788c6b923dece15%3A0x92367e6ee27e7d26!2sCastello%20di%20Ussel!5e1!3m2!1sit!2sit!4v1713795871487!5m2!1sit!2sit"
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
