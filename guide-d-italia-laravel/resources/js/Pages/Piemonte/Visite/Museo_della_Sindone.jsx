import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Museo_della_Sindone(props) {
  return (
    <>
        <Head title="Museo della Sindone"/>
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='museo_della_sindone' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Museo della Sindone</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle text-center">Storia</h2>
                    <p>
                        Il <strong>Museo della Sindone</strong> – che oggi si estende sul piano terra dell’edificio di via S. Domenico 28 e nella cripta della chiesa del SS. Sudario di Torino – ha ottant’anni e conta 
                        una serie di sempre più sistematici allestimenti.
                    </p>
                    <p>
                        Fu infatti intorno al <b>1936</b> che la <b>Confraternita del SS. Sudario</b> – ente ecclesiale fondato il 25 maggio 1598 proprio per diffondere il culto e la devozione alla Sindone  – decise 
                        di organizzare alcuni dei preziosi <b>reperti</b> sulla <b>Sindone</b> raccolti nei secoli in una <b>mostra permanente</b>. L’esposizione fu inaugurata il <b>4 giugno 1936</b> alla presenza 
                        dell’arcivescovo di Torino, <b>card.Maurilio Fossati</b>. La “<b>Mostra documentaria dell’insigne reliquia</b>“, come allora fu battezzata, trovò spazio in due stanze a fianco della <b>Chiesa 
                        del SS. Sudario</b>.
                    </p>
                    <p>
                        Nella seconda metà degli anni Cinquanta la <b>Confraternita</b> insieme con i <b>Cultores Sanctae Sindonis</b> – sodalizio fondato nel 1937 in seno alla stessa Confraternita per coordinare 
                        gli studi scientifici e le pubblicazioni sul Sacro Lino – si adoperò per rendere sempre più fruibile l’esposizione.
                    </p>
                    <p>
                        Così il <b>2 maggio 1959</b> poté inaugurarsi negli stessi locali adiacenti alla chiesa del SS. Sudario un <b>nuovo allestimento</b>. Nel <b>1961</b> iniziarono però grosse opere di <b>restauro 
                        della Chiesa</b> e di recupero della stessa casa della Confraternita. Il <b>Museo</b>, temporaneamente chiuso, fu <b>riaperto</b> nel <b>1963</b> nei locali ristrutturati della <b>casa della 
                        Confraternita</b> in via San Domenico 28. Qui trovò posto anche una copia in <b>grandezza naturale</b> del <b>negativo della Sindone</b> stampata su pellicola e illuminata per trasparenza.
                    </p>
                    <p>
                        Tuttavia la sistemazione non era ancora ritenuta soddisfacente. Il <b>Centro Internazionale di Sindonologia</b>, costituito nel 1959 sulle ceneri dei Cultores e con i medesimi obiettivi, fin da 
                        subito si assunse l’incarico di studiarne una <b>collocazione alternativa</b>. Fu individuato un basso fabbricato annesso alla casa della Confraternita. I lavori per adattarlo all’uso 
                        iniziarono nel <b>1965</b> e terminarono nel <b>1973</b> con l’inaugurazione della sala che il Museo occupò per 25 anni.
                    </p>
                    <p>
                        Nel <b>1997</b> con i lavori di restauro della <b>cripta</b> della chiesa del <b>SS. Sudario</b> e con gli allestimenti di <b>Richi Ferrero</b> e di <b>Marina Gariboldi</b> si aprì finalmente 
                        la sede definitiva del Museo, mentre la precedente area espositiva veniva adibita a <b>sala multimediale</b> per la proiezione dei video di presentazione della <b>Sindone</b>.
                    </p>
                    <p>
                        Il <b>15 aprile 1998</b> il Museo poteva essere finalmente inaugurato, alla presenza  del card. <b>Giovanni Saldarini</b>, Arcivescovo di Torino.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Percorso</h2>
                    <p>
                        Organizzato in mostra permanente il <b>4 giugno 1936</b> su iniziativa della Confraternita del Santissimo Sudario, il Museo della Sindone venne inaugurato nella nuova ed attuale sede, la cripta 
                        della <b>chiesa del SS. Sudario</b>, alla presenza del <b>card. Giovanni Saldarini</b>, Arcivescovo di Torino, <b>15 aprile 1998</b>.
                    </p>
                    <p>
                        L’attuale allestimento offre un’informazione completa sulle ricerche sindonologiche dal ‘500 ad oggi cogliendone gli aspetti storici, scientifici, devozionali e artistici.
                    </p>
                    <p>
                        Un’ala del Museo propone un <b>percorso scientifico</b>.  Qui vengono illustrate e documentate le ricerche sulla Sindone e sui suoi misteri, dalla prima foto eseguita dall’avvocato <b>Secondo 
                        Pia</b>, nel <b>1898</b>, sino alla stupefacente immagine tridimensionale del volto dell’Uomo della Sindone elaborata nel <b>1978</b> dall’equipe guidata da <b>Giovanni Tamburelli</b>.
                    </p>
                    <p>
                        Ampio lo spettro degli studi, con analisi sul tessuto, sulle microtracce (pollini, sangue, aloe, mirra, aragonite…), e ancora con indagini medico-legali e di carattere iconografico.
                    </p>
                    <p>
                        L’altra sezione del museo traccia una <b>percorso storico</b> della Sindone e della sua venerazione a partire dalla <b>seconda metà del XV secolo</b>, quando il Lenzuolo divenne proprietà di 
                        Casa Savoia.
                    </p>
                    <p>
                        Di particolare rilievo è la <b>cassetta</b> utilizzata per il <b>trasporto definitivo della Sindone a Torino</b> nel 1578.
                    </p>
                    <p>
                        Gioiello del museo è la <b>cinquecentesca teca in argento e pietre dure</b> che ha conservato la Sindone a partire dalla fine del <b>‘500</b> fino al <b>11 aprile 1997</b>, il giorno 
                        dell’<b>incendio</b> della <b>cappella del Guarini</b> nel <b>Duomo di Torino</b>.
                    </p>
                    <p>
                        Nella <b>sezione fotografica</b> è conservata l’intera serie delle <b>fotografie ufficiali della Sindone</b>, tra cui le prime fotografie scattate <b>da Secondo Pia nel 1898</b>, quelle 
                        di <b>Giuseppe Enrie del 1931</b>, la prima immagine a colori di <b>Giovanni Battista Judica Cordiglia del 1968</b>, le fotografie scientifiche dello <b>STURP del 1978</b>, quelle di <b>Gian 
                        Durante del 1997, 2000 e 2002</b> e le fotografie digitali in alta definizione di <b>Hal9000 del 2008</b>.
                    </p>
                    <p>
                        La visita è preceduta da un <b>video in cinque lingue</b> che accoglie i visitatori e propone la <p>lettura analitica</p> dell’immagine sindonica.
                    </p>
                    <h3 className="color-subtitle">La Chiesa del SS. Sudario</h3>
                    <p>
                        Dal 2019 fa parte del percorso del Museo la <b>chiesa del SS. Sudario</b>, oggetto nel <b>2018</b> di un articolato intervento di <b>restauro</b> a opera del <b>Centro di Conservazione e 
                        Restauro della Venaria Reale</b>. Era nata in prima istanza come oratorio, <b>costruita tra il 1734 e il 1735</b>, di fianco all’<b>ospedale dei Pazzerelli</b>, gestito dalla stessa 
                        Confraternita del SS. Sudario e proprio a servizio dei malati di mente loro assistiti, Vero <b>gioiello architettonico settecentesco</b>, era stata progettata – a <b>navata unica</b> – 
                        dall’<b>ingegnere Ignazio Mazzoni</b>, confratello della <b>Congregazione del Santo Sudario</b>, che l’aveva anche fatta erigere. Lo <b>sfondo della chiesa</b>, dalla parte opposta all’entrata, 
                        è dipinto a <b>colonne</b>, <b>statue e cornici</b>, raffiguranti un tempietto barocco. Un contesto ideale per gli <b>affreschi della volta</b>, su cui si sono concentrati i restauri: <b>La 
                        Trasfigurazione, firmata dal pittore Michele Antonio Milocco e le quadrature architettoniche di Pietro Alzeri</b>. Un ciclo di notevole interesse artistico cui si affianca la <b>Pala d’altare</b>, 
                        sempre <b>opera del Milocco</b>.
                    </p>
                    <p>
                        L’<b>apertura al pubblico</b> risale al <b>1764</b>, sempre su iniziativa della <b>Confraternita</b>, che fece realizzare il portone sulla strada per offrire al re <b>Carlo Emanuele III</b> la 
                        disponibilità dei propri cappellani per l’<b>assistenza religiosa ai militari e alle loro famiglie</b>, residenti <b>nei quartieri militari</b> costruiti in quell’epoca a pochi passi dalla Chiesa.
                    </p>
                    <p>
                        Profondamente segnata dal periodo di occupazione Napoleonica e poi dalle due Guerre mondiali, la chiesa fu al centro di numerosi e successivi lavori di consolidamento e ripristino nel corso di 
                        tutto il ‘900. Per un’opera di <b>recupero completa e radicale</b> si deve comunque attendere sino al <b>1996</b>. <b>Il laborioso</b> progetto sfociò <b>nel 1998</b> nell’apertura della <b>cripta 
                        della chiesa al museo della Sindone, centro espositivo unico</b> nel panorama culturale del nostro paese. Al di là del <b>Duomo</b>, dove il <b>Lenzuolo</b> è stabilmente <b>conservato</b>, <b>ma 
                        non visibile</b>, se non nei rari periodi di ostensione, questo è infatti il luogo che più di ogni altro offre la <b>possibilità di accostarsi alla Sacro Lino</b>.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1402.0823986366615!2d7.675741689493122!3d45.0763840514102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886d0b1806148f%3A0x2f2078a81a2f425a!2sMuseo%20della%20Sindone!5e1!3m2!1sit!2sit!4v1712589972122!5m2!1sit!2sit"
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
    </>
    
  )
}
