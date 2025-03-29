import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';
import { Trans, useTranslation} from 'react-i18next';

export default function Fair_of_Saint_Bear(props) {

    const { t } = useTranslation();

    return (
        <>
            <Head title={t("fair of saint bear")}/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='fair_of_saint_bear' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>{t("fair of saint bear")}</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>{t("categories")}</span>
                        <p className='categories' style={{ position: 'absolute', bottom: 10, left: 20 }}>{t("worth seeing")}</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            <Trans i18nKey="fair of saint bear1" components={{ strong: <strong/>, b: <b/> }}/>
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>{t("map")}</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d980.9565693578578!2d7.322645834208458!3d45.73792278912328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478920b03054ac77%3A0x7630a7f93c2177c6!2sFiera%20Di%20Sant&#39;orso%20Invernale%2030%20e%2031%20Gennaio%20Da%201000%20Anni!5e1!3m2!1sit!2sit!4v1713866114711!5m2!1sit!2sit"
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

