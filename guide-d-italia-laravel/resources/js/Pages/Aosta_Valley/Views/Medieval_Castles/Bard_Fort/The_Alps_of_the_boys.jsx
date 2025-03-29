import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';
import { Trans, useTranslation } from 'react-i18next';

export default function The_Alps_of_the_boys(props) {

    const { t } = useTranslation();

    return (
        <>
            <Head title={t("the alps of the boys")}/> 
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='the_alps_of_the_boys' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>{t("the alps of the boys")}</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>{t("categories")}</span>
                        <p className='categories' style={{ position: 'absolute', bottom: 10, left: 20 }}>{t("worth seeing")}</p>
                    </div>
                    <div className="body">
                        <div className="margin mt-3">
                            <p>
                                <Trans i18nKey="the alps of the boys1" components={{ b: <b/> }}/> 
                            </p>
                            <p>
                                <Trans i18nKey="the alps of the boys2" components={{ b: <b/>, Link: <Link/> }}/> 
                            </p>
                            <p>
                                <Trans i18nKey="the alps of the boys3" components={{ b: <b/>, i: <i/> }}/> 
                            </p>
                            <p>
                                <Trans i18nKey="the alps of the boys4" components={{ b: <b/> }}/> 
                            </p>
                            <p>
                                <Trans i18nKey="the alps of the boys5" components={{ b: <b/> }}/> 
                            </p>
                        </div>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
