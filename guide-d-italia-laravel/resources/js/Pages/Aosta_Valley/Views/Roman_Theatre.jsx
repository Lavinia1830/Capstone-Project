import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';
import { Trans, useTranslation } from 'react-i18next';

export default function Roman_Theatre(props) {

    const { t } = useTranslation();

    return (
        <>
            <Head title={t("roman theatre")}/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='roman_theatre_aosta' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>{t("roman theatre")}</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>{t("categories")}</span>
                        <p className='categories' style={{ position: 'absolute', bottom: 10, left: 20 }}>{t("worth seeing")}</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            <Trans i18nKey="roman theatre1" components={{ strong: <strong/>, b: <b/> }}/> 
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">{t("roman theatre2")}</h2>
                        <p>
                            <Trans i18nKey="roman theatre3" components={{ b: <b/> }} />
                        </p>
                        <p>
                            <Trans i18nKey="roman theatre4" components={{ b: <b/> }} />
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">{t("roman theatre5")}</h2>
                        <p>
                            <Trans i18nKey="roman theatre6" components={{ b: <b/> }} />
                        </p>
                        <p>
                            <Trans i18nKey="roman theatre7" components={{ b: <b/> }} />
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">{t("roman theatre8")}</h2>
                        <p>
                            <Trans i18nKey="roman theatre9" components={{ b: <b/> }} />
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d713.9594380781155!2d7.321851204185428!3d45.73845720579907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478920b034c4e3f7%3A0x5b8765bf42f6b966!2sTeatro%20Romano!5e1!3m2!1sit!2sit!4v1713858884382!5m2!1sit!2sit"
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
