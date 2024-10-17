import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';
import Portofino_Video from '../../../../assets/Liguria/Portofino.net.mp4';
import { Image } from 'react-bootstrap';
import Abbazia_si_San_Fruttuoso from '../../../../assets/Liguria/Abbazia_si_San_Fruttuoso_Golfo_del_Tigullio_Liguria.jpg';
import Baia_del_silenzio from '../../../../assets/Liguria/Baia_del_silenzio_Golfo_del_Tigullio_Liguria.jpg';

export default function Golfo_del_Tigullio(props) {
  return (
    <>
      <Head title='Golfo del Tigullio'/>
      <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
      >
        <main>
          <div className='golfo_del_tigullio' style={{ position: 'relative' }}>
            <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Golfo del Tigullio</h1>
            <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
            <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
          </div>
          <div className="margin mt-3">
            <p>
              Il <strong>golfo del Tigullio</strong> è anche chiamato <b>golfo di Rapallo</b> o <b>golfo Marconi</b>, in onore dei <b>primi esperimenti radiofonici</b> qui 
              effettuati dall'inventore bolognese <b>Guglielmo Marconi</b>. Abbracciato dalla terra ligure, dalla <b>Punta di Portofino</b> alla <b>Punta Manara</b>, il golfo è 
              uno spettacolo di <b>natura lussureggiante</b>, <b>arte antica</b> e <b>storia</b>.
            </p>
            <p>
              Lungo questo tratto della <b>Riviera di Levante</b> si susseguono <b>incantevoli borghi dalle diverse anime</b>: dalla <b>snob Portofino</b> alla <b>nostalgica 
              Rapallo</b>, passando per l’<b>autentica Chiavari</b> e la <b>favolosa Sestri Levante</b>. <b>Castelli medievali</b>, <b>monasteri benedettini</b> e <b>statue 
              sottomarine</b>, incastonati tra il <b>verde dei parchi</b> e il <b>blu del mare</b>, contribuiscono poi a regalare <b>visioni di grande bellezza</b>. 
              Ecco cosa vedere nel <strong>Golfo del Tigullio</strong>. 
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
              <b>Portofino</b> è la località più esclusiva della <Link href='/liguria/' className='text-decoration-none color_link'>Liguria</Link>, situata nella parte occidentale 
              del <strong>golfo del Tigullio</strong>. È un piccolo <b>borgo marinaro della riviera ligure</b>, circondato dal <b>Parco naturale regionale</b> e dalla <b>Riserva 
              marina</b>, che ha incantato <b>artisti</b>, <b>intellettuali</b> e <b>personaggi famosi</b>. 
            </p>
            <p>
              La “<b>piazzetta</b>” è il simbolo di <b>Portofino</b> e il punto di ritrovo del <b>jet set internazionale</b>, mentre il <b>piccolo porto</b> con le <b>tipiche casette dai 
              colori vivaci</b> testimonia della grande <b>tradizione marittima</b> di Portofino, i cui abitanti erano chiamati da Greci e Romani “<b>delfini</b>”, per l'abilità 
              nella <b>navigazione</b>. <br/>
              Da vedere, la <b>chiesa di San Giorgio</b>, patrono del borgo, che risale al XII secolo, il <b>castello Brown</b> e lo splendido <b>giardino pensile</b>, infine 
              il <b>faro su Punta del Capo</b> che domina l’intera baia. Da non perdere una visita della suggestiva <b>abbazia medievale di San Fruttuoso</b>, a pochi chilometri 
              dal borgo e al <b>Teatro Perla del Tigullio</b>, dove si tengono <b>manifestazioni di livello nazionale</b> ed internazionale.
            </p>
            <p>
              A <b>Portofino</b> le spiagge più belle sono: <b>Baia Cannone</b>, una <b>caletta romantica</b> di ciottoli e acque turchesi immersa in uno scenario suggestivo, che fa 
              parte dell’<b>Area Specialmente Protetta di Interesse Mediterraneo</b>; la <b>Baia di Niasca</b>, una <b>spiaggia libera e sabbiosa</b> che si trova al confine con la 
              cittadina di <b>Paraggi</b>; la <b>Baia di Paraggi</b>, comoda e attrezzata. 
            </p>
            <div className='mb-3 d-flex justify-content-center'>
              <iframe width="600" height="600" src={Portofino_Video} title="Video di Portofino" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
          <div className="margin mt-3">
            <h2 id='abbazia_di_san_fruttuoso' className='color-subtitle'>Abbazia di San Fruttuoso</h2>
            <p>
              Nel <b>verde del Parco di Portofino</b> si nasconde un <b>monastero benedettino</b> da non perdere: l’<b>Abbazia di San Fruttuoso</b> affacciata sulla <b>minuscola Baia 
              di Capodimonte</b>. È una <b>meraviglia architettonica</b> incastonata in uno <b>scenario naturale di grande bellezza</b>. 
            </p>
            <p>
              Secondo la leggenda, fu proprio <b>San Fruttuoso</b> a indicare il luogo in cui dovevano essere custodite le sue <b>reliquie</b>. Ad ogni modo l’abbazia <b>risalente 
              al X-XI secolo</b> nel tempo è diventata <b>covo di pirati</b>, <b>riparo per pescatori</b> e infine <b>proprietà dei principi Doria</b>, prima di essere donata 
              al <b>FAI</b>. Oggi è <b>restaurata e aperta al pubblico</b>. Consigliamo di <b>arrivare via mare</b> per uno <b>pettacolo davvero mozzafiato</b>. 
            </p>
            <Image src={Abbazia_si_San_Fruttuoso} className='mx-auto'/>
          </div>
          <div className="margin mt-3">
            <h2 id='rapallo' className='color-subtitle'>Rapallo</h2>
            <p>
              A soli <b>8 km dalla chic e snob Portofino</b> sorge <b>Rapallo</b>, raffinata, nostalgica e vivace. È una cittadina al centro del <strong>Golfo del Tigullio</strong> che 
              conquistò viaggiatori illustri come <b>Yeats</b>, <b>Nietzche</b>, <b>Hemingway ed Ezra Pound</b>. Luogo di villeggiatura fin dall’Ottocento, Rapallo conserva tracce del 
              suo <b>glorioso passato</b> nei <b>palazzi in stile liberty</b> che fiancheggiano il <b>lungomare Vittorio Veneto</b>, cuore pulsante della vita, e nelle 
              iconiche <b>cabine color blu brillante</b> dei suoi stabilimenti balneari. A contribuire all’atmosfera poetica e romantica di Rapallo è il suo <b>castello sul mare</b>, 
              costruito a metà del Cinquecento su un promontorio che delimita l’estremità orientale del lungomare Vittorio Veneto. Una volta all’anno, all’inizio di luglio, il castello 
              viene “<b>incendiato</b>” nel corso dei festeggiamenti per la santa patrona.
            </p>
            <p>
              A poca distanza dal castello sorge poi l’<b>ex Convento delle Clarisse</b>, un complesso monastico del Seicento affacciato sul mare che oggi ospita 
              un <b>teatro-auditorium</b> con 265 posti a sedere e il <b>Museo Gaffoglio</b>, una eclettica collezione d’arte con opere dal XIV al XX secolo donata alla città dai coniugi 
              Attilio e Cleofe Gaffoglio. Nel centro di Rapallo si può visitare poi il famoso <b>Museo del Merletto</b>, ospitato da una signorile dimora con giardino sul mare, dedicato 
              alla tradizione del <b>merletto a fuselli</b> (detto anche <b>pizzo a tombolo</b>), che dal XVI secolo viene tramandata di generazione in generazione dalle donne liguri. 
              Da non perdere poi il <b>Santuario di Montallegro</b>, costruito in stile rinascimentale-barocco a <b>612 metri di altezza</b>, nel luogo esatto in cui il 2 luglio 1557 
              la <b>Madonna apparve in visione</b> a un cittadino del posto. Ci si può arrivare a piedi o in <b>funivia</b>. A chi ama camminare, infine, consigliamo la <b>Passeggiata 
              dei Baci</b>, una via pedonale che da Rapallo arriva a Portofino. È uno <b>splendido percorso panoramico</b> di <b>8,5 km</b> lungo uno dei tratti più belli della costa 
              ligure. Per chi invece vuole rilassarsi al mare, sappiate che Rapallo ha una serie di <b>minuscole spiagge di ciottoli e ghiaia</b>, come la <b>Spiaggia del Lido</b>. 
            </p>
          </div>
          <div className="margin mt-3">
            <h2 id='santa_margherita_ligure' className='color-subtitle'>Santa Margherita Ligure</h2>
            <p>
              <strong>Santa Margherita Ligure</strong> è una <b>Perla della Riviera di Levante</b>, a due passi da <b>Portofino</b>. Situata in una conca chiusa nella parte nord-occidentale 
              del <b>promontorio di Portofino</b> e nella parte più interna del <strong>golfo del Tigullio</strong>, Santa Margherita Ligure si sviluppa a nastro lungo due principali 
              insenature. Dopo la <b>Seconda guerra mondiale</b> Santa Margherita, come Portofino e il borgo di <b>Paraggi</b>, diventò una <b>rinomata ed esclusiva località turistica</b>. 
              L’eleganza si preannuncia a Santa, come viene chiamata dalla gente del posto, dai <b>raffinati palazzi con magnifici trompe l’oeil</b> e <b>stradine con risseu</b>, il 
              tipico ciottolato ligure.
            </p>
            <p>
              Fate un giro al <b>porticciolo</b> a due passi dal centro e poi visitate la <b>Villa Durazzo-Centurione</b>, costituita da due ville, un ampio <b>parco seicentesco con 
              giardino all'italiana</b> e sentieri in risseu. Villa Durazzo, inoltre, ospita il <b>museo artistico "Vittorio Giovanni Rossi"</b>, dedicato appunto al noto scrittore e 
              giornalista sammargheritese, oltre agli <b>appartamenti del Principe</b> e la raccolta "<b>Bellometti</b>". Da non perdere poi il <b>Castello di Santa Margherita 
              Ligure</b> sul lungomare che risale al <b>1550</b> e l’antica <b>Abbazia della Cervara</b>, complesso monastico del <b>1361</b> a strapiombo sul mare con <b>splendidi 
              giardini all’inglese</b>, oggi di proprietà privata. Infine rilassatevi sulle <b>spiagge di Santa Margherita Ligure</b>. Nella zona detta <b>Ghiaia</b> se ne trovano 
              alcune a pagamento e una libera prevalentemente sassosa, che si animano con musica e feste durante l’alta stagione. Ma raggiungete la <b>baia di Paraggi</b> per un bagno 
              nell’<b>acqua cristallina</b>. 
            </p>
          </div>
          <div className="margin mt-3">
            <h2 id='sestri_levante' className='color-subtitle'>Sestri Levante</h2>
            <p>
              <b>Fu ribattezzata “città dei due mari” dallo scrittore danese Hans Christian Andersen</b> che qui trovò ispirazione per alcune delle sue fiabe più belle. <b>Sestri 
              Levante, in effetti, si affaccia su due baie, la Baia delle Favole</b>, così soprannominata dal giornalista televisivo Enzo Tortora, e <b>la Baia del Silenzio</b>, 
              così chiamata dallo scrittore Giovanni Descalzo. Di antiche origini, <strong>Sestri Levante</strong> <b>è una tipica cittadina ligure stretta tra mare e monti</b>, 
              caratterizzata da <b>case basse color pastello, dimore signorili, spiagge lambite da acque azzurre e tanto verde. Il centro storico è ricco di chiese</b>, tra 
              cui <b>quella di S. Nicolò dell'Isola</b>, costruita nel 1151 in stile romanico, <b>la più antica di Sestri Levante</b>, e <b>di palazzi storici</b>. Tra 
              questi <b>Palazzo Fascie è il cuore pulsante della vita cittadina</b>, mentre <b>il Palazzo Durazzo-Pallavicini oggi è sede del Municipio. Sestri Levante, inoltre, è la 
              località balneare con i litorali più ampi della Liguria</b>.
            </p>
            <p>
              <b>Le spiagge più belle si trovano lungo le incantevoli Baia del Silenzio e Baia delle Favole</b>. In alternativa a 3 km dal centro si trova la <b>spiaggia di Riva 
              Trigoso</b> e, proseguendo, la <b>Spiaggia di Renà</b>, in gran parte libera, conosciuta per l’<b>Asseu</b>, uno scoglio aguzzo in cima al quale è stata posta una 
              croce. <b>Per gli amanti delle immersioni</b>, infine, al largo della costa, ad una profondità di circa 11 metri, <b>si trova la scultura subacquea Presepe dei 
              delfini</b>, realizzata da Pietro Luigi Ravecca. 
            </p>
          </div>
          <div className="margin mt-3">
            <h2 id='chiavari' className='color-subtitle'>Chiavari</h2>
            <p>
              <strong>Chiavari</strong> <b>è il centro nevralgico del Tigullio: principale centro commerciale, residenziale e finanziario</b>, oltre che <b>uno dei più importanti 
              porti turistici della Liguria</b>. È una città di antiche tradizioni marinare dove tutto racconta il suo stretto rapporto con il mare. <b>Lungo i caruggi del centro 
              storico corrono chilometri di porticati</b> che vi faranno sentire ancora nella città medievale. <b>Sotto le volte dei portici di Borgolungo</b>, ovvero il centro 
              di Chiavari, andate alla ricerca di eleganti negozi, storici caffè e antichi fainotti (le trattorie con forno a legna rinomate per farinate e torte salate). <b>Fate 
              caso alle botteghe artigiane</b>, tra cui quelle che producono le <b>chiavarine</b>, le tradizionali sedie in legno. Nel centro inoltre non perdete la <b>cattedrale 
              Nostra Signora dell’Orto</b>, sede vescovile e santuario mariano da cui parte la processione per la festa patronale di luglio. <b>Chiavari, inoltre, vanta uno dei 
              più antichi castelli nella zona del Tigullio</b>. Era un edificio difensivo costruito nella prima metà del XII secolo, di cui oggi rimangono solo il torrione a monte 
              con le due cisterne d’acqua, una piazza d’armi fortificata e parte della cinta muraria. <b>L’altro centro di Chiavari poi è il porto turistico, uno degli 
              approdi più frequentati da barche e crociere</b> dirette non solo nel resto della Liguria ma anche in Toscana, Sardegna, Corsica e Costa Azzurra.
            </p>
            <p>
              Quindi <b>percorrete la passeggiata</b> che collega il lungomare con la zona del porto turistico per circa 2 km lungo Corso Valparaiso. Ad un’estremità del corso si 
              trova poi la suggestiva <b>Piazzetta dei Pescatori</b>, un ottimo punto da cui ammirare il tramonto sulla riviera. Il <b>Parco Botanico di Villa Rocca</b> è un’oasi 
              di verde in pieno centro e un altro incantevole luogo panoramico sulla città e sul mare. Infine, a ovest del porto turistico si trovano si trovano diverse spiagge 
              cittadine facilmente accessibili a piedi. <b>Chiavari inoltre ha spiagge libere</b>, accessibili a disabili e con area cani. <b>La spiaggia più adatta alle 
              famiglie</b> è quella vicina alla stazione, dotata di un acquapark con ben 18 gonfiabili. Altrimenti <b>esplorate le più belle nei dintorni</b>: Baia dei Paraggi, Baia 
              del Silenzio, Baia delle Favole e Baia di San Fruttuoso. 
            </p>
          </div>
          <div className="margin mt-3">
            <h2 id='altre_localita_del_golfo_del_tigullio' className='color-subtitle'>Altre localià del Golfo del Tigullio</h2>
            <p>
              <b>Se da Rapallo si prosegue verso Levante si arriva al piccolo borgo di Zoagli</b>, dove si ergono <b>torri di avvistamento e difesa dai pirati saraceni. La sua 
              passeggiata scolpita nella scogliera</b> poi regala un momento di grande bellezza. <b>La spiaggia del Pozzetto, una spiaggia libera di sabbia e ciottoli bagnata 
              dal mare azzurro della Liguria</b>, invece è perfetta per un tuffo rinfrescante. 
            </p>
            <p>
              <b>Continuando lungo la costa oltre Chiavari e passato il fiume Entella, la “fiumana bella” ricordata da Dante</b>, si giunge a <b>Lavagna</b>. Il suo nome deriva dal 
              latino <b>Lavania</b> e nel tempo è diventato l’appellativo dato <b>all’ardesia con cui venivano realizzate le tradizionali lavagne scolastiche</b>. Le <b>lastre di 
              ardesia, provenienti dalle vicine cave del Monte San Giacomo</b>, venivano trasportate nei paesi del Mediterraneo e dell’Europa del Nord a bordo di un’imbarcazione 
              tipica denominata <b>leudo</b>. Ad ogni modo <b>Lavagna val bene una sosta per godersi la spiaggia più lunga di tutta la Riviera di Levante</b>.
            </p>
            <p>
              A pochi chilometri all’interno si trova poi l’affascinante <b>complesso di San Salvatore dei Fieschi</b>: una <b>splendida chiesa gotica</b>, commissionata  nel 
              Duecento da <b>Sinibaldo Fieschi, papa Innocenzo IV</b>, e il <b>palazzo della famiglia Fieschi, protagonista della storia genovese</b>. 
            </p>
          </div>
          <div className="margin mt-3 mb-3">
            <h2 id='le_spiagge_piu_belle_del_golfo_del_tigullio' className='color-subtitle'>Le spiagge più belle del Golfo del Tigullio</h2>
            <p>
              Una delle spiagge più belle del <strong>Golfo del Tigullio</strong> e anche della Liguria è senza dubbio la <b>Baia del Silenzio</b>, una stretta lingua di sabbia 
              fina incorniciata da case color pastello. Il nome le fu dato dal poeta ligure Giovanni Descalzo, che amava questo luogo suggestivo proprio per la sua quiete. Oggi è 
              un po’ meno silenziosa rispetto ai primi anni del Novecento, ma sicuramente rimane più tranquilla delle spiagge più frequentate. <b>La Baia del Silenzio si trova a 
              est dell’istmo</b> che collega il nucleo antico di Sestri Levante alla città moderna, ed è facile da raggiungere.  
            </p>
            <p>
              Un’altra da non perdere è la <b>Baia di Paraggi</b>, conosciuta come la spiaggia di Portofino in quanto è l’unica vera spiaggia vicina alla cittadina più chic della 
              Liguria, ma effettivamente rientra nel comune di Santa Margherita Ligure. <b>È una spiaggia sabbiosa delimitata da scogli e attrezzata</b>. Vale la pena venire a fare 
              un tuffo nelle sue acque limpide o ad esplorare il mondo sottomarino.
            </p>
            <p>
              <b>La Baia di Capodimonte</b>, più conosciuta come <b>Baia di San Fruttuoso</b> dal nome del monastero benedettino che si affaccia sul mare, è un altro tesoro 
              del <strong>Golfo del Tigullio</strong>. <b>La piccola spiaggia di ciottoli con l’abbazia benedettina alle spalle è uno spettacolo meraviglioso</b>. Nelle acque di San 
              Fruttuoso, inoltre, a circa 10-15 metri di profondità, si trova la <b>statua del Cristo degli Abissi</b>, diventata un popolare sito di immersioni.
            </p>
            <p>
              <b>La spiaggia però non è raggiungibile in auto</b>. Il modo più semplice per raggiungerla è il battello, ma chi ama camminare può arrivarci tramite i sentieri del 
              parco di Portofino. 
            </p>
            <p>
              Infine se cercate una spiaggia appartata e più intima ricordatevi della <b>Spiaggia del Pozzetto di Zoagli</b>, una delle più belle della Riviera di Levante. <b>È 
              una minuscola spiaggia di sabbia scura mista a ciottoli</b>, ideale per chi cerca la tranquillità e per chi ama fare snorkeling. La spiaggia è libera e non ha 
              punti ristoro. <b>Si raggiunge tramite un sentiero pedonale</b> che parte dalla via Aurelia, circa a metà strada tra Rapallo e Zoagli. 
            </p>
            <Image src={Baia_del_silenzio} className='mx-auto'/>
          </div>
        </main>
        <Footer/>
      </AuthenticatedLayout>
    </>
  )
}
