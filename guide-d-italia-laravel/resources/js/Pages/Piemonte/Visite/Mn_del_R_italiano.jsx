import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Button, Card, CardBody, CardImg, CardText, CardTitle } from 'react-bootstrap';
import Allestimento_1878_mn_del_r_italiano from '../../../../assets/Piemonte/Allestimento_1878_mn_del_r_italiano_Torino_Piemonte.jpg';
import Allestimenti_1884_mn_del_r_italiano from '../../../../assets/Piemonte/Allestimenti_1884_mn_del_r_italiano_Torino_Piemonte.jpg';
import Allestimenti_1899_mn_del_r_italiano from '../../../../assets/Piemonte/Allestimenti_1899_mn_del_r_italiano_Torino_Piemonte.jpg';
import Allestimenti_1908_mn_del_r_italiano from '../../../../assets/Piemonte/Allestimenti_1908_mn_del_r_italiano_Torino_Piemonte.jpg';
import Allestimenti_1938_mn_del_r_italiano from '../../../../assets/Piemonte/Allestimenti_1938_mn_del_r_italiano_Torino_Piemonte.jpg';
import Allestimenti_1948_mn_del_r_italiano from '../../../../assets/Piemonte/Allestimenti_1948_mn_del_r_italiano_Torino_Piemonte.jpg';
import Allestimenti_1961_mn_del_r_italiano from '../../../../assets/Piemonte/Allestimenti_1961_mn_del_r_italiano_Torino_Piemonte.jpg';
import Allestimenti_1965_mn_del_r_italiano from '../../../../assets/Piemonte/Allestimenti_1965_mn_del_r_italiano_Torino_Piemonte.jpg';
import Allestimenti_2011_mn_del_r_italiano from '../../../../assets/Piemonte/Allestimenti_2011_mn_del_r_italiano_Torino_Piemonte.jpg';
import Ingresso_mn_del_r_italiano from '../../../../assets/Piemonte/Ingresso_mn_del_r_italiano_Torino_Piemonte.jpg';
import Sala_1_mn_del_r_italiano from '../../../../assets/Piemonte/Sala_1_mn_del_r_italiano_Torini_Piemonte.jpg';












export default function Mn_del_R_italiano(props) {

    // Definiamo uno stato per l'immagine e la descrizione
    const [imageIngresso, setImageIngresso] = useState('');
    const [descriptionIngresso, setDescriptionIngresso] = useState('');
    const [imageSala1, setImageSala1] = useState('');
    const [descriptionSala1, setDescriptionSala1] = useState('');

    // Funzione per gestire il click del pulsante
    const Ingresso = () => {
        // Quando il pulsante viene premuto, impostiamo l'immagine e la descrizione
            setImageIngresso(Ingresso_mn_del_r_italiano);
            setDescriptionIngresso("È il più antico e noto museo di storia patria, l'unico a essere nazionale per importanza, ricchezza e rappresentatività delle collezioni." );
        
    };

    const Sala1 = () => {
        // Quando il pulsante viene premuto, impostiamo l'immagine e la descrizione
        
            setImageSala1(Sala_1_mn_del_r_italiano);
            setDescriptionSala1("Nei due secoli scorsi si presentava il Risorgimento come una STORIA PROVENIENTE DA LONTANO. Erme di GRANDI ITALIANI del passato, statua della DEA MADRE, GONFALONI di molte città, nell'atrio i CIMELI DI VITTORIO EMANUELE II primo re d'Italia." );
        
    };

  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='mn_del_r_italiano' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Museo Nazionale del Risorgimento Italiano</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
            </div>
            <div className="margin mt-3">
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="col-lg-4">
                            <CardImg src={Allestimento_1878_mn_del_r_italiano} alt='Allestimento 1878' style={{height: '100%'}}/>
                        </div>
                        <div className="col-lg-8 d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h2 className="color-subtitle">Gli Allestimenti Precedenti</h2></CardTitle>
                                <hr className='border-3'/>
                                <CardText>
                                    <p className='mt-5'>
                                        Il Museo Nazionale del Risorgimento Italiano di Torino è il più antico e il più noto tra i musei italiani di storia patria. Venne istituito nel 1878, come “Ricordo nazionale 
                                        di Vittorio Emanuele II” pochi mesi dopo la sua morte.<br/>
                                        Prima della sua inaugurazione definitiva, avvenuta trent’anni dopo all’interno della Mole Antonelliana, il Museo conobbe due allestimenti provvisori: uno nel 1884 e uno nel 1899.
                                    </p>
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="col-lg-4">
                            <CardImg src={Allestimenti_1884_mn_del_r_italiano} alt='Allestimento 1884' style={{height: '100%'}}/>
                        </div>
                        <div className="col-lg-8 d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h2 className="color-subtitle">Gli Allestimenti Precedenti</h2></CardTitle>
                                <hr className='border-3'/>
                                <CardText>
                                    <p className='mt-5'>
                                        Nel 1884, in occasione della grande esposizione nazionale al Valentino, prese forma il primo esperimento di un museo del risorgimento.<br/>
                                        Era un vasto allestimento che assegnava un ruolo fortemente centrale agli episodi del 1848–49 e in cui lo spazio dedicato al Piemonte non superava per importanza il resto d’Italia.<br/>
                                        Il risorgimento rappresentato iniziava con i moti del 1820–21 e terminava con la presa di Porta Pia, proponendo una lettura che, superati gli antagonismi e realizzato lo stato 
                                        unitario, evidenziava l’azione convergente in un unico obiettivo nazionale dei diversi schieramenti politici.<br/>
                                        In sintesi il risorgimento era visto in chiave nazional–popolare più che dinastico–sabaudo. Emergeva poi un’altra importante idea di fondo, che considerava i processi di nazionalità 
                                        un evento rivoluzionario su scala europea che affondava le radici già nel periodo napoleonico, concetto che ancora oggi fa di quella mostra l’allestimento più moderno sul piano 
                                        interpretativo che fino ad oggi si è avuto del Museo.
                                    </p>
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="col-lg-4">
                            <CardImg src={Allestimenti_1899_mn_del_r_italiano} alt='Allestimento 1899' style={{height: '100%'}}/>
                        </div>
                        <div className="col-lg-8 d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h2 className="color-subtitle">Gli Allestimenti Precedenti</h2></CardTitle>
                                <hr className='border-3'/>
                                <CardText>
                                    <p className='mt-5'>
                                        Il 9 settembre del 1899 si celebrò una prima parziale apertura del Museo del Risorgimento, anche se in una sede ancora provvisoria: non ancora nella Mole, dove era destinato, ma nei locali 
                                        della Sezione di arte moderna del Museo civico.<br/>
                                        Anche se il ruolo del Piemonte cominciava a reclamare più spazio non era ancora il museo della dinastia, e si sforzava di conservare una visione nazionale ed ecumenica del processo unitario.
                                    </p>
                                    <p>
                                        Al Museo si affiancava una grande biblioteca, che ambiva a contenere una sintesi o la copia dei documenti risorgimentali presenti in tutt’Italia e una raccolta completa delle pubblicazioni 
                                        straniere e nazionali: un obiettivo ambizioso, mai completamente realizzato.
                                    </p>
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="col-lg-4">
                            <CardImg src={Allestimenti_1908_mn_del_r_italiano} alt='Allestimento 1908' style={{height: '100%'}}/>
                        </div>
                        <div className="col-lg-8 d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h2 className="color-subtitle">Gli Allestimenti Precedenti</h2></CardTitle>
                                <hr className='border-3'/>
                                <CardText>
                                    <p className='mt-5'>
                                        Il Museo del Risorgimento ebbe la sua inaugurazione definitiva il 18 ottobre 1908 all’interno della Mole Antonelliana, luogo simbolo di Torino e della modernità: passato e futuro insieme 
                                        per fare dell’ex–capitale d’Italia una città nuova e moderna.<br/>
                                        Il nuovo Museo ribadiva, nel suo intento educativo e celebrativo delle glorie patrie, il suo essere nazionale.<br/>
                                        Presentava 1.274 pezzi esposti nel salone centrale e in tre grandi corsie. Era l’unico museo del risorgimento italiano a poter essere definito scientifico, premiato da un grande successo 
                                        di pubblico, anche se oggi ci apparirebbe poco efficace dal punto di vista espositivo e della comunicazione.
                                    </p>
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="col-lg-4">
                            <CardImg src={Allestimenti_1938_mn_del_r_italiano} alt='Allestimento 1938' style={{height: '100%'}}/>
                        </div>
                        <div className="col-lg-8 d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h2 className="color-subtitle">Gli Allestimenti Precedenti</h2></CardTitle>
                                <hr className='border-3'/>
                                <CardText>
                                    <p className='mt-5'>
                                        L’8 settembre del 1938 il re Vittorio Emanuele III inaugurò il Museo Nazionale del Risorgimento Italiano finalmente trasferito nella sede attuale di palazzo Carignano.<br/>
                                        Era un allestimento in cui la storia d’Italia diventava del tutto autoctona, abbandonava i nessi con l’Europa e compiva un percorso che legava strettamente la Roma antica al Risorgimento 
                                        e al fascismo: il museo doveva rappresentare l’antichità della dinastia e la crescente potenza dello Stato sabaudo, così le origini del risorgimento furono anticipate al 1706, più precisamente 
                                        alla battaglia di Torino che diede un regno ai Savoia.<br/>
                                        Con l’inizio della seconda guerra mondiale, i lavori di allestimento furono interrotti e i bombardamenti subiti arrecarono al Museo danni ingenti.<br/>
                                        Negli anni della Resistenza le sue sale ospitarono clandestinamente riunioni di partigiani, armi e materiale di propaganda antifascista.
                                    </p>
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="col-lg-4">
                            <CardImg src={Allestimenti_1948_mn_del_r_italiano} alt='Allestimento 1948' style={{height: '100%'}}/>
                        </div>
                        <div className="col-lg-8 d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h2 className="color-subtitle">Gli Allestimenti Precedenti</h2></CardTitle>
                                <hr className='border-3'/>
                                <CardText>
                                    <p className='mt-5'>
                                        Dopo la guerra, il Museo fu riaperto in piccola parte in occasione del centenario della prima guerra di indipendenza. Il risorgimento, come nel 1884, tornava ad avere origine nei moti 
                                        del ’20–’21 e si chiudeva con la presa di Roma.<br/>
                                        Dopo le sale risorgimentali, trovarono posto altre sei sale dedicate al contributo italiano alla guerra di liberazione, a cura del Corpo volontari della libertà e dell’Istituto storico 
                                        della Resistenza in Piemonte.
                                    </p>
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="col-lg-4">
                            <CardImg src={Allestimenti_1961_mn_del_r_italiano} alt='Allestimento 1961' style={{height: '100%'}}/>
                        </div>
                        <div className="col-lg-8 d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h2 className="color-subtitle">Gli Allestimenti Precedenti</h2></CardTitle>
                                <hr className='border-3'/>
                                <CardText>
                                    <p className='mt-5'>
                                        Nel 1961, In occasione delle celebrazioni del Centenario dell’Unità d’Italia, a Palazzo Carignano si realizzò una grande mostra storica: oltre 1.800 pezzi esposti in 32 sale.<br/>
                                        L’obiettivo era quello di coinvolgere anche i visitatori meno preparati, grazie ad una rinnovata sensibilità per la comunicazione, per gli aspetti scenografici e per il materiale esposto 
                                        che finalmente proveniva da tutta l’Italia.<br/>
                                        Dal punto di vista dell’interpretazione storiografica, si tornò a datare le origini del risorgimento più che alle riforme dell’alto settecento, alla rivoluzione francese e alla dominazione 
                                        napoleonica che avevano sollecitato ideali patriottici.
                                    </p>
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="col-lg-4">
                            <CardImg src={Allestimenti_1965_mn_del_r_italiano} alt='Allestimento 1965' style={{height: '100%'}}/>
                        </div>
                        <div className="col-lg-8 d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h2 className="color-subtitle">Gli Allestimenti Precedenti</h2></CardTitle>
                                <hr className='border-3'/>
                                <CardText>
                                    <p className='mt-5'>
                                        Il museo del 1965 sia per scelta storiografica degli allestitori, sia perchè molto materiale esposto nel 1961 era stato restituito ai ben 350 prestatori, ridusse fortemente il carattere 
                                        nazionale che aveva avuto l’esposizione del centenario.<br/>
                                        Si tornò così a proporre una visione del risorgimento fedele all’idea della dinastia sabauda come principale motore dell’unificazione.
                                    </p>
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="col-lg-4">
                            <CardImg src={Allestimenti_2011_mn_del_r_italiano} alt='Allestimento 2011' style={{height: '100%'}}/>
                        </div>
                        <div className="col-lg-8 d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h2 className="color-subtitle">Gli Allestimenti Precedenti</h2></CardTitle>
                                <hr className='border-3'/>
                                <CardText>
                                    <p className='mt-5'>
                                        Dopo una progettazione scientifica ed espositiva iniziata nel 1999, nel 2006 si sono avviati i lavori di riallestimento del nuovo percorso museale, che distribuisce in 30 sale, compreso lo scalone d'onore e il salone del primo Parlamento italiano, il racconto di come gli italiani divennero nazione, fra altri popoli alla ricerca della propria identità.
                                        Il risultato è un allestimento rigoroso e insieme spettacolare che narra la storia del Paese a fronte delle grandi trasformazioni economiche, politiche e culturali avvenute nell’intero continente. Un percorso che accompagna il visitatore in un lungo viaggio che parte dalla rivoluzione francese e si conclude alle soglie della grande guerra, l’evento che aprì alle società di massa del XX secolo.
                                    </p>
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
            </div>
            <div className='margin mb-4'>
                <Button className='mb-3 me-3' id='btn-card' onClick={Ingresso}>Ingresso</Button>
                <Button className='mb-3' id='btn-card' onClick={Sala1}>Sala1</Button>
                { imageIngresso && (
                    <div className='d-flex justify-content-center'>
                        <img src={imageIngresso} alt='Ingresso del Museo Nazionale del Rinascimento italiano' className='w-25'/>
                        <p className='align-content-center ms-4'>{descriptionIngresso}</p>
                    </div>
                )}
                { imageSala1 && (
                    <div className='d-flex justify-content-center'>
                        <img src={imageSala1} alt='Ingresso del Museo Nazionale del Rinascimento italiano' className='w-25'/>
                        <p className='align-content-center ms-4'>{descriptionSala1}</p>
                    </div>
                )}
            </div>
            <div className='margin mb-4'>
                <h3 className='color-subtitle text-center'>Mappa</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1620.1074281728327!2d7.684499989965835!3d45.06905551763594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886d702759ca91%3A0xbf0fb182b3a64daa!2sMuseo%20Nazionale%20del%20Risorgimento%20Italiano!5e1!3m2!1sit!2sit!4v1712589008903!5m2!1sit!2sit"
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
