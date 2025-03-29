import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';
import { Trans, useTranslation } from 'react-i18next';

export default function Castle_of_Sarriod_de_la_Tour(props) {

    const { t } = useTranslation();

    return (
        <>
            <Head title={t("castle of sarriod de la tour")}/> 
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='castle_of_sarriod_de_la_tour' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>{t("castle of sarriod de la tour")}</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>{t("categories")}</span>
                        <p className='categories' style={{ position: 'absolute', bottom: 10, left: 20 }}>{t("worth seeing")}</p>
                    </div>
                    <div className="body">
                        <div className="margin mt-3">
                            <p>
                                <a href="https://www.midaticket.it/eventi/castello-sarriod-de-la-tour" className='text-decoration-none color_link'>{t("castle of sarriod de la tour1")}</a>
                            </p>
                            <p>
                                <Trans i18nKey="castle of sarriod de la tour2" components={{ b: <b/> }}/>  
                            </p>
                            <p>
                                <Trans i18nKey="castle of sarriod de la tour3" components={{ b: <b/> }}/>
                            </p>
                            <p>
                                <Trans i18nKey="castle of sarriod de la tour4" components={{ br: <br/> }}/>
                            </p>
                        </div>
                        <div className='margin mb-4'>
                            <h3 className='color-subtitle text-center'>{t("map")}</h3>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1167.2260487031294!2d7.224322071868704!3d45.70605850038098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47892231ca219fc9%3A0x1e69b7450b7a5880!2sCastello%20Sarriod%20de%20La%20Tour!5e1!3m2!1sit!2sit!4v1713864981496!5m2!1sit!2sit"
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
