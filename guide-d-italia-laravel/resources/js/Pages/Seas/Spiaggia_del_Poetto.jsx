import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Spiaggia_del_Poetto(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='spiaggia_di_poetto' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Spiaggia di Poetto</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className='margin mt-3'>
                    <p className='fst-italic text-center'>
                        Immensa e bellissima spiaggia cittadina, otto chilometri di litorale tra Cagliari e Quartu Sant’Elena: sabbia soffice, mare azzurro, relax, divertimento e sport
                    </p>
                    <p>
                        Sino a inizio XX secolo i cagliaritani gli preferivano la parte occidentale del <b>golfo degli Angeli</b>, poi a poco a poco ne apprezzarono le dune bianche, sorsero i primi stabilimenti, i chioschi e una colonia estiva, infine i celebri variopinti casotti (rimossi del tutto 
                        nel 1986). Col tempo l’hanno popolata sempre più, sino a farle assumere il nome di ‘spiaggia dei centomila’. Oggi il Poetto è l’indiscusso ‘mare’ dell’hinterland cagliaritano, una delle spiagge cittadine maggiori d’Europa, nonché più belle e frequentate dell’Isola, meta 
                        preferita dei visitatori del capoluogo, in estate e in qualsiasi giornata di sole nel resto dell’anno: tappa obbligatoria anche soltanto per un caffè o un aperitivo accompagnato dalla brezza marina.<br/>
                        A pochissimi chilometri dal centro e dal porto di <b>Cagliari</b>, la spiaggia si estende dall’appartato e rilassante <b>Margine Rosso</b>, nel litorale di <b>Quartu Sant’Elena</b>, sino alla Sella del Diavolo, che ne accresce il fascino dominando dall’alto <b>Marina Piccola</b>: 
                        immancabile la passeggiata nel porticciolo. Dalla torre spagnola in cima, detta ‘del poeta’, deriva forse il nome del litorale, anche se l’ipotesi più verosimile è la derivazione dallo spagnolo <i>puerto</i> (porto). Potrai salire sino alla torre seicentesca percorrendo il 
                        promontorio da <b>Calamosca</b>, con un percorso di un’ora, bellissimo di notte. Sulla costa opposta della ‘Sella’ si nascondono le deliziose e riparate spiaggette di Calamosca e di Cala Fighera.<br/>
                        L’arenile del Poetto è ampio in tutta la sua estensione, l’acqua è limpida e il fondale sabbioso e basso per decine di metri, ideale per il gioco dei bambini. La riva è un’irresistibile attrazione per lunghe passeggiate. Alle spalle passeggerai a piedi, coi pattini o in bici 
                        in un modernissimo lungomare – perfetto per jogging, biking, rollerblade e skateboard -, mentre i caratteristici chioschetti a ridosso della sabbia offrono ristoro e animazione. Sono a disposizione bagni e docce e non mancano spazi riservati ai cani. Il collegamento con la 
                        città è agevole e i servizi efficienti: dagli stabilimenti balneari al diving center, dalle scuole di vela all’affitto di natanti, dai campi da <i>beach</i> tennis e volley alle escursioni in canoa, dai <i>fast food</i> ai ristoranti, dalle attività commerciali al luna park 
                        aperto tutto l’anno. Il lido è un eccellente <i>beach break</i> per surf da onda e <i>kite surf</i>, di cui ospita eventi di livello mondiale, nonché teatro di vita notturna, uno dei principali luoghi della <i>movida</i> estiva dell’area vasta: musica dal vivo e lezioni di ballo, 
                        locali e discoteche.<br/>
                        L’estensione della spiaggia è equamente divisa tra i quasi quattro chilometri di litorale di Quartu e i quattro della parte cagliaritana, suddivisa in ‘fermate’, che derivano dalle soste del tram, sostituito in tempi più recenti dagli autobus. La ‘prima fermata’ ha fondale 
                        bassissimo, ‘seconda’ e ‘terza’ sono sede degli stabilimenti storici del D’Aquila e del Lido, la ‘quarta’ ospita quelli delle forze dell’ordine, dalla ‘quinta’, dove sorge la torre spagnola, sino al capolinea c’è una distesa di sabbia ‘libera’. Il confine col litorale di Quartu 
                        è ‘La Bussola’, nome di un locale non più attivo. Da qui la spiaggia libera si alterna ad accoglienti e attrezzati stabilimenti.<br/>
                        Dalla spiaggia giungerai rapidamente alle ‘vie del sale’ allungando (di poco) la passeggiata sino al <b>parco di Molentargius-Saline</b>, che ha un ingresso sul lungomare. Avrai l’imbarazzo della scelta per l’escursione nell’area protetta - tour guidati e liberi in bici e a 
                        piedi, itinerari in battello lungo i canali delle ex saline, bus elettrici – e farai un’esperienza unica tra conoscenza storica e scientifica attraverso uno dei siti naturalistici più belli e importanti dell’Isola, un’oasi a pochi passi dalla città, dimora preferita dei 
                        fenicotteri rosa, che qui sostano e nidificano. Poetto e <i>Molentargius</i> sono strettamente legati anche dalla millenaria attività saliniera, iniziata in epoca romana e interrottasi nel 1985.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470.6748289308714!2d9.20456327389484!3d39.22559988202077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e0cb3f4437c185%3A0xe19f29946fc7e751!2sSpiaggia%20del%20Poetto%20di%20Quartu!5e1!3m2!1sit!2sit!4v1713535323831!5m2!1sit!2sit"
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
