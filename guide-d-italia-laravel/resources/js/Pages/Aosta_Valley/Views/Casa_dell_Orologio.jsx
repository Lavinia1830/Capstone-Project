import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Casa_dell_Orologio(props) {
    return (
        <>
            <Head title="Casa del'Orologio"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='casa_dell_orologio' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Casa dell'Orologio</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Altra tappa nell’itinerario delle cose da vedere in centro a Cogne è la già nominata <strong>Casa dell’Orologio</strong>. Questo palazzo, in pieno centro, non gode di ottima salute e mostra tutti i suoi anni. <b>Risale al settecento e mostra chiaramente una differenza rispetto 
                            lo stile architettonico in voga ai tempi</b>. Anche le decorazioni esterne tradivano un uso più nobiliare che paesano.
                        </p>
                        <p>
                            <strong>La Casa dell’Orologio</strong> <b>è anche nota come <i>casa del dottor Grappein</i></b>, il medico filantropo che si occupò della fontana di Ferro e che organizzò la gestione comunitaria della miniera di ferro di Liconi. Il costruttore fu suo nonno, Jean-Pantaléon Grappein, 
                            che la fece erigere nel 1767. Le sue pessime condizioni di conservazione hanno fatto emergere a sinistra del portone d’ingresso un arco in pietra di tufo lavorato. Questo contornava l’ampio ingresso di una precedente casa rustica. Ingresso poi murato nel rifacimento del Grappein.
                        </p>
                        <p>
                            Grappein, nel 1804, tornato dall’università di Torino, fece reintonacare la casa e modificare la sua decorazione. In quell’occasione <b>aggiunse anche i due orologi sui muri esterni</b> che valsero all’edificio il nome di Casa dell’Orologio. L’orologio posto a sud era inoltre 
                            decorato con frasi in latino.
                        </p>
                        <p>
                            Gli interni della Casa dell’Orologio sono caratterizzati da un lungo corridoio che attraversa l’intero edificio, decorato con voltini a crociera. In tre stanze sono presenti altrettanti focolari che sfiatavano dai due comignoli in pietra lavorati. Il secondo piano è caratterizzato 
                            da ampi soffitti in legno. Chiude l’edificio l’alto sottotetto con capriate a quattro spioventi ottenute con tronchi di larice che creano l’effetto di una fitta selva
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d630.5452414625507!2d7.356264760762751!3d45.60829898378526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4788e172f30e237d%3A0x410319763474ae56!2sCasa%20del%20dottor%20Grappein%20o%20dell&#39;Orologio!5e1!3m2!1sit!2sit!4v1714214369774!5m2!1sit!2sit"
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
