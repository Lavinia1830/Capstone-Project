import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Cattedrale_di_S_Maria_Assunta(props) {
    return (
        <>
            <Head title="Cattedrale di Santa Maria Assunta"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='cattedrale_di_s_maria_assunta' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Cattedrale di Santa Maria Assunta</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            La <strong>Cattedrale di S. Maria Assunta</strong> ad <b>Asti</b> è una delle chiese più importanti del Piemonte e una delle più 
                            grandi d'Italia. La sua storia risale all'<b>epoca romana</b> quando sul sito dell'attuale cattedrale sorgeva una <b>basilica 
                            paleocristiana</b>. La cattedrale attuale, in stile <b>gotico</b>, è stata costruita tra il <b>1295</b> e il <b>1470</b>, 
                            sostituendo un edificio precedente di epoca romanica.
                        </p>
                        <p>
                            L'interno della cattedrale è particolarmente notevole per i suoi <b>affreschi</b> e le <b>vetrate</b>. Uno degli elementi più 
                            importanti è il <b>ciclo di affreschi</b> del <b>quattrocento</b> che decora il coro, attribuito a <b>Secondo d'Asti</b>. 
                            Le <b>vetrate colorate</b> sono tra le più belle del Piemonte e risalgono anch'esse al XIV secolo.
                        </p>
                        <p>
                            Tra gli elementi di rilievo della cattedrale vi sono anche la <b>cripta</b> di epoca romanica e il <b>campanile</b> gotico. 
                            La cripta contiene resti di <b>mosaici</b> e altre opere d'arte di notevole importanza storica. Il campanile, costruito 
                            nel <b>XIV secolo</b>, domina lo skyline della città.
                        </p>
                        <p>
                            La Cattedrale di S. Maria Assunta è stata anche oggetto di diversi <b>restauri</b> nel corso dei secoli, l'ultimo dei quali 
                            si è concluso nel <b>2003</b>, per preservare e valorizzare il suo immenso patrimonio artistico e storico.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d639.3936945412505!2d8.1944256!3d44.8986803!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4787932fb98ddd1d%3A0x8840cc7be2f0001!2sCattedrale%20di%20Asti!5e1!3m2!1sit!2sit!4v1717321995974!5m2!1sit!2sit"
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
