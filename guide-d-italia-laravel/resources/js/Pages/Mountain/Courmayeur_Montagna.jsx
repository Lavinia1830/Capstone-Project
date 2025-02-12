import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Courmayeur_Montagna(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='courmayeur_montagna' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Courmayeur Montagna</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Impianti di risalita moderni e funzionali, comprensori sciistici per oltre 100 km di divertimento sulla neve, uno scenario esclusivo che ha pochi eguali sull’arco alpino: Courmayeur, la “perla delle Alpi”, lega indissolubilmente il suo nome al Monte Bianco e da oltre 200 anni 
                        brilla al cospetto della montagna più alta d’Europa che a buon diritto l’ha resa una fra le stazioni di montagna più rinomate al mondo. Adagiata in un’ampia conca a 1224 metri di altitudine, Courmayeur è l'ultimo comune italiano che si incontra prima di arrivare in Francia 
                        tramite il Traforo del Monte Bianco: una moderna città alpina, sviluppatasi attorno all’antica chiesa dei Santi Pantaleone e Valentino, che oggi ha il suo cuore commerciale e mondano nella centrale via Roma. Nata turisticamente alla fine del Seicento come stazione termale per le 
                        virtù delle sue acque minerali, conferma in ogni momento dell’anno la sua lunga tradizione di ospitalità, con strutture ricettive di primo ordine e un’offerta molteplice di sport praticabili nelle sue valli Ferret e Veny sullo sfondo di scenari impagabili. Amata da escursionisti e 
                        appassionati di montagna tanto d’inverno che d’estate, è conosciuta come la più famosa e antica stazione alpina italiana: se ne trova testimonianza negli storici cimeli della Casa delle Guide, sede del Museo Alpino Duca degli Abruzzi. Memoria della sua antica vocazione di comunità 
                        agricola è invece la festa della Badoche, folcloristica manifestazione legata ai riti iniziatici del maggio, che oggi accomuna le celebrazioni del santo patrono in tutti i comuni della Valdigne.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15679.41037474715!2d6.9600626439985644!3d45.79444375381524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478947729b2f6723%3A0xff6888e61dfb8dea!2s11013%20Courmayeur%20AO!5e1!3m2!1sit!2sit!4v1713876410818!5m2!1sit!2sit"
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
