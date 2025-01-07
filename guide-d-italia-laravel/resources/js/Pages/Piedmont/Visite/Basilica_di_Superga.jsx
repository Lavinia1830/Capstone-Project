import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Basilica_di_Superga(props) {
  return (
    <>
        <Head title="Basilica di Superga"/>
        <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        >
            <main>
                <div className='basilica_di_superga' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Basilica di Superga</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">La Storia</h2>
                    <p>
                        Torino 1706. La città viene invasa dall’esercito Franco-Spagnolo di Luigi XIV e le milizie piemontesi, insieme alle truppe alleate austriache, si trovano in difficoltà. Il Duca Vittorio Amedeo II e il Principe 
                        Eugenio di Savoia-Soisson, che guidano l’esercito locale, salgono sul colle di Superga per osservare dall’alto il campo di battaglia.
                    </p>
                    <p>
                        In una piccola chiesa sul colle, davanti alla Statua della Madonna delle Grazie, il Duca fa un voto: se avesse vinto, avrebbe fatto costruire in quello stesso posto una grande chiesa in onore della Vergine. 
                        Dopo una dura battaglia l’esercito nemico viene sconfitto e la città liberata.<br/>
                        Vittorio Amedeo II fa fede al suo impegno, affidando la costruzione del Santuario all’architetto di Corte, Filippo Juvarra. Per realizzare il complesso sarà demolita la chiesa preesistente e abbassato il colle 
                        di quaranta metri.
                    </p>
                    <p>
                        Nel 1717 è posta la prima pietra del Santuario, mentre l’ inaugurazione avviene quattordici anni dopo, nel 1731.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">La Basilica</h2>
                    <p>
                        La Basilica di Superga nasce per volere del Duca Vittorio Amedeo II, a seguito di un voto fatto alla Madonna delle Grazie nel 1706, durante l’assedio dei Franco-Spagnoli in Piemonte.<br/>
                        La costruzione della Basilica si deve a Filippo Juvarra, architetto messinese di Casa Savoia.
                    </p>
                    <p>
                        Il complesso barocco, inaugurato nel 1731, è alto 75 metri, lungo 51 e si trova a 672 metri sul livello del mare.<br/>
                        Il suo interno è arricchito da sei cappelle e da quattro altari, oltre l’Altare Maggiore, con statue e monumenti in marmo di Carrara. <br/>
                        Di particolare interesse sono le numerose tele d’altare e la cupola, ispirata alle opere romane di Francesco Borromini. <br/>
                        Nella Cappella del Voto, all’interno della Basilica, è conservata la Statua in legno della Madonna delle Grazie del Seicento, la stessa a cui si rivolse Vittorio Amedeo II per vincere la battaglia.
                    </p>
                    <p>
                        Dal 1965 al 2021 il culto della Basilica è stato gestito dall’Ordine dei Servi di Maria. <br/>
                        Dal 2 agosto 2021 la gestione della Basilica è stata affidata al SERMIG Fraternità della Speranza, che ne cura le Celebrazioni e abita nel complesso.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3334.4826451338213!2d7.765139885886625!3d45.08066926374856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478873a28fdc93fb%3A0xe3eb01496fd2d3be!2sBasilica%20di%20Superga!5e1!3m2!1sit!2sit!4v1712586674610!5m2!1sit!2sit"
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
