import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Fiume_Po(props) {
    return (
        <>
            <Head title="Fiume Po"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='fiume_po' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Fiume Po</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Il <strong>fiume Po</strong> è il <b>fiume</b> più lungo d'Italia e svolge un ruolo cruciale nella storia e nella geografia del paese. La sua sorgente si trova 
                            in <b>Val di Susa</b> nelle <b>Alpi</b> e si snoda per circa <b>652 chilometri</b> attraversando il <b>nord Italia</b> prima di sfociare nel <Link href='/mare/mar_adriatico' 
                            className='text-decoration-none color_link'>Mar Adriatico</Link> .
                        </p>
                        <p>
                            Nella <b>preistoria</b>, il Po era già un'importante via di comunicazione e di scambio per le <b>popolazioni locali</b>. Durante l'<b>Impero Romano</b>, il 
                            fiume divenne un'importante arteria commerciale e militare, con numerose <b>città</b> e <b>insediamenti</b> sviluppati lungo le sue rive.
                        </p>
                        <p>
                            Nel <b>Medioevo</b>, il Po continuò a essere un importante asse di trasporto e una fonte di <b>sostentamento</b>. Le <b>guerre</b> e i conflitti tra i 
                            vari <b>stati</b> e <b>comuni</b> italiani spesso influenzarono le sue rive e la sua navigabilità.
                        </p>
                        <p>
                            Nel <b>Rinascimento</b>, la regione del Po fu un importante centro di <b>attività 
                            culturale</b> e <b>economica</b>, con città come <Link href='/destinazioni/piemonte/torino' className='text-decoration-none color_link'>Torino</Link>, <Link href='/destinazione/lombardia/milano' 
                            className='text-decoration-none color_link'>Milano</Link> e <Link href='/destinazioni/veneto/padova' className='text-decoration-none color_link'>Padova</Link> che 
                            prosperarono grazie alla sua posizione strategica.
                        </p>
                        <p>
                            Nel <b>XX secolo</b>, il Po ha subito una notevole <b>industrializzazione</b> e <b>urbanizzazione</b>, che hanno avuto un impatto significativo sull'ambiente e sulla 
                            qualità delle sue acque. Oggi, il fiume è monitorato e gestito per prevenire <b>inondazioni</b> e <b>inquinamento</b>, mentre resta una risorsa vitale per l'<b>agricoltura</b> e 
                            l'<b>economia</b> della regione.
                        </p>
                        <p>
                            Il <strong>Po</strong> rimane un simbolo importante del <b>patrimonio culturale</b> e <b>ambientale</b> italiano, con un ruolo chiave nella vita e nella storia delle comunità che si affacciano sulle sue rive.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5096.427899870208!2d9.755717655083767!3d45.108742212790744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4780e0d4f83f04dd%3A0x74e899027b28ccc8!2sFiume%20Po!5e1!3m2!1sit!2sit!4v1722616323218!5m2!1sit!2sit"
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
