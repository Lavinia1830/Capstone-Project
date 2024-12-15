import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Portofino(props) {
    return (
        <>
            <Head title='Portofino'/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='portofino' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Portofino</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Città</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            <strong>Portofino</strong> è un piccolo borgo ligure di <b>antichissime origini</b> e a testimoniarlo è il centro del paese che conserva l’impianto a maglie ortogonali dell’età imperiale romana. La strada principale è via Roma, che porta verso il mare. Alla sua destra si erge l’oratorio di Nostra Signora Assunta con un caratteristico portale in ardesia risalente al XVI secolo. Percorrendo fino al termine la via Roma si giunge alla cosiddetta “piazzetta”, ovvero piazza Martiri dell’Olivetta, che è un concentrato di negozi, boutique, ristoranti e gelaterie, tutti racchiusi all’interno dei suoi portici.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Una gemma tra i Monti Liguri</h2>
                        <p>
                            In genere si arriva battello alla <strong>Baia di Sana Fruttuoso</strong>, imbarcandosi dalle località vicine oppure 
                            da <Link href='/destinazioni/ligure/genova' className='text-decoration-none color_link'>Genova</Link>. <br/>
                            Cominciare a scorgere la caletta è meraviglioso. L'acqua è di una <b>trasparenza cristallina</b>, lascia intravvedere i ciotti bagna 
                            dolcemente la riva. Il <b>verde e ridosso brilla</b>, labbazia aggiunge un'atmosfera sacra e solenne a un santuario della natura. Siamo 
                            nel <Link href='/visite/liguria/portofino/parco_nazionale_regionale_di_portofino' className='text-decoration-none 
                            color_link'>Parco Naturale Regionale di Portofino</Link>, in un'area marina protetta. qui si possono nologgiare lettini e ombrelloni restando 
                            sulla spiaggia, oppure camminare sugli scogli vicini e fermarsi in siaprte. Tuffatevi oppure organizzatevi per fare <b>snorkeling</b>.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">I piaceri della tavola e un soggiorno speciale</h2>
                        <p>
                            C'è un piccolo bar abbarbicato sulle rocce, dove <b>l'aperitivo al tramonto</b> diventa un'esperienza vera. anche un <b>ristorante</b> offre 
                            l'opportunità di rifocillarsi, aperto a pranzo e a cena, proprio a fianco della chiesa. I tavoli si affacciano sul mare, moltiplicando il 
                            piacere di un piatto di <Link href='/cibo/liguria/trofie_al_pesto' className='text-decoration-none color_link'>trofie al pesto</Link>, la 
                            ricetta più celebre della regione, o di spagheti ai frutti di mare. <b>Poche camere consentono di soggiornare per qualche notte</b>, da 
                            maggio fino a ottobre.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">L'abbazia e il Monastero</h2>
                        <p>
                            Proprio il diffice accesso, oltre alla presenza di una <b>sorgente di acqua dolce</b>, ha reso il luogo adatto alla fondazione di un edificio
                            sacro nell'<b>ottavo secolo</b>. La chiesa e il monastero hanno subito da allora vicissitudini e una serie di restauri e oggi è 
                            di <b>proprietà del FAI, il Fondo Ambientale Italiano</b>. Vale senz'altro la pena visitare il complesso, in particolare <b>il chiostro e i 
                            sepolcri dei Doria</b>, potente strirpe genovese; soffermatevi ad asservare i reperti archeologici, per poi fare quattro passi nel <b>minuscolo 
                            borgo</b>. non troverte negozi e boutique, ma soltanto un pugno di case, in un'atmosfera autentica.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Una statua ancorata al fondale</h2>
                        <p>
                            Il mare della <strong>Baia di San Fruttuoso</strong> nesconde una sorpresa nelle sue prondità: è il <b>Cristo degli Abissi</b>. A 300 metri 
                            dalla spieggia e a 15 di profondità, la statua è stata posata, o meglio inabissata, nel 1954. Alta 2,50 metri e opera dello sculture Guido 
                            Galletti, <b>raffigura il Cristo con le braccia rivolte verso l'alto</b>. L'immersione per ammirarla da vicino è adatta anche a subacquei 
                            di media esperienza, vista la scarsa profondità, ma si può effettuare soltanto giudati da accompagnatori cerificati.
                        </p>
                        <p>
                            Se siete nutatori provetti, potete anche <b>spingervi fin lì a nuoto</b>, ponendo però massima attenzione alle imbarcazioni che solcano il mare. 
                            L'acqua è limpidissima e la visione chiara anche solo della superficie.
                        </p>
                        <p>
                            Un'alternativa? <b>Arrivare in prossimità dell'opera in kayak o con lo stand up paddle</b>.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Trekking panoramico</h2>
                        <p>
                            La <strong>Baia di San Fruttuoso</strong> si raggiunge anche attraverso numerosi sentieri, <b>partendo da San Rocco o Portofino, in circa 
                            due ore</b>. Ma vi innamorerete del paesaggio, tra monti e mare, al punto che avrete voglia di proseguire l’esplorazione.
                        </p>
                        <p>
                            Siamo nel <Link href='/visite/liguria/portofino/parco_nazionale_regionale_di_portofino' className='text-decoration-none color_link'>Parco 
                            di Portofino</Link>, un’area protetta, con <b>80 chilometri di percorsi</b> ideali per un fantastico trekking naturalistico. Mentre la 
                            costa vi si spalanca dall’alto, rivelando l’intricata geografia di <b>golfi, insenature, baie, porticcioli e promontori</b>, camminerete 
                            tra castagni e ulivi, pinete e boschi di lecci, <b>frutteti e agrumeti</b>. Passo dopo passo, respirerete un’aria tersa e il profumo 
                            di <b>erica, corbezzolo, lentisco, euforbia e mirto</b>. Probabilmente farete incontri con ricci e <b>scoiattoli</b> che qui dimorano 
                            placidi.
                        </p>
                        <p>
                            Se decidete di partire da <b>Portofino</b>, 
                            fermatevi per visitare l’intero borgo. Il <b>porticciolo è uno dei più celebri al mondo</b> e pullula di <b>lussuosi yacht</b>. Potrete 
                            ammirarli da terra, sedendo in uno dei tanti <b>eleganti locali</b>. Poi salite verso l’alto, le <b>ville</b> celate tra il verde sono 
                            leggendarie e la passeggiata sul sentiero tra <b>pini marittimi e muretti a secco</b> è un autentico piacere. A piedi si può arrivare 
                            anche a <Link href='/destinazioni/liguria/camogli' className='text-decoration-none color_link'>Camogli</Link>, tipico borgo marinaro 
                            con le <b>case variopinte</b> affacciate sul bellissimo, breve lungomare.
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}