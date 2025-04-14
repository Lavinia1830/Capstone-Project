import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';
import { Trans, useTranslation } from 'react-i18next';
import {Card, CardBody, Image} from 'react-bootstrap';

export default function Breuil_Cervinia(props) {

    const { i18n,t } = useTranslation();

    const locale = i18n.language;
    const breuil_cervinia = locale === 'en' ? '/mountain/aosta_valley/breuil_cervinia' : '/montagna/valle_d_aosta/breuil_cervinia';

    return (
        <>
            <Head title={t("breuil cervinia")}/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    
                    <div className='breuil_cervinia' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>{t("cervinia nature")}</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>{t("categories")}</span>
                        <p className='categories' style={{ position: 'absolute', bottom: 10, left: 20 }}>{t("mountain")}</p>
                    </div>
                    <div className="body">
                        <div className="margin mt-3">
                            <h2 className="color-subtitle text-center">{t("breuil cervinia1")}</h2>
                            <p>
                                <Trans i18nKey="breuil cervinia2" components={{ Link: <Link/>, b: <b/> }}/>
                            </p>
                            <p>
                                <Trans i18nKey="breuil cervinia3" components={{ b: <b/>}}/>
                            </p>
                            <p>
                                <Trans i18nKey="breuil cervinia4" components={{ b: <b/>}}/>
                            </p>
                            <p>
                                <Trans i18nKey="breuil cervinia5" components={{ b: <b/>}}/>
                            </p>
                            <p>
                                <Trans i18nKey="breuil cervinia6" components={{ b: <b/>}}/>
                            </p>
                        </div>
                        <div className='margin mb-4'>
                            <h3 className='color-subtitle text-center'>{t("map")}</h3>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52702.90517931747!2d6.823975517655897!3d45.83261439687007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4789459fb534be51%3A0xa908728c5dcec4c0!2sMonte%20Bianco!5e1!3m2!1sit!2sit!4v1713869894364!5m2!1sit!2sit"
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
