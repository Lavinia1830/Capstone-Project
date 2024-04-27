import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/inertia-react';

export default function La_Tornalla(props) {
    return (
        <>
            <Head title="La Tornalla"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='la_tornella' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>La Tornella</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            <strong>La torre castellata</strong> di Oyace è probabilmente il più antico castello della Valle d’Aosta, leggendariamente costruita da un gruppo di Saraceni rifugiatisi nella Valpelline intorno al 1000 d.C.; è già stata citata in un documento del 1197 che parla di un “allodio 
                            ad Ayacy”, donato ad un certo Ricalmo alla chiesa di Sant’Orso.
                        </p>
                        <p>
                            Nel complesso fortificato furono infeudati i Signori di Oyace, di cui si hanno poche informazioni. Amedeo IV di Savoia, tra il 1233 e il 1253 decretò che il castello venisse distrutto per punire i signori di Oyace, rei di comportamenti poco corretti nei confronti 
                            di Casa Savoia. Della casa-forte non restò in piedi che la sola torre. Tra il 1253 e il 1287 Oyace passò in mano ai potenti Signori di Quart. Tali Signori nella seconda metà del Trecento cedettero il controllo diretto ai Savoia. Nel 1612 passò nuovamente di mano 
                            andando ai Perrone di San Martino. È l’unico caso di torre a pianta ottagonale in Valle d’Aosta. Alta 11,7 metri, ha un diametro esterno di 7 metri e mezzo e un diametro interno di 3 metri e mezzo: lo spessore dei muri portanti arriva quindi quasi a 2 metri. La 
                            porta d'accesso, com'era d'uso nel medioevo in Valle d'Aosta, è sopraelevata di alcuni metri per permettere agli occupanti di difendere meglio la postazione. Per accedere alla torre si usava una scala rimovibile, probabilmente di legno.
                        </p>
                        <p>
                            Delle mura che circondavano la torre non resta che qualche traccia: la parte più facilmente raggiungibile aveva una doppia cortina difensiva, invece l'ingresso rialzato era più protetto perché affacciato sullo sperone roccioso.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3292.8720372434764!2d7.383364014880488!3d45.85051361631752!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4788d7c9e6f51d21%3A0x4405063d3d7aeb4!2sTornalla!5e1!3m2!1sit!2sit!4v1713966506395!5m2!1sit!2sit"
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
