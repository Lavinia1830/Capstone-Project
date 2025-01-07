import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link, Head } from '@inertiajs/react';

export default function Castello_di_Masino(props) {
    return (
        <>
            <Head title="Castello di Masino"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='castello_di_masino' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Castello di Masino</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Il <strong>Castello di Masino</strong>, situato a <b>Caravino</b> in <Link href='/piemonte' 
                            className='text-decoration-none color_link'>Piemonte</Link>, è una storica <b>residenza nobiliare</b> che apparteneva 
                            alla famiglia <b>Valperga</b>, una delle più antiche famiglie piemontesi. La costruzione originaria risale all'<b>XI secolo</b>, 
                            ma nel corso dei secoli è stata ampliata e ristrutturata più volte.
                        </p>
                        <p>
                            Nel <b>XVII secolo</b>, il castello fu trasformato in una <b>residenza barocca</b> con sontuosi saloni <b>affrescati</b>, <b>giardini all'italiana</b> e 
                            un <b>parco monumentale</b>. Durante il periodo napoleonico, il castello subì saccheggi e venne utilizzato 
                            come <b>ospedale militare</b>. Con la <b>Restaurazione</b>, tornò nelle mani della famiglia Valperga, che continuò ad 
                            arricchirlo con opere d'arte e <b>arredi preziosi</b>.
                        </p>
                        <p>
                            Nel <b>1987</b>, il castello fu donato al <b>FAI (Fondo per l'Ambiente Italiano)</b> che ha intrapreso un'accurata opera 
                            di <b>restauro</b> e <b>conservazione</b>. Oggi, il Castello di Masino è aperto al pubblico e offre una testimonianza 
                            preziosa della <b>storia</b> e della <b>cultura</b> italiana, con visite guidate che permettono di ammirare le sue splendide 
                            sale e il <b>panorama</b> circostante.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1507.633472455636!2d7.9577979224960265!3d45.39222232727675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478881fb70f37043%3A0x8080a1280fdf9528!2sCastello%20e%20Parco%20di%20Masino!5e1!3m2!1sit!2sit!4v1716568999585!5m2!1sit!2sit"
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
