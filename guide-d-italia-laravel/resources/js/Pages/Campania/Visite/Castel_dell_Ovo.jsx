import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';

export default function Castel_dell_Ovo(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='castel_dell_ovo' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Castel dell'Ovo</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Luogo affascinante e unico sul lungomare di Napoli</h2>
                    <p>
                        Dal lungomare, sull’antico <b>Isolotto di Megaride</b> si trova <b>uno dei castelli più antichi di</b> <Link href='/destinazioni/campania/napoli' className='text-decoration-none color_link'>Napoli</Link>, <strong>Castel dell’Ovo</strong>, una fortezza di origine normanna. 
                        Secondo la leggenda <b>il nome risalirebbe all’uovo della sirena Partenope che il poeta Virgilio vi nascose nei sotterranei</b>, chiuso e protetto da una gabbia perché era sacro e incantano, in grado di portare fortuna alla città se fosse rimasto intatto, ancora oggi si 
                        continua a credere che il castello non sia crollato grazie alla presenza dell’uovo. 
                    </p>
                    <p>
                        Raggiungibile a piedi facendo una bella passeggiata, accompagnati dalla brezza marina, si potrà <b>ammirare un panorama unico del Golfo di Napoli salendo sulle terrazze</b>. Visitabili, ma solo su prenotazione, anche le sale interne affrescate con opere tardo bizantine, 
                        una sala gotica coperta a volte, quella scavata nel tufo, le due torri, denominate Normandia e Maestra, i resti della Chiesa di San Salvatore e di un loggiato quattrocentesco, le <b>celle dei monaci</b> e il <b>carcere della regina Giovanna</b>.
                    </p>
                    <p>
                        Dopo la visita al Castello è consigliato fermarsi al <b>Borgo Marinari</b>, con i suoi locali, ristoranti e bar per una pausa pranzo o una cena al tramonto. 
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1062.3317689605155!2d14.247211364950862!3d40.82843922851269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b09ac26357211%3A0x970c840bd5800ad!2sCastel%20dell&#39;Ovo!5e1!3m2!1sit!2sit!4v1713359807399!5m2!1sit!2sit"
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
