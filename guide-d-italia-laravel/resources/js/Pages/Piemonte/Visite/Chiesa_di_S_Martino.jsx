import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Chiesa_di_S_Martino(props) {
    return (
        <>
            <Head title="Chiesa di San Martino"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='chiesa_di_san_martino' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Chiesa di San Martino</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            La <strong>Chiesa di San Martino</strong> ad <b>Asti</b> ha una storia ricca e interessante. Le sue origini risalgono al <b>XII 
                            secolo</b>, quando fu costruita come <b>pieve</b> dedicata a <b>San Martino di Tours</b>. Nel corso dei secoli, la chiesa ha 
                            subito diverse <b>modifiche</b> e <b>restauri</b>, riflettendo i cambiamenti <b>architettonici</b> e <b>stilistici</b> delle 
                            epoche successive. Durante il <b>Medioevo</b>, la chiesa era un importante punto di riferimento per la <b>comunità locale</b> e 
                            aveva un ruolo centrale nella <b>vita religiosa</b> e <b>sociale</b> della città. Nel <b>XVII secolo</b>, la chiesa fu ampliata 
                            e rinnovata in stile <b>barocco</b>, un'opera che ha arricchito ulteriormente il suo patrimonio <b>artistico</b> e <b>culturale</b>. 
                            Oggi, la Chiesa di San Martino ad Asti rappresenta un <b>prezioso esempio</b> di <b>architettura religiosa</b> e 
                            un <b>testimone</b> della storia <b>secolare</b> della città.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1075.3296217438135!2d8.199605378479287!3d44.89857921884825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47879325be1004eb%3A0x616d3feecd2e150f!2sChiesa%20di%20San%20Martino!5e1!3m2!1sit!2sit!4v1717323491755!5m2!1sit!2sit"
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
