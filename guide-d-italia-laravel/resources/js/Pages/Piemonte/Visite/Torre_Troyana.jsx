import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Torre_Troyana(props) {
    return (
        <>
            <Head title="Torre Troyana"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='torre_troyana' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Torre Troyana</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            La <strong>Torre Troyana</strong>, situata nel centro storico di <b>Asti</b>, è uno degli edifici più rappresentativi della città. 
                            Questa <b>torre medievale</b> fu costruita nel <b>XIII secolo</b> e faceva parte del <b>complesso di fortificazioni</b> che 
                            caratterizzava Asti durante il Medioevo. La sua <b>struttura</b> in <b>mattoni</b> e la sua <b>altezza</b> di circa <b>44 metri</b> la 
                            rendono uno dei punti panoramici più affascinanti della città.
                        </p>
                        <p>
                            La <b>Torre</b> deve il suo nome alla <b>famiglia Troyana</b>, una delle più influenti famiglie nobili astigiane dell'epoca. La 
                            costruzione della torre aveva lo scopo di dimostrare il <b>potere</b> e il <b>prestigio</b> della famiglia, nonché di fungere 
                            da <b>punto di osservazione</b> e <b>difesa</b>.
                        </p>
                        <p>
                            Nel corso dei secoli, la <strong>Torre Troyana</strong> ha subito vari <b>restauri</b> e <b>modifiche</b>, ma ha mantenuto il suo 
                            aspetto imponente e la sua importanza storica. Oggi, è possibile visitare la torre e salire fino alla cima, da dove si può godere di 
                            una vista spettacolare sulla città e sui <b>paesaggi circostanti</b>.
                        </p>
                        <p>
                            La <strong>Torre Troyana</strong> rappresenta un'importante testimonianza del <b>passato medievale</b> di Asti e continua a essere un 
                            simbolo del <b>patrimonio culturale</b> della città.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1075.2874333973784!2d8.203384740842726!3d44.90083502856398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47879324bbc4147f%3A0xfb66846e6230b346!2sTorre%20Troiana%20o%20dell&#39;Orologio!5e1!3m2!1sit!2sit!4v1717577976571!5m2!1sit!2sit"
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
