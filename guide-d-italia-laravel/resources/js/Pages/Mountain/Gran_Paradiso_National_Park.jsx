import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link, Head } from '@inertiajs/react';
import { Trans, useTranslation} from 'react-i18next';

export default function Gran_Paradiso_National_Park(props) {
    
    const { t } = useTranslation();

    return (
        <>
            <Head title={t("gran paradiso national park")}/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='gran_paradiso_national_park' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>{t("gran paradiso national park")}</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>{t("categories")}</span>
                        <p className='categories' style={{ position: 'absolute', bottom: 10, left: 20 }}>{t("mountain")}</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            <Trans i18nKey="gran paradiso national park1" components={{ b: <b/> }}/>
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">{t("routes")}</h2>
                        <p>
                            <Trans i18nKey="gran paradiso national park2" components={{ b: <b/> }}/>
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">{t("practicable sports")}</h2>
                        <p>
                            <Trans i18nKey="gran paradiso national park3" components={{ b: <b/> }}/>
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">{t("experiences")}</h2>
                        <p>
                            <Trans i18nKey="gran paradiso national park4" components={{ b: <b/>, strong: <strong/> }}/>
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">{t("attractions")}</h2>
                        <p>
                            <Trans i18nKey="gran paradiso national park5" components={{ b: <b/>, Link: <Link/> }}/>
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">{t("hospitality")}</h2>
                        <p>
                            <Trans i18nKey="gran paradiso national park6" components={{ b: <b/> }}/>
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">{t("services in the park")}</h2>
                        <p>
                            <Trans i18nKey="gran paradiso national park7" components={{ b: <b/>, Link: <Link/> }}/>
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>{t("map")}</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126025.6469364405!2d7.24976936259389!3d45.531568761932824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47891f116149b481%3A0xb8f1d32359844c53!2sParco%20Nazionale%20Gran%20Paradiso!5e1!3m2!1sit!2sit!4v1713783308387!5m2!1sit!2sit"
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
