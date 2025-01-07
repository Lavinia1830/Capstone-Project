import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Torre_del_Vescovo(props) {
    return (
        <>
            <Head title="Torre del Vescovo"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='torre_del_vescovo' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Torre del Vescovo</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Praticamente dietro alla Casa dei Pizzi fa capolino <strong>la Torre del Vescovo</strong>, anche <b>conosciuta come <i>Chateau Royal</i></b>. Questo è <b>uno dei palazzi più antichi di Cogne</b>, risalente alla fine del XII secolo.
                        </p>
                        <p>
                            Il suo scopo era ospitare il Vescovo di Aosta, signore feudale del territorio di Cogne. <b>Solo verso il 1870 cambiò destinazione e divenne un Castello Reale</b>. In quel periodo divenne infatti <b>proprietà di Vittorio Emanuele II</b>, che era usuale <b>risiederci durante le cacce reali allo stambecco</b>. Per meglio rispondere alle 
                            esigenze reali la Torre del Vescovo venne modificata, sia internamente, sia esternamente aggiungendo un’ulteriore ala orientale disposta ad angolo, dove oggi c’è la scala d’accesso e l’entrata.
                        </p>
                        <p>
                            Successivamente vennero fatte ulteriori modifiche, come l’aggiunta di un ulteriore piano alla struttura. Purtroppo non si sono salvati nemmeno gli antichi pavimenti in legno e i rivestimenti delle pareti, che sono cambiati radicalmente dopo che la Torre del Vescovo fu trasformata in un albergo. Nel 2006, infine, è stata trasformata 
                            in appartamenti residenziali.
                        </p>
                        <p>
                            La Torre del Vescovo ha una forma tozza, per via dei suoi tredici metri di lato per quindici di altezza. Particolare è sapere che lo spessore dei muri va assottigliandosi parecchio: dai due metri della base termina ad appena un mezzo metro, come era usuale nelle costruzioni medievali in Valle d’Aosta.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                           src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d630.5252621414633!2d7.3549240023773175!3d45.61007627324963!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4788e1734bf38e3d%3A0xd77a0b2f93ba9516!2sR%C3%A9sidence%20Ch%C3%A2teau%20Royal!5e1!3m2!1sit!2sit!4v1714208296226!5m2!1sit!2sit"
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
