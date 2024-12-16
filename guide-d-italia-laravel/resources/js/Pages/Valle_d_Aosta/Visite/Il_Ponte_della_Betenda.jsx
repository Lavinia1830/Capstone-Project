import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Il_Ponte_della_Betenda(props) {
    return (
        <>
            <Head title="Il Ponte della Betenda"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='il_ponte_della_betenda' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Il Ponte della Betenda</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Il ponte della Betenda fu costruito come passerella in legno nel 1352 e ricostruito in muratura nel 1688, svetta su una stretta gola profonda 54 metri scavata dalle acque che scendono dalle Grandes Murailles e unisce le due sponde del torrente Buthier. 
                            La visita di questo sito naturale richiede solo una quindicina di minuti a piedi scendendo dal villaggio Closé, oppure passando dal villaggio di Vernosse. Inoltre è possibile raggiungere il ponte da una diramazione del sentiero che porta alla Tornalla. 
                            Legata al ponte della Betenda vi è una leggenda.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1957.7908485664398!2d7.39362607698838!3d45.8551318163919!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4788d77e81004063%3A0xaa26a0a3eada11ef!2sPonte%20della%20Betenda!5e1!3m2!1sit!2sit!4v1713966911716!5m2!1sit!2sit"
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
