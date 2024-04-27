import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/inertia-react';

export default function Maison_de_Cogne_Gerard_Dayné(props) {
    return (
        <>
            <Head title="Maison de Cogne Gerard Dayné"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='maison_de_cogne_gerard_dayné' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Maison de Cogne Gerard Dayné</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            <strong>La Maison Gérard Dayné</strong> è uno dei maggiori esempi dell’architettura tradizionale valdostana.<br/>
                            L’edificio, oggetto di un accurato restauro, è particolarmente complesso e permette di ammirare la “cor”, spazio interno coperto tipico dell’abitazione di Cogne, il “beu” luogo per eccellenza della vita domestica ed i grandi fienili che ospitano durante l’estate delle mostre fotografiche temporanee.<br/>
                            <strong>La Maison Gérard Dayné</strong> è un luogo dove le emozioni della memoria ci aiutano a riflettere sulla conservazione e la valorizzazione del patrimonio architettonico e storio-culturale della civiltà alpina.
                        </p>
                        <p>
                            Situato in località Sonveulla, a monte del vecchio abitato, l’edificio si presenta come un aggregato di otto corpi di fabbrica sviluppati secondo uno schema a “L”; l’aspetto attuale risale alla prima metà dell’Ottocento, quando si concluse un processo di “crescita” iniziato presumibilmente prima del 
                            XVIII secolo.<br/>
                            <strong>La Maison Gérard Dayné</strong>, per la varietà del complesso e le specifiche caratteristiche tipiche dell’architettura rurale di Cogne, ben si presta all’allestimento di un museo che possa illustrare l’architettura tradizionale, la casa, la famiglia, l’organizzazione dell’ambiente agrario e 
                            forestale, le miniere, gli oggetti, l’arte sacra, le credenze, le leggende, la lingua e la letteratura della Valle d’Aosta dei tempi passati.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d315.28062234924926!2d7.358338369784696!3d45.606875353806984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4788e16d8fd1854b%3A0x7640799cd33744e9!2sMaison%20G%C3%A9rard%20Dayn%C3%A9%2C%20Museo%20Etnografico%20a%20Cogne!5e1!3m2!1sit!2sit!4v1714228035873!5m2!1sit!2sit"
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
