import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';

export default function Piazza_Maggiore(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='piazza_maggiore' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Piazza Maggiore</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        <strong>Piazza Maggiore</strong> è il <b>cuore pulsante di Bologna</b>, l’<b>emblema della città</b>! Il punto di partenza da dove poter cominciare la propria visita turistica nel centro città. Quasi tutti la confondono con “Piazza Grande” la famosa canzone di Lucio 
                        Dalla, ma non è lei quella descritta nella canzone, perciò non cadete nella trappola!
                    </p>
                    <h2 className="color-subtitle">Piazza Maggiore e i suoi numerosi palazzi e attrazioni</h2>
                    <p>
                        Vicino alla piazza sono ubicati i <b>principali monumenti</b>, le <b>zone caratteristiche</b> e i <b>portici</b> che vi daranno l’impressione di essere in un vero e proprio centro medievale e rinascimentale. 
                    </p>
                    <p>
                        La <Link href='/visite/bologna/basilica_di_san_petronio' className='text-decoration-none color_link'>Basilica di San Petronio</Link>, imponente, e particolare per la differenza di architettura, sarà la prima cosa che vi balzerà all’occhio. 
                    </p>
                    <p>
                        Ma non è tutto, gli altri monumenti antichi che vedrete su <strong>Piazza Maggiore</strong> sono: Palazzo dei Notai, il Palazzo d’Accursio, il Palazzo del Podestà e il Palazzo dei Banchi. Il più antico è il Palazzo del Podestà, chiude la piazza a nord, risale al 1200 ed è sormontato dalla Torre dell’Arengo.
                    </p>
                    <p>
                        La parte centrale della piazza è caratterizzata da una piattaforma rialzata pedonale, soprannominata “<b>il crescentone</b>”. 
                    </p>
                    <p>
                        La piazza fu edificata dove originariamente era presente solo un terreno erboso e nell’anno 1200 il Comune iniziò ad acquisire case e terreni per costruire una piazza che da un lato avrebbe dovuto rappresentare l’importanza dell’istituzione comunale e dall’altro riunire le varie attività 
                        cittadine (scambi, commerci e servizi di vario genere), infatti divenne pure <b>sede di mercato</b>. 
                    </p>
                    <p>
                        L’area che adesso conosciamo come <strong>Piazza Maggiore</strong>, in realtà all’origine era senza nome. Cambiò diverse volte il nome, fino ad arrivare nel <b>1945 ad ottenere il nome attuale</b> “<strong>Piazza Maggiore</strong>”. È una delle primissime piazze, se non la prima, ad essere 
                        costruita in Italia dopo la caduta dell’impero romano, quando le “piazze” erano le basiliche e i fori. È proprio in questo periodo che in Italia si ritorna al concetto di “piazza” come luogo pubblico d’<b>incontro e aggregazione</b>.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2002.9563668289613!2d11.342053679009345!3d44.49380388388696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd49586d65539%3A0x3ec4fc9a3ae6b51e!2sPiazza%20Maggiore!5e1!3m2!1sit!2sit!4v1712998793948!5m2!1sit!2sit"
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
