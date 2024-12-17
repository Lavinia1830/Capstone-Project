import React  from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Cinque_Terre_Borghi(props) {
    return (
        <>
            <Head title='Cinque Terre Borghi'/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='text-center cinque_terre_borghi'>
                        <h1>Cinque Terre, incantevoli borghi affacciati sul mare della Liguria</h1>
                    </div>
                    <div className='margin mt-3'>
                        <p>
                            Ben 18 chilometri di meraviglia <b>costa ligure</b> ricciosa sovrastata da una catena di monti paralleli al litorale e ricchita da preziose spiagge, baie e 
                            fondali profondi, ma anche da terrazzamenti coltivati a vite e a olivo con i tipici antichi muretti a secco.
                        </p>
                        <p>
                            Le <strong>Cinque Terre</strong> offrono un patrimonio naturalistico di grande varietà: insieme a <Link href='/destinazioni/liguria/portovenere' 
                            className='text-decoration-none color_link'>Portovenere</Link> e alle <Link href='/destinazione/liguria/portovenere/isola_palmaria' 
                            className='text-decoration-none color_link'>Isola Palamria</Link>, <Link href='/visite/liguria/isola_del_tino' 
                            className='text-decoration-none color_link'>Tino</Link> e <Link href='/visite/liguria/isola_del_tinetto' 
                            className='text-decoration-none color_link'>Tinetto</Link>, sono incluse nell <i>World Heritage List</i> dell'UNESCO come esempio significativo di come 
                            l'uomo può modellare l'ambiente, rispettandolo.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className='color-subtitle'>Cosa sono e dove si trovano le Cinque Terre</h2>
                        <p>
                            Frastagliato tatto di costa della <Link href='/mare/liguria/riviera_ligure_di_levante' className='text-decoration-none color_link'>Riviera ligure di 
                            levante</Link>, le Cinque Terre sono gioielli incastonati tra <Link href='/visite/liguria/punta_mesco' className='text-decoration-none color_link'>Punta 
                            Mesco</Link> e Punta di Montenero, in provincia di <Link href='/destinazioni/liguria/la_spezia' className='text-decoration-none color_link'>La 
                            Spezia</Link>.<br/>
                            <b>Monterosso al Mare</b>, <b>Vernazza</b>, <b>Corniglia</b>, <b>Manarola</b> e <b>Riomaggiore</b>, partendo da est, sono gli incantevoli paesi che godono 
                            di questa posizione privilegiata sul <Link href='/mare/mar_mediterraneo' className='text-decoration-none color_link'>Mar Mediterraneo</Link>.
                        </p>
                        <p>
                            Piccole e legate a ogni borgo della zona, le <b>spiagge delle Cinque Terre</b> sono rinomate per essere <b>strette e ciottolose</b>, ma se i sassi non 
                            fanno per voi non preoccupatevi: potete optare per <b>Monterosso</b>, dove troverete un arenile di soffice sabbia. Il litorale è un susseguirsi di speroni 
                            di pietra a picco sul mare, minuscoli lidi e anfratti meravigliosi.
                        </p>
                        <p>
                            Gli sportivi saranno più interessati ai rinomati <b>sentiri delle Cinque Terre</b>, per secoli unico collegamento tra un paese e l'altro, che si 
                            sviluppano per più di 120 chilometri e permettono di visitare tutto il territorio.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className='color-subtitle'>Storia e informazioni sulle Cinque Terre</h2>
                        <p>
                            I primi segnali della presenza umana in questa zona di trovano nei depositi della <Link href='/visite/liguria/isola_di_palmaria/grotta_dei_colombi' 
                            className='text-decoration-none color_link'>Grotta dei colombi</Link> sull'<b>Isola di Palmaria</b>, dove sono stati rivenuti ossa e fossili di 
                            animali e manufatti riconducibili al Palaolitico. Sono numerosi anche i reperti nel Neolitico che ci fanno pensare fosse un punto abitato dai 
                            cacciatori che abitavano caverne o ripari ricciosi.
                        </p>
                        <p>
                            I <b>menhir in</b> <Link href='/liguria' className='text-decoration-none color_link'>Liguria</Link>, ritrovati nella zona di Campiglia 
                            Tramonti, raccontano un'altra importante parte di storia della zona: pare che queste pietre avessero una funzione legata al calendario o fessero 
                            precursori delle statue stele ritrovate nella vicina Lunigiana.
                        </p>
                        <p>
                            Durante l'età del bronzo i centri riuniti in piccole circoscrizioni facevano capo ai <i>castellari</i> in posizione dominanti con funzioni difensive. 
                            Il <i>castellare</i> più vicino all Cinque Terre si trova sul <b>monte Castellaro</b>, nella valle di Pignone, importante inserimento stabile del tempo.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className='color-subtitle'>Perché le Cinque Terre sono sito UNESCO</h2>
                        <p>
                            Le <b>Cinque Terre</b>, <b>Porto Venere</b> e tra Isole <b>Palmaria</b>, <b>Tino</b> e <b>Tinetto</b> sono entrate a pieno titolo nella lista dei 
                            Patronomi dell'Umanità UNESCO nel 1997 poiché siti culturali di eccezionale valore, che rappresentano alla perfezione l'interazione armoniosa tra uomo e 
                            natura, in un <b>paesaggio culturale</b> che ha raggiunto una impareggiabile qualità panoramica e racconta uno stile di vita tradizional che, da più di 
                            mille anni, svolge un ruolo socioeconomico importante nella vita della comunità.
                        </p>
                        <p>
                            Il <Link href='/visite/liguria/cinque_terre/parco_nazione_delle_cinque_terre' className='text-decoration-none color_link'>Parco Nazione delle Cinque 
                            Terre</Link> è meraviglioso da esporare a piedi o in bike con i suoi 120 km di <b>percorsi panoramici tematici</b>: provate quello che percorre i 
                            vigneti del vino passito locale Sciacchetrà o quello alla scoperta degli insediamenti antichi. O se preferite, uno degli itinerari a nuoto e in kayak 
                            proposti dall'Ara Marina Protetta.
                        </p>
                        <p>
                            Durante l'età del bronzo i centri riuniti in piccole circoscrizioni facevano capo ai <i>castellari</i> in posizione dominanti con funzioni difensive. 
                            Il <i>castellare</i> più vicino all Cinque Terre si trova sul <b>monte Castellaro</b>, nella valle di Pignone, importante inserimento stabile del tempo.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className='color-subtitle'>I posti più belli da visiare alle Cinque Terre: 8 tappe irrinunciabili</h2>
                        <p>
                            Tanta bellezza può confondere: che cosa vedere alle Cinque Terre? Ecco <b>8 tappe alle quali non dovrete rinunciare</b>.<br/>
                            La prima è <Link href='/destinazioni/cinque_terre/monterosso_al_mare' className='text-decoration-none color_link'>Monterosso al Mare</Link>, rinomata 
                            località turistica con eleganti ville e la bellissima spiaggia di Fegina. I suoi carruggi, le tipiche strette vie, conducano fino al centro antico, dove
                            potete ammirarne i capolavori, tra chiese e monumenti. Qui si trova anche il parco letterario dedicato al poeta Eugenio Montale.
                        </p>
                        <p>
                            Si prosegue per <Link href='/destinazioni/cinque_terre/vernazza' className='text-decoration-none color_link'>Vernazza</Link>, borgo che si sviluppa 
                            attorno al porticciolo già utilizzato in epoca romana. La piazzetta affacciata sul mare e la chiesa gotica dedicata a Santa Margherita d'Antiochia sono 
                            le attrattive principali insieme al Castello Doria, difesa dagli attacchi dal mare.
                        </p>
                        <p>
                            La terza tappa arriva dritta al cuore e lascia senza fiato: è <Link href='/destiazioni/liguria/cinque_terre/riomaggiore' 
                            className='text-decoration-none color_link'>Riomaggiore</Link>, cuore dell'omonimoParco e pittoresco borgo di pesctori delle case alte e strette dipinte 
                            di colori pastello e dagli stretti carrugi.
                        </p>
                        <p>
                            A <b>Ponte Venere</b>, parte del sito Unesco e ambitissima meta di villeggiatura, dovete dedicare un lungo stop. È il connubio perfetto tra natura e 
                            architettura, caratterizzato com'è dai brillanti colori delle case, dagli stretti vicoli, dalle scalinate e dal delizioso porticciolo turistico da cartolina.
                        </p>
                        <p>
                            Vale almeno una visita anche <Link href='/destinazioni/liguria/cinque_terre/corniglia' className='text-decoration-none color_link'>Corniglia</Link>, un paese 
                            dedicato alla viticoltura arroccato sul crinale del promontorio e collegato alla spiaggia da una scalinata. Infine, la frazione 
                            di <Link href='/destinazioni/liguria/cinque_terre/manarola' className='text-decoration-none color_link'>Manarola</Link> <b>nelle Cinque Terre</b> lascia a 
                            bocca aperta: sorge su un grosso scoglio nero ed è nota per la produzione di un ottimo olio e del ricercato vino passito Sciacchetrà.
                        </p>
                        <p>
                            I fan delle escursioni si innamoreranno del <b>Sentiero Azzurro</b>, il più semplice, famoso e visitato delle Cinque Terre che si snoda all'interno del Parco 
                            Nazione in 4 tratte: <b>Riomaggiore</b> - <b>Manarola</b>, tartta detta anche <b>Via dell'Amore delle Cinque Terre</b>, <b>Manarola</b> - <b>Corniglia</b>, <b>Corniglia</b> - <b>Vernazza</b> e <b>Vernazza</b> - <b>Monterosso
                            al Mare</b>.
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
