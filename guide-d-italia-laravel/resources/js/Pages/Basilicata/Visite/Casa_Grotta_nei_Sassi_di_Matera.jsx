import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Casa_Grotta_nei_Sassi_di_Matera(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='casa_grotta_nei_sassi_di_matera' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Casa Grotta nei Sassi di Matera</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Visitare la <strong>Casa Grotta di Vico Solitario</strong> rappresenta un’eccellente possibilità per apprendere come era la vita nelle case scavate del Sasso Caveoso prima del loro abbandono, seguito alla legge di risanamento dei Sassi promulgata dal Presidente del Consiglio, Alcide De 
                        Gasperi, nel 1952. Una grande cavità rocciosa fa da cornice all’arco d’ingresso della Casa Grotta, unica struttura costruita che si appoggia alla grotta in cui è stata ricavata l’abitazione; gli ultimi cambiamenti del prospetto risalgono al XVIII secolo. Alcune peculiari caratteristiche 
                        della casa sono: il focolare nella zona destinata alla cucina, al centro della stessa un piccolo tavolo sul quale era posto l’unico grande piatto da cui tutti mangiavano, il letto composto da due cavalletti di ferro, sopra cui erano adagiate delle assi di legno con un materasso riempito 
                        di foglie di mais; di fronte al letto erano presenti due stalle con le rispettive mangiatoie, una cava tufacea da cui venivano ricavati blocchi di tufo ed una cavità circolare usata come letamaio o come deposito della paglia. Di particolare interesse è il sistema di raccolta delle acque 
                        piovane dall’esterno; la canalizzazione ed il serbatoio sono ben visibili. Accanto alla Casa Grotta si trovano un’antica neviera, una suggestiva grotta naturale ed una chiesa rupestre risalente al IX-X secolo d.C. L’edificio è fornito di una guida audio multilingue (Italiano, Inglese, 
                        Francese, Tedesco, Spagnolo, Giapponese, Cinese e Russo).
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d316.6156058538051!2d16.612082487046457!3d40.66387843065225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13477edbe48b2393%3A0xbbfb2aef0121b7eb!2sCasa%20Grotta%20nei%20Sassi%20di%20Matera!5e1!3m2!1sit!2sit!4v1713365872203!5m2!1sit!2sit"
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
