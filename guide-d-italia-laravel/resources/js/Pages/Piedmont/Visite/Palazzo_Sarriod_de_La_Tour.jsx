import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Palazzo_Sarriod_de_La_Tour(props) {
    return (
        <>
            <Head title="Palazzo Sarriod de La Tour"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='palazzo_sarriod_de_la_tour' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Palazzo Sarriod de La Tour</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Il <strong>Palazzo Sarriod de La Tour</strong> di <b>Saluzzo</b> è un edificio storico situato nel cuore del <b>centro storico</b> di 
                            Saluzzo, una città piemontese. La sua costruzione risale al <b>XV secolo</b>, durante il periodo di massimo splendore del <b>Marchesato 
                            di Saluzzo</b>. Il palazzo prende il nome dalla famiglia <b>Sarriod de La Tour</b>, un'importante dinastia nobiliare proveniente dalla 
                            Valle d'Aosta, che ne divenne proprietaria nel corso del <b>XVI secolo</b>.
                        </p>
                        <p>
                            L'edificio presenta uno stile architettonico tipicamente <b>rinascimentale</b>, caratterizzato 
                            da <b>facciate eleganti</b> e <b>decorazioni</b> raffinate. All'interno, si possono ammirare affreschi e decorazioni che testimoniano 
                            il gusto artistico dell'epoca. Il palazzo è stato anche sede di importanti eventi storici e incontri diplomatici.
                        </p>
                        <p>
                            Nel corso dei secoli, il Palazzo Sarriod de La Tour ha subito diversi <b>restauri</b> e <b>modifiche</b> per adattarsi alle esigenze 
                            dei suoi proprietari e alle mode del tempo. Oggi, il palazzo è considerato un'importante <b>attrazione turistica</b> e un simbolo 
                            della <b>storia</b> e della <b>cultura</b> di Saluzzo.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1872.2933268222312!2d7.484063683035004!3d44.5634017671828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cd46fc1d5a60ff%3A0xc9eeb3d3b5f438b4!2sPalazzo%20Sarriod%20de%20La%20Tour!5e1!3m2!1sit!2sit!4v1717078649436!5m2!1sit!2sit"
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
