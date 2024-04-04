import React from 'react';
import { Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import {Card} from 'react-bootstrap';
import Gita_scolastica_scuola_primaria_arco_d_augusto from '../../../assets/Valle_d_Aosta/Gita_scolastica_scuola_primaria_arco_d_augusto_aosta_Valle_d_Aosta.jpg';
import Stele_antropomorfe_area_megalitica_aosta from '../../../assets/Valle_d_Aosta/Stele_antropomorfe_area_megalitica_aosta_Valle_d_Aosta.jpg';
import Criptoportico_Aosta from '../../../assets/Valle_d_Aosta/Criptoportico_Aosta_Valle_d_Aosta-1.jpg';
import Lapbook_strada_romana from '../../../assets/Valle_d_Aosta/Lapbook_strada_romana_Valle_d_Aosta.jpg';
import Gita_scuola_primaria_sulle_tracce_dei_romani from '../../../assets/Valle_d_Aosta/Gita_scuola_primaria_sulle_tracce_dei_romani_Valle_d_Aosta.jpg';
import Mappiamo_Augusta_Praetoria from '../../../assets/Valle_d_Aosta/Mappiamo_Augusta_Praetoria_Valle_d_Aosta.jpg';
import Gita_scolastica_aosta from '../../../assets/Valle_d_Aosta/Gita_scolastica_aosta_Valle_d_Aosta.jpg';



export default function Gite_scolastiche_scuola_primaria(props) {
  return (
    <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
    >
        <main>
            <div className='margin'>
                <img src={Gita_scolastica_scuola_primaria_arco_d_augusto} alt="" className='mx-auto my-4' style={{width: 'auto', height: 'auto'}} />
                <h1 className='color-title text-center mb-3'>Scuola Primarie - Informazione e gite scolastiche</h1>
                <hr className='w-25 border-3'/>
            </div>
            <div className='margin'>
                <p>
                    Siete una <b>scuola primaria</b> e non sapete come organizzare la vostra <b>gite scolastiche</b>?
                </p>
                <p>
                    Affidati a una <b>guida turistica</b> che guiderà i ragazzi alla scoperta dai vari beni culturali presenti sul territorio valdostano. Le proposte si svolgono nulla'arco di una sola giornata e consistono ad
                    esempio nell'approfondimento dell'epoca romana appore portano alla scoperta del territorio.
                </p>
                <p>
                    Le gite scolastiche possono essere concordate a seconda delle esigenze e degli interessi della classe.
                </p>
            </div>
            <div className="margin">
                <h3 className="color-subtitle">La città Aosta</h3>
                <p>
                    Per conoscere il periodo preistorico, l'itinerario didattico <Link to='/gite/un_salto_nella_preistoria' className='text-decoration-none color_link'>Un salto nella preistoria</Link> consente atraverso delle 
                    schede didattiche di affrontare in maniera ludica la visita all' <Link to='/visite/area_megalitica_di_aosta' className='text-decoration-none color_link'>Area megalitica di Aosta</Link>.
                </p>
                <p>
                    <Link htef='/visite/aosta_romana_e_medivale' className='text-decoration-none color_link'>Aosta romana</Link> è una meta perfetta per una gita scolastica per le classi quinte della scuola primaria! Aosta con 
                    le sue antiche vestigia è perfetta per conoscere l'impianto urbano delle città romane. Il laboratorio itinerante <Link to='/gite/laboratorio_didattico_aosta_la_roma_delle_alpi' className='text-decoration_none 
                    color_link'>Aosta la Roma delle Alpi</Link>, consente attraverso delle schede didattiche di approfondire e fissare i concetti emersi durante la visita all città.  
                </p>
                <p>
                    La Valle d'Aosta è perfetta per approfondire gli aspetti della romanità, infatti la vista alla città può essere completata con la visita alla <Link to='/gite/giornata_in_villa' className='text-decoration-none
                    color_link'>vialla romana di Aosta</Link> oppure al <Link to='/gite/la_valigia_di_caius_avillius_caimus' className='text-decoration-none color_link'>Ponte aquedotto di Pondel</Link>.
                </p>
            </div>
            <div className="margin">
                <h3 className="color-subtitle">Laboratorio didattici</h3>
                <p>
                    Per approfondire le tecniche di costruzione delle strade romane e i temi della viabilità antica è possibile visitare la Strada romana delle Gallie e svolgere il laboratorio "<Link to='/gite/laboratorio_legionari_strada_gallie'
                    className='text-decoration-none color_link'>Legionari lungo la Via delle Gallie</Link>" per immergersi negli eserciti che percorrevano le vie romane.
                </p>
            </div>
            <div className='v-guidate margin'>
                <h2 className='color-subtitle'>Laboratori didattici:</h2>
            </div>
            <div className='bordo-superiore mb-3'>
                <div className='blog'>
                    <div className='container d-flex justify-content-center flex-wrap'>
                        <Card className='me-2 mb-2 carta_gite mt-4'>
                            <Link to="/gite/un_salto_nella_preistoria" className='text-decoration-none'>
                                <Card.Img variant="top" 
                                    className={'img_card'} 
                                    src={Stele_antropomorfe_area_megalitica_aosta}
                                />
                                <Card.Body>
                                    <Card.Title className=' border-bottom text-black'>Un salto nella preistoria - Laboratorio didattico per bambini</Card.Title>
                                    <Card.Text className='mb-5 text-black'>
                                        <p className='fw-normal'>
                                            Il laboratorio didattico all'Area megalitica del Saint-Martin-de-Corléans di Aosta conduce i bambini alla scoperta del Nolitico e mediante delle shede didattiche appositamente scrate potranno vivere in 
                                            maniera più divertente la vista.
                                        </p>
                                    </Card.Text> 
                                </Card.Body>
                            </Link>
                        </Card>
                        <Card className='me-2 mb-2 carta_gite mt-4'>
                            <Link to="/gite/laboratorio_didattico_aosta_la_roma_delle_alpi" className='text-decoration-none'>
                                <Card.Img variant="top" 
                                    className={'img_card'} 
                                    src={Criptoportico_Aosta}
                                />
                                <Card.Body>
                                    <Card.Title className=' border-bottom text-black'>Aosta, la Roma delle Alpi - Attività didattica per bambini</Card.Title>
                                    <Card.Text className='mb-5 text-black'>
                                        <p className='fw-normal'>
                                            La visita guidata di Aosta romana mette in evidenzia le straordinarie vestigia della città e il suo assetto urbano rendendola perfetta per l'ultimo anno della scuola primaria, il laboratorio didattico 
                                            itinerante completa l'esperienza consentendo ai bambini di essere parte attiva della visita.
                                        </p>
                                    </Card.Text> 
                                </Card.Body>
                            </Link>
                        </Card>
                        <Card className='me-2 mb-2 carta_gite mt-4'>
                            <Link to="/gite/laboratorio_legionari_strada_gallie" className='text-decoration-none'>
                                <Card.Img variant="top" 
                                    className={'img_card'} 
                                    src={Lapbook_strada_romana}
                                />
                                <Card.Body>
                                    <Card.Title className=' border-bottom text-black'>Legionari luogo la Via delle Gallie - Laboratorio didattico per bambini</Card.Title>
                                    <Card.Text className='mb-5 text-black'>
                                        <p className='fw-normal'>
                                           Visita delle vestigia della Strada romana delle Gallie per apprendere i principali concetti legati alla viabilità romana, le tecniche usate per la costruzione di strade e di ponti. Segue laboratorio 
                                           didattico in cui i bambini dovranno realizzare con i materiali forniti un lapbook sul tema delle strade romane.
                                        </p>
                                    </Card.Text> 
                                </Card.Body>
                            </Link>
                        </Card>
                        <Card className='me-2 mb-2 carta_gite mt-4'>
                            <Link to="/gite/la_valigia_di_caius_avillius_caimus" className='text-decoration-none'>
                                <Card.Img variant="top" 
                                    className={'img_card'} 
                                    src={Gita_scuola_primaria_sulle_tracce_dei_romani}
                                />
                                <Card.Body>
                                    <Card.Title className=' border-bottom text-black'>La Valigia di Caius Avillius Caimus - Attività didattica per bambini</Card.Title>
                                    <Card.Text className='mb-5 text-black'>
                                        <p className='fw-normal'>
                                           Visita Aosta romana e del meravoglioso ponte acquadotto di Pondel, dove un cantastorie con la sua valigetta di legno raccoterà le incredibili avventure del suo antico proprietario: Caius Avillius Caimus.
                                        </p>
                                    </Card.Text> 
                                </Card.Body>
                            </Link>
                        </Card>
                        <Card className='me-2 mb-2 carta_gite mt-4'>
                            <Link to="/gite/mappiamo_augusta_praetoria_attivita_didattica" className='text-decoration-none'>
                                <Card.Img variant="top" 
                                    className={'img_card'} 
                                    src={Mappiamo_Augusta_Praetoria}
                                />
                                <Card.Body>
                                    <Card.Title className=' border-bottom text-black'>Mappiamo Augusta Praetoria - Attività didattica</Card.Title>
                                    <Card.Text className='mb-5 text-black'>
                                        <p className='fw-normal'>
                                           La vista guidata di Aosta romana è un viaggio nella romanità rendendola perfetta per l'ultimo anno della scuola primaria. L'attività didattica completa l'esperienza consentendo ai bambini di essere parte 
                                           attiva della visita seguendo una mappa della città appositamente preparata.
                                        </p>
                                    </Card.Text> 
                                </Card.Body>
                            </Link>
                        </Card>
                        <Card className='me-2 mb-2 carta_gite mt-4'>
                            <Link to="/gite/giornata_in_villa" className='text-decoration-none'>
                                <Card.Img variant="top" 
                                    className={'img_card'} 
                                    src={Gita_scolastica_aosta}
                                />
                                <Card.Body>
                                    <Card.Title className=' border-bottom text-black'>Giornata in Villa - Attività didattica per bambini</Card.Title>
                                    <Card.Text className='mb-5 text-black'>
                                        <p className='fw-normal'>
                                           La visita guidata con attività dicattiche alla sontuosa villa romana della Consolata abbinata alla visita di Aosta romana consente ai bambini di approfondire temi legati alla fondazione delle cttà e alla 
                                           vita quotidiana in età augustea.
                                        </p>
                                    </Card.Text> 
                                </Card.Body>
                            </Link>
                        </Card>
                    </div>
                </div>
            </div>
        </main>
        <Footer/>
    </AuthenticatedLayout>
  )
}
