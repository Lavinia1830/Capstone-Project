import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import {Card, Button} from 'react-bootstrap';
import Footer from '@/Components/Footer';




export default function Palazzo_reale(props) {

    const [isHoveredImagePRARCS, setIsHoveredPRARCS] = useState(false);
    const [isHoveredImageVisisitaArcheologica, setIsHoveredVisisitaArcheologica] = useState(false);
    const [isHoveredImageCapolavoriPittura, setIsHoveredCapolavoriPittura] = useState(false);
    const [isHoveredImageVisitaCompleta, setIsHoveredVisitaCompleta] = useState(false);
    const [isHoveredImageVisitaGiardini, setIsHoveredVisitaGiardini] = useState(false);

    




  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
      <main>
        <div className='palazzo_reale' style={{ position: 'relative' }}>
          <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Palazzo Reale</h1>
          <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
          <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
        </div>
        <div className="margin mt-3">
            <p>
                Nel 1563 il duca Emanuele Fileberto stabilisce la capitale del duca sabaudo a Torino, insediando la corte nell'antico palazzo vescovile della città. Nel 1584, per volontà di Carlo Emanuele I, viene
                affidato all'architetto Ascanio Vitozzi il progetto per la costruzione di un nuovo palazzo e negli anni successiviv al 1643 la direzione dai lavori passa ad Amedeo di Castellamonte e poi ancora a 
                Carlo Morello.
            </p>
            <p>
                La sale del primo piano sono arricchite con soffitti intagliati e grandi tele allegoriche di Jan Miel e Charles Dauphin che esaltano le virtù del sovrano.
            </p>
            <p>
                Nel 1688 Daniel Seyter è chiamato da Roma per affrescare la fastosa galleria affacciata sui giardini e lavora on il genovese Bartolomeo Guidobono anche negli appartamenti del piano affida a Filippo 
                Juvarra la creazione della "zona di comando" costruita dalle Segretarie, dal Teatro Regio e degli Archivi di stato. La carica di primo architetto regio passa poi a Benedetto Alfieri, che progetta gli 
                apparati decorativi del secondo piano e allestisce le nuove camere degli Archivi, affrescate da Francesco De Mura e da Gregorio Guglielmi.
            </p>
            <p>
                Al tempo di Marlo Alberto (1831-1849) molti ambienti sono radicalmente rinnovati sotto la direzione di Pelagio Palagi e nel 1862 prende forma il nuovo scalone d'ornore. Con il trasferimento della capitale 
                da Torino a Firenze (1864) e poi a Roma, il palazzo perde progressivamente le sue funzioni di residenza e con la nascita della repubblica Italiana (1946) divenne proprietà dello Stato.
            </p>
        </div>
        <div className='margin mt-3'>
            <h3 className='color-subtitle text-center'>Percorsi Consigliati</h3>
            <div className='d-flex justify-content-center flex-wrap'>
                <Card className='me-2 mb-2 carta-percorsi'
                    onMouseEnter={() => setIsHoveredPRARCS(true)}
                    onMouseLeave={() => setIsHoveredPRARCS(false)}>
                    <a href="/visite/torino/palazzo_reale/palazzo_reale_armeria_reale_e_cappella_della_sindone" className='text-decoration-none'>
                        <h2 className={`color-title p-3 ${isHoveredImagePRARCS ? 'image-hovered' : 'image-normal'}`}>Palazzo reale, armeria reale e cappella della sindone</h2>
                        <Card.Body>
                            <Card.Text className='mb-5 text-dark'>
                            <p>
                                Alla scoperta degli Appartamenti di Rappresentanza di Palazzo Reale e delle sue Collezioni: arredi, dpinti, arrazzi, sculture e preziose volte decorate. La visita comprende l'Armeria Reale, tra le più ricche 
                                e scenografiche al mondo, e si conclude nella Cappella della Sindone, capolavoro seicento dell'architetto Guarino Guarini.
                            </p>
                            </Card.Text> 
                            <Link className='text-decoration-none' href="/visite/torino/palazzo_reale/palazzo_reale_armeria_reale_e_cappella_della_sindone"><Button variant="primary" className='btn-card position-absolute bottom-0 end-0 me-2 mb-1'>leggi tutto</Button></Link>
                        </Card.Body>
                    </a>
                </Card>
                <Card className='me-2 mb-2 carta-percorsi'
                    onMouseEnter={() => setIsHoveredVisisitaArcheologica(true)}
                    onMouseLeave={() => setIsHoveredVisisitaArcheologica(false)}>
                    <Link to="/visite/torino/palazzo_reale/visita_archeologica" className='text-decoration-none'>
                        <h2 className={`color-title p-3 ${isHoveredImageVisisitaArcheologica ? 'image-hovered' : 'image-normal'}`}>Visita Archeologica</h2>
                        <Card.Body>
                            <Card.Text className='mb-5 text-dark'>
                            <p>
                                Un percorso attraverso le diverse sezioni del Museo di Antichità, divenuto nei secoli tra i più ricchi d'Europa. <br/>
                                Comprende la Galleria Argheologica, ala del museo dove sono conservate le opere più preziose delle collezioni, la selezione dedicata all'archeologia a Torino, con reperti fino all'epoca terdoantica, e il Teatro 
                                Romano di Augusta Taurinorum, costruito tra il I e il II secolo d.C.
                            </p>
                            </Card.Text> 
                            <Link className='text-decoration-none' href="/visite/torino/palazzo_reale/visita_archeologica"><Button variant="primary" className='btn-card position-absolute bottom-0 end-0 me-2 mb-1'>leggi tutto</Button></Link>
                        </Card.Body>
                    </Link>
                </Card>
                <Card className='me-2 mb-2 carta-percorsi'
                    onMouseEnter={() => setIsHoveredCapolavoriPittura(true)}
                    onMouseLeave={() => setIsHoveredCapolavoriPittura(false)}>
                    <Link to="/visite/torino/palazzo_reale/capolavori_della_pittura" className='text-decoration-none'>
                        <h2 className={`color-title p-3 ${isHoveredImageCapolavoriPittura ? 'image-hovered' : 'image-normal'}`}>Capolavori della Pittura</h2>
                        <Card.Body>
                            <Card.Text className='mb-5 text-dark'>
                            <p>
                                Con il naso all’insù attraverso le diverse sezioni dei Musei Reali si potranno ammirare i soffitti lignei di Palazzo Reale con le tele seicentesche del fiammingo Jan Miel, la volta della Galleria del Daniel e quella 
                                dell’Armeria Reale, decorata con le Storie di Enea dipinte da Claudio Francesco Beaumont. Il percorso continua in Galleria Sabauda con i ritratti di corte di Van Dyck, il ciclo degli Elementi di Albani, l’Annunciazione 
                                di Orazio Gentileschi, tre tele monumentali del Veronese, le opere di Guido Reni, la Venere di Sandro Botticelli, la Passione di Cristo di Hans Memling, e altri dipinti di Beato Angelico, Van Eyck e Rembrandt.
                            </p>
                            </Card.Text> 
                            <Link className='text-decoration-none' href="/visite/torino/palazzo_reale/capolavori_della_pittura"><Button variant="primary" className='btn-card position-absolute bottom-0 end-0 me-2 mb-1'>leggi tutto</Button></Link>
                        </Card.Body>
                    </Link>
                </Card>
                <Card className='me-2 mb-2 carta-percorsi'
                    onMouseEnter={() => setIsHoveredVisitaCompleta(true)}
                    onMouseLeave={() => setIsHoveredVisitaCompleta(false)}>
                    <Link to="/visite/torino/palazzo_reale/visita_completa" className='text-decoration-none'>
                        <h2 className={`color-title p-3 ${isHoveredImageVisitaCompleta ? 'image-hovered' : 'image-normal'}`}>Visita Completa</h2>
                        <Card.Body>
                            <Card.Text className='mb-5 text-dark'>
                            <p>
                                Partenza dal Palazzo Reale, con le sale di rappresentanza del primo piano nobile, l’Armeria e la Cappella della Sindone. Da qui si procede attraverso il primo piano Galleria Sabauda, che espone oltre 500 opere delle 
                                collezioni dinastiche, testimonianza l’arte europea dal Trecento al Novecento. Si continua nel Museo di Antichità, con la Galleria Archeologica, al piano terreno, la sezione dedicata all’archeologia a Torino, a piano 
                                interrato, e il Teatro Romano. La visita completa termina nei Giardini, luogo liberamente accessibile al pubblico.
                            </p>
                            </Card.Text> 
                            <Link className='text-decoration-none' href="/visite/torino/palazzo_reale/visita_completa"><Button variant="primary" className='btn-card position-absolute bottom-0 end-0 me-2 mb-1'>leggi tutto</Button></Link>
                        </Card.Body>
                    </Link>
                </Card>
                <Card className='me-2 mb-2 carta-percorsi'
                    onMouseEnter={() => setIsHoveredVisitaGiardini(true)}
                    onMouseLeave={() => setIsHoveredVisitaGiardini(false)}>
                    <a href="/visite/torino/palazzo_reale/visita_ai_giardini" className='text-decoration-none'>
                        <h2 className={`color-title p-3 ${isHoveredImageVisitaGiardini ? 'image-hovered' : 'image-normal'}`}>Visita ai Giardini</h2>
                        <Card.Body>
                            <Card.Text className='mb-5 text-dark'>
                            <p>
                                I Giardini Reali si estendono su una superficie di oltre sette ettari e sono liberamente accessibili. Il percorso comprende il Giardino Ducale, nucleo più antico di matrice cinquecentesca, il Boschetto e i Giardini 
                                Bassi, di impianto ottocentesco, il Giardino di Levante, con la fontana settecentesca di Simone Martinez, e i Giardini della Cavallerizza, realizzati in epoca barocca. Numerose specie arboree e floreali arricchiscono 
                                il percorso: un faggio pendulo e platani centenari, un grande Ginkgo Biloba e le rose Barpej, create appositamente per i Giardini Reali. 
                            </p>
                            </Card.Text> 
                            <Link className='text-decoration-none' href="/visite/torino/palazzo_reale/visita_ai_giardini"><Button variant="primary" className='btn-card position-absolute bottom-0 end-0 me-2 mb-1'>leggi tutto</Button></Link>
                        </Card.Body>
                    </a>
                </Card>
                {/* <Card className='me-2 mb-2 carta-percorsi'>
                    <h2 className={'color-title p-3'}>Palazzo Reale per i più piccoli</h2>
                    <Card.Body>
                        <Card.Text className='mb-5 text-dark'>
                        <p>
                            La visita a Palazzo Reale con i bambini inizia dallo Scalone d’Onore, dal quale si accede al grande Salone delle Guardie Svizzere. Attraversate le anticamere di rappresentanza ci si sofferma davanti al trono del re, per 
                            entrare poco dopo nella spettacolare Armeria Reale, allestita con armi e armature antiche, cavalli e pennacchi, elmi e spade. Il percorso procede nella Galleria del Daniel, interamente affrescata e rivestita di Specchi, 
                            per passare nella scenografica Sala da Pranzo e nella Sala da Ballo, ricca di cristalli e dorature. Termina nella Cappella della Sindone, che stupisce per dimensioni e luminosità. Lungo il percorso sono presenti dei QR-code 
                            per ascoltare le tracce audio pensate per i giovanissimi visitatori, per un’esperienza di visita coinvolgente e divertente!
                        </p>
                        </Card.Text> 
                    </Card.Body>
                </Card>
                <Card className='me-2 mb-2 carta-percorsi'>
                    <h2 className={'color-title p-3'}>Galleria Sabauda per ipiù piccoli</h2>
                    <Card.Body>
                        <Card.Text className='mb-5 text-dark'>
                        <p>
                            Attraversando le sale della Galleria Sabauda, i bambini e le bambine scopriranno tanti capolavori della pittura del passato, incontrando personaggi e storie raffigurate con una varietà di materiali, tecniche e stili diversi. 
                            Oltre alle immagini sacre, che hanno per protagonisti la Maria, Gesù, i santi e gli angeli, nei dipinti si trovano rappresentati miti dell’antichità, scene di vita quotidiana e ritratti di persone realmente vissute, oltre a 
                            nature morte e paesaggi. La visita può essere arricchita leggendo gli approfondimenti dedicati ai più piccoli, oppure ascoltando le voci dei personaggi dall’Audioguida Junior, o ancora giocando con l’app che porta alla pacifica 
                            conquista delle sale del primo piano.
                        </p>
                        </Card.Text> 
                    </Card.Body>
                </Card>
                <Card className='me-2 mb-2 carta-percorsi'>
                    <h2 className={'color-title p-3'}>Il seicento a Palazzo Reale e nella Galleria Sabauda</h2>
                    <Card.Body>
                        <Card.Text className='mb-5 text-dark'>
                        <p>
                            Comprende le sale di rappresentanza del piano nobile di Palazzo Reale, dove numerosi soffitti conservano l’originale decorazione barocca, tra questi ricordiamo le <b>Vittorie</b> della Sala dei Paggi, il <b>Trionfo della Pace</b> 
                            di Jan Miel nella Sala del Trono, gli <b>Enigmi</b> che decorano il fregio della Sala delle Udienze Private e il <b>Sonno di Annibale</b> che campeggia al centro della monumentale copertura lignea del soffitto della Sala del 
                            Consiglio. Il percorso si arricchisce della volta affrescata a fine Seicento da Daniel Seiter nell’omonima galleria e procede poi nella sfarzosa Sala dell’Alcova, costruita e decorata negli anni Sessanta in occasione delle nozze 
                            tra Carlo Emanuele II e Francesca d’Orléans. Al termine del percorso che si snoda all’interno del Palazzo Reale, si accede alla Cappella della Sindone, universalmente riconosciuta come vertice dell’architettura barocca, costruita 
                            a partire dal 1668 e progettata dal matematico Guarino Guarini, geniale mente dell’ordine Teatino a servizio dei Duchi di Savoia. Procedendo nella Galleria Sabauda il Seicento è ben rappresentato delle opere dei pittori 
                            Caravaggeschi, tra le quali ricordiamo una raffinata <b>Annunciazione</b> di Orazio Gentileschi e il <b>Suonatore di Tiorba</b> di Antiveduto Gramatica.
                        </p>
                        </Card.Text> 
                    </Card.Body>
                </Card>
                <Card className='me-2 mb-2 carta-percorsi'>
                    <h2 className={'color-title p-3'}>Scultura</h2>
                    <Card.Body>
                        <Card.Text className='mb-5 text-dark'>
                        <p>
                            Alla base dello Scalone d’Onore di Palazzo Reale si trova la più antica scultura equestre della città di Torino dedicata a Vittorio Amedeo I. Lungo le sale di facciata del piano nobile si incontrano i camini scolpiti nell’Ottocento 
                            dal maestro Giuseppe Gaggini, mentre ai quattro angoli dell’Armeria Reale sono disposte le sculture allegoriche dei Fratelli Collino. Nella Sala dei Medaglioni si incontrano quattro grandi rilievi marmorei scolpiti nel Settecento da 
                            Simone Martinez, autore anche della fontana del Giardino di Levante, contornata da sculture di epoche differenti e provenienti da altre residenze. Il percorso si snoda inoltre nelle sale del Museo di Antichità, dove sono esposte sculture 
                            e rilievi di epoca assira, fenicia, greca, etrusca e romana.
                        </p>
                        </Card.Text> 
                    </Card.Body>
                </Card> */}
            </div>
            
            
        </div>
    </main>
    <Footer/>
    </AuthenticatedLayout>
  )
}
