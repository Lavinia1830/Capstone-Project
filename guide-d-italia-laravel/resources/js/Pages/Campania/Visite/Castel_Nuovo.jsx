import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';

export default function Castel_Nuovo(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='castel_nuovo' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Castel Nuovo</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Da sede reale a fortezza, il castello racconta la storia di <Link href='/destinazioni/campania/napoli' className='text-decoratio-none color_link'>Napoli</Link>. 
                    </p>
                    <p>
                        Visitare <strong>Castel Nuovo</strong>, o il <b>Maschio Angioino</b>, permette di conoscere la vera storia di Napoli. Castello imponente fatto costruire nel 1266 da Carlo I d’Angiò fu sede reale e centro di cultura che ospitò artisti e letterati come <b>Giotto</b>, 
                        <b>Petrarca</b> e <b>Boccaccio</b>. In seguito con il dominio degli Aragonesi divenne una <b>fortezza militare</b>, data la sua posizione strategica. Attualmente è possibile visitare le sale interne come la <b>Sala dei Baroni</b>, la principale del Castello, affrescata da Giotto, 
                        con la splendida volta ottagonale e la <b>Sala dell’Armeria</b> dove sono stati rinvenuti resti archeologici di epoca romana. La <b>Cappella Palatina</b> è l’unica testimonianza dell’antica reggia angioina e vi si trovano alcune sculture del Rinascimento napoletano. Il Castello 
                        ospita il <b>Museo Civico</b> con affreschi e dipinti che vanno dal XV al XVIII secolo e opere d’arte dell’Ottocento e del Novecento.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Cosa vedere al Maschio Angioino</h2>
                    <p>
                        Visitare il <b>Maschio Angioino</b> è come fare un viaggio nel tempo e ripercorre la storia Napoli. All’interno del Maschio Angioino si trovano sale adornate, cappelle, affreschi antichi ma anche reperti archeologici di epoca romana e il bellissimo Museo Civico con opere che 
                        vanno dal XV al XX secolo.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h3 className="color-subtitle">Arto Trionfale</h3>
                    <p>
                        L’<b>arco Trionfale</b> segna l’ingresso principale del castello ed è stato costruito tra il 1453 e il 1468 traendo ispirazione agli archi trionfali di epoca romana per celebrare l’ingresso di re Alfonso d’Aragona nella capitale, dopo aver sconfitto Renato d’Angiò. Situato tra 
                        la torre “di Mezzo” e la torre “di Guardia” qui si può ammirare un arco con un fregio che raffigura il corteo trionfale di Alfonso seduto su un carro condotto dalla Fortuna e circondato dai famigliari e dai grandi ufficiali del regno. Sopra di questo si trova un arco superiore 
                        adornato da colonne ioniche e da nicchie ospitanti le statue delle <b>quattro virtù</b> (Temperanza, Giustizia, Fortezza e Magnanimità), e dominato da un ornamento semicircolare con in cima la statua di San Michele.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h3 className="color-subtitle">Cappella Palatina</h3>
                    <p>
                        Unico elemento superstite del castello angioino trecentesco è la <b>Cappella Palatina</b> che fu fatta costruire dagli Angioini nel XII secolo e che, nonostante fosse stata danneggiata da un terremoto nel XV secolo, è stata poi restaurata e negli anni ha saputo mantenere intatto il suo 
                        aspetto originario.
                    </p>
                    <p>
                        All’interno l’edificio si presenta in <b>stile gotico</b> con opere pittoriche dell’artista fiorentino Maso di Banco mentre numerose sculture presenti, come “il Tabernacolo con la Madonna e il Bambino” appartengono a Domenico Gagini, allievo di Donatello e Brunelleschi. L’interno 
                        della Cappella Palatina fu per certo affrescato anche da <b>Giotto</b> che riprese in un ciclo di affreschi appartenenti alle Storie del Vecchio e Nuovo Testamento. Tuttavia il lavoro di Giotto è andato quasi interamente perduto durante le incursioni avvenute tra il XV e il XVI secolo.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h3 className="color-subtitle">Sala dei Baroni</h3>
                    <p>
                        Chiamata anche Sala Maior o Sala del Trono, la <b>Sala dei Baroni</b> è la principale sala del castello e fu voluta da Roberto d’Angiò, un re mecenate che accolse alla sua corte artisti e letterati come Boccaccio e Petrarca e pittori come Giotto che affrescò anche parte delle pareti 
                        di questa stanza. Alfonso I D’Aragona, invece, con l’intento di ampliare e abbellire la stanza chiamò a Napoli l’architetto spagnolo Sagrera che ristrutturò la sala e costruì la splendida <b>volta ottagonale</b> a forma di stella.
                    </p>
                    <p>
                        Il nome della sala deriva dal fatto che intorno al 1486 alcuni baroni avevano organizzato una <b>congiura contro re</b> Ferrante I, il quale scoprì il complotto e invitò i baroni al castello con la scusa di partecipare alle nozze della nipote. In realtà il re aveva organizzato una 
                        trappola: i baroni radunati in questa stanza furono arrestati e condannati a morte.
                    </p>
                    <p>
                        Purtroppo nel 1919 la struttura è stata colpita da un incendio che ha distrutto quasi tutte le decorazioni scultoree, ma tra le opere presenti nella sale si può ancora ammirare il <b>portale marmoreo bifronte</b> creato da Domenico Gagini con bassorilievi raffiguranti Alfonso V 
                        d’Aragona e il suo ingresso trionfante al castello.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h3 className="color-subtitle">Sala dell’Armeria</h3>
                    <p>
                        Situata sulla sinistra della Cappella Palatina, la <b>Sala dell’Armeria</b> custodiva l’arsenale bellico che era presente presso il Maschio Angioino. Più che per il suo ruolo la sala è nota perché durante alcuni lavori di restauro del castello, qui sono stati rinvenuti importanti 
                        <b> reperti archeologici</b> di epoca romana che vanno dal I secolo a.C. al V secolo d.C.. I resti rinvenuti si possono oggi ammirare grazie ad una pavimentazione in vetro trasparente.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h3 className="color-subtitle">Cappella delle Anime del Purgatorio</h3>
                    <p>
                        Si pensa che la <b>Cappella delle Anime del Purgatorio</b> sorga nel luogo in cui prima si trovava la trecentesca cappella di San Martino di Tours. La cappella, infatti, è stata costruita nel XVI secolo dai viceré spagnoli che hanno ordinato diverse modifiche al castello.
                    </p>
                    <p>
                        L’interno è in <b>stile barocco</b> con affreschi e dipinti su tavola racchiusi in cornici di legno dorato mentre sull’altare maggiore è posta una tela raffigurante la Madonna del Carmine con San Sebastiano, Papa Gregorio I e alcune anime del purgatorio. La cappella era il luogo 
                        in cui si era soliti offrire i sacramenti ai <b>condannati a morte</b> prima che questi fossero giustiziati.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h3 className="color-subtitle">Cappella di San Francesco da Paola</h3>
                    <p>
                        Risalente al XV secolo e consacrata nel 1668, dopo un restauro che le ha conferito uno stile barocco, la piccola cappella di San Francesco deve il suo nome al fatto che ospitò <b>San Francesco da Paola</b> durante un suo viaggio per Parigi.
                    </p>
                    <p>
                        Originali dell’epoca si possono ancora ammirare alcune <b>decorazioni in stucco</b> dorato e due affreschi sulla parete sinistra mentre la <b>volta quattrocentesca</b>, disegnata da Guillerm Segreram, fu distrutta durante la Seconda Guerra Mondiale.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h3 className="color-subtitle">Prigioni</h3>
                    <p>
                        I sotterranei posti al di sotto della Cappella Palatina ospitano due sale che negli anni furono <b>adibite a prigioni</b> e vennero chiamate come la prigione “del Miglio” e quella “dei Baroni“.
                    </p>
                    <p>
                        Secondo una leggenda durante la dominazione aragonese la <b>prigione del Miglio</b>, nota anche come fossa del coccodrillo, era in realtà un deposito di grano dove talvolta venivano rinchiusi anche alcuni prigionieri. Purtroppo alcuni dei detenuti rinchiusi qui scomparvero nel 
                        nulla e per questo furono messe più guardie a sorveglianza. Presto fu scoperto che un <b>grosso coccodrillo</b> entrava da un apertura sotterranea all’interno della prigione e prendeva con sé i detenuti trascinandoli in mare. Una volta scoperta questa cosa i regnanti decisero di 
                        inviare qui le vittime più scomode che volevano giustiziare a morte di nascosto o senza troppo clamore.
                    </p>
                    <p>
                        La <b>prigione dei Baroni</b>, invece, che è direttamente collegata con una scala alla Cappella Palatina conserva quattro bare senza alcuna iscrizione che sono molto probabilmente quelle dei nobili uccisi durante la congiura dei Baroni nel 1486.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h3 className="color-subtitle">Museo Civico</h3>
                    <p>
                        Il Maschio Angioino ospita al suo interno anche il <b>Museo Civico</b> che si sviluppa tra la Sala dell’Armeria, la Cappella Palatina, il primo ed il secondo piano della fortezza.
                    </p>
                    <p>
                        Al <b>primo piano</b> ci sono affreschi e dipinti a carattere religioso del periodo risalente dal XV al XVIII secolo mentre al <b>secondo piano</b> sono conservate opere pittoriche dell’Ottocento e del Novecento oggi di proprietà del Comune di Napoli che ritraggono temi patriottici, 
                        risorgimentali e di valori rivoluzionari.
                    </p>
                    <p>
                        A questi spazi si aggiungono la Sala Carlo V e la Sala della Loggia dove vengono organizzate <b>mostre</b> ed iniziative a carattere culturale.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1263.1408094724886!2d14.252294142739615!3d40.838499778548105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b084e6e5d6497%3A0xc131a1902329c922!2sCastel%20Nuovo!5e1!3m2!1sit!2sit!4v1713359409707!5m2!1sit!2sit"
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
