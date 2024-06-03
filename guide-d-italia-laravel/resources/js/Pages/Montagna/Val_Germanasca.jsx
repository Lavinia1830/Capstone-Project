import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Val_Germanasca(props) {
    return (
        <>
        <Head title="Val Germanascas"/>
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='val_germanasca' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Val Germanasca</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        La <strong>Val Germanasca</strong> è una <b>valle</b> alpina situata nel Piemonte occidentale, in Italia. Ha una <b>storia</b> ricca e affascinante, 
                        strettamente legata alla comunità dei <b>Valdesi</b>. Durante il Medioevo, i Valdesi si stabilirono nella valle per sfuggire alle <b>persecuzioni 
                        religiose</b>. Essi seguivano una forma di <b>cristianesimo</b> alternativa che li portò a essere spesso in conflitto con le autorità religiose e 
                        politiche dell'epoca.
                    </p>
                    <p>
                        Nel corso dei secoli, la <b>valle</b> è stata teatro di numerose <b>battaglie</b> e <b>scontri</b>. Uno degli eventi più significativi fu 
                        la <b>Gloriosa Rimpatriata</b> del 1689, quando i Valdesi, guidati da Henri Arnaud, ritornarono in valle dopo essere stati esiliati. Questo evento 
                        è celebrato ancora oggi come simbolo di <b>resistenza</b> e <b>determinazione</b>.
                    </p>
                    <p>
                        Oltre alla sua storia religiosa, la Val Germanasca è nota per la sua <b>ricchezza mineraria</b>. La valle è stata un importante centro di <b>estrazione 
                        mineraria</b>, in particolare di <b>talco</b>, sin dal XIX secolo. Le miniere, oggi parzialmente dismesse, hanno contribuito notevolmente 
                        all'<b>economia locale</b>.
                    </p>
                    <p>
                        Attualmente, la Val Germanasca è una destinazione turistica che offre <b>panorami</b> mozzafiato e un <b>patrimonio culturale</b> unico. I visitatori 
                        possono esplorare le antiche <b>miniere</b>, visitare i musei dedicati alla storia dei Valdesi e godere della bellezza naturale della valle.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10227.239156604905!2d7.0580836311523445!3d44.915876008853424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4789d26956064f4d%3A0x6706b4e927792739!2sValle%20Germanasca!5e1!3m2!1sit!2sit!4v1716908907408!5m2!1sit!2sit"
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
