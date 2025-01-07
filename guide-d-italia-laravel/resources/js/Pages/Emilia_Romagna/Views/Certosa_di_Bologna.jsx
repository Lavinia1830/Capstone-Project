import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Certosa_di_Bologna(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='certosa_di_bologna' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Certosa di Bologna</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        La chiesa di San Girolamo e il <strong>cimitero della Certosa</strong>, sorgono su una vasta area dove fin dal V° secolo a.C. era collocata una delle necropoli dell’antica Felsina, i cui resti furono rinvenuti durante gli scavi archeologici del XIX secolo. Agli inizi del XIV secolo gran parte del 
                        terreno occupato dall’attuale cimitero era di proprietà del giureconsulto Giovanni d’Andrea, il quale ne fece donazione ai monaci Certosini affinché vi costruissero il loro monastero che venne intitolato a San Girolamo di Casara. Ottenuti altri appezzamenti di terre, il 17 aprile 
                        1334 fu benedetta la prima pietra e la costruzione ebbe inizio e proseguirà grazie a singole offerte e donazioni.
                    </p>
                    <p>
                        Nel 1350 il monastero era pressoché compiuto (chiostro con alloggi dei monaci, cappelle monacali, il Capitolo con il proprio chiostro, refettorio, foresteria, cucina) e la consacrazione della chiesa avvenne il 2 giugno 1359, celebrata dal vescovo Giovanni Nasio; entro il 1367 
                        furono compiute anche le mura di recinzione che circondavano la Certosa. Alla metà del XV secolo l’interesse del pontefice Nicolò V, devoto al certosino Beato Nicolò Albergati di Bologna, diede nuovo impulso edificatorio portando a predisporre un piano di ampliamento del complesso, 
                        di più ampio respiro. Un’altra fase edilizia intensa e continuativa si ebbe verso la fine del XVI secolo: durò circa trenta anni e fece della Certosa di Bologna uno dei più vasti e raffinati monasteri dell’ordine certosino. Nel XVII secolo alcuni lavori coinvolsero la chiesa di San 
                        Girolamo: fu innalzato il grande campanile (1608) si decorò l’abside della chiesa con le pitture di Bartolomeo Cesi (1616) e si ricavarono le cappelle nei transetti. Con la soppressione degli ordini monastici i monaci lasciarono la Certosa che venne utilizzato, inizialmente, per 
                        alloggi militari. All’inizio del XIX secolo la Commissione di Sanità del Reno decise di avvalersi dell’ex monastero, soppresso nel 1797, quale cimitero comunale. Dopo aver pubblicato i regolamenti sanitari e le prescrizioni per le tumulazioni si effettuarono i primi lavori necessari 
                        che ne resero possibile l’apertura nel 1801. Nel 1816 il Cardinale Oppizzoni riconobbe il cimitero come luogo sacro.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">La Chiesa di San Girolamo della Certosa</h2>
                    <p>
                        Alla chiesa di San Girolamo si accede dal lato orientale del cortile d’ingresso del cimitero. L’attuale planimetria, dalla forma di tau (T) rovesciata, è il risultato di ampliamenti cinquecenteschi che aggiunsero, alla primitiva chiesa trecentesca, un transetto a due campate sviluppato 
                        sul lato di facciata, collocato quindi a rovescio rispetto a quella che era la norma. La navata, formata da due campate e abside quadrate, è coperta da crociere costolonate e separate da archi acuti, impreziositi da decorazioni quattrocentesche. Nel transetto, a destra e sinistra, si 
                        aprono le cappelle cinquecentesche di San Bruno e di San Girolamo. Risale probabilmente alla prima meta del XV secolo la costruzione di tre cappelle addossate lungo il fianco settentrionale, all’esterno della chiesa: la Cappella di S. Antonio Abate poi di S. Giuseppe, la Cappella di S. 
                        Bernardino o della SS. Annunziata e la Cappella delle Reliquie. Esse formano un corpo unico con l’edificio, condividendone i particolari dell’esterno e il medesimo tipo di copertura; una quarta cappella ad uso di sacrestia fu aggiunta dopo l’inaugurazione della chiesa.
                    </p>
                    <p>
                        La facciata medievale, in mattoni a vista e affiancata dal piccolo campanile trecentesco, è coronata da un motivo di archetti trilobati in cotto su colonnine pensili; vi si aprono grandi finestre circolari che sostituiscono le originali monofore archiacute. Essa risulta parzialmente 
                        nascosta dal loggiato che delimita il cortile d’ingresso. Questo fu ampliato nel 1768 con il monumentale ingresso a cinque arcate di ordine tuscanico, opera dell’architetto Gian Giacomo Dotti e ultimo importante intervento di architettura. Settecentesche sono anche le ventitrè arcate 
                        del portico di ponente (che si interrompono davanti all’ingresso della chiesa) e le prime tredici del portico di levante: il resto del loggiato è ciò che resta del chiostro quattrocentesco. Al 1611 risale la realizzazione del campanile maggiore della chiesa, costruito dall’architetto 
                        Tommaso Martelli su incarico dei padri certosini, andandosi ad aggiungere al piccolo campanile trecentesco, divenuto insufficiente. Alto circa cinquanta metri, con base quadrata e cortina di laterizio a vista, il campanile è suddiviso in quattro livelli separati da cornici marcapiano. 
                        Nel livello inferiore, con larghe paraste angolari, si aprono finestre rettangolari su due lati; negli altri tre piani, con paraste binate di ordine dorico, ionico e composito, si aprono grandi archi ciechi a tutto sesto, nei primo e secondo piano, mentre nel terzo bifore di tradizione 
                        quattrocentesca con colonnine in pietra da taglio e oculi circolari nei timpani. La torre è coronata da una cornice composita e sormontata da balaustrata e coppie di pinnacoli, in corrispondenza delle paraste, sulle quali si imposta la piramide della guglia.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Il convento e il cimitero della Certosa</h2>
                    <p>
                        La decisione di utilizzare l’area della Certosa come cimitero pubblico evitò che il monastero venisse venduto in forma parcellizzata, sottraendolo ad uno smembramento che ne avrebbe cancellato la sua forma originaria. Lo schema distributivo del convento tercentesco, ispirato su modelli 
                        benedettini antichi, in particolare su quello della Cartusia o Grande Chartreuse, costruita nel 1084 dall’ arcivescovo di Reims, prevedeva essenzialmente, oltre alla chiesa con sacrestia, campanile e cappelle contigue, la cella del priore, il chiostro con gli alloggi dei monaci, la sala 
                        capitolare con il chiostro annesso, le cappelle dei monaci, il refettorio, la foresteria, la cucina, il cimitero dei monaci, orti, vigneti e peschiere. Dal 1450, per circa un secolo, oltre a terminare opere già iniziate e ampliare la chiesa, si costruirono nuovi spazi, il chiostro 
                        d’ingresso e la zona della spezieria. L’antica distribuzione risulta ancora parzialmente leggibile poiché, inizialmente, per adeguare il sito a cimitero, si intervenne sfruttando al massimo le preesistenze senza effettuare modifiche. Oltre alla Chiesa di San Girolamo rimangono pressoché 
                        integri i chiostri rinascimentali e quelli minori; restano tracce della sala capitolare (ora Sala della Madonna dell’Asse), del Chiostro del Capitolo (ora Chiostro delle Madonne o dell’Ossario), del Refettorio (trasformato in Sala della Pietà), del Recinto delle Monache e dei Sacerdoti, 
                        della Chiesuola della Madonna del chiostro d’ingresso. Del XVI secolo sono il Chiostro della Cappella, ampliamento dell’originario chiostro trecentesco, e il Chiostro detto del Cinquecento. Rimane testimonianza anche delle case-cella dei certosini, oggi riconoscibili in piccoli volumi 
                        collegati in serie da portici e destinati alla sepoltura del clero. Inizialmente non era stato previsto un progetto di trasformazione organico ma risulta evidente la ricerca di un’ espansione del cimitero che tenesse conto delle costruzioni antiche, ordinata e orientata lungo un asse di 
                        riferimento ovvero l’asse mediano del chiostro rinascimentale: si operano adattamenti degli spazi esistenti e il cimitero nasce dalla crescita di elementi, dalle architetture differenti ma coerenti tra loro, che arrivano ad occupare anche le aree libere degli orti.
                    </p>
                    <p>
                        I lavori iniziarono nel 1801 con la realizzazione di un recinto porticato, lungo i terreni a settentrione. L’architetto Ercole Gasparini (1771- 1829), responsabile dei nuovi lavori della Certosa, ideò di sfruttare il tratto pianeggiante del portico di San Luca, collegando l’ingresso del 
                        cimitero alla zona del Meloncello con un tratto di portico, dai medesimi caratteri formali, che fu costruito dal 1811. In seguito, l’architetto Luigi Marchesini (1796 –1882) subentrò nella direzione dei lavori: oltre a realizzare l’attraversamento del canale di Reno con un solenne 
                        loggiato ad otto colonne doriche, egli completò alcune delle opere ideate da Angelo Venturoli (….) come la trasformazione del refettorio dei certosini in camera sepolcrale, detta Sala della Pietà e la Sala delle Tombe del 1816, un tempo salone usato dai monaci per le riunioni. Un altro 
                        intervento che si inserì nel cuore del convento fu la realizzazione del Pantheon degli Uomini, eseguita nel 1828 da Giuseppe Tubertini trasformando l’ex cella del priore. Dal 1833 il programma diventa più complesso: Marchesini costruì un lungo edificio coperto, il Loggiato delle Tombe, 
                        che occupava tutta l’area degli orti, del vigneto e delle peschiere dell’antico monastero. Questo loggiato di collegava alla Sala delle Catacombe, ricavata da quattro celle monacali, al Colombario, edifico tra i più complessi e articolati, e alla Sala Ellittica del 1834 (cappella che 
                        collegava questa area al vecchio convento) opere tutte progettate da Marchesini. La seconda fase costruttiva del cimitero fu generata dalla saturazione delle grandi gallerie di primo impianto che portò a necessari lavori di ampliamento del primitivo impianto conventuale. Conseguentemente, 
                        nel 1863, l’ingegnere Coriolano Monti (1815 –1880) realizzò l’imponente Galleria a tre navate, Antonio Zannoni costruì il Chiostro VII, collegato con la Galleria degli Angeli del 1860, Antonio Dall’Olio realizza la Corsia del Colombario nel 1878-82.
                    </p>
                    <p>
                        Alla fine dell’Ottocento il cimitero appare coma una successione di edifici articolati e collegati tra loro, da consentire un insieme di passaggi coperti e ininterrotti. Allora si iniziano a realizzare numerosi monumenti sepolcrali: se le prime tombe, seguendo la tradizione quadraturistica 
                        bolognese, furono dipinte a fresco dai più noti artisti dell’epoca, da Gaetano Caponeri a Pelagio Palagi, da Antonio Basoli a Giovan Battista Frulli, in seguito, si preferiscono i monumenti a rilievo e la Certosa è, davvero, un autentico museo a cielo aperto della scultura degli ultimi due 
                        secoli. Tra gli artisti più noti, Giacomo De Maria e Giovanni Putti, Vincenzo Vela e Stefano Galletti, Carlo Monari e Salvino Salvini. Il lessico architettonico adottato nella crescita e nella trasformazione del cimitero, dall’inizio dell’Ottocento alla fine del secolo, è dominato da un 
                        gusto eclettico che prevedeva la ripresa degli ordini classici e delle forme architettoniche degli edifici antichi, attraverso corrette citazioni o tramite rielaborazioni e combinazioni nuove. Stile ‘ufficiale’ dell’architettura cimiteriale ottocentesca, il linguaggio eclettico si mostra 
                        inizialmente ricco di spunti ideativi originali, ma diviene, con il passare degli anni, man mano più sterile e ripetitivo. All’inizio del Novecento, Enrico Casati e Paolo Cacciari costruirono il Chiostro VI, dedicato ai Caduti della Grande Guerra, con la relativa corsia e nel 1924, 
                        realizzarono il nuovo ingresso della Certosa, vicino canale del Reno.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d772.1947645505954!2d11.306485236558062!3d44.497614876511925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd46653c8c0fd%3A0x7b9546177dabb598!2sCertosa%20di%20Bologna%20-%20Bologna%20Servizi%20Cimiteriali%20srl!5e1!3m2!1sit!2sit!4v1713165105891!5m2!1sit!2sit"
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
