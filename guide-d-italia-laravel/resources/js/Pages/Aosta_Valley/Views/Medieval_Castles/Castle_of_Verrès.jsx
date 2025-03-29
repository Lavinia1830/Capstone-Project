import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link, Head } from '@inertiajs/react';
import { Trans, useTranslation} from 'react-i18next';

export default function Castle_of_Verrès(props) {

    const { t } = useTranslation();

    return (
        <>
            <Head title={t("castle of verrès")}/>    
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='castle_of_verrès' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>{t("castle of verrès")}</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>{t("categories")}</span>
                        <p className='categories' style={{ position: 'absolute', bottom: 10, left: 20 }}>{t("worth seeing")}</p>
                    </div>
                    <div className="body">
                        <div className="margin mt-3">
                            <h2 className="color-subtitle">{t("the history")}</h2>
                            <p>
                                <Trans i18nKey="castle of verrès1" components={{ br: <br/>, Link: <Link/>, b: <b/> }}/>
                            </p>
                        </div>
                        <div className="margin mt-3">
                            <h2 className="color-subtitle">{t("the view")}</h2>
                            <p>
                                <Trans i18nKey="castle of verrès2" components={{ br: <br/> }}/>
                            </p>
                            <p>
                                <Trans i18nKey="castle of verrès3" components={{ br: <br/>, b: <b/> }}/>
                            </p>
                        </div>
                        <div className='margin mb-4'>
                            <h3 className='color-subtitle text-center'>{t("map")}</h3>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2777.9460845476847!2d7.69371691290661!3d45.66982164970528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4788bf8de6c269db%3A0x45224d5e12a8a7bd!2sCastello%20di%20Verr%C3%A8s!5e1!3m2!1sit!2sit!4v1713793783884!5m2!1sit!2sit"
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
