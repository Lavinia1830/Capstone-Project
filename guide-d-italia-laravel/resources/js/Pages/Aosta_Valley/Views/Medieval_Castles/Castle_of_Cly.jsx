import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';
import { Trans, useTranslation} from 'react-i18next';

export default function Castle_of_Cly(props) {

    const { t } = useTranslation();

    return (
        <>
            <Head title={t("castle of Cly")}/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='castle_of_cly' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>{t("castle of cly")}</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>{t("categories")}</span>
                        <p className='categories' style={{ position: 'absolute', bottom: 10, left: 20 }}>{t("worth seeing")}</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            <Trans i18nKey="castle of cly1" components={{ b: <b/> }}/>
                        </p>
                        <p>
                            <Trans i18nKey="castle of cly2" components={{ b: <b/> }}/>
                        </p>
                        <p>
                            <Trans i18nKey="castle of cly3" components={{ b: <b/> }}/>
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>{t("map")}</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1961.5133917441754!2d7.559206306163003!3d45.74929901148939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4788c4f3b1024953%3A0xf9f7773f7e67b4c1!2sCastello%20di%20Cly!5e1!3m2!1sit!2sit!4v1713796566620!5m2!1sit!2sit"
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
