import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/inertia-react';

export default function Torre_di_Bramafam(props) {
    return (
        <>
            <Head title="Torre di Bramafam"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='torre_di_bramafam' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Torre di Bramafam</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            La Torre di Bramafam si trova all’angolo tra via Bramafam e viale G. Carducci, lungo il lato meridionale della <b>mura romane</b>.<br/>
                            Denominato Castello di Bramafam, ma comunemente designato come torre, il monumento mostra un <b>bastione a pianta circolare</b>, alla cui base sono ancora <b>visibili i muri romani e parte della torre</b> che fiancheggiava la Porta Principalis Dextera, su cui 
                            fu <b>innnalzato intorno al XII-XIII secolo</b>.<br/>
                            Inizialmente la torre fu proprietà dei nobili di Challant che, con la carica di visconti di Aosta, controllavano tutta la cinta sud-occidentale delle mura e che, dopo aver ricevuto nel 1295 il feudo della valle di Challand, divennero la più importante famiglia 
                            nobiliare della Valle d’Aosta.<br/>
                            La casa forte passò successivamente nelle mani del Conte di Savoia.<br/>
                            Nel corso dei secoli successivi subì <b>ulteriori vari passaggi di proprietà</b>, perdendo la sua importanza rappresentativa ed amministrativa, fino a subire l’<b>bbandono definitivo nel XVI secolo</b>a.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d981.0299386158883!2d7.317949895570987!3d45.73374627019899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478921cd795332f9%3A0x1a7ffd7c7e840501!2sTorre%20Bramafam!5e1!3m2!1sit!2sit!4v1713854822382!5m2!1sit!2sit"
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
