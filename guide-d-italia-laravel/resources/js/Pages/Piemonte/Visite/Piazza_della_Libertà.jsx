import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Piazza_della_Libertà(props) {
    return (
        <>
            <Head title="Piazza della Libertà"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='piazza_della_libertà' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Piazza della Libertà</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                        <div className="margin mt-3">
                        <p>
                            La <strong>Piazza della Libertà</strong> è il cuore della città di <b>Alessandria</b>. Originariamente, la piazza era conosciuta come <b>Piazza Vittorio 
                            Emanuele II</b> e solo successivamente, dopo la <b>Seconda Guerra Mondiale</b>, ha assunto il nome attuale. La piazza è il punto centrale della vita 
                            pubblica della città e ha una lunga storia che risale al <b>Medioevo</b>.
                        </p>
                        <p>
                            Durante il periodo medievale, Alessandria era una <b>fortezza</b> strategica, e la piazza serviva come luogo di mercato e spazio per le adunanze 
                            pubbliche. Nel corso dei secoli, la piazza è stata testimone di numerosi eventi storici e politici, diventando un simbolo della <b>resistenza</b> e 
                            dell'<b>identità</b> cittadina.
                        </p>
                        <p>
                            Uno degli elementi più caratteristici della Piazza della Libertà è il <b>monumento</b> a <b>Giuseppe Garibaldi</b>, eretto nel 1889 in onore dell'eroe 
                            dei due mondi. Il monumento è una tappa obbligata per i turisti e un punto di ritrovo per i cittadini di Alessandria.
                        </p>
                        <p>
                            Negli anni recenti, la piazza è stata oggetto di vari <b>progetti di riqualificazione</b>, volti a valorizzare il patrimonio storico e architettonico 
                            della città. Oggi, Piazza della Libertà ospita numerosi <b>eventi culturali</b>, <b>manifestazioni</b> e <b>mercati</b>, continuando a svolgere il 
                            ruolo di centro nevralgico della comunità alessandrina.
                        </p>
                        <p>
                            La <strong>Piazza della Libertà</strong> è dunque non solo un luogo di passaggio, ma un vero e proprio <b>simbolo</b> della storia e della cultura di 
                            Alessandria, che riflette le trasformazioni sociali e politiche avvenute nel corso dei secoli.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1278.460982336292!2d8.615074603573527!3d44.91335480947346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4787743e9f874329%3A0x5679739efa0d586b!2sPiazza%20della%20Libert%C3%A0%2C%2015121%20Alessandria%20AL!5e1!3m2!1sit!2sit!4v1718800874091!5m2!1sit!2sit"
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
