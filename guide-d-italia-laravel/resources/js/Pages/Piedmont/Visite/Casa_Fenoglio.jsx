import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Casa_Fenoglio(props) {
    return (
        <>
            <Head title="Casa Fenoglio"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='casa_fenoglio' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Casa Fenoglio</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            <strong>Casa Fenoglio</strong>, situata ad <Link href='/destinazioni/piemonte/alba' 
                            className='text-decoration-none color_link'>Alba</Link>, è un pregevole esempio di <b>architettura liberty</b> piemontese. 
                            Fu costruita tra il <b>1907</b> e il <b>1908</b> per volere del proprietario <b>Giovanni Fenoglio</b>, un ricco imprenditore 
                            locale, e progettata dall'architetto <b>Giuseppe Manassero</b>, noto per le sue opere in stile liberty.
                        </p>
                        <p>
                            L'edificio si distingue per la sua facciata riccamente decorata, dove spiccano <b>decorazioni floreali</b> in <b>ferro 
                            battuto</b> e <b>stucchi</b>. Questi elementi decorativi, tipici dello stile liberty, conferiscono all'edificio un aspetto 
                            elegante e raffinato. I <b>balconi</b> ornati, le <b>ringhiere</b> in ferro battuto e le <b>finestre</b> con vetrate 
                            artistiche sono ulteriori caratteristiche che accentuano la bellezza dell'edificio.
                        </p>
                        <p>
                            All'interno, Casa Fenoglio presenta dettagli raffinati, come <b>affreschi</b>, <b>mosaici</b> e <b>soffitti decorati</b>. 
                            Ogni stanza è un capolavoro di design, con attenzione ai particolari che esprimono l'estetica e la filosofia del movimento 
                            liberty.
                        </p>
                        <p>
                            Nel corso degli anni, l'edificio ha subito vari interventi di <b>restauro</b> per preservarne la bellezza e l'integrità. 
                            Grazie a questi sforzi, Casa Fenoglio è stata conservata in ottime condizioni ed è diventata un simbolo dell'eredità 
                            culturale e architettonica di Alba.
                        </p>
                        <p>
                            Oggi, <strong>Casa Fenoglio</strong> è considerata un'importante attrazione turistica, attirando visitatori interessati 
                            alla storia e all'architettura della città. L'edificio è spesso utilizzato per eventi culturali e mostre, che 
                            contribuiscono a valorizzare ulteriormente il patrimonio storico di Alba.
                        </p>
                        <p>
                            In sintesi, Casa Fenoglio rappresenta un gioiello dell'<b>architettura liberty</b>, un esempio di come l'estetica e 
                            l'arte possano fondersi per creare edifici di straordinaria bellezza e significato storico.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d762.9782183648924!2d8.035386960670253!3d44.701222517409725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d2b35d29619d3d%3A0x749ef1c4e081cc75!2sCentro%20Studi%20Beppe%20Fenoglio!5e1!3m2!1sit!2sit!4v1722950304487!5m2!1sit!2sit"
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
