import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function La_Grandze_Place_Commune(props) {
    return (
        <>
            <Head title="La Grandze Place Commune"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='la_grandze_plaze_commune' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>La Grandze Place Commune</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Proseguendo nell’itinerario tra le cose da vedere a Cogne, <strong>raggiungi la Grandze Place Commune</strong>. 
                        </p>
                        <p>
                            La Grandze Place Commune tiene inoltre vivo il ricordo del cittadino <i>Casimiro Jeantet</i>, vissuto tra l’ottocento e il novecento. Costui aveva una piccola drogheria, la beteucca <i>de Casemì</i>, e in tempi di difficoltà aiutò gli abitanti più in difficoltà a sostentarsi.
                        </p>
                        <p>
                            <b>Questa piazza era il luogo dove gli abitanti di Cogne erano soliti ritrovarsi dopo la messa</b>. Qui <b>la cittadinanza veniva messa al corrente degli affari comunali</b>, grazie alle créye, ovvero la lettura dei comunicati comunali da parte di un apposito addetto.
                        </p>
                        <p>
                            Attraverso la Grandze Place Commune <b>era possibile accedere alla Chiesa di Sant’Orso passando per il cimitero</b>, allora presente in questo luogo. Questo spiega il nome di “<i>Place Commune</i>“, ovvero spazio comune che comunicava direttamente con un altro spazio comune, il cimitero 
                            appunto. Non è invece noto il perché del nome <i>Grandze</i>, che significa “<i>grange</i>“, ovvero cascina.
                        </p>
                        <p>
                            All’interno della Grandze Place Commune la popolazione prendeva anche decisioni. Sempre la domenica i tre sindaci (furono tre fino a metà settecento), riferivano alla popolazione di eventuali problemi o di decisioni da prendere e, insieme alla popolazione, le prendevano come in <b>una sorta 
                            di referendum istantaneo</b>. Ogni qualvolta gli abitanti di Cogne davano parere positivo, i sindaci andavano poi a formalizzare gli atti.
                        </p>
                        <p>
                            Oggi la Grandze Place Commune è uno spazio a pianta triangolare su cui si affacciano varie case dai colori pastello e, al pian terreno, ospitano numerosi negozi e attività commerciali.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d631.4402769933233!2d7.354802269612803!3d45.60950093635537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDXCsDM2JzM0LjIiTiA3wrAyMScxOS42IkU!5e1!3m2!1sit!2sit!4v1714210809252!5m2!1sit!2sit"
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
