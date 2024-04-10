import React, {useState, useEffect} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Image } from 'react-bootstrap';
import San_Salvatore from '../../../../assets/Lombardia/San_salvatore_Brescia_Lombardia.jpg';
import Coro_delle_monache from '../../../../assets/Lombardia/Coro_delle_monache_Brescia_Lombardia.jpg';
import Museo_di_santa_maria_in_solario from '../../../../assets/Lombardia/Museo_di_santa_maria_in_solario_Brescia_Lomabadia.jpg';
import Domus_di_Dioniso from '../../../../assets/Lombardia/Domus_di_Dioniso_Brescia_Lombardia.jpg';
import Viridarium from '../../../../assets/Lombardia/Viridarium_Brescia_Lombardia.jpg';
import Rapuzzi from '../../../../assets/Lombardia/Rapuzzi_Brescia_Lombardia.jpg';

export default function Museo_di_Santa_Giulia(props) {

    const [isSalvatore, setIsSalvatore] = useState(
        JSON.parse(localStorage.getItem('isSalvatore')) || false
    );

    const toggleSalvatore = () => {
        setIsSalvatore(!isSalvatore);
      };

    useEffect(() => {
        localStorage.setItem('isSalvatore', JSON.stringify(isSalvatore));
    }, [isSalvatore]);

    const [isMonache, setIsMonache] = useState(
        JSON.parse(localStorage.getItem('isMonache')) || false
    );

    const toggleMonache = () => {
        setIsMonache(!isMonache);
      };

    useEffect(() => {
        localStorage.setItem('isMonache', JSON.stringify(isMonache));
    }, [isMonache]);

    const [isSolario, setIsSolario] = useState(
        JSON.parse(localStorage.getItem('isSolario')) || false
    );

    const toggleSolario = () => {
        setIsSolario(!isSolario);
      };

    useEffect(() => {
        localStorage.setItem('isSolario', JSON.stringify(isSolario));
    }, [isSolario]);

    const [isDomus, setIsDomus] = useState(
        JSON.parse(localStorage.getItem('isDomus')) || false
    );

    const toggleDomus = () => {
        setIsDomus(!isDomus);
      };

    useEffect(() => {
        localStorage.setItem('isDomus', JSON.stringify(isDomus));
    }, [isDomus]);

    const [isViridarium, setIsViridarium] = useState(
        JSON.parse(localStorage.getItem('isViridarium')) || false
    );

    const toggleViridarium = () => {
        setIsViridarium(!isViridarium);
      };

    useEffect(() => {
        localStorage.setItem('isViridarium', JSON.stringify(isViridarium));
    }, [isViridarium]);

    const [isRomana, setIsRomana] = useState(
        JSON.parse(localStorage.getItem('isRomana')) || false
    );

    const toggleRomana = () => {
        setIsRomana(!isRomana);
      };

    useEffect(() => {
        localStorage.setItem('isRomana', JSON.stringify(isRomana));
    }, [isRomana]);

  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
      <main>
        <div className='museo_di_santa_giulia' style={{ position: 'relative' }}>
          <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Museo di Santa Giulia</h1>
          <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
          <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Visite</p>
        </div>
        <div className="margin mt-3">
            <p>
                All’interno del complesso monumentale, le sezioni del Museo di Santa Giulia sono disposte in ordine cronologico e tematico, con migliaia di pezzi straordinari dal IV millennio a.C. al XVIII secolo.
            </p>
            <p>
                I percorsi di visita si snodano negli spazi monastici aprendosi in luoghi ed edifici particolarmente significativi quali, ad esempio, un’area archeologica con <b>due abitazioni di età romana (I-III secolo d.C.), 
                la basilica longobarda di San Salvatore (VIII secolo d.C.), il Coro delle monache (inizio del XVI secolo) e l’Oratorio romanico di Santa Maria in Solario (XII secolo)</b>, nel quale le monache custodivano il 
                tesoro del monastero, di cui ancora rimangono la <b>Lipsanoteca</b>, un prezioso contenitore in avorio per reliquie, e la <b>Croce di Desiderio</b> ornata da 212 gemme, opera di oreficeria carolingia.
            </p>
            <div className='border-top border-bottom mb-3'>
                <h2 onClick={toggleSalvatore} className='cursor-pointer'>{isSalvatore ? '+' : '-'} La basilica di San Salvatore</h2>
                <div className={isSalvatore ? 'h-0 overflow-hidden position-relative' : ''}>
                    <p>
                        La basilica di San Salvatore è <b>una delle testimonianze più importanti dell’architettura religiosa longobarda</b>. Nel progetto di <b>re Desiderio</b>, che nel <b>753 d.C.</b> fondò il monastero 
                        dedicandolo a <b>San Salvatore</b>, e più tardi facendovi collocare le spoglie della martire <b>Santa Giulia</b>, la chiesa-mausoleo doveva porsi come uno dei simboli del potere dinastico della monarchia e 
                        dei ducati longobardi. Le indagini archeologiche condotte all’interno dell’edificio hanno messo in luce non solo parte delle sue murature originarie, ma anche resti di una domus romana (I-IV secolo d.C.), 
                        alcune strutture riferibili alla prima età longobarda (568-650) e le fondazioni di una chiesa più antica, ora parzialmente visibili.
                    </p>
                    <p>
                        Il campanile fu innalzato intorno al 1300. Nel sec. XIV furono aperte le cappelle nel fianco settentrionale. La facciata fu demolita nel 1466 per costruire, a un livello superiore, il coro delle monache 
                        (attualmente annesso alla chiesa di Santa Giulia), il cui piano inferiore funge da atrio di San Salvatore.
                    </p>
                    <p>
                        L’interno della basilica è diviso in tre navate da colonne di età romana in marmi policromi sormontate da ricchi capitelli; gli archi che le uniscono erano completamente rivestiti da stucchi ornati da motivi 
                        vegetali. Gli affreschi sulle pareti, dei quali sopravvivono ampi brani, riproducevano scene dell’infanzia della vita di Cristo e dei martiri le cui reliquie erano custodite nella cripta.
                    </p>
                    <p>
                        Sulla controfacciata e in una delle cappelle sono visibili <b>affreschi attribuiti a Paolo da Caylina il Giovane</b>; alla base del campanile gli <b>affreschi del Romanino</b> che raffigurano episodi della 
                        vita di Sant’Obizio (1525 circa).<br/>
                        Nella parete destra è ricavata una nicchia, affrescata nel sottarco: si tratta di una tomba ad arcosolio, attribuita dalla tradizione alla regina Ansa. La cripta fu costruita forse nel 762-763 e ampliata nel 
                        sec. XII per l’elevato numero di reliquie che conteneva.
                    </p>
                    <p>
                        All’interno di questo ambiente si trovano frammenti di <b>lastra con pavone</b>, esempio raffinato di scultura, dove l’eleganza ispirata all’arte bizantina ed un certo naturalismo di derivazione tardoantica, 
                        si accompagnano a modi e temi della cultura longobarda.
                    </p>
                    <Image src={San_Salvatore}></Image>
                </div>
            </div>
            <div className='border-bottom border-top mb-3'>
                <h2 onClick={toggleMonache} className='cursor-pointer'>{isMonache ? '+' : '-'} Il coro delle Monache</h2>
                <div className={isMonache ? 'h-0 overflow-hidden position-relative' : ''}>
                    <p>
                        Il Coro, nobile ambiente affrescato entro il quale le monache benedettine del monastero di Santa Giulia per secoli hanno assistito, non viste, alle funzioni religiose, è parte integrante del Museo di Santa Giulia.
                    </p>
                    <p>
                        Questo sontuoso luogo di culto, articolato su due livelli, venne innalzato tra Quattrocento e Cinquecento in ottemperanza alle esigenze dettate dalla regola benedettina. Le pareti sono riccamente decorate da 
                        <b> affreschi di Floriano Ferramola e di Paolo da Caylina il Giovane</b>, con un programma iconografico ispirato al <b>tema della salvezza</b>, trattato con scene dell’infanzia di Gesù, della passione e della 
                        resurrezione e con altri soggetti attinenti, intervallati da immagini devozionali. L’insieme risulta fortemente unitario e di grande suggestione cromatica ed evocativa.
                    </p>
                    <p>
                        Fra le opere di maggior interesse, esposte in questo settore museale dedicato alla scultura e ai monumenti funerari di età Veneta, si può trovare il grande <b>Mausoleo Martinengo</b>, capolavoro di scultura, 
                        tra i più rappresentativi della stagione rinascimentale in territorio lombardo.
                    </p>
                    <Image src={Coro_delle_monache}></Image>
                </div>
            </div>
            <div className='border-bottom border-top mb-3'>
                <h2 onClick={toggleSolario} className='cursor-pointer'>{isSolario ? '+' : '-'} La chiesa di Santa Maria in Solario</h2>
                <div className={isSolario ? 'h-0 overflow-hidden position-relative' : ''}>
                    <p>
                        L’oratorio di Santa Maria in Solario, di forme romaniche, venne costruito verso la metà del XII secolo come luogo di culto privato delle monache. A pianta quadrata, con massiccia muratura in conci di medolo, 
                        con inseriti frammenti d’iscrizioni romane, il sacello è sormontato da un tiburio ottagonale con una loggetta cieca, sorretta da colonnine e capitelli altomedievali (sec. VIII – IX d.C.).
                    </p>
                    <p>
                        Una suggestiva scala all’interno della muratura collega i due livelli dell’oratorio. L’architettura del pian terreno è caratterizzata da una grande ara romana con funzione di pilastro centrale: vi sono esposti 
                        visibili preziosi oggetti dedicati al culto delle reliquie che costituivano il tesoro, anche spirituale, del monastero, come la <b>Lipsanoteca</b>, cassetta d’avorio decorate a rilievo (IV secolo d.C.) e la crocetta 
                        reliquario in oro, perle e pietre colorate (X secolo d.C.).
                    </p>
                    <p>
                        Il piano superiore, caratterizzato da un’atmosfera raccolta, era destinato ad ospitare i momenti più importanti della liturgia monastica. Sotto una volta stellata affrescata, come le pareti, da <b>Floriano Ferramola </b> 
                        tra il 1513 e il 1524, è possibile ammirare la <b>Croce di Desiderio</b>, rara opera di oreficeria della prima età carolingia (IX secolo d.C.), con 212 gemme, cammei e paste vitree databili dall’età romana al XVI secolo.
                    </p>
                    <Image src={Museo_di_santa_maria_in_solario}></Image>
                </div>
            </div>
            <div className='border-bottom border-top mb-3'>
                <h2 onClick={toggleDomus} className='cursor-pointer'>{isDomus ? '+' : '-'} Le domus dell'Ortaglia</h2>
                <div className={isDomus ? 'h-0 overflow-hidden position-relative' : ''}>
                    <p>
                        Le <i>domus</i> dell’Ortaglia sono parte di un quartiere romano residenziale, situato sui terrazzamenti del colle Cidneo, tra l’area pubblica monumentale e le mura orientali di Brixia, l’antica Brescia.
                    </p>
                    <p>
                        Intorno ad atrii lastricati in pietra sono distribuiti gli ambienti di rappresentanza, quelli della vita privata e quelli di servizio, con <b>mosaici ed affreschi secondo modelli decorativi analoghi a quelli di Roma e 
                        Pompei</b>, affacciati sui viridaria e gli orti estesi verso le mura. I vani più importanti sono dotati di un impianto di riscaldamento a parete ed a pavimento; una fitta rete di condutture in piombo, derivata da uno 
                        degli acquedotti urbani, garantiva acqua corrente ai vani di servizio ed alle fontane, rinvenute anche all’interno delle sale più rappresentative, a testimonianza dell’alto livello sociale e culturale dei proprietari.
                    </p>
                    <p>
                        <b>Le <i>domus</i> rimasero in uso dal I al IV secolo d.C.</b>, quindi subirono un progressivo degrado fino all’abbandono per diventare, con i Longobardi, area demaniale regia e poi ortaglia del convento del monastero di 
                        Santa Giulia.
                    </p>
                    <p>
                        L’alto livello di conservazione di strutture murarie e piani pavimentali, nonché la prossimità al Museo di Santa Giulia, hanno favorito la progettazione di un percorso espositivo omogeneo, che consente ai visitatori di 
                        passare senza soluzione di continuità dai settori archeologici del museo all’interno delle domus, protette da una grande struttura contemporanea che mantiene inalterati i parametri conservativi e che consente una corretta 
                        lettura del sito oltre a un’ottimale percezione dei suoi rapporti con la città antica.
                    </p>
                    <Image src={Domus_di_Dioniso}></Image>
                </div>
            </div>
            <div className='border-bottom border-top mb-3'>
                <h2 onClick={toggleViridarium} className='cursor-pointer'>{isViridarium ? '+' : '-'} Il Viridarium – Parco delle Sculture</h2>
                <div className={isViridarium ? 'h-0 overflow-hidden position-relative' : ''}>
                    <p>
                        Dall’area museale delle <i>Domus</i> dell’Ortaglia, gettando uno sguardo verso l’esterno, è possibile cogliere in tutta la sua particolarità il <i>Viridarium - Parco delle Sculture</i>,  il giardino delle abitazioni 
                        dell’antica <i>Brixia</i>.
                    </p>
                    <p>
                        Intorno ad atrii lastricati in pietra sono distribuiti gli ambienti di rappresentanza, quelli della vita privata e quelli di servizio, con <b>mosaici ed affreschi secondo modelli decorativi analoghi a quelli di Roma e 
                        Pompei</b>, affacciati sui viridaria e gli orti estesi verso le mura. I vani più importanti sono dotati di un impianto di riscaldamento a parete ed a pavimento; una fitta rete di condutture in piombo, derivata da uno 
                        degli acquedotti urbani, garantiva acqua corrente ai vani di servizio ed alle fontane, rinvenute anche all’interno delle sale più rappresentative, a testimonianza dell’alto livello sociale e culturale dei proprietari.
                    </p>
                    <p>
                        Partendo dagli scavi archeologici, che hanno restituito alla luce spazi quadrangolari delimitati da muretti, verosimilmente gli <i>horti</i> delle case romane, è stato possibile proporre ai visitatori le aree verdi adiacenti 7
                        alle <i>domus</i>, come dovevano essere duemila anni fa. Se infatti in epoca più antica gli <i>horti</i> erano terreni prevalentemente produttivi, in cui venivano coltivati alberi da frutto ed erbe aromatiche, dal I secolo 
                        a.C. si afferma il gusto del giardino ameno, il <i>Viridarium</i>, con fiori e specie arboree a scopo decorativo e contemplativo.
                    </p>
                    <p>
                        In concomitanza con l’allestimento museale delle <i>domus</i>, archeologi, botanici e architetti si sono cimentati per ricreare in Santa Giulia, su un’area di oltre 3.000 mq, un orto-frutteto e un <i>Viridarium</i> con specie 
                        arboree diffuse e utilizzate in epoca romana per scopi ornamentali, culinari o terapeutici.
                    </p>
                    <p>
                        Lungo percorsi pavimentati con lastre di pietra, seguendo una geometria semplice e ordinata, nell’hortus sono stati messi a dimora alberi da frutto fra cui la vite (protagonista dei mosaici della <i>domus</i> di Dioniso), 
                        il fico, il melo e il cotogno, il pero, il nespolo, insieme al susino, al pesco e al melograno, ingredienti immancabili nelle ricette di epoca latina, oltre che simboli emblematici della civiltà mediterranea.
                    </p>
                    <p>
                        Nel <i>Viridarium</i>, invece, per ricreare l’atmosfera in cui si immergevano gli abitanti dell’antica <i>Brixia</i>, catturano lo sguardo siepi geometriche di bosso e di lauro, pianta consacrata ad Apollo, insieme a cespugli 
                        di oleandro, viburno e mirto.<br/>
                        La rosa nelle sue varietà più antiche, quale elemento di spicco in ogni giardino romano, rappresenta la macchia cromatica più significativa, nelle diverse specie fra cui la canina, la gallica e la muschiata, che avvolgono con 
                        profumi e colori, oggi come al tempo del divo Augusto.<br/>
                        Proseguendo verso le mura romane, sono stati posizionati reperti frutto dei lavori di scavo nelle diverse aree cittadine, quali iscrizioni, altari votivi, fregi, monumenti funerari e grandi sarcofagi, attorniati da olmi, cipressi 
                        e filari di acanto.
                    </p>
                    <p>
                        Arte contemporanea nel <i>Viridarium</i>: gli spazi verdi esterni alle <i>domus</i> accolgono installazioni di arte contemporanea che sono state acquisite nel corso degli anni: il <i>Terzo Paradiso</i> di Michelangelo Pistoletto 
                        (2015), <i>Untitled</i> di Ariel Schlesinger (2019), Nike Metafisica di Francesco Vezzoli (2021), <i>Formiamo umanità (Vite operose)</i> di Valerio Rocco Orlando (2023), <i>Mondo d’acciaio</i> di Emilio Isgrò (2023).
                    </p>
                    <Image src={Viridarium}></Image>
                </div>
            </div>
            <div className='border-bottom border-top m-'>
                <h2 onClick={toggleRomana} className='cursor-pointer'>{isRomana ? '+' : '-'} Il nuovo allestimento della sezione “L’età romana. La città”</h2>
                <div className={isRomana ? 'h-0 overflow-hidden position-relative' : ''}>
                    <p>
                        La sezione “L’età romana. La città” viene aggiornata a 25 anni dall’aperta del Museo di Santa Giulia, con un profondo rinnovamento improntato ai più moderni standard di accessibilità e dettato dalle continue indagini in corso 
                        in città, che portano quotidianamente all’arricchimento del patrimonio e delle conoscenze.<br/>
                        Vengono proposti lungo il percorso di visita i contesti monumentali principali che, grazie ai recenti interventi di valorizzazione, sono ora visitabili nel vicino Parco Archeologico (Santuario repubblicano, Tempio Capitolino, 
                        teatro). Tali contesti sono approfonditi in museo grazie a plastici, dedicati anche all’esplorazione tattile, a iconografia storica, a brani architettonici di pregio, illustrati nell’apparato didattico didascalico, che offre un 
                        panorama delle più recenti interpretazioni.<br/>
                        Un affondo nuovo e di grande importanza è dedicato al periodo tardoantico, nel quale vennero abbandonati i luoghi di culto pagano; a Brescia, nell’area del Capitolium, sono stati ritrovati due depositi intenzionali che ci hanno 
                        restituito opere e informazioni di capitale importanza.<br/>
                        Il primo è il deposito dei bronzi scoperti presso il tempio nel 1826, di cui fa parte anche la Vittoria Alata ora esposta nel tempio stesso. L’insieme delle teste ritratto, con elementi figurati pertinenti ad altre statue, è 
                        presentato con nuovi layout che ne valorizzano la fattura e le preziose decorazioni.<br/>
                        Un altro deposito invece, pressoché inedito e mai mostrato nella sua interezza, include una considerevole quantità di oggetti votivi offerti nelle aule del tempio dai fedeli nel corso della vita di questo luogo di culto dal I 
                        almeno fino al IV secolo d.C.: rari vetri incisi, gioielli, oggetti rituali, lucerne semplici e figurate, anfore con preziosi contenuti, grandi piatti per le offerte alle divinità, ceramiche decorate a stampo, … <br/>
                        Fanno parte del percorso museale tre installazioni digitali multimediali dal lessico contemporaneo, che interpretano e restituiscono i temi della sezione, evocando luoghi ed eventi storici con modalità creative non convenzionali.
                    </p>
                    <Image src={Rapuzzi}></Image>
                </div>
            </div>
            
        </div>
        <div className='margin mb-4'>
            <h3 className='color-subtitle text-center'>Mappa</h3>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.3587216229284!2d10.227094925144012!3d45.5392660643461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47817615e1a14777%3A0x687f2fc8fcbb9b70!2sMuseo%20di%20Santa%20Giulia!5e1!3m2!1sit!2sit!4v1712667935228!5m2!1sit!2sit" 
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
