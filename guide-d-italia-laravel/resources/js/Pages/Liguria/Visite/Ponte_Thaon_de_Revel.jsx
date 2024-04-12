import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Ponte_Thaon_de_Revel(props) {
  return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='ponte_thaon_de_revel' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Ponte Thaon de Revel</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        La passeggiata Morin, sul <b>lungomare della Spezia</b> conduce al ponte pedonale Thaon di Revel, inaugurato nel 2013, che mette direttamente in comunicazione la città con il porto diportistico Mirabello. <br/>
                        La struttura del ponte richiama l’alberatura delle barche a vela e l’ossatura degli scafi, ed evoca l’antica tradizione marinara locale: una sottile linea bianca unisce le due sponde restituendo agli spezzini un lembo di mare.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3391.159652871872!2d9.823448876543155!3d44.101140523343894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d4fd283afd4d39%3A0x9ce858723017bb22!2sPonte%20Thaon%20di%20Revel!5e1!3m2!1sit!2sit!4v1712850140003!5m2!1sit!2sit"
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
