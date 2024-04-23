import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Cattedrale_di_Aosta(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='cattedrale_di_aosta' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Cattedrale di Aosta</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        <strong>La Cattedrale di Aosta</strong> sorge su una primitiva costruzione romanica dei secoli XI-XII, di cui rimangono i due campanili absidali e, nel sottotetto, un importante ciclo di affreschi realizzato tra il 1030 e il 1040 e recuperato soltanto tra il 1986 e il 1991. La chiesa fu rinnovata a partire 
                        dal XV secolo. La facciata ha un bel prospetto architettonico, scultoreo e pittorico del 1526. L’interno, gotico, conserva <b>notevoli vetrate</b>, di fine Quattrocento e inizio Cinquecento, alcuni frammenti del <b>mosaico pavimentale</b> del XII-XIII secolo. Nella zona del presbiterio, si possono ammirare 
                        il <b>monumento sepolcrale di Tommaso II di Savoia</b>, di Stefano Mossettaz (prima metà del XV secolo) e in particolare il <b>coro ligneo intagliato</b> (1469-70). È al termine della navata destra che, attraverso una scale, si scende alla <b>cripta</b>, la cui parte più antica risale al IX secolo e in cui 
                        4 delle 10 colonne hanno capitelli longobardi e carolingi. Alle spalle del coro è stato allestito il <b>Museo del Tesoro della Cattedrale</b>, con una raccolta di importanti oggetti di culto provenienti da diverse chiese della diocesi. Sul fianco sinistro è il <b>chiostro della Cattedrale</b>, a pianta 
                        trapezoidale, la cui costruzione è iniziata nel 1442 dal savoiardo Pietro Berger, su un preesistente chiostro dell’XI secolo, ed è terminata nel 1460 sotto la guida dello scultore valdostano Marcello Gerard. 
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d801.3984177766781!2d7.317323015884917!3d45.73803681835809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478920b737e86aa9%3A0xcfe47ffcd7709d8e!2sCattedrale%20di%20Santa%20Maria%20Assunta%20e%20San%20Giovanni%20Battista%20-%20Aosta!5e1!3m2!1sit!2sit!4v1713862016219!5m2!1sit!2sit"
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
