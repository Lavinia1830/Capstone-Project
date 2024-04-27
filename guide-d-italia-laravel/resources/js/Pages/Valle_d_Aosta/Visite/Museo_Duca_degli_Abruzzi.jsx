import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/inertia-react';

export default function Museo_Duca_degli_Abruzzi(props) {
    return (
        <>
            <Head title="Museo Duca degli Abruzzi"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='museo_duca_degli_abruzzi' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Museo Duca degli Abruzzi</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            In occasione dei 150 anni di fondazione della <b>Società Guide Alpine di Courmayeur</b> e del restauro conservativo della storica casa delle Guide, il <strong>Museo Alpino Duca degli Abruzzi</strong> è stato completamente rinnovato nei locali per ospitare un nuovo suggestivo allestimento.<br/>
                            Inoltre, la collaborazione con esperti operatori del settore delle manifestazioni, consente di esporre, sempre nella sede del Museo Alpino, interessanti mostre fotografiche di montagna e non solo.<br/>
                            Ha sede nella Casa delle Guide di Courmayeur. Esso fu voluto ed iniziato dal Duca degli Abruzzi e venne inaugurato nel 1929. Il Museo è articolato su due piani: al piano terra sono esposti i libretti delle guide decedute sui quali i clienti annotavano le loro impressioni sulle ascensioni e gli 
                            eventuali meriti o demeriti del capo cordata. In una vetrinetta sono raccolti i libri dei rifugi sui quali gli alpinisti segnavano il loro passaggio; altre vetrine contengono lo stendardo bianco della società delle Guide ai suoi primi passi; gli stivali usati dalla regina Margherita nella 
                            spedizione allo Spitzbergen nel 1904, coi quali raggiunse la vetta; oggetti riportati dalle varie spedizioni in Africa, Himalaya, Tibet e India.<br/>
                            Molto interessante la vetrina della spedizione polare del Duca degli Abruzzi (Baia di Tepliz) alla quale parteciparono gloriose Guide di Courmayeur. Fra i cimeli da notare la pertica usata dalle Guide di Courmayeur nei tentativi alla cresta sud dell'Aiguille Noire du Peuterey.<br/>
                            Il plastico del Monte Bianco eseguito in scala 1:10.000 dal pittore Alessio Nebbia illustra i vari aspetti morfologici del massiccio; è inoltre presente il plastico del K2 di Mario Fantin, donato dallo stesso in memoria della Guida Alpina Mario Puchoz deceduto nel corso della spedizione di conquista 
                            del K2.<br/>
                            Il <strong>Museo Alpino Duca degli Abruzzi</strong> custodisce la memoria delle Guide Alpine di Courmayeur e documenta l’ origine e lo sviluppo del mestiere di Guida, di fondamentale importanza per la valorizzazione della montagna in tutti i suoi aspetti, nonché per lo sviluppo dell’ attività 
                            alpinistica e del turismo ad essa collegato. Nelle sale espositive del Museo, ospitato all’ interno della storica Casa delle Guide, scoprirete il glorioso passato di questa nobile professione, ancora oggi poco conosciuta in quelli che sono i suoi veri valori. Il Museo possiede un cospicuo patrimonio 
                            costituito da documenti, fotografie, attrezzatura alpinistica e cimeli appartenuti alle Guide Alpine di Courmayeur, custodisce i preziosi libretti delle guide, compilati dai clienti al termine di ogni escursione in cui sono narrate, con aneddoti emozionanti, le avventure delle nostre Guide. Materiali, 
                            divise storiche, abbigliamento da montagna e curiosi oggetti vi racconteranno più di 150 anni di storia di questo affascinante mestiere.<br/>
                            L’ allestimento si sviluppa su due piani lungo un percorso espositivo caratterizzato da numerose sezioni tematiche, con la volontà di non essere un semplice contenitore di oggetti in disuso ma un luogo della memoria, che ricostruisce e ripercorre le varie tappe della storia del mestiere di Guida, 
                            attraverso la valorizzazione, la divulgazione e la fruizione dei propri beni.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d356.63851076272744!2d6.9723503556665865!3d45.7918036727445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4789476eca0d7341%3A0xb26ef2f551df3422!2sMuseo%20Alpino%20Duca%20degli%20Abruzzi!5e1!3m2!1sit!2sit!4v1713875414159!5m2!1sit!2sit"
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
