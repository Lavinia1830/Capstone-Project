import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Castello_di_Castellar(props) {
    return (
        <>
            <Head title="Castello di Castellar"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='castello_di_castellar' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Castello di Castellar</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Il <strong>Castello di Castellar</strong>, situato vicino a <b>Saluzzo</b> nel <b>Piemonte</b>, ha una <b>storia ricca</b> e 
                            affascinante che risale al <b>Medioevo</b>. Fu costruito nel <b>XIII secolo</b> come <b>fortezza</b> difensiva per 
                            proteggere il <b>territorio</b> di <b>Saluzzo</b>.
                        </p>
                        <p>
                            Nel corso dei secoli, il <b>castello</b> ha subito numerosi <b>attacchi</b> e <b>assedii</b>, ma ha sempre mantenuto la 
                            sua <b>importanza</b> strategica. Durante il <b>Rinascimento</b>, il <b>castello</b> fu trasformato in una <b>residenza 
                            nobiliare</b> e abbellito con <b>affreschi</b> e <b>decorazioni</b>.
                        </p>
                        <p>
                            Nel <b>XVII secolo</b>, il <strong>Castello di Castellar</strong> passò nelle mani di diverse <b>famiglie nobili</b>, che 
                            contribuirono alla sua <b>espansione</b> e <b>modernizzazione</b>. Fu durante questo <b>periodo</b> che il <b>castello</b> acquisì 
                            molti dei suoi <b>elementi architettonici </b>distintivi, come le <b>torri</b> e il <b>cortile interno</b>.
                        </p>
                        <p>
                            Oggi, il <strong>Castello di Castellar</strong> è una <b>meta turistica</b> molto apprezzata, grazie alla sua <b>architettura 
                            storica</b> e ai <b>panorami mozzafiato</b> sulle <b>colline</b> circostanti. È anche sede di numerosi <b>eventi 
                            culturali</b> e <b>manifestazioni storiche</b> che attraggono visitatori da tutto il mondo.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2160.9763921105286!2d7.436354181984155!3d44.622074310566845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cd492d97ec6893%3A0xd9cbe28de6479686!2sCastello%20di%20Castellar!5e1!3m2!1sit!2sit!4v1717070687254!5m2!1sit!2sit"
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
