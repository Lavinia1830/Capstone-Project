import React from 'react';
import CercaComponent from '@/Components/CercaComponent';
import Footer from '@/Components/Footer';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import { Card, CardText, CardBody, CardTitle, CardImg } from 'react-bootstrap';
import Passeggiate_lungo_i_ru from '../../../../assets/Valle_d_Aosta/Passeggiate_lungo_i_ruscelli_in_Valle_d_Aosta.jpg';
import Ru_Courtaud from '../../../../assets/Valle_d_Aosta/Ru_Courtaud_Valle_d_Aosta.jpg';
import Veduta_del_Monte_Rosa_dal_Ru_Courtaud from '../../../../assets/Valle_d_Aosta/Veduta_del_Monte_Rosa_dal_Ru_Courtaud_Valle_d_Aosta.jpg';
import Ru_d_Arlaz from '../../../../assets/Valle_d_Aosta/Ru_d_Arlaz_Valle_d_Aosta.jpg';
import Cascata_di_Arlaz from '../../../../assets/Valle_d_Aosta/Cascata_di_Arlaz_Valle_d_Aosta.jpg';
import Mulino_al_Co_dArlaz from '../../../../assets/Valle_d_Aosta/Mulino_al_Co_dArlaz_Valle_d_Aosta.jpg';
import Ru_Marseiller from '../../../../assets/Valle_d_Aosta/Ru_Marseiller_Valle_d_Aosta.jpg';
import Ru_de_la_Plaine from '../../../../assets/Valle_d_Aosta/Ru_de_la_Plaine_Valle_d_Aosta.jpg';
import Ru_de_la_Plaine_a_Saint_Vincent from '../../../../assets/Valle_d_Aosta/Ru_de_la_Plaine_a_Saint_Vincent_Valle_d_Aosta.jpg';
import Veduta_di_Aosta_dal_Ru_du_Prevot from '../../../../assets/Valle_d_Aosta/Veduta_di_Aosta_dal_Ru_du_Prevot_Valle_d_Aosta.jpg';
import Ponte_acquedotto_medievale_Grand_Arvou from '../../../../assets/Valle_d_Aosta/Ponte_acquedotto_medievale_Grand_Arvou_Valle_d_Aosta.jpg';



















export default function Le_passeggiate_lungo_i_ru_della_valle_d_aosta(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main className='row'>
            <div className='col-lg-8'>
                <div className='margin'>
                    <img src={Passeggiate_lungo_i_ru} alt="Chatillon" className='mx-auto my-4' style={{width: 'auto', height: 'auto'}}/>
                    <h1 className='color-title text-center mb-3'>Le più belle passeggnate lungo i ru della Valle d'Aosta</h1>
                    <hr className='w-25 border-3'/>
                </div>
                <div className="margin">
                <p>
                    In questo articolo le più belle <strong>passeggiate lungo i ru della Valle d'Aosta</strong>, piacevoli camminate adatte a tutta la famiglia.
                </p>
                <p>
                    Ma come sono i ru? Sono dei canali irrigui costruiti tra XII e XV secolo per portare le acque dei torrenti e dei ghiacciai nelle zone più aride della Valle d'Aosta. <br/>
                    Grazie a questi rus, le aree più aride ma anche meglio esposte della Valle d'Aosta hanno potuto essere coltivate assidurando lo svlippo della vita e dei prati favenco perciç l'allevamento.
                </p>
                <ul className='lista'>
                    <span>Contenuti</span>
                    <li>
                        <Link href='#First_Point_Header' className='text-decoration-none color_link'>Cosa sono i Ru</Link>
                    </li>
                    <li>
                        <Link href='#Second_Point_Header' className='text-decoration-none color_link'>La gestione dei Ru</Link>
                    </li>
                    <li>
                        <Link href='#Third_Point_Header' className='text-decoration-none color_link'>Le passeggiate lungo i ru della Valle d'Aosta</Link>
                    </li>
                    <li>
                        <Link href='#Fourth_Point_Header' className='text-decoration-none color_link'>Ru Courtaud in Val d'Ayas</Link>
                    </li>
                    <li>
                        <Link href='#Fifth_Point_Header' className='text-decoration-none color_link'>Ru d'Arlaz in Val d'Ayas</Link>
                    </li>
                    <li>
                        <Link href='#Sixth_Point_Header' className='text-decoration-none color_link'>Ru Marseiller tra Verrayes e Sint-Denis</Link>
                    </li>
                    <li>
                        <Link href='#Seventh_Point_Header' className='text-decoration-none color_link'>Ru de la Plaine tra Chatillon e Saint-Vincent</Link>
                    </li>
                    <li>
                        <Link href='#Eighth_Point_Header' className='text-decoration-none color_link'>Ru du Prevot tra Quart e Roisan</Link>
                    </li>
                </ul>
                </div>
                <Card className="mb-3 margin">
                    <div className=" d-flex align-items-center">
                        <CardBody>
                            <CardTitle><h2 className="card-title color-subtitle" id='First_Point_Header'>Cosa sono i Ru</h2></CardTitle>
                            <CardText>
                                <b>I rus sono dei canli irrigui</b> costruiti lungo le montagne per portare l'abbondante acqua dei torrenti e dei ghiacciai nelle zone coltivate. I rus forniscono inoltre l'acqua per abberare il bestiame, azzionanvano i mulini
                                per macinare i cereali ed erano fondamentali per smaltire le acque pluviali in occasione di eventi alluvionali. <br/>
                                Alcuni di questi canali sono lunghi decine di chilometri e superano pareti scoscese con tratti scavti nella roccia o sospesi su ardite costruzioni. Simili opere richiesero anni di lavoro e migliaia di braccia ma la realizzazione 
                                di un sistema così capillare ed afficace garantì la sopravvivenza e lo sviluppo della agricoltura di montagna e dell'economia rurale valdostana.
                            </CardText>
                            <CardText>
                                Per il mantenimento dei Ru si effettuano in primavera delle <b>corvées</b> durante le quali le genti delle campagne si riuniscono per fare la manutenzione e per pulire da fango e foglie i canali irrigui. Le corvées erano giornate 
                                di lavoro che i fruitori del dirittto di utilizzare l'acqua del ru prestavano a titolo gratuito per garantirne la funzionalità idraulica. Queste erano occasioni gradite e accolte come momenti di ritrovo e occasioni di commercio e 
                                di contrattazione per per concludere buoni affari.
                            </CardText>
                            <CardText>
                                Dopo il XVI secolo molti rus vennero abbandonati e porpio per questo vennero chiamati <b>rus morts</b> (rus morti). Altri sono denominati <b>rus du pan perdu</b> (ovvero rus del pane perduto) perché erano opere che hanno richiesto 
                                molto lavoro per la loro costruzione ma che poi non hanno sero adeguato servizio.
                            </CardText>
                            <CardText>
                                Altri canali irrigui sono utilizzati ancora oggi e molti sono percorribili con delle facili passeggiate lungo i ru in Valle d'Aosta sia a piedi, in bicicletta o a cavallo.
                            </CardText>
                        </CardBody>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="d-flex align-items-center">
                        <CardBody>
                            <CardTitle><h2 className="card-title color-subtitle" id='Second_Point_Header'>La gestione dei Ru</h2></CardTitle>
                            <CardText>
                                Ultimati lavori di costruzione dei rus in Valle d'Aosta venivano nominati <b>i responsabili del canle</b>, che vigilavano sull'attività amministrativa dell'associazione che gestiva il ru, raccoglievano le tasse e organizzavano le corvées
                                per la manutenzione del canale. <br/>
                                Il funzionamanto del ri era invece demoninato ai <b>guardiani</b> (denominati revan o ruan) che percorrevano il sentiero d'ispezione appositamante realizzato al lato del canale, controllavano lo scorrimento delle acque e l'afficacia della 
                                manutenzione.
                            </CardText>
                            <CardText>
                                L'irrigazione dei prati e dei campi avviene ancora oggi secondo la tecnica di scorrimento. Dal ru dipartono alcuni canali secondari che loro volta si diramano in una ulteriore rete di canaletti sempre più stratti fino a raggiungere in 
                                maniera capoillare tuttti i terreni da irrigare. L'acqua che scorre nel canale viene controllata giornalmente da un addetto che ne regala il flusso e ne monitora l'uso da parte degli utenti.
                            </CardText>
                        </CardBody>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="d-flex align-items-center">
                        <CardBody>
                            <CardTitle><h2 className="card-title color-subtitle" id='Third_Point_Header'>Le passeggiate lungo i ru della Valle d'Aosta</h2></CardTitle>
                            <CardText>
                                <strong>I ru della Valle d'Aosta</strong> si trovano soprattutto nel tratto tra Aosta e Sint Vincent, ovvero la <b>collina di Aosta</b>, <b>di Chamnave</b>, <b>Verrayes</b>, <b>Saint-Denis</b>, ma anche a <b>Châtillon</b>, <b>Saint-Vincent</b>, e 
                                <b>Emarèse</b>.<br/>
                                Ve ne sono altri anche in <b>Valtournenche</b>, in <b>Val d'Ayas</b> e nella <b>Valle del Gran san Bernardo</b>.
                            </CardText> 
                        </CardBody>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="d-flex align-items-center">
                        <CardBody>
                            <CardTitle><h3 className="card-title color-subtitle" id='Fourth_Point_Header'>Ru Courtaud in Val d’Ayas</h3></CardTitle>
                            <CardText>
                                L’idea della realizzazione del <strong>Ru Courtaud</strong> nacque da alcune famiglie di Saint-Vincent, spinte dalla necessità di irrigare le terre. I lavori furono autorizzati nel 1393 dal proprietario dei luoghi, il Conte Ibleto di Challand, e 
                                proseguirono per quarant’anni fino al 1433 realizzando <b>il canale irriguo più lungo di tutta la Valle d’Aosta</b>, ben 25 km! <br/>
                                La sorgente del ru Cortod è localizzata a 2080 m ai piedi del Monte Rosa, il ru scorre poi nei comuni di Ayas e Brusson per giungere al Col de Joux; sopra Saint-Vincent.
                            </CardText> 
                            <CardText>
                                Il sentiero pianeggiante che costeggia il ru Cortod ripercorre il tracciato originale, con a lato le acque del Ru Cortod che scorrono placidamente. Solo brevi tratti del canale sono attualmente intubati. <br/>
                                La passeggiata lungo il Ru Courtaud, ha inizio ad <Link to='/visite/val_dayas_antagnod_e_champoluc' className='text-decoration-none color_link'>Antagnod</Link>  fino a raggiungere Brusson sviluppandosi tra incantevoli boschi di larice di abete rosso e 
                                lungo tutto il cammino a guidarci e sorprenderci è il magnifico gruppo del Monte Rosa che occupa la testata della Val d’Ayas.
                            </CardText>
                        </CardBody>
                    </div>
                    <div className="d-flex flex-row justify-content-center">
                        <div className='mx-2'>
                            <CardImg src={Ru_Courtaud} className="mb-2"  alt="Ru Courtaud in Val d’Ayas" title='Ru Courtaud in Val d’Ayas'/>
                            <p className='text-center'>
                                Ru Courtaud in Val d’Ayas
                            </p>
                        </div>
                        <div className='mx-2'>
                            <CardImg src={Veduta_del_Monte_Rosa_dal_Ru_Courtaud} className="mb-2"  alt="Veduta del Monte Rosa dal Ru Courtaud" title='Veduta del Monte Rosa dal Ru Courtaud'/>
                            <p className='text-center'>
                                Veduta del Monte Rosa dal Ru Courtaud
                            </p>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="d-flex align-items-center">
                        <CardBody>
                            <CardTitle><h3 className="card-title color-subtitle" id='Fifth_Point_Header'>Ru d’Arlaz in Val d‘Ayas</h3></CardTitle>
                            <CardText>
                                Il <strong>Ru d'Arlaz</strong> è una impornente opera idraulica edificata intorno a XIV secolo, frutto dell'imperatore e della caparbità delle genti e dei signori di Challand per il sostentamento e lo svluppo della attività agricole della zona. Il Ru d'Arlaz
                                era infatti in grado di assicurare la fornitura di acqua ad uso agricolo ad un territorio piuttosto vasto compreso tra i comuni di Brusson, Challand-Saint-Anselme, Challand-Saint-Victor, Montjovet fino all'inizio del comprensorio di Sant Vincent.
                            </CardText> 
                            <CardText>
                               Un sentiero quasi totalmente pianeggiante, vi porterà alla scoperta di scorci unici della media e bassa Valle d'Ayas, Attraverso boschi di conifere e latifoglie, ampie zone prative, soleggiati alpeggi e piccoli villaggi in un percorso che si snoda per 11 
                               chilometri da Brusson al Colle d'Arlaz e fino al comune di Saint-Vincent con tutto intorno la splendida cornice delle cime delle due <b>Dame di Challand</b>, della <b>Becca Torché</b> e della gemella <b>Bacca di Viù</b>. <br/>
                               Lungo il percorso si trova anche il <b>Lago di Villa</b>, incastonato nel cuore della valle, è una <a href='https://www.vivavda.it/aree/area_i.aspx?area=16&n=riserva+naturale+lago+di+villa' className='text-decoration-none color_link' >riserva naturale</a> dal 
                               1982 e custode di specie di flora e fauna protetta uniche in zona.
                            </CardText>
                        </CardBody>
                    </div>
                    <div className="d-flex flex-row justify-content-center flex-wrap">
                        <div className='mx-2'>
                            <CardImg src={Ru_d_Arlaz} className="mb-2"  alt="Ru d'Arlaz" title="Ru d'Arlaz"/>
                            <p className='text-center'>
                                Ru d'Arlaz
                            </p>
                        </div>
                        <div className='mx-2'>
                            <CardImg src={Cascata_di_Arlaz} className="mb-2"  alt="Cascata di Arlaz" title='Cascata di Arlaz'/>
                            <p className='text-center'>
                                Cascata di Arlaz
                            </p>
                        </div>
                        <div className='mx-2'>
                            <CardImg src={Mulino_al_Co_dArlaz} className="mb-2"  alt="Mulino al Col d’Arlaz" title='Mulino al Col d’Arlaz'/>
                            <p className='text-center'>
                                Mulino al Col d’Arlaz
                            </p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <CardBody>
                            <CardText>
                                Un percorso adatto a tutta la famiglia per calarsi in un'atmosfera magica e senza tempo tra antichi castelli, vecchi mulini e boschi incantati che vi racconteranno storie e leggende del passato durante una delle vostre passeggiate lungo i ru della Valle d'Aosta.
                            </CardText>
                        </CardBody>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="d-flex align-items-center">
                        <CardBody>
                            <CardTitle><h3 className="card-title color-subtitle" id='Sixth_Point_Header'>Ru Mardeiller tra Verrayes e Saint-Denis</h3></CardTitle>
                            <CardText>
                                Molto affascinante è il sentiero lungo il <strong>Ru di Merseiller</strong>, canale irriguo che prende il nome del villaggio omonimo, al quale giunge dopo aver dervato le acque del torrente Marmore, in Valtournenche e aver assicurato l'irrigazione di tutto 
                                il settore della media collina tra Châtillon e Saint-Denis. <br/>
                                Il ru è luogo complessivamente 15 km, i primi 8 sono situati in Valtournanche e sono percorribli solo da personale autorizzato, mentre i restanti 6 si sviluppano a monte di Verrayes, Saint Denis e Chambave e costituiscono una piacevole passeggiata con scorci 
                                interessanti.
                            </CardText> 
                            <CardText>
                                L'opera su realizzata nel XV secolo con il patrocinio di <b>Jean Saluard di Marciller</b>, figlio di un funzionario sabaudo, cui appartenevano anche la cappella e la casaforte ancora oggi presenti nel <b>villaggio di Marseiller</b>.
                            </CardText>
                            <CardText>
                                A Verrayes, scendendo alcune centinaia di metri dal canale, si raggiunge il villaggio di Marseiller dove si erge la <b>cappella di San Michele</b>. La cappella è stata costruita nel XV secolo e interamente affrescata da Giacomino di Ivrea, pittore molto attivo in
                                alcume <b>chiese romaniche della regione</b> nonché al <Link to='/visite/castello_di_fanis' className='text-decoration-none color_link'>castello di Fénis</Link>! La visita della cappella vale sicuramente una sosta, gli interni riccamente affrescati riportano anche 
                                l'immagine dei commitenti ovvero Jean Saluard raffiuguarato insieme alla moglie, San Giovanni Battista, Santa Maria Maddalena e Santa Caterina. Jean Saluard era un notabile al servizio dei Signori di Cly e viveva nella casaforte situata all'interno del villaggio di 
                                Marseiller. Tra gli affreschi si riconosce anche la figura di un uomo, un operaio che si occupava del ru raffigurato con i suoi attrezzi!
                            </CardText>
                        </CardBody>
                    </div>
                    <div className="d-flex flex-row justify-content-center">
                        <div className='mx-2'>
                            <CardImg src={Ru_Marseiller} className="mb-2"  alt="Ru Marseiller" title='Ru Marseiller'/>
                            <p className='text-center'>
                                Ru Marseiller
                            </p>
                        </div>
                        <div className='mx-2'>
                            <CardImg src={Veduta_del_Monte_Rosa_dal_Ru_Courtaud} className="mb-2"  alt="Castello di Cly" title='Castello di Cly'/>
                            <p className='text-center'>
                                Castello di Cly
                            </p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <CardBody>
                            <CardText>
                                <b>Passeggiando lungo il ru Marseiller</b> si incontra anche l'affascinate <Link to='/castello_di_cly' className='text-decoration-none color_link'>Castello di Cly</Link>, un bellissimo esempio di castello primitivo, posto in posizone strategica le cui mura ben 
                                conservate, avvolgono il mastio all'interno di un'ampia cinta possente e molto suggestivo. Il castello appartenne alla famiglia Challant e fu sede giurisdizionale di un vasto feudo; passò quindi ai Savoia e, nel XVI secolo, ai baroni Roncas, che ne smantellarono molte
                                componenti di pregio, riutilizzandole nella costruzione del loro palazzo nel <b>borgo di Chambave</b>.
                            </CardText> 
                        </CardBody>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="d-flex align-items-center">
                        <CardBody>
                            <CardTitle><h3 className="card-title color-subtitle" id='Seventh_Point_Header'>Ru de la Plaine tra Châtillon e Saint-Vincent</h3></CardTitle>
                            <CardText>
                                Situato tra Châtillon e Saint-Vincent, il <strong>Ru de la Plaine</strong>, porta le acque della Valtournenche sul verante assoluto di Châtillon e Saint-Vincent. Il canale fu costruito nel 1325 ed è un tratto della <Link to='/via_francigena_valle_d_aosta' 
                                className='text-decoration-none color_link'>Via Francigena</Link>. <br/>
                                La passeggiata, lungo 4,6 km, si sviluppa a morte del Castello di Passerin d'Entréves di Châtillon lungo un bel percorso, recentemente ristrutturanto, con suggerimenti scorci sulle due cittadine e sul <b>Castello di Ussel</b>, costeggiando vigneti e antiche torri. <br/>
                                Superato il Grand Hotel Billia e sulle strutture del Casinò de la Vallée si entra nell'abiatato di <Link to='/visite/saint_vicent' className='text-decoration-none color_link'>Saint-Vincent</Link>, e infine con un  sottopassaggio si transita sotto l'ascensore panoramico 
                                (ex-funicolare) per le Terme di Sant-Vincent. <br/>
                                Qui, questo piacevolissimo ru dell Valle d'Aosta, scorre finalmente a cialo aperto per un breve tratto per poi terminare al <b>villaggio di Cillian</b> dove si trovano i resti di ponte romano.
                            </CardText>
                        </CardBody>
                    </div>
                    <div className="d-flex flex-row justify-content-center">
                        <div className='mx-2'>
                            <CardImg src={Ru_de_la_Plaine} className="mb-2"  alt="Ru de la Plaine" title='Ru de la Plaine'/>
                            <p className='text-center'>
                                Ru de la Plaine
                            </p>
                        </div>
                        <div className='mx-2'>
                            <CardImg src={Ru_de_la_Plaine_a_Saint_Vincent} className="mb-2"  alt="Ru de la Plaine a Saint Vincent" title='Ru de la Plaine a Saint Vincent'/>
                            <p className='text-center'>
                                Ru de la Plaine a Saint Vincent
                            </p>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="d-flex align-items-center">
                        <CardBody>
                            <CardTitle><h3 className="card-title color-subtitle" id='Eighth_Point_Header'>Ru du Prevot tra Quart e Roisan</h3></CardTitle>
                            <CardText>
                               Una delle più belle passeggiate lungo i ru della Valle d'Aosta è sicuramente quella lungo il Ru di Prevot.
                            </CardText>
                            <CardText>
                                Il <strong>Ru du Prevot</strong> prende il nome da Henri de Quart, Prevosto della Cattedrale di Aosta e signore di Quart che ne volle la struzione intorno al 1300. Alla morte del Prevostro il ru passò sotto il controllo dei Savoia che ne assunsero l'onore della gestion. <br/>
                                Il canale è lungo circa 12 km (la maggior parte intubati) prende le acque dal torrente Buthier dall'alta Valpilline per irrigare i terreni dei comuni di Roisan, Aosta, Saint-Christophe e Quart.
                            </CardText>
                            <CardText>
                                L’itinerario parte dal <Link to='/castello_di_quart' className='text-decoration-none color_link'>castello di Quart</Link>, le cui fondamenta risalgono al 1185 ad opera dei Signori de la Porte Saint-Ours, successivamente denominati signori di Quart, domina la collina del paese 
                                e offre una splendida vista sul fondovalle e su Aosta. L’ultimo feudatario, Henry de Quart fu il promotore della realizzazione del canale che venne chiamato in suo onore Ru du Prevot. <br/>
                                Lungo l’itinerario, in direzione Aosta, si giunge al <b>monastero Mater Misericordiae</b>, realizzato dagli architetti torinesi Gobetti e Isola, fu inaugurato dal Papa Giovanni Paolo II nel 1989. All’interno le monache delle Carmelitane scalze conducono una vita di clausura 
                                dedicata alla preghiera e al lavoro. <br/>
                                La passeggiata attraversa i vigneti e il paese di Saint Christophe con belle vedute panoramiche su Aosta con tutto intorno la splendida cornice del <b>Monte Zerbion</b>, il gruppo delle <b>cime del Mont Avic</b> e del <b>Mont Emilius</b> oltre che l’imponente gruppo delle 
                                <b>Alpi della Grande Sassière e del Rutor col suo ghiacciaio</b>.
                            </CardText>
                            <CardText>
                                Si giunge poi a Roisan dove si trova un vero e proprio gioiello: <b>il ponte acquedotto Grand Arvou</b>. Si tratta di un vero capolavoro risalente al 1300. Il ponte acquedotto è dotato di due passaggi: in basso scorrono le acque del Ru Prevot, mentre in alto vi è un 
                                attraversamento pedonale coperto e illuminato da alcune finestrelle.
                            </CardText>
                        </CardBody>
                    </div>
                    <div className="d-flex flex-row justify-content-center">
                        <div className='mx-2'>
                            <CardImg src={Veduta_di_Aosta_dal_Ru_du_Prevot} className="mb-2"  alt="Veduta di Aosta dal Ru du Prevot" title='Veduta di Aosta dal Ru du Prevot'/>
                            <p className='text-center'>
                                Veduta di Aosta dal Ru du Prevot
                            </p>
                        </div>
                        <div className='mx-2'>
                            <CardImg src={Ponte_acquedotto_medievale_Grand_Arvou} className="mb-2"  alt="Ponte acquedotto medievale Grand Arvou" title='Ponte acquedotto medievale Grand Arvou'/>
                            <p className='text-center'>
                                Ponte acquedotto medievale Grand Arvou
                            </p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <CardBody>
                            <CardText>
                                Le <b>passeggiate lungo i ru della Valle d'Aosta</b> possono essere abbinate a <b>visite sul territorio con una guida turistica</b>: borghi, villaggi, siti archeologici, castelli... Visitare Aosta con le sue vestaglia romane, i castelli medievali, la cappella di Verrayes, i comuni 
                                di Châtillon e Saint-Vincent... Un viaggio ricco di emozioni e di cultura!
                            </CardText>
                        </CardBody>
                    </div>
                </Card>
                <div className="margin">
                    <p className='fw-bold'>
                        Contattami per prenotare la tua visita guidata tra i villaggi in cui scorrono i ru della Valle d'Aosta
                    </p>
                </div>
                <div className='margin'>
                    <h3 className='color-subtitle'>Leggi</h3>
                    <ul className='lista'>
                        <li>
                            <Link href='/chatillon_cosa_vedere' className='text-decoration-none color_link'>Châtillon cosa vedere nel paese dei castelli</Link>
                        </li>
                        <li>
                            <Link href='/castello_di_ussel' className='text-decoration-none color_link'>Castello di Ussel e l'inventore della penna Bic</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <CercaComponent/>
        </main>
        <Footer/>
    </AuthenticatedLayout>
  )
}
