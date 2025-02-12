import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';
import { Trans, useTranslation} from 'react-i18next';

export default function Cathedral_of_Aosta(props) {

    const { t } = useTranslation();

    return (
        <>
            <Head title={t("cathedral of aosta")}/> 
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='cathedral_of_aosta' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>{t("cathedral of aosta")}</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>{t("categories")}</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>{t("worth seeing")}</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            <Trans i18nKey="cathedral of aosta1" components={{ strong: <strong/>, b: <b/> }}/>
                        </p>
                        <p>
                            <Trans i18nKey="cathedral of aosta2" components={{ b: <b/> }} />
                        </p>
                        <p>
                            <Trans i18nKey="cathedral of aosta3" components={{ b: <b/> }} />
                        </p>
                        <p>
                            <Trans i18nKey="cathedral of aosta4" components={{ b: <b/> }} />
                        </p>
                        <p> 
                            <Trans i18nKey="cathedral of aosta5" components={{ b: <b/> }} /> 
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d801.3984177766781!2d7.317323015884917!3d45.73803681835809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478920b737e86aa9%3A0xcfe47ffcd7709d8e!2sCattedrale%20di%20Santa%20Maria%20Assunta%20e%20San%20Giovanni%20Battista%20-%20Aosta!5e1!3m2!1sit!2sit!4v1713862016219!5m2!1sit!2sit"
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
