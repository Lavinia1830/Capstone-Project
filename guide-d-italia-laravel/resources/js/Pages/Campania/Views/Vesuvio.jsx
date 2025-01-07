import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Vesuvio(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='vesuvio' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Vesuvio</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Un vulcano tutto da scoprire tra vigneti Doc, trekking e siti archeologici</h2>
                    <p>
                        Simbolo della città di <b>Napoli</b>, il <strong>Vesuvio</strong> è uno dei più importanti vulcani attivi – o, per la precisione, quiescenti - dell'Europa continentale e uno dei più studiati al mondo, anche per la sua potenziale pericolosità. Famoso soprattutto per 
                        l’incredibile <b>eruzione del 79 d.C.</b>, che distrusse le città di <b>Pompei</b> ed <b>Ercolano</b>, rappresenta un’attrazione turistica di enorme pregio, sia per chi ama le vacanze a contatto con la natura che per gli appassionati di enogastronomia.
                    </p>
                    <p>
                        Il Vesuvio è raggiungibile da Napoli in auto, con i mezzi pubblici o attraverso dei tour organizzati. Una volta sul posto, chi ama il turismo slow potrà passeggiare tra i <b>vigneti</b> alle pendici del vulcano, per poi <b>degustare gli ottimi vini</b> della zona. I più 
                        sportivi, invece, potranno dedicarsi al <b>trekking</b>. Il <b>Parco Nazionale del Vesuvio</b>, a tal proposito, è formato da undici sentieri per una lunghezza complessiva di 54 chilometri di camminamento, con l'itinerario principale che costeggia la parte occidentale dell'orlo 
                        del cratere.
                    </p>
                    <p>
                        Le <b>aree storiche ed archeologiche</b> incluse nel Parco non sono solo le più rinomate, come <b>Pompei</b> ed <b>Ercolano</b>, ma anche altri siti di pregio come <b>Somma Vesuviana</b>, <b>Villa Regina</b> a <b>Boscoreale</b>, le sfarzose <b>Ville Settecentesche del Miglio 
                        d’Oro</b> e le <b>Masserie Vesuviane</b>. 
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14294.934793463324!2d14.416217710926968!3d40.81934895588199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133ba508f1413feb%3A0x9cbfa7aa9376793d!2sVesuvio!5e1!3m2!1sit!2sit!4v1713360572853!5m2!1sit!2sit"
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
