import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Basilica_di_San_Bernardino(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='basilica_di_san_bernardino' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Basilica di San Bernardino</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Venne costruita, con l'adiacente convento, fra il 1454 e il 1472 in onore di <b>san Bernardino da Siena</b>, le cui spoglie sono custodite all'interno del mausoleo del Santo realizzato a opera di Silvestro dell'Aquila. La facciata, eretta nel secolo successivo da Cola dell'Amatrice con influenze 
                        michelangiolesche, è considerata la massima espressione dell'architettura rinascimentale in Abruzzo.
                    </p>
                    <p>
                        L'interno, in stile barocco, è dovuto alla ricostruzione dell'edificio in seguito al terremoto del 1703 a opera di più progettisti, tra i quali sicuramente Filippo Barigioni, Sebastiano Cipriani e Giovan Battista Contini, e conserva importanti opere d'arte di Andrea della Robbia, Francesco Bedeschini, 
                        Pompeo Cesura, Rinaldo Fiammingo e Donato Teodoro, oltre al già citato Silvestro dell'Aquila, autore anche del mausoleo di Maria Pereyra Camponeschi. Il soffitto in legno intagliato e ornato di oro zecchino è opera di Ferdinando Mosca.
                    </p>
                    <p>
                        È stata inserita nell'elenco degli edifici monumentali nazionali nel 1902 ed elevata al rango di basilica minore, titolo che condivide con le concittadine San Giuseppe Artigiano e Santa Maria di Collemaggio, da papa Pio XII nel 1946. Dal 2014 il sito è gestito dal polo museale dell'Abruzzo.
                    </p>
                    <p>
                        A causa del sisma del 2009 che ne ha gravemente danneggiato l'abside e il campanile, la basilica è stata sottoposta a lavori di riparazione e consolidamento ed è stata riaperta nel 2015.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1467.3606185852761!2d13.40138829153835!3d42.35020708444338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132fd2fee44f7afd%3A0x5f1350bd30af3f34!2sBasilica%20di%20San%20Bernardino%20da%20Siena!5e1!3m2!1sit!2sit!4v1713281177852!5m2!1sit!2sit"
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
