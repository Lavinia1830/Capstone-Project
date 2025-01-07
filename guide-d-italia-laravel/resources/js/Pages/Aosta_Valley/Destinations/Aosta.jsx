import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';
import { Trans, useTranslation} from 'react-i18next';

export default function Aosta(props) {

    const [isHoveredBardFord, setIsHoveredBardFord] = useState(false);
    const [isHoveredArchofAugustus, setIsHoveredArchofAugustus] = useState(false);
    const [isHoveredViaFrancigena, setIsHoveredViaFrancigena] = useState(false);
    const [isHoveredRomanMonumentsAosta, setIsHoveredRomanMonumentsAosta] = useState(false);
    const [isHoveredPortaPretoria, setIsHoveredPortaPretoria] = useState(false);
    const [isHoveredCathedralofAosta, setIsHoveredCathedralofAosta] = useState(false);

    const { t } = useTranslation();

    return (
        <>
            <Head title={t("aosta")}/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='aosta' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>{t("aosta")}</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>{t("categories")}</span>
                        <p className='categories' style={{ position: 'absolute', bottom: 10, left: 20 }}>{t("city")}</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            <Trans i18nKey="aosta1" components={{ b: <b />, strong: <strong/> }}/>
                        </p>
                        <p>
                            <Trans i18nKey="aosta2" components={{ b: <b /> }}/>
                        </p>
                        <p>
                            <Trans i18nKey="aosta3" components={{ b: <b />, br: <br/> }}/>
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className='color-subtitle'>{t("history and curiosities about aosta")}</h2>
                        <p>
                            <Trans i18nKey="history and curiosities about aosta1" components={{ b: <b />, Link: <Link/> }}/> 
                        </p>
                        <p>
                            {t("history and curiosities about aosta2")}
                        </p>
                        <p>
                            <Trans i18nKey="history and curiosities about aosta3" components={{ b: <b />, br: <br/> }}/> 
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">{t("what to see in aosta: 3 stops not to be missed")}</h2>
                        <p>
                            {t("what to see in aosta: 3 stops not to be missed1")}
                        </p>
                        <ul className="lista">
                            <li>
                                <p>
                                    <Trans i18nKey="what to see in aosta: 3 stops not to be missed2" components={{ b: <b />, Link: <Link/> }}/>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <Trans i18nKey="what to see in aosta: 3 stops not to be missed3" components={{ b: <b />, Link: <Link/> }}/>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <Trans i18nKey="what to see in aosta: 3 stops not to be missed4" components={{ b: <b />, Link: <Link/> }}/>
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="margin mt-3">
                        <h2 className='color-subtitle'>{t("3 ideas on what to do in aosta and its surroundings")}</h2>
                        <p>
                            {t("3 ideas on what to do in aosta and its surroundings1")}
                        </p>
                        <p>
                            <Trans i18nKey="3 ideas on what to do in aosta and its surroundings2" components={{ Link: <Link/> }}/>
                        </p>
                        <p>
                            <Trans i18nKey="3 ideas on what to do in aosta and its surroundings3" components={{ Link: <Link/>, b: <b/> }}/>
                        </p>
                    </div>
                    <div className='row d-flex justify-content-center mx-0 mb-4'>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Aosta'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/views/aosta_valley/medieval_castels/bard_ford'
                                onMouseEnter={() => setIsHoveredBardFord(true)}
                                onMouseLeave={() => setIsHoveredBardFord(false)}
                                >{t("bard ford")} {isHoveredBardFord && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Aosta'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/views/aosta_valley/aosta/arch_of_augustus'
                                onMouseEnter={() => setIsHoveredArchofAugustus(true)}
                                onMouseLeave={() => setIsHoveredArchofAugustus(false)}
                                >{t("arch of augustus")} {isHoveredArchofAugustus && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Aosta'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/views/aosta_valley/aosta/via_francigena'
                                onMouseEnter={() => setIsHoveredViaFrancigena(true)}
                                onMouseLeave={() => setIsHoveredViaFrancigena(false)}
                                >Via Francigena {isHoveredViaFrancigena && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Aosta'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/views/aosta_valley/aosta/roman_monuments_in_aosta'
                                onMouseEnter={() => setIsHoveredRomanMonumentsAosta(true)}
                                onMouseLeave={() => setIsHoveredRomanMonumentsAosta(false)}
                                >{t("roman monuments in aosta")} {isHoveredRomanMonumentsAosta && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Aosta'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/views/aosta_valley/aosta/porta_praetoria'
                                onMouseEnter={() => setIsHoveredPortaPretoria(true)}
                                onMouseLeave={() => setIsHoveredPortaPretoria(false)}
                                >Porta Pretoria {isHoveredPortaPretoria && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Aosta'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/views/aosta_valley/aosta/cathedral_of_aosta'
                                onMouseEnter={() => setIsHoveredCathedralofAosta(true)}
                                onMouseLeave={() => setIsHoveredCathedralofAosta(false)}
                                >{t("cathedral of aosta")} {isHoveredCathedralofAosta && <i className="bi bi-chevron-right"></i>}
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
