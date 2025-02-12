import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';
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
                </main>
                <div className="margin mt-3">
                    <p>
                        <Trans i18nKey="the prisons1" components={{ br: <br/> }}/> 
                    </p>
                    <h2 className="color-subtitle">{t("the prisons2")}</h2>
                    <p>
                        {t("the prisons3")}
                    </p>
                    <p>
                        <Trans i18nKey="the prisons4" components={{ i: <i/> }}/> 
                    </p>
                    <p>
                        <Trans i18nKey="the prisons5" components={{ i: <i/> }}/> 
                    </p>
                    <p>
                        <Trans i18nKey="the prisons6" components={{ i: <i/> }}/> 
                    </p>
                    <p>
                        <Trans i18nKey="the prisons7" components={{ i: <i/> }} />
                    </p>
                    <p>
                        <Trans i18nKey="the prisons8" components={{ i: <i/> }} />
                    </p>
                    <p>
                        <Trans i18nKey="the prisons9" components={{ i: <i/>, br: <br/> }} />
                    </p>
                    <p>
                        <Trans i18nKey="the prisons10" components={{ i: <i/> }} />
                    </p>
                </div>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
