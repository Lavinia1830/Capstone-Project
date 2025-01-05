import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Chiesa_di_San_Domenico(props) {
    return (
        <>
            <Head title="Chiesa di San Domenico"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='chiesa_di_san_domenico' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Chiesa di San Domenico</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            La <strong>Chiesa di San Domenico</strong> ad <b>Alba</b> è un significativo esempio di architettura gotica piemontese. 
                            Costruita dai <b>Domenicani</b> tra il XIII e il XIV secolo, la chiesa ha subito diverse modifiche e restauri nel corso 
                            dei secoli.
                        </p>
                        <p>
                            La facciata, caratterizzata da un grande <b>rosone</b> centrale, presenta ancora oggi elementi decorativi tipici del 
                            periodo gotico. L'interno della chiesa, a navata unica con cappelle laterali, conserva affreschi di notevole valore 
                            artistico, risalenti al XIV e XV secolo.
                        </p>
                        <p>
                            Tra le opere più rilevanti all'interno della Chiesa di San Domenico si trovano le <b>pale d'altare</b> e i <b>cicli di 
                            affreschi</b>. Uno degli affreschi più noti è il <b>Ciclo della Vita di San Domenico</b>, che racconta episodi della 
                            vita del santo fondatore dell'ordine.
                        </p>
                        <p>
                            Nel corso del XVII secolo, la chiesa subì un'importante trasformazione barocca, visibile soprattutto nella decorazione 
                            delle cappelle laterali e nella creazione di nuovi altari. Tuttavia, molti degli elementi gotici originari sono stati 
                            recuperati e valorizzati grazie ai restauri effettuati nel XX secolo.
                        </p>
                        <p>
                            Oggi, la Chiesa di San Domenico è un importante luogo di culto e un punto di riferimento culturale per la città di Alba. 
                            Ospita eventi, concerti e mostre, mantenendo viva la tradizione di apertura e accoglienza tipica dell'ordine domenicano.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d907.3609668406295!2d8.035506379185533!3d44.69982884820503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d2b342b5802165%3A0x498e3ad3aa3584af!2sChiesa%20di%20San%20Domenico!5e1!3m2!1sit!2sit!4v1722949314226!5m2!1sit!2sit"
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
