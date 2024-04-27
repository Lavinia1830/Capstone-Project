import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/inertia-react';

export default function Prato_di_Sant_Orso(props) {
    return (
        <>
            <Head title="Prato di Sant'Orso"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='prato_di_sant_orso' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Prato di Sant Orso</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            <b>Il prato di Sant’Orso è quel terreno che si narra sia stato bonificato da Sant’Orso dalla presenza di un fitto bosco abitato da animali feroci</b>, prima che venisse costituito l’agglomerato di Cogne.
                        </p>
                        <p>
                            Quest’ampia distesa, insignita del <b>riconoscimento <i>Meraviglia d’Italia</i></b>, gode di <b>un bellissimo panorama sulle cime del Gran Paradiso</b>. Questo vasto prato, in cui puoi fare suggestive passeggiate al tramonto, è protetto e il regolamento comunale ha posto un divieto di 
                            costruzione.
                        </p>
                        <p>
                            <b>Il Prato di Sant’Orso è una distesa di quasi 50 ettari di verde</b>, che la rendono <b>una delle più ampie di tutto l’arco alpino. Durante l’inverno questo spazio diventa una gigante pista per gli sci di fondo</b>, mentre in estate è un luogo rigenerante per le persone e risorsa 
                            preziosa per generare il fieno per le mandrie.
                        </p>
                        <p>
                            Purtroppo <b>il prato di Sant’Orso ospita anche la <i>Bataille de reines</i></b>, ovvero la <b>battaglia delle regine</b>, una manifestazione che si svolge in Francia, Svizzera, in Piemonte e Valle d’Aosta, in cui si fanno combattere delle vacche gravide. L'”obiettivo” è eleggere 
                            la <b>Reina di corne</b>, ovvero la <b>regina delle corna</b>. In Valle d’Aosta vengono fatte combattere le vacche valdostane pezzate nere e le valdostane pezzate rosse.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2522.1505969384475!2d7.347823056066897!3d45.608974367783084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4788e16d03ae0d5d%3A0x4af134f97d06cb91!2sPrato%20di%20Sant%E2%80%99Orso!5e1!3m2!1sit!2sit!4v1714211580180!5m2!1sit!2sit"
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
