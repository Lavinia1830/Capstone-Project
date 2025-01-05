import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Palazzo_Vescovile_di_Ivrea(props) {
    return (
        <>
            <Head title="Palazzo Vescovile di Ivrea"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='palazzo_vescovile_ivrea' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Palazzo Vescovile di Ivrea</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Il <strong>Duomo di Ivrea</strong> è un'importante chiesa dedicata a <b>Santa Maria Assunta</b>, situata nella città di Ivrea, 
                            in Piemonte. La sua storia è ricca di eventi significativi e cambiamenti architettonici.
                        </p>
                        <p>
                            La <b>costruzione originale</b> risale al <b>IV secolo</b>, quando fu edificata una basilica paleocristiana, come testimoniato 
                            dai ritrovamenti archeologici. Successivamente, nel <b>X secolo</b>, venne costruita una nuova chiesa in stile <b>romanico</b> per 
                            volontà del vescovo Warmondo. Durante questo periodo, la chiesa divenne il centro spirituale della diocesi di Ivrea.
                        </p>
                        <p>
                            Nel corso dei secoli, il Duomo subì diverse <b>modifiche</b> e <b>ampliamenti</b>. Nel <b>XV secolo</b>, venne aggiunta una 
                            facciata gotica e furono eseguiti lavori di ristrutturazione che trasformarono ulteriormente l'edificio. Tuttavia, fu 
                            nel <b>XVIII secolo</b> che la chiesa assunse l'aspetto attuale grazie a un'importante opera di <b>restauro</b> in stile <b>barocco</b>, 
                            che incluse la costruzione di nuove cappelle e l'abbellimento degli interni con decorazioni ricche e dettagliate.
                        </p>
                        <p>
                            Il <b>campanile</b> del Duomo, costruito anch'esso in epoca romanica, rappresenta una delle caratteristiche più distintive dell'edificio. 
                            Nel tempo, il Duomo è stato un punto di riferimento non solo religioso ma anche culturale per la città di Ivrea, ospitando numerosi 
                            eventi e celebrazioni.
                        </p>
                        <p>
                            Oggi, il Duomo di Ivrea è un <b>monumento storico</b> di grande valore, testimone della <b>storia religiosa</b> e <b>architettonica</b> della 
                            città, e continua a essere un luogo di culto e di interesse turistico.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d633.033889765229!2d7.875022974229296!3d45.46777178706379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478884b89120e453%3A0xc2b0ce0da2cd8c0e!2sCuria%20Vescovile!5e1!3m2!1sit!2sit!4v1716648393355!5m2!1sit!2sit"
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
