import React from 'react';
import { Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import Collegiata_Sant_Orso from '../../../../assets/Valle_d_Aosta/S_Orso_Valle_d_Aosta.jpg';

export default function Collegiata_di_sant_orso(props) {
  return (
    <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Colleggiata di Sant'Orso</h2>}
    >
        <main>
            <div className='margin'>
                <img src={Collegiata_Sant_Orso} alt="Ponte Romano d'Aosta" className='mx-auto my-4' style={{width: 'auto', height: 'auto'}} />
                <h1 className='color-title text-center mb-3'>Colleggiata di Sant'Orso</h1>
                <hr className='w-25 border-3'/>
            </div>
            <div className='margin'>
                <h2 className='color-subtitle'>Informazioni sulla Collegiata di Sant'Orso</h2>
                <p>
                    La visita della città di Aosta non può non toccare la <b>Collegiata di Sant'Orso</b>, un vero e proprio gioiello <b>Tardogotico</b> che merita assolutamente di essere visto! Sorge fuori dalla cinta muraria
                    di Aosta, sui resti di un'antica necropoli romana ed era il fulcro introno al quale in epoca medievale si sviluppò il borgo di Sant'Orso.
                </p>
            </div>
            <div className="margin">
                <h2 className='color-subtitle'>La Chiesa di Sant'Orso</h2>
                <p>
                    A cavallo dell'anno Mille per volere del Vescovo Anselmo l'edifico venne fortemente trasformato. La <b>Chiesa romanica di Sant'Orso</b> era divisa in tre navate ed era circondata da una cinta muraria, a cui 
                    apparteneva anche l'attuale torre companaria. Del cantiere anselmiano oggi visibili la cripta e gli affreschi ottoniani custoditi nel sottotetto. <br/>
                    Da segnalare nel coro la presenza di un pregevole mosaico risalente al XII secolo raffigurante Sansone nell'atto di uccidere il leone e circondato da una <b>frase palindroma</b>, un riferimento al Sator o 
                    quadrato magico... <br/>
                    Nel XV secolo il complesso viene profondamente rinnovato sotto la guida del colto e raffinato <b>Priore Giorgio di Challant</b>. A questo periodo appartengono gli stalli e le vestrate del coro, le volte a 
                    crociera oltre il Priorato, unico edificio in cotto della regione.
                </p>
            </div>
            <div className="margin">
                <h2 className="color-subtitle">Il chiostro romanico</h2>
                <p>
                    Il vore e proprio gioiello del complesso ursino è sicuramente il <b>chiostro romanico</b> risalente al XII secolo quando nel 1132 la bolla di Papa Innocenzo II impose la regola si Sant'Agostino ai canonici di
                    Sant'Orso. <br/>
                    I capitelli istoriati raffiguarano scene tratte dal Nuovo e Vecchio Testamento, scene della vita di Sant'Orso, personaggi e animali fantastici o elementi decorativi.
                </p>
            </div>
            <div className="margin">
                <h2 className="color-subtitle">Il Priorato di Sant'Orso</h2>
                <p>
                    Il Priorato di Sant'Orso, accanti alla Chiesa di Sant'Orso colpisce il visitatore per la sua facciata in mattoncini di terracotta, una vera e propria particolasrità in Valle d'Aosta. <br/>
                    Costruito per volere del colto e raffinato Priore Giorgio di Challant nella seconda metà del Quattrocento custodisce al suo interno un mirabile viret (scala a chiocciola) ed una cappella decarativa con un <b>ciclo 
                    di affreschi</b> dai toni cavallereschi dedicati alla figura di San Giorgio.
                </p>
                <p>
                    La cappella, riccamente affrescata, raffigura da un lato la Lagenda Aurea di San Giorgio e in un altro vi si riconosce la Vergine col bimbo che osserva amorevolmente Giorgio di Challant. Affreschi che vogliano
                    calebrare il Santo ma anche del committente dei lavori, il grande mecenate <b>Giorgio di Challant</b>.
                </p>
            </div>
            <div className="margin">
                <h2 className="color-sutitle">La Fiera di Sant'Orso ad Aosta</h2>
                <p>
                    Un luogo affascinate ed intriso di storia il cui nome, <b>Sant'Orso</b>, ai più rivoca <Link href='/visite/fiera_sa_orso' className='text-decoration-none color_link'>la millenaria fiera dell'artigianato</Link> si svolge
                    ad Aosta il 30 e 31 gennaio. <br/>
                    Secondo la tradizione proprio Sant'Orso era solito distribuire ai più poveri delle calzature in legno (sabot) sul sagrato della chiesa che porta il suo nome. 
                </p>
                <p>
                    Scopri la <b>visita guidata</b> <Link href='/visite/aosta_romana_e_medievale' className='text-decoration-none color_link'>Aosta romana e medievale</Link>
                </p>
            </div>
            <div className="margin">
                <h2 className="color-subtitle">Orari e prezzi del Chiostro romanico della colleggiata di Sant'Orso</h2>
                <p>
                    Orario del chiostro da aprire a settembre - aperto tutti i giorni dalle 9 alle 19 <br/>
                    orario del chiostro da novembre a febbraio - aperto tutti i giorni dalle 9 alle 17 <br/>
                    Orario del chiostro a marzo e a ottobre - aperto tutti i giorni dalle 9 alle 18
                </p>
                <p>
                    <b>Tariffe ridotte per persone accompagnate da guida turistica della Valle d'Aosta</b>
                </p>
                <p>
                    Chiostro romanico € 1,00 <br/>
                    Chiostro + affreschi € 3,50 <br/>
                    chiostro + affreschi + cappella € 5,00
                </p>
                <p>
                    Gratuito per minori di 6 anni, soggetti portatori di handicap in possesso della cerificazione di cui alla legge 104/92 e loro accompagnatori; per le scolaresche gli alunni pagano e i docenti hanno la gratuità
                </p>
                <p>
                    Alcuni siti sono visibili solo su richiesta come gli affreschi ottoniani risalenti al XI secolo e la Cappella del Priorato.
                </p>
            </div>
            <div className='margin mb-4'>
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d696.1480145513158!2d7.324509769665577!3d45.73927533418247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478920ae22f65dd3%3A0x1ee8d6a9addb8c6d!2sChiesa%20Collegiata%20dei%20Santi%20Pietro%20e%20Orso!5e0!3m2!1sit!2sus!4v1711548058053!5m2!1sit!2sus"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className='mx-auto mappa'
                >
                </iframe>
            </div>
            <div className='margin'>
                <h3 className='color-subtitle'>Articoli</h3>
                <ul className='lista'>
                    <li>
                        <Link href='/articoli/cosa_vedere_ad_aosta_in_un_giorno' className='text-decoration-none color_link'>Cosa vedere ad Aosta in un giorno</Link>
                    </li>
                    <li>
                        <Link href='/fiera_di_sant_orso' className='text-decoration-none color_link'>La Millenaria Fiera di Sant'Orso Aosta</Link>
                    </li>
                    <li>
                        <Link href='/artigianato_in_valle_d_aosta_una_tradizione_millenaria' className='text-decoration-none color_link'>Artigianato in Valle d'Aosta, una tradizione millenaria</Link>
                    </li>
                </ul>
            </div>
        </main>
        <Footer/>
    </AuthenticatedLayout>
  )
}
