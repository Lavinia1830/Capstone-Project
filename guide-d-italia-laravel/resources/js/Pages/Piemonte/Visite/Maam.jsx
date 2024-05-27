import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Maam(props) {
    return (
        <>
            <Head title="Museo a cielo aperto dell'architettura moderna di Ivrea"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='maam' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Museo a cielo aperto dell'architettura moderna</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            <b>Ivrea</b> è famosa per il suo '<strong>Museo a cielo aperto dell'architettura moderna</strong>, un'area che mette in mostra 
                            un'eccezionale collezione di edifici progettati durante il <b>XX secolo</b>. Questo museo è strettamente legato alla storia 
                            della <b>Olivetti</b>, l'azienda di macchine da scrivere e calcolatori che ha avuto un ruolo fondamentale nella trasformazione 
                            urbanistica e architettonica della città.
                        </p>
                        <p>
                            La fondazione del museo risale agli anni '50, quando <b>Adriano Olivetti</b>, allora a capo dell'azienda, decise di promuovere 
                            un ambiente di lavoro e di vita che fosse innovativo e a misura d'uomo. Gli edifici progettati in questo periodo sono opera di 
                            alcuni tra i più importanti architetti e urbanisti del tempo, come <b>Luigi Figini</b>, <b>Gino Pollini</b>, <b>Marco 
                            Zanuso</b> e <b>Edoardo Vittoria</b>.
                        </p>
                        <p>
                            Il museo include una serie di strutture che riflettono i principi dell'architettura moderna, come la <b>Fabbrica Olivetti</b> e 
                            gli edifici residenziali per i dipendenti. Queste opere sono caratterizzate da un'attenzione particolare alla <b>funzionalità</b>, 
                            all'<b>estetica</b> e al <b>benessere</b> dei lavoratori.
                        </p>
                        <p>
                            Nel <b>2018</b>, il <strong>Museo a cielo aperto dell'architettura moderna di Ivrea</strong> è stato riconosciuto come <b>Patrimonio 
                            Mondiale dell'UNESCO</b>, un riconoscimento che sottolinea l'importanza e l'unicità del complesso architettonico e urbanistico 
                            della città.
                        </p>
                        <p>
                            Oggi, il museo è una destinazione turistica di rilievo, attrattiva per appassionati di architettura e storia dell'industria, 
                            offrendo percorsi di visita che permettono di esplorare e comprendere l'evoluzione architettonica e sociale di Ivrea.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1790.760800495847!2d7.873130254236561!3d45.45925296037423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478884bf362d417b%3A0xff40f908f4119c97!2sMuseo%20A%20Cielo%20Aperto%20Dell&#39;Architettura%20Moderna%20Di%20Ivrea!5e1!3m2!1sit!2sit!4v1716807767748!5m2!1sit!2sit"
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
