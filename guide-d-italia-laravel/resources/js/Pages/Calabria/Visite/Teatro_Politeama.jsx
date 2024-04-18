import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Teatro_Politeama(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='teatro_politeama' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Teatro Politeama</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className='margin mt-3'>
                    <p>
                        Il <strong>Teatro Politeama</strong>, il più giovane tra i grandi teatri italiani, possiede una struttura che rispetta i canoni architettonici del teatro classico all’italiana, con il parterre che segue un movimento ondulatorio su una superficie quasi concava. Lungo la linea curva 
                        della sala, si affacciano i cinque ordini di palchi, decorati da stelle a sette punte quali simboli musicali. Il palcoscenico, con le sue ampie dimensioni e le sue dotazioni tecnologiche, <b>ospita artisti da tutto il mondo</b>, dalla grande lirica alla sinfonica, dalla danza 
                        all’operetta, dalla prosa al musical. Nella piazza dell’ingresso è possibile ammirare una fontana artistica disegnata dall’Architetto Portoghesi.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d867.1391236935459!2d16.59364715706673!3d38.905965467168826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134006f78506b661%3A0xd2bbdfb955851dcf!2sTeatro%20Politeama!5e1!3m2!1sit!2sit!4v1713441700355!5m2!1sit!2sit"
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
