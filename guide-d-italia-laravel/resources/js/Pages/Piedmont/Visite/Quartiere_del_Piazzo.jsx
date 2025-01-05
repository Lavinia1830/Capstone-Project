import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Quartiere_del_Piazzo(props) {
    return (
        <>
            <Head title="Quartiere del Piazzo"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='quartiere_del_piazzo' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Quartiere del Piazzo</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Il <strong>Piazzo</strong> è il <b>quartiere storico di Biella</b>, situato su un'altura che domina la città. Fondato nel <b>X secolo</b>, 
                            il Piazzo fu il centro del potere politico e amministrativo della città per molti secoli. Nel <b>Medioevo</b>, il Piazzo era protetto 
                            da <b>mura</b> e <b>torri</b>, ed era accessibile tramite <b>porte fortificate</b>.
                        </p>
                        <p>
                            Il <b>Borgo medievale</b> conserva ancora oggi numerosi <b>palazzi storici</b>, tra cui il <b>Palazzo La Marmora</b>, il <b>Palazzo Cisterna</b> e 
                            il <b>Palazzo Ferrero</b>, che testimoniano l'importanza della nobiltà biellese. Le <b>stradine acciottolate</b> e le <b>piazze</b> del Piazzo, 
                            come <b>Piazza Cisterna</b>, mantengono l'atmosfera del passato.
                        </p>
                        <p>
                            Il Piazzo fu anche un importante centro religioso, con edifici come la <b>Chiesa di San Giacomo</b> e la <b>Chiesa della Santissima Trinità</b>. 
                            Nel corso del tempo, il quartiere ha subito <b>ristrutturazioni</b> e <b>restauri</b> per preservare il suo <b>patrimonio architettonico</b> e <b>culturale</b>.
                        </p>
                        <p>
                            Oggi, il Piazzo è un luogo di <b>interesse turistico</b> e <b>culturale</b>, sede di eventi e manifestazioni che celebrano la <b>storia</b> e 
                            le <b>tradizioni</b> di Biella.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7871.371599867781!2d8.038361167410068!3d45.56891082653184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478620eb8363e3b1%3A0x249a38e5e44096cb!2sPiazzo%2C%2013900%20Biella%20BI!5e1!3m2!1sit!2sit!4v1716278124683!5m2!1sit!2sit"
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
