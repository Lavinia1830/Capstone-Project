import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Basilica_di_Sant_Andrea(props) {
    return (
        <>
            <Head title="Basilica di Sant'Andrea"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='basilica_di_sant_andrea' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Basilica di Sant'Andrea</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Simbolo della città, la <a href='https://santandreavercelli.com/' className='text-decoration-none color_link'>Basilica di Sant’Andrea</a> di 
                            <b> Vercelli</b> è anche <b>una delle prime chiese gotiche in Italia</b>. <br/>
                            I due campanili sulla facciata di pietra verde, la torre ottagonale e un perfetto incontro fra la tradizione romanica e l’arte gotica ne 
                            fanno un vero gioiello da scoprire. Senza dimenticare di esplorare il vicino monastero con il chiostro rinascimentale e la sala capitolare 
                            dalle volte gotiche.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Tutto ebbe inizio nel 1219</h2>
                        <p>
                            Era il 1219 quando il <b>cardinale Guala Bicchieri</b> fondò l’abbazia, completata 8 anni dopo quando già si facevano sentire le influenze 
                            del gotico europeo. La chiesa fonde sia lo stile romanico tipico della zona che i primi influssi dell’arte gotica. L’architetto del complesso 
                            era aggiornatissimo sulle ultime tendenze.
                        </p>
                        <p>
                            Il cardinale era appena tornato dall’Inghilterra, doveva aver portato a termine con successo una delicata missione come legato pontificio e 
                            aveva ricevuto ricchi doni. Aveva dunque a disposizione i fondi per edificare l’abbazia, che poi affidò a monaci Vittorini fatti arrivare 
                            apposta da Parigi.
                        </p>
                        <p>
                            Per sé il cardinale riservò una delle lunette sui portali, quella di sinistra. Lì si trova il suo ritratto su pietra mentre offre la chiesa a 
                            Sant’Andrea, il cui martirio si racconta nella lunetta del portale centrale.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Torri, rosoni e colori</h2>
                        <p>
                            Due torri svettano ai lati della facciata, una struttura insolita per l’Italia del Nord. Vi si aprono tre portali strombati, un grande rosone 
                            e loggette che danno movimento all’insieme. Si gioca anche con i colori: intonaco bianco, mattoni rossi e pietra verde. Il risultato è un 
                            colpo d’occhio eccezionale. Il <b>gioco cromatico</b> si ritrova anche dentro la chiesa, con i forti contrasti tra il bianco e il rosso che 
                            sottolineano le strutture architettoniche.
                        </p>
                        <p>
                            Nel tempo il complesso è rimasto quasi immutato. L’abside rettangolare in stile cistercense, le tre navate, contrafforti e archi rampanti 
                            tipici dell’architettura gotica sono lì da otto secoli. Fa eccezione il nuovo campanile, costruito sul lato destro nel XV secolo, isolato e 
                            ancora il più alto della città con i suoi 65 metri. La sua posizione è sghemba rispetto alla basilica, perché probabilmente per costruirlo 
                            furono usate fondamenta di un vecchio campanile demolito prima della costruzione della chiesa.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Il chiostro</h2>
                        <p>
                            Dei locali del <b>monastero</b> costruito di fianco alla basilica per ospitare i monaci resta una magnifica <b>aula capitolare</b> con 
                            quattro colonne centrali a reggere le nove arcate della volta. Ma si è conservato anche il <b>chiostro, costruito nel XIII secolo</b> e 
                            rimaneggiato 300 anni dopo, quando i canonici Lateranensi presero il posto dei Vittorini. È il cuore del monastero, con capitelli a crochet 
                            e affreschi che si affacciano su un giardino con un pozzo. Si accede dalla navata sinistra della basilica.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color_subtitle">L’ospedale di Sant’Andrea</h2>
                        <p>
                            Il cardinale, non contento di aver costruito una basilica e un monastero, volle anche un <b>edificio per ospitare i pellegrini</b> che nel 
                            corso del tempo continuò ad ampliarsi. Della costruzione originaria restano il porticato e un salone affrescato.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">La leggenda del lago sotterraneo</h2>
                        <p>
                            Secondo una <b>leggenda</b>, la basilica è stata costruita su un lago sotterraneo ampio quanto l’edificio e a cui si accede tramite 
                            una <b>scaletta scavata nella pietra di una piccola grotta</b>. Percorrendola, si raggiungerebbe il misterioso bacino d’acqua. Il motivo per 
                            cui si è diffusa la leggenda è che sotto la basilica potrebbe esserci una falda acquifera, ma certo è una versione molto meno affascinante 
                            rispetto alla storia del lago sotterraneo.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d754.6608379352353!2d8.41837533718231!3d45.32890211944877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47864c628e5cd4f5%3A0xcf8a83199030ffca!2sBasilica%20di%20Sant&#39;Andrea!5e1!3m2!1sit!2sit!4v1716382324450!5m2!1sit!2sit"
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
