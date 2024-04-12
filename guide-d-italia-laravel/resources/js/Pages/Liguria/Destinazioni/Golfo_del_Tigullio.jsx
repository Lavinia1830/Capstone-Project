import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';
import Portofino_Video from '../../../../assets/Liguria/Portofino.net.mp4';
import { Image } from 'react-bootstrap';
import Abbazia_si_San_Fruttuoso from '../../../../assets/Liguria/Abbazia_si_San_Fruttuoso_Golfo_del_Tigullio_Liguria.jpg';
import Baia_del_silenzio from '../../../../assets/Liguria/Baia_del_silenzio_Golfo_del_Tigullio_Liguria.jpg';

export default function Golfo_del_Tigullio(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
      <main>
        <div className='golfo_del_tigullio' style={{ position: 'relative' }}>
          <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Golfo del Tigullio</h1>
          <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
          <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
        </div>
        <div className="margin mt-3">
          <p>
            Il <strong>golfo del Tigullio</strong> è anche chiamato golfo di Rapallo o golfo Marconi, in onore dei primi esperimenti radiofonici qui effettuati dall'inventore bolognese Guglielmo Marconi. Abbracciato dalla terra ligure, dalla <b>Punta di Portofino alla Punta Manara</b>, il golfo è uno spettacolo di 
            natura lussureggiante, arte antica e storia.
          </p>
          <p>
            Lungo questo tratto della <b>Riviera di Levante</b> si susseguono incantevoli borghi dalle diverse anime: dalla snob Portofino alla nostalgica Rapallo, passando per l’autentica Chiavari e la favolosa Sestri Levante. Castelli medievali, monasteri benedettini e statue sottomarine, incastonati tra il verde dei 
            parchi e il blu del mare, contribuiscono poi a regalare visioni di grande bellezza. Ecco cosa <b>vedere nel Golfo del Tigullio</b>. 
          </p>
        </div>
        <div className="margin mt-3">
          <ul className='lista'>
            <li><Link href='/destinazioni/golfo_del_tigullio#portofino' className='text-decoration-none color_link'>Portofino</Link></li>
            <li><Link href='/destinazioni/golfo_del_tigullio#abbazia_di_san_fruttuoso' className='text-decoration-none color_link'>Abbazia di San Fruttuoso</Link></li>
            <li><Link href='/destinazioni/golfo_del_tigullio#rapallo' className='text-decoration-none color_link'>Rapallo</Link></li>
            <li><Link href='/destinazioni/golfo_del_tigullio#santa_margherita_ligure' className='text-decoration-none color_link'>Santa Margherita Ligure</Link></li>
            <li><Link href='/destinazioni/golfo_del_tigullio#sestri_levante' className='text-decoration-none color_link'>Sestri Levante</Link></li>
            <li><Link href='/destinazioni/golfo_del_tigullio#chiavari' className='text-decoration-none color_link'>Chiavari</Link></li>
            <li><Link href='/destinazioni/golfo_del_tigullio#altre_localita_del_golfo_del_tigullio' className='text-decoration-none color_link'>Altre localià del Golfo del Tigullio</Link></li>
            <li><Link href='/destinazioni/golfo_del_tigullio#le_spiagge_piu_belle_del_golfo_del_tigullio' className='text-decoration-none color_link'>Le Spiagge più belle del Golfo del Tigullio</Link></li>
          </ul>
        </div>
        <div className="margin mt-3">
          <h2 id='portofino' className='color-subtitle'>Portofino</h2>
          <p>
            Portofino è la località più esclusiva della <Link href='/liguria/' className='text-decoration-none color_link'>Liguria</Link>, situata nella parte occidentale del golfo del Tigullio. È un piccolo borgo marinaro della riviera ligure, circondato dal Parco naturale regionale e dalla Riserva marina, che ha 
            incantato artisti, intellettuali e personaggi famosi. 
          </p>
          <p>
            La “piazzetta” è il simbolo di Portofino e il punto di ritrovo del jet set internazionale, mentre il piccolo porto con le tipiche casette dai colori vivaci testimonia della grande tradizione marittima di Portofino, i cui abitanti erano chiamati da Greci e Romani “delfini”, per l'abilità nella navigazione. 
            Da vedere, la chiesa di San Giorgio, patrono del borgo, che risale al XII secolo, il castello Brown e lo splendido giardino pensile, infine il faro su Punta del Capo che domina l’intera baia. Da non perdere una visita della suggestiva abbazia medievale di San Fruttuoso, a pochi chilometri dal borgo e al 
            Teatro Perla del Tigullio, dove si tengono manifestazioni di livello nazionale ed internazionale.
          </p>
          <p>
            A Portofino le spiagge più belle sono: Baia Cannone, una caletta romantica di ciottoli e acque turchesi immersa in uno scenario suggestivo, che fa parte dell’Area Specialmente Protetta di Interesse Mediterraneo; la Baia di Niasca, una spiaggia libera e sabbiosa che si trova al confine con la cittadina di 
            Paraggi; la Baia di Paraggi, comoda e attrezzata. 
          </p>
          <div className='mb-3 d-flex justify-content-center'>
            <iframe width="600" height="600" src={Portofino_Video} title="Video di Portofino" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
        <div className="margin mt-3">
          <h2 id='abbazia_di_san_fruttuoso' className='color-subtitle'>Abbazia di San Fruttuoso</h2>
          <p>
            Nel verde del Parco di Portofino si nasconde un monastero benedettino da non perdere: l’Abbazia di San Fruttuoso affacciata sulla minuscola Baia di Capodimonte. È una meraviglia architettonica incastonata in uno scenario naturale di grande bellezza. 
          </p>
          <p>
            Secondo la leggenda, fu proprio San Fruttuoso a indicare il luogo in cui dovevano essere custodite le sue reliquie. Ad ogni modo l’abbazia risalente al X-XI secolo nel tempo è diventata covo di pirati, riparo per pescatori e infine proprietà dei principi Doria, prima di essere donata al FAI. Oggi è restaurata 
            e aperta al pubblico. Consigliamo di arrivare via mare per uno spettacolo davvero mozzafiato. 
          </p>
          <Image src={Abbazia_si_San_Fruttuoso} className='mx-auto'/>
        </div>
        <div className="margin mt-3">
          <h2 id='rapallo' className='color-subtitle'>Rapallo</h2>
          <p>
            A soli 8 km dalla chic e snob Portofino sorge <strong>Rapallo</strong>, raffinata, nostalgica e vivace. È una cittadina al centro del Golfo del Tigullio che conquistò viaggiatori illustri come Yeats, Nietzche, Hemingway ed Ezra Pound. Luogo di villeggiatura fin dall’Ottocento, Rapallo conserva tracce del suo glorioso passato 
            nei palazzi in stile liberty che fiancheggiano il lungomare Vittorio Veneto, cuore pulsante della vita, e nelle iconiche cabine color blu brillante dei suoi stabilimenti balneari. A contribuire all’atmosfera poetica e romantica di Rapallo è il suo castello sul mare, costruito a metà del Cinquecento su un 
            promontorio che delimita l’estremità orientale del lungomare Vittorio Veneto. Una volta all’anno, all’inizio di luglio, il castello viene “incendiato” nel corso dei festeggiamenti per la santa patrona.
          </p>
          <p>
            A poca distanza dal castello sorge poi l’ex Convento delle Clarisse, un complesso monastico del Seicento affacciato sul mare che oggi ospita un teatro-auditorium con 265 posti a sedere e il Museo Gaffoglio, una eclettica collezione d’arte con opere dal XIV al XX secolo donata alla città dai coniugi Attilio e 
            Cleofe Gaffoglio. Nel centro di Rapallo si può visitare poi il famoso Museo del Merletto, ospitato da una signorile dimora con giardino sul mare, dedicato alla tradizione del merletto a fuselli (detto anche pizzo a tombolo), che dal XVI secolo viene tramandata di generazione in generazione dalle donne liguri. 
            Da non perdere poi il Santuario di Montallegro, costruito in stile rinascimentale-barocco a 612 metri di altezza, nel luogo esatto in cui il 2 luglio 1557 la Madonna apparve in visione a un cittadino del posto. Ci si può arrivare a piedi o in funivia. A chi ama camminare, infine, consigliamo la Passeggiata 
            dei Baci, una via pedonale che da Rapallo arriva a Portofino. È uno splendido percorso panoramico di 8,5 km lungo uno dei tratti più belli della costa ligure. Per chi invece vuole rilassarsi al mare, sappiate che Rapallo ha una serie di minuscole spiagge di ciottoli e ghiaia, come la Spiaggia del Lido. 
          </p>
        </div>
        <div className="margin mt-3">
          <h2 id='santa_margherita_ligure' className='color-subtitle'>Santa Margherita Ligure</h2>
          <p>
            <strong>Santa Margherita Ligure</strong> è una Perla della Riviera di Levante, a due passi da Portofino. Situata in una conca chiusa nella parte nord-occidentale del promontorio di Portofino e nella parte più interna del golfo del Tigullio, Santa Margherita Ligure si sviluppa a nastro lungo due principali 
            insenature. Dopo la Seconda guerra mondiale Santa Margherita, come Portofino e il borgo di Paraggi, diventò una rinomata ed esclusiva località turistica. L’eleganza si preannuncia a Santa, come viene chiamata dalla gente del posto, dai raffinati palazzi con magnifici trompe l’oeil e stradine con risseu, il 
            tipico ciottolato ligure.
          </p>
          <p>
            Fate un giro al porticciolo a due passi dal centro e poi visitate la Villa Durazzo-Centurione, costituita da due ville, un ampio parco seicentesco con giardino all'italiana e sentieri in risseu. Villa Durazzo, inoltre, ospita il museo artistico "Vittorio Giovanni Rossi", dedicato appunto al noto scrittore e 
            giornalista sammargheritese, oltre agli appartamenti del Principe e la raccolta "Bellometti". Da non perdere poi il Castello di Santa Margherita Ligure sul lungomare che risale al 1550 e l’antica Abbazia della Cervara, complesso monastico del 1361 a strapiombo sul mare con splendidi giardini all’inglese, 
            oggi di proprietà privata. Infine rilassatevi sulle spiagge di Santa Margherita Ligure. Nella zona detta Ghiaia se ne trovano alcune a pagamento e una libera prevalentemente sassosa, che si animano con musica e feste durante l’alta stagione. Ma raggiungete la baia di Paraggi per un bagno nell’acqua cristallina. 
          </p>
        </div>
        <div className="margin mt-3">
          <h2 id='sestri_levante' className='color-subtitle'>Sestri Levante</h2>
          <p>
            Fu ribattezzata “città dei due mari” dallo scrittore danese Hans Christian Andersen che qui trovò ispirazione per alcune delle sue fiabe più belle. Sestri Levante, in effetti, si affaccia su due baie, la Baia delle Favole, così soprannominata dal giornalista televisivo Enzo Tortora, e la Baia del Silenzio, 
            così chiamata dallo scrittore Giovanni Descalzo. Di antiche origini, <strong>Sestri Levante</strong> è una tipica cittadina ligure stretta tra mare e monti, caratterizzata da case basse color pastello, dimore signorili, spiagge lambite da acque azzurre e tanto verde. Il centro storico è ricco di chiese, tra 
            cui quella di S. Nicolò dell'Isola, costruita nel 1151 in stile romanico, la più antica di Sestri Levante, e di palazzi storici. Tra questi Palazzo Fascie è il cuore pulsante della vita cittadina, mentre il Palazzo Durazzo-Pallavicini oggi è sede del Municipio. Sestri Levante, inoltre, è la località balneare 
            con i litorali più ampi della Liguria.
          </p>
          <p>
            Le spiagge più belle si trovano lungo le incantevoli Baia del Silenzio e Baia delle Favole. In alternativa a 3 km dal centro si trova la spiaggia di Riva Trigoso e, proseguendo, la Spiaggia di Renà, in gran parte libera, conosciuta per l’Asseu, uno scoglio aguzzo in cima al quale è stata posta una croce. Per 
            gli amanti delle immersioni, infine, al largo della costa, ad una profondità di circa 11 metri, si trova la scultura subacquea Presepe dei delfini, realizzata da Pietro Luigi Ravecca. 
          </p>
        </div>
        <div className="margin mt-3">
          <h2 id='chiavari' className='color-subtitle'>Chiavari</h2>
          <p>
            <strong>Chiavari</strong> è il centro nevralgico del Tigullio: principale centro commerciale, residenziale e finanziario, oltre che uno dei più importanti porti turistici della Liguria. È una città di antiche tradizioni marinare dove tutto racconta il suo stretto rapporto con il mare. Lungo i caruggi del 
            centro storico corrono chilometri di porticati che vi faranno sentire ancora nella città medievale. Sotto le volte dei portici di Borgolungo, ovvero il centro di Chiavari, andate alla ricerca di eleganti negozi, storici caffè e antichi fainotti (le trattorie con forno a legna rinomate per farinate e torte salate). 
            Fate caso alle botteghe artigiane, tra cui quelle che producono le chiavarine, le tradizionali sedie in legno. Nel centro inoltre non perdete la cattedrale Nostra Signora dell’Orto, sede vescovile e santuario mariano da cui parte la processione per la festa patronale di luglio. Chiavari, inoltre, vanta uno dei 
            più antichi castelli nella zona del Tigullio. Era un edificio difensivo costruito nella prima metà del XII secolo, di cui oggi rimangono solo il torrione a monte con le due cisterne d’acqua, una piazza d’armi fortificata e parte della cinta muraria. L’altro centro di Chiavari poi è il porto turistico, uno degli 
            approdi più frequentati da barche e crociere dirette non solo nel resto della Liguria ma anche in Toscana, Sardegna, Corsica e Costa Azzurra.
          </p>
          <p>
            Quindi percorrete la passeggiata che collega il lungomare con la zona del porto turistico per circa 2 km lungo Corso Valparaiso. Ad un’estremità del corso si trova poi la suggestiva Piazzetta dei Pescatori, un ottimo punto da cui ammirare il tramonto sulla riviera. Il Parco Botanico di Villa Rocca è un’oasi di 
            verde in pieno centro e un altro incantevole luogo panoramico sulla città e sul mare. Infine, a ovest del porto turistico si trovano si trovano diverse spiagge cittadine facilmente accessibili a piedi. Chiavari inoltre ha spiagge libere, accessibili a disabili e con area cani. La spiaggia più adatta alle 
            famiglie è quella vicina alla stazione, dotata di un acquapark con ben 18 gonfiabili. Altrimenti esplorate le più belle nei dintorni: Baia dei Paraggi, Baia del Silenzio, Baia delle Favole e Baia di San Fruttuoso. 
          </p>
        </div>
        <div className="margin mt-3">
          <h2 id='altre_localita_del_golfo_del_tigullio' className='color-subtitle'>Altre localià del Golfo del Tigullio</h2>
          <p>
            Se da Rapallo si prosegue verso Levante si arriva al piccolo borgo di Zoagli, dove si ergono torri di avvistamento e difesa dai pirati saraceni. La sua passeggiata scolpita nella scogliera poi regala un momento di grande bellezza. La spiaggia del Pozzetto, una spiaggia libera di sabbia e ciottoli bagnata 
            dal mare azzurro della Liguria, invece è perfetta per un tuffo rinfrescante. 
          </p>
          <p>
            Continuando lungo la costa oltre Chiavari e passato il fiume Entella, la “fiumana bella” ricordata da Dante, si giunge a Lavagna. Il suo nome deriva dal latino Lavania e nel tempo è diventato l’appellativo dato all’ardesia con cui venivano realizzate le tradizionali lavagne scolastiche. Le lastre di ardesia, 
            provenienti dalle vicine cave del Monte San Giacomo, venivano trasportate nei paesi del Mediterraneo e dell’Europa del Nord a bordo di un’imbarcazione tipica denominata leudo. Ad ogni modo Lavagna val bene una sosta per godersi la spiaggia più lunga di tutta la Riviera di Levante.
          </p>
          <p>
            A pochi chilometri all’interno si trova poi l’affascinante complesso di San Salvatore dei Fieschi: una splendida chiesa gotica, commissionata  nel Duecento da Sinibaldo Fieschi, papa Innocenzo IV, e il palazzo della famiglia Fieschi, protagonista della storia genovese. 
          </p>
        </div>
        <div className="margin mt-3 mb-3">
          <h2 id='le_spiagge_piu_belle_del_golfo_del_tigullio' className='color-subtitle'>Le spiagge più belle del Golfo del Tigullio</h2>
          <p>
            Una delle spiagge più belle del Golfo del Tigullio e anche della Liguria è senza dubbio la Baia del Silenzio, una stretta lingua di sabbia fina incorniciata da case color pastello. Il nome le fu dato dal poeta ligure Giovanni Descalzo, che amava questo luogo suggestivo proprio per la sua quiete. Oggi è un po’ 
            meno silenziosa rispetto ai primi anni del Novecento, ma sicuramente rimane più tranquilla delle spiagge più frequentate. La Baia del Silenzio si trova a est dell’istmo che collega il nucleo antico di Sestri Levante alla città moderna, ed è facile da raggiungere.  
          </p>
          <p>
            Un’altra da non perdere è la Baia di Paraggi, conosciuta come la spiaggia di Portofino in quanto è l’unica vera spiaggia vicina alla cittadina più chic della Liguria, ma effettivamente rientra nel comune di Santa Margherita Ligure. È una spiaggia sabbiosa delimitata da scogli e attrezzata. Vale la pena venire 
            a fare un tuffo nelle sue acque limpide o ad esplorare il mondo sottomarino.
          </p>
          <p>
            La Baia di Capodimonte, più conosciuta come Baia di San Fruttuoso dal nome del monastero benedettino che si affaccia sul mare, è un altro tesoro del Golfo del Tigullio. La piccola spiaggia di ciottoli con l’abbazia benedettina alle spalle è uno spettacolo meraviglioso. Nelle acque di San Fruttuoso, inoltre, a 
            circa 10-15 metri di profondità, si trova la statua del Cristo degli Abissi, diventata un popolare sito di immersioni.
          </p>
          <p>
            La spiaggia però non è raggiungibile in auto. Il modo più semplice per raggiungerla è il battello, ma chi ama camminare può arrivarci tramite i sentieri del parco di Portofino. 
          </p>
          <p>
            Infine se cercate una spiaggia appartata e più intima ricordatevi della Spiaggia del Pozzetto di Zoagli, una delle più belle della Riviera di Levante. È una minuscola spiaggia di sabbia scura mista a ciottoli, ideale per chi cerca la tranquillità e per chi ama fare snorkeling. La spiaggia è libera e non ha 
            punti ristoro. Si raggiunge tramite un sentiero pedonale che parte dalla via Aurelia, circa a metà strada tra Rapallo e Zoagli. 
          </p>
          <Image src={Baia_del_silenzio} className='mx-auto'/>
        </div>
      </main>
      <Footer/>
    </AuthenticatedLayout>
  )
}
