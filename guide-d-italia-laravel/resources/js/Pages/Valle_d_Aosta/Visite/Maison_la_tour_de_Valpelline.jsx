import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/inertia-react';

export default function Maison_la_tour_de_Valpelline(props) {
    return (
        <>
            <Head title="Maison la tour de Valpelline"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='maison_la_tour_de_valpelline' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Maison la tour de Valpelline</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            La casa è stata costruita intorno all'anno 1100 circa, ingrandita e ristrutturata in diverse epoche. Fu il luogo di nascita del Canonico della Cattedrale di Aosta, Rodolfo di Valpelline, diventato in seguito Vescovo di Sion. Appartenuta al Conte di Savoia, 
                            successivamente diventò tribunale della comunità, frutteto, scuderia e granaio dei Signori di Quart, prendendo così il nome di Sala del Signore. Fu per circa 400 anni (1449-1800) la sede della confraternita del Santo Spirito, associazione che faceva fronte 
                            ai bisogni spirituali e temporali del popolo. Con la caduta del regime feudale la Confraternita venne abolita e le sue rendite vennero destinate all'istruzione elementare, mentre la Sala venne abitata dalla famiglia Ansermin.
                        </p>
                        <p>
                            I prospetti est ed ovest, in modo particolare, rivelano una struttura murale medioevale. L'attuale aspetto risale al 1709, come si legge nell'incisione dell'architrave d'ingresso. La costruzione comprende sei cantine interrate, in una delle quali si dice siano 
                            stati rinvenuti dei resti umani e dei ceppi che sarebbero serviti ad incatenare chi vi era rinchiuso. La casa è inoltre costituita da sedici stanze e da un sottotetto. Nelle vicinanze della casa forte c'è una bella fontana rettangolare che risale al 1782, 
                            realizzata con quattro lastre di granito.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d282.89187169427703!2d7.325493500423305!3d45.82571989843621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4789287739bc964f%3A0x1fb8af2e31144e41!2sCasaforte%20La%20Tour%20de%20Valpelline!5e1!3m2!1sit!2sit!4v1713966073402!5m2!1sit!2sit"
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
