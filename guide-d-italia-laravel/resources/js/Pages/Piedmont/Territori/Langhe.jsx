import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Langhe(props) {
    return (
        <>
            <Head title="Langhe"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='langhe' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Langhe</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>territori</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Le <strong>Langhe</strong> sono una regione storica del <b>Piemonte</b>, situata tra le province di <Link href='/destinazioni/piemonte/cuneo' 
                            className='text-decoration-none color_link'>Cuneo</Link> e <Link href='/destinazioni/piemonte/asti' 
                            className='text-decoration-none color_link'>Asti</Link>. Questa zona è rinomata per i suoi <b>paesaggi collinari</b>, i <b>vigneti</b> e 
                            i <b>prodotti enogastronomici</b>. Le Langhe sono particolarmente famose per la produzione di <b>vini</b> di alta qualità, come il <b>Barolo</b> e 
                            il <b>Barbaresco</b>, e per il <Link href='/enogastronomia/piemonte/cueno/tartufo_bianco' className='text-decoration-none color_link'>tartufo 
                            bianco</Link> di Alba.
                        </p>
                        <p>
                            La città di <b>Cuneo</b> è il capoluogo dell'omonima provincia ed è situata in una posizione strategica, tra le <b>Alpi</b> e 
                            la <Link href='/territori/piemonte/pianura_padana' className='text-decoration-none color_link'>Pianura Padana</Link>. Fondata nel <b>1198</b>, Cuneo ha una lunga 
                            storia come <b>importante centro commerciale </b>e militare. La sua posizione le ha permesso di diventare un nodo cruciale per i <b>commerci</b> tra 
                            l'Italia e la <b>Francia</b>.
                        </p>
                        <p>
                            Durante il <b>Medioevo</b>, Cuneo fu contesa tra varie potenze, inclusi i <b>Savoia</b>, i <b>Visconti</b> e i <b>Marchesi di Saluzzo</b>. 
                            Nel <b>XVII secolo</b>, divenne definitivamente parte del <b>Ducato di Savoia</b>. La città ha conservato un ricco patrimonio architettonico, 
                            con numerosi <b>edifici storici</b>, <b>chiese</b> e <b>piazze caratteristiche</b>.
                        </p>
                        <p>
                            Oggi, le Langhe e Cuneo sono mete turistiche di grande attrazione, grazie alle loro <b>bellezze naturali</b>, al patrimonio <b>culturale</b> e 
                            alle eccellenze <b>culinarie</b>. Le Langhe sono state dichiarate <b>Patrimonio dell'Umanità</b> dall'<b>UNESCO</b> nel <b>2014</b>, 
                            riconoscimento che testimonia l'importanza del loro paesaggio culturale e la tradizione vitivinicola.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24455.21551430827!2d7.9508822191698885!3d44.60649801801418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d2b02d5672c543%3A0xa282d58f83a31772!2sLanghe!5e1!3m2!1sit!2sit!4v1716995097369!5m2!1sit!2sit"
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
