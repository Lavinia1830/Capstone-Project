import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Porto_di_Savona(props) {
    return (
        <>
        <Head title='Porto di Savona'/>
        <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        >
            <main>
                <div className='porto_di_savona' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Porto di Savona</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        La <b>storia del</b> <strong>porto di Savona</strong> è lunga e strettamente legata all'evoluzione economica, sociale e politica della città 
                        ligure.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className='color_subtitle'>Origini antiche</h2>
                    <p>
                        Le prime tracce di attività portuale risalgono all'epoca dei <b>Liguri Sabazi</b>, una popolazione locale che utilizzava il porto comr 
                        scalo commerciale.
                    </p>
                    <p>
                        Durante l'<b>epoca romana</b>, il porto si sviluppò ulteriormente, favorendo il commecio marittimo nell'area.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color_subtitle">Medioevo</h2>
                    <p>
                        Nel Medioevo, il porto di Savona divenne un importante snodo per i traffici merittimi nel Mediterraneo.
                    </p>
                    <p>
                        Fu conteso tra diverse potenze, tra cui <Link href='/destinazioni/liguria/genova' className='text-decoration-none color_link'>Genova</Link>, con 
                        cui Savona ebbe una lunga rivalità. Questa competizione portò a scontri, culminati con l'assedio genovese e la distruzione parziale delle 
                        infrastrutture portuali savonesi nel XV secolo.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color_subtitle">Dominazione gevese</h2>
                    <p>
                        Con la sottomissione a Genova nel 1528, il porto perse parte della sua centralità economica, poiché i genovesi limitarono il suo sviluppo per 
                        non ostacolare il proprio porto principale.
                    </p>
                    <p>
                        Nonostante ciò, <b>Savona</b> continuò a mantenere un'attività portuale significativa, specialmente nel commercio di <b>prodotti agricoli</b> e 
                        minerali e tessuti, che rifornivano un'ampi rete commerciale.
                    </p>
                    <p>
                        In questo periodo, si sviluppò anche una modesta attività canteristica e navale, che permise alla città di mantenere una certa ndipendenza 
                        economica.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color_subtitle">Età moderna: rinascita e industrializzazione</h2>
                    <p>
                        Nel XVII secolo, con il declino della potenza genovese, Savona trvò nuove opportunità di espansione commerciale. Il porto iniziò a servire 
                        come punto di collegamento per l'esportazione di <b>mitalli</b>, <b>carbone</b> e altri prodotti legati all'industria nascente.
                    </p>
                    <p>
                        L'epoca della <b>rivoluzione industriale</b> segnò un punto di svolta. La costruzione di collegamenti ferroviari, tra cui la linea 
                        Savona-Torino, fece del porto un nodo strategico per il commecio tra l Mediterraneo e l'entroterra piemontese.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2319.793856913065!2d9.150222026168946!3d44.35066380206665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d35fc98451aae1%3A0x74152bfc1d6fafff!2sCastel%20Dragone!5e1!3m2!1sit!2sit!4v1712737876052!5m2!1sit!2sit"
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
