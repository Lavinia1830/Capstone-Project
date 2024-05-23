import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Museo_Leone(props) {
    return (
        <>
            <Head title="Museo Leone"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='museo_leone' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Museo Leone</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle text-center">Storia del Museo</h2>
                        <p>
                            Il <strong>Museo Leone</strong> fu aperto al pubblico nel <b>1910</b> a cura dell’<b>Istituto di Belle Arti</b>, erede della ricca collezione d’oggetti antichi e delle proprietà 
                            immobiliari del notaio <b>Camillo Leone</b>. <br/>
                            Presenta collezioni di carattere <b>storico-archeologico</b>, oltre ad una preziosa sezione d’<b>arte decorativa</b>. <br/>
                            Il museo ha sede in due distinti <b>edifici storici</b>, la cinquecentesca <b>Casa Alciati</b> e il barocco <b>Palazzo Langosco</b>, collegati nel <b>1939</b> da una manica di 
                            raccordo. Le collezioni archeologiche e di storia antica vercellese sono esposte nelle tredici sale al piano terreno della <b>Casa Alciati</b>. L’allestimento, curato da <b>Vittorio 
                            Viale</b> nel <b>1939</b>, è stato conservato ad esempio della museografia d’epoca fascista. Ricostruisce, attraverso oggetti e documenti, la storia di <b>Vercelli</b> dalla <b>Preistoria 
                            al Risorgimento</b>. <br/>
                            All’interno dei saloni di <b>Palazzo Langosco</b> trovano invece spazio le sezioni dedicate alle <b>arti minori</b>. <br/>
                            Nella galleria, a lato del giardino, è esposto un piccolo saggio della ricca collezione d’<b>incunaboli</b> e <b>cinquecentine</b> raccolta dal Leone, tra i quali spiccano alcune 
                            edizioni di stampatori d’origine <b>vercellese</b> e <b>trinese</b>.
                            L’ingresso del museo è collocato nella cinquecentesca <b>Casa Alciati</b>, antica residenza di una nobile famiglia vercellese. Gli ambienti sono decorati con <b>affreschi 
                            parietali</b> del primo <b>Cinquecento</b> d’artista piemontese. La presenza di fregi a “<b>grottesche</b>”, i soggetti mitologici tratti dal repertorio figurativo classico e l’uso di 
                            fondali prospettici mettono in evidenza la forte influenza della coeva <b>pittura romana</b>.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Nelle sale la <b>storia archeologica</b> si sviluppa lungo un <b>suggestivo percorso</b> che inizia dalla <b>Preistoria</b>: dai <b>reperti</b> del periodo <b>Paleolitico</b>, <b>Neolitico</b>, 
                            dell’età del <b>Bronzo</b> e del <b>Ferro</b> si risale a una <b>preziosa raccolta</b> di antiche <b>ceramiche</b> provenienti dalla <b>Magna Grecia</b>.
                        </p>
                        <p>
                            Questa sezione annovera la presenza di <b>vasi messapici</b> a motivi vegetali stilizzati (V-IV secolo a.C.), <b>vasi di “Gnathia”</b> con decori sopradipinti su fondo nero (IV-III secolo a.C.) 
                            e <b>vasi apuli a figure rosse</b> (IV-III secolo a.C.).
                        </p>
                        <p>
                            Il <b>Museo Leone</b> espone un raro esempio di antica <b>iscrizione bilingue</b>: una <b>lastra di pietra</b> su cui sono incise dodici righe di testo, otto in <b>lingua latina</b> e quattro 
                            in <b>lingua gallica</b> (leponzia). Il testo recita: “<b>Confine del campo</b> che ha donato <b>Arcisio Argantocomatereco</b>, comune agli <b>dei</b> e agli <b>uomini</b>, così come quattro 
                            pietre l’hanno definito”. L’iscrizione ci racconta di un’area <b>sacra</b> tipicamente <b>celtica</b>, definita da quattro lati, donata da un privato cittadino, probabilmente un magistrato locale. 
                            L’epigrafe risale al <b>I secolo a.C.</b> e fu ritrovata presso le rive del <b>fiume Sesia</b>.
                        </p>
                        <p>
                            Di particolare rilievo sono i <b>reperti di epoca romana</b>, quasi tutti rinvenuti durante scavi condotti a <b>Vercelli</b> nella seconda metà dell’Ottocento. Si tratta 
                            di <b>epigrafi</b>, <b>sarcofagi</b>, <b>anfore</b>, <b>bronzi</b>, <b>vetri</b>, risalenti al I e II secolo d.C.: si trovano esposti in una grande sala a forma di <b>aula basilicale romana</b>. 
                            Nelle sale successive trovano posto opere d’<b>epoca medievale</b>, alcune di grande interesse come i frammenti di <b>pavimento musivo</b> dell’antica chiesa di <b>Santa Maria Maggiore</b> (XI 
                            secolo) e una serie di <b>sculture</b> che facevano parte del <b>pulpito della cattedrale di Vercelli</b> e forse opera dell’<b>Antelami</b>.
                        </p>
                        <p>
                            Nelle <b>sale settecentesche</b>, al primo piano di <b>Palazzo Langosco</b>, sono invece ospitate le <b>collezioni d’arti minori</b>: <b>maioliche</b> e <b>porcellane</b> di manifatture italiane 
                            del XV e XVI secolo, <b>antichi vetri veneziani</b>, <b>armi</b>, <b>peltri</b> e <b>ferri battuti</b>, <b>bronzi rinascimentali</b>. In questo settore spiccano alcuni <b>oggetti di particolare 
                            rarità</b>, come un <b>prezioso cofanetto</b> con medaglioni in smalti di <b>Limoges</b> del XIII secolo, appartenuto al <b>cardinale Guala Bicchieri</b> (1160-1227), una serie di <b>lamine 
                            rinascimentali dorate e argentate</b> con <b>figure allegoriche incise</b>, un <b>cofano ottagonale</b> con decorazioni in <b>avorio</b>, forse prodotto nella bottega degli <b>Embriaghi</b>. 
                            Analogo per fattura e datazione al cofanetto esposto nel Museo Leone è quello recentemente acquistato dalla <b>Regione Piemonte</b> e dalla <b>Città di</b> <Link href='/destinazioni/piemonte/torino' 
                            className='text-decoration-none color_link'>Torino</Link>, e destinato alle collezioni del <Link href='/visite/piemonte/torino/palazzo_madama' className='text-decoration-none color_link'>Museo d’Arte Antica di Torino</Link>.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d754.6753754342483!2d8.425345213669363!3d45.327810984601136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47864c8aaa2d6e0f%3A0x1eea29700a436d26!2sCastello%20Visconteo%20di%20Vercelli!5e1!3m2!1sit!2sit!4v1716385142197!5m2!1sit!2sit"
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
