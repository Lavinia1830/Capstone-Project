import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';

export default function Perugia(props) {

    const [isHoveredPerugina, setIsHoveredPerugina] = useState(false);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='perugia' style={{ position: 'relative' }}>
                    <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Perugia</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Città</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Il <b>centro storico</b> del capoluogo umbro è un vero e proprio borgo trecentesco, uno dei più belli e amati d’Italia.<br/>
                        Vanta una vita cittadina molto intensa, legata alla presenza delle due università storiche, l’Università degli Studi, fondata nel 1308, e l’Università per stranieri, la maggiore d’Italia, ma anche alle tante manifestazioni di respiro internazionale come l’<b>Eurochocolate e l’Umbria Jazz</b>, che 
                        richiamano turisti da tutto il mondo. 
                    </p>
                    <p>
                        Brulicante di giorno, ma viva e allegra anche di notte, <strong>Perugia</strong> merita molto più di una visita mordi e fuggi alla scoperta dei monumenti più importanti: è anche meta perfetta per una vacanza prolungata.<br/>
                        Il panorama, poi, è mozzafiato ovunque si guardi, fatto di colline, monti e pianure dalla bellezza sorprendente.
                    </p>
                    <p>
                        Le prime tracce della <b>Perugia etrusca</b> si collegano con la sua rifondazione su un preesistente insediamento umbro. La <b>battaglia del Sentino</b>, nel 295 a.C., consegnò queste terre ai Romani.
                    </p>
                    <p>
                        Fin dall’alto medioevo divenne di grande rilevanza all’interno dello <b>Stato della Chiesa</b>, in particolare da parte di papa <b>Innocenzo III</b>, che morì proprio nel capoluogo umbro nel 1216. Durante la lotta per il predominio sul territorio, considerato strategico per la sua posizione 
                        protetta e le risorse presenti nei terreni circostanti, si alternarono i <b>Visconti</b>, con il loro condottiero <b>Gian Galeazzo</b>, e lo <b>Stato Pontificio</b>, grazie ai servigi del cavalier di ventura <b>Braccio da Montone</b>, agli inizi del 1400, per poi lasciare il comando alla 
                        famiglia <b>Baglioni</b>.
                    </p>
                    <p>
                        Gli anni a seguire furono segnati dal <b>dominio del Papa</b>, con una piccola interruzione nei primi anni dell’800 con la presa del potere dell’esercito napoleonico. Dalla seconda metà degli anni 30 del 1800 a Perugia, come in molte altre parti d’Italia, crebbero i malcontenti e iniziarono a nascere 
                        organizzazioni clandestine. È il 14 settembre del 1860 quando Perugia viene liberata dall’esercito Piemontese, costringendo gli svizzeri a rifugiarsi nella <b>Rocca Paolina</b>. L’annessione inizialmente avviene al regno di Sardegna,  poi divenuto regno d’Italia.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className='color-subtitle'>Casa vedere a Perugia: I luoghi imperdibili</h2>
                    <p>
                        L’alternarsi di diverse culture e popoli è stata una benedizione per chi oggi ha la fortuna di visitare Perugia: la città custodisce tesori artistici e monumentali che testimoniano il ricco passato e concorrono al primato culturale del nostro Paese. <b>Cosa vedere a Perugia</b>? Le alternative sono 
                        davvero tante e, nell’imbarazzo della scelta, non resta che suggerire alcuni dei luoghi più amati dai turisti.
                    </p>
                    <ul className='lista'>
                        <li>
                            Prima ancora di entrare nel centro storico di Perugia fermatevi alla <b>Casa del Cioccolato </b> <Link href='/visite/umbria/perugia/perugina' className='text-decoration-none color_link'>Perugina</Link>. Tappa obbligata per tutti i golosi, ospita il museo che ripercorre la storia del “cibo 
                            degli dèi”.
                        </li>
                        <li>
                            È ora di avvicinarsi al cuore pulsante della città, Piazza IV Novembre con la Fontana Maggiore. Qui si affacciano il <Link href='/visite/umbria/perugia/palazzo_dei_priori' className='text-decoration-none color_link'>Palazzo dei Priori</Link> e la <Link href='/visite/umbria/perugia/cattedrale_di_san_lorenzo'
                            className='text-decoration-none color_link'>Cattedrale di San Lorenzo</Link>, sedetevi sulla scalinata a guardare gli artisti di strada.
                        </li>
                        <li>
                            Tra le opere del passato più iconiche che ci permettono di ammirare l’immensità del lavoro architettonico dai fondatori storici di questo capoluogo, visitate il <Link href='/visite/umbria/perugia/pozzo_etrusco' className='text-decoration-none color_link'>Pozzo etrusco</Link>, immane opera idraulica, 
                            l’<Link href='/visite/umbria/perugia/ipogeo_dei_volumni' className='text-decoration-none color_link'>Ipogeo dei Volumni</Link>, il più antico e conservato monumento funerario di epoca etrusca, e l’<Link href='/visite/umbria/perugia/arco_etrusco' className='text-decoration-none color_link'>Arco etrusco</Link>.
                        </li>
                        <li>
                            Fate tappa poi alla <Link href='/visite/umbria/perugia/galleria_nazionale_dell_umbria' className='text-decoration-none color_link'>Galleria Nazionale dell’Umbria</Link>, ideale per gli amanti dell’arte, perché conserva tesori di Piero della Francesca, Benozzo Gozzoli, Beato Angelico, Pinturicchio e 
                            il Perugino.
                        </li>
                    </ul>
                    <p>
                        Tra gli altri luoghi di interesse più visitati c’è certamente <Link href='/visite/umbria/perugia/acquedotto_di_perugia' className='text-decoration-none color_link'>l’acquedotto di Perugia</Link>, opera idraulica di eccezionale ingegneria, che riuscì ad imprimere all’acqua forza inversa così da servire tutti 
                        i 4 chilometri della sua estensione. E poi ancora la <b>Rocca Paolina</b>, la <b>Città della Domenica</b> e un giro di shopping in <b>Corso Vannucci</b>.
                    </p>
                </div>
                <div className='row d-flex justify-content-center mx-0 mb-4'>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Perugia'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/umbria/perugia/perugina'
                            onMouseEnter={() => setIsHoveredPerugina(true)}
                            onMouseLeave={() => setIsHoveredPerugina(false)}
                            >Perugina {isHoveredPerugina && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
    )
}
