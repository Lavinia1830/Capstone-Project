import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link, Head } from '@inertiajs/react';
import { Trans, useTranslation} from 'react-i18next';

export default function Via_Francigena(props) {

    const { t } = useTranslation();

    return (
        <>
            <Head title={t("via francigena")}/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='via_francigena' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>{t("via francigena")}</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>{t("categories")}</span>
                        <p className='categories' style={{ position: 'absolute', bottom: 10, left: 20 }}>{t("worth seeing")}</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            <Trans i18nKey="via francigena1" components={{ strong: <strong/>, b: <b/>, br: <br/>, Link: <Link/> }}/> 
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>{t("map")}</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1390.6513965691295!2d7.760040712523971!3d45.60214981800362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47889662f190480b%3A0x842b3bfcaae2e952!2sStrada%20romana%20delle%20Gallie!5e1!3m2!1sit!2sit!4v1713781881979!5m2!1sit!2sit"
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
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
        
    )
}
