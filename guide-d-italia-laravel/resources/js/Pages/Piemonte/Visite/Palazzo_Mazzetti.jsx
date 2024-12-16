import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Palazzo_Mazzetti(props) {
    return (
        <>
            <Head title="Palazzo Mazzetti"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='palazzo_mazzetti' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Palazzo Mazzetti</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Il <b>Palazzo Mazzetti</b> è uno dei più importanti <b>edifici storici</b> della città di <b>Asti</b>, situato in <b>Corso Alfieri</b>. La sua costruzione 
                            risale al <b>XVII secolo</b>, e il palazzo è stato la <b>residenza</b> di una delle famiglie più <b>influenti</b> della città, i <b>Mazzetti</b>.
                        </p>
                        <p>
                            Il palazzo fu eretto per volere di <b>Giovanni Battista Mazzetti</b>, che volle realizzare un'opera monumentale degna del suo status. La famiglia Mazzetti 
                            era conosciuta per il suo ruolo di primo piano nella vita <b>politica</b> e <b>culturale</b> di Asti. Nel corso degli anni, il palazzo subì varie modifiche 
                            e ampliamenti, soprattutto nel <b>XVIII secolo</b>, quando divenne un simbolo di <b>prestigio</b> e <b>potere</b>.
                        </p>
                        <p>
                            <b>Architetti</b> e <b>artisti</b> di grande fama furono coinvolti nella decorazione degli interni del palazzo, che oggi è un esempio perfetto del <b>barocco 
                            piemontese</b>. Le sale del palazzo sono riccamente decorate con <b>affreschi</b>, <b>stucchi</b> e <b>mobili d'epoca</b>, che testimoniano la grandezza e la 
                            raffinatezza del luogo.
                        </p>
                        <p>
                            Nel corso del <b>XX secolo</b>, il palazzo passò attraverso vari proprietari e fu utilizzato per diversi scopi, fino a diventare una <b>sede museale</b>. Oggi, 
                            il Palazzo Mazzetti ospita il <b>Museo Civico</b> di Asti, dove sono esposte importanti collezioni di <b>arte</b> e <b>archeologia</b>.
                        </p>
                        <p>
                            Il palazzo non è solo un'attrazione turistica, ma anche un centro culturale vivace che ospita mostre, eventi e attività educative. Il suo <b>restauro</b>, 
                            completato negli ultimi decenni, ha permesso di recuperare e valorizzare un patrimonio di inestimabile valore per la città di Asti e per l'intero Piemonte.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d639.3848774140569!2d8.200168571064523!3d44.899473192585624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478793259ff82ce3%3A0x9c9a5a3fafc2b725!2sPalazzo%20Mazzetti!5e1!3m2!1sit!2sit!4v1717063462656!5m2!1sit!2sit"
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
