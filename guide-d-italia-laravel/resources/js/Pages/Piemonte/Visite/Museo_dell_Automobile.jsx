import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Museo_dell_Automobile(props) {
  return (
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
                    Il Museo Nazionale dell’Automobile di Torino è stato inaugurato il 19 marzo del 2011. Il suo aspetto, contemporaneo e avveniristico, è stato ideato e progettato dall’architetto Cino Zucchi e 
                    l’innovativo spazio espositivo è stato firmato dallo scenografo François Confino. L’investimento complessivo del Museo è stato di 33 milioni di euro, di cui 22 milioni destinati alla 
                    ristrutturazione dell’edificio e 11 milioni agli allestimenti interni. Gli spazi, quasi raddoppiati nel 2011, sono passati dagli 11.000 mq della struttura originale agli oltre 19.000 mq di quella 
                    attuale, raccontano la storia dell’automobile insieme alla storia di una cultura e di una società attraverso un percorso unico al mondo per linguaggio e per patrimonio.
                </p>
                <p>
                    Un nuovo sistema multimediale e interattivo unico al mondo per livello di approfondimento, 32 Ipad fissi all’ingresso di ciascuna sezione e a disposizione dei visitatori, QRcode su tutte le 
                    automobili e i pannelli di sezione, 20 nuovi video, 3 nuove vetture, una serie di completamenti scenografici lungo tutto il percorso espositivo, uno spazio interamente dedicato al design, il grande 
                    garage finalmente visitabile (su prenotazione) e un’officina che accoglierà la Scuola di Restauro: sono solo alcune delle tantissime novità che da settembre 2014 hanno completato il progetto di 
                    ristrutturazione del Museo Nazionale dell’Automobile di Torino “Avv.Giovanni Agnelli” avviato dieci anni fa, nel 2004.
                </p>
                <p>
                    Ad essere protagoniste sono le nuove tecnologie digitali che funzionano grazie all’istallazione di una nuova rete Wi-Fi per incrementare le possibilità interattive e sviluppare la comunicazione 
                    multimediale all’interno dell’intero percorso museale. Sarà possibile per i visitatori scoprire il vastissimo patrimonio di informazioni e dati raccolti dal Museo: approfondimenti storici, immagini 
                    d’archivio, schede tecniche sulle vetture e sui carrozzieri saranno consultabili attraverso tablet e smartphone personali, totem multimediali o Ipad in affitto.
                </p>
                <p>
                    Un vero e proprio Albero della Conoscenza costituito da un tronco – le 30 sezioni più l’Open Garage che compongono l’itinerario di visita ciascuna delle quali è descritta da un pannello 
                    introduttivo – dai rami – le storie collegate alle vetture esposte in ciascuna sezione – e dalle foglie – approfondimenti sempre più accurati e moltiplicabili. L’albero cresce se alimentato dalla 
                    partecipazione e dal contributo dei visitatori.
                </p>
                <p>
                    Questo sistema, concepito per essere <i>in progress</i>, è in grado di monitorare le preferenze dei visitatori o trasformare le carenze da loro riscontrate in suggerimenti e spunti. In questo modo il 
                    Museo raccoglierà i desiderata degli utenti, in modo da poter valutare punti di forza e debolezze sia del percorso espositivo che del sistema interattivo di informazione ed approfondimento.
                </p>
                <p>
                    Il design è il cuore pulsante del Museo, lo spazio che racconta la creatività all’opera, l’idea che diventa sostanza grazie all’applicazione e al lavoro di squadra. Il piano terra è stato completamente 
                    riallestito con spettacolari scenografie finalizzate a promuovere una più ampia conoscenza del car design, della sua evoluzione storica, degli uomini che ne hanno determinato i cambiamenti  e gli 
                    orientamenti presenti e futuri.
                </p>
                <p>
                    L’Onda del car design è strutturata come una time-line che racconta, periodo per periodo, la storia della motorizzazione, dell’industria, della società e della cultura automobilistica: in ogni periodo 
                    si inseriscono i nomi dei più grandi car designers, con una breve biografia che ne racconta la carriera. Un percorso professionale che viene rappresentato anche graficamente da una linea. Talvolta la 
                    linea finisce insieme alla carriera, in altri casi dà origine a una tradizione di famiglia. In ogni caso ogni personaggio lascia una propria impronta ed un proprio contributo alla formazione della grande 
                    onda del car design.
                </p>
                <p>
                    Nella sezione troviamo anche le interviste a 14 protagonisti del car design a cui il museo ha posto 14 domande: le stesse domande per tutti, 14 punti di vista differenti che ci permettono di mettere a 
                    confronto (nello schermo interattivo sottostante l’istallazione) carriere, profili e percorsi. Nel medesimo spazio, due nuove vetrine si aggiungono alle precedenti, dedicate a Lorenzo Ramaciotti – Head of 
                    Design di FCA – e a Roberto Giolito – Direttore Stile Fiat.
                </p>
                <p>
                    L’open garage ospita le vetture della collezione che non trovano posto nel percorso. Uno spazio vivo dove le vetture possono essere mantenute, restaurate e conservate, oltre che osservate e studiate. 
                    Visitabile su prenotazione, il garage del Mauto accoglierà l’officina e la scuola di restauro, grazie alla quale si potranno coinvolgere operativamente professionisti del settore delle auto d’epoca, 
                    artigiani ed esperti che affiancheranno giovani allievi così da promuovere un passaggio intergenerazionale delle competenze e si darà l’opportunità, grazie alla rete di collaborazioni che il museo sta 
                    intessendo sia a livello nazionale che internazionale, di far conoscere e di valorizzare l’immenso bacino di talenti, l’estro creativo, l’artigianalità e le capacità imprenditoriali esistenti a Torino e in 
                    Piemonte.
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
  )
}
