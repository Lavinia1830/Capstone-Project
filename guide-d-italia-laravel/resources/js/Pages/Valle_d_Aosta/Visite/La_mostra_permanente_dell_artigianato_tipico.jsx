import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/inertia-react';

export default function La_mostra_permanente_dell_artigianato_tipico(props) {
    return (
        <>
            <Head title="La Mostra permanente dell'artigianato tipico"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='la_mostra_permanente_dell_artigianato_tipico' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>La mostra permananete dell'artigianato tipico</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Storicamente gli artigiani valdostani usavano il termine “<b>l’Artisanà</b>” per identificare il negozio in centro ad Aosta in cui, conclusa la Fiera di Sant’Orso e, durante il resto dell’anno, veniva conferita la loro 
                            produzione per la vendita. L’Institut Valdôtain de l’Artisanat de Tradition ha così deciso di farne il proprio marchio di comunicazione che unisce il settore culturale e commerciale della propria attività.<br/>
                            L’Artisanà boutique comprende oggi 4 negozi di artigianato valdostano distribuiti sul territorio regionale, vetrine originali di un artigianato vivo e in evoluzione che affonda le proprie radici nella tradizione.<br/>
                            Le boutiques de L’Artisanà offrono a turisti e appassionati la possibilità di portarsi a casa un pezzo autentico di Valle d’Aosta: oggetti in legno, pietra ollare, ferro forgiato, prodotti tessili e di ceramica sono il 
                            frutto della tradizione millenaria della nostra regione.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">La boutique di Ayas</h2>
                        <p>
                            La boutique è situata in località Antagnod, a 1.699 metri s.l.m., in un delizioso paesino da cui si ammira un’incomparabile vista sul massiccio del Monte Rosa. Il negozio è posto all’interno de “<b>La Maison de l’Ours</b>”, 
                            dimora del montanaro che uccise l’ultimo orso della Valle d’Aosta, e presenta lo stile e le dimensioni tipiche dell’edilizia tradizionale. Inoltre, al suo interno è ancora visibile un antico forno restaurato, in passato 
                            utilizzato per la cottura del pane.<br/>
                            Un luogo storicamente suggestivo in cui poter selezionare un oggetto di qualità e di sapiente maestria tecnica.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237.9410111111381!2d7.688344328474725!3d45.812086987495974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4788c8693a0cb783%3A0x5084b34e8221ba54!2sL&#39;Artisana&#39;%20Boutique%20di%20Ayas!5e1!3m2!1sit!2sit!4v1713955017620!5m2!1sit!2sit"
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
