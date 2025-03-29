import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';
import { Trans, useTranslation} from 'react-i18next';

export default function Forensic_Cryptoporticus(props) {

    const { t } = useTranslation();

    return (
        <>
            <Head title={t("forensic cryptoporticus")}/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='forensic_cryptoporticus' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>{t("forensic cryptoporticus")}</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>{t("categories")}</span>
                        <p className='categories' style={{ position: 'absolute', bottom: 10, left: 20 }}>{t("worth seeing")}</p>
                    </div>
                    <div className="body">
                        <div className="margin mt-3">
                            <p>
                                <Trans i18nKey="forensic cryptoporticus1" components={{ strong: <strong/>, b: <b/> }}/>
                            </p>
                            <p>
                                <Trans i18nKey="forensic cryptoporticus2" components={{ strong: <strong/>, b: <b/> }} />
                            </p>
                            <p>
                                <Trans i18nKey="forensic cryptoporticus3" components={{ b: <b/> }} />
                            </p>
                            <p>
                                <Trans i18nKey="forensic cryptoporticus4" components={{ b: <b/> }} />
                            </p>
                            <p>
                                <Trans i18nKey="forensic cryptoporticus5" components={{ b: <b/> }} />
                            </p>
                        </div>
                        <div className='margin mb-4'>
                            <h3 className='color-subtitle text-center'>{t("map")}</h3>
                            <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d756.4195203612867!2d7.316922565089329!3d45.7380272822963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478920ae2253217f%3A0x92b91a47ac5eadd7!2sCriptoportico%20Forense!5e1!3m2!1sit!2sit!4v1713859329405!5m2!1sit!2sit"
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
