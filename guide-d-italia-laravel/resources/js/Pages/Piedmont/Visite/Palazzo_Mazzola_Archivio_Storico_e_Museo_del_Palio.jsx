import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Palazzo_Mazzola_Archivio_Storico_e_Museo_del_Palio(props) {
    return (
        <>
            <Head title="Palazzo Mazzola, Archivio storico e Museo del Palio"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='p_m_a_s_e_m_del_palio' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Palazzo Mazzola, Archivio Storico e Museo del Palio</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Palazzo Mazzola</h2>
                        <p>
                            <strong>Palazzo Mazzola</strong> di Asti è uno degli edifici storici più <b>importanti</b> della città di Asti. Situato nel <b>cuore</b> del 
                            centro storico, il palazzo risale al <b>XVI secolo</b> e rappresenta un esempio significativo dell'<b>architettura rinascimentale</b> piemontese. 
                            Costruito dalla famiglia <b>Mazzola</b>, il palazzo è noto per le sue <b>facciate decorate</b> e i suoi interni <b>affrescati</b>. Le decorazioni 
                            esterne presentano <b>elementi decorativi</b> tipici del periodo rinascimentale, mentre gli interni sono arricchiti da <b>stucchi</b> e <b>affreschi</b> 
                            che raffigurano scene mitologiche e paesaggi.
                        </p>
                        <p>
                            Oggi, Palazzo Mazzola ospita diverse <b>mostre</b> ed <b>eventi culturali</b>, attirando visitatori sia locali che internazionali. La <b>sala 
                            principale</b> del palazzo è spesso utilizzata per concerti, conferenze e presentazioni, rendendolo un punto di riferimento per la vita culturale 
                            della città. Inoltre, il palazzo è sede di una <b>fondazione</b> che si occupa della promozione e della valorizzazione del <b>patrimonio storico</b> e 
                            artistico di Asti.
                        </p>
                        <p>
                            La storia del Palazzo Mazzola è strettamente legata a quella della famiglia Mazzola, una delle famiglie più influenti di Asti durante il Rinascimento. La 
                            loro influenza si riflette non solo nell'architettura del palazzo, ma anche nelle opere d'arte e nei documenti storici conservati all'interno. Il palazzo 
                            è stato sottoposto a numerosi <b>restauri</b> nel corso dei secoli per preservarne la bellezza e l'integrità.
                        </p>
                        <p>
                            Visitare Palazzo Mazzola offre un'opportunità unica per immergersi nella <b>storia</b> e nell'<b>arte</b> del Rinascimento piemontese. La combinazione 
                            di <b>architettura</b>, <b>arte</b> e <b>cultura</b> rende questo luogo una tappa obbligata per chiunque desideri conoscere più a fondo la ricca eredità di Asti.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Archivio Storico</h2>
                        <p>
                            L’<strong>Archivio Storico del Comune di Asti</strong> è un <b>ufficio</b> al servizio dell’<b>Amministrazione</b> che custodisce la <b>memoria 
                            passata</b> e <b>recente</b> della città. Ma è anche un <b>autorevole istituto di ricerca</b> per la <b>storia di Asti</b> e del <b>territorio</b>, sede 
                            di <b>iniziative</b> e <b>manifestazioni</b> che coinvolgono un’<b>utenza motivata</b> ed <b>assidua</b>.
                        </p>    
                        <p>
                            Qui viene conservata tutta la <b>documentazione del Comune</b>, prodotta e ricevuta nel corso dello svolgimento della sua attività durante i <b>secoli</b>. Tutti 
                            i <b>documenti</b> che lo costituiscono, a partire dal <b>secolo X</b> (anno <b>947</b>) fino ad arrivare al <b>XXI secolo</b>, sono <b>consultabili</b>.
                        </p>
                        <p>
                            Tra i <b>manufatti</b> più <b>importanti</b> si annoverano i <b>preziosi codici manoscritti medievali</b> (tra cui il <b>Codex Astensis</b> e <b>Codex Statutorum</b>) 
                            decorati da <b>straordinarie miniature</b>, le <b>pergamene alto</b> e <b>basso-medievali</b> impreziosite dai <b>sigilli</b>, le <b>deliberazioni 
                            pubbliche</b> dal <b>secolo XIV</b>, il <b>fondo cartografico</b> a partire dal <b>XVII secolo</b>.
                        </p>
                        <p>
                            L’Archivio conserva anche gli <b>archivi aggregati</b> dei <b>comuni soppressi</b> e ora frazioni di Asti, nonché alcuni <b>archivi privati</b> di alto <b>valore 
                            storico</b> e <b>culturale</b>. Di grande rilievo è la <b>raccolta dei manifesti</b>, un tempo <b>tiletti</b> e <b>grida</b>, realizzati a partire dal <b>XVI 
                            secolo</b>.
                        </p>
                        <p>
                            Un nucleo qualitativamente e quantitativamente <b>significativo</b> dell’istituto è rappresentato infine dalla <b>Fototeca</b> - di cui fanno parte 
                            anche <b>depositi</b> e <b>donazioni</b> - che raccoglie oltre <b>300.000 fototipi</b>. Dalla <b>seconda metà dell’Ottocento</b> arrivando ai giorni nostri, si possono 
                            vedere <b>immagini di guerra</b>, ma anche di <b>personaggi</b>, <b>ambienti</b> ed <b>eventi</b> di diversi <b>periodi storici</b>.
                        </p> 
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Museo del Palio</h2>
                        <p>
                            <b>Asti</b> è <b>città medievale</b> per <b>formazione</b> e per <b>vocazione</b>. La <b>corsa del Palio</b> affonda le sue <b>radici</b> proprio in questa <b>città</b> e 
                            ne ha accompagnato il <b>divenire storico</b>, rispecchiandone le alterne <b>vicende</b>.<br/>
                            Come la <b>città</b>, il <b>Palio</b> ha conosciuto otto <b>secoli</b> di trasformazioni e il susseguirsi di momenti di <b>gloria</b> e periodi di <b>decadenza</b>, ma ha 
                            mantenuto inalterati i caratteri originali: il <b>fascino</b> della <b>competizione agonistica</b>, la <b>passione partigiana</b>, il <b>rapporto privilegiato</b> con 
                            il <b>Santo patrono</b> e una grande valenza <b>identitaria</b>.<br/>
                            La <b>storia</b> del <b>Palio</b> è speculare a quella di <b>Asti</b>, che da <b>secoli</b> si riconosce nella <b>corsa dei cavalli</b>, nelle <b>emozioni</b> dei 
                            partecipanti in <b>campo</b> e ai suoi <b>bordi</b>, nel fascino di un antico <b>rito collettivo</b>. Il <b>Museo</b> offre proprio questo: un <b>percorso dedicato</b> alla 
                            corsa del <b>Palio</b> che è anche un cammino lungo la <b>storia cittadina</b>. Accompagnano le <b>sale di esposizione permanente</b> altre di <b>mostre temporanee</b>, in 
                            cui vengono declinate le mille <b>sfaccettature</b> del <b>Palio di Asti</b>.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d904.2150218553833!2d8.19576250905592!3d44.900219914274956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4787932e4d844129%3A0xe6d58378f76a59ce!2sMuseo%20del%20Palio%20di%20Asti!5e1!3m2!1sit!2sit!4v1717575553394!5m2!1sit!2sit"
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
