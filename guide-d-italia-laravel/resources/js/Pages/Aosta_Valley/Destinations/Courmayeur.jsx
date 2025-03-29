import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import {Card, CardBody, Image} from 'react-bootstrap';
import { Link, Head } from '@inertiajs/react';
import { Trans, useTranslation } from 'react-i18next';
import Courmayeur_Winter from '../../../../assets/Aosta_Valley/Courmayeur_Winter_Aosta_Valley.jpg';
import Courmayeur_Track from '../../../../assets/Aosta_Valley/Courmayeur_Aosta_Valley_Track.jpg';
import Ferret_Valley from '../../../../assets/Aosta_Valley/Ferret_Valley_Aosta_Valley.jpg';
import Mont_Blanc_cable_car from '../../../../assets/Aosta_Valley/Mont_Blanc_cable_car_Aosta_Valley.jpg';


export default function Courmayeur(props) {

    const [isHoveredCourmayeurMountain, setIsHoveredCourmayeurMountain] = useState(false);
    const [isHoveredFerretValley, setIsHoveredFerretValley] = useState(false);
    const [isHoveredMontBlanc, setIsHoveredMontBlanc] = useState(false);
    const [isHoveredSkywayMontBlanc, setIsHoveredSkywayMontBlanc] = useState(false);

    const { t } = useTranslation();

    return (
        <>
            <Head title={t("courmayeur")}/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='courmayeur' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>{t("courmayeur")}</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>{t("categories")}</span>
                        <p className='categories' style={{ position: 'absolute', bottom: 10, left: 20 }}>{t("city")}</p>
                    </div>
                    <div className="body">
                        <div className="margin mt-3">
                            <p className='text-center'>
                                {t("courmayeur1")}
                            </p>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <Image src={Courmayeur_Winter} className='rounded-4'/>
                        </div>
                        <div className='margin mt-3'>
                            <p>
                                <Trans i18nKey="courmayeur2" components={{ b: <b/>, Link: <Link/>, strong: <strong/> }}/>
                            </p>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <Image src={Courmayeur_Track} className='rounded-4'/>
                        </div>
                        <div className='margin mt-3'>
                            <p>
                                <Trans i18nKey="courmayeur3" components={{ b: <b/>, Link: <Link/>, strong: <strong/> }}/>
                            </p>
                            <p>
                                <Trans i18nKey="courmayeur4" components={{ b: <b/> }}/>
                            </p>
                        </div>
                        <div className='row d-flex justify-content-center mx-0 mb-4'>
                            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Courmayeur_Mountain'>
                                <CardBody className='botton'>
                                <Link 
                                    className="botton_link" 
                                    href='/mountain/aosta_valley/courmayeur_mountain'
                                    onMouseEnter={() => setIsHoveredCourmayeurMountain(true)}
                                    onMouseLeave={() => setIsHoveredCourmayeurMountain(false)}
                                    >{t("courmayeur")} {isHoveredCourmayeurMountain && <i className="bi bi-chevron-right"></i>}
                                </Link>
                                </CardBody>
                            </Card>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <Image src={Ferret_Valley} className='rounded-4'/>
                        </div>
                        <div className="margin mt-3">
                            <p>
                                <Trans i18nKey="courmayeur5" components={{ b: <b/> }}/> 
                            </p>
                        </div>
                        <div className='row d-flex justify-content-center mx-0 mb-4'>
                            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Ferret_Valley'>
                                <CardBody className='botton'>
                                <Link 
                                    className="botton_link" 
                                    href='/mountain/aosta_valley/ferret_valley'
                                    onMouseEnter={() => setIsHoveredFerretValley(true)}
                                    onMouseLeave={() => setIsHoveredFerretValley(false)}
                                    >{t("ferret valley")} {isHoveredFerretValley && <i className="bi bi-chevron-right"></i>}
                                </Link>
                                </CardBody>
                            </Card>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <Image src={Mont_Blanc_cable_car} className='rounded-4'/>
                        </div>
                        <div className="margin mt-3">
                            <p>
                                <Trans i18nKey="courmayeur6" components={{ b: <b/>, Link: <Link/> }}/> 
                            </p>
                            <p>
                                <Trans i18nKey="courmayeur7" components={{ b: <b/> }}/> 
                            </p>
                            <p>
                                <Trans i18nKey="courmayeur8" components={{ b: <b/> }}/> 
                            </p>
                        </div>
                        <div className='row d-flex justify-content-center mx-0 mb-4'>
                            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Courmayeur'>
                                <CardBody className='botton'>
                                    <Link 
                                        className="botton_link" 
                                        href='/mountain/aosta_valley/mont_blanc'
                                        onMouseEnter={() => setIsHoveredMontBlanc(true)}
                                        onMouseLeave={() => setIsHoveredMontBlanc(false)}
                                        >{t("mont blanc")} {isHoveredMontBlanc && <i className="bi bi-chevron-right"></i>}
                                    </Link>
                                </CardBody>
                            </Card>
                            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Courmayeur'>
                                <CardBody className='botton'>
                                    <Link 
                                        className="botton_link" 
                                        href='/mountain/aosta_valley/skyway_monte_bianco'
                                        onMouseEnter={() => setIsHoveredSkywayMontBlanc(true)}
                                        onMouseLeave={() => setIsHoveredSkywayMontBlanc(false)}
                                        >{t("Skyway Mont Balnc")} {isHoveredSkywayMontBlanc && <i className="bi bi-chevron-right"></i>}
                                    </Link>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                    
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
        
    )
}
