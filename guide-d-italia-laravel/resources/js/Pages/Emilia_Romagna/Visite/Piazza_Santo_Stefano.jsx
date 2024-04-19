import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';

export default function Piazza_Santo_Stefano(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='piazza_santo_stefano' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Archiginnasio</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        <strong>Piazza Santo Stefano</strong> è uno degli scorci più caratteristici della città. In realtà, più che una piazza, è uno slargo che si origina da via Santo Stefano e conduce alle <Link href='/visite/bologna/le_due_torri' className='text-decoration-none color_link'>due Torri.</Link>  
                        Il complesso monumentale che domina la piazza è la <Link href='/visite/bologna/basilica_di_san_petronio' className='text-decoration-none color_link'>Basilica di Santo Stefano</Link>, comunemente conosciuta come “<b>sette chiese</b>”. Si articola infatti su sette edifici sacri costruiti e 
                        rielaborati in epoche diverse, prevalentemente per opera del santo patrono di Bologna, San Petronio.
                    </p>
                    <p>
                        La piazza è circondata dai portici dei palazzi nobiliari che vi si affacciano, di origine gotica e rinascimentale, variamente rimaneggiate nei secoli. Oltre a mettere in risalto la monumentale Basilica di Santo Stefano, la piazza permette al visitatore di vedere in tutta la loro bellezza questi 
                        edifici che la circondano. Da un lato, sulla sinistra, <b>Casa Berti</b> con affreschi di Gaetano Gandolfi, il <b>Palazzo Isolani</b> e il quattrocentesco <b>Palazzo Bolognini Isolani</b>, all’interno del quale si sviluppa Corte Isolani che conduce direttamente su strada Maggiore. Sul lato 
                        opposto, quello destro, il cinquecentesco <b>Palazzo Bolognini Amorini Salina</b>. 
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d708.1696423785322!2d11.347479610433412!3d44.49235220356269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd4c79571fe61%3A0x30d8d5e8e9c7385!2sPiazza%20Santo%20Stefano!5e1!3m2!1sit!2sit!4v1713164193660!5m2!1sit!2sit"
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
