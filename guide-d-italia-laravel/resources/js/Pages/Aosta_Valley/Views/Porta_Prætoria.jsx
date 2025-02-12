import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';
import { Trans, useTranslation} from 'react-i18next';

export default function Porta_Prætoria(props) {

    const { t } = useTranslation();

    return (
        <>
            <Head title={t("porta prætoria")}/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='porta_prætoria' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>{t("porta prætoria")}</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>{t("categories")}</span>
                        <p className='categories' style={{ position: 'absolute', bottom: 10, left: 20 }}>{t("worth seeing")}</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            <Trans i18nKey="porta prætoria1" components={{ strong: <strong/>, b: <b/> }}/>
                        </p>
                        <p>
                            <Trans i18nKey="porta prætoria2" components={{ b: <b/> }} />
                        </p>
                        <p>
                            <Trans i18nKey="porta prætoria3" components={{ b: <b/>, strong: <strong/> }} />
                        </p>
                        <p>
                            <Trans i18nKey="porta prætoria4" components={{ b: <b/> }} />
                        </p>
                        <p>
                            <Trans i18nKey="porta prætoria5" components={{ b: <b/> }} />
                        </p>
                        <p>
                            <Trans i18nKey="porta prætoria6" components={{ b: <b/> }} />
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d583.2798606555114!2d7.3230907821436775!3d45.73796158347414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478920b03d6fec95%3A0x9fa0de3360fd0ba!2sPorta%20Pretoria!5e1!3m2!1sit!2sit!4v1713858424255!5m2!1sit!2sit"
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
