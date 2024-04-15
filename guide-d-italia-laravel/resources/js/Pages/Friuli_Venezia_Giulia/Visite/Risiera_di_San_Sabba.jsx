import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import {Card, CardBody, CardTitle, CardText, CardImg } from 'react-bootstrap';
import Ingresso_monumentale from '../../../../assets/Friuli_Venezia_Giulia/Ingresso_monumentale_Riserva_di_San_Sabba_Trieste_Friuli_Venezia_Giulia.jpg';
import Sala_delle_Celle from '../../../../assets/Friuli_Venezia_Giulia/Sala_delle_Celle_Riserva_di_San_Sabba_Trieste_Friuli_Venezia_Giulia.jpg';
import Sala_delle_Croci from '../../../../assets/Friuli_Venezia_Giulia/Sala_delle_Croci_Riserva_di_San_Sabba_Trieste_Friuli_Venezia_Giulia.jpg';
import Cortile from '../../../../assets/Friuli_Venezia_Giulia/Cortile_Riserva_di_San_Sabba_Trieste_Friuli_Venezia_Giulia.jpg';
import Edificio from '../../../../assets/Friuli_Venezia_Giulia/Edificio_Riserva_di_San_Sabba_Trieste_Friuli_Venezia_Giulia.jpg';
import Sala_del_Museo from '../../../../assets/Friuli_Venezia_Giulia/Sala_del_Museo_Riserva_di_San_Sabba_Trieste_Friuli_Venezia_Giulia.jpg';
import Sala_delle_Commemorazioni from '../../../../assets/Friuli_Venezia_Giulia/Sala_delle_Commemorazioni_Riserva_di_San_Sabba_Trieste_Friuli_Venezia_Giulia.jpg';


export default function Risiera_di_San_Sabba(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='risiera_di_san_sabba' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Riserva di San Sabba</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">La storia</h2>
                    <p>
                        Il grande complesso di edifici nacque come stabilimento industriale per la lavorazione del riso nel periferico rione di San Sabba. Costruito tra 1898 e 1913, fu in attività fino ai primi anni Trenta, quando la produzione – tra il 1927 e il 1934 – cessò.
                    </p>
                    <p>
                        A partire dal 1930 il Regio esercito italiano iniziò a utilizzare come magazzino una parte dei locali del comprensorio che, dopo il 1940, venne trasformato a tutti gli effetti in caserma militare.
                    </p>
                    <p>
                        In seguito all’occupazione del territorio da parte delle forze tedesche, l’ex opificio fu utilizzato come campo di prigionia provvisorio per i militari italiani catturati dopo l’8 settembre 1943 (Stalag 339) e successivamente trasformato in Polizeihaftlager (Campo di detenzione e di 
                        polizia, una delle realtà tipiche dell’universo concentrazionario nazista).
                    </p>
                    <p>
                        Dopo la liberazione e fino ai primi anni Sessanta la <strong>Risiera di San Sabba</strong> fu campo di raccolta per profughi in fuga dai Paesi oltre la “cortina di ferro”.
                    </p>
                    <p>
                        Nel 1965 il Presidente della Repubblica Giuseppe Saragat dichiarava la Risiera Monumento Nazionale per il suo rilevante interesse storico e politico. Venivano quindi vincolati, come area di interesse storico, il cortile interno, le micro-celle e l’area dove era sorto il forno 
                        crematorio. Il decreto diede il via ufficiale al lento iter che portò la Risiera a divenire uno dei luoghi della memoria più significativi legati alle vicende dell’occupazione nazista d’Italia.
                    </p>
                    <p>
                        Nel 1975, dopo un’importante ristrutturazione progettata dall’architetto triestino Romano Boico, il museo e memoriale viene aperto al pubblico come Civico Museo della Risiera di San Sabba – Monumento Nazionale.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h3 className="color-subtitle">Il Litorale Adriatico</h3>
                    <p>
                        Il 10 settembre 1943, all’indomani dell’occupazione dell’Italia da parte delle truppe germaniche, Adolf Hitler emanò un’ordinanza che stabiliva la nascita di due Zone di operazioni – Operationszonen: la Operationszone Alpenvorland nell’area del Trentino-Sudtirolo (con l’aggiunta della 
                        provincia di Belluno) e la Operationszone Adriatisches Küstenland che, riprendendo una denominazione geografica del periodo della dominazione austriaca, includeva i territori di Udine e Pordenone, Trieste, Gorizia, Pola, Fiume e la “provincia italiana” di Lubiana annessa nel 1941. 
                        Nelle due aree si instaurò un regime d’occupazione anomalo rispetto al resto d’Italia dove l’autorità militare tedesca affiancava il nuovo governo alleato fascista. Nelle Zone d’operazioni, invece, ai comandanti militari (Militärische Befehlshaber) vennero affiancati dei consiglieri 
                        civili chiamati Supremi commissari (Oberste Kommissar), autorizzati a nominare o destituire i capi delle autorità civili locali e affiancare loro dei consiglieri d’amministrazione tedeschi. In breve tempo tali figure divennero veri e propri organi periferici di controllo del Reich 
                        sui territori.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h3 className="color-subtitle">Il Processo</h3>
                    <p>
                        Il processo per i crimini commessi alla Risiera di San Sabba si svolse dal 16 febbraio al 28 aprile del 1976 presso la Corte d’Assise di Trieste al termine di un lungo e tormentato iter giudiziario iniziato trent’anni prima. Oggetto del dibattito, che vide più di 174 testimoni, fu 
                        l’attività criminale svolta dagli uomini dell’Einsatzkommando Reinhardt (EKR). Imputati per “omicidio plurimo pluriaggravato continuato”, per aver soppresso un imprecisato ma rilevante numero di persone furono due ufficiali di quella unità: August Dietrich Allers (deceduto nel corso 
                        del lungo iter giudiziario) e Josef Oberhauser (contumace a Monaco). Furono esclusi dal capo di imputazione i reati di omicidio commessi contro partigiani e membri politici della Resistenza, in quanto motivati dalle leggi di guerra, a differenza dei crimini di persecuzione razziale, 
                        dovuti a vendetta o a motivi di lucro. Il dibattimento si concluse il 29 aprile 1976 con la condanna all’ergastolo di Josef Oberhauser, che non scontò mai la pena in quanto le autorità tedesche non erano tenute a consegnarlo a quelle italiane in base a un accordo bilaterale del 1942.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Visita</h2>
                    <h3 className="color-subtitle">Il museo e memoriale</h3>
                    <p>
                        La storia della <strong>Risiera di San Sabba</strong> come luogo di memoria ebbe inizio nell’immediato dopoguerra, quando celle e cortile divennero meta di pellegrinaggio da parte della cittadinanza. Nel punto in cui si ergeva la ciminiera, dopo la rimozione delle macerie 
                        dell’esplosione provocata dai nazisti alla fine di aprile 1945, fu infatti creata un’area sacra recintata, composta da una croce e alcune lapidi.
                    </p>
                    <p>
                        L’aspetto odierno della Risiera è il risultato dell’importante intervento di ristrutturazione e trasformazione monumentale realizzato tra 1972 e 1975 e progettato dall’architetto triestino Romano Boico (1910-1985), vincitore del concorso bandito nella seconda metà degli anni Sessanta 
                        dal Comune di Trieste (1966 e 1968). 
                    </p>
                    <p>
                        Connotato da alte mura perimetrali in calcestruzzo armato di gusto brutalista, il Memoriale di Boico conserva solo in piccola parte gli edifici originali e si articola in un percorso concepito per generare un forte impatto emotivo sul visitatore. Fu inaugurato il 24 aprile del 1975.<br/>
                        Oggi il Civico Museo della Risiera di San Sabba – Monumento Nazionale è un luogo della memoria fra i più importanti in Italia, sede di cerimonie commemorative e di attività didattiche e culturali. Di proprietà del Comune di Trieste, è insieme un memoriale e un museo, raggiunto da oltre 
                        130.000 visitatori l’anno, in gran parte studenti.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className='color-subtitle'>Pecorso</h2>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="col-lg-4">
                                <CardImg src={Ingresso_monumentale} alt="Ingresso monumentale della risiera di San Sabba" style={{height: '400px'}}/>
                            </div>
                            <div className="col-lg-8 d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h2 className='color-subtitle'>Ingresso monumentale</h2></CardTitle>
                                    <hr className='border-3'/>
                                    <CardText>
                                        L’<b>ingresso monumentale</b>, un corridoio profondo stretto tra alte mura, conduce a un sottoportico e poi al cortile interno su cui affacciano gli edifici dove erano detenuti i prigionieri. 
                                    </CardText>
                                    <CardText>
                                        Nel sottoportico, superata l’area di accoglienza e bookshop, si incontra a sinistra la <b>Cella della morte</b>, uno stanzone che all’epoca del Lager era destinato ai prigionieri in attesa di esecuzione o di smistamento.
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="col-lg-4">
                                <CardImg src={Sala_delle_Celle} alt="Sala delle celle" style={{height: '400px'}}/>
                            </div>
                            <div className="col-lg-8 d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h2 className='color-subtitle'>Sala delle Celle</h2></CardTitle>
                                    <hr className='border-3'/>
                                    <CardText>
                                        Subito dopo, oltre l’arco di accesso al cortile, si trova un edificio a tre piani: al piano terra è visitabile la <b>Sala delle celle</b> in cui si conservano, quasi intatte, le 17 celle di detenzione fatte costruite nella primavera del 1944. Vi venivano rinchiusi 
                                        principalmente oppositori politici ed esponenti della Resistenza, per molti dei quali queste cellette – in cui venivano stipati fino a 6 prigionieri per volta – furono l’anticamera della morte.
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="col-lg-4">
                                <CardImg src={Sala_delle_Croci} alt="Sala delle Croci" style={{height: '400px'}}/>
                            </div>
                            <div className="col-lg-8 d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h2 className='color-subtitle'>Sala delle Croci</h2></CardTitle>
                                    <hr className='border-3'/>
                                    <CardText>
                                        Proseguendo sulla sinistra si visita la <b>Sala delle Croci</b>, un grande fabbricato di quattro piani che fu luogo di detenzione di molti prigionieri della Risiera, fra cui numerosi ebrei, in gran parte destinati alla deportazione in altri campi. Il nome con cui oggi è 
                                        noto questo edificio deriva dall’aspetto dei pilastri e delle travature in legno che in passato sostenevano i solai dei tre piani superiori, eliminati nella ristrutturazione di Boico. Le pareti degli stanzoni erano un tempo ricoperte di graffiti, oggi scomparsi. Di 
                                        queste scritte, tracciate dai prigionieri della Risiera, resta testimonianza nei diari dello studioso e collezionista triestino Diego de Henriquez, le cui pagine si possono leggere integralmente in un monitor all’interno del Museo. Alcune iscrizioni sopravvivono nelle 
                                        cellette dell’edificio a fianco.
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="col-lg-4">
                                <CardImg src={Cortile} alt="Cortile" style={{height: '400px'}}/>
                            </div>
                            <div className="col-lg-8 d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h2 className='color-subtitle'>Cortile</h2></CardTitle>
                                    <hr className='border-3'/>
                                    <CardText>
                                        Ai tempi del Lager il Cortile interno era molto diverso da come appare oggi: vi si trovavano due grandi edifici industriali e una ciminiera alta 40 metri. Gli edifici, utilizzati in parte per eliminare i prigionieri e in parte per celare il forno crematorio, furono distrutti 
                                        dai nazisti in fuga il 29 aprile 1945 nel tentativo di cancellare le prove dei loro crimini.
                                    </CardText>
                                    <CardText>
                                        Nel cortile due sono i punti focali ideati da Romano Boico: la piastra in acciaio che evoca il crematorio e l’alta stele che svetta in luogo del camino, la cosiddetta Pietà P.N.30.
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="col-lg-4">
                                <CardImg src={Edificio} alt="Edificio" style={{height: '400px'}}/>
                            </div>
                            <div className="col-lg-8 d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h2 className='color-subtitle'>Edificio</h2></CardTitle>
                                    <hr className='border-3'/>
                                    <CardText>
                                        L’edificio centrale, a sei piani e con avancorpo a torre, porta le tracce di uno dei fabbricati distrutti. In una nicchia è posta una lapide in ricordo delle vittime, con la semplice iscrizione quadrilingue “Ceneri delle vittime”. Davanti, il pavimento in acciaio 
                                        ricorda la presenza del crematorio. Messo in funzione il 4 aprile 1944 su progetto di Erwin Lambert, secondo numerose testimonianze era collocato alla base del camino. Nell’area del Cortile avvenivano anche le uccisioni. Si stimano oltre due-tremila vittime, 
                                        soprattutto ostaggi, antifascisti e partigiani italiani, sloveni e croati.
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="col-lg-4">
                                <CardImg src={Sala_del_Museo} alt="Sala del Museo" style={{height: '400px'}}/>
                            </div>
                            <div className="col-lg-8 d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h2 className='color-subtitle'>Sala del Museo</h2></CardTitle>
                                    <hr className='border-3'/>
                                    <CardText>
                                        Al pianterreno del grande edificio al centro del piazzale, dove ai tempi del Lager erano collocate la mensa e la cucina, si trova oggi la Sala del Museo, completamente rinnovata nel 2016. Il nuovo allestimento (architetto Corrado Pagliaro, grafico Roberto Duse) è stato 
                                        premiato nel 2018 con una Menzione d’Onore al XXV Compasso d’Oro.
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="col-lg-4">
                                <CardImg src={Sala_delle_Commemorazioni} alt="Sala delle Commissioni" style={{height: '400px'}}/>
                            </div>
                            <div className="col-lg-8 d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h2 className='color-subtitle'>Sala delle Commissioni</h2></CardTitle>
                                    <hr className='border-3'/>
                                    <CardText>
                                        Attraversato il cortile, si oltrepassa un altro sottoportico e l’area in cui sono affisse le lapidi commemorative, per raggiungere la <b>Sala delle Commemorazioni</b>, un’ex sala macchine trasformata da Boico in una sorta di cappella laica. L’ambiente, usato per mostre, 
                                        cerimonie ed eventi, ospita dal 22 giugno 1975 il gruppo scultoreo in bronzo I Martiri di <i>Marcello Mascherini</i> (1906-1983). L’opera, oggi simbolo della Risiera, era stata concepita come parte di un progetto ideato nel 1957 insieme all’ingegnere triestino Roberto 
                                        Costa (1924-2016), con cui i due parteciparono al concorso internazionale per la realizzazione di un monumento ad Auschwitz.
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1963.8631297395866!2d13.787619538011752!3d45.62081709425524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477b6a4aa726f5f5%3A0xfb2dace8418ceaed!2sRisiera%20di%20San%20Sabba!5e1!3m2!1sit!2sit!4v1713175618924!5m2!1sit!2sit"
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
