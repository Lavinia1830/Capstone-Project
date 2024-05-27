import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link, Head } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';

export default function Val_di_Susa(props) {

    const [isHoveredCastellodellaContessaAdelaide, setIsHoveredCastellodellaContessaAdelaide] = useState(false);
    const [isHoveredFortediFenestrelle, setIsHoveredFortediFenestrelle] = useState(false);
    const [isHoveredAbbaziadiNovalesa, setIsHoveredAbbaziadiNovalesa] = useState(false);
    const [isHoveredSacradiSanMichele, setIsHoveredSacradiSanMichele] = useState(false);

    return (
        <>
            <Head title="Val di Susa"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='val_di_susa' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Val di Susa</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Montagna</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            La <strong>Val di Susa</strong> è una valle alpina situata nel <Link href='/piemonte' className='text-decoration-none color_link'>Piemonte</Link>, 
                            nel nord-ovest dell'Italia. È attraversata dal <Link href='/fiume/piemonte/fiume_dora_riparia' className='text-decoration-none color_link'>fiume 
                            Dora Riparia</Link> e si estende da <Link href='/destinazioni/piemonte/torino' className='text-decoration-none color_link'>Torino</Link> fino al 
                            confine con la <b>Francia</b>. La valle ha una storia molto <b>antica</b>, essendo abitata fin dalla <b>preistoria</b>.
                        </p>
                        <p>
                            Durante l'<b>epoca romana</b>, la Val di Susa era un importante punto di passaggio lungo la <Link href='/visite/valle_d_aosta/aosta/via_francigena'
                            className='text-decoration-none color_link'>via delle Gallie</Link>, una strada che collegava l'Italia con la Gallia. Il <b>municipium</b> di <b>Segusium</b>, 
                            oggi Susa, era un centro rilevante. Dell'epoca romana rimangono importanti <b>testimonianze</b> come l'<Link href='/visite/valle_d_aosta/aosta/arco_di_augusto'
                            className='text-decoration-none color_link'>Arco di Augusto</Link> e l'<b>anfiteatro</b>.
                        </p>
                        <p>
                            Nel <b>Medioevo</b>, la valle acquisì una notevole importanza strategica e militare. Numerosi <b>castelli</b> e <b>fortificazioni</b> furono costruiti 
                            per difendere il territorio, come il <Link href='/visite/piemonte/susa/castello_della_contessa_adelaide' className='text-decoration-none color_link'>Castello 
                            della Contessa Adelaide</Link> a Susa e il <Link href='/visite/piemonte/susa/forte_di_fenestrelle' className='text-decoration-none color_link'>Forte di Fenestrelle</Link>. 
                            I <b>monaci</b> benedettini fondarono la celebre <Link href='/visite/piemonte/val_di_susa/abbazia_di_novalesa' className='text-decoration-none color_link'>Abbazia 
                            di Novalesa</Link> nel 726 e la <Link href='/visite/piemonte/val_di_susa/sacra_di_san_michele' className='text-decoration-none color_link'>Sacra di San Michele</Link>, 
                            un imponente monastero situato sulla cima di un monte, che divenne uno dei simboli della valle.
                        </p>
                        <p>
                            Nel <b>XIX secolo</b>, con l'<b>Unità d'Italia</b>, la Val di Susa divenne un'importante via di comunicazione tra l'Italia e la Francia. La costruzione 
                            del <b>traforo ferroviario del Frejus</b> nel 1871, uno dei primi e più lunghi tunnel ferroviari al mondo, fu un'opera fondamentale per lo sviluppo della 
                            regione.
                        </p>
                        <p>
                            Negli ultimi decenni, la Val di Susa è stata al centro di dibattiti e proteste riguardanti la costruzione della <b>linea ad alta velocità Torino-Lione</b> (TAV). 
                            I sostenitori del progetto sostengono che migliorerebbe i collegamenti tra Italia e Francia, mentre gli oppositori temono l'impatto <b>ambientale</b> e <b>sociale</b> sulla valle.
                        </p>
                        <p>
                            La Val di Susa è oggi conosciuta non solo per la sua storia e le sue bellezze naturali, ma anche per il forte <b>spirito</b> di <b>comunità</b> e la <b>resistenza</b> alle 
                            trasformazioni imposte dall'esterno.
                        </p>
                    </div>
                    <div className='row d-flex justify-content-center mx-0 mb-4'>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Val_di_Susa'>
                            <CardBody className='bottone'>
                                <Link 
                                className="bottone_link" 
                                href='/visite/piemonte/susa/castello_della_contessa_adelaide'
                                onMouseEnter={() => setIsHoveredCastellodellaContessaAdelaide(true)}
                                onMouseLeave={() => setIsHoveredCastellodellaContessaAdelaide(false)}
                                >Castello della Contessa Adelaide {isHoveredCastellodellaContessaAdelaide && <i className="bi bi-chevron-right"></i>}
                                </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Val_di_Susa'>
                            <CardBody className='bottone'>
                                <Link 
                                className="bottone_link" 
                                href='/visite/piemonte/val_di_susa/forte_di_fenestrelle'
                                onMouseEnter={() => setIsHoveredFortediFenestrelle(true)}
                                onMouseLeave={() => setIsHoveredFortediFenestrelle(false)}
                                >Forte di Fenestrelle {isHoveredFortediFenestrelle && <i className="bi bi-chevron-right"></i>}
                                </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Val_di_Susa'>
                            <CardBody className='bottone'>
                                <Link 
                                className="bottone_link" 
                                href='/visite/piemonte/val_di_susa/abbazia_di_novalesa'
                                onMouseEnter={() => setIsHoveredAbbaziadiNovalesa(true)}
                                onMouseLeave={() => setIsHoveredAbbaziadiNovalesa(false)}
                                >Abbazia di Novalesa {isHoveredAbbaziadiNovalesa && <i className="bi bi-chevron-right"></i>}
                                </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Val_di_Susa'>
                            <CardBody className='bottone'>
                                <Link 
                                className="bottone_link" 
                                href='/visite/piemonte/val_di_susa/sacra_di_san_michele'
                                onMouseEnter={() => setIsHoveredSacradiSanMichele(true)}
                                onMouseLeave={() => setIsHoveredSacradiSanMichele(false)}
                                >Sacra di San Michele {isHoveredSacradiSanMichele && <i className="bi bi-chevron-right"></i>}
                                </Link>
                            </CardBody>
                        </Card>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
            </>
    )
}
