import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Museo_dell_Automobile(props) {
  return (
    <>
        <Head title="Museo dell'automobile"/>
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='museo_nazionale_automobile' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Museo Nazionale dell'Automobile</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Il <b>Museo Nazionale dell’Automobile di Torino</b> è stato inaugurato il <b>19 marzo del 2011</b>. Il suo aspetto, <b>contemporaneo e 
                        avveniristico</b>, è stato ideato e progettato dall’architetto <b>Cino Zucchi</b> e l’<b>innovativo spazio espositivo</b> è stato 
                        firmato dallo scenografo <b>François Confino</b>. L’<b>investimento complessivo</b> del Museo è stato di <b>33 milioni di euro</b>, 
                        di cui <b>22 milioni destinati alla ristrutturazione</b> dell’edificio e <b>11 milioni agli allestimenti interni</b>. Gli spazi, 
                        quasi <b>raddoppiati</b> nel 2011, sono passati dagli <b>11.000 mq</b> della struttura originale agli oltre <b>19.000 mq</b> di 
                        quella attuale, raccontano la <b>storia dell’automobile</b> insieme alla <b>storia di una cultura e di una società</b> attraverso 
                        un <b>percorso unico al mondo</b> per linguaggio e per patrimonio.
                    </p>
                    <p>
                        Un nuovo sistema <b>multimedial</b>e e <b>interattivo</b> unico al mondo per livello di approfondimento, <b>32 Ipad</b> fissi 
                        all’ingresso di ciascuna sezione e a disposizione dei visitatori, <b>QRcode</b> su tutte le automobili e i pannelli di 
                        sezione, <b>20 nuovi video</b>, <b>3 nuove vetture</b>, una serie di completamenti <b>scenografici</b> lungo tutto il percorso 
                        espositivo, uno spazio interamente dedicato al <b>design</b>, il grande garage finalmente visitabile (su prenotazione) e 
                        un’<b>officina</b> che accoglierà la <b>Scuola di Restauro</b>: sono solo alcune delle tantissime novità che da settembre 2014 
                        hanno completato il progetto di ristrutturazione del Museo Nazionale dell’Automobile di Torino “<b>Avv.Giovanni Agnelli</b>” 
                        avviato dieci anni fa, nel 2004.
                    </p>
                    <p>
                        <b>Ad essere protagoniste</b> sono le <b>nuove tecnologie digitali</b> che funzionano grazie all’<b>istallazione</b> di 
                        una <b>nuova rete Wi-Fi</b> per <b>incrementare le possibilità interattive e sviluppare la comunicazione multimediale</b> all’interno 
                        dell’<b>intero percorso museale</b>. Sarà possibile per i <b>visitatori scoprire il vastissimo patrimonio di informazioni e dati 
                        raccolti dal Museo</b>: <b>approfondimenti storici, immagini d’archivio, schede tecniche sulle vetture e sui carrozzieri</b> saranno 
                        consultabili attraverso <b>tablet e smartphone personali</b>, <b>totem multimediali</b> o <b>Ipad in affitto</b>.
                    </p>
                    <p>
                        Un vero e proprio <b>Albero della Conoscenza</b> costituito da un <b>tronco</b> – le <b>30 sezioni</b> più l’<b>Open Garage</b> che 
                        compongono l’<b>itinerario di visita</b> ciascuna delle quali è descritta da un <b>pannello introduttivo</b> – dai <b>rami</b> – 
                        le <b>storie collegate alle vetture esposte</b> in ciascuna sezione – e dalle <b>foglie</b> – <b>approfondimenti</b> sempre più 
                        accurati e moltiplicabili. L’albero cresce se alimentato dalla <b>partecipazione</b> e dal <b>contributo</b> dei visitatori.
                    </p>
                    <p>
                        <b>Questo sistema</b>, <b>concepito</b> per essere <i>in progress</i>, è <b>in grado</b> di <b>monitorare</b> le <b>preferenze</b> dei <b>visitatori</b> o <b>trasformare</b> le <b>carenze</b> da 
                        loro <b>riscontrate</b> in <b>suggerimenti</b> e <b>spunti</b>. <b>In questo</b> modo il <b>Museo</b> raccoglierà i <b>desiderata</b> degli <b>utenti</b>, 
                        in modo da <b>poter valutare punti di forza</b> e <b>debolezze</b> sia del <b>percorso espositivo</b> che 
                        del <b>sistema interattivo</b> di <b>informazione</b> ed <b>approfondimento</b>.
                    </p>
                    <p>
                        Il <b>design</b> è il <b>cuore pulsante</b> del <b>Museo</b>, lo <b>spazio</b> che racconta la <b>creatività</b> all’opera, 
                        l’<b>idea</b> che diventa sostanza grazie all’<b>applicazione</b> e al <b>lavoro di squadra</b>. Il <b>piano terra</b> è stato 
                        completamente <b>riallestito</b> con spettacolari <b>scenografie</b> finalizzate a promuovere una più ampia <b>conoscenza</b> del <b>car 
                        design</b>, della sua <b>evoluzione storica</b>, degli <b>uomini</b> che ne hanno determinato i <b>cambiamenti</b> e gli <b>orientamenti 
                        presenti e futuri</b>.
                    </p>
                    <p>
                        <b>L’Onda</b> del <b>car design</b> è strutturata come una <b>time-line</b> che racconta, <b>periodo per periodo</b>, 
                        la <b>storia</b> della <b>motorizzazione</b>, dell’<b>industria</b>, della <b>società</b> e della <b>cultura automobilistica</b>: 
                        in ogni periodo si inseriscono i <b>nomi</b> dei più grandi <b>car designers</b>, con una <b>breve biografia</b> che ne racconta 
                        la <b>carriera</b>. Un <b>percorso professionale</b> che viene rappresentato anche graficamente da una <b>linea</b>. Talvolta la 
                        linea <b>finisce</b> insieme alla <b>carriera</b>, in altri casi dà origine a una <b>tradizione di famiglia</b>. In ogni caso 
                        ogni <b>personaggio</b> lascia una propria <b>impronta</b> ed un proprio <b>contributo</b> alla <b>formazione</b> della 
                        grande <b>onda</b> del <b>car design</b>.
                    </p>
                    <p>
                        Nella sezione troviamo anche le <b>interviste</b> a 14 <b>protagonisti</b> del <b>car design</b> a cui il <b>museo</b> ha 
                        posto 14 <b>domande</b>: le stesse domande per tutti, 14 <b>punti di vista</b> differenti che ci permettono di mettere 
                        a <b>confronto</b> (nello <b>schermo interattivo</b> sottostante l’<b>istallazione</b>) <b>carriere</b>, <b>profili</b> e <b>percorsi</b>. 
                        Nel medesimo spazio, due nuove <b>vetrine</b> si aggiungono alle precedenti, dedicate a <b>Lorenzo Ramaciotti</b> – <b>Head of 
                        Design</b> di <b>FCA</b> – e a <b>Roberto Giolito</b> – <b>Direttore Stile Fiat</b>.
                    </p>
                    <p>
                        L’<b>open garage</b> ospita le <b>vetture</b> della <b>collezione</b> che non trovano posto nel <b>percorso</b>. Uno <b>spazio 
                        vivo</b> dove le vetture possono essere <b>mantenute</b>, <b>restaurate</b> e <b>conservate</b>, oltre che <b>osservate</b> e <b>studiate</b>. <b>Visitabile</b> su <b>prenotazione</b>, 
                        il <b>garage</b> del <b>Mauto</b> accoglierà l’<b>officina</b> e la <b>scuola di restauro</b>, grazie alla quale si potranno coinvolgere 
                        operativamente <b>professionisti</b> del settore delle <b>auto d’epoca</b>, <b>artigiani</b> ed <b>esperti</b> che 
                        affiancheranno <b>giovani allievi</b> così da promuovere un <b>passaggio intergenerazionale</b> delle <b>competenze</b> e si darà 
                        l’opportunità, grazie alla <b>rete di collaborazioni</b> che il <b>museo</b> sta intessendo sia a livello <b>nazionale</b> che <b>internazionale</b>, 
                        di far conoscere e di <b>valorizzare</b> l’<b>immenso bacino</b> di <b>talenti</b>, l’<b>estro creativo</b>, l’<b>artigianalità</b> e 
                        le <b>capacità imprenditoriali</b> esistenti a <Link href='/destinazioni/piemonte/torino' className='text-decoration-none color_link'>Torino</Link> e 
                        in <Link href='/piemonte' className='text-decoration-none color_link'>Piemonte</Link>.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.432088471965!2d7.671444112209357!3d45.03188586636032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478812ba8eef5987%3A0xcfc6e9696ae6132!2sMuseo%20Nazionale%20dell&#39;Automobile%20-%20Torino!5e1!3m2!1sit!2sit!4v1712589752518!5m2!1sit!2sit"
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
