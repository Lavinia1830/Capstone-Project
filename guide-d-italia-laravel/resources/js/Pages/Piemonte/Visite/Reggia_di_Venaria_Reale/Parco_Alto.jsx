import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Parco_Alto(props) {
    return (
        <>
            <Head title="Parco Alto"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='parco_alto' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Parco Alto</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p className='fst-italic text-center'>
                            La citazione del settecentesco Parco alto, con il caratteristico schema geometrico a "maglie quadrate", comprende il rinato Gran Parterre con al suo crocevia la suggestiva installazione dell'artista Giovanni Anselmo.
                        </p>
                    </div>
                    <div className='margin mt-3'>
                        <p>
                            Sempre nel Parco alto, sono inoltre presenti le <b>grandi Allee</b>, i <b>boschetti</b> e il Fantacasino, l'attrazione del Boschetto dei Giochi pensata per le famiglie ed un pubblico di ogni età che ripropone in chiave moderna la funzione di luogo di <i>loisir</i> dei Giardini.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Allea di Terrazza</h2>
                        <p>
                            <b>Dopo oltre due secoli</b> la monumentale statua dell’Ercole, «<i>avanzo della famosa fontana che eravi nel [suo] Real giardino</i>» (così G.L. Amedeo Grossi già la descrive a fine Settecento, quando si trovava danneggiata alla Villa del Capriglio nella collina torinese), è <b>tornata nei suoi aulici 
                            luoghi d’origine</b>, grazie al prezioso intervento della <b>Consulta per la Valorizzazione dei Beni Artistici e Culturali di Torino</b> che ne ha finanziato l’accurato restauro permettendone il recupero e la ricollocazione nei Giardini della Reggia.
                        </p>
                        <p>
                            Acquistò nuovo rilievo quando venne a concretizzarsi il prolungamento esterno dell’asse longitudinale della Galleria Grande, progettata da <b>Michelangelo Garove</b> all’inizio del 
                            Settecento e portata poi a compimento da <b>Filippo Juvarra</b>. <br/>
                            Nella prima metà del Settecento, anni della grande trasformazione dei giardini, l’Allea, ombreggiata da olmi, al di sopra di un pendio erboso, senza più muro né balaustrate, segnava con il solo verde il bordo nord del Parco alto. <br/>
                            La parallela Allea Centrale sottolineava e i boschetti scandivano il suo apparente procedere verso l’infinito.
                        </p>
                        <p>
                            L’attuale tracciato, come per le altre parti del Parco alto, è basato su disegni e rilievi del Settecento e sulle linee nel terreno evidenziate da fotografie aeree. Piante di tiglio ombreggeranno l’Allea per tutta la sua lunghezza. Una siepe di <i>Rosa Gallica</i> corre lungo la sponda.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Gran Parterre</h2>
                        <p>
                            A partire dal 1716 Filippo Juvarra riprende il progetto di Michelangelo Garove e porta a compimento la Galleria Grande, la Scuderia Grande e la Citroniera. L’interesse per i giardini si concentra allora sul fronte adiacente alle nuove strutture con la creazione di un parterres con fiori, piattabande 
                            erbose, tassi scolpiti, vasi di agrumi e vere e proprie stanze con pareti e volte vegetali lungo il perimetro.
                        </p>
                        <p>
                            Per tutto il Settecento è questa l’<b>area esterna di rappresentanza e di piacevoli passatempi</b>. Il centro corrisponde all’incrocio dei due assi ortogonali, allineati rispettivamente all’arcata mediana della Galleria Grande e al portone centrale della Citroniera, che proseguivano nei viali: uno 
                            diretto verso l’area in cui vennero impiantati gli orti e i vivai, l’altro, l’Allea Reale, che attraversava i boschetti e conduceva al labirinto.
                        </p>
                        <p>
                            Prima dell’intervento di recupero l’area ospitava numerosi padiglioni occupati dai militari.
                        </p>
                        <p>
                            L’<b>attuale realizzazione rievoca il giardino settecentesco</b> evidenziandone le strette relazioni con la Reggia e il tono di grandiosità dato dalle proporzioni. L’iconografia storica, tra cui un dipinto di Carlo Randoni, e la trattatistica francese (Antoine- Joseph Dezailler d’Argenville) sono 
                            stati supporti utili per l’interpretazione di questo spazio. Le stanze di “Verzura” che delimitano il Gran Parterre creano percorsi per passeggiate all’ombra tra “muri” vegetali formati da siepi di <i>Carpino</i>.
                        </p>
                        <p>
                            Al centro del <b>Gran Parterre juvarriano</b>, sei lastre di granito “nero Africa” sono disposte di piatto lungo la direzione Nord-Sud. Sulle facce superiori è incisa la scritta “<i>Dove le stelle si avvicinano di una spanna in più</i>”, il titolo dell’installazione di <b>Giovanni Anselmo</b>. Al 
                            visitatore è consentito salire sull’opera per contemplare le stelle da un pò più vicino.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Boschetti</h2>
                        <p>
                            Nel disegno dei nuovi Giardini, redatto nel 1700 dai progettisti francesi che collaborarono con Michelangelo Garove, l’area rettangolare del Parco alto parallela all’Allea Centrale, un tempo destinata alle cacce per le dame, appare interamente solcata longitudinalmente da viali che proiettavano verso 
                            ovest le linee del complesso architettonico. Altri viali li incrociavano perpendicolarmente formando quadrati piantati a boschetti, a loro volta solcati da percorsi diagonali (a croce di Sant’Andrea). Il progetto prevedeva il rinnovamento anche del Parco basso e delle aree del Parco alto immediatamente 
                            prossime alla Reggia, ma nella realizzazione fu data priorità ai dodici boschetti, come risulta in un rilievo del 1710, di poco precedente l’intervento di Filippo Juvarra.
                        </p>
                        <p>
                            Le tracce sul terreno del disegno settecentesco sono state evidenziate da fotografie aeree e <b>riprese nell’attuale impianto</b>. <br/>
                            La scelta delle piante è mirata a sottolineare il disegno geometrico nella dimensione verticale, usando alberi che raggiungono altezze diverse: carpini all’interno dei boschetti, aceri, ciliegi e roveri sul perimetro, bossi e tassi sui vialetti diagonali.
                        </p>
                        <p>
                            I <b>Boschetti della musica e dei giochi</b>, come già nel Settecento, sono destinati ad attività ricreative.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Giardino delle Rose</h2>
                        <p>
                            Nel disegno del 1700 legato al progetto di Michelangelo Garove, che confermava e sviluppava il gioco di geometrie impostato nel Seicento, in prossimità della Reggia, è rappresentata un’area rettangolare con fontana centrale e viali diagonali. Allineata con le due file di boschetti, la sua superficie 
                            corrisponde a due boschetti.
                        </p>
                        <p>
                            Questa parte del progetto era ancora da completare quando intervenne Filippo Juvarra, il quale realizzò un “<b>Giardino Inglese</b>”, ovvero due quadrati con <i>parterres</i> erbosi e ininterrotto sviluppo di pergole. Il disegno per ciascun quadrato si dipartiva da un rettangolo centrale inscritto in 
                            un’ellisse attraversata da percorsi ortogonali e diagonali.
                        </p>
                        <p>
                            Nell’<b>attuale realizzazione</b>, che ha riguardato la superficie corrispondente ad uno dei due quadrati juvarriani, sono state realizzate, con strutture di foggia moderna, pergole che sostengono una <b>varietà storica</b> di rosai rampicanti <i>Alberich Barbier</i>, che presentano una sola fioritura 
                            annuale. Le rose rifiorenti a cespuglio <i>Marie Pavie</i> e le rampicanti, presentano il loro massimo momento di fioritura a seconda dell’andamento stagionale, nel mese di maggio.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Allea Reale</h2>
                        <p>
                            Nel disegno dei progettisti francesi che collaborarono con Michelangelo Garove agli inizi del Settecento un viale est - ovest divide in due file i dodici riquadri dei boschetti. Si tratta dell’Allea Reale che, come tutta l’area dei boschetti, era già realizzata nel 1710 poco prima dell’intervento di 
                            Filippo Juvarra.
                        </p>
                        <p>
                            Nel primo ventennio del Settecento l’Allea Reale acquista l’importanza rispecchiata dal nome. Si realizzano infatti il “<b>Giardino Inglese</b>” e il “<b>Parterre a Fiori</b>”, il primo corrispondente all’area oggi occupata per metà dal Giardino delle Rose e il secondo al Gran Parterre. <br/>
                            La facciata della <b>Citroniera</b> viene così a creare per l’Allea un fondale prezioso, con il portone centrale sul suo asse. L’eleganza era affidata alla rigorosa scansione geometrica, che poneva agli incroci con i viali ortogonali, uno ogni due, un rondò con fontana. <br/>
                            Juvarra stesso aggiunse valore a questo percorso ponendo al suo termine un labirinto.
                        </p>
                        <p>
                            L’<b>attuale realizzazione</b>, come le altre parti del Parco alto si basa per il tracciato su disegni e rilievi del Settecento e sulle linee nel terreno individuate mediante la lettura di fotografi e aeree. I filari di alberi, attualmente piantati per una lunghezza limitata, sono costituiti da roveri.
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
