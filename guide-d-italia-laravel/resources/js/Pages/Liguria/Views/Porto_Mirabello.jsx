import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Porto_Mirabello(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='porto_mirabello' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Porto Mirabello</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        <strong>Porto Mirabello</strong> si trova al centro del Golfo della Spezia, in una delle posizioni naturalmente più protette d’Europa dal mare e dal vento. Le acque interne del golfo infatti godono della protezione del contrafforte occidentale, delle isole e della diga frangiflutti, che permettono 
                        di navigare in serenità per circa 300 giorni l’anno. <br/>
                        Porto Mirabello è l’<b>ambiente perfetto</b> per i superyacht, in un contesto ambientale di eccellente livello, favorito dalla prossimità a luoghi di enorme valore storico e paesaggistico come Lerici, Porto Venere, Cinque Terre e Portofino, e dalla presenza di una galleria commerciale con oltre 30 
                        negozi, 8 punti di ristorazione e una piscina lunga 25 metri. 
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3391.2196204920674!2d9.824047576543114!3d44.100095023412166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d4fc91beaaaaab%3A0x26e2acd343fcf4fe!2sPorto%20Mirabello!5e1!3m2!1sit!2sit!4v1712849561698!5m2!1sit!2sit"
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
