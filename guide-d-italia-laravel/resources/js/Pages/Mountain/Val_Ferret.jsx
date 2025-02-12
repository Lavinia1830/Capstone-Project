import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/inertia-react';

export default function Val_Ferret(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='val_ferret' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Val Ferret</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Valle d’Aosta: in Val Ferret, a un passo dal cielo</h2>
                    <p>
                        Ai piedi del Monte Bianco, a nord della conca di <Link href='/destinazioni/valle_d_aosta/courmayeur' className='text-decoration-none color_link'>Courmayeur</Link> in <Link href='/valle_d_aosta' className='text-decoration-none color_link'>Valle d’Aosta</Link>, si sviluppa 
                        la <strong>Val Ferret</strong>, che insieme alla <b>Val Vény</b> costituisce il limite geografico del massiccio sul versante italiano.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Emozioni ad alta quota</h2>
                    <p>
                        Percorrendo la Val Ferret sulla sinistra, potrete ammirare alcune delle più alte e maestose <b>cime delle Alpi</b>: il Dente del Gigante, le Grandes Jorasses, l'Aiguille de Triolet e il Mont Dolent, mentre sulla destra i pendii del Mont de La Saxe sono decisamente più dolci.
                    </p>
                    <p>
                        Se siete appassionati di <Link href='/montagna' className='text-decoration-none color_link'>montagna</Link>, nella stagione estiva a Courmayeur potrete approfittare di una vasta scelta di itinerari, dalle passeggiate, adatte a tutti, alle <Link href='/escursioni' 
                        className='text-decoration-none color_link'>escursioni</Link> <b>in mountain bike o a cavallo, fino ai percorsi alpinistici</b>.
                        Tra questi ultimi, ad esempio, la salita al <b>Dente del Gigante</b> è una grande classica del massiccio del Monte Bianco. Il suo profilo inconfondibile attrae chiunque visiti questa zona per ammirare lo spettacolare scenario offerto dall’alta montagna.<br/>
                        Una serie di corde fisse facilitano l'ascesa al Dente. Si tratta comunque di un percorso alpinistico per esperti ed è consigliabile farsi accompagnare da una <b>guida alpina</b> per una salita in tutta sicurezza. Potrete raggiungere il rifugio Torino con la prima corsa della 
                        funivia Skyway e se non siete sicuri di riuscire a scendere in giornata con lo stesso mezzo, potrete pernottarvi.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Il paradiso degli amanti del trekking</h2>
                    <p>
                        La <strong>Val Ferret</strong> è la meta ideale anche se siete amanti del <Link href='escursioni/trekking' className='text-decoration-none color_link'>trekking</Link>: un itinerario agevole e ben segnalato attraversa tutta la valle da Entrèves al <b>Col du Petit Ferret</b>. 
                        Dopo aver attraversato Entrèves, lasciate l’auto e imboccate il sentiero sterrato; passerete la Dora di Val Ferret e, poco dopo, inizierete a salire nel bosco. Una volta fuori, godrete del panorama sulla Val Ferret, la Val Vény e il Monte Bianco.<br/>
                        Il percorso, lungo 15 chilometri, può anche essere diviso in tappe, grazie ai tre rifugi che incontrerete sulla vostra strada: il primo è il <b>Rifugio Bertone</b>, il secondo è il <b>Rifugio Bonatti</b>, da cui potrete godere una splendida vista sul Dente del Gigante, mentre 
                        l'ultimo è il <b>Rifugio Elena</b>, oltre Arnouva.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">D’inverno, sci di fondo e snow bike</h2>
                    <p>
                        La Val Ferret è imperdibile anche in inverno. Se amate i panorami imbiancati e le attività sulla neve qui c’è solo l’imbarazzo della scelta: potrete praticare lo <Link href='/montagna/sport_invernali' className='text-decoration-none color_link'>sci di fondo</Link>, ma anche 
                        provare <b>fat bike, snow bike o semplicemente passeggiare</b> sul sentiero di neve battuta riservato ai pedoni.<br/>
                        Oltre allo sci nordico in Val Ferret, a Courmayeur avrete a disposizione due versanti perfetti per l’avventura sugli sci da discesa o con lo snowborad, quello di Chécrouit e quello della Val Veny e due scuole di sci, soluzione ideale se siete alle prime armi.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">La ricchezza della Val Ferret, dalla fauna alla flora</h2>
                    <p>
                        La <strong>Val Ferret</strong> è anche una <b>Zona di Protezione Speciale della Valle d’Aosta</b>, posta su una rotta di migrazione, istituita con lo scopo di proteggere l’avifauna.<br/>
                        L'area tutelata parte dall'abitato di La Palud e si estende al Col Ferret: vi sono state identificate <b>81 specie di uccelli</b>, tra cui alcune sempre più rare, come l’aquila reale, il gipeto, la civetta capogrosso, la pernice bianca, il gracchio corallino, il gallo forcello, 
                        il picchio nero e l'averla piccola.
                    </p>
                    <p>
                        Qui vive anche la colonia di stambecchi più alta d’Europa, e non è difficile avvistare camosci, caprioli, cervi, lepri e marmotte: c’è anche un piccolo gruppo di esemplari albini. La flora è ugualmente spettacolare. A parte i fiori e le piante che incontrerete lungo i sentieri 
                        della Val Ferret o della Val Veny, non perdete l’occasione di visitare Il <b>Giardino Alpino Saussurea</b>, tra i più alti d’Europa, raggiungibile con la funivia Skyway (prima stazione località Pavillon du Mont Fréty). Realizzato nel 1984 dalla Fondazione Donzelli-Gilberti, con 
                        lo scopo di salvaguardare la flora del Monte Bianco, ospita anche specie provenienti dalle Alpi orientali, dall’Asia e dal Nord America.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d582.6764258948406!2d6.965517957694369!3d45.79570125323325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47894712b99c427d%3A0xf6c20e62da1e2945!2sVia%20Val%20Veny%2C%2011013%20Courmayeur%20AO!5e1!3m2!1sit!2sit!4v1713877632866!5m2!1sit!2sit"
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
