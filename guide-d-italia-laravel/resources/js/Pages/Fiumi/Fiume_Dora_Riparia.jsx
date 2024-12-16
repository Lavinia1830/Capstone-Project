import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Fiume_Dora_Riparia(props) {
    return (
        <>
            <Head title="Fiume Dora Riparia"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='fiume_dora_riparia' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Fiume Dora Riparia</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            La <strong>Dora Riparia</strong> è un <b>fiume</b> situato nel <b>nord-ovest</b> dell'Italia, che attraversa la <b>Val di Susa</b> in Piemonte. Nasce 
                            dalle <b>Alpi Cozie</b>, più precisamente dal <b>monte Pian della Mussa</b> a circa 2.400 metri di altitudine. Il suo percorso inizia con una direzione 
                            prevalentemente <b>sud-orientale</b> fino a raggiungere la città di <Link href='/destinazioni/piemonte/torino' 
                            className='text-decoration-none color_link'>Torino</Link>, dove confluisce nel <Link href='/fiume/piemonte/alpi_cozie/fiume_po' 
                            className='text-decoration-none color_link'>fiume Po</Link>.
                        </p>
                        <p>
                            Il nome "Dora Riparia" deriva dal latino "Duria Minor", che significa "Dora Minore" per distinguerla dalla <Link href='/fiumi/piemonte/ivrea/fiume_dora_baltea'
                            className='text-decoration-none color_link'>Dora Baltea</Link>, un altro importante fiume della regione. "Riparia" fa riferimento alle <b>rive</b> o 
                            alle <b>sponde</b> del fiume, sottolineando il suo carattere di <b>corso d'acqua</b> vicino a insediamenti umani.
                        </p>
                        <p>
                            Nel corso della sua storia, la Dora Riparia ha avuto un ruolo fondamentale nello sviluppo <b>economico</b> e <b>sociale</b> della Val di Susa. È stata una 
                            fonte di <b>acqua</b> essenziale per l'<b>agricoltura</b>, l'<b>industria</b> e il <b>commercio</b> della regione. Durante il periodo <b>medievale</b>, 
                            molte <b>abbazie</b> e <b>monasteri</b> sorsero lungo le sue sponde, sfruttando l'acqua del fiume per i loro <b>mulini</b> e le loro attività <b>artigianali</b>.
                        </p>
                        <p>
                            Nel <b>XIX secolo</b>, con la costruzione della <b>ferrovia del Frejus</b>, la Dora Riparia divenne ancora più importante, facilitando il <b>trasporto</b> di 
                            merci e persone tra l'Italia e la Francia. La valle e il fiume furono quindi cruciali per la <b>modernizzazione</b> e l'<b>industrializzazione</b> della 
                            regione.
                        </p>
                        <p>
                            Tuttavia, la Dora Riparia ha anche conosciuto momenti di <b>difficoltà</b>. Nel corso degli anni, il fiume è stato soggetto 
                            a <b>inquinamento</b> e <b>sfruttamento eccessivo</b> delle sue risorse idriche. Recentemente, sono stati intrapresi sforzi per la <b>tutela</b> e 
                            la <b>valorizzazione</b> del fiume, promuovendo <b>progetti</b> di <b>risanamento ambientale</b> e di <b>sviluppo sostenibile</b>.
                        </p>
                        <p>
                            In sintesi, la storia della Dora Riparia è strettamente legata a quella della Val di Susa, rappresentando una <b>risorsa vitale</b> per le comunità locali 
                            e un elemento chiave per il loro <b>sviluppo </b>e la loro <b>prosperità</b>.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20387.70737344232!2d7.353549761799984!3d45.103153900063326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4788464fdb465e2d%3A0x6092d8dc6c7a952c!2sFiume%20Dora%20Riparia!5e1!3m2!1sit!2sit!4v1716903154086!5m2!1sit!2sit"
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
