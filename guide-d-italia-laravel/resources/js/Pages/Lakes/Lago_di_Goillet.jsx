import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/inertia-react';

export default function Lago_di_Goillet(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='lago_di_goillet' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Lago di Goillet</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Abbracciato dalle montagne circostanti e sotto lo sguardo del <Link href='/montagna/valle_d_aosta/monte_cervino' className='text-decoration-none color_link'>Monte Cervino</Link> si trova il <strong>Lago di Goillet</strong>, uno dei trekking più semplici, ma anche più 
                        belli da fare se siete in vacanza a Breuil-Cervinia. Ci sono due alternative per arrivare al Lago di Gioillet, un sentiero più semplice e uno più impegnativo che permette a questo luogo di essere accessibile a tutti.
                    </p>
                    <p>
                        Regola numero uno in questo luogo è <b>godersi la natura</b>. Oltre ai colori straordinari che assume in lago, che cambiano in base anche alla stagione e alla giornata, ci sono branchi di stambecchi a prendere il sole che solitamente amano mettersi ai piedi della diga. 
                        Nella stagione giusta poi campi pieni di fiori e soprattutto di rododendri rendono le colline variopinte creando uno scenario unico.
                    </p>
                    <p>
                        A proposito di questo <strong>Lago di Goillet</strong>, si tratta di una delle perle blu del Cervino. Si trova in una conca di origini glaciali, tra le piste del comprensorio sciistico di Breuil-Cervinia. Il laghetto è di origine artificiale, ma nonostante ciò i suoi 
                        colori sono stupendi e nelle giornate più limpide il contrasto tra il verde smeraldo delle sue acque, il blu dei cielo e i colori della natura che lo circondano lo rendono ancora più spettacolare.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9300.328519810806!2d7.658326633671769!3d45.930005277707174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4788cb66b644bba1%3A0xb96b9846a9bdf76c!2sLago%20Goillet!5e1!3m2!1sit!2sit!4v1713944135386!5m2!1sit!2sit"
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
