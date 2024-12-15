import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link, Head } from '@inertiajs/react';

export default function Museo_Nazionale_del_Cinema(props) {
  return (
    <>
        <Head title="Museo Nazionale del Cinema"/>
        <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        >
            <main>
                <div className='mn_cinema_torino' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Museo Nazionale del Cinema</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        <strong>Il Museo Nazionale del Cinema di Torino</strong> celebra e racconta la settima arte nei dettagli. Si trova all’interno della scenografica <b>Mole Antonelliana</b>, monumento simbolo del capoluogo 
                        piemontese, e segue la storia del settore cinematografico, dalle origini a oggi.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">La storia del Museo Nazionale del Cinema</h2>
                    <p>
                        In mostra ci sono 1.800.000 opere tra film, fotografie, apparecchi, manifesti, documenti, registrazioni sonore, libri e dischi. Il materiale è organizzato seguendo il filone dell’archeologia del cinema, 
                        la fotografia e la storia del cinema. L’esposizione è tanto completa da poter essere considerata <b>tra le più importanti al mondo</b> per la ricchezza del patrimonio e delle varie attività proposte.
                    </p>
                    <p>
                        Notevole, poi, l’<b>allestimento</b>, quasi del tutto <b>interattivo</b>. Si sviluppa a spirale verso l’alto su più livelli espositivi.
                    </p>
                    <p>
                        Il <b>primo progetto di costruzione del museo risale al 1941</b>, grazie alla studiosa piemontese di storia e di cinema Maria Adriana Prolo che lavorò a lungo all’idea.
                    </p>
                    <p>
                        I primi contributi finanziari giunsero col sostegno di alcuni pionieri del settore, come il regista astigiano Giovanni Pastrone, che proprio a Torino diresse il kolossal <i>Cabiria</i> e il critico 
                        cinematografico Francesco Pasinetti.
                    </p>
                    <p>
                        Arrivarono così i primi cimeli e i documenti storici a tema, immagazzinati in una <b>sala della Mole Antonelliana</b>, concessa dal Comune di Torino. L’idea di creare un museo tornò prepotentemente intorno 
                        al 1953, ma la sede museale fu inaugurata solo nel 1958.
                    </p>
                    <p>
                        Il Museo oggi è un ente senza fini di lucro, diventato Fondazione dal 1992 per promuovere attività di studio, ricerca e documentazione in materia di cinema, fotografia e immagine.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="colr-subtitle">Alla scoperta della storia del grande schermo</h2>
                    <p>
                        All'interno della <b>Mole Antonelliana</b>, il monumento simbolo della città di <Link href='/destinazioni/piemonte/torino' className='text-decoration-none color_link'>Torino</Link>, si può ripercorrere la 
                        storia del grande schermo dalle origini a oggi tra le tante sale del Museo nazionale del cinema, in un percorso immersivo progettato dall'architetto torinese Gianfranco Gritella e dallo scenografo svizzero 
                        François Confino. 
                    </p>
                    <p>
                        Una volta varcata la soglia, vi ritroverete immersi tra scenografie, proiezioni e giochi di luce e sarete invitati a intraprendere il <b>percorso a spirale</b> verso l'alto che segue la forma della Mole 
                        Antonelliana. Sala dopo sala, livello dopo livello, si attraversano dieci aree tematiche in cui non ci si limita a osservare cimeli, poster, fotografie e filmati che illustrano la storia del cinema, ma si può 
                        passare “dietro le quinte” per scoprire i segreti che si nascondono dietro la macchina da presa. 
                    </p>
                    <p>
                        Unitamente alla visita al Museo è possibile salire fino alla <b>Cupola</b> della Mole Antonelliana, a piedi o a bordo dell'ascensore panoramico che raggiunge il Tempietto con un piccolo sovrapprezzo.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3335.1685302173564!2d7.691123499624072!3d45.06891576872959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886dfc345ca2c3%3A0xc2c991f2d588a187!2sMuseo%20Nazionale%20del%20Cinema!5e1!3m2!1sit!2sit!4v1712565656878!5m2!1sit!2sit"
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
