import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Contrada_Mondovì(props) {
    return (
        <>
            <Head title="Contrada Mondovì"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='contrada_mondovì' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Contrada Mondovì</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            La <strong>Contrada Mondovì</strong> è una delle aree più <b>storiche di Cuneo</b>, una città situata nel <b>Piemonte meridionale</b>. 
                            Questa zona è conosciuta per la sua <b>importanza</b> nella storia e nella cultura locale. La Contrada prende il nome dalla strada 
                            che conduce alla vicina città di <b>Mondovì</b>.
                        </p>
                        <p>
                            Fondata nel <b>1198</b>, Cuneo è cresciuta come una città <b>fortificata</b> su un altopiano tra due fiumi, il <b>Gesso</b> e 
                            lo <b>Stura</b>. La Contrada Mondovì era uno dei primi <b>quartieri</b> sviluppati durante il medioevo. Grazie alla sua <b>posizione 
                            strategica</b>, questa zona divenne un centro di <b>commercio</b> e <b>scambi</b>.
                        </p>
                        <p>
                            Nel corso dei secoli, la Contrada ha mantenuto la sua importanza, ospitando numerosi <b>mercati</b> e <b>fiere</b>. Gli edifici 
                            storici, come le <b>chiese</b> e i <b>palazzi</b> nobiliari, testimoniano la ricchezza e il prestigio di questa parte della città. 
                            La Contrada Mondovì è anche famosa per la <b>presenza</b> di <b>botteghe</b> artigiane e <b>attività</b> commerciali che ancora oggi 
                            attraggono sia i residenti che i <b>visitatori</b>.
                        </p>
                        <p>
                            Durante il <b>Rinascimento</b>, la Contrada Mondovì divenne un centro di <b>arte</b> e <b>cultura</b>, con 
                            numerosi <b>artisti</b> e <b>intellettuali</b> che contribuirono allo sviluppo della città. La zona continuò a prosperare anche nei 
                            secoli successivi, adattandosi ai cambiamenti economici e sociali.
                        </p>
                        <p>
                            Oggi, la Contrada Mondovì è un <b>quartiere vivace</b> e <b>dinamico</b>, dove la storia si intreccia con la <b>modernità</b>. Le 
                            sue strade sono frequentate da <b>turisti</b> e <b>locali</b> che apprezzano l'atmosfera unica e il <b>patrimonio culturale</b> che 
                            questa zona offre. La Contrada rimane un simbolo della ricca storia di Cuneo e un esempio di come il passato e il presente possano 
                            convivere armoniosamente.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d644.9995176448876!2d7.55171119684934!3d44.392313174924396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cd693c2b4cba09%3A0x9cb3a046a5388631!2sContrada%20Mondov%C3%AC%2C%2012100%20Cuneo%20CN!5e1!3m2!1sit!2sit!4v1716992683156!5m2!1sit!2sit"
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
