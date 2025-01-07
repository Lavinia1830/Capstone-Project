import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Il_Faggio_Monumentale_di_Voisinal(props) {
    return (
        <>
            <Head title="Il Faggio Monumentale di Voisinal"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='il_faggio_monumentale_di_voisinal' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Il Faggio Monumentale di Voisinal</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            In fondo alla frazione di Voisinal si può trovare, di proprietà privata, il "faggio di Voisinal" una pianta secolare, classificata nell’anno 2000, monumentale. Nome scientifico Fagus sylvatica, ha un’altezza di 24,5 m e la circonferenza di 305 cm.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1646.5606284570429!2d7.377756310271513!3d45.84630392620975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4788d7c5f3474955%3A0x2ea16d9090bc11d6!2s11010%20Voisinal%20AO!5e1!3m2!1sit!2sit!4v1713967662181!5m2!1sit!2sit"
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
