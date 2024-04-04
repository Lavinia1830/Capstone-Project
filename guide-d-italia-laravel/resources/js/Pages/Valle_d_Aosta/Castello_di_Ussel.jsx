import React from 'react';
import CercaComponent from '@/Components/CercaComponent';
import Footer from '@/Components/Footer';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import { Card } from 'react-bootstrap';
import Castello_di_Ussel_img  from '../../../assets/Valle_d_Aosta/Castello_di_Ussel_Valle_d_Aosta.jpg';
import Arrivando_al_Castello_di_Ussel from '../../../assets/Valle_d_Aosta/Arrivando_al_Castello_di_Ussel_Valle_d_Aosta.jpg';
import Facciata_del_Castello_di_Ussel from '../../../assets/Valle_d_Aosta/Facciata_del_Castello_di_Ussel_Valle_d_Aosta.jpg';

export default function Castello_di_Ussel(props) {
  return (
    <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
    >
        <main className='row'>
            <div className='col-lg-8'>
                <div className='margin'>
                    <img src={Castello_di_Ussel_img} alt="Castello di Ussel" className='mx-auto my-4' style={{width: 'auto', height: 'auto'}}/>
                    <h1 className='color-title text-center mb-3'>Castello di Ussel e l’inventore della penna Bic</h1>
                    <hr className='w-25 border-3'/>
                </div>
                <div className="margin">
                    <p>
                       Il <strong>castello di Ussel</strong> nel comune di Chatillon è un bell'esempio di castello monoblocco realizzato nel XIV secolo della potente famiglia Challant e acquistato nel XX secolo dal 
                       <b>Barone Marcel Bich</b>, l'inventore della biro.
                    </p>
                    <ul className='lista'>
                        <span>Contenuti</span>
                        <li>
                            <Link href='#First_Point_Header' className='text-decoration-none color_link'>1 Storia del Castello di Ussel</Link>
                        </li>
                        <li>
                            <Link href='#Second_Point_Header' className='text-decoration-none color_link'>2 Castello di Ussel la struttura</Link>
                        </li>
                        <li>
                            <Link href='#Third_Point_Header' className='text-decoration-none color_link'>3 Marcel Bich, l'inventore della biro</Link>
                        </li>
                        <li>
                            <Link href='#Fourth_Point_Header' className='text-decoration-none color_link'>4 Castello di Ussel e dintorini</Link>
                        </li>
                    </ul>
                </div>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="d-flex align-items-center">
                            <Card.Body>
                                <Card.Title><h2 className="card-title color-subtitle" id='First_Point_Header'>Storia del Castello di Ussel</h2></Card.Title>
                                <Card.Text>
                                    Il Castello di Ussel, che domina la piana di Chatillon, costituisce il primo esempio di castello “monoblocco” in Valle d’Aosta, un castello dalla struttura severa, un parallelepipedo a pianta rettangolare 
                                    costruito su un roccione che guarda verso Chatillon e Saint Vincent. Un castello unico nel suo genere ai tempi, e sarà in parte imitato dall’austera <Link to='/visite/castello_di_verres' 
                                    className='text-decoration-none color_link'>fortezza di Verrès</Link> costruita circa 50 anni dopo. <br/>
                                    La costruzione del castello risale alla metà del XIV secolo, quando Ebalo titolare del Feudo di Ussel e Saint Marcel, dà inizio ai lavori dopo una lunga disputa famigliare per l'eredità. Nello stesso periodo 
                                    suo fratello Aimone costruiva i ben <Link to='/cammino_balteo_itinerario_lungo_la_bassa_via_della_valle_daosta' className='text-decoration-none color_link'>castello di Fenis</Link> di cui era feudatario.
                                </Card.Text>
                                <Card.Text>
                                    Il castello rimase alla famiglia Challant fino alla fine del XV secolo per divertare una prigione ed essere successivamente abbandonato. Nel corso dell'Ottocento con l'estinzione della Famiglia Challant il 
                                    castello passò ai Passerin d'Entrèves per poi essere acquistato nel 1983 dal barone Marcel Gich. Dopo alcuni anni il Barone vendette il Castello alla Regione Autonoma Valle d'Aosta, chiedendo che lo stesso fosse 
                                    valorizzato come sito culturale aspitando mostre ed eventi. <br/>
                                    Il castelli dopo alcuni lavori di restauro fu aperto al pubblico nel 1998 in occasione dell'allestimento di alcune mostre temporanee.
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className=" d-flex align-items-center">
                        <Card.Body>
                            <Card.Title><h2 className="card-title color-subtitle" id='Second_Point_Header'>Castello di Ussel la struttura</h2></Card.Title>
                            <Card.Text>
                                Un castello imponente con quattro piani fuori terra, ma all'interno a causa della presenza delle rocce sulle quali è stata costruito i piani utili sono tre. Le facciate sono scandite da eleganti bifore su colonnine
                                e stipiti in pietra tutte diverse le une delle altre. L'unica decorazione esterna è una fascia ad archetti ciechi scolpiti in pietra. Agli angoli della facciata svettano due torrette pensili, aggettanti mentre al 
                                centro sopra l'ingresso una torretta aggettante con caditoie. Sul lato opposto tre torri rettangolari sporgenti, di cui quella centrale costruisce il mastio simbolo del potente del signore feudale. <br/>
                                Il cammino di ronda era protetto da una merlatura e percorre tutto il perimetro del castello.
                            </Card.Text>
                            <Card.Text>
                                Nonostante l'apparenza e pue essendo protetto su tre lati dello strapiombo della roccia il castello non ha sistemi difensivi importanti. Ebalo probabilmente voveva realizzare più una residenza singolare che 
                                un castello difensivo.
                            </Card.Text>
                            <Card.Text>
                                A causa dei secoli di abbandono il castello subì gravi danni. Si presume che al suo interno fosse diviso in tre vani e che la parte centrale fosse la vera e propria dimora signorile. Le parti laterali ospitavano 
                                i locali di servizio, le cucine e le latrine. <br/>
                                Il castello veniva scaldato mediamente monumentali camini sovrapposti tra loro in modo da usare un'unica canna fumaria.
                            </Card.Text>
                        </Card.Body>
                        
                    </div>
                    <div className="d-flex flex-row justify-content-center">
                        <div className='mx-2'>
                            <Card.Img src={Arrivando_al_Castello_di_Ussel} className="mb-2"  alt="Attivando al Castello di Ussel" title='Attivando al Castello di Ussel'/>
                            <p className='text-center'>
                                Arrivando al Castello di Ussel
                            </p>
                        </div>
                        <div className='mx-2'>
                            <Card.Img src={Facciata_del_Castello_di_Ussel} className="mb-2"  alt="Affreschi della facciata Cattedrale di Aosta" title='Affreschi della facciata Cattedrale di Aosta'/>
                            <p className='text-center'>
                                Affreschi della facciata Cattedrale di Aosta
                            </p>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="d-flex align-items-center">
                            <Card.Body>
                                <Card.Title><h2 className="card-title color-subtitle" id='Third_Point_Header'>Marcel Bich, l'inventore della biro</h2></Card.Title>
                                <Card.Text>
                                    Il Berone Marcel Bich, è famoso per tre invenzioni geniali che rivoluzionarono la vita nel dopoguerra: la penna biro, il rasoio monouso e l'accendico senza ricarica. <br/>
                                    Il giovane Marcel, nato a Torino in Corso Imberto 60, nel cuore dell'elegante quartiere della Crocetta ha però origine da una famiglia di Chatillon. Dopo aver emigrato a Parigi con i suoi genitori, dove si laureò, nel 
                                    1930 si lanciònel mondo del lavoro facendo i lavori più diversi tra cui commerciante di lampadine e rappresentante di inchiostri.
                                </Card.Text>
                                <Card.Text>
                                    Nel 1953 conobbe <b>Laszlo Biro</b>, ungherese che aveva avviato la produzione della penna a sfra senza grandi risultati. Bich ne prelevò il brevetto ed avviò una produzione di serie sbaragliando la concorrenza 
                                    delle penne stilografiche ed imponendosi come leader di mercato. <br/>
                                    Nel 1973 avviò poi la produzione degli accendini e nel 1976 quella dei rasoi. il gruppo BIC oggi è un colosso mondiale, un marchio noto a tutti.
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="d-flex align-items-center">
                            <Card.Body>
                                <Card.Title><h2 className="card-title color-subtitle" id='Fourth_Point_Header'>Catello di Ussel e dintorni</h2></Card.Title>
                                <Card.Text>
                                    Ai piedi della rocca, dell'altro lato della Dora Baltea, si vedono il paese di Chatillon col <Link to='/visite/castello_gamba' className='text-decoration-none color_link'>Castello Gamba</Link>, oggi sede della collezione di 
                                    arte moderna e contemporaneadella Valle d'Aosta e <Link to='/visite/saint_vincent' className='text-decoration-none color_link'>Saint Vincent</Link> nota per le sue terme. <br/>
                                    Seppure il castello sia chiuso al pubblico, vale la pena raggiungerlo ache solo per godere del ben panorama tutt'intorno. Da qui la vista spazia sulle montagne circostanti e si può ammirare il Monte Zerbion. <br/>
                                    Costruito su un promontorio roccioso a strapiombo sulla Dora, il castello di Ussel è raggiungibile da Chatillon. La sciato il mezzo nel viallaggio di Ussel si imbocca un comodo sentiero che dopo una prima parte in piano conduce 
                                    lungo una breve salita al castello.
                                </Card.Text>
                                <Card.Text>
                                    <p>
                                        <b>Il Catello di Ussel è normalmente chiuso al pubblico</b>. <br/>
                                        Vi sono però <a href='https://www.comune.chatillon.ao.it/vivere-chatillon/guida-turistica/castelli-e-chiese/castello-di-ussel/' className='text-decoration-none color_link'>aperture straordinarie</a> nel periodo estivo
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </div>
                </Card>
                <div className="margin">
                    <p className='fw-bold'>
                        Contattami per prenotare la tua visita guidata ai castelli valdostani
                    </p>
                </div>
                <div className='margin'>
                    <h3 className='color-subtitle'>Leggi</h3>
                    <ul className='lista'>
                        <li>
                            <Link href='/chatillon_cosa_vedere' className='text-decoration-none color_link'>Chatillon cosa vedere nel paese dei castelli</Link>
                        </li>
                        <li>
                            <Link href='/le_piu_belle_passeggiate_lungo_i_ru_della_valle_d_aosta' className='text-decoration-none color_link'>Le più belle passeggiate lungo i ru della Valle d’Aosta</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <CercaComponent/>
        </main>
        <Footer/>
    </AuthenticatedLayout>
  )
}
