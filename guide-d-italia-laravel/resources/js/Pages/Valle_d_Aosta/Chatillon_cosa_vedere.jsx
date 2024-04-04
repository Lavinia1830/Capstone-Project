import React from 'react';
import CercaComponent from '@/Components/CercaComponent';
import Footer from '@/Components/Footer';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import { Card } from 'react-bootstrap';
import Chatillon_cosa_vedere_img from '../../../assets/Valle_d_Aosta/Chatillon_cosa_vedere_Valle_d_Aosta.jpg';
import Chiesa_parrocchiale_Chatillon from '../../../assets/Valle_d_Aosta/Chiesa_parrocchiale_Chatillon_Valle_d_Aosta.jpg';
import Interni_chiesa_di_Chatillo from '../../../assets/Valle_d_Aosta/Interni_chiesa_di_Chatillo_Valle_d_Aosta.jpg';

export default function Chatillon_cosa_vedere(props) {
  return (
    <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
    >
        <main className='row'>
            <div className='col-lg-8'>
                <div className='margin'>
                    <img src={Chatillon_cosa_vedere_img} alt="Chatillon" className='mx-auto my-4' style={{width: 'auto', height: 'auto'}}/>
                    <h1 className='color-title text-center mb-3'>Châtillon cosa vedere nel paese dei castelli</h1>
                    <hr className='w-25 border-3'/>
                </div>
                <div className="margin">
                    <p>
                       Nota durante il periodo fascista col nome <b>Castiglione Dora</b>, Chatillon si trova nel cuore della Valle d'Aosta, all'interno della Valtournenche. <br/>
                       Il nome stesso nome <b>Châtillon</b> consente di presumere che il luogo di un importante presidio militare lungo la <Link href='/visite/strada_romana_gallie' 
                       className='text-decoration-none color_link'>strada che conduceva alle Gallie</Link>. Ne sono testimonianza i resti ancora visibili dell'antico ponte romano pultroppo gravemente danneggiato a seguito del passaggio delle truppe 
                       francesi nel 1691. <br/>
                       Si sa inoltre che in epoca medievale il territorio era sotto il controllo della potente famiglia Cahllant che possedeva qui ben due castelli che possono essere ammirati ancora oggi. <br/>
                       Tutto questo lo troverete in questo articolo su <b>Châtillon cosa vedere</b> tra castelli e sagre:
                    </p>
                    <ul className='lista'>
                        <span>Contenuti</span>
                        <li>
                            <Link href='#First_Point_Header' className='text-decoration-none color_link'>1 Centro storico di Châtillon</Link>
                        </li>
                        <li>
                            <Link href='#Second_Point_Header' className='text-decoration-none color_link'>2 Chiesa parrochiale di San Pietro</Link>
                        </li>
                        <li>
                            <Link href='#Third_Point_Header' className='text-decoration-none color_link'>3 Castello Passerin dì'Entréves</Link>
                        </li>
                        <li>
                            <Link href='#Fourth_Point_Header' className='text-decoration-none color_link'>4 Castello di Ussel</Link>
                        </li>
                        <li>
                            <Link href='#Fifth_Point_Header' className='text-decoration-none color_link'>5 Castello Gamba</Link>
                        </li>
                        <li>
                            <Link href='#Sixth_Point_Header' className='text-decoration-none color_link'>6 Eventi e Sagre</Link>
                        </li>
                        <li>
                            <Link href='#Seventh_Point_Header' className='text-decoration-none color_link'>7 Cosa vedere nei dintorni</Link>
                        </li>
                    </ul>
                </div>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="col-md-8 d-flex align-items-center">
                            <Card.Body>
                                <Card.Title><h2 className="card-title color-subtitle" id='First_Point_Header'>Centro storico Châtillon</h2></Card.Title>
                                <Card.Text>
                                    L'impianto urbanistico del centro storico di Châtillon ricalca quello del borgo medievale il quale epoche lontane aveva un ruolo economico importantissimo, ma di cui rimangono poche testimonianze architettoniche 
                                    fatte di finestre gotiche, faritoie o contrafforti.
                                    Rimangono però tracce di epoche più recenti come il <b>settecentesco ex Palazzo Gervasone</b>, il cui nome deriva da quello di una famiglia di origine bergamasca che fece fortuna con lo sfruttamento delle 
                                    miniere, delle fonderie e delle fabbriche di ferro della zona. <br/>
                                    Lungo la via principale del paese si trovano inoltre le residenze do notabili e nobili come gli Scalaz e i Bich, originari della Valtournenche. Celebre fu Pantaleon Bich il quale fu il primo a sfruttare le miniere 
                                    di ferro di Ussel diventando un personaggio ricco e benestante. Tra i suoi discendenti si annovera <b>Marcel Bich</b>, titolare in Francia del famoso marchio BIC.
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="col-md-8 d-flex align-items-center">
                            <Card.Body>
                                <Card.Title><h2 className="card-title color-subtitle" id='Second_Point_Header'>Chiesa parrochiale di San Pietro</h2></Card.Title>
                                <Card.Text>
                                    A monte del borgo si trova l'imponente chiesa parrochiale di San Pietro. Il primo documento attestante l'esistenza della <strong>Parrochia di Châtillon</strong> risale al XII° secolo chiesa parrocchiale si desumono 
                                    da una visita pastorale del 1576 quando la chiesa era orientata verso est e aveva una sola navata e oltre all'altare maggiore luogo le pareti laterali erano addossati 5 altari minori. <br/>
                                    Nel 1633 il Barone Paul Emanuele de Challant dona un edificio situato al centro del borgo di Châtillon per ospitare "les Frère de St-François" provenienti dalla Savoia. In sseguito la chiesa parrocchiale viene 
                                    ampliata a 3 navate. <br/>
                                    Nel 1841 la chiesa è oggetto di un nuovo intervento di ampliamento tuttavia la capienza della chiesa era sempre insufficiente rispetto al progressivo crescere della popolazione pertanto si procederà nel 1901 con la 
                                    costruzione di una chiesa nuova. Il progettista è l'insegnate <b>Carlo Saroldi</b> di Torino, lo stesso che aveva progettato il Castello di Barone Gamba.<br/>
                                    Dopo soli tre anni di intenso lavoro il 27 agosto 1905 viene consacrata la nuova chiesa del vescovo Mons. Duc; l'edificio si presenta orientato a nord e le pitture della volta nella navata centrale rappresentano Maria 
                                    Assunta in cielo e San Pietro: sono opera dei fratelli Alessandro e Augusto Artati di Verrès.
                                </Card.Text>
                            </Card.Body>
                        </div>
                        <div className="d-flex flex-row justify-content-center">
                            <div className='mx-2'>
                                <Card.Img src={Chiesa_parrocchiale_Chatillon} className="mb-2"  alt="Chiesa parrochiale di Châtillon" title='Chiesa parrochiale di Châtillon'/>
                                <p className='text-center'>
                                    Chiesa parrochiale di Châtillon
                                </p>
                            </div>
                            <div className='mx-2'>
                                <Card.Img src={Interni_chiesa_di_Chatillo} className="mb-2"  alt="Interni della chiesa di Châtillon" title='Interni della chiesa di Châtillon'/>
                                <p className='text-center'>
                                    Interni della chiesa di Châtillon
                                </p>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
            <CercaComponent/>
        </main>
        <Footer/>
    </AuthenticatedLayout>
  )
}
