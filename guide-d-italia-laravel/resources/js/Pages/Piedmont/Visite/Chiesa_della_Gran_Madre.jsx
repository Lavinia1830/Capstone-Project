import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Chiesa_della_Gran_Madre(props) {
    return (
        <>
            <Head title="Chiesa della Gran Madre"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='chiesa_della_gran_madre' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Chiesa della Gran Madre</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Una volta arrivati in <b>Piazza Vittorio Veneto</b> e attraversato il <b>ponte Vittorio Emanuele I</b> vi troverete di fronte la <strong>Chiesa della Gran Madre di Dio</strong>. In una posizione molto suggestiva, ai piedi della collina 
                            torinese sorge questa chiesa di stile neoclassico che fu commissionata dai Decurioni, ossia gli amministratori della città di Torino, nel 1814 per celebrare il ritorno di Vittorio Emanuele I di Savoia dopo la sconfitta di Napoleone.
                        </p>
                        <p>
                            Sul timpano della chiesa compare l’epigrafe latina “ORDO POPULUSQUE TAURINUS OB ADVENTUM REGIS”, ossia “la nobiltà e il popolo di Torino per il ritorno del re”, per omaggiare il ritorno di Vittorio Emanuele I appunto.
                        </p>
                        <p>
                            I lavori per la costruzione dell’edificio, affidati all’architetto torinese Ferdinando Bonsignore, cominciarono nel 1818 e terminarono nel 1831.
                        </p>
                        <p>
                            Tra il 1933 e il 1940, la Chiesa della Gran Madre subì alcuni cambiamenti in occasione della sistemazione dell’<b>Ossario dei Caduti della Grande Guerra</b>. Ai lati della scalinata d’accesso alla Chiesa sono collocate due statue. Sulla 
                            destra la <b>statua della Fede</b>, raffigurata con un calice nella mano e a sinistra <b>la statua della Religione</b>.
                        </p>
                        <p>
                            L’interno è a pianta circolare e per la cupola l’architetto Bonsignore si ispirò al Pantheon di Roma.
                        </p>
                        <p>
                            Nella chiesa sono custodite le statue di San Maurizio, della Beata Margherita di Savoia, del Beato Amedeo di Savoia, di San Giovanni Battista e opere come <b>la Vergine col Bambino di Andrea Galassi</b> e <b>il Crocifisso e il Sacro Cuore 
                            di Gesù di Edoardo Rubino</b>.
                        </p>
                        <p>
                            Interessanti sono anche <b>i quattro bassorilievi all’interno dell’edificio</b> realizzati da diversi scultori che raffigurano La Vita della Vergine (Natività, Presentazione al Tempio, Sposalizio, Incoronazione).
                        </p>
                        <p>
                            Secondo alcuni esoterici, la chiesa della Gran Madre è di fondamentale importanza in quanto tra le due statue che rappresentano la Fede e la Religione, sarebbe sepolto il <b>Sacro Graal</b>.<br/>
                            Si tratta di un edificio molto suggestivo sia per la stessa costruzione che per la posizione, oltre che per i significati attribuitigli da chi ritiene Torino centro di un forte potere energetico.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1445.0601854824506!2d7.697936454884664!3d45.06246023731035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4788729e5ee55467%3A0xb8a74c31bb4c5333!2sGran%20Madre%20di%20Dio%20-%20Diocesi%20di%20Torino!5e1!3m2!1sit!2sit!4v1715346888003!5m2!1sit!2sit" 
                            width="600" 
                            height="450" 
                            style={{border:"0"}} 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade"
                            className='mx-auto mappa'
                        >
                        </iframe>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
