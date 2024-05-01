import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';


export default function Breve_Storia(props) {
    return (
        <>
            <Head title="Breve Storia"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='breve_storia' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Breve Storia</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p className='fst-italic'>
                            La Venaria Reale è un grande “progetto culturale permanente” che offre opportunità di conoscenza ed emozioni.
                        </p>
                    </div>
                    <div className='mb-3'>
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/EBWo4gdwGg8?si=Mn2l0Cm8Mm3M6j6V" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen
                            className='mx-auto'>
                        </iframe>
                    </div>
                    <div className='margin mt-3'>
                        <p>
                            La Venaria Reale è una <b>Corte dei contemporanei</b> aperta a tutti, che si propone come scoperta di esperienze molteplici, un viaggio nella “Reggia d’Italia” dove, puntando sulla valorizzazione del nostro patrimonio storico, paesaggistico e 
                            gastronomico, si possono trovare “regalità e piacere di vivere”.
                        </p>
                        <p>
                            La Venaria Reale, grandioso complesso alle porte di Torino con 80.000 metri quadri di edificio monumentale della Reggia e 60 ettari di Giardini, beni adiacenti al seicentesco Centro Storico di Venaria ed ai 3.000 ettari recintati del Parco La 
                            Mandria, è un capolavoro dell’architettura e del paesaggio. 
                        </p>
                        <p>
                            Dichiarato <b>Patrimonio dell’Umanità dall’Unesco nel 1997 è aperto al pubblico nel 2007</b> dopo essere stato il cantiere di restauro più rilevante d’Europa per i beni culturali.
                        </p>
                        <p>
                            L’edificio monumentale, <b>vanta alcune delle più alte espressioni del barocco universale</b>: l'incantevole scenario della <b>Sala di Diana</b> progettata da Amedeo di Castellamonte, la solennità della <b>Galleria Grande</b> e della 
                            <b> Cappella di Sant’Uberto</b> con l’immenso complesso delle <b>Scuderie Juvarriane</b>, opere settecentesche di Filippo Juvarra, le fastose decorazioni, la spettacolare <b>Fontana del Cervo</b> nella Corte d’onore rappresentano la cornice 
                            ideale del Teatro di Storia e Magnificenza, il percorso espositivo dedicato ai Savoia che accompagna il visitatore lungo quasi 2.000 metri, tra piano interrato e piano nobile della Reggia.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className='color-subtitle'>Breve Storia della Reggia di Venaria</h2>
                        <h3 className='color-subtitle'>1658-1699: la Residenza di piacere e caccia</h3>
                        <p>
                            A metà del XVII secolo il duca <b>Carlo Emanuele II</b> di Savoia e la duchessa Maria Giovanna Battista di Savoia Nemours decidono di costruire un nuovo gioiello da aggiungere alla corona di residenze che circonda Torino. L’incarico di disegnare 
                            un luogo destinato al piacere e alla caccia viene assegnato all’architetto di corte <b>Amedeo di Castellamonte</b>. Il progetto, di grandioso impatto scenografico, comprende il palazzo, il parco, i boschi di caccia e un intero borgo. La residenza 
                            nasce insieme ai giardini all’italiana e un gioco di sculture, e poi ancora: fontane, scalinate spettacolari e terrazze su più livelli, un Parco alto al piano del palazzo e un Parco basso al piano della Peschiera. L’intera composizione è resa unica 
                            dalla linea prospettica che taglia il Borgo e continua nel cuore della Reggia lungo il canale che collega la Fontana d’Ercole al Tempio di Diana.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h3 className='color-subtitle'>1699-1798: il Palazzo dei Re</h3>
                        <p>
                            A partire dal 1699 l’architetto <b>Michelangelo Garove</b> progetta nuovamente il complesso della Reggia per darle un carattere più grandioso, secondo le ambizioni di <b>Vittorio Amedeo II</b>. I Giardini vengono completamente ridisegnati alla francese, 
                            con prospettive aperte sull’infinito e un nuovo respiro, come detta il gusto della più grande corte europea, Versailles. Intanto il duca diventa re: nel 1716 affida il progetto di ampliamento a <b>Filippo Juvarra</b>, che con la sua Galleria Grande, 
                            la Cappella di Sant’Uberto, la Citroniera e la Scuderia, porta la Reggia tra i capolavori del barocco. Nel 1739 <b>Carlo Emanuele III</b> incarica <b>Benedetto Alfieri</b> di dare unità al complesso con un sistema di gallerie di comunicazione e ambienti 
                            di servizio, tra cui le scuderie e il maneggio coperto. La Reggia prosegue la sua vita di corte durante il regno di <b>Vittorio Amedeo III</b> e di <b>Carlo Emanuele IV</b>, fino al declino dell’Antico Regime.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h3 className='color-subtitle'>1798-1999: il periodo militare e il declino</h3>
                        <p>
                            La trasformazione della Reggia in <b>caserma</b> comincia all’inizio dell’Ottocento dopo l’arrivo di <b>Napoleone</b>, la fuga e il successivo ritorno dei Re. Scompare il disegno dei Giardini, spianati in una piazza d’armi per le esercitazioni militari. 
                            Cavalli, cannoni e moschetti sostituiscono aiuole, fontane e sculture. Il complesso conosce le divise delle guerre d’Indipendenza e quelle dell’esercito italiano durante la Prima e la Seconda guerra mondiale. Tolto il presidio militare, la Reggia diventa 
                            <b> preda dei vandali</b>, che spogliano il palazzo di tutti i materiali riutilizzabili. Un periodo d’oblio riscattato dai generosi tentativi della comunità e della Soprintendenza dei Beni Architettonici di scongiurare l’irreparabile.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h3 className='color-subtitle'>1999-2007: il cantiere di restauro</h3>
                        <p>
                            Il restauro della <b>Reggia</b> e dei <b>Giardini</b> è parte del <b>Progetto La Venaria Reale</b>, che include anche il recupero del <b>Borgo Antico</b> e del <b>Parco della Mandria</b>. Avviato nel 1999 dal Ministero dei Beni e le Attività Culturali e 
                            dalla Regione Piemonte, con il sostegno dell’Unione Europea e del Ministero dell’Economia e la collaborazione della Provincia di Torino, del Comune di Venaria e del Comune di Torino, il progetto riporta alla luce affreschi, decorazioni e testimonianze 
                            archeologiche attraverso metodologie di intervento all’avanguardia. È la <b>più grande opera di conservazione</b> di un bene culturale mai realizzata in Europa. 100.000 metri quadrati della superficie dell’intero complesso sono stati restaurati, 9.500 
                            metri quadrati di stucchi recuperati, 1.000 di affreschi riportati alla luce. Gli ettari di Giardini già visitabili sono 50, 200.000 le nuove piantumazioni, 11 i milioni di litri d’acqua nella Peschiera, 4.500 i metri quadrati delle Scuderie Juvarriane. 
                            Viene compiuta la riqualificazione di un intero territorio alle porte di Torino.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h3 className='color-subtitle'>1999-2007: il cantiere di restauro</h3>
                        <p>
                            L’inaugurazione - il 12 ottobre 2007 - restituisce al pubblico la Reggia e i suoi Giardini. L’architettura, la storia, il paesaggio, i moderni linguaggi artistici, capolavori d’arte e uno spettacolare ed evocativo allestimento sugli stili di vita del 
                            Seicento e Settecento offrono ai contemporanei lo splendore di una grande corte europea. Attraverso il percorso di visita, le mostre, gli spettacoli, i concerti, i convegni e i piaceri enogastronomici, la <b>regalità</b> e il <b>piacere di vivere</b> sono 
                            tornati di casa alla Reggia di Venaria. 
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
        
    )
}