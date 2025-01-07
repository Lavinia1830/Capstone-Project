import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Ponte_Vittorio_Emanuele_I(props) {
    return (
        <>
            <Head title="Ponte Vittorio Emanuele I"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='ponte_vittorio_emenuele_1' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Ponte Vittorio Emanuele I</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            In passato quasi tutte le città di una certa importanza e posizione strategica furono costruite nei pressi di un fiume altrettanto importante: <b>Torino</b> non fa eccezione a questa regola ed è infatti attraversata dal grande <b>fiume Po</b>. 
                            A unire le due sponde del fiume e le varie parti delle città ci sono i ponti, nuovi o antichi, che spesso sono protagonisti di battaglie, storie e curiosi aneddoti.
                        </p>
                        <p>
                            È il caso del <strong>Ponte Vittorio Emanuele I</strong>, il più importante ponte della città che collega <b>Piazza Vittorio Veneto</b> con la <b>piazzetta Gran Madre di Dio</b>, sulla riva destra del Po, e la cui storia si incrocia niente di 
                            meno che con quella di <b>Napoleone Bonaparte</b>.
                        </p>
                        <p>
                            Durante il dominio francese dell’Ottocento, Napoleone ordinò infatti la costruzione di questo ponte per attraversare il fiume Po e per unire in maniera strategica varie zone di Torino. Il nuovo ponte doveva essere prima di tutto utile, ma allo 
                            stesso tempo molto imponente poiché aveva anche lo scopo di glorificare il generale francese come Re D’Italia. Difatti, questo sarebbe diventato <b>il primo ponte in pietra della città sabauda</b>, in sostituzione all’allora ponte di legno 
                            provvisorio. Il progetto del ponte fu affidato all’ingegnere francese <b>Claude Joseph La Ramèe Pertinchamp</b>, e la prima pietra fu posata, con una grande cerimonia, il 22 novembre del 1810.
                        </p>
                        <p>
                            Le cose andarono però diversamente da come Napoleone Bonaparte aveva immaginato e oggi questo ponte è noto come Ponte Vittorio Emanuele I poiché ovviamente non fu completato sotto il dominio del generale francese che nel frattempo era stato 
                            mandato in esilio sull’Isola di Sant’Elena. Al suo posto, rientrò in città <b>Vittorio Emanuele I</b> che, nonostante gli abitanti di Torino chiedessero a gran voce di eliminare il ponte in quanto simbolo del dominio francese, decise di terminare 
                            la costruzione poiché ritenuta di fondamentale importanza per la città. In onore del sovrano il ponte, una volta terminato, prese il nome di Ponte Vittorio Emanuele I. I precedenti collegamenti che attraversavano il fiume Po in città erano infatti 
                            tutti temporanei e realizzati in legno, materiale molto meno resistente. Il Ponte Vittorio Emanuele I, invece, sarebbe diventato il collegamento saldo e principale da una piazza all’altra della città di Torino, in continua espansione. Come gesto 
                            di rivincita nei confronti dei francesi però, si racconta che Vittorio Emanuele I avesse detto che ogni volta che passava sul ponte gli sembrava di calpestare la Francia e una delle sue opere.
                        </p>
                        <p>
                            Come spesso accade per queste opere storiche della città, c’è <b>una storia nella storia</b> che ne arricchisce il fascino e ne aumenta il mistero. In questo caso il mistero è legato al <b>tesoro nascosto</b> proprio nella costruzione che collega 
                            oggi piazza Vittorio con la <Link href='/visite/piemonte/torino/chiesa_della_gran_madre' className='text-decoration-none color_link'>Chiesa della Gran Madre</Link>. Non si tratta in realtà di una cosa molto strana per quell’epoca; al contrario, si 
                            narra che in diverse costruzioni cittadine siano sepolti dei veri e propri tesori. Per quanto riguarda il ponte torinese, sembra che all’interno del pilastro centrale, in piena costruzione, sia stato murato un vero tesoro: <b>79 monete di oro, 
                            argento e bronzo</b>, coniate per celebrare le gesta e le conquiste dell’allora Imperatore Napoleone (tra cui per esempio la conquista dell’Egitto, la presa di Vienna del 1805, l’arrivo al Frejus), <b>un metro in argento massiccio</b>, altre <b>10 
                            monete di conio più recente, due targhe in metallo</b> con iscrizioni commemorative di Vernazza in latino e di Déperret in francese, i due membri emeriti dell’Accademia delle Scienze, che spiegavano le motivazioni della costruzione del ponte. Le 89 
                            monete furono poi chiuse dentro a uno scrigno di legno mentre il metro e le tavolette furono chiusi in un tubo di vetro lavorato. Posti entrambi poi in un contenitore di piombo, resistente al peso della costruzione, che fu incastonato quindi nel 
                            pilone centrale del ponte Vittorio Emanuele I che custodisce questo piccolo tesoro torinese.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d835.9681232827256!2d7.69695529879903!3d45.06322962979516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4788729e087376c5%3A0x776bc5b5dd0da2a!2sPonte%20Vittorio%20Emanuele%20I!5e1!3m2!1sit!2sit!4v1715347293440!5m2!1sit!2sit"
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
