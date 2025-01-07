import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Duomo_di_Catanzaro(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='duomo_di_catanzaro' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Duomo di Catanzaro</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className='margin mt-3'>
                    <p>
                        La <b>Cattedrale di Santa Maria Assunta</b> è il <b>principale luogo di culto della città</b> e fu costruita nel XII secolo e restaurata in numerose occasioni. La prima chiesa, sulla quale oggi sorge il duomo, fu eretta nel 1121, in epoca normanna e fu dedicata a Santa Maria 
                        Assunta e agli Apostoli Pietro e Paolo. Nel 1309, fu invece costruita la cappella dedicata a Vitaliano, Santo Patrono della città, dove sono poste le sue reliquie. L’attuale architettura presenta tre bellissime porte in bronzo sulla facciata centrale e tre su quella laterale 
                        prospiciente piazza Duomo, mentre a destra si trova il campanile alto 42 metri e sormontato dalla statua in bronzo dell’Assunta.
                    </p>
                    <p>
                        All’interno si possono ammirare alcuni capolavori, come il dipinto Madonna degli Angeli con Bambino di scuola messinese, un busto del patrono della città S. Vitaliano e, nell’abside, una tela dell’Assunta del XVIII secolo.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1299.255042942308!2d16.591189122922916!3d38.905179981366906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13400700771cd371%3A0x7de888098b69c93a!2sCattedrale%20Santa%20Maria%20Assunta%20e%20dei%20Santi%20Pietro%20e%20Paolo!5e1!3m2!1sit!2sit!4v1713435741217!5m2!1sit!2sit"
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
