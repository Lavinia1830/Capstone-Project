import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Palazzo_della_Torre(props) {
    return (
        <>
            <Head title="Piazza della Torre"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='piazza_della_torre' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Piazza della Torre</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            <strong>Piazza della Torre</strong> è una delle piazze più storiche e significative di <Link href='/destinazioni/piemonte/cuneo' 
                            className='text-decoration-none color_link'>Cuneo</Link>, situata nel cuore della città. Le sue origini risalgono al <b>Medioevo</b>, 
                            periodo in cui rappresentava il fulcro delle attività commerciali e sociali della comunità. Era il luogo dove si tenevano i mercati, 
                            le fiere e dove si svolgevano importanti cerimonie pubbliche.
                        </p>
                        <p>
                            Uno degli elementi più distintivi della piazza era la <b>torre civica</b>, che dà il nome alla piazza stessa. Costruita nel <b>XIII 
                            secolo</b>, la torre non solo fungeva da simbolo del potere comunale, ma serviva anche come punto di osservazione strategico per la 
                            sorveglianza della città. La presenza della torre rappresentava un simbolo di protezione e controllo, diventando un elemento iconico 
                            per i cittadini di Cuneo.
                        </p>
                        <p>
                            Nel corso dei secoli, Piazza della Torre ha subito varie trasformazioni, riflettendo i cambiamenti politici, economici e sociali che 
                            hanno caratterizzato la storia di Cuneo. Durante il <b>Rinascimento</b>, la piazza si arricchì di edifici eleganti e palazzi signorili, 
                            mentre nel periodo <b>barocco</b> furono aggiunti elementi architettonici e decorativi che ne aumentarono il fascino.
                        </p>
                        <p>
                            Oggi, Piazza della Torre è circondata da edifici storici ben conservati, che testimoniano le diverse epoche storiche attraversate dalla 
                            città. Tra questi edifici, alcuni ospitano istituzioni culturali, musei e gallerie d'arte che contribuiscono a mantenere viva la 
                            tradizione culturale di Cuneo. La piazza è anche un luogo di incontro e socializzazione per i residenti, grazie alla presenza di caffè, 
                            ristoranti e negozi che animano la vita quotidiana.
                        </p>
                        <p>
                            Inoltre, Piazza della Torre è il palcoscenico di numerosi eventi culturali e manifestazioni che attraggono sia i residenti che i turisti. 
                            Tra questi, spiccano i mercati settimanali, le fiere artigianali e le celebrazioni storiche che rievocano il passato glorioso della città. 
                            Durante queste occasioni, la piazza si trasforma in un vivace centro di attività, dove si può respirare l'autentica atmosfera di Cuneo.
                        </p>
                        <p>
                            La sua architettura riflette le diverse epoche storiche che hanno caratterizzato <b>Cuneo</b>, rendendola una tappa obbligata per chi 
                            vuole conoscere la storia e la cultura della città. Passeggiando per Piazza della Torre, i visitatori possono ammirare la bellezza degli 
                            edifici storici, immergersi nella storia locale e vivere l'autentica esperienza della vita cittadina di Cuneo.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1289.9828337914741!2d7.550554332594506!3d44.39304819405822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cd698b853c1e19%3A0x6c55ae9cf26fbb4d!2sPalazzo%20della%20torre!5e1!3m2!1sit!2sit!4v1716990064855!5m2!1sit!2sit"
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
