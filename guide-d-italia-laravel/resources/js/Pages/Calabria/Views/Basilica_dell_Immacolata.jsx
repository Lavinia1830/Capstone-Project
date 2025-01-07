import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Basilica_dell_Immacolata(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='basilica_dell_immacolata' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Basilica dell'Immacolata</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className='margin mt-3'>
                    <p>
                        La <strong>Basilica dell’Immacolata</strong> fu edificata nel 1254 nel cuore della città e, nel corso del tempo, ha subito profondi lavori di ampliamento che hanno contribuito a designare l’aspetto attuale. L’interno ospita diverse cappelle, ciascuna delle quali appartenente a nobili famiglie cittadine che le hanno abbellite 
                        con <b>altari in marmi policromi e stucchi</b>. Tra le opere d’arte presenti si possono ammirare la statua lignea di San Rocco di manifattura napoletana del secolo XVIII e le statue lignee settecentesche di San Giuseppe, dell’Addolorata, San Michele e S. Alfonso, provenienti dalla soppressa Chiesa di Santa Caterina.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d945.5996170130489!2d16.591373691307993!3d38.90763833749873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134006f86f198fa5%3A0x95f820be34c3d622!2sSantuario%20Basilica%20Minore%20di%20Maria%20SS.%20Immacolata!5e1!3m2!1sit!2sit!4v1713435990687!5m2!1sit!2sit"
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
    )
}
