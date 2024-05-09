import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link, Head } from '@inertiajs/react';
import { Image } from 'react-bootstrap';
import Bortolan_percorso_espositivo_palazzo_reale from '../../../../../assets/Piemonte/Bortolan_percorso_espositivo_palazzo_reale_Torino_Piemonte.jpg';

export default function Percorso_Espositivo(props) {
    return (
        <>
            <Head title="Percorso Espositivo"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='percorso_espositivo' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Percorso Espositivo</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <h3 className='text-center color-subtitle fst-italic'>
                            Il Teatro di Storia e Magnificenza, il percorso espositivo della Reggia è incentrato sulla storia e l’arte sabauda.
                        </h3>
                        <Image src={Bortolan_percorso_espositivo_palazzo_reale} className='mx-auto w-50'/>
                    </div>
                    <div className="margin mt-3">
                        <h2 className='text-center color-subtitle fst-italic'>Teatro di Storia e Magnificenza</h2>
                        <p>
                            L'incantevole scenario del palazzo seicentesco con la <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/i_capolavori/sala_di_diana' className='text-decoration-none color_link'>Sala di Diana</Link>, l’eleganza della <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/i_capolavori/galleria_grande' 
                            className='text-decoration-none color_link'>Galleria Grande</Link> con le musiche di <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/la_reggia/galleria_grande' className='text-decoration-none color_link'>Brian Eno</Link>, la  solennità della <Link 
                            href='/visite/piemonte/torino/reggia_di_venaria_reale/i_capolavori/cappella_di_sant_uberto' className='text-decoration-none color_link'>Cappella di Sant’Uberto</Link> e la grandiosità delle <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/i_capolavori/scuderie_juvarriane'
                            className='text-decoration-none color_link'>Scuderie juvarriane</Link>, capolavori settecenteschi di <b>Filippo Juvarra</b>, il suggestivo allestimento sulla vita di corte <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/ripopolare_la_reggia_di_peter_greenaway' 
                            className='text-decoration-none color_link'>Ripopolare la Reggia</Link>, di Peter Greenaway, rappresentano la cornice ideale del <i>Teatro di Storia e Magnificenza</i>.
                        </p>
                        <p>
                            Nei destini della Venaria c’è un tempo dello splendore e della ricchezza e un tempo dell’abbandono, dell’incuria e della dispersione dei suoi beni; per comprendere l’identità di questo luogo bisogna fare i conti prima con l’accumularsi e poi con il sottrarsi delle cose.<br/>
                            L’esemplare e complessivo restauro ha restituito gli splendidi volumi e le grandiose architetture del palazzo e ricreato le antiche assialità dei Giardini. Per la fruizione del pubblico le straordinarie visioni prospettiche della Reggia e ciò che rimane delle sue fastose decorazioni originarie sono stati pensati 
                            come <i>Teatro di Magnificenza</i> per raccontare storie e far rivivere la storia, mentre  le antiche allee all’infinito e i resti affioranti dei Giardini sono stati completati con nuove piantumazioni e arricchiti con opere d’arte della cultura contemporanea.
                        </p>
                        <p>
                            La prima parte della visita narra le vicende della dinastia sabauda che volle la Reggia e di coloro che la concepirono. Oltre ai personaggi storici, ripopolano le stanze quelli della corte nata dal genio artistico di <b>Peter Greenaway</b>, che accompagneranno i visitatori anche al Piano Nobile: nelle sale del 
                            palazzo di caccia seicentesco e nel Palazzo dei Re in una passeggiata a corte nel percorso di parata settecentesco, per permettere al pubblico di sentire l’antica e splendida residenza finalmente come sua, nel senso migliore della parola.
                        </p>
                        <p>
                            Il <i>Teatro di Storia e Magnificenza</i> si suddivide in due momenti:
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">La Storia</h2>
                        <p>
                            Il <b>Piano Seminterrato</b>, con gli affascinanti locali un tempo adibiti alle attività di servizio alla vita della corte, è concepito per far cogliere e riflettere su fatti storici, temi e vicissitudini della dinastia sabauda dalle mitologiche origini dell’anno Mille fino alla prima metà dell’Ottocento, 
                            quando si estinse il ramo principale dei Savoia.<br/>
                            Nelle ultime sale, prima di salire al Piano Nobile, si dipana il racconto delle trasformazioni della Reggia dal progetto del Castellamonte e un’affascinante “storia delle idee incompiute”, di come il palazzo avrebbe dovuto essere secondo i progetti, mai completati, di Garove e poi di Juvarra e Alfieri.
                        </p>
                        <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/la_reggia/breve_storia' className='text-decoration-none color_link'>Breve storia della Reggia di Venaria</Link>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">La Magnificenza</h2>
                        <p>
                            Al livello superiore, il <b>Piano Nobile</b>, viene raccontata la seicentesca Reggia di Diana per proseguire poi con la grande <i>Promenade à la cour</i> attraverso gli appartamenti del Duca e della Duchessa, quelli del Re e della Regina, la <Link 
                            href='/visite/piemonte/torino/reggia_di_venaria_reale/i_capolavori/galleria_grande' className='text-decoration-none color_link'>Galleria Grande</Link>, il Rondò alfieriano, fino alla <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/i_capolavori/cappella_di_sant_uberto' 
                            className='text-decoration-none color_link'>Cappella di Sant’Uberto</Link>, il grandioso “percorso cerimoniale” che caratterizzava il Palazzo settecentesco, riproposto senza soluzione di continuità, permettendo al visitatore di muoversi liberamente nei grandi spazi della Reggia e di ammirarne le fantastiche 
                            prospettive architettoniche. <br/>
                            Oltre 500 opere, alcuni veri capolavori, tra dipinti, sculture, arazzi, mobili, lampadari, tappeti, bandiere, argenti, tabacchiere, orologi e strumenti musicali evocano l’arredo perduto e ricreano le antiche atmosfere di corte e il gusto del Sei e Settecento.
                        </p>
                        <p>
                            Nell'autunno del 2019 è stata riaperta la <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/la_sacrestia_rinnovata' className='text-decoration-none color_link'>Sacrestia della Cappella di Sant’Uberto</Link> con un rinnovato allestimento che ne esalta la sacralità e la funzione. Dal 2021 è 
                            momentaneamente esposto anche un <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/esposizione_del_dipinto_restaurato_di_palma_il_giovane' className='text-decoration-none color_link'>prezioso dipinto di Palma il Giovane</Link> (1548/50 - 1628) dedicato alla Celebrazione della vittoria della battaglia 
                            di Lepanto del 7 ottobre 1571.
                        </p>
                        <p>
                            La <b>Regia Scuderia</b> con il <b>Bucintoro</b> e le <b>Carrozze Regali</b> completa il percorso di visita della Reggia.
                        </p>
                        <p>
                            Architetture mozzafiato recuperate, scorci e assialità prospettiche riproposte, ambienti, tappezzerie, contesti storici nuovamente citati: adesso come allora accompagnano il visitatore nelle magiche atmosfere della vita di corte per uno straordinario viaggio nella cultura e nel loisir di ieri e di oggi.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">I quadri del Re. La Galleria Sabauda alla Reggia di Venaria</h2>
                        <p>
                            Nelle sale del <b>seicentesco Appartamento della principessa Ludovica</b>, adiacenti la Sala di Diana, è in mostra un nucleo di prestigiose opere cinque e seicentesche concesse in prestito dalla Galleria Sabauda dei Musei Reali di Torino.
                        </p>
                        <p>
                            <b>Trenta preziosi dipinti di celebrati maestri dell’arte</b> quali <b>Guido Reni, Guercino, van Dyck, Brueghel il Vecchio e Brueghel il Giovane</b>: una raffinata esposizione che consente di <b>rievocare in parte la superba “quadreria della Reggia”</b> con dipinti appartenuti ai sovrani sabaudi.
                            In collaborazione con i Musei Reali di Torino.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">La Regia Scuderia. Il Bucintoro e le Carrozze Regali</h2>
                        <p>
                            Nel complesso delle Scuderie juvarriane - spazi fra i più imponenti della Venaria e del barocco europeo – giunge a conclusione il percorso di visita della Reggia.
                        </p>
                        <p>
                            All’interno della Scuderia Grande è esposto lo splendido <i>Bucintoro</i>, fatto realizzare a Venezia da Vittorio Amedeo II fra il 1729 e il 1731, oggi <b>unico esemplare originale rimasto al mondo</b>, presentato in un allestimento spettacolare con la celebre imbarcazione “armata” per intero con 
                            albero, remi e vele.<br/>
                            Insieme si ammirano anche alcune fra le più sontuose <b>carrozze di gala</b> utilizzate dai Savoia nell'Ottocento, tra cui la <i>Berlina dorata</i>, in prestito dal Palazzo del Quirinale di Roma.
                        </p>
                        <p>
                            Bucintoro e Carrozze sono raccontate in un unico affascinante percorso in quanto capolavori integranti e rappresentativi delle attività della <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/la_regia_scuderia_il_bucintoro_e_le_carrozze_regali' className='text-decoration-none color_link fst-italic'>Regia 
                            Scuderia</Link> a Corte, intese come alte funzioni preposte agli spostamenti del Sovrano e del suo seguito.
                        </p>
                        <p>
                            Dal 5 maggio 2021 è visitabile, presso la Regia Scuderia, anche la <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/la_carrozza_di_napoleone_alla_reggia_di_venaria' className='text-decoration-none color_link fw-bold'>Carrozza di Napoleone</Link>, dopo gli accurati interventi di restauro del Centro Conservazione e 
                            Restauro "La Venaria Reale".
                        </p>
                        <p>
                            L'ingresso alla Regia Scuderia è compreso nel biglietto "Reggia" e in "Tutto in una Reggia".
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">"La mosca cieca" di Romano Gazzera</h2>
                        <p>
                            Nello spazio antistante la Scuderia Grande è allestita l’opera "La mosca cieca" (1975 ca.) dell’artista Romano Gazzera (Ciriè, 1908 - Torino, 1985), restaurata presso il Centro Conservazione e Restauro “La Venaria Reale”.
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
