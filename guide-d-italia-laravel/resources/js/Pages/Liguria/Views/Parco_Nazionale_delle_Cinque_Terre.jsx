import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';

export default function Parco_Nazionale_delle_Cinque_Terre(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='parco_nazionale_delle_cinque_terre' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Parco Nazionale delle Cinque Terre</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Liguria, Parco Nazionale delle Cinque Terre: tra sentieri e mare</h2>
                    <p>
                        È tra i più piccoli d'Italia e, al contempo, il più densamente popolato: il <strong>Parco Nazionale delle Cinque Terre</strong>, con il suo paesaggio atipico e 
                        fortemente alterato dall'uomo, è diventato <b>Patromonio Mondiale dell'Umanità</b>.
                    </p>
                    <p>
                        Si configura come il <b>vero tratto identitario delle</b> <Link href='/destinazioni/liguria/cinque_terre' className='text-decoration-none color_link'>Cinque 
                        Terre</Link> e offre ai suoi visitatori una rete sentieristica costellata di itinerari panoramici di cui è impossibile non innamorarsi.
                    </p>
                    <p>
                        Il sentiero si conclude a <Link href='/borgo/liguria/lerici' className='text-decoration-none color_link'>Lerici</Link>, splendido borgo che vi offrirà una vista 
                        panoramica sul <Link href='/visite/liguria/lerici/castello_doria_di_o-porto_venere' className='text-decoration-none color_link'>Castello Doria di Porto Venere</Link>.
                        Fermatevi qui per riposarvi, dopo tanta fatica, e concedervi un piatto di <i>tagiain ai fasei</i> con il pesto o di coniglio in umido vista mare.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle"></h2>
                    <p>
                        I sentieri delle Cinque Terre sono stati per secoli l'unica forma di collegamento tra un paese e l'altro. Parliamo di una rete di 120 chilometri, che oggi vi 
                        consente di sttraversare in lungo e in largo l'interno territorio, proponendovi percorsi diversi.
                    </p>
                    <p>
                        Potete scegliere, tra i tanti, l'itinerario dei vigneti terrazzati, che si snoda da <Link href='/borghi/liguria/cinque_terre/riomaggiore' 
                        className='text-decoration-none color_link'>Riomaggiore</Link> a <Link href='/borghi/liguria/cinque_terre/corniglia' 
                        className='text-decoration-none color_link'>Corniglia</Link>, <b>ma solo se siete degli escursionisti esperti</b>, perché è un tragitto lungo oltre 8 chilometri 
                        e con 73 metri di sislivello. Camminerete lungo orti coltivati, fino al crinale della Costa Corniolo: da qui ammirerete la punta Montenero e levante e il Golfo 
                        delle Cinque Terre a ponente. Poi, con l'antica scalinata, in parte in pietra e in parte scavata nella roccia, scenderete 
                        verso <Link href='/borghi/liguria/cinque_terre/manarola' className='text-decoration-none color_link'>Manarola</Link>, con le sue scenografiche visuali.
                    </p>
                    <p>
                        Vi affascinerà anche l'Itinerario Insediamenti Antichi, che congiunge Riomaggiore a Fossola. Un sentiero ancora più lungo, di 11 chilometri, che corre tra muri 
                        a secco, affiancati dal torrente Rio Major, tra ontani e sambuchi neri.
                    </p>
                    <p>
                        Ai più romantici consigliamo la Via dell'Amore, passeggiata interamente lastricata a picco sul mare, che da Riomaggiore consente in pochissimo tempo di 
                        raggiungere il Borgo di Manarola, regalando incantevoli scorci.
                    </p>
                    <p>
                        E ancora, gli Itinerari Santuari e Chiese, come quello che parte dall'abitato di <Link href='borghi/liguria/cinque_terre/monterosso_al_mare' 
                        className='text-decoration-none color_link'>Monterosso</Link> e si dirige verso il Santuario di N.S. di Soviore, <b>alternando scalinata a lunghi tratti di sterrato,
                        attraverso case, macchia mediterranea e fitti boschi di lecci e castagni</b>. O il sentiero per il Santuario di Reggio, che di snoda lungo le valli tra Monterosso 
                        e <Link href='/borghi/liguria/cinque_terre/vernazza' className='text-decoration-none color_link'>Vernazza</Link> tra i 500 e 350 metri di quota.
                    </p>
                    <p>
                        Da non perdere anche il <b>Parco Letterario di Monterosso</b>, dedicao e Eugenio Mantale, dove vivrete in prima persona le emozioni che il poeta ligure ha saputo
                        esprimere nei suoi versi in un abbraccio tra are e terra.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Il Santuario dei Cetacei</h2>
                    <p>
                        Le acque che bagnano i cinque boeghi gioiello, incastonati tra mare e colline, sono particolarmente importanti dalpuno di vista biologico e così ricche di 
                        nutrienti da essere paragonate a quelle atlantiche.
                    </p>
                    <p>
                        Il modo perfetto per concludere il vostro soggiorno al <strong>Parco Nazionale delle Cinque Terre</strong> è sicuramente quello di visitare il Santuario di 
                        Catecei. In quest'area, infatti, nella bella stagione potrette assistere a uno spettacolo magico, <b>avvistando le balene, i delfini e i capodogli che trovano 
                        nel</b> <Link href='/mar/mar_ligure' className='text-decoration-none color_link'>Mar Ligure</Link> <b>l'habitat ideale</b> e le condizioni necessarie 
                        all'approvvigionamento del cibo e alla roproduzione.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2016.2375392865854!2d9.818417463823902!3d44.10577460815657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d4fc991eeb0259%3A0xe1fc17c68715cea7!2sVia%20del%20Prione%2C%20La%20Spezia%20SP!5e1!3m2!1sit!2sit!4v1712848913442!5m2!1sit!2sit"
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
