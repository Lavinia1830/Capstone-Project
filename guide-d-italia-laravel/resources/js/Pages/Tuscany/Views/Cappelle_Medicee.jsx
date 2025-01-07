import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Cappelle_Medicee(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='cappelle_medicee' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Cappelle Madicee</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Può sembrare strano, ma le Cappelle Medicee, costruite per bilanciare la sagrestia del Brunelleschi dall’altra parte della chiesa, sono state separate dalla chiesa stessa per ragioni organizzative. I visitatori entrano dall’esterno, tramite un ingresso posteriore, invece che dall’interno ed è quindi 
                        difficile immaginarsi come le cappelle si inseriscano nel complesso dell’architettura della chiesa.
                    </p>
                    <p>
                        Il percorso museale della <b>Basilica di San Lorenzo</b> comprende la <b>Cappella dei Principi</b> e la Sagrestia Nuova, progettate da grandi artisti del Rinascimento. La <b>Cappella dei Principi</b> ospita nella sua cripta le sepolture della dinastia dei <b>Medici</b>, con una sala fastosa al piano 
                        superiore che ospita i cenotafi dei granduchi. Inoltre, la Cappella ospita il <b>tesoro di San Lorenzo</b>, costituito da reliquiari e altri arredi di pregio, tra cui capolavori di oreficeria rinascimentale e barocca. La <b>Sagrestia Nuova</b>, iniziata da Michelangelo nel 1521 e completata da Vasari, 
                        ospita le tombe di Lorenzo il Magnifico, di suo fratello Giuliano e di altri membri della famiglia Medici. Inoltre, la Sagrestia contiene statue che rappresentano il Giorno, la Notte, l’Aurora e il Crepuscolo.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1171.2261440470984!2d11.252505841817747!3d43.77523500697095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a540287d5f98f%3A0x728e1282dcf87170!2sCappelle%20Medicee!5e1!3m2!1sit!2sit!4v1713193611228!5m2!1sit!2sit"
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
