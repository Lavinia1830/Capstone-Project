import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';
import Footer from '@/Components/Footer';

export default function Abruzzo(props) {

    const [isHoveredLAquila, setIsHoveredLAquila] = useState(false);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='text-center abruzzo'>
                <h1>Abruzzo</h1>
                </div>
                <div className='text-center margin mt-3'>
                    <p>
                        <b>Coste frastagliate</b> e <b>fresca sabbia dorata</b>, spiagge animate e lidi tranquilli, ma anche una <b>natura</b> caratterizzata da montagne e boschi, ricca di specie vegetali e di una fauna unica in un habitat naturale abitato da cervi, 
                        camosci, lupi, orsi, volpi e linci.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className='color-subtitle'>Origine e cenni storici sull’Abruzzo</h2>
                    <p>
                        La <b>storia dell'Abruzzo</b> è lunga e affascinante, soprattutto quella che riguarda le sue origini. Secondo le ipotesi più accreditate, la parola Abruzzo deriverebbe da <b>Aprutium</b>, evoluzione popolare di (ad)Praetutium, la terra dei Pretuzi, 
                        un'antica popolazione italica che abitava nell'attuale <Link href='/destinazioni/abruzzo/teramo' className='text-decoration-none color_link'>Teramo</Link>.
                    </p>
                    <p>
                        Popolata sin dalla preistoria, la regione ospitava gruppi di pastori, tutti appartenenti alla <b>stirpe dei Sanniti</b>, che sfruttavano le strade naturali createsi nelle lunghe valli per la <b>transumanza</b> delle pecore: percorrevano vie e gole 
                        di montagna dalle zone circostanti L'Aquila fino a Foggia e viceversa. La transumanza fu il principale mezzo di sostegno economico del territorio.
                    </p>
                    <p>
                        Tra le popolazioni che segnarono il territorio, ci furono i <b>Marsi</b>, i Peligni, i Vestini, gli Equi, che abitavano in città cinte da mura fortificate con grandi santuari. A proposito dei Vestini, e delle guerre sannitiche, ne conserviamo 
                        tutt’oggi una testimonianza preziosa:  la statua del Guerriero di Capestrano, una scultura in calcare tenero che raffigura uno dei loro guerrieri. È una delle opere più monumentali e significative dell'arte italica oggi conservata 
                        a <Link href='/destinazione/abruzzo/chieti' className='text-decoration-none color_link'>Chieti</Link>. 
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className='color-subtitle'>Le città principali dell’Abruzzo</h2>
                    <p>
                        L’Abruzzo si estende dal cuore dell’Appennino al mare Adriatico e comprende ben <b>3 Parchi Nazionali</b>, un'<b>Area Marina Protetta</b>, un <b>Parco Regionale</b> e oltre <b>30 Riserve Naturali</b>: è la maggiore area naturalistica d’Europa 
                        caratterizzata da vette incontaminate, un dolce sistema collinare e un bellissimo mare.<br/>
                        Tra le città principali dell'Abruzzo troviamo <Link href='/destinazioni/abruzzo/pescara' className='text-decoration-none color_link'>Pescara</Link>, bagnata dall’Adriatico e terra natale del poeta Gabriele D'Annunzio, <b>Teramo</b> 
                        e <Link href='/destinazione/abruzzo/l_aquila' className='text-decoration-none color_link'>L’Aquila</Link>.
                    </p>
                    <p>
                        <b>Teramo</b> si trova alle pendici del Gran Sasso, la montagna simbolo dell’Abruzzo. Città dalle origini antiche, è punteggiata da alberi di ulivo e filari di vigneti ed è il borgo più bello d'Abruzzo.
                    </p>
                    <p>
                        <b>L’Aquila</b> è una delle <b>città più importanti del centro Italia</b>, in una posizione che la rende uno dei capoluoghi più alti del Paese. Nonostante sia stata ferocemente colpita dal forte terremoto del 2009, la città si è coraggiosamente rimboccata 
                        le maniche per riportare alla luce tutto il suo splendore. Passate dalla Basilica di Santa Maria di Collemaggio per capire di cosa stiamo parlando.
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
                <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Abruzzo'>
                    <CardBody className='bottone'>
                    <Link 
                        className="bottone_link" 
                        href='/destinazioni/abruzzo/l_aquila'
                        onMouseEnter={() => setIsHoveredLAquila(true)}
                        onMouseLeave={() => setIsHoveredLAquila(false)}
                        >L'Aquila {isHoveredLAquila&& <i className="bi bi-chevron-right"></i>}
                    </Link>
                    </CardBody>
                </Card>
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
    )
}
