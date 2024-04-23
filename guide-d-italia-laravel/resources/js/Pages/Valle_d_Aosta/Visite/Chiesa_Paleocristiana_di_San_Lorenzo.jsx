import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Chiesa_Paleocristiana_di_San_Lorenzo(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='chiesa_paleocristiana_di_san_lorenzo' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Chiesa Paleocristiana di San Lorenzo</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Nei pressi della Porta Prætoria, lungo la strada consolare proveniente da Eporedia (Ivrea), si sviluppò in epoca romana un’importante necropoli, in un’area utilizzata a scopo funerario già nella tarda Età del Ferro. Con l’avvento del Cristianesimo tale destinazione non 
                        mutò, tanto che agli inizi del V secolo fu costruita una basilica destinata a ricevere le sepolture dei primi vescovi aostani. La chiesa paleocristiana ha una pianta a croce latina i cui bracci terminano con absidi di tipologia diversa. Il modello di questo edificio deriva 
                        dai prestigiosi monumenti milanesi, e in particolare dalla Basilica Apostolorum (attualmente San Nazaro), fatta costruire dal vescovo Ambrogio verso la fine del IV secolo. Diverse tipologie di sepolture fiancheggiano, all’interno e all’esterno, i muri perimetrali della 
                        chiesa, distrutta in epoca carolingia e poi più volte ricostruita e modificata a partire dall’XI-XII secolo. L’aspetto attuale risale all’ultima riedificazione, verso la metà del ‘600.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d953.0089740915097!2d7.324088248587318!3d45.739192579010584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478920ae23dfcddd%3A0x5748489fc69c6755!2sChiesa%20Paleocristiana%20di%20San%20Lorenzo!5e1!3m2!1sit!2sit!4v1713855693419!5m2!1sit!2sit"
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
    )
}
