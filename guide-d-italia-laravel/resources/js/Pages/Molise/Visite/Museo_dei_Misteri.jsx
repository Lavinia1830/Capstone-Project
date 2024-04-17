import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Museo_dei_Misteri(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='museo_dei_misteri' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Museo dei Misteri</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Il Museo, che conserva macchinari, abiti d’epoca e filmati che documentano la storica Processione dei Misteri, che si è tenuta per due secoli, si trova qui.
                    </p>
                    <p>
                        Il Museo è costituito da due sale espositive ed una sala proiezioni. Nella “Sala d’Ingresso” sono esposti alcuni costumi d’epoca insieme a fotografie, variamente datate, che ritraggono alcuni momenti salienti delle passate manifestazioni e cataloghi con i nomi dei personaggi 
                        più conosciuti che hanno animato la sfilata negli ultimi 40 anni. 
                    </p>
                    <p>
                        Il Museo è costituito da due sale espositive ed una sala proiezioni. Nella “Sala d’Ingresso” sono esposti alcuni costumi d’epoca insieme a fotografie, variamente datate, che ritraggono alcuni momenti salienti delle passate manifestazioni e cataloghi con i nomi dei personaggi 
                        più conosciuti che hanno animato la sfilata negli ultimi 40 anni. 
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1485.7033889845948!2d14.655300373366478!3d41.55844143823098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133a74cd71c44b37%3A0xb8102f52f5bc679d!2sMuseo%20dei%20Misteri!5e1!3m2!1sit!2sit!4v1713342040053!5m2!1sit!2sit"
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
