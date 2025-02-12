import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';
import { Trans, useTranslation} from 'react-i18next';

export default function Place_Émile_Chanoux(props) {

    const { t } = useTranslation();

    return (
        <>
            <Head title={("place émile chanoux")}/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='place_émile_chanoux' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>{t("place émile chanoux")}</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>{t("categories")}</span>
                        <p className='categories' style={{ position: 'absolute', bottom: 10, left: 20 }}>{t("worth seeing")}</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            <Trans i18nKey="place émile chanoux1" components={{ strong: <strong/>, b: <b/> }}/>
                        </p>
                        <p>
                            <Trans i18nKey="place émile chanoux2" components={{ b: <b/> }} />
                        </p>
                        <h3 className='color-subtitle'>{t("the history of the place émile chanoux")}</h3>
                        <p>
                            <Trans i18nKey="place émile chanoux3" components={{ b: <b/> }} />
                        </p>
                        <p>
                            <Trans i18nKey="place émile chanoux4" components={{ b: <b/> }} />
                        </p>
                        <p>
                            <Trans i18nKey="place émile chanoux5" components={{ b: <b/> }} />
                        </p>
                        <p>
                            <Trans i18nKey="place émile chanoux6" components={{ b: <b/> }} />
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d824.8907215687684!2d7.319709465573895!3d45.737390797481716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478920b092674883%3A0x76cd9ed3cff37fb4!2sPiazza%20%C3%89mile%20Chanoux%2C%2011100%20Aosta%20AO!5e1!3m2!1sit!2sit!4v1713861267556!5m2!1sit!2sit"
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
