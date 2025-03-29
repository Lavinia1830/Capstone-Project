import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';
import { Trans, useTranslation } from 'react-i18next';

export default function Royal_Castle_of_Sarre(props) {

    const { t } = useTranslation();

    return (
        <>
            <Head title={t("royal castle of sarre")}/> 
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='royal_castle_of_sarre' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>{t("royal castle of sarre")}</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>{t("categories")}</span>
                        <p className='categories' style={{ position: 'absolute', bottom: 10, left: 20 }}>{t("worth seeing")}</p>
                    </div>
                    <div className="body">
                        <div className="margin mt-3">
                            <p>
                                <a href='https://www.midaticket.it/eventi/castello-reale-di-sarre' className='text-decoration-none color_link'>{t("royal castle of sarre1")}</a> <br/>
                                <Trans i18nKey="royal castle of sarre2" components={{ b: <b/>, Link: <Link/> }}/> 
                            </p>
                        </div>
                        <div className="margin mt-3">
                            <h2>{t("royal castle of sarre3")}</h2>
                            <p>
                                <Trans i18nKey="royal castle of sarre4" components={{ Link: <Link/> }}/> 
                            </p>
                            <p>
                                <Trans i18nKey="royal castle of sarre5" components={{ strong: <strong/> }}/> 
                            </p>
                            <p>
                                {t("royal castle of sarre6")}
                            </p>
                            <p>
                                {t("royal castle of sarre7")}
                            </p>
                            <p>
                                {t("royal castle of sarre8")}
                            </p>
                            <p>
                                {t("royal castle of sarre9")}
                            </p>
                        </div>
                        <div className="margin mt-3">
                            <h2>{t("royal castle of sarre10")}</h2>
                            <p>
                            <Trans i18nKey="royal castle of sarre11" components={{ b: <b/> }}/> 
                            </p>
                            <p>
                                <ul className='list'>
                                    <li>
                                        {t("royal castle of sarre12")} 
                                    </li>
                                    <li>
                                        <Trans i18nKey="royal castle of sarre13" components={{ b: <b/>, Link: <Link/> }}/> 
                                    </li>
                                    <li>
                                        {t("royal castle of sarre14")}
                                    </li>
                                </ul>
                            </p>
                        </div>
                        <div className='margin mb-4'>
                            <h3 className='color-subtitle text-center'>{t("map")}</h3>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d693.9486938092078!2d7.250717320183481!3d45.71315138947151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47892176ce716071%3A0x7f43a315b04b32bb!2sCastello%20Reale%20di%20Sarre!5e1!3m2!1sit!2sit!4v1713797722836!5m2!1sit!2sit"
                                width="600"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map"
                                className='mx-auto map'
                            ></iframe>
                        </div>
                    </div>
                    
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
            
    )
}
