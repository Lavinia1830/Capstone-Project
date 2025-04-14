import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';
import { Trans, useTranslation } from 'react-i18next';
import {Card, CardBody, Image} from 'react-bootstrap';
import Breuil_Cervinia from "../../../assets/Aosta_Valley/Breuil_Cervinia_Aosta_Valley.jpg";
import Cable_car_Breuil_Cervinia from "../../../assets/Aosta_Valley/Cable_car_Breuil_Cervinia_Aosta_Valley.jpg";
import Champlève from '../../../assets/Aosta_Valley/Champlève_Aosta_Valley.jpg';
import Blue_Lake from "../../../assets/Aosta_Valley/Blue_Lake_Cervinia_Valtournenche_Aosta_Valley.jpg";

export default function Cervinia_Nature(props) {
    
    const { i18n,t } = useTranslation();
    const [isHoveredBreuilCervinia, setIsHoveredBreuilCervinia] = useState(false);
    const [isHoveredCerviniaValtournanche, setIsHoveredCerviniaValtournanche] = useState(false);
    const [isHoveredBlueLake, setIsHoveredBlueLake] = useState(false);

    const locale = i18n.language;
    const breuil_cervinia = locale === 'en' ? '/mountain/aosta_valley/breuil_cervinia' : '/montagna/valle_d_aosta/breuil_cervinia';
    const cervinia_valtournenche = locale === 'en' ? '/mountain/aosta_valley/cervinia_valtournenche' : '/montagna/valle_d_aosta/cervinia_valtournenche';
    const blue_lake = locale === 'en' ? '/lakes/aosta_valley/blue_lake' : '/laghi/valle_d_aosta/lago_blu';

    return (
        <>
            <Head title={t("cervinia nature")}/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    
                    <div className='cervinia_nature' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>{t("cervinia nature")}</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>{t("categories")}</span>
                        <p className='categories' style={{ position: 'absolute', bottom: 10, left: 20 }}>{t("nature")}</p>
                    </div>
                    <div className="body">
                        <div className="margin mt-3">
                            <p>
                                {t("cervinia nature1")}
                            </p>
                        </div>
                        <div className="margin mt-3">
                            <p>
                                <Trans i18nKey="cervinia nature2" components={{ strong: <strong/> }}/>
                            </p>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <Image src={Breuil_Cervinia} className='rounded-4'/>
                        </div>
                        <div className="margin mt-3">
                            <p>
                                <Trans i18nKey="cervinia nature3" components={{ b: <b/>, br: <br/> }}/>
                            </p>
                        </div>
                        <div className='row d-flex justify-content-center mx-0 mb-4'>
                            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Breuil_Cervinia'>
                                <CardBody className='botton'>
                                <Link 
                                    className="botton_link" 
                                    href={breuil_cervinia}
                                    onMouseEnter={() => setIsHoveredBreuilCervinia(true)}
                                    onMouseLeave={() => setIsHoveredBreuilCervinia(false)}
                                    >{t("breuil cervinia")} {isHoveredBreuilCervinia && <i className="bi bi-chevron-right"></i>}
                                </Link>
                                </CardBody>
                            </Card>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <Image src={Cable_car_Breuil_Cervinia} className='rounded-4'/>
                        </div>
                        <div className="margin mt-3">
                            <p>
                                <Trans i18nKey="cervinia nature4" components={{ b: <b/>, br: <br/> }}/>
                            </p>
                        </div>
                        <div className='row d-flex justify-content-center mx-0 mb-4'>
                            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Cervinia_Valtournanche'>
                                <CardBody className='botton'>
                                <Link 
                                    className="botton_link" 
                                    href={cervinia_valtournenche}
                                    onMouseEnter={() => setIsHoveredCerviniaValtournanche(true)}
                                    onMouseLeave={() => setIsHoveredCerviniaValtournanche(false)}
                                    >{t("cervinia valtournenche")} {isHoveredCerviniaValtournanche && <i className="bi bi-chevron-right"></i>}
                                </Link>
                                </CardBody>
                            </Card>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <Image src={Champlève} className='rounded-4'/>
                        </div>
                        <div className="margin mt-3">
                            <p>
                                <Trans i18nKey="cervinia nature5" components={{ b: <b/> }}/>
                            </p>
                            <p>
                                <Trans i18nKey="cervinia nature6" components={{ b: <b/> }}/>
                            </p>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <Image src={Blue_Lake} className='rounded-4'/>
                        </div>
                        <div className="margin mt-3">
                            <p>
                                <Trans i18nKey="cervinia nature7" components={{ b: <b/> }}/>
                            </p>
                            <p>
                                <Trans i18nKey="cervinia nature8" components={{ b: <b/> }}/>
                            </p>
                            <p>
                                <Trans i18nKey="cervinia nature9" components={{ b: <b/> }}/>
                            </p>
                        </div>
                        <div className='row d-flex justify-content-center mx-0 mb-4'>
                            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Blue_Lake'>
                                <CardBody className='botton'>
                                <Link 
                                    className="botton_link" 
                                    href={blue_lake}
                                    onMouseEnter={() => setIsHoveredBlueLake(true)}
                                    onMouseLeave={() => setIsHoveredBlueLake(false)}
                                    >{t("blue lake")} {isHoveredBlueLake && <i className="bi bi-chevron-right"></i>}
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
