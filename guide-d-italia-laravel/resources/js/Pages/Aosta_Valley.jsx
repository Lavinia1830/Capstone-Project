import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import {Card} from 'react-bootstrap';
import Footer from '@/Components/Footer';
import { Trans, useTranslation} from 'react-i18next';


    export default function Aosta_Valley(props) {

    const [isHoveredAosta, setIsHoveredAosta] = useState(false);
    const [isHoveredCourmayeur, setIsHoveredCourmayeur] = useState(false);
    const [isHoveredMedievalCastlesoftheAostaValley, setIsHoveredMedievalCastlesoftheAostaValley] = useState(false);

    const { t } = useTranslation();

    return (
        <>
            <Head title={t('aosta valley')}/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='text-center aosta_valley'>
                        <h1>{t('aosta valley')} </h1>
                    </div>
                    <div className="body">
                        <div className='text-center margin mt-3'>
                            <p>
                                <Trans i18nKey="description_aosta_valley" components={{ b: <b />, strong: <strong/>, br: <br/> }}/>
                            </p>
                        </div>
                        <div className="margin mt-3">
                            <h2 className='color-subtitle'>{t("origins and historical notes on the aosta valley")}</h2>
                            <p>
                                <Trans i18nKey="origins and historical notes on the aosta valley1" components={{ b: <b />, Link: <Link/> }}/>
                            </p>
                            <p>
                                <Trans i18nKey="origins and historical notes on the aosta valley2" components={{ b: <b />, Link: <Link/> }}/>
                            </p>
                            <p>
                                <Trans i18nKey="origins and historical notes on the aosta valley3" components={{ b: <b/> }}/>
                            </p>
                        </div>
                        <div className="margin mt-3">
                            <h2 className='color-subtitle'>{t("top cities in aosta valley")}</h2>
                            <p>
                                <Trans i18nKey="top cities in aosta valley1" components={{ b: <b/> }}/>
                            </p>
                            <p>
                                <Trans i18nKey="top cities in aosta valley2" components={{ Link: <Link/> }}/>
                            </p>
                            <p>
                                <Trans i18nKey="top cities in aosta valley3" components={{ b: <b/> }}/>
                            </p>
                        </div>
                        <div className="margin mt-3">
                            <h2 className='color-subtitle'>{t("what to see in aosta valley")}</h2>
                            <p>
                                <Trans i18nKey="what to see in aosta valley1" components={{ Link: <Link/> }}/>
                            </p>
                            <p>
                                <Trans i18nKey="what to see in aosta valley2" components={{ Link: <Link/>, b: <b/> }}/>
                            </p>
                            <p>
                                <Trans i18nKey="what to see in aosta valley3" components={{ b: <b/> }}/>
                            </p>
                            <p>
                                <Trans i18nKey="what to see in aosta valley4" components={{ b: <b/> }}/>
                            </p>
                            <p>
                                <Trans i18nKey="what to see in aosta valley5" components={{ b: <b/> }}/>
                            </p>
                        </div>
                        <div className="margin mt-3">
                            <h2 className='color-subtitle'>{t("unusual places in aosta valley")}</h2>
                            <p>
                                <Trans i18nKey="unusual places in aosta valley1" components={{ Link: <Link/> }}/>
                            </p>
                            <p>
                                <Trans i18nKey="unusual places in aosta valley2" components={{ Link: <Link/> }}/>
                            </p>
                            <p>
                                <Trans i18nKey="unusual places in aosta valley3" components={{ b: <b/> }}/>
                            </p>
                        </div>
                        <div className='row d-flex justify-content-center mx-0 mb-4'>
                            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Aosta_Valley'>
                                <Card.Body className='botton'>
                                    <Link 
                                        className="botton_link" 
                                        href='/destinations/aosta_valley/aosta'
                                        onMouseEnter={() => setIsHoveredAosta(true)}
                                        onMouseLeave={() => setIsHoveredAosta(false)}
                                        >{t("aosta")} {isHoveredAosta && <i className="bi bi-chevron-right"></i>}
                                    </Link>
                                </Card.Body>
                            </Card>
                            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Aosta_Valley'>
                                <Card.Body className='botton'>
                                    <Link 
                                        className="botton_link" 
                                        href='/destinations/aosta_valley/courmayeur'
                                        onMouseEnter={() => setIsHoveredCourmayeur(true)}
                                        onMouseLeave={() => setIsHoveredCourmayeur(false)}
                                        >{t("courmayeur")} {isHoveredCourmayeur && <i className="bi bi-chevron-right"></i>}
                                    </Link>
                                </Card.Body>
                            </Card>
                            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Aosta_Valley'>
                                <Card.Body className='botton'>
                                    <Link 
                                        className="botton_link"
                                        href='/views/aosta_valley/medieval_castles_of_the_aosta_valley'
                                        onMouseEnter={() => setIsHoveredMedievalCastlesoftheAostaValley(true)}
                                        onMouseLeave={() => setIsHoveredMedievalCastlesoftheAostaValley(false)}
                                        >{t("medieval castles of the aosta valley")} {isHoveredMedievalCastlesoftheAostaValley && <i className="bi bi-chevron-right"></i>}
                                    </Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
        
    )
}
