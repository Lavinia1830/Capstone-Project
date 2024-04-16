import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Museo_Archeologico_Nazionale_delle_Marche(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='museo_archeologico_nazionale_delle_marche' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Perugina</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color_subtitle">Il Museo e La sua Storia</h2>
                    <p>
                        L’intento di tutela e raccolta dei beni archeologici provenienti dal territorio regionale nasce con l’attività della Commissione Conservatrice, che effettuò il primo acquisto di reperti nel 1863. La strutturazione delle collezioni si deve a Carisio Ciavarini, che portò all’istituzione del Gabinetto Paletnografico e 
                        Archeologico nel 1868. A fronte dell’esponenziale aumento delle raccolte archeologiche, la sede fu trasferita prima presso Palazzo degli Anziani, poi al ex Convento di San Domenico e nel 1898 negli spazi dell’ex Convento degli Scalzi, in via Duomo. Nel 1906 l’istituzione museale ottenne il titolo di <strong>Regio Museo 
                        Archeologico Nazionale delle Marche</strong>. A differenza di altri importantissimi musei nazionali, quello marchigiano non nasce dal lascito di grandi collezioni aristocratiche, ma dall’intento di salvaguardia del patrimonio della regione, con approccio positivista e visione topografica, in stretto legame con il 
                        territorio. Proprio Ciavarini dichiara un’idea di museo “che raccogliesse tutti i monumenti dall’età della pietra in poi, rinvenuti con certezza nella regione”. Innocenzo Dall’Osso contribuì nei primi decenni del ‘900 a rinnovare il Museo, anche grazie a fortunatissime scoperte in tutta la regione, con rinvenimenti che 
                        ancora oggi rappresentano le pietre miliari dell’archeologia marchigiana. Nel 1927 fu inaugurata, alla presenza del Re Vittorio Emanuele III, la sede del Regio Museo Archeologico Nazionale allestita presso l’ex Convento di San Francesco alle Scale, poi distrutta dai bombardamenti nel 1944. Si deve ai Soprintendenti 
                        Annibaldi e Pacini la rinascita del <b>Museo Archeologico Nazionale delle Marche</b>, al quale fu destinato Palazzo Ferretti, acquisito dallo Stato subito dopo la Seconda Guerra Mondiale. Inaugurato nel 1958, l’allestimento fu affidato a un giovane architetto, Franco Minissi, che realizzò un percorso espositivo 
                        contemporaneo. A seguito dei danni del sisma del 1972 il <strong>M A N Marche</strong> fu disallestito per consentirne la ristrutturazione, reinaugurando del tutto rinnovato nel 1988, con la sezione protostorica-picena. Anche questo secondo progetto si deve a Minissi, divenuto nel frattempo una delle più importanti firme della 
                        museografia internazionale. Fra il 1990 e il 1997 furono aperte le sezioni relative al Paleolitico e alle età del Metalli, mentre fra il 2010 e il 2015 è stata allestita la sezione della città di <b>Ancona</b> in età ellenistica e romana. Nel 2023, a 50 anni dal sisma di Ancona e a 160 anni dalla nascita delle 
                        collezioni archeologiche, torna fruibile al pubblico in una nuova veste espositiva la sezione dedicata all’età romana nelle Marche.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Le Collezioni</h2>
                    <p>
                        Le collezioni del <strong>M A N Marche</strong> raccolgono un ricchissimo patrimonio archeologico, che conta più di 100.000 reperti e 90.000 monete, custoditi in larga parte dei depositi museali, attualmente al centro di un progetto finanziato grazie al PNRR per renderli accessibili. La ricchezza delle raccolte consente 
                        un percorso completo nella storia e prima della storia. È infatti possibile ammirare i primi manufatti realizzati dal genere umano, risalenti al Paleolitico come quelli del Monte Conero (300.000 anni fa), e rari esempi di arte paleolitica, come la Venere di Frasassi (28.000/25.000 anni fa) e quella di Tolentino (10.000 
                        anni fa). Nella sezione preistorica sono presenti alcuni dei siti fondamentali per la conoscenza dello sviluppo tecnologico umano, con l’introduzione dell’agricoltura e della terracotta (Ripabianca di Monterado, Trecastelli-AN, IV millennio a.C.) e della metallurgia (Conelle di Arcevia-AN, III millennio a.C.), per 
                        proseguire nell’Età del Bronzo (2.200-900 a.C.), dagli insediamenti costieri alle cavità della Gola di Frasassi. Eccezionale la necropoli a cremazione di Pianello di Genga (AN). Le sezioni dell’Età del Rame e del Bronzo sono in riallestimento. Con il passaggio all’Età del Ferro prende forma la Civiltà dei Piceni, 
                        identitaria del medio-Adriatico e cuore delle collezioni del <strong>M A N Marche</strong>. L’unitarietà culturale dell’VIII secolo a.C., visibile in tutta la regione nei gli ornamenti e nelle simbologie solari, da Canavaccio d’Urbino (PU) a Porto S. Elpidio (FM), manifesta sfumature territoriali già nel VII secolo a.C., spesso 
                        incardinate nelle vallate a pettine dell’orografia marchigiana, ed esplode il fenomeno “orientalizzante”, nelle produzioni artigianali ma, anche e soprattutto, in un diverso modello societario con figure principesche dalle ricche sepolture: sono eclatanti gli esempi di Fabriano (AN), San Severino Marche (MC) e Matelica 
                        (MC). Nel VI e V secolo a.C., massimo splendore della Civiltà Picena, fioriscono centri sia costieri sia interni, fra i quali primeggiano Belmonte Piceno (FM) e Numana-Sirolo (AN). È questo il momento in cui si infittiscono i contatti con il mondo greco, magnogreco ed etrusco, a cui di devono molti eccezionali manufatti 
                        oggi esposti in Museo. La sezione celtica del <strong>M A N Marche</strong> accoglie e reperti dei Galli Senoni, giunti nelle Marche nel IV secolo a.C., distinguendosi per la particolare fascinazione per l’oro. Le oreficerie sono esuberanti, sia celtiche sia etrusche e magnogreche, come nelle necropoli di S. Paolina di 
                        Filottrano (AN) e S. Filippo d’Osimo (AN). Eccezionali le corone floreali auree da Montefortino d’Arcevia (AN), realizzate in Grecia settentrionale. I Celti sono rappresentanti anche nelle terrecotte del santuario di Civitalba (Sassoferrato-AN), a monito della conflittualità con Roma, vincitrice nella battaglia delle 
                        Nazioni nel 295 a.C. La città di Ancona ha una sezione dedicata, per la peculiarità della sua storia. Rifondata dai Dori, esuli siracusani, esprime la propria grecità fino alla piena età romana, come visibile nella necropoli ellenistica. La nuova sezione romana raccoglie i reperti dal territorio marchigiano delle Regio V 
                        Picenum e Regio VI Umbria, dai centri romani che, in connessione con tutta la penisola attraverso i due principali assi viari, la via Flaminia e la via Salaria. Le opere esposte narrano di committenze raffinate che arricchiscono le aree pubbliche delle città con apparati monumentali e celebrativi, pur mantenendo i 
                        caratteri identitari delle comunità locali, visibili nelle sepolture, come a Urbino (PU), a Fano (PU) e a Porto Recanati (MC).
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Palazzo Ferretti</h2>
                    <p>
                        Il <strong>M A N Marche</strong> trova sede in <b>Palazzo Ferretti</b>, elegante e maestoso complesso realizzato a partire dalla metà del XVI secolo per volontà del Conte Angelo di Girolamo Ferretti. Il progetto originale è attribuito ad Antonio da Sangallo il Giovane, architetto civile e militare, già attivo 
                        nell’edificazione della Fortezza della Cittadella per volere di papa Clemente VII nel 1540. Il ricco apparato decorativo fu commissionato intorno al 1560 al pittore manierista e architetto Pellegrino Tibaldi, impegnato in diversi progetti nella città di Ancona. All’artista e alla sua bottega sono attribuite le 
                        decorazioni del primo piano nobile del Palazzo: il grande fregio pittorico con le divinità dell’Olimpo e le virtù nel Salone dei Ricevimenti, gli affreschi delle sale dei miti e degli emblemi ad esso adiacenti e i pregiati soffitti lignei intagliati e dipinti. Le decorazioni del secondo piano nobile furono eseguite 
                        tra il 1577 e il 1585 durante la signoria di Marcantonio Ferretti, ultimogenito di Angelo. I soffitti sono riccamente affrescati con lo stile del tempo, in particolare nella volta del Salone delle Feste si alternano variopinti motivi a grottesca a riquadri con vedute di paesaggi, scorci di città, figure mitologiche, 
                        monumenti e ruderi. Nel 1759 Cristoforo Ferretti commissionò importanti lavori di ampliamento, la cui progettazione è riconosciuta all’architetto Luigi Vanvitelli.  Questi comportarono l’inglobamento dell’adiacente torre medievale dei Fatati, la revisione della facciata con il suo ampliamento, il riposizionamento dei 
                        portali, divenuti tre, e l’inserimento del balcone centrale, lo scalone d’onore che collega i piani della dimora, la terrazza pensile e scenografica, il portico e la loggia a grandi vetrate e le gallerie panoramiche sulla facciata a mare. L’ampliamento settecentesco fu arricchito da statue in stucco, busti in marmo e 
                        putti, attribuibili alla bottega di Gioacchino Varlè, attiva ad Ancona. Tra il 1928 e il 1930 i Conti Ferretti commissionarono alcuni lavori di restauro all’architetto milanese Paolo Tornaghi, che ripristinò alcuni appartamenti di rappresentanza. Interventi di restauro furono necessari nel dopoguerra, a seguito dei 
                        pesantissimi bombardamenti che devastarono i quartieri affacciati sul porto di Ancona, dai quali Palazzo Ferretti si salvò accusando solo danneggiamenti non troppo rilevanti. A seguito dello sciame sismico del 1972 furono necessari importanti interventi strutturali, con lavori durati un decennio.  
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1208.6007597925245!2d13.509910696235737!3d43.623482707734084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132d7fba93b95ff7%3A0x736498f81cf06a89!2sMuseo%20Archeologico%20Nazionale%20delle%20Marche!5e1!3m2!1sit!2sit!4v1713261774580!5m2!1sit!2sit"
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
