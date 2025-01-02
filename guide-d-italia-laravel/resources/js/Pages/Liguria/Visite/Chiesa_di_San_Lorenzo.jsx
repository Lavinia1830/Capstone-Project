import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Chiesa_di_San_Lorenzo(props) {
    return (
        <>
            <Head title='Chiesa di San Pietro'/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                <div className='chiesa_di_san_lorenzo_portovenere' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Chiesa di San Lorenzo</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Nell'anno <b>1116</b> i <b>Genovesi</b>, poco dopo l'<b>acqisto del Borgo</b>, vollero costruire un'altra <b>chiesa</b> che, allo stesso modo della loro
                        <b>cattedrale metropolitana</b>, vollero dedicare a <b>San Lorenzo</b>. Costruita in stile <b>romanico</b> dalla famosa compagnia dei <b>Maestri 
                        Antelami</b>, fu consacrata nel <b>1130</b> da <b>Papa Innocenzo II</b>. È a forma <b>basilicare</b>, a <b>tre navate</b> con ampie <b>arcate a tutto 
                        sesto</b> rette in origine da <b>colonne di pietra neta locale</b>. Al suo interno sono costudite numerose <b>testimonianze artistiche</b>. Tra le molte 
                        è possibile ricordare: la <b>tavola con il Crocifisso</b>, opera di artista sconosciuto che, nella sua imporstazione, ricorda il fare del genere <b>Andrea
                        del Castagno</b>.
                    </p>
                    <p>
                        Un'altra ancora è quella <b>cinquecentesca</b>, ora posta sull'<b>ultimo altare a sinistra</b>, che rappresenta <b>San Martino e altri Santi</b>, 
                        pregiatissimo dipinto in cui, evidenti, emergono influssi <b>fiamminghi</b> e <b>lombardi</b>. A queste si affiancano pregevoli <b>opere di marmo</b>. Tra 
                        esse non può essere trascurata quella che, in fondo alla <b>navata di destra</b>, incornicia il dipinto detto della <b>Madonna Bianca</b>, 
                        immagine <b>miracolosa</b> quest'ultima a cui i <b>portoveneresi</b> siservano una proverbiale <b>devozione</b>. Ai fatti <b>miracolosi</b> si affianca 
                        il <b>mistero della sua provenienza</b>.
                    </p>
                    <p>
                        
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d917.4761517068764!2d9.8327137541204!3d44.050641992804316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d4fea00c8af0d3%3A0xe1509b3cd7d2a0f6!2sSan%20Lorenzo!5e1!3m2!1sit!2sit!4v1734623738811!5m2!1sit!2sit"
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
