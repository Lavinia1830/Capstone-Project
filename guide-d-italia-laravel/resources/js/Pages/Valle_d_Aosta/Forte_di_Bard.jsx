import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import {Card} from 'react-bootstrap';
import Footer from '@/Components/Footer';
import Borgo_di_Bard from '../../../assets/Valle_d_Aosta/Borgo_di_Bard_Valle_d_Aosta.jpg';
import Museo_delle_Alpi from '../../../assets/Valle_d_Aosta/Museo_delle_Alpi_Valle_d_Aosta.jpg';
import Prigioni_forte_di_bard from '../../../assets/Valle_d_Aosta/Prigioni_forte_di_bard_Valle_d_Aosta.jpg';
import Museo_forte_di_bard from '../../../assets/Valle_d_Aosta/Museo_forte_di_bard_Valle_d_Aosta.jpg';
import Mostre_temporanee from '../../../assets/Valle_d_Aosta/Mostre_temporanee_Valle_d_Aosta.jpg';

export default function Forte_di_Bard(props) {
  return (
    <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
    >
        <main>
            <div className='forte_di_bard' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Forte di Bard</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Forte di Bard</p>
            </div>
            <div className='mt-3'>
                <div className='margin'>
                    <h2 className='color-subtitle'>Informazioni sul Forte di Bard</h2>
                    <p>
                        Il <b>Forte di Bard in Valle d'Aosta</b>, detto anche <b>castello di Bard</b>, è una maestosa fortezza ottocentesca tra le meglio conservate dell'arco aplino. <br/>
                        Costituito da più corpi di fabbrica, il Forte di Bard dopo un attento lavoro di restauro ha aperto al pubblico nel 2006 ed oggi è il principale polo culturale della regione.
                    </p>
                    <p>
                        Il Forte con la sua imponente mole e la storia millenaria è luogo privilegiato per le <b>gite scolastiche</b> per scuole di ogni ordine e grado. La visita al borgo e alla 
                        fortezza consente di fare un viaggio luogo duemila anni intersecando Romanità, Medioevo e Risorgimento.
                    </p>
                    <p>
                        Tre sono le opere principali che compongono il Forte di Bard e che accolgono gli spazi espositivi:
                    </p>
                    <p>
                        L'<b>Opera Ferdinando</b> che accoglie il <b>Museo della Fortificazioni e il Museo dell Frontiere</b> <br/>
                        L'<b>Opera Vittorio</b> che accoglie Le Apli di Ragazzi <br/>
                        L'<b>Opera Carlo Alberto</b> che ospita il <b>Museo delle Alpi</b>, le <b>mostre temporanee</b> e le prigioni
                    </p>
                </div>
                <div className="margin">
                    <h2 className='color-subtitle'>La storia del Forte di Bard</h2>
                    <p>
                        Dell'antico castello di Bard , citato per la prima volta nel 1034, non vi rimane più nulla. Sappiamo che esso appartenne fino al 1242 ai potenti e temuti <b>Signori di Bard</b> 
                        per poi passare tra i possedimenti di <b>Savoia</b>. Nel 1661 il Duca di Savoia decide di spostare tutti gli armamenti in suo passesso nei castelli di Montjovet e Verrès al Castello
                        di Bard, facendone il principale sito armato e fortificato dei Savoia in Valle d'Aosta.
                    </p>
                    <p>
                        Il castello non fu mai coinvolto in fatti d'arme importanti fino al maggio del 1800 quando fermò l'avanzata di Napoleone. <br/>
                        L'<b>Armata di riserva francese</b> con 40.000 soldati fu fermata qui da una sparuta guarnigioneaustropiemontese per ben 15 giorni. <br/>
                    </p>
                    <p>
                        Ciò che ammiriamo oggi è una fortezza ottocentesca commissionata dal <b>Re Carlo Felice</b> all'insegnare militare <b>Francesca Antonio Olivero</b> il quale in soli otto anni (1830-1938)
                        realizzò l'imponente Forte che cadde però ben presto in disuso diventando un bagno penale ed in seguito fu destinato di munizioni.
                    </p>
                    <p>
                        Dismesso nel 1975 dal Demanio Militare il sito è stato acquistato dalla Regione Autonoma Valle d'Aosta nel 1990 che grazie ai finanziamenti europei ha realizzato  la ristrutturazione e 
                        riqualificazione del complesso.
                    </p>
                    <p>
                        Nel corso della sua storia millenaria il borgo ha visto il passaggio di personalità importanti come Napoleone Bonaparte, il giovane scrittore <b>Stenghal</b> che come soldato tra le file 
                        napoleoniche assistette al celebre assedio e lo descrisse in uno dei suoi romanzi ed infine <b>Camillo Benso Conte di Cavour</b> che nel 1831 vi trascorse qualche mese.
                    </p>
                    <p>
                        Oggi il bordo e il Forte di Bard sono sede di importanti manifestazioni come <b>Marché au Fort</b>, Napoleonica la leggendaria rievoacazione dell'assedio ottocentesco, oppure 
                        <Link to='/visite/mercatini_natale_bard' className='text-decoration-none color_link'> Noel au Bourg</Link> con l'allestimento di presepi lungo la via centrale del borgo.
                    </p>
                </div>
                <div className="margin">
                    <h2 className='color-subtitle'>Visita guidata al Forde di Bard</h2>
                    <p>
                        Durante la <b>visita guidata al Forte di Bard</b> potremo andare alla scoperta di tutte le fortificazioni dhe costituiscono il Forte e oltre che dell'affascinante borgo medievale.
                    </p>
                </div>
                <div className="margin">
                    <h2 className='color-subtitle '>Luoghi visitati</h2>
                    <div className="container d-flex justify-content-center flex-wrap">
                        <Card className='my-card'>
                            <Link to="/borgo_di_bard" className='d-flex text-decoration-none color_link'>
                                <Card.Img src={Borgo_di_Bard} style={{width: "150px", height: "80px"}}/>
                                <Card.Body>
                                    <Card.Title className='fs-6'>Bordo di Bard</Card.Title>
                                </Card.Body>
                            </Link>
                        </Card>
                        <Card className='my-card'>
                            <Link to="/il_museo_delle_alpi" className='d-flex text-decoration-none color_link'>
                                <Card.Img src={Museo_delle_Alpi} style={{width: "150px", height: "80px"}}/>
                                <Card.Body>
                                    <Card.Title className='fs-6'>Il Muoseo delle Alpi</Card.Title>
                                </Card.Body>
                            </Link>
                        </Card>
                        <Card className='my-card'>
                            <Link to="/le_prigioni_del_forte" className='d-flex text-decoration-none color_link'>
                                <Card.Img src={Prigioni_forte_di_bard} style={{width: "150px", height: "80px"}}/>
                                <Card.Body>
                                    <Card.Title className='fs-6'>Prigione del Forte di Bard</Card.Title>
                                </Card.Body>
                            </Link>
                        </Card>
                        <Card className='my-card'>
                            <Link to="/il_ferdinando_il_museo_delle_fortificazioni_e_delle_frontiere" className='d-flex text-decoration-none color_link'>
                                <Card.Img src={Museo_forte_di_bard} style={{width: "150px", height: "80px"}}/>
                                <Card.Body>
                                    <Card.Title className='fs-6'>Museo Il Ferdinando - Museo delle Fortificazioni e delle Frontiere</Card.Title>
                                </Card.Body>
                            </Link>
                        </Card>
                        <Card className='my-card'>
                            <Link to="/il_ferdinando_il_museo_delle_fortificazioni_e_delle_frontiere" className='d-flex text-decoration-none color_link'>
                                <Card.Img src={Mostre_temporanee} style={{width: "150px", height: "80px"}}/>
                                <Card.Body>
                                    <Card.Title className='fs-6'>Mostre temporanee</Card.Title>
                                </Card.Body>
                            </Link>
                        </Card>
                    </div>
                </div>
                <div className="margin">
                    <h3 className='color-subtitle'>Biglietti</h3>
                    <h3 className='color-subtitle'>Tariffe delle Arre espositive</h3>
                    <p>
                        Accesso al complesso monumentale + 1 spazio espositivo a scelta: <br/>
                        intero: € 8,00 <br/>
                        Ridotto: € 7,00 <br/>
                        Ridotto giovani: € 3,00 per tutti i giovani dai 19 ai 25 anni compresi <br/>
                        Gratuito: bambini e ragazzi fino ai 18 anni compliuti, scolaresche, sogetti portatori di handicap in posssesso della certificazione  di cui alla legge 104/92 e loro accompagnatori, 
                        scolaresche (i docenti sono paganti), abbonati circuito Musei Piemonte/Lomabardia (muniti di card in corso di validità)
                    </p>
                    <h3 className='color-subtitle'>Biglietti cumulativi e riduzioni</h3>
                    <p>
                        Accasso al complesso monumentale + 2 spazi espositivi a scelta: € 15,00
                    </p>
                    <p>
                        All Forte (tutti i musei e tutte le mostre) € 24,00
                    </p>
                </div>
                <div className="margin">
                    <h3 className='color-subtitle'>Orari</h3>
                    <p>
                        Dal martedì al venerdì: 10:00/18:00 <br/>
                        sabato, domenica e festivi: 10:00/19:00 <br/>
                        lundedì chiuso (eccetto agosto)
                        25 dicembre chiuso
                    </p>
                    <p>
                        La biglietteria chiude un'ora prima del Forte
                    </p>
                    <p>
                        <a href='https://www.fortedibard.it/orari/' className='text-decoration-none color_link'>QUI GLI ORARI AGGIORNATI DEL FORTE</a>
                    </p>
                </div>
            </div>
        </main>
        <Footer/>
    </AuthenticatedLayout>
  )
}
