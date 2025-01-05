import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Chiesa_di_San_Giuseppe(props) {
    return (
        <>
            <Head title="Chiesa di San Giuseppe"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='chiesa_di_san_giuseppe' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Chiesa di San Giuseppe</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            La <strong>Chiesa di San Giuseppe</strong> ad <b>Alba</b> è un edificio religioso di grande rilevanza storica e artistica. 
                            Costruita nel <b>XVII secolo</b>, la chiesa è un esempio significativo dell'architettura barocca piemontese. Situata nel 
                            centro storico della città, la sua facciata è caratterizzata da eleganti <b>decorazioni in stucco</b> e un 
                            raffinato <b>portale d'ingresso</b>.
                        </p>
                        <p>
                            All'interno, la chiesa ospita una serie di opere d'arte di notevole valore, tra cui affreschi e tele di importanti artisti 
                            dell'epoca. Particolarmente degna di nota è la <b>cappella del SS. Sacramento</b>, decorata con ricchi stucchi dorati e un 
                            altare in marmi policromi. La chiesa conserva anche una preziosa pala d'altare raffigurante San Giuseppe, a cui è dedicata, 
                            opera di un artista locale del XVII secolo.
                        </p>
                        <p>
                            Tra le opere più rilevanti all'interno della Chiesa di San Domenico si trovano le <b>pale d'altare</b> e i <b>cicli di 
                            affreschi</b>. Uno degli affreschi più noti è il <b>Ciclo della Vita di San Domenico</b>, che racconta episodi della 
                            vita del santo fondatore dell'ordine.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d762.9678264219374!2d8.03480115887831!3d44.702011075509525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d2b35ccd9e536f%3A0x234b8e4a0a4dde4!2sChiesa%20di%20San%20Giuseppe!5e1!3m2!1sit!2sit!4v1722949648449!5m2!1sit!2sit"
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
