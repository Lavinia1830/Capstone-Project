import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link, Head } from '@inertiajs/react';
import { Trans, useTranslation} from 'react-i18next';

export default function Castle_of_Issogne(props) {

    const { t } = useTranslation();

    return (
        <>
            <Head title={t("castle of issogne")}/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='castle_of_issogne' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>{t("castle of issogne")}</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>{t("categories")}</span>
                        <p className='categories' style={{ position: 'absolute', bottom: 10, left: 20 }}>{t("worth seeing")}</p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">{t("the history")}</h2>
                        <p>
                            <Trans i18nKey="castle of issogne1" components={{ b: <b />, Link: <Link/> }}/>
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">{t("the view")}</h2>
                        <p>
                            <Trans i18nKey="castle of issogne2" components={{ br: <br /> }}/>
                        </p>
                        <ul>
                            <li className='list'>
                                <Trans i18nKey="castle of issogne3" components={{ b: <b/> }} />
                            </li>
                            <li className='list'>
                                <Trans i18nKey="castle of issogne4" components={{ b: <b/>, br: <br/> }} /> 
                            </li>
                            <li className='list'>
                                <Trans i18nKey="castle of issogne5" components={{ b: <b/> }} />
                            </li>
                        </ul>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">{t("avondo's apartment")}</h2>
                        <p>
                            <Trans i18nKey="castle of issogne6" components={{ b: <b/>, Link: <Link/>, br: <br/> }} />
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>{t("map")}</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d982.4267390484441!2d7.684350670492034!3d45.65417719888707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4788bffaa52e3e69%3A0x5ce85866aaafa7c3!2sCastello%20di%20Issogne!5e1!3m2!1sit!2sit!4v1713792619920!5m2!1sit!2sit"
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
