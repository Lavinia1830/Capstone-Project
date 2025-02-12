import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Castello_Sarriod_de_la_Tour(props) {
    return (
        <>
            <Head title="Castello Sarriod de la Tour"/> 
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='castello_sarriod_de_la_tour' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Castello Sarriod de la Tour</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Decisamente più compatto e austero del vicino castello di Saint-Pierre, il <strong>Castello di Sarriod de la Tour</strong> occupa una piccola zona di pianura a pochi passi dalle acque della Dora Baltea, a circa 10 chilometri da Aosta.
                        </p>
                        <p>
                            La nobile famiglia valdostana dei <b>Sarriod</b> fece costruire in epoca medievale questo complesso, dal carattere decisamente difensivo. Il massiccio corpo centrale del castello (noto con il termine francese <b>donjon</b>), così come la cappella e la cinta muraria, risalgono ad un periodo 
                            compreso tra il X e il XII secolo. Nei secoli successivi i discendenti Sarriod aggiunsero e modificarono ampiamente l'aspetto del maniero: aperto al pubblico dagli anni '70, il castello è oggi uno dei più antichi esempi di fortezza medievale della Valle d'Aosta.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1167.2260487031294!2d7.224322071868704!3d45.70605850038098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47892231ca219fc9%3A0x1e69b7450b7a5880!2sCastello%20Sarriod%20de%20La%20Tour!5e1!3m2!1sit!2sit!4v1713864981496!5m2!1sit!2sit"
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
