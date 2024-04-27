import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/inertia-react';

export default function Atelier_d_Arts_et_Métiers(props) {
    return (
        <>
            <Head title="Atelier d'Arts et Métiers"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='atelier_d_arts_et_métiers' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Atelier d'Arts et Métiers</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            La mostra permanente è dedicata alle forti e possenti sculture di Dorino Ouvrier, artista che trae dal legno incredibili storie di fatica e di lavoro, di leggende e di feste contadine, di momenti di vita quotidiana nel segno di una tradizione radicata e profondamente vissuta.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d630.5429708204653!2d7.359418678330909!3d45.60850097476129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4788e15e914f1771%3A0x2463ecdd32be5bfd!2sAtelier%20Des%20Arts%20e%20M%C3%A9tiers%20di%20Dorino%20Ouvrier!5e1!3m2!1sit!2sit!4v1714229268926!5m2!1sit!2sit"
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
