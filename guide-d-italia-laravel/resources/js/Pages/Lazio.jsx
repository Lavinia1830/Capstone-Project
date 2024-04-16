import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';
import Footer from '@/Components/Footer';

export default function Lazio(props) {

    const [isHoveredRoma, setIsHoveredRoma] = useState(false);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='text-center lazio'>
                <h1>Lazio</h1>
                </div>
                <div className='text-center margin mt-3'>
                    <p>
                        <Link href='/destinazioni/lazio/roma' className='text-decoration-none color_link'>Roma</Link>, da quello che ci ha lasciato e da quello che continua a rappresentare: ex capitale dell’Impero Romano, poi cuore della cristianità con la sua <b>Piazza 
                        San Pietro</b> e la sede pontificia.
                    </p>
                    <p>
                        Ma il <strong>Lazio</strong> <b>non è solo Roma</b>: è anche la terra di chiese storiche e abbazie sparse sul territorio, di grandi e piccoli centri storici e borghi suggestivi, delle vie consolari che da Roma si dirigono a raggiera verso il resto 
                        d’Italia, attraversando il Lazio e i suoi paesaggi.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className='color-subtitle'>Marche, turismo riscoperto</h2>
                    <p>
                        La varietà e l’elevato numero di luoghi di interesse delle Marche sono il risultato, prezioso, delle molte stratificazioni culturali che vi si sono sovrapposte nel corso dei mil­lenni, da quando i piceni prima e i romani poi popolarono questo territorio. 
                        Gli itinerari, nelle Marche, fanno spaziare con la vista, il gusto, l’olfatto, il tatto e anche l’udito. Ad <Link href='/destinazioni/marche/ancona' className='text-decoration-none color_link'>Ancona</Link>  vi si sveleranno le suggestioni d’Oriente, 
                        ad <Link href='/distinazioni/marche/ascoli' className='text-decoration-none color_link'>Ascoli</Link> e <Link href='/destinazioni/marche/fermo' className='text-decoration-none color_link'>Fermo</Link>  sarà invece l’eleganza medievale a farvi sgranare 
                        gli occhi. <Link href='/destinazioni/marche/marcerata' className='text-decoration-none color_link'>Macerata</Link> vi accoglierà con le innumerevoli bellezze svelate dietro una facciata di provincia, a <Link href='/destinazioni/marche/pesaro' 
                        className='text-decoration-none color_link'>Pesaro</Link> vivrete un’esperienza tipicamente romagnola tra ombrelloni e vivace vita not­turna, mentre a Urbino respirerete ancora i fasti rinascimentali, patrocinati dai duchi del Montefeltro. E se alle città 
                        preferite i pittoreschi borghi dal sapore antico, in cui il tempo sembra essersi fermato, avrete solo l’imbarazzo della scelta: il Piceno, il Ferma­no o il Montefeltro saranno ricche miniere di infinite scoperte. Non rimane poi che scoprire cosa vedere 
                        a <Link href='/destinazioni/marche/fano' className='text-decoration-none color_link'>Fano</Link>, a <Link href='/destinazioni/marche/senigallia' className='text-decoration-none color_link'>Senigallia</Link>, a <Link href='/destinazioni/marche/fabriano' 
                        className='text-decoration-none color_link'>Fabriano</Link>, in un crescendo di bellezza che non stanca mai, a caccia dei posti romantici delle Marche che entrano nel cuore e non escono più.
                    </p>
                    <p>
                        L’area è davvero tutta da scoprire, tra laghi, monti, spiagge e la bella campagna all'ombra di antichi acquedotti o manieri. 
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className='color-subtitle'>Origini e cenni storici sul Lazio</h2>
                    <p>
                        Roma divenne presto una delle città più importanti del mondo conosciuto. La vera espansione della città avvenne al tempo della Repubblica romana, periodo in cui i Romani conquistarono gran parte dell’Europa e del nord Africa, oltre a costruire importanti 
                        monumenti e produrre capolavori nel mondo delle arti.
                    </p>
                    <p>
                        Il periodo più florido arrivò con Augusto imperatore, che diede inizio all’<b>Impero Romano</b> e promosse l’arte e la cultura, mentre il Cristianesimo trasformò profondamente la struttura sociale a partire dall’Imperatore Costantino. Con la fine 
                        dell’Impero e le invasioni barbariche, Roma perse la sua centralità politica, ma rimase il centro spirituale d’Europa come residenza dei Papi e nucleo dello Stato della Chiesa, per un millennio esteso su buona parte dell’Italia centrale.
                    </p>
                    <p>
                        Con la fine del regno dei Papi, il potere passò al Regno d’Italia, di cui diventò presto capitale. Oggi è la capitale della Repubblica italiana.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className='color-subtitle'>Le città principali del Lazio</h2>
                    <p>
                        <Link href='/distinazioni/lazio/roma' className='text-decoration-none color_link'>Roma</Link> è ovviamente la prima città del Lazio, meraviglia inclusa tra i Patrimoni dell’Umanità UNESCO. Nella città eterna spiccano luoghi simbolo del mondo come la <Link 
                        href='/destinazioni/lazio/citta_del_vaticano' className='text-decoration-none color_link'>Città del Vaticano</Link>, la <Link href='/visite/lazio/citta_del_vaticano/basilicadi_sa_pietro' className='text-decoration-none color_link'>Basilica di San Pietro</Link>, i <Link 
                        href='/visite/lazio/citta_del_vaticano/musei_vaticani' className='text-decoration-none color_link'>Musei Vaticani</Link> e la <Link href='/visite/lazio/roma/cappella_sistina' className='text-decoration-none color_link'>Cappella Sistina</Link>, gli <Link 
                        href='/visite/lazio/roma/acquedotti_romani' className='text-decoration-none color_link'>acquedotti romani</Link> e la <Link href='/visite/lazio/roma/fontana_di_trevi' className='text-decoration-none color_link'>Fontana di Trevi</Link>.
                    </p>
                    <p>
                        Grazie alla vastità dei suoi siti archeologici, Roma è un museo a cielo aperto: il <Link href='/visite/lazio/roma/foro_romano' className='text-decoration-none color_link'>Foro Romano</Link>, racchiuso tra il <Link href='/visite/lazio/roma/palatino' 
                        className='text-decoration-none color_link'>Palatino</Link>, il <Link href='/visite/lazio/roma/campidoglio' className='text-decoration-none color_link'>Campidoglio</Link>, Via dei <Link href='/visite/lazio/roma/fori_imperiali' 
                        className='text-decoration-none color_link'>Fori Imperiali</Link> e il <Link href='/viste/lazio/roma/colosseo' className='text-decoration-none color_link'>Colosseo</Link>, conserva i resti di edifici e monumenti che hanno fatto la storia della città.
                    </p>
                    <p>
                        Il <b>Colosseo</b>, in particolare, è iconico: è stato il più grande anfiteatro in cui si svolgevano i combattimenti tra gladiatori.
                    </p>
                    <p>
                        Quasi obbligatoria anche una visita al <Link href='/visite/lazio/roma/pantheon' className='text-decoration-none color_link'>Pantheon</Link>, importante monumento religioso della Roma antica costruito ai tempi di Augusto e dedicato a tutte le divinità.
                    </p>
                    <p>
                        Vale la pena visitare <Link href='/visite/lazio/roma/villa_torlonia' className='text-decoration-none color_link'>Villa Torlonia</Link>, una storica villa romana in città, circondata da un enorme parco tra statue, fontane e un piccolo specchio d'acqua chiamato Lago 
                        del Fucino.
                    </p>
                    <p>
                        Imperdibile l’<Link href='/vsite/lazio/roma/isola_tiberina' className='text-decoration-none color_link'>Isola Tiberina</Link>, nel cuore di Roma, sul Tevere. Un'isola urbana simbolo indiscusso della Capitale che custodisce testimonianze di ogni epoca, dai ponti di età 
                        romana alle chiese rinascimentali.
                    </p>
                    <p>
                        Allontanandosi un poco dalla città eterna verrete catturati dal fascino medievale e pittoresco del centro di <Link href='/destinazioni/lazio/viterbo' className='text-decoratio-none color_link'>Viterbo</Link>, che rimanda al 1200, in cui la città fu la sede dei Papi. 
                        Ricca di monumenti, ospitò il primo e più lungo conclave della storia della Chiesa e ancora oggi è ricca di interessanti chiese, palazzi storici, castelli, torri e bellissime piazze.
                    </p>
                    <p>
                        <Link href='/destinazioni/lazio/frosinone' className='text-decoration-none color_link'>Frosinone</Link> è una città nella stessa provincia della ciociaria e ha origini antiche, con un travagliato passato di terremoti e saccheggi e alcune testimonianze storiche di 
                        grandissima importanza.
                    </p>
                    <p>
                        <Link href='/destinazioni/lazio/latina' className='text-decoration-none color_link'>Latina</Link> è stata edificata durante il fascismo in quella che una volta era la palude pontina ed è caratterizzata da un'interessante architettura razionalista, ma anche da una 
                        provincia ricca di attrattive: le <Link href='/visite/lazio/latina/isole_pontine' className='text-decoration-none color_link'>Isole Pontine</Link>, i <Link href='/visite/lazio/latina/laghi_costieri' className='text-decoration-none color_link'>laghi costieri</Link> e 
                        il <Link href='/visite/lazio/latina/parco_nazionale_del_circeo' className='text-decoration-none color_link'>Parco Nazionale del Circeo</Link>. Poco fuori dalla città, imperdibile è il <Link href='/visite/lazio/latina/giardini_di_ninfa' className='text-decoration-none 
                        color_link'>Giardini di Ninfa</Link> monumento naturale della Repubblica. Si tratta di uno splendido giardino all'inglese dall'aspetto romantico realizzato da Gelasio Caetani nel 1921.
                    </p>
                    <p>
                        <Link href='/destinazioni/lazio/rieti' className='text-decoration-none color_link'>Rieti</Link> è una città antica con dintorni ricchi di borghi interessanti, ma anche un paesaggio e un patrimonio storico unici nel loro genere. 
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Cosa vedere nel Lazio: 4 tapper fondamentali</h2>
                    <p>
                        Oltre alle città principali, il Lazio offre tantissime attrattive.
                        La prima è <Link href='/destinazioni/lazio/viterbo/civita_di_bagnoregio' className='text-decoation-none color_link'>Civita di Bagnoregio</Link>, luogo incantevole nel viterbese, definita la “città che muore“ a causa della precarietà della sua struttura: è posta su uno 
                        sperone tufaceo in continua erosione. Si può raggiungere in auto in circa due ore da Roma.
                    </p>
                    <p>
                        Un’immersione nella natura è garantita sul <Link href='/laghi/lazio/lago_di_bacciano' className='text-decoration-none color_link'>Lago di Bracciano</Link>, a circa un'ora d'auto dal centro, il lago di origini vulcaniche è popolato fin dal Neolitico, con un paesaggio da 
                        cartolina reso unico da boschi, borghi storici, dolci colline e casolari. 
                    </p>
                    <p>
                        Gli amanti del trekking devono appuntarsi i <Link href='/montagna/lazio/monti_lepini' className='text-decoration-none color_link'>Monti Lepini</Link> che costituiscono insieme ai <Link href='/montagna/lazio/monti_ausoni_e_aurunci' className='text-decoration-none 
                        color_link'>Monti Ausoni e Aurunci</Link> la catena montuosa più vasta del Lazio, raggiungibili in circa un'ora e mezza d'auto. Piuttosto selvaggi, offrono molti itinerari nella natura. La vista è mozzafiato, ma, se non volete spostarvi troppo dalla capitale, dei bei 
                        percorsi a piedi si trovano anche sui <Link href='/visite/lazio/roma/colli_albani' className='text-decoraion-none color_link'>Colli Albani</Link>. Ci troviamo nella zona dei <Link href='/visite/lazio/roma/castelli_romani' className='text-decoration-none color_link'>Castelli 
                        Romani</Link>, dove trovare tanti sentieri da percorrere e attività da provare. Il punto di partenza più rinomato è <Link href='/destinazioni/lazio/roma/rocca_di_papa' className='text-decoration-none color_link'>Rocca di Papa</Link> mentre la cima più famosa dei Colli Albani 
                        è il <Link href='/visite/lazio/roma/monte_cavo' className='text-decoration-none color_link'>Monte Cavo</Link>, alto quasi 1000 metri, un vulcano ormai spento di 10.000 anni.
                    </p>
                    <p>
                        L’<Link href='/destinazioni/lazio/latina/ponza' className='text-decoration-none color_link'>Isola di Ponza</Link>  è una meta glamour per gli amanti del mare: è la principale tra le Isole Pontine e sfoggia un mare cristallino, coste sabbiose e affascinanti grotte. È 
                        raggiungibile in un'ora di treno da Roma fino al porto di <Link href='/destinazioni/lazio/anzio' className='text-decoration-none color_link'>Anzio</Link>, e da lì un comodo traghetto raggiunge il bel porticciolo.
                    </p>
                </div>
                <div className='row d-flex justify-content-center mx-0 mb-4'>
                <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Lazio'>
                    <CardBody className='bottone'>
                    <Link 
                        className="bottone_link" 
                        href='/destinazioni/lazio/roma'
                        onMouseEnter={() => setIsHoveredRoma(true)}
                        onMouseLeave={() => setIsHoveredRoma(false)}
                        >Roma {isHoveredRoma&& <i className="bi bi-chevron-right"></i>}
                    </Link>
                    </CardBody>
                </Card>
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
    )
}
