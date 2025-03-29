import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';
import { Trans, useTranslation } from 'react-i18next';

export default function Castle_of_Aymavilles(props) {

    const { t } = useTranslation();

    return (
        <>
            <Head title={t("castle of aymavilles")}/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='castle_of_aymavilles' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>{t("castle of aymavilles")}</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>{t("categories")}</span>
                        <p className='categories' style={{ position: 'absolute', bottom: 10, left: 20 }}>{t("worth seeing")}</p>
                    </div>
                    <div className="body">
                        <div className="margin mt-3">
                            <p className='fw-bold'>
                                {t("castle of aymavilles1")}
                            </p>
                            <p>
                                <a href="https://www.midaticket.it/eventi/chateau-daymavilles" className='text-decoration-none color_link'>{t("castle of aymavilles2")}</a>
                            </p>
                            <p>
                                <Trans i18nKey="castle of aymavilles3" components={{ b: <b/>, br: <br/> }}/> 
                            </p>
                        </div>
                        <div className="margin mt-3">
                            <h2 className="color-subtile">{t("castle of aymavilles4")}</h2>
                            <p>
                                <Trans i18nKey="castle of aymavilles5" components={{ i: <i/>, br: <br/> }}/> 
                            </p>
                        </div>
                        <div className="margin mt-3">
                            <h2 className="color-subtile">{t("castle of aymavilles6")}</h2>
                            <p>
                                <Trans i18nKey="castle of aymavilles7" components={{ b: <b/>, i: <i/> }}/>
                                <br/>
                                <Trans i18nKey="castle of aymavilles8" components={{ b: <br/> }}/>
                            </p>
                            <ul className='list'>
                                <li>
                                    <Trans i18nKey="castle of aymavilles9" components={{ b: <b/> }}/>
                                </li>
                                <li>
                                    <Trans i18nKey="castle of aymavilles10" components={{ b: <b/>, i: <i/> }}/>
                                </li>
                                <li>
                                    <Trans i18nKey="castle of aymavilles11" components={{ b: <b/>, i: <i/> }}/>
                                </li>
                                <li>
                                    <Trans i18nKey="castle of aymavilles12" components={{ b: <b/> }}/>
                                </li>
                            </ul>
                        </div>
                        <div className='margin mb-4'>
                            <h3 className='color-subtitle text-center'>{t("map")}</h3>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d926.4871542349448!2d7.247314933917777!3d45.702485490957635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4789211af06a094f%3A0x782e69a378493ad6!2sCastello%20di%20Aymavilles!5e1!3m2!1sit!2sit!4v1713863783528!5m2!1sit!2sit"
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
