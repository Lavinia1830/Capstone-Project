import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Trans, useTranslation } from 'react-i18next';
import { Head, Link } from '@inertiajs/react';

export default function Mount_Matterhorn(props) {

    const { t } = useTranslation();

    return (
        <>
            <Head title={t("mount matterhorn")}/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='mount_matterhorn' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>{t("mount matterhorn")}</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>{t("categories")}</span>
                        <p className='categories' style={{ position: 'absolute', bottom: 10, left: 20 }}>{t("mountain")}</p>
                    </div>
                    <div className="margin mt-3">
                        <h5 className="color-subtitle fst-italic">{t("mount matterhorn1")}</h5>
                        <p>
                            <Trans i18nKey="mount matterhorn2" components={{ b: <b/>, br: <br/>, strong: <strong/> }}/>
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-title">{t("mount matterhorn3")}</h2>
                        <p>
                            <Trans i18nKey="mount matterhorn4" components={{ b: <b/> }}/>
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-title">{t("mount matterhorn5")}</h2>
                        <p>
                            <Trans i18nKey="mount matterhorn6" components={{ b: <b/>, br: <br/> }}/>
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-title">{t("mount matterhorn7")}</h2>
                        <p>
                            <Trans i18nKey="mount matterhorn8" components={{ b: <b/>, strong: <srtong/> }}/>
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1897.8857963698954!2d7.657341037646149!3d45.976941168935824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478f3368cbb9ecd9%3A0x9826458cace55849!2sMonte%20Cervino!5e1!3m2!1sit!2sit!4v1713942944186!5m2!1sit!2sit"
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
