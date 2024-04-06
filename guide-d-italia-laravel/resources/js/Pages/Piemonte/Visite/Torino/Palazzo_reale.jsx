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
                    <Link href="/visite/torino/palazzo_reale/palazzo_reale_armeria_reale_e_cappella_della_sindone" className='text-decoration-none'>
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
                    </Link>
                </Card>
                <Card className='me-2 mb-2 carta-percorsi'
                    onMouseEnter={() => setIsHoveredVisisitaArcheologica(true)}
                    onMouseLeave={() => setIsHoveredVisisitaArcheologica(false)}>
                    <Link href="/visite/torino/palazzo_reale/visita_archeologica" className='text-decoration-none'>
                        <h2 className={`color-title p-3 ${isHoveredImageVisisitaArcheologica ? 'image-hovered' : 'image-normal'}`}>Visita Archeologica</h2>
                        <Card.Body>
                            <Card.Text className='mb-5 text-dark'>
                                Un percorso attraverso le diverse sezioni del Museo di Antichità, divenuto nei secoli tra i più ricchi d'Europa. <br/>
                                Comprende la Galleria Argheologica, ala del museo dove sono conservate le opere più preziose delle collezioni, la selezione dedicata all'archeologia a Torino, con reperti fino all'epoca terdoantica, e il Teatro 
                                Romano di Augusta Taurinorum, costruito tra il I e il II secolo d.C.
                            </Card.Text> 
                            <Link className='text-decoration-none' href="/visite/torino/palazzo_reale/visita_archeologica"><Button variant="primary" className='btn-card position-absolute bottom-0 end-0 me-2 mb-1'>leggi tutto</Button></Link>
                        </Card.Body>
                    </Link>
                </Card>
                <Card className='me-2 mb-2 carta-percorsi'
                    onMouseEnter={() => setIsHoveredCapolavoriPittura(true)}
                    onMouseLeave={() => setIsHoveredCapolavoriPittura(false)}>
                    <Link href="/visite/torino/palazzo_reale/capolavori_della_pittura" className='text-decoration-none'>
                        <h2 className={`color-title p-3 ${isHoveredImageCapolavoriPittura ? 'image-hovered' : 'image-normal'}`}>Capolavori della Pittura</h2>
                        <Card.Body>
                            <Card.Text className='mb-5 text-dark'>
                                Con il naso all’insù attraverso le diverse sezioni dei Musei Reali si potranno ammirare i soffitti lignei di Palazzo Reale con le tele seicentesche del fiammingo Jan Miel, la volta della Galleria del Daniel e quella 
                                dell’Armeria Reale, decorata con le Storie di Enea dipinte da Claudio Francesco Beaumont. Il percorso continua in Galleria Sabauda con i ritratti di corte di Van Dyck, il ciclo degli Elementi di Albani, l’Annunciazione 
                                di Orazio Gentileschi, tre tele monumentali del Veronese, le opere di Guido Reni, la Venere di Sandro Botticelli, la Passione di Cristo di Hans Memling, e altri dipinti di Beato Angelico, Van Eyck e Rembrandt.
                            </Card.Text> 
                            <Link className='text-decoration-none' href="/visite/torino/palazzo_reale/capolavori_della_pittura"><Button variant="primary" className='btn-card position-absolute bottom-0 end-0 me-2 mb-1'>leggi tutto</Button></Link>
                        </Card.Body>
                    </Link>
                </Card>
                <Card className='me-2 mb-2 carta-percorsi'
                    onMouseEnter={() => setIsHoveredVisitaCompleta(true)}
                    onMouseLeave={() => setIsHoveredVisitaCompleta(false)}>
                    <Link href="/visite/torino/palazzo_reale/visita_completa" className='text-decoration-none'>
                        <h2 className={`color-title p-3 ${isHoveredImageVisitaCompleta ? 'image-hovered' : 'image-normal'}`}>Visita Completa</h2>
                        <Card.Body>
                            <Card.Text className='mb-5 text-dark'>
                                Partenza dal Palazzo Reale, con le sale di rappresentanza del primo piano nobile, l’Armeria e la Cappella della Sindone. Da qui si procede attraverso il primo piano Galleria Sabauda, che espone oltre 500 opere delle 
                                collezioni dinastiche, testimonianza l’arte europea dal Trecento al Novecento. Si continua nel Museo di Antichità, con la Galleria Archeologica, al piano terreno, la sezione dedicata all’archeologia a Torino, a piano 
                                interrato, e il Teatro Romano. La visita completa termina nei Giardini, luogo liberamente accessibile al pubblico.
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
                                I Giardini Reali si estendono su una superficie di oltre sette ettari e sono liberamente accessibili. Il percorso comprende il Giardino Ducale, nucleo più antico di matrice cinquecentesca, il Boschetto e i Giardini 
                                Bassi, di impianto ottocentesco, il Giardino di Levante, con la fontana settecentesca di Simone Martinez, e i Giardini della Cavallerizza, realizzati in epoca barocca. Numerose specie arboree e floreali arricchiscono 
                                il percorso: un faggio pendulo e platani centenari, un grande Ginkgo Biloba e le rose Barpej, create appositamente per i Giardini Reali. 
                            </Card.Text> 
                            <Link className='text-decoration-none' href="/visite/torino/palazzo_reale/visita_ai_giardini"><Button variant="primary" className='btn-card position-absolute bottom-0 end-0 me-2 mb-1'>leggi tutto</Button></Link>
                        </Card.Body>
                    </a>
                </Card>
            </div>
            
            
        </div>
    </main>
    <Footer/>
    </AuthenticatedLayout>
  )
}
