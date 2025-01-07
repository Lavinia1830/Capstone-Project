import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Fiera_di_Sant_Orso(props) {
    return (
        <>
            <Head title="Fiera di Sant Orso"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='fiera_di_sant_orso' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Fiera di Sant'Orso</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Eventi</p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">La Fiera di Sant’Orso di Aosta, ieri e oggi</h2>
                        <p>
                            <b>Il 30 ed il 31 gennaio di ogni anno</b> artisti e artigiani valdostani espongono con orgoglio i frutti del proprio lavoro alla <strong>fiera di Sant’Orso</strong>, lungo le vie del centro di Aosta. Nel Medio Evo la fiera si svolgeva nel <b>Borgo di Aosta</b>, in quell’area 
                            circostante la Collegiata che porta il nome di <b>Sant’Orso</b>. Racconti leggendari narrano che tutto ha avuto inizio proprio di fronte la chiesa dove il Santo, vissuto anteriormente al IX secolo, sarebbe stato solito distribuire ai poveri indumenti e “sabot”, tipiche calzature 
                            in legno ancora oggi presentate alla fiera.<br/>
                            Ora è <b>tutto il centro cittadino</b> a essere coinvolto nella manifestazione, all’interno e a fianco della cinta muraria romana della <b>città di Aosta</b>.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Le produzioni artigianali della Valle d’Aosta esposte in fiera</h2>
                        <p>
                            In fiera sono presenti tutte le <b>attività tradizionali</b>: scultura e intaglio su <b>legno</b>, lavorazione della <b>pietra ollare</b>, del <b>ferro battuto</b> e del <b>cuoio</b> tessitura del <b>drap</b> (stoffa in lana lavorata su antichi telai di legno), <b>merletti</b>, 
                            <b>vimini</b>, oggetti per la casa, scale in legno, botti…
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d980.9565693578578!2d7.322645834208458!3d45.73792278912328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478920b03054ac77%3A0x7630a7f93c2177c6!2sFiera%20Di%20Sant&#39;orso%20Invernale%2030%20e%2031%20Gennaio%20Da%201000%20Anni!5e1!3m2!1sit!2sit!4v1713866114711!5m2!1sit!2sit"
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
