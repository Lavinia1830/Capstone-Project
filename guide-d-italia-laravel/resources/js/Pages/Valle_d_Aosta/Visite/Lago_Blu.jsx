import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/inertia-react'; 

export default function Lago_Blu(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='lago_blu' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Lago Blu</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Lo specchio del Cervino</h2>
                    <p>
                        Tra le cime della <Link href='/valle_d_aosta' className='text-decoration-none color_link'>Valle d’Aosta</Link>, a poca distanza da Cervinia, si trova un suggestivo specchio naturale. Il <strong>Lago Blu</strong> è inconfondibile grazie al suo caratteristico colore che varia 
                        tra il blu e il verde per via delle particolari alghe che crescono al suo interno. Nelle giornate limpide, nelle sue acque si specchia il <Link href='/montagna/valle_d_aosta/monte_cervinio' className='text-decoration-none color_link'>Monte Cervino</Link>, maestoso e imponente.
                    </p>
                    <p>
                        I dintorni del lago hanno molto da offrire. Tra escursioni in mezzo alla natura e impianti sciistici, potrete cimentarvi in numerose attività. Durante i mesi più caldi, le sponde del Lago Blu si rivelano il luogo ideale per un <b>picnic</b> all’aria aperta. Allontanandovi di 
                        poco, potrete raggiungere il <Link href='/laghi/valle_d_aosta/lago_goillet' className='text-decoration-none color_link'>Lago Goillet</Link>, da cui godrete di una splendida vista su cime come il Colle del Teodulo, la Testa Grigia e la Dent d'Hérens.
                    </p>
                    <p>
                        Non dimenticate, poi, di gustare le <Link href='/enogastonomia/specialità_tipiche_valdostane' className='text-decoration-none color_link'>specialità tipiche valdostane</Link>: vivamente consigliata è la <b>polenta concia</b>, vera prelibatezza della regione, preparata con burro 
                        e formaggi.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1129.5941230324377!2d7.617426182989959!3d45.9227201950518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4788ccfbe91f0d61%3A0xcdf978f19fc3945c!2sLago%20Blu!5e1!3m2!1sit!2sit!4v1713888580992!5m2!1sit!2sit"
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
