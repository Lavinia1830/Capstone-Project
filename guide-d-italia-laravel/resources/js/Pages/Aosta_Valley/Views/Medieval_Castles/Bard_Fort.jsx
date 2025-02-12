import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';
import { Trans, useTranslation } from 'react-i18next';

export default function Bard_Fort(props) {

    const { t } = useTranslation();

    return (
        <>
            <Head title={t("bard fort")}/> 
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='bard_fort' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>{t("bard fort")}</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>{t("categories")}</span>
                        <p className='categories' style={{ position: 'absolute', bottom: 10, left: 20 }}>{t("worth seeing")}</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            <Trans i18nKey="bard fort1" components={{ b: <b/> }}/> 
                        </p>
                        <p>
                            <Trans i18nKey="bard fort2" components={{ b: <b/> }}/> 
                        </p>
                        <p>
                            <Trans i18nKey="bard fort3" components={{ b: <b/> }}/> 
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">{t("bard fort4")}</h2>
                        <p>
                            <Trans i18nKey="bard fort5" components={{ i: <i/>, b: <b/> }}/> 
                        </p>
                        <p>
                            <Trans i18nKey="bard fort6" components={{ b: <b/> }} />
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle"><Trans i18nKey="bard fort7" components={{ Link: <Link /> }} /></h2>                        
                        <p>
                            <Trans i18nKey="bard fort8" components={{ b: <b/> }} />
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle"><Trans i18nKey="bard fort9" components={{ Link: <Link/> }} /></h2>
                        <p>
                            <Trans i18nKey="bard fort10" components={{ b: <b/>, Link: <Link/> }} />
                        </p>
                    </div>
                    <div className="margin mt-3">
                    <h2 className="color-subtitle"><Trans i18nKey="bard fort11" components={{ Link: <Link/> }} /></h2>
                        <p>
                            <Trans i18nKey="bard fort12" components={{ b: <b/> }} />
                        </p>
                    </div>
                    <div className="margin mt-3">
                    <h2 className="color-subtitle"><Trans i18nKey="bard fort13" components={{ Link: <Link/> }} /></h2>
                        <p>
                            <Trans i18nKey="bard fort14" components={{ b: <b/> }} />
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>{t("map")}</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1966.4584287030339!2d7.742933911179827!3d45.608415123122654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478895d19ade71c9%3A0x4ea4795f2aa00772!2sForte%20di%20Bard!5e1!3m2!1sit!2sit!4v1713779357795!5m2!1sit!2sit"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map"
                            className='mx-auto mappa'
                        ></iframe>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
        
    )
}
