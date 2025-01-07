import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Sacra_di_San_Michele(props) {
    return (
        <>
            <Head title="Sacra di San Michele"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='sacra_di_san_michele' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Sacra di San Michele</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">La Sacra di San Michele in Val di Susa, l’abbazia che scala il cielo</h2>
                        <p>
                            La <a href='https://sacradisanmichele.com/' className='text-decoration-none color_link'>Sacra di San Michele</a> in <b>Val di Susa</b> è a quasi 1000 metri 
                            di altezza in cima a monte Pirchiriano.<br/>
                            L’Abbazia che <b>ha ispirato Umberto Eco per il romanzo <span className='fst-italic'>Il nome della rosa</span></b> è un capolavoro. Il monumento simbolo 
                            del Piemonte è anche la ,<b>prima tappa italiana della via Francigena</b>. Dall’alto delle sue torri si domina con lo sguardo l’intera valle alpina situata 
                            nella parte occidentale del <Link href='/piemonte' className='text-decoration-none color_link'>Piemonte</Link>.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Dal castrum romano alla chiesa romanica</h2>
                        <p>
                            La prima chiesa fu costruita intorno al 983-987. Secondo la leggenda, l’<b>arcivescovo di Ravenna Giovanni Vincenzo</b>, che qui viveva da eremita, ebbe una 
                            visione: l’Arcangelo Michele in persona gli ordinava di costruire un santuario, poi consacrato proprio dagli angeli. Nacque così il nucleo più antico 
                            dell’abbazia.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">L’arrivo dei Benedettini</h2>
                        <p>
                            Via via la chiesa si ingrandì con una cripta e un piccolo cenobio per ospitare i monaci e i pellegrini di passaggio lungo la via Francigena. Sulla chiesa 
                            primitiva nel XII secolo sorse la <b>Nuova Chiesa in stile romanico-gotico</b>, sul punto più alto del monte.
                        </p>
                        <p>
                            Il <b>Nuovo Monastero</b>, oggi in rovina, fu edificato poco dopo per migliorare la vita quotidiana dei monaci benedettini: nuove celle, cucine, refettorio, 
                            laboratori e una biblioteca. La Sacra diventò un importante centro di cultura e spiritualità.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Fino al cielo e oltre</h2>
                        <p>
                            La costruzione si fece via via più ardita. Dalla quota dei 962 del monte Pirchiriano si arrivò a 1000 metri di altezza. La colossale facciata di pietra si 
                            eleva per 40 metri contro il cielo. Da vertigine. Proprio qui, all’ingresso principale, si trova la <b>statua di San Michele</b> alta più di 5 metri e 
                            scolpita da Paul dë Doss-Moroder.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">I padri Rosminiani e i reali Savoia</h2>
                        <p>
                            L’era benedettina terminò nel 1622. Restavano solo 3 monaci, allora, e la Sacra fu abbandonata per secoli. Solo nel 1836 fu riaperta, stavolta dai padri 
                            Rosminiani a cui fu affidata anche la cura dei membri <b>defunti della casa reale Savoia</b>. Le salme, traslate qui dal duomo di Torino, riposano ora 
                            nelle Antiche Sale. Da allora la Sacra è rimasto un luogo di pace con l’eccezione di una turbolenta incursione durante la seconda guerra mondiale, quando 
                            l’abbazia fu perquisita dai soldati tedeschi.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">La scala dei morti e la porta dello zodiaco</h2>
                        <p>
                            Si chiama così perché lo scalone era fiancheggiato da un gran numero di tombe e di <b>scheletri di monaci</b> sistemati in nicchie lungo tutta l’altezza della 
                            scala, dove rimasero fino al 1936. Salendo lungo lo scalone qua e là emerge la roccia viva su cui è stato costruito il monastero. Fatevi coraggio, <b>i gradini 
                            per arrivare in cima sono ben 243</b>.
                        </p>
                        <p>
                            Alla fine della scala si trova l’affascinante porta dello zodiaco, con gli stipiti della porta decorati da <b>segni zodiacali e costellazioni</b> scolpiti 
                            nella pietra a ricordare l’inevitabile scorrere del tempo. Aguzzando la vista scorgerete anche i capitelli che raffigurano Caino e Abele, tre persone che 
                            litigano tirandosi i capelli e due donne che allattano serpenti.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">La torre della Bell’Alda</h2>
                        <p>
                            Sul lato nord del complesso, isolata dal resto, c’è la torre della Bell’Alda, legata alla <b>leggenda di una fanciulla in fuga</b> da un gruppo di soldati. 
                            Messa alle strette sulla cima della torre, senza vie di fuga, preferì lanciarsi nel precipizio che essere catturata. Gli angeli accorsero in suo aiuto e la 
                            salvarono. Quando raccontò in paese cosa era successo nessuno le credette. Allora si lanciò nuovamente dalla torre per dimostrare che diceva la verità, ma 
                            stavolta finì male.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">La linea magica di San Michele</h2>
                        <p>
                            Una delle storie più misteriose e affascinanti della Sacra di San Michele riguarda una <b>linea che unisce 7 luoghi dedicati all’Arcangelo Michele</b>: 
                            l’isola di Skellig Michael in Irlanda, Saint Michael’s Mount nel Regno Unito, Mont Saint Michel in Francia, la Sacra di San Michele in Piemonte, il Santuario 
                            di San Michele Arcangelo in Puglia, il Monastero di San Michele Arcangelo di Panormitis in Grecia e il Monastero Stella Maris sul Monte Carmelo in Israele.
                        </p>
                        <p>
                            Vuole la leggenda che la linea lunga 2000 chilometri sia stata tracciata dallo stesso San Michele con la sua spada lottando contro il diavolo. Pare che se ne 
                            possa percepire la potenza mettendosi su una particolare piastrella del pavimento più chiara delle altre, all’interno della chiesa, subito dopo l’entrata a 
                            sinistra. Si dice che lassù le bussole smettano di funzionare.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Arrivare camminando</h2>
                        <p>
                            Il modo più autentico ed emozionante per raggiungere la Sacra di San Michele è <b>camminando come gli antichi pellegrini</b>. Ci sono due itinerari a piedi 
                            che richiedono circa un’ora e mezza di cammino. Il primo collega la Sacra al paese di Chiusa di San Michele, l’altro conduce al paese di Sant’Ambrogio. Da qui 
                            inizia anche il Sentiero dei Franchi che collega la Sacra all’Alta Val Susa.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2548.7403049746326!2d7.3402767678714325!3d45.09695091667794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4788487b8aa4786b%3A0xcdef9c40b489db51!2sSacra%20di%20San%20Michele%2C%2010057%20Sant&#39;Ambrogio%20di%20Torino%20TO!5e1!3m2!1sit!2sit!4v1716901281717!5m2!1sit!2sit"
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
