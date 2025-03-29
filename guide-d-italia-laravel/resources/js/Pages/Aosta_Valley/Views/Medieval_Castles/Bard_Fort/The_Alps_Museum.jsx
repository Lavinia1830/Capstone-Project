import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';
import { Trans, useTranslation } from 'react-i18next';

export default function The_Alps_Museum(props) {

  const { t } = useTranslation();

  return (
    <>
        <Head title={t("the alps museum")}/> 
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='the_alps_museum' style={{ position: 'relative' }}>
                    <h1 style={{ position: 'absolute', top: 20, left: 20 }}>{t("the alps museum")}</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>{t("categories")}</span>
                    <p className='categories' style={{ position: 'absolute', bottom: 10, left: 20 }}>{t("worth seeing")}</p>
                </div>
                <div className="body">
                    <div className="margin mt-3">
                        <p>
                            <Trans i18nKey="the alps museum1" components={{ strong: <strong/> }}/> 
                        </p>
                        <p>
                            {t("the alps museum2")}
                        </p>
                        <p>
                            {t("the alps museum3")}
                        </p>
                        <p>
                            <Trans i18nKey="the alps museum4" components={{ b: <b/> }}/> 
                        </p>
                        <p>
                            <Trans i18nKey="the alps museum5" components={{ b: <b/> }}/> 
                        </p>
                        <p>
                            <Trans i18nKey="the alps museum6" components={{ b: <b/> }}/> 
                        </p>
                        <p>
                            <Trans i18nKey="the alps museum7" components={{ b: <b/> }}/> 
                        </p>
                        <p>
                            <Trans i18nKey="the alps museum8" components={{ b: <b/> }}/> 
                        </p>
                        <p>
                            <Trans i18nKey="the alps museum9" components={{ b: <b/> }}/> 
                        </p>
                        <p>
                            <Trans i18nKey="the alps museum10" components={{ i: <i/> }}/> 
                        </p>
                        <p>
                            <Trans i18nKey="the alps museum11" components={{ i: <i/> }}/> 
                        </p>
                    </div>
                </div>
                
            </main>
            <Footer/>
        </AuthenticatedLayout>
    </>
  )
}