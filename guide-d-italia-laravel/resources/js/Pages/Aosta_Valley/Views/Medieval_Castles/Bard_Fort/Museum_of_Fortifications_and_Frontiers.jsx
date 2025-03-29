import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';
import { Trans, useTranslation } from 'react-i18next';

export default function Museum_of_Fortifications_and_Frontiers(props) {
    
    const { t } = useTranslation();
  
    return (
        <>
            <Head title={t("museum of fortifications and frontiers")}/> 
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='museum_of_fortifications_and_frontiers' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>{t("museum of fortifications and frontiers")}</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>{t("categories")}</span>
                        <p className='categories' style={{ position: 'absolute', bottom: 10, left: 20 }}>{t("worth seeing")}</p>
                    </div>
                    <div className="body">
                        <div className="margin mt-3">
                            <p>
                                <Trans i18nKey="museum of fortifications and frontiers1" components={{ b: <b/> }}/> 
                            </p>
                            <p>
                                {t("museum of fortifications and frontiers2")}
                            </p>
                            <p>
                                <Trans i18nKey="museum of fortifications and frontiers3" components={{ b: <b/> }}/> 
                            </p>
                            <ul className='list'>
                                <li>
                                    <Trans i18nKey="museum of fortifications and frontiers4" components={{ i: <i/> }}/> 
                                </li>
                                <li>
                                    <Trans i18nKey="museum of fortifications and frontiers5" components={{ i: <i/> }}/> 
                                </li>
                                <li>
                                    <Trans i18nKey="museum of fortifications and frontiers6" components={{ i: <i/> }}/> 
                                </li>
                            </ul>
                        </div>
                        <div className="margin mt-3">
                            <h2 className='color-subtitle'>{t("museum of fortifications and frontiers7")}</h2>
                            <p>
                                <Trans i18nKey="museum of fortifications and frontiers8" components={{ b: <b/>, br: <br/> }} />
                            </p>
                        </div>
                        <div className="margin mt-3">
                            <h2 className='color-subtitle'>{t("museum of fortifications and frontiers9")}</h2>
                            <p>
                                <Trans i18nKey="museum of fortifications and frontiers10" components={{b: <b/>, br: <br/>}}/>
                            </p>
                        </div>
                        <div className="margin mt-3">
                            <h2 className='color-subtitle'>{t("museum of fortifications and frontiers11")}</h2>
                            <p>
                                <Trans i18nKey="museum of fortifications and frontiers12" components={{br: <br/>, b: <b/>}}/>
                            </p>
                        </div>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
