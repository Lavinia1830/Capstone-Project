import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';

export default function Mart(props) {
  return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='mart' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Mart - Museo di arte moderna e contemporanea</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        La sede principale del Mart è un ampio complesso architettonico inaugurato nel 2002 su progetto di Mario Botta e Giulio Andreolli. Concepito con l’idea di “polo culturale” più che museo tradizionale, il Mart nei suoi spazi pubblici dialoga con la Biblioteca Civica e con un grande auditorium.
                    </p>
                    <p>
                        <b>Fondato nel 1987</b> come ente funzionale della Provincia autonoma di Trento, il <strong>Mart, Museo di arte moderna e contemporanea</strong> <b>di Trento e Rovereto </b> opera in tre luoghi distinti: a Rovereto la sede principale del museo, un ampio complesso architettonico inaugurato nel 
                        2002 su progetto di Mario Botta e Giulio Andreolli, e la Casa d'Arte Futurista Depero  ; a Trento la Galleria Civica  , entrata a far parte del Mart nell'ottobre del 2013.<br/>
                        Nato con la vocazione di un'agorà contemporanea, il Mart è un museo speciale in un contesto eccezionale. Concepito con l'idea di polo culturale più che museo tradizionale, dialoga nei suoi spazi pubblici con la Biblioteca Civica, l'Auditorium Melotti, il Teatro comunale e l'Università. Inserito 
                        nel più vasto paesaggio culturale del Trentino, il Mart è un vero e proprio paesaggio contemporaneo. La condizione extra metropolitana del territorio ha permesso di costruire una proposta turistico-culturale di qualità che risponde ai bisogni di chi ama la natura, l’outdoor, il benessere, di 
                        chi ricerca il valore dell’unicità.<br/>
                        Il Mart ha un patrimonio inestimabile, nel quale spiccano i maggiori capolavori dell’arte italiana del XX secolo, e produce ogni anno decine di mostre   e progetti. Si avvale di uno staff di curatori, conservatori, ricercatori, archivisti e professionisti della formazione, della divulgazione 
                        scientifica e della comunicazione.<br/>
                        Dalla sua fondazione al dicembre del 2011, il Mart è stato diretto da Gabriella Belli. Dal febbraio 2012 e per tre anni, la direzione è stata affidata a Cristiana Collu. A partire da giugno 2015 il Mart è diretto da Gianfranco Maraniello, nominato dal CdA con mandato quinquennale.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.680878042427!2d11.040569026953126!3d45.893999199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47820ea55161a7c1%3A0x693af2f90bf04367!2sMart%20-%20Museo%20di%20arte%20moderna%20e%20contemporanea%20di%20Trento%20e%20Rovereto!5e1!3m2!1sit!2sit!4v1712919472943!5m2!1sit!2sit"
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
