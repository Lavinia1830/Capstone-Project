import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';
import Footer from '@/Components/Footer';

export default function Umbria(props) {

    const [isHoveredPerugia, setIsHoveredPerugia] = useState(false);

    return (
        <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
      <main>
        <div className='text-center umbria'>
          <h1>Umbria</h1>
        </div>
        <div className='text-center margin mt-3'>
          <p>
            Forse non è un caso se alcune <b>tra le più alte figure della storia della spiritualità umana</b> abbiano trovato ispirazione proprio in questa terra: la natura in <strong>Umbria</strong> è molto spesso poetica, prodiga di doni, in grado di evocare immagini di 
            armonia e pace. Così, che vi ritroviate a sgomitare tra la folla in pellegrinaggio ad Assisi e Cascia, o da soli in uno dei tanti eremi che costellano colline e montagne, percepirete egualmente quell’atmosfera così peculiare, intensa e immateriale al contempo, 
            per la quale la regione è nota nel mondo.<br/>
            L’appellativo di ‘Polmone Verde d’Italia’ rende già l’idea della ricchezza paesaggistica della regione. Alla rigogliosa vegetazione va però aggiunta la storica presenza di alcuni percorsi legati a grandi figure religiose. La cosiddetta Via di Francesco collega 
            Assisi al santuario della Verna, nei boschi del Casentino. <Link href='/destinazione/umbria/assisi' className='text-decoration-none color_link'>Assisi</Link> è collegata anche a <Link href='/desxtinazioni/umbria/spoleto' 
            className='text-decoration-none color_link'>Spoleto</Link> da un itinerario ad alto coefficiente artistico, e a Loreto, un’altra capitale della spiritualità. Anche <Link href='/destinazioni/umbria/norcia' className='text-decoration-none color_link'>Norcia </Link> 
            è punto di partenza di un importante cammino, quello di San Benedetto.
          </p>
        </div>
        <div className="margin mt-3">
            <h2 className='color-subtitle'>Città d'arte dell'Umbria</h2>
            <p>
                Se il buongiorno si vede dal mattino, partire da <Link href='/destinazioni/umbria/gubbio' className='text-decoration-none color_link'>Gubbio</Link> rappresenta l’auspicio per un grande viaggio: dalla <Link href='/visite/umbria/assisi/piazza_grande' 
                className='text-decoration-none color_link'>Piazza Grande</Link> al <Link href='/visite/umbria/gubbio/palazzo_ducale' className='text-decoration-none color_link'>Palazzo Ducale</Link>, dal Palazzo dei Consoli ai più remoti angoli dei quartieri medievali, 
                vi attendono scorci di pura bellezza. E pensare che la prossima tappa è <Link href='/destinazione/umbria/assisi' className='text-decoration-none color_link'>Assisi</Link>, dove già solo visitando la <Link href='/visite/umbria/assisi/basilica_di_san_francesco'
                className='text-decoration-none color_link'>Basilica di San Francesco</Link>, la Cattedrale di San Rufino e la Basilica di Santa Chiara farete il pieno di capolavori anche per le vacanze a venire. Più a sud, ecco Spello, con gli splendidi affreschi del 
                Pinturicchio, e poi <Link href='/destinazioni/umbria/foligno' className='text-decoration-none color_link'>Foligno</Link>, che ospita, nella stupenda cornice di <Link className='text-decoration-none color_link'>Palazzo Trinci</Link>, uno strepitoso ciclo 
                pittorico tardogotico. E di sicuro non sarà <b>Spoleto</b>, la località più meridionale della <Link className='text-decoration-none color_link'>Valle Umbra</Link>, ad abbassare il tenore estetico dell’itinerario, visto che il Duomo e i musei brulicano di 
                meraviglie artistiche. A quel punto sarà ora di proseguire verso est e poi ancora a sud  fino a <Link className='text-decoration-none color_link'>Narni</Link>, dov’è custodito uno dei quadri più importanti del Medioevo umbro, e ai palazzi rinascimentali di 
                Amelia.
            </p>
            <p>
                Ad appena metà del percorso i vostri occhi non saranno ancora sazi di bellezza. Così, procedendo verso nord s’incontra Todi, che vanta un patrimonio artistico di tutto rispetto, a partire dalla <Link className='text-decoration-none color_link'>Piazza del 
                Popolo</Link> dominata dalla luminosa cattedrale o dal maestoso <Link className='text-decoration-none color_link'>Tempio di Santa Maria della Consolazione</Link>. La strada per arrivare a <Link className='text-decoration-none color_link'>Orvieto </Link> 
                passa per il <Link className='text-decoration-none color_link'>Lago di Corbara</Link>, un bacino artificiale di recente creazione che i tanti artisti impiegati nella realizzazione del magnifico Duomo non avrebbero potuto immortalare; ma grazie ai numerosi 
                capolavori che decorano la <Link className='text-decoration-none color_link'>Cappella di San Brizio</Link> non ne avvertirete la mancanza. Un altro lago fu invece più volte rappresentato da uno dei pittori simbolo di questa regione: è il Trasimeno, che il 
                Perugino ammirò fin dalla sua nascita a <b>Città della Pieve</b>, un gioiello di mattoni che conserva importanti opere. Per avere un quadro più esaustivo del lavoro del Perugino vi dovrete però recare a <b>Perugia</b>, città ricca d’arte e di fascino, e 
                qui sostare almeno due giorni. Concludete l’itinerario a <b>Città di Castello</b>, luogo di confine, che vide il passaggio e la nascita di grandi artisti dal Rinascimento al Novecento: cercatene le tracce nella Pinacoteca Comunale e nelle tre esposizioni 
                della Collezione Burri.
            </p>
        </div>
        <div className='row d-flex justify-content-center mx-0 mb-4'>
          <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Umbria'>
            <CardBody className='bottone'>
              <Link 
                className="bottone_link" 
                href='/destinazioni/umbria/perugia'
                onMouseEnter={() => setIsHoveredPerugia(true)}
                onMouseLeave={() => setIsHoveredPerugia(false)}
                >Perugia {isHoveredPerugia && <i className="bi bi-chevron-right"></i>}
              </Link>
            </CardBody>
          </Card>
        </div>
      </main>
      <Footer/>
    </AuthenticatedLayout>
    )
}
