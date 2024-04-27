import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/inertia-react';

export default function Arco_di_Augusto(props) {
    return (
        <>
            <Head title="Aosta Romana"/> 
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='arco_di_augusto' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Arco di Augusto</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            <strong>L’Arco d’Augusto</strong> Aosta, monumento simbolo di <b>Augusta Praetoria</b>, fu eretto in onore dell’Imperatore romano per celebrare la sua vittoria sulla popolazione autoctona, i <b>Salassi</b>. Il monumento, che ha subìto delle modificazioni nel corso dei secoli, 
                            consiste in un arco a tutto sesto incorniciato da semicolonne con capitelli corinzi coronate da trabeazione dorica.<br/>
                            L’Arco Onorario originariamente era sovrastato da un attico che ospitava una quadriga e una scritta dedicatoria in lettere in bronzo per sottolineare la funzione celebrativa che però non si è conservata.
                        </p>
                        <p>
                            L’imponente arco faceva parte della scenografia propagandistica dell’entrata nella città romana, capace di stupire chiunque arrivasse in città dopo aver percorso la strada delle Gallie.
                        </p>
                        <p>
                            Durante il Medioevo, l’Arco d’Augusto di Aosta venne denominato <b>Saint Vout</b> per via di un’immagine del Salvatore, sostituita in seguito dal Crocifisso, posta qui a protezione della città dalle frequenti inondazioni del vicino <b>torrente Buthier</b>.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d824.8648306689305!2d7.327163668344053!3d45.739143414399784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478920ae8c4e344d%3A0xf5ec6fc38067d0d6!2sArco%20di%20Augusto!5e1!3m2!1sit!2sit!4v1713780117725!5m2!1sit!2sit"
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
