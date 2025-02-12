import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';
import { Trans, useTranslation} from 'react-i18next';

export default function Castle_of_Ussel(props) {

    const { t } = useTranslation();

    return (
        <>
            <Head title={("castle of ussel")}/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='castle_of_ussel' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>{t("castle of ussel")}</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>{t("categories")}</span>
                        <p className='categories' style={{ position: 'absolute', bottom: 10, left: 20 }}>{t("worth seeing")}</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            <Trans i18nKey="castle of ussel1" components={{ br: <br/>, b: <b/> }}/>
                        </p>
                        <p>
                            {t("castle of ussel2")}
                        </p>
                        <p>
                            <Trans i18nKey="castle of ussel3" components={{ b: <b/> }}/>
                        </p>
                        <p>
                            <Trans i18nKey="castle of ussel4" components={{ b: <b/> }}/>
                        </p>
                    </div>
                    
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>{t("map")}</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1133.276844032268!2d7.627356123019273!3d45.7415676514024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4788c6b923dece15%3A0x92367e6ee27e7d26!2sCastello%20di%20Ussel!5e1!3m2!1sit!2sit!4v1713795871487!5m2!1sit!2sit"
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
