import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Basilica_di_San_Gaudenzio(props) {
    return (
        <>
            <Head title="La Basilicata di San Gaudenzio"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='basilica_di_san_gaudenzio' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>La Basilica di San Gaudenzio</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            <b>Edificata</b> tra il <b>1577</b> e il <b>1590</b> su probabile disegno di <b>Pellegrino Tibaldi</b>, la <b>basilica</b> si pose fin dal 
                            principio come <b>emblema</b> della <b>cittadinanza novarese</b> contro la presenza, sempre più opprimente, dello <b>Stato 
                            assoluto</b> instaurato dagli <b>spagnoli</b>. Portato a termine solo nella seconda metà del <b>XVII secolo</b>, l'edificio, a una navata, 
                            presenta una pianta a <b>croce latina</b>, di struttura <b>tardo-rinascimentale</b>.
                        </p>
                        <p>
                            La basilica possiede numerose <b>opere d'arte</b>, tra cui un'antica <b>cattedra vescovile</b>. Nello <b>scurolo</b>, di 
                            fattura <b>settecentesca</b>, è conservata un'urna d'<b>argento</b> contente le spoglie di <b>San Gaudenzio</b>, <b>patrono</b> della 
                            <b> diocesi</b>.<br/>
                            Nella cappella del <b>Santissimo Sacramento</b> sono esposte otto <b>tele secentesche</b> del <b>Fiammenghino</b>, che rappresentano scene 
                            della vita di <b>San Gaudenzio</b>, svoltasi nella città.
                        </p>
                        <p>
                            La cappella della <b>Natività</b> (seconda cappella a sinistra) ospita un <b>polittico</b> di <b>Gaudenzio Ferrari</b> (commissionato nel 
                            1514 circa), appartenente alla primitiva chiesa di <b>San Vincenzo</b>, con tavole raffiguranti il <b>Presepio</b>, l'<b>Annunciazione </b> 
                            (nel registro superiore del polittico), la <b>Vergine con il Figlio</b> fra i <b>Santi Rocco</b>, <b>Ivo</b> e i <b>Vescovi Gaudenzio ed 
                            Ambrogio</b>, i <b>Santi Pietro e Giovanni Battista</b> e i <b>Santi Paolo ed Agabio</b> (nel registro inferiore). Sostanzialmente conforme 
                            ai canoni rinascimentali è la <b>cornice</b> (con cornicioni e colonne) delle sei tavole.
                        </p>
                        <p>
                            Nella cappella dell'<b>Angelo Custode</b> (prima cappella di sinistra) sono presenti <b>affreschi</b> di <b>Tanzio da Varallo</b> (1629), 
                            raffiguranti i santi protettori della famiglia <b>Nazari</b> (che era la famiglia committente), <b>scene bibliche</b>, il <b>Paradiso</b> e 
                            il <b>Purgatorio</b>. Questi dipinti, così come la tela raffigurante la <b>Battaglia di Sannacherib</b> sono il frutto di un gusto che 
                            probabilmente già esce dai confini regionali per trovare ispirazione nell'arte dell'<b>Europa centrale</b>.
                        </p>
                        <p>
                            Il <b>campanile</b> è opera di <b>Benedetto Alfieri</b> (1786). <br/>
                            La <b>cupola</b>, edificata tra il <b>1840</b> e il <b>1888</b> da <b>Alessandro Antonelli</b>, è completamente realizzata in <b>muratura </b> 
                            e misura <b>121 m</b> di altezza. Alla sommità è posta una <b>statua in rame dorato</b> del <b>Cristo Salvatore</b>, opera di <b>Pietro Zucchi </b> 
                            (1873).
                        </p>
                    </div>
                    <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1266.4941290710376!2d8.618350995123551!3d45.448786784372906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47865a2114b02fbb%3A0x874404869503458f!2sBasilica%20di%20San%20Gaudenzio!5e1!3m2!1sit!2sit!4v1715956871873!5m2!1sit!2sit"
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
