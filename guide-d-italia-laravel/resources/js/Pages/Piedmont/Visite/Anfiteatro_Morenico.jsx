import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link, Head } from '@inertiajs/react';

export default function Anfiteatro_Morenico(props) {
    return (
        <>
            <Head title="Anfiteatro Morenico di Ivrea"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='anfiteatro_morenico' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Anfiteatro Morenico di Ivrea</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            La <b>storia</b> dell'<strong>Anfiteatro Morenico di Ivrea</strong> è legata agli eventi geologici che hanno modellato il paesaggio durante 
                            l'ultima <b>glaciazione</b>. Questo anfiteatro naturale si è formato grazie all'azione del ghiacciaio Balteo, che si estendeva 
                            dalla <Link href='/valle_d_aosta' className='text-decoration-none color_link'>Valle d'Aosta</Link> fino alla pianura piemontese. Quando il 
                            ghiacciaio ha iniziato a ritirarsi, ha lasciato dietro di sé una serie di <b>morene</b> laterali e terminali che delineano l'attuale 
                            anfiteatro.
                        </p>
                        <p>
                            Le <b>morene</b> sono accumuli di <b>detriti</b> rocciosi trasportati e depositati dal ghiacciaio. Questi detriti si sono accumulati in 
                            grandi <b>massi</b>, ciottoli e sabbie, creando una struttura unica nel suo genere. Il <b>territorio</b> dell'Anfiteatro Morenico 
                            di Ivrea è caratterizzato da una grande varietà di paesaggi, con colline, laghi morenici e ampie aree boschive.
                        </p>
                        <p>
                            Questo anfiteatro è di grande interesse non solo per la sua importanza <b>geologica</b>, ma anche per il suo valore <b>ambientale</b> e <b>storico</b>. 
                            La <b>regione</b> è ricca di testimonianze archeologiche, con numerosi <b>siti</b> che risalgono all'epoca preistorica e romana. Inoltre, 
                            l'area è stata teatro di importanti avvenimenti storici nel Medioevo, con la costruzione di <b>castelli</b> e <b>fortificazioni</b>.
                        </p>
                        <p>
                            Negli ultimi decenni, l'Anfiteatro Morenico di Ivrea è diventato una meta privilegiata per <b>turisti</b> e <b>escursionisti</b>, attratti 
                            dalla bellezza del paesaggio e dalle numerose attività all'aria aperta offerte dalla zona, come trekking, ciclismo e birdwatching. 
                            La <b>conservazione</b> e la <b>valorizzazione</b> di questo patrimonio naturale sono diventate una priorità per le autorità locali e le 
                            associazioni ambientali, che lavorano insieme per proteggere e promuovere questo straordinario territorio.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d532.0377226941297!2d7.903373777587848!3d45.497224016895906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47889b5fdcf550e7%3A0x76e9dd6d74abe58d!2sEcomuseo%20Anfiteatro%20Morenico%20di%20Ivrea!5e1!3m2!1sit!2sit!4v1716566343720!5m2!1sit!2sit"
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
