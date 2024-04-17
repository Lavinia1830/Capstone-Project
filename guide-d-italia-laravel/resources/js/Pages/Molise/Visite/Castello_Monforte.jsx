import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Castello_Monforte(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='castello_monforte' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Castello Monforte</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Il <strong>castello Monforte</strong>, dichiarato monumento nazionale e considerato un simbolo per Campobasso, porta il nome del conte Nicola II Monforte, appartenente alla famiglia Monforte-Gambatesa. La sua ristrutturazione risale al 1458, a seguito della devastazione causata dal terremoto del 1456.
                    </p>
                    <p>
                        Il castello è posto sulla cima del monte che sovrasta Campobasso, l'edificio si presenta come un massiccio quadrilatero con ingresso principale, ora non più utilizzato, rivolto verso la città sottostante. Ci sono tracce del ponte levatoio e delle torri laterali poste a difesa. Le finestre, poche e 
                        quadrate, sono piccole tanto che si confondono con le feritoie. Svetta in alto una grande torre rettangolare che attualmente ospita la Stazione meteorologica di Campobasso dell'Aeronautica Militare, questa essendo posta a 808 m s.l.m. è una delle più alte d'Italia. Alla sommità delle mura vi è una 
                        lunga sequenza di merli guelfi. Al di sopra dell'attuale ingresso, prospiciente un ampio piazzale, vi è lo stemma dei Monforte composto da una croce contornata da quattro rose.
                    </p>
                    <p>
                        L'interno del castello è molto scarno; salendo la spoglia gradinata si arriva sulla terrazza dalla quale si ammira un panorama ampio e suggestivo: si vedono i resti delle mura osco-sannite, la struttura a ventaglio del borgo antico, la città di Campobasso e i tanti paesini intorno. Lo sguardo spazia 
                        dalle valli dei fiumi Biferno, Trigno e Fortore, ai monti dell'Abruzzo, con la splendida Majella, dalle verdi montagne dell'Alto Molise fino alle gialle colline della Puglia e perfino il mare Adriatico, distante circa 60 km. Interessanti sono i sotterranei del castello, che coprono un'area pari a quella 
                        in superficie. La destinazione dell'area dei sotterranei è sconosciuta, ma si è ipotizzato che possa essere stata un deposito di cisterne, o galera, o ancora un rifugio durante le battaglie. Attualmente ospita delle riserve d'acqua che servono l'acquedotto civico. È stata sicuramente una prigione, 
                        invece, il locale posto nelle segrete, alle quali si può accedere passando per una torretta.
                    </p>
                    <p>
                        A causa del sisma del 2009 che ne ha gravemente danneggiato l'abside e il campanile, la basilica è stata sottoposta a lavori di riparazione e consolidamento ed è stata riaperta nel 2015.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4996.930940972395!2d14.652322875271883!3d41.56309276819657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133a74d39cc960fd%3A0x8f25bae4b3895141!2sCastello%20Monforte!5e1!3m2!1sit!2sit!4v1713341786812!5m2!1sit!2sit"
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
    )
}
