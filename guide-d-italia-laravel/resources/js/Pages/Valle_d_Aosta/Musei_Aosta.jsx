import React from 'react';
import Footer from '@/Components/Footer';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import { Card } from 'react-bootstrap';
import Castello_Baron_Gamba from '../../../assets/Valle_d_Aosta/Castello_Baron_Gamba_Valle_d_Aosta.jpg';
import Museo_archeologico_aosta from '../../../assets/Valle_d_Aosta/Museo_archeologico_aosta_Valle_d_Aosta.jpg';
import Museo_Regionale_Scienze_Naturali from '../../../assets/Valle_d_Aosta/Museo_Regionale_Scienze_Naturali_Valle_d_Aosta.jpg';
import Museo_dell_artigianato_valdostano from '../../../assets/Valle_d_Aosta/Museo_dell_artigianato_valdostano_Valle_d_Aosta.jpg';
import Museo_del_tesoro from '../../../assets/Valle_d_Aosta/Museo_del_tesoro_Valle_d_Aosta.jpg';
import Mostre_al_forte_di_bard from '../../../assets/Valle_d_Aosta/Mostre_al_forte_di_bard_Valle_d_Aosta.jpg';
import Museo_alpino_duca_degli_abruzzi from '../../../assets/Valle_d_Aosta/Museo_alpino_duca_degli_abruzzi_Valle_d_Aosta.jpg';
import Museo_Petit_Monde from '../../../assets/Valle_d_Aosta/Museo_Petit_Monde_Valle_d_Aosta.jpg';



export default function Musei_Aosta(props) {
  return (
    <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
    >
        <main>
            <div className='musei_aosta'>
                <h1 className='text-center'>Musei della Valle d'Aosta</h1>
            </div>
            <div className='margin mt-3'>
                <p>
                    I <strong>musei della Valle d'Aosta</strong> attendono di essere scoperti. Vieni a scoprire la Valle d'Aosta, un territorio ricco di musei e opere d'arte.
                </p>
                <p>
                    Una <b>guida turistica</b> ti accompagnerà alla scoperta delle varie <b>mostre</b> e <b>musei</b> della Valle d'Aosta. Potai scoprire i principali musei insieme alle loro testimonianze materiali e immateriali. Inoltre 
                    potrai appofondire la storia della sua gente spaziando dell'<b>archeologia</b>, all'<b>arte sacra</b> fino alle <b>tradizioni popolari</b>. L'arte si esprime nelle numerose <b>mostre temporanee</b>, situate 
                    principalmente ad Aosta e nei poli culturali come <Link href='/visite/forte_di_bard' className='text-decoration-none color_link'>il Forte di Bard</Link> ed il <Link href='/visite/castello_gamba' 
                    className='text-decoration-none color_link'>Castello Gamba</Link>.
                </p>
            </div>
            <div className='v-guidate margin'>
                <h2 className='color-subtitle'>Visite guidate:</h2>
            </div>
            <div className='bordo-superiore mb-3'>
                <div className='blog'>
                    <div className='container d-flex justify-content-center flex-wrap'>
                        <Card className='me-2 mb-2 carta_musei mt-4'>
                            <Link to="/visite/castello_baron_gamba" className='text-decoration-none'>
                                <Card.Img variant="top" 
                                    className={'img_card'} 
                                    src={Castello_Baron_Gamba}
                                />
                                <Card.Body>
                                    <Card.Title className='border-bottom text-black'>Pinacoteca Regionale al Castello Baron Gamba</Card.Title>
                                    <Card.Text className='mb-5 text-black'>
                                        <p className='fw-normal'>
                                            Il castello di Baron Gamba di Chatillon accoglie l'esposizione permanente della collazione regionale di arte moderna e contemporanea che include opere di Casorati, Mastroaianni, Pomodoro, 
                                            Martini, Dorfles e Schifano.
                                        </p>
                                    </Card.Text> 
                                </Card.Body>
                            </Link>
                        </Card>
                        <Card className='me-2 mb-2 carta_musei mt-4'>
                            <Link to="/visite/museo_archeologico_aosta" className='text-decoration-none'>
                                <Card.Img variant="top" 
                                    className={'img_card'} 
                                    src={Museo_archeologico_aosta}
                                />
                                <Card.Body>
                                    <Card.Title className='border-bottom text-black'>Museo Archeologico Aosta (MAR)</Card.Title>
                                    <Card.Text className='mb-5 text-black'>
                                        <p className='fw-normal'>
                                            Situato sulla Porta Principalis Sinistra della città romana di Aosta, il MAR espone i reperi rinvenuti in Valle d' Aosta dell'epoca preistorica fino all'epoca paleocristiana.
                                        </p>
                                    </Card.Text> 
                                </Card.Body>
                            </Link>
                        </Card>
                        <Card className='me-2 mb-2 carta_musei mt-4'>
                            <Link to="/visite/museo_regionale_di_scienze_naturali" className='text-decoration-none'>
                                <Card.Img variant="top" 
                                    className={'img_card'} 
                                    src={Museo_Regionale_Scienze_Naturali}
                                />
                                <Card.Body>
                                    <Card.Title className='border-bottom text-black'>Museo Regionale di Seienze Naturali</Card.Title>
                                    <Card.Text className='mb-5 text-black'>
                                        <p className='fw-normal'>
                                            Il Museo regionale di Scienze Neturali Efisio Noussan allestito nelle sale del fiabesco coastello di Sant-Pierre è un viaggio negli ecosistemi e nel patrimonio naturale della Valle d'Aosta.
                                        </p>
                                    </Card.Text> 
                                </Card.Body>
                            </Link>
                        </Card>
                        <Card className='me-2 mb-2 carta_musei mt-4'>
                            <Link to="/visite/museo_artigianato_valdostano" className='text-decoration-none'>
                                <Card.Img variant="top" 
                                    className={'img_card'} 
                                    src={Museo_dell_artigianato_valdostano}
                                />
                                <Card.Body>
                                    <Card.Title className='border-bottom text-black'>Museo dell'Artigianato Valdostano</Card.Title>
                                    <Card.Text className='mb-5 text-black'>
                                        <p className='fw-normal'>
                                            Situato poco lontano dal castello di Fenis, il MAV ospita sculture e manufatti che raccontano la bellezza dell'artigianato valdostano in un percorso a cavallo tra passato e presente.
                                        </p>
                                    </Card.Text> 
                                </Card.Body>
                            </Link>
                        </Card>
                        <Card className='me-2 mb-2 carta_musei mt-4'>
                            <Link href="/visite/museo_del_tesoro" className='text-decoration-none'>
                                <Card.Img variant="top" 
                                    className={'img_card'} 
                                    src={Museo_del_tesoro}
                                />
                                <Card.Body>
                                    <Card.Title className='border-bottom text-black'>Museo del Tesoro ad Aosta</Card.Title>
                                    <Card.Text className='mb-5 text-black'>
                                        <p className='fw-normal'>
                                            Situato all'interno della Cattedrale di Aosta il Museo presenta una panoramica significativa dell'arte sacra valdostana fatta di oreficerie, casse reliquarie, monumenti funerari e sculture.
                                        </p>
                                    </Card.Text> 
                                </Card.Body>
                            </Link>
                        </Card>
                        <Card className='me-2 mb-2 carta_musei mt-4'>
                            <Link to="/visite/mostre_al_forte_di_bard" className='text-decoration-none'>
                                <Card.Img variant="top" 
                                    className={'img_card'} 
                                    src={Mostre_al_forte_di_bard}
                                />
                                <Card.Body>
                                    <Card.Title className='border-bottom text-black'>Mostre al Forte di Bard</Card.Title>
                                    <Card.Text className='mb-5 text-black'>
                                        <p className='fw-normal'>
                                            Situate all'interno dell'opera Carlo Albero le mostre temporanee costituiscono un'importante attrazione culturale del Forte di Bard.
                                        </p>
                                    </Card.Text> 
                                </Card.Body>
                            </Link>
                        </Card>
                        <Card className='me-2 mb-2 carta_musei mt-4'>
                            <Link to="/visite/museo_alpino_duca_dehli_abruzzi" className='text-decoration-none'>
                                <Card.Img variant="top" 
                                    className={'img_card'} 
                                    src={Museo_alpino_duca_degli_abruzzi}
                                />
                                <Card.Body>
                                    <Card.Title className='border-bottom text-black'>Museo Alpino Duca degli Abruzzi</Card.Title>
                                    <Card.Text className='mb-5 text-black'>
                                        <p className='fw-normal'>
                                            Nella storica sede della guide alpine di Courmayeur, il Museo Duca degli Abruzzi non vuole essere solo un semplice contenitore di oggetti legati all'alpinismo, ma si propone di valorizzare la storia
                                            del mestiere di guida alpina.
                                        </p>
                                    </Card.Text> 
                                </Card.Body>
                            </Link>
                        </Card>
                        <Card className='me-2 mb-2 carta_musei mt-4'>
                            <Link to="/visite/museo_petiti_monde" className='text-decoration-none'>
                                <Card.Img variant="top" 
                                    className={'img_card'} 
                                    src={Museo_Petit_Monde}
                                />
                                <Card.Body>
                                    <Card.Title className='border-bottom text-black'>Museo Petit Monde</Card.Title>
                                    <Card.Text className='mb-5 text-black'>
                                        <p className='fw-normal'>
                                            Il viallaggio di Petit Monde a Torgnon costituisce il più completo complesso ecomuseale della Valle d'Aosta realizzato per proteggere e calorizzare la memoria delle radici della comunità, un luogo 
                                            incantato dove il tempo sembra essersi devvere fermato.
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
