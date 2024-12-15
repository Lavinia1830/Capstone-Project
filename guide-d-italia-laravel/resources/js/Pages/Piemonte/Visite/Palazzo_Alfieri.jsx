import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head  } from '@inertiajs/react';

export default function Palazzo_Alfieri(props) {
    return (
        <>
            <Head title="Palazzo Alfieri"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='palazzo_alfieri' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Palazzo Alfieri</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Il <strong>Palazzo Alfieri</strong> è uno dei più importanti edifici storici di <b>Asti</b>, situato nel cuore del <b>centro storico</b> della 
                            città. Costruito nel <b>XVIII secolo</b>, il palazzo è noto per essere la <b>casa natale</b> del celebre drammaturgo <b>Vittorio Alfieri</b>. La 
                            costruzione dell'edificio fu iniziata da <b>Benedetto Alfieri</b>, noto architetto di corte, che ne curò il progetto e la realizzazione.
                        </p>
                        <p>
                            Il palazzo presenta uno stile <b>barocco piemontese</b> ed è caratterizzato da una facciata imponente e decorata con <b>stucchi</b> e <b>bassorilievi</b>. 
                            All'interno, il palazzo conserva affreschi e arredi d'epoca, che testimoniano il <b>lusso</b> e la <b>raffinatezza</b> della dimora aristocratica.
                        </p>
                        <p>
                            Nel <b>XIX secolo</b>, il palazzo subì diversi <b>restauri</b> e modifiche, ma mantenne intatta la sua struttura originale. Nel corso del <b>XX secolo</b>, 
                            il Palazzo Alfieri fu acquisito dal <b>Comune di Asti</b>, che lo trasformò in un <b>museo</b> dedicato alla vita e alle opere di Vittorio Alfieri.
                        </p>
                        <p>
                            Oggi, il Palazzo Alfieri è una delle principali <b>attrazioni turistiche</b> di Asti, visitato da numerosi turisti e studiosi interessati alla storia 
                            della <b>letteratura italiana</b> e all'arte barocca. Il palazzo ospita anche eventi culturali, mostre e <b>conferenze</b>, continuando a essere un centro 
                            di <b>attività culturali</b> della città.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d904.2329344601183!2d8.197590191377353!3d44.89908090664793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4787932f6df87161%3A0x6b417fd5cc0f85ca!2sPalazzo%20Alfieri!5e1!3m2!1sit!2sit!4v1717061822295!5m2!1sit!2sit"
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
