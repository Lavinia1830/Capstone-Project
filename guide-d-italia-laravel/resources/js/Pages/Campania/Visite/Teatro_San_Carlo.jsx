import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Teatro_San_Carlo(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='teatro_san_carlo' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Teatro San Carlo</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">1737: nasce il Teatro d'Opera più antico del mondo</h2>
                    <p className='fst-italic'>
                        “Vuoi tu sapere se qualche scintilla  brucia in te? Corri, vola a <b>Napoli</b> ad ascoltare i capolavori di Leo, Durante, Jommelli, Pergolesi”. (Jean-Jacques Rousseau, Dictionnaire de Musique).
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">L'origine</h2>
                    <p>
                        Accanto a <b>Piazza del Plebiscito</b>, simbolo della città di <b>Napoli</b>, sorge il tempio lirico italiano, con una data di nascita che anticipa di 41 anni la Scala di Milano e di 55 la Fenice di Venezia. Il Teatro di San Carlo è stato costruito nel 1737, per volontà del Re Carlo III 
                        di Borbone fortemente intenzionato a dare alla città un nuovo teatro che rappresentasse il potere regio. Il progetto è affidato all'architetto Giovanni Antonio Medrano, Colonnello Brigadiere spagnolo di stanza a Napoli, e ad Angelo Carasale, già direttore del San Bartolomeo, il quale 
                        completa la “real fabrica” in circa otto mesi con una spesa di 75 mila ducati. Il disegno di Medrano prevedeva una sala lunga 28,6 metri e larga 22,5 metri, con 184 palchi, compresi quelli di proscenio, disposti in sei ordini, più un palco reale capace di ospitare dieci persone, per 
                        un totale di 1379 posti.<br/>
                        L'inaugurazione, avvenuta la sera del 4 novembre, giorno onomastico del sovrano, sfoggia l'Achille in Sciro di  Pietro Metastasio, con musica di Domenico Sarro e “due balli per intermezzo” creati da Francesco Aquilante; le scene sono di Pietro Righini. Come era usanza dell'epoca, 
                        Achille è interpretato da una donna, Vittoria Tesi, detta «la Moretta», con accanto la prima donna soprano Anna Peruzzi, detta «la Parrucchierina» e il tenore Angelo Amorevoli.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Gli artisti, le opere...</h2>
                    <p>
                        Nei primi quattro anni di stagioni, è Casarale l'imprenditore-impresario del Teatro, il primo “uomo dei miracoli” al servizio del sovrano e dei suoi gusti, orientati ad una particolare predilezione per la danza. Seguiranno opere del periodo fulgido napoletano: gli autori più 
                        rappresentati sono Leonardo Leo, Niccolò Porpora, Leonardo Vinci e naturalmente Domenico Sarro. E ancora Johann Adolf Hasse “il Sassone”, Gaetano Latilla, Niccolò Jommelli, Baldassarre Galuppi, Niccolò Piccinni, Antonio Maria Gaspare Sacchini, Tommaso Traetta e infine Giacomo Tritto.<br/>
                        Tra le ugole d'oro osannate dal pubblico si registrano i nomi di Vittoria Tesi, presente al San Carlo fin dall'inaugurazione, Angelo Amorevoli, Anna Lucia De Amicis, Celeste Coltellini. Il Settecento è anche il secolo degli “evirati cantori”, dominato da Carlo Broschi in arte Farinelli: 
                        Napoli incorona beniamino del pubblico sancarliano il Caffariello (Gaetano Majorano), pupillo di Porpora, uno dei castrati più famosi del suo tempo, accanto a Gizziello (Gioacchino Conti) e Gian Battista Velluti.<br/>
                        Il XVIII secolo vede anche l'arrivo, al Teatro San Carlo, di Christoph Willibald Gluck, chiamato a Napoli dall'impresario Tufarelli per tenere a battesimo la sua Clemenza di Tito (1752) anticipando Johann Christian Bach che tra il 1761 e l'anno successivo firma due titoli, Catone e 
                        Alessandro.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">La Scuola Napoletana</h2>
                    <p>
                        Dai quattro Conservatori della città trae la sua linfa creativa la punta di diamante del mondo musicale europeo e vivace nutrimento artistico per il San Carlo: la Scuola Napoletana. A questa rivolsero il proprio sguardo attento e curioso artisti come Händel, Haydn e un giovane Mozart, 
                        affascinato nel 1778 da una Napoli “che canta e incanta” tanto da voler ambientare il primo atto del suo così fan tutte tra le ridenti atmosfere di una storica “bottega del caffè” della città.<br/>
                        Incommensurabili maestri della <b>Scuola Napoletana</b> sono Domenico Cimarosa e Giovanni Paisiello a cui, nel 1787, viene dato il compito di “sovrintendere all'Orchestra del San Carlo”, procedendo ad una radicale riforma. Nello stesso anno, su commissione di Ferdinando IV, scrive l'”Inno 
                        Nazionale delle Due Sicilie”.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Il San Carlo e la Rivoluzione Partenopea del 1799</h2>
                    <p>
                        L'anno 1799 rappresenta per Napoli una parentesi breve ma che diffonderà alto il suo grido in tutta l'Europa: pochi mesi di fervore giacobino in cui donne e uomini, dal palco militante del Lirico, ribattezzato Teatro Nazionale di San Carlo, si fanno promotori gli ideali di libertà, 
                        fraternità e uguaglianza. Scrive il “Monitore”, in data 27 gennaio, in riferimento all'Inno composto da Cimarosa sulle infiammate liriche di Luigi Rossi “Nel Teatro Nazionale di San Carlo fu cantato un inno patriottico in mezzo a' più lieti evviva alla Libertà”. In scena, in quei giorni, 
                        c'è il Nicaboro in Jucatan di Giacomo Tritto. Soltanto pochi mesi più tardi la parentesi libertaria sarà soffocata nel sangue e i Borbone torneranno sul trono, non potendo però impedire ad intellettuali come Eleonora Pimentel Fonseca, Luisa Sanfelice, Domenico Cirillo, Francesco Caracciolo, 
                        Melchiorre Delfico e lo stesso Cimarosa di lasciare un'impronta indelebile e ineludibile nel faticoso processo di costruzione dell'identità italiana.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Benvenuti nell'Ottocento</h2>
                    <p>
                        “La prima impressione è di essere piovuti   nel palazzo di un imperatore orientale. Gli occhi sono abbagliati, l'anima rapita...” (Stehdhal, Rome, Naples et Florence, 1817)
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">L'epoca Barbaja</h2>
                    <p>
                        <b>Napoli</b> splende tra le città di respiro europeo, con quasi mezzo milione di abitanti e il vivace flusso dei visitatori portata dalla voga del Grand Tour. Con l'ascesa al trono di Murat nel 1808 e la gestione di Domenico Barbaja, dal luglio del 1809, si apre un nuovo capitolo nella storia 
                        del <strong>Teatro di San Carlo</strong>. Con il “principe degli impresari” si apre il tempio delle grandi stagioni dirette da Rossini e Donizetti e il “Real Teatro” diventa anche teatro del Popolo. L'ex garzone di taverna Barbaja, secondo quanto riportato da Giampiero Tintori, “tenendo 
                        banco per il gioco d'azzardo alla Scala di Milano, per una sola stagione, riuscì a spennare così bene i nobili milanesi da ricostruire il Teatro di San Carlo e divenirne il signore assoluto”.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">La nuova veste del San Carlo</h2>
                    <p>
                        La  ristrutturazione del Teatro porta la firma dall'architetto e scenografo Antonio Niccolini (1772-1850). Il caposcuola del Neoclassicismo a Napoli interviene, a più riprese, sull'edificio che progressivamente acquisisce la fisionomia odierna. La prima fase della metamorfosi riguarda 
                        la facciata, trasfigurata da elementi della grammatica classicistica e da decorazioni ellenizzanti, con la conseguente aggiunta del ridotto e degli ambienti di ricreazione e ristoro. I lavori, avviati già nel dicembre 1809, si concludono due anni dopo. Il portico carrozzabile sostenuto 
                        da pilastri si ispira al modello offerto dalla Scala (1776-78) di Giuseppe Piermarini, modificato tuttavia dall'inserimento, al secondo registro della facciata, della loggia ionica corrispondente agli ambienti del ridotto. Con Niccolini il Teatro acquisisce, così, le connotazioni del 
                        tempio, diventando monumento-simbolo della città. <br/>
                        Nella notte del 13 febbraio del 1816 un incendio devasta l'edificio del Massimo napoletano. Rimangono intatti soltanto i muri perimetrali e il corpo aggiunto. La ricostruzione, compiuta nell’arco di nove mesi, è sempre diretta da Antonio Niccolini, che ripropone a grandi linee la sala 
                        del 1812. L’architetto toscano ne conserva, infatti, l'impianto a ferro di cavallo e la configurazione del boccascena, sebbene allargato e ornato nella superficie interna dal bassorilievo raffigurante “Il Tempo e le Ore”, ancor oggi esistente. Al centro del soffitto la tela con Apollo 
                        che presenta a Minerva i più grandi poeti del mondo  dipinto da Antonio, Giuseppe e Giovanni Cammarano riprendendo il soggetto delle precedenti edizioni. Il sipario completa l'arredo fisso della sala: più volte ridipinto da Giuseppe Cammarano, è sostituito nel 1854 dall'attuale 
                        esemplare dovuto a Giuseppe Mancinelli e Salvatore Fergola, raffigurante un «simbolico Parnaso» con ottanta poeti e musicisti. Ma la fabbrica del Teatro non può dirsi completa senza menzionare la facciata laterale realizzata su progetto di Francesco Gavaudan e Pietro Gesuè a seguito 
                        dell'abbattimento dell'ultimo baluardo del Palazzo Vecchio (1838-42). Quale «Architetto decoratore de' Reali Teatri», Niccolini dirige anche i successivi interventi di manutenzione e di restauro. Fra questi si ricorda l'ammodernamento compiuto nel 1844, insieme al figlio Fausto e a 
                        Francesco Maria dei Giudice, di cui rimane testimonianza in una memoria autografa pubblicata nello stesso anno.<br/>              
                        L'attuale foyer, realizzato nella zona orientale del giardino di Palazzo Reale è, invece, realizzato nel 1937 su disegno di Michele Platania. Distrutto da un bombardamento nel 1943 è stato ricostruito nell'immediato dopoguerra.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">L'effetto San Carlo: un teatro pulsante arte</h2>
                    <p>
                        Il 4 ottobre del 1815 un compositore di 23 anni, Gioacchino Rossini, firma la sua prima opera al San Carlo, Elisabetta Regina d'Inghilterra. Il cast è stellare: Isabella Colbran, Andrea Nozzari, Manuel García. “Furore!” scrive il musicista all'indomani del debutto partenopeo, per la 
                        gioia di essere in cartellone nel “teatro dei grandi”. Da allora, la scena del San Carlo si riempie di respiro rossiniano con le opere Armida, Mosè in Egitto, Ricciardo, Zoraide e ancora Ermione, La Gazza Ladra, Zelmira.<br/>
                        A comporre 17 opere per il San Carlo fu, invece, il compositore bergamasco Gaetano Donizetti; tra queste ricordiamo  Maria Stuarda, Roberto Devereux e l'immortale Lucia di Lammermoor in scena per la prima volta proprio al Massimo di Napoli il 26 settembre 1835.<br/>
                        Interpreti come Maria Malibran, Giuditta Pasta, Luigi Lablache, Giovanni Battista Rubini e ancora i due celebri rivali francesi Adolphe Mourrit e Gilbert Duprez, “inventore” quest'ultimo del do di petto emblema stilistico del canto romantico, fanno vibrare le più intense corde sonore 
                        degli anni d'oro del Teatro San Carlo.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">L'indimenticabile inaugurazione</h2>
                    <p>
                        L'effetto San Carlo risuona ancora, quasi fosse una formula magica, sul trono riconquistato dai Borbone. Lo scrittore Stendhal, all'inaugurazione del 12 gennaio 1817, neanche un anno dopo l'incendio che aveva devastato il Teatro, scrisse: “Non c'è nulla, in tutta Europa, che non dico 
                        si avvicini a questo teatro ma ne dia la più pallida idea. Questa sala, ricostruita in trecento giorni, è un colpo di Stato. Essa garantisce al re, meglio della legge più perfetta, il favore popolare... Chi volesse farsi lapidare, non avrebbe che da trovarvi un difetto. Appena parlate 
                        di Ferdinando, vi dicono: 'ha ricostruito il San Carlo!'”.<br/>
                        La sera della grande riapertura va in scena Il sogno di Partenope di Giovanni Simone Mayr, seguita da un ballo creato da Salvatore Viganò. A creare il mito della ballerina romantica, l'austriaca Fanny Elssler, la “svedese” Maria Taglioni e la napoletana Fanny Cerrito, una delle prime 
                        donne coreografe, le cui le cui scarpette sono religiosamente custodite nel Museo dell' Opéra di Parigi.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Paganini e Bellini</h2>
                    <p>
                        Tutti i più grandi artisti prima o poi hanno calcato le scene del Teatro, come Niccolò Paganini che nel 1819 vi tiene ben due concerti, il 26 giugno e il 7 luglio. Un palcoscenico prestigioso quello partenopeo, di cui si è innamorato anche Vincenzo Bellini, che nel 1826 debutta con 
                        Bianca e Gernando, opera prima scritta proprio per il San Carlo. La leggenda narra del giovane compositore ancora studente al Conservatorio di Napoli, costretto ad abbandonare frettolosamente le prove al San Carlo “per sostenere un esame al cospetto del Commissiario del Regno”. Ecco il 
                        direttore della prestigiosa istituzione, Nicola Zingarelli, nel vedere il Bellini” Credo soverchio, se non inutile, esaminare questo giovinetto, che tra qualche mese dovrà essere esaminato da giudici assai più severi di noi: dal pubblico del San Carlo ove darà la sua opera che sta 
                        componendo: Bianca e Gernando”.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Mercadante e Verdi: la storia dell'opera in un duello musicale</h2>
                    <p>
                        Uno spazio speciale è dedicato, nella stagione ottocentesca, a Saverio Mercadante. Per un certo tempo il musicista di Altamura divide la sua fetta di gloria con Giuseppe Verdi, il quale nel 1841 entra nella storia del Lirico con la prima napoletana del suo Oberto, conte di San Bonifacio. 
                        Sono anni d'oro per Mercadante coinvolto in una sorta di duello ideale con il compositore di Busseto. Dopo la Alzira, Verdi incalza a ritmo serrato con l'Ernani fiore all'occhiello della stagione del 1846 insieme a Gli Orazi e i Curiazi di Mercadante. Il cartellone targato 1847/48 punta 
                        su Attila e Nabucco e dopo la parentesi dei moti rivoluzionari il nuovo corso si apre con un altro titolo verdiano, I Lombardi alla Prima Crociata, assoluta novità per Napoli. E ancora, a seguire, nella stagione 1849/50, tre prime opere scritte per il San Carlo: una di queste è di Verdi, 
                        che se la gioca con Mercadante in uno scontro ad armi pari. Mentre si chiude la parabola artistica di Mercadante, la stella verdiana brilla incontrastata. Dopo la prima Romana, Un Ballo in Maschera – originariamente Gustavo III, opera scritta per il San Carlo e censurata nel 1858 – è 
                        accolta trionfalmente dal pubblico (1861/1862), come l'Aida del 1872, con la sublime Teresa Stoltz nel ruolo da protagonista. L'anno successivo Ricordi pubblica un Quartetto d'archi, unica composizione cameristica di Verdi, scritta appositamente per le “prime parti” dell'Orchestra del 
                        San Carlo.   
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">N come Novecento</h2>
                    <p>
                        “A rischio di dire un'ovvietà credo di aver provato sul palcoscenico del San Carlo il contatto e la misura di quel prodigio, che è impossibile da tradurre in parole,la rappresentazione teatrale: Un'emozione 'non trasferibile', ma proprio per questo incancellabile” (Giulio Paolini, 2011). 
                        Un'attività rigogliosa <br/>
                        Ilsecolo breve, che vede l'Europa e il mondo per molti decenni lacerati da terribili conflitti, inizia a respirare al San Carlo con la prima napoletana di Tosca (1900-1901). Sono gli anni di Giuseppe Martucci “pianist of continental fame”, ammirato da Liszt e Anton 
                        Rubinstein e tra i più significativi compositori italiani del tardo ottocento. È la sua bacchetta a sdoganare definitivamente la tradizione wagneriana al San Carlo, inaugurata con Lohengrin nel 1881 a cui fanno seguito Tannhäuser (1889) e Die Walküre (1895).<br/>
                        C'è lui sul podio per la prima napoletana di Tristan und Isolde. L'anno è il 1907, lo stesso in cui Strauss arriva in città per assistere alla sua Salome. Fortunate al San Carlo, tra Ottocento e Novecento, le opere di Puccini e la musica della “giovane scuola” di Mascagni e dei napoletani, 
                        per nascita e formazione, Leoncavallo, Giordano, Cilea e Alfano.<br/>
                        È il secolo in cui la figura del direttore d'orchestra conquista, anche grazie alla strada aperta da Leopoldo Mugnone, un ruolo sempre più decisivo e fondamentale per la rinascita dello spettacolo. Compositori come Honneger, Debussy, Boito, Wolf-Ferrari, Zandonai e Pizzetti incorniciano il 
                        grande repertorio del melodramma italiano, da sempre carta d'identità del Teatro che neanche in tempi di guerra interrompe la sua attività, se non per pochissimi mesi.  
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Dal dopoguerra</h2>
                    <p>
                        Covent Garden, 1946, una fortunata tournée a Londra: il San Carlo è il primo teatro italiano che ha il coraggio di partire dopo la guerra. Mentre a casa si preparano storiche prime italiane come Ariane et Barbe-bleue di Dukas, Dall'oggi al domani di Schonberg, Carmina Burana e La luna di 
                        Orff, Il protagonista di Weill, tutte in scena tra il '50 e il '60.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Voci, solisti, direttori...</h2>
                    <p>
                        E ancora le voci, tra le tante, di De Lucia e Caruso, Di Stefano e Krauss, Del Monaco e Corelli, Tebaldi e Callas, Caniglia e Toti Dal Monte, Gigli e Tagliavini, Lauri Volpi e Schipa, Kabaivanska e Gencer, Freni e Caballè, Cossotto e Stignani, Cappuccilli, Bruson e Nucci, Blake e Ramey, 
                        Pavarotti, Domingo e Carreras.<br/>
                        Fra i solisti delle leggende come Paganini, Sphor, Sarasade, Heiftez, Kreisler, RostropovicÂ, Benedetti Michelangeli, Pollini, Accardo e Kremer, Ciccolini, Ughi e Maisky, Ashkenazy e Argerich, un commosso Rubinstein, una giovanissima Jacquline Du Pré. E ancora Casals, Arrau, Serkin, 
                        Tortelier, Richter, Kempff, Magaloff, Yo-Yo Ma.<br/>
                        Impossibile citare tutti i grandi musicisti e direttori d'orchestra che hanno scritto la storia gloriosa del Teatro: da Toscanini e Stravinskij a Bernstein e Sawallisch, da Gui a Santini, da Fricsay a Scherchen, da Cluytens a Mitropoulos, da Muti ad Abbado, da Busoni e Gavazzeni a Boulez, 
                        Sinopoli e Mehta, da Tate e Giulini a Celibidache e Karajan, da Furtwängler a Böhm che dirige il leggendario allestimento del Wozzeck di Alban Berg. È il 26 dicembre 1949.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">La danza</h2>
                    <p>
                        Sfilano Vassiliev e Maxinova, Rudolf Nureyev e Alicia Alonso, Fracci e Savignano, Terabust e Ferri, Iancu, Derevianko e Bolle. Seguendo il respiro della grande madre della danza contemporanea, Margot Fonteyn, arrivano i coreografi Roland Petit e Maurice Béjart, Pina Bausch e Karole Armitage, 
                        Trisha Brown, Twyla Tharp e Nacho Duato. Un altro primato: nel 1812 nasce al San Carlo la Scuola di Danza più antica d'Italia, alla cui grandezza contribuiranno artisti come Pietro Hus, Salvatore Taglioni, Bianca Gallizia, Anna Razzi.<br/>
                        Il San Carlo e l'arte contemporanea<br/>
                        Il matrimonio felice con l'arte contemporanea porta in dote al Teatro diversi Abbiati, l'Oscar italiano per la lirica. Kiefer, Paladino, Pomodoro, Paolini, Kentridge e Marden, il presente di una vocazione che viene da lontano: negli anni Quaranta con gli interventi del futurista Enrico 
                        Prampolini per Norma, fino al bozzetto di Tosca firmati nel 1917 da Domenico Purificato. E ancora i bozzetti di scena tergati Manzù, Adami e Hockney, Ontani, Rauschenberg e Picasso.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Regie, scenografie, costumi...</h2>
                    <p>
                        Una storia, quella del San Carlo, che si può permettere una squadra di registi, scenografi, costumisti come <b>Frigerio</b> e <b>Squarciapino</b>, <b>Ljubimov</b> e <b>Borowski</b>, <b>Ronconi</b> e <b>Palli</b>, <b>Costa Gravas</b> e <b>Aulenti</b>, <b>Martone</b>, <b>Vick</b> e <b>Herzog</b>, 
                        <b>Brockhaus</b>, <b>De Simone</b>, <b>Job</b> e <b>Wertmuller</b>, <b>Faggioni</b>, <b>Pizzi</b>, <b>Zeffirelli</b>, <b>Ferretti</b>, <b>Pescucci</b> e <b>Tosi</b>. Gli indimenticabili <b>Visconti</b>, <b>Rossellini</b>, <b>Monicelli</b>, <b>Bolognini</b>, <b>Daminai</b>, <b>Ponnelle</b>, 
                        <b>Luzzati</b>, <b>Svoboda</b>, <b>De Filippo</b> e <b>Carmelo Bene</b>. E i “nostri” Nicoletti e Carosi, Rubertelli e Giustino. Casa madre per artisti leggendari ma anche tempio laico per le grandi kermesse politiche e culturali, il San Carlo ha ospitato le creazioni di protagonisti 
                        indiscussi dello stile, couturiers che hanno seguito la strada aperta da Coco Chanel in Francia e a noi hanno portato le preziose mani di Roberto Capucci e Emanuel Ungaro.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1263.1638390934854!2d14.248802352065043!3d40.83729120452079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b085218e9d0d3%3A0xf4bc5fe47dfae739!2sTeatro%20di%20San%20Carlo!5e1!3m2!1sit!2sit!4v1713357794382!5m2!1sit!2sit"
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
