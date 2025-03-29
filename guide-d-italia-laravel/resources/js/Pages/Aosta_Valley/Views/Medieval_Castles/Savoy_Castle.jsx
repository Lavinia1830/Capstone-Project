import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';
import { Trans, useTranslation} from 'react-i18next';

export default function Savoy_Castle(props) {

    const { t } = useTranslation();

    return (
        <>
            <Head title={t("savoy castle")}/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='savoy_castle' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>{t("savoy castle")}</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>{t("categories")}</span>
                        <p className='categories' style={{ position: 'absolute', bottom: 10, left: 20 }}>{t("worth seeing")}</p>
                    </div>
                    <div className="body">
                        <div className="margin mt-3">
                            <h2 className="color-subtitle">{t("the history")}</h2>
                            <p>
                                <Trans i18nKey="savoy castle1" components={{ b: <b /> }}/>
                            </p>
                            <p>
                                <Trans i18nKey="savoy castle2" components={{ b: <b />, br: <br/> }}/>
                            </p>
                        </div>
                        <div className="margin mt-3">
                            <h2 className="color-subtitle">{t("the view")}</h2>
                            <p>
                                <Trans i18nKey="savoy castle3" components={{ b: <b /> }}/>
                            </p>
                            <p>
                                <Trans i18nKey="savoy castle4" components={{ b: <b />, Link: <Link/>}}/>
                            </p>
                        </div>
                        <div className="margin mt-3">
                            <h2 className="color-subtitle">{t("the botanical garden of savoy castle")}</h2>
                            <p>
                                <Trans i18nKey="savoy castle5" components={{ b: <b/> }} /> 
                            </p>
                        </div>
                        <div className="margin mt-3">
                            <h2 className="color-subtitle">{t("curiosity")}</h2>
                            <ul>
                                <li className='list'>
                                    <Trans i18nKey="savoy castle6" components={{ b: <b/> }} />
                                </li>
                                <li className='list'>
                                    <Trans i18nKey="savoy castle7" components={{b: <b/>, i: <i/> }} />
                                </li>
                                <li className='list'>
                                    <Trans i18nKey="savoy castle8" components={{ b: <b/> }} />
                                </li>
                                <li className="list">
                                    <Trans i18nKey="savoy castle9" components={{ b: <b/>, i: <i/> }} />
                                </li>
                            </ul>
                        </div>
                        <div className='margin mb-4'>
                            <h3 className='color-subtitle text-center'>{t("map")}</h3>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d824.4976744434932!2d7.826064237242948!3d45.76399147673988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4788ba43f6e94c33%3A0x5df217ec8ce20199!2sCastel%20Savoia!5e1!3m2!1sit!2sit!4v1713791608514!5m2!1sit!2sit"
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
