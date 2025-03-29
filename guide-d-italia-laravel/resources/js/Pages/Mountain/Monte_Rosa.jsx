import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Trans, useTranslation } from 'react-i18next';
import { Head, Link } from '@inertiajs/react';

export default function Monte_Rosa(props) {

    const { t } = useTranslation();

    return (
        <>
            <Head title={t("monte rosa")}/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='monte_rosa' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>{t("monte rosa")}</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>{t("categories")}</span>
                        <p className='categories' style={{ position: 'absolute', bottom: 10, left: 20 }}>{t("mountain")}</p>
                    </div>
                    <div className="body">
                        <div className="margin mt-3">
                            <h2 className="color-subtitle">{t("monte rosa1")}</h2>
                            <p>
                                <Trans i18nKey="monte rosa2" components={{ b: <b/>, Link: <Link/>, strong: <strong/> }}/>
                            </p>
                        </div>
                        <div className="margin mt-3">
                            <h3 className="color-subtitle">{t("monte rosa3")}</h3>
                            <p>
                                <Trans i18nKey="monte rosa4" components={{ b: <b/> }}/>
                            </p>
                        </div>
                        <div className="margin mt-3">
                            <h3 className="color-subtitle">{t("monte rosa5")}</h3>
                            <p>
                                <Trans i18nKey="monte rosa6" components={{ b: <b/> }}/>
                            </p>
                        </div>
                        <div className="margin mt-3">
                            <h3 className="color-subtitle">{t("monte rosa7")}</h3>
                            <p>
                                <Trans i18nKey="monte rosa8" components={{ b: <b/> }}/>
                            </p>
                        </div>
                        <div className="margin mt-3">
                            <h3 className="color-subtitle">{t("monte rosa9")}</h3>
                            <ul className='list'>
                                <li>
                                    <Trans i18nKey="monte rosa10" components={{ b: <b/>, Link: <Link/> }}/>
                                </li>
                                <li>
                                    <Trans i18nKey="monte rosa11" components={{ b: <b/> }}/>
                                </li>
                                <li>
                                    <Trans i18nKey="monte rosa12" components={{ b: <b/> }}/>
                                </li>
                                <li>
                                    <Trans i18nKey="monte rosa13" components={{ b: <b/> }}/>
                                </li>
                            </ul>
                        </div>
                        <div className="margin mt-3">
                            <h3 className="color-subtitle">{t("monte rosa14")}</h3>
                            <p>
                                <Trans i18nKey="monte rosa15" components={{ b: <b/>, strong: <strong/> }}/>
                            </p>
                        </div>
                        <div className="margin mt-3">
                            <h3 className="color-subtitle">{t("monte rosa16")}</h3>
                            <p>
                                <Trans i18nKey="monte rosa17" components={{ b: <b/> }}/>
                            </p>
                        </div>
                        <div className="margin mt-3">
                            <h3 className="color-subtitle">{t("monte rosa18")}</h3>
                            <p>
                                <Trans i18nKey="monte rosa19" components={{ b: <b/> }}/>
                            </p>
                        </div>
                        <div className='margin mb-4'>
                            <h3 className='color-subtitle text-center'>Mappa</h3>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22114.470824331318!2d7.851554176017189!3d45.943952366157866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4788b34a9a438c9f%3A0x70f673db20fd93d3!2sMonte%20Rosa!5e1!3m2!1sit!2sit!4v1713885985619!5m2!1sit!2sit"
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
                    </div>
                    
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
        
    )
}
