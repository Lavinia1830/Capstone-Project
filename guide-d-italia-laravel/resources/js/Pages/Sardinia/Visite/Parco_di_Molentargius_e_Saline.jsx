import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Parco_di_Molentargius_e_Saline(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='parco_di_molentargius_e_saline' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Parco di Molentargius e Saline</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className='margin mt-3'>
                    <p className='fst-italic text-center'>
                        Nel profondo sud dell’Isola, a pochi passi da Cagliari, vivrai un’esperienza unica tra storia e scienza nei percorsi di uno dei parchi naturalistici più belli della Sardegna
                    </p>
                    <p>
                        Un luogo in equilibrio tra uomo e ambiente, tra specchi d’acqua e vestigia di antiche saline: per i circa 400 mila cittadini dell’area vasta di <b>Cagliari</b> è un’oasi di svago a pochi passi da casa, per i <b>fenicotteri rosa</b>, i suoi abitanti più famosi, è la dimora perfetta. 
                        Li ammirerai, senza disturbarli a <i>Molentargius</i>, per due secoli e mezzo il bacino sardo più ricco per l’estrazione del sale marino - attività interrotta nel 1985 – come testimonia il nome stesso, derivante da <i>molenti</i> (asino), antico mezzo di trasporto dei preziosi 
                        carichi di sale. Inclusa già nel 1977 dalla <b>convenzione di Ramsar</b> tra le zone umide di rilevanza internazionale, l’area divenne parco regionale nel 1999 a tutela e valorizzazione di uno dei principali siti di sosta e nidificazione di uccelli acquatici in Europa. 
                        Il <i>Molentargius-Saline</i> occupa 1600 ettari nell’estrema propaggine meridionale del <b>Campidano</b>, affacciandosi sul golfo degli Angeli e delimitato dall’urbanizzazione di Cagliari, <b>Quartu Sant’Elena</b>, <b>Quartucciu</b> e <b>Selargius</b>, e dal lungomare del 
                        bellissimo <b>Poetto</b>. Ne percepirai l’unicità dalle vette di Monte Urpinu e della <b>Sella del Diavolo</b>.<br/>
                        Il territorio ‘protetto’ è suddiviso in due sistemi, acque dolci e salate: una coesistenza <i>sui generis</i>. Gli stagni ‘dolci’ sono il <b className='fst-italic'>Perdalonga</b>, il <b>Bellarosa minore</b> e l’‘ecosistema filtro’, un impianto di depurazione naturale che separa 
                        il Bellarosa minore dalle acque salate del <b>Bellarosa maggiore</b> (o <i>Molentargius</i>), usato durante l’attività saliniera come prima vasca di evaporazione. Le altre aree salate sono lo stagno <b className='fst-italic'>Perdabianca</b>, le ex saline di Cagliari e lo stagno di 
                        Quartu, che ospitavano rispettivamente seconda e terza vasca di evaporazione e cristallizzazione del cloruro di sodio. A separare i due sistemi affiora la piana ‘fossile’ di <b className='fst-italic'>is Arenas</b>, coltivata fino a metà XX secolo. Gli ambienti ‘dolci’ sono 
                        caratterizzati da distese di canne e tifeti, oltre a vegetazione idrofila; nei luoghi ad alta salinità troverai essenze alofile, salicornie, specie endemiche e altre rarissime iscritte nelle ‘liste rosse’.<br/>
                        Per la visita al parco avrai l’imbarazzo della scelta: tour guidati a piedi, in bici, in battello lungo i canali e con bus elettrici insieme agli operatori del centro di educazione ambientale e sostenibilità (Ceas). Sarai accompagnato nelle zone che meglio si prestano 
                        al <i>birdwatching</i>: farai sosta in un capanno di fronte all’argine del Bellarosa maggiore, dove nidificano fenicottero e gabbiano roseo. Anche il canneto del ‘minore’ è rifugio di uccelli nidificanti: airone guardabuoi, cavaliere d’Italia, garzetta, germano reale e numerose 
                        specie di anatre. Con un po’ di fortuna, osserverai lo schivo pollo sultano, dal piumaggio blu metallico e il becco rosso scarlatto. Nei percorsi liberi all’interno delle aree verdi potrai addentrarti tutti i giorni: porta con te i binocoli, così da non disturbare da vicino 
                        l’avifauna. Mentre per l’escursione in bici sono disponibili servizio di noleggio e stazione di <i>bikesharing</i>.<br/>
                        Il paesaggio del <i>Molentargius</i> è il prodotto di un lungo processo industriale, legato alla plurimillenaria storia delle saline. Il parco è costellato di architetture di varie epoche: canali e vasche ottocentesche, villaggio operaio e ponti in ferro di inizio XX secolo, capanni 
                        dei ‘forzati del sale’, chiuse e paratoie, ferrovia Decauville e idrovora del Rollone. Fenici, punici e romani furono i primi esportatori di sale sardo; sotto i giudici le saline acquistarono importanza internazionale; poi furono usate da pisani, aragonesi, spagnoli e piemontesi. 
                        La produzione industriale è iniziata nel 1830, grazie a investimenti dei Savoia in infrastrutture, occupazione ed esportazione. Dapprima con usi da antico regime, poi con un sistema pubblico-privato, infine sottoponendo produzione e vendita al totale controllo del fisco. Tra anni 
                        Venti e Trenta del XX secolo, fu dato nuovo impulso con impianti moderni, che compongono la ‘<b>città del sale</b>’, un complesso integrato fra sedi di lavoro e residenze, simile ai villaggi minerari coevi. Ammirerai il palazzo della direzione, l’edificio ‘dei sali scelti’, oggi 
                        sede del parco, e l’ex dopolavoro con sala spettacoli, ora <b>teatro delle saline</b>. E ancora laboratori, magazzini, officine, falegnamerie, mensa, spogliatoi. All’insediamento industriale si affiancano ruderi militari: i fortini di sant’Ignazio, di san Francesco, san Juan e 
                        sant’Isidoro e la linea anticarro della seconda guerra mondiale di su <i>Staineddu</i>.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d747.3606518367726!2d9.14654980424495!3d39.20578150308931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e733634105786f%3A0x60a26a76635a9ba1!2sParco%20Naturale%20Molentargius%20Saline!5e1!3m2!1sit!2sit!4v1713533754122!5m2!1sit!2sit"
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
