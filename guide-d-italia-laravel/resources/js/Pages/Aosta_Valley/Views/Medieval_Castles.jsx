import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';
import { Trans, useTranslation} from 'react-i18next';

export default function Medieval_Castles(props) {

    const [isHoveredBardFort, setIsHoveredBardFort] = useState(false);
    const [isHoveredSavoyCastley, setIsHoveredSavoyCastley] = useState(false);
    const [isHoveredCastleofIssogne, setIsHoveredCastleofIssogne] = useState(false);
    const [isHoveredCastleofVerrès, setIsHoveredCastleofVerrès] = useState(false);
    const [isHoveredCastleofUssel, setIsHoveredCastleofUssel] = useState(false);
    const [isHoveredCastleofCly, setIsHoveredCastleofCly] = useState(false);
    const [isHoveredCastleofFénis, setIsHoveredCastleofFénis] = useState(false);
    const [isHoveredRoyalCastleofSarre, setIsHoveredRoyalCastleofSarre] = useState(false);
    const [isHoveredCastleofofAymavilles, setIsHoveredCastleofAymavilles] = useState(false);
    const [isHoveredCastleofSarrioddelaTour, setIsHoveredCastleofSarrioddelaTour] = useState(false);

    const { t } = useTranslation();

    return (
        <>
            <Head title={t("medieval castles")}/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='medieval_castles' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>{t("medieval castles")}</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>{t("categories")}</span>
                        <p className='categories' style={{ position: 'absolute', bottom: 10, left: 20 }}>{t("worth seeing")}</p>
                    </div>
                    <div className="body">
                        <div className="margin mt-3">
                            <p>
                                <Trans i18nKey="medieval castles1" components={{ b: <b/>, strong: <strong/> }}/>
                            </p>
                        </div>
                        <div className="margin mt-3">
                            <h2 className="color-subtitle">{t("savoy castley")}</h2>
                            <p>
                                <Trans i18nKey="medieval castles2" components={{ b: <b /> }}/>
                            </p>
                        </div>
                        <div className='row d-flex justify-content-center mx-0 mb-4'>    
                            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Savoy_Castle'>
                                <CardBody className='botton'>
                                <Link 
                                    className="botton_link" 
                                    href='/views/aosta_valley/gressoney_saint_jean/savoy_castle'
                                    onMouseEnter={() => setIsHoveredSavoyCastley(true)}
                                    onMouseLeave={() => setIsHoveredSavoyCastley(false)}
                                    >{t("savoy castley")} {isHoveredSavoyCastley && <i className="bi bi-chevron-right"></i>}
                                </Link>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="margin mt-3">
                            <h2 className="color-subtitle">{t("castle of issogne")}</h2>
                            <p>
                                <Trans i18nKey="medieval castles3" components={{ b: <b /> }}/>
                            </p>
                        </div> 
                        <div className='row d-flex justify-content-center mx-0 mb-4'>    
                            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Castle_of_Issogne'>
                                <CardBody className='botton'>
                                <Link 
                                    className="botton_link" 
                                    href='/views/aosta_valley/la_place/castle_of_issogne'
                                    onMouseEnter={() => setIsHoveredCastleofIssogne(true)}
                                    onMouseLeave={() => setIsHoveredCastleofIssogne(false)}
                                    >{t("castle of issogne")} {isHoveredCastleofIssogne && <i className="bi bi-chevron-right"></i>}
                                </Link>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="margin mt-3">
                            <h2 className="color-subtitle">{t("castle of verrès")}</h2>
                            <p>
                                <Trans i18nKey="medieval castles4" components={{ b: <b /> }}/>
                            </p>
                        </div> 
                        <div className='row d-flex justify-content-center mx-0 mb-4'>    
                            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Castle_of_Verrès'>
                                <CardBody className='botton'>
                                <Link 
                                    className="botton_link" 
                                    href='/views/aosta_valley/verrès/castle_of_verrès'
                                    onMouseEnter={() => setIsHoveredCastleofVerrès(true)}
                                    onMouseLeave={() => setIsHoveredCastleofVerrès(false)}
                                    >{t("castle of verrès")} {isHoveredCastleofVerrès && <i className="bi bi-chevron-right"></i>}
                                </Link>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="margin mt-3">
                            <h2 className="color-subtitle">{t("castle of ussel")}</h2>
                            <p>
                                <Trans i18nKey="medieval castles5" components={{ b: <b /> }}/>
                            </p>
                        </div> 
                        <div className='row d-flex justify-content-center mx-0 mb-4'>    
                            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Castle_of_Ussel'>
                                <CardBody className='botton'>
                                <Link 
                                    className="botton_link" 
                                    href='/views/aosta_valley/ussel/castle_of_ussel'
                                    onMouseEnter={() => setIsHoveredCastleofUssel(true)}
                                    onMouseLeave={() => setIsHoveredCastleofUssel(false)}
                                    >{t("castle of ussel")} {isHoveredCastleofUssel && <i className="bi bi-chevron-right"></i>}
                                </Link>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="margin mt-3">
                            <h2 className="color-subtitle">{t("castle of cly")}</h2>
                            <p>
                                <Trans i18nKey="medieval castles6" components={{ b: <b /> }}/>
                            </p>
                        </div> 
                        <div className='row d-flex justify-content-center mx-0 mb-4'>    
                            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Castle_of_Cly'>
                                <CardBody className='botton'>
                                <Link 
                                    className="botton_link" 
                                    href='/views/aosta_valley/saint-denis/castle_of_cly'
                                    onMouseEnter={() => setIsHoveredCastleofCly(true)}
                                    onMouseLeave={() => setIsHoveredCastleofCly(false)}
                                    >{t("castle of cly")} {isHoveredCastleofCly && <i className="bi bi-chevron-right"></i>}
                                </Link>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="margin mt-3">
                            <h2 className="color-subtitle">{t("castle of fénis")}</h2>
                            <p>
                                <Trans i18nKey="medieval castles7" components={{ b: <b /> }}/>
                            </p>
                        </div> 
                        <div className='row d-flex justify-content-center mx-0 mb-4'>    
                            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Castle_of_Fénis'>
                                <CardBody className='botton'>
                                <Link 
                                    className="botton_link" 
                                    href='/views/aosta_valley/fénis/castle_of_fénis'
                                    onMouseEnter={() => setIsHoveredCastleofFénis(true)}
                                    onMouseLeave={() => setIsHoveredCastleofFénis(false)}
                                    >{t("castle of fénis")} {isHoveredCastleofFénis && <i className="bi bi-chevron-right"></i>}
                                </Link>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="margin mt-3">
                            <h2 className="color-subtitle">{t("bard fort")}</h2>
                            <p>
                                <Trans i18nKey="medieval castles8" components={{ b: <b />, Link: <Link/> }}/>
                            </p>
                        </div> 
                        <div className='row d-flex justify-content-center mx-0 mb-4'>    
                            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Bard_Fort'>
                                <CardBody className='botton'>
                                <Link 
                                    className="botton_link" 
                                    href='/views/aosta_valley/bard/bard_fort'
                                    onMouseEnter={() => setIsHoveredBardFort(true)}
                                    onMouseLeave={() => setIsHoveredBardFort(false)}
                                    >{t("bard fort")} {isHoveredBardFort && <i className="bi bi-chevron-right"></i>}
                                </Link>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="margin mt-3">
                            <h2 className="color-subtitle">{t("royal castle of sarre")}</h2>
                            <p>
                                <Trans i18nKey="medieval castles9" components={{ b: <b />, Link: <Link/> }}/>
                            </p>
                        </div> 
                        <div className='row d-flex justify-content-center mx-0 mb-4'>    
                            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Royal_Castle_of_Sarre'>
                                <CardBody className='botton'>
                                <Link 
                                    className="botton_link" 
                                    href='/views/aosta_valley/sarre/royal_castle_of_sarre'
                                    onMouseEnter={() => setIsHoveredRoyalCastleofSarre(true)}
                                    onMouseLeave={() => setIsHoveredRoyalCastleofSarre(false)}
                                    >{t("royal castle of sarre")} {isHoveredRoyalCastleofSarre && <i className="bi bi-chevron-right"></i>}
                                </Link>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="margin mt-3">
                            <h2 className="color-subtitle">{t("castle of aymavilles")}</h2>
                            <p>
                                <Trans i18nKey="medieval castles10" components={{ b: <b />, Link: <Link/> }}/>
                            </p>
                        </div> 
                        <div className='row d-flex justify-content-center mx-0 mb-4'>    
                            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Castle_of_Aymavilles'>
                                <CardBody className='botton'>
                                <Link 
                                    className="botton_link" 
                                    href='/views/aosta_valley/aymavilles/castle_of_aymavilles'
                                    onMouseEnter={() => setIsHoveredCastleofAymavilles(true)}
                                    onMouseLeave={() => setIsHoveredCastleofAymavilles(false)}
                                    >{t("castle of aymavilles")} {isHoveredCastleofofAymavilles && <i className="bi bi-chevron-right"></i>}
                                </Link>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="margin mt-3">
                            <h2 className="color-subtitle">{t("castle of sarriod de la tour")}</h2>
                            <p>
                                <Trans i18nKey="medieval castles11" components={{ b: <b />, Link: <Link/> }}/>
                            </p>
                        </div> 
                        <div className='row d-flex justify-content-center mx-0 mb-4'>    
                            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Castle_of_Sarriod_de_la_Tour'>
                                <CardBody className='botton'>
                                <Link 
                                    className="botton_link" 
                                    href='/views/aosta_valley/saint-pierre/castle_of_sarriod_de_la_tour'
                                    onMouseEnter={() => setIsHoveredCastleofSarrioddelaTour(true)}
                                    onMouseLeave={() => setIsHoveredCastleofSarrioddelaTour(false)}
                                    >{t("castle of sarriod de la tour")} {isHoveredCastleofSarrioddelaTour && <i className="bi bi-chevron-right"></i>}
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
