import React  from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Monterosso_al_Mare(props) {
    return (
        <>
            <Head title='Monterosso al Mare'/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='monterosso_al_mare' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Monterosso al mare</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Borghi</p>
                    </div>
                    <div className='margin mt-3'>
                        <p>
                            <strong>Monterosso al Mare</strong> è un antico borgo che fa parte delle <Link href='/destinazioni/liguria/cinque_terre' 
                            className='text-decoration-none color_link'>Cinque Terre</Link>. Il promontorio di S. Cristoforo devide il paese in due nuclei distinti. 
                            Alla foce del torrente Buranco, nella parte est si trovano le spiaggia e stradine ripide e strette che si arrempicano sul colle.<br/>
                            Le due strade principali sono le parallele <b>via Roma</b> e <b>Via Vittorio Emanuele</b> ma altrettanto importante è l'alberata piazza 
                            Garibaldi, risale al XII-XIV secolo, con la chiesa di S. Giovanni Battista affiancata da un alto campani;e (una volta torre di avvistamento).
                            La facciata è molto caratteristica: presenta, infatti, <b>bande orizzontali</b> nere e un grnade rosone cesellato: nella lunetta del portale 
                            spicca invece il <i>Battesimo di Gesù</i>, affresco settecentesco. Durante l'epoca barocca venne rimaneggiato l'interno della chiesa e ideato 
                            un fonte battesimale, tutt'oggi presente. Il convento dei Cappuccini domina, invece, il <b>colle S. Cristoforo</b>, con la chiesa di S. Francesco.
                            La sua cappella sinistra conserva una <i>Crocifissione</i>, secondo alcuni opera del fiammingo Antton van Dyk, ma probabilmente creazione di un 
                            pittore locale. Nella cappella di destra spicca invece una settecentesca pala raffigurante la Madonna Immacolata del genovese Giuseppe Palmieri.
                        </p>
                        <p>
                            Se percorrete la via Roma verso l'alto si trovano indicazioni per intraprendere il sentiero n. 509, che conduce al <b>sentiero della Madonna di 
                            Soviore</b>, a un'altitudine di 418 metri. Il santuario, circondato da un meravigliosos bosco di lecci e cipressi, è meta di pellegrinaggi: i fedeli
                            vi si recano per ammirare, nella chiesa tardo duesentesca, una statua della Pietà risalente al '300. Proprio per i pellegrini, annessa alla chiesa 
                            era stata annessa una foresteria, che offriva rifugio ai viandanti.
                        </p>
                        <p>
                            Poco distante dal borgo si trova <b>Fregina</b>, zona turistica che costituisce una meta di villeggiatura in cui soggiornò addirittura Eugenio 
                            Montale con la sua famiglia.<br/>
                            Passeggiando sulla sua spiaggia è possibile avvistare la grande <b>statua del Gigante</b>, una scultura che rappresenta il dio Netturo e che è il 
                            simbolo del paese. Se in possesso della Cinque Terra Card, è possibile partecipare gratuitamente (tra aprile e agosto) alle escursioni a tema 
                            naturalistico e letterario alla scoperta dei luoghi descrtto in <i>Punta Mesco</i>, <i>La casa del Doganiere</i> e <i>Meriggiare pallido e assorto</i>. 
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
