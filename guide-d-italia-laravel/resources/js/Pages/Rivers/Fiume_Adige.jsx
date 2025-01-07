import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Fiume_Adige(props) {
    return (
        <>
            <Head title="Fiume Adige"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='fiume_adige' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Monte Bondone</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            In un bosco sopra il paese di Resia (Reschen) in Val Venosta, a 1.550 m di altitudine, nasce il fiume Adige (Etsch). Con una lunghezza di ben 415 km, rappresenta il secondo fiume per lunghezza in Italia dopo il Po, e quello più lungo dell’Alto Adige. Nel primo tratto 
                            l’Adige attraversa il Lago di Resia e il Lago di San Valentino alla Muta in Val Venosta, per arrivare poi nella conca meranese, dove si unisce col Passirio. L’Adige continua il suo corso fino al capoluogo della regione, Bolzano, dove confluisce con l’Isarco e si dirige 
                            verso sud.
                        </p>
                        <p>
                            In passato, da questo punto in poi l’Adige era considerato navigabile: lungo il fiume si snodava anche una delle principali vie commerciali tra il freddo nord e il soleggiato sud. L’Adige, dopo aver continuato il suo viaggio attraverso l’Oltradige, la Bassa Atesina e il 
                            paese più a sud dell’Alto Adige, Salorno, continua fino a Verona e arriva infine al posto, dove tanti altoatesini passano le loro vacanze: al mare Adriatico, dove l’Adige delimita il Delta del Po verso nord.
                        </p>
                        <p>
                            La qualità dell’acqua varia tra la prima classe (tra San Valentino alla Muta e Glorenza) e la terza classe (prima di Merano). Dal 1869 in poi, l’Adige venne regolato, mentre negli ultimi anni il fiume è stato renaturalizzato. Il pericolo di inondazioni portò alla costruzione 
                            di una galleria di ben 10 km nella parte settentrionale del Trentino negli anni ‘50, la Galleria Adige-Garda, che consente a parte delle acque del fiume Adige di defluire nel Lago di Garda. A proposito: la Ciclabile dell’Adige che porta da Resia a Verona, segue in gran parte 
                            il corso del fiume. Il giro può essere diviso in più tappe, visto che la ciclabile passa da tanti paesi lungo la linea ferroviaria. Il fiume ha ispirato anche diversi compositori, come Felice Carena con il suo valzer “I segreti dell’Adige” (1932).
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d421923.1717422241!2d10.811099584263602!3d45.99471039606555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4778be9a4079fbb3%3A0x74119df32cd11847!2sAdige!5e0!3m2!1sit!2sit!4v1712932809057!5m2!1sit!2sit"
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
