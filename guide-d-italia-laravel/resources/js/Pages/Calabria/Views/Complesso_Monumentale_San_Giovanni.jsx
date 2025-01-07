import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Complesso_Monumentale_San_Giovanni(props) {
    return (
        <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='complesso_monumentale_san_giovanni' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Complesso Monumentale San Giovanni</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className='margin mt-3'>
                        <p>
                            Del <strong>Complesso monumentale San Giovanni</strong>, costruito sui resti dell’antico castello normanno tra il XV e il XVII secolo, fanno parte: la <b>fontana monumentale</b> de “Il Cavatore”, opera dello scultore calabrese Giuseppe Rito, il <b>grande piazzale panoramico</b>, 
                            la <b>Torre di Carlo V</b> e le restanti <b>mura del castello</b>. Il San Giovanni vanta anche una grande area espositiva, disposta su due piani. Oggi il Complesso monumentale è diventato uno dei più importanti e prestigiosi <b>poli culturali ed espositivi</b> dell’Italia 
                            Meridionale. Dal 2017 è possibile visitare antiche segrete del castello, messe in piena sicurezza e nelle migliori condizioni di fruibilità.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1299.1823435644035!2d16.587744769117304!3d38.909152273068024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134006561e53686f%3A0x6fcdbafc31b4f7ca!2sComplesso%20Monumentale%20di%20San%20Giovanni!5e1!3m2!1sit!2sit!4v1713439880311!5m2!1sit!2sit"
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
