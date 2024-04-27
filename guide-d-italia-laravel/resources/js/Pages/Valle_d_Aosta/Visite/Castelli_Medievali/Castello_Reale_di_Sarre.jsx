import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Castello_Reale_di_Sarre(props) {
    return (
        <>
            <Head title="Castello Reale di Sarre"/> 
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='castello_reale_di_sarre' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Castello Reale di Sarre</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Il <strong>castello reale di Sarre</strong>, tra i simboli più riconoscibili della Valle d’Aosta, si affaccia sulla piana di Aosta dall’alto di un colle. Il corpo centrale della struttura è decorato in modo sobrio e armonico, sormontato al centro da una grande torre quadrangolare. 
                            Tutt’attorno si estendono i ripidi terrazzamenti agricoli tipici di questa parte di Alpi, spesso coltivati a vigna, ma altrettanto spesso occupati da frutteti capaci di regalare ottime mele e altri prodotti.
                        </p>
                        <p>
                            Il castello esisteva già dal XII-XIII secolo quando, nel 1869, il re dell’Italia unita <b>Vittorio Emanuele II</b> acquistò la sua proprietà, aggiungendo l’aggettivo reale al monumento. 
                        </p>
                        <p>
                            A Sarre la dinastia regnante dei Savoia veniva per trascorrere piacevoli periodi di <b>villeggiatura</b> e, soprattutto, per praticare la nobile arte della caccia. In memoria della forte tradizione che lega Sarre alla <b>pratica venatoria</b>, i re piemontesi fecero arredare quello 
                            che è oggi l’ambiente più sorprendente degli interni del castello: un grande salone alle cui pareti campeggiano decine di trofei di caccia. Tutto il castello è arredato con grande gusto: i visitatori possono ammirare ritratti, cimeli, fotografie e oggetti di ogni tipo appartenuti 
                            alla casata Savoia.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d693.9486938092078!2d7.250717320183481!3d45.71315138947151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47892176ce716071%3A0x7f43a315b04b32bb!2sCastello%20Reale%20di%20Sarre!5e1!3m2!1sit!2sit!4v1713797722836!5m2!1sit!2sit"
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
