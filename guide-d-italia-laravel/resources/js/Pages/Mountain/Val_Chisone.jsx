import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Val_Chisone(props) {
    return (
        <>
            <Head title="Val Chisone"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='val_chisone' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Val Chisone</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            La <strong>Val Chisone</strong>, situata nelle <b>Alpi Cozie</b> del <Link href='/piemonte' className='text-decoration-none color_link'>Piemonte</Link>, 
                            ha una storia ricca e complessa. Durante l'<b>epoca romana</b>, la valle era attraversata da una via importante che collegava 
                            la <Link href='/visite/piemonte/val_chisone/gallia_cisalpina' className='text-decoration-none color_link'>Gallia Cisalpina</Link> con 
                            la <Link href='/visite/piemonte/val_chisone/gallia_narbonense' className='text-decoration-none color_link'>Gallia Narbonense</Link>. Nel <b>Medioevo</b>, 
                            la Val Chisone fu contesa tra vari signori feudali e divenne un luogo strategico per il <b>Marchesato di Saluzzo</b> e i <b>Savoia</b>.
                        </p>
                        <p>
                            Nel <b>XVI secolo</b>, la valle divenne un rifugio per i <b>Valdesi</b>, un gruppo religioso perseguitato per le loro idee riformate. Le tensioni 
                            culminarono nelle <b>guerre di religione</b> del XVII secolo, che videro scontri tra i Valdesi e le truppe cattoliche. La pace arrivò solo con l'<b>Editto 
                            di Pinerolo</b> del 1655, che garantì una certa libertà religiosa.
                        </p>
                        <p>
                            Nel <b>XVIII secolo</b>, la Val Chisone fu teatro di importanti eventi militari durante le <b>guerre di successione</b>. In seguito, con l'<b>Unificazione 
                            d'Italia</b>, la valle vide un periodo di sviluppo economico e industriale, soprattutto con l'apertura delle miniere di <b>talco</b> a <b>Prali</b> e la 
                            costruzione della <b>ferrovia</b>.
                        </p>
                        <p>
                            Durante la <b>Seconda Guerra Mondiale</b>, la Val Chisone fu un centro di resistenza partigiana contro l'occupazione tedesca e fascista. Oggi, la valle è 
                            nota per il suo patrimonio culturale, le sue bellezze naturali e le attività turistiche, come lo sci a <b>Sestriere</b>.
                        </p>
                        <p>
                            Questo riassunto evidenzia alcuni degli eventi e dei periodi più significativi della storia della Val Chisone.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5106.241816384576!2d7.126193186858311!3d44.998723527885325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4789cca1499bb427%3A0xbe68e9d160c6fa7a!2sVal%20Chisone!5e1!3m2!1sit!2sit!4v1716904426839!5m2!1sit!2sit"
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
