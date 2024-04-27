import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/inertia-react';

export default function Casa_dei_Pizzi(props) {
    return (
        <>
            <Head title="Casa dei Pizzi"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='casa_dei_pizzi' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Casa dei Pizzi</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Davanti alla chiesa di Sant’Orso puoi vedere <strogn>la Casa dei Pizzi</strogn>. Qui aveva sede <b>un’istituzione si occupava di supportare le comunità</b> ed era guidata da uno spirito religioso fondato dalla Confraternita del Santo Spirito. Già esistente in epova medievale, si è sempre riunito all’interno di questo 
                            edificio. <b>L’associazione della Confraternita del Santo Spirito si occupava principalmente di opere caritatevoli</b>, distribuendo pane, vino e cibo ai poveri, soprattutto in occasione della Pentecoste e della festività del Corpus Domini.
                        </p>
                        <p>
                            <b>L’edificio ha subìto importanti opere di rifacimento durante il settecento</b>, periodo al quale risalgono gli spessi muri e le volte interno al pian terreno. Nel 1757 la Casa dei Pizzi fu infatti completamente ricostruita e il piano superiore fu adibito ad Hospice, per ospitare i cappuccini di Aosta che giungevano periodicamente a Cogne 
                            per predicare e confessare gli abitanti della città.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <p className="fw-bold">
                            Le sei finestre presenti su di un lato della Casa dei Pizzi corrispondevano alle sei stanze dei frati cappuccini.
                        </p>
                        <p>
                            Nell’ottocento l’edificio cambiò destinazione e <b>diventò la casa del Comune</b> che qui faceva riunire il suo consiglio. Poi fu impiegato anche come scuola fino alla fine dell’ottocento e successivamente utilizzato come caserma dei carabinieri.
                        </p>
                        <p>
                            <b>Verso il 1985 il palazzo fu restaurato e divenne la Casa dei Pizzi</b>. Questa <b>ospita al suo interno una mostra permanente del pizzo a tombolo</b>. Il motivo è che a Cogne c’è una lunga tradizione di quest’arte nata nel 1665 grazie alle monache benedettine che si insediarono qui e diedero vita ai merletti di Cogne, insegnando alle 
                            donne del luogo l’arte del pizzo a tombolo. Arte che si è poi tramandata di madre in figlia fino ai giorni nostri.
                        </p>
                        <p>
                            Oggi a Cogne c’è una cooperativa di circa 40 merlettaie che ogni anno producono circa 1500 metri di pizzo molto ricercato.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d315.2638234738702!2d7.355642618688061!3d45.6098641321872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4788e173541f51d1%3A0x726764d749dbd67!2sLes%20Dentelli%C3%A8res%20de%20Cogne!5e1!3m2!1sit!2sit!4v1714151879269!5m2!1sit!2sit"
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
