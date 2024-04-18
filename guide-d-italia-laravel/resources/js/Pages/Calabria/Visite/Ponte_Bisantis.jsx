import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Ponte_Bisantis(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='ponte_bisantis' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Ponte Bisantis</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className='margin mt-3'>
                    <p>
                        Realizzato nel 1962 dall’Architetto Riccardo Morandi, al momento della costruzione la centina del <strong>Ponte Bisantis</strong> risultava la più grande costruita al mondo, con un’altezza di 120 metri, capace di resistere a raffiche di vento superiori ai 140 km/h. Oggi la <b>struttura è la seconda in Europa</b> per altezza e 
                        la <b>prima in Italia</b> per luce, altezza e lunghezza. Il manufatto rappresenta un vero e proprio monumento d’ingegneria e architettura, tanto da essere diventato un simbolo della città.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.775438298658!2d16.581723340775042!3d38.90658574627902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134006fe519262cb%3A0x35d2c6bc8416f091!2sViadotto%20Fausto%20Bisantis!5e1!3m2!1sit!2sit!4v1713438032664!5m2!1sit!2sit"
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
