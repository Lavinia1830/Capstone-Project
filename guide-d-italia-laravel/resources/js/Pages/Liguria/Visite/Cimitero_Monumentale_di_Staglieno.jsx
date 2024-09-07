import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Cimitero_Monumentale_di_Staglieno(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='cimitero_monumentale_di_staglieno' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Cimitero Monumentale di Staglieno</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
            </div>
            <div className="margin mt-3">
                <p>
                    Il <b>Cimitero di Staglieno</b> fu aperto ufficialmente al pubblico il <b>1° Gennaio 1851</b>. Sebbene a questa data fosse ancora largamente <b>incompiuto</b>, 
                    ne era peraltro ormai tracciata la <b>specifica fisionomia architettonica</b>, <b>funzionale e simbolica</b>.
                </p>
                <p>
                    L'incarico della progettazione era stato affidato già nel <b>1835</b> all'architetto civico <b>Carlo Barabino</b> (1768-1835) - a lui si deve gran parte delle 
                    fattezze <b>neoclassiche di Genova</b> e la realizzazione di edifici rappresentativi come il <b>Teatro Carlo Felice</b>, il <b>Palazzo dell'Accademia</b> 
                    e tanti altri - il quale però non riuscì a portare a termine l'incarico per l'improvvisa <b>morte nel 1835 durante la grande epidemia di colera</b>. Il compito 
                    di sviluppare il progetto fu affidato, allora, al suo allievo e collaboratore <b>Giovanni Battista Resasco</b> (1798-1871), il cui piano fu approvato 
                    nel <b>1840</b>. I lavori iniziarono nel <b>1844</b> nell'area di <b>Villa Vaccarezza</b> a <b>Staglieno</b>, in gran parte ancora poco abitata e non molto 
                    distante dal <b>centro cittadino</b>.
                </p>
                <p>
                    Del progetto barabiniano <b>Resasco mantenne la struttura quadrangolare</b> come nucleo di base, accentuandone il <b>carattere monumentale</b>. 
                    La <b>forte suggestione</b> di questo impianto architettonico è tuttora percepibile e suscitava <b>grande ammirazione</b> nei contemporanei che, entrati 
                    dall'ingresso principale, si trovavano immersi in questa <b>ampia scenografia</b>, costituita dal <b>succedersi di porticati monumentali</b>, stilisticamente 
                    omogenei, culminanti nella <b>imponente architettura del Pantheon</b>.
                </p>
                <p>
                    Una volta portata a termine, fra gli anni Sessanta e Ottanta, <b>la struttura complessiva del cimitero</b>, l'effetto veniva a essere esaltato nel suo insieme 
                    dall'inserimento nel <b>contesto ambientale naturale</b>. Il Pantheon infatti, contornato dai porticati superiori, collegati attraverso la monumentale scalinata 
                    a quelli inferiori si adagiava sulla <b>verde collina retrostante</b> - la zona dei Boschetti e della Valletta Pontasso - che, popolata da una sempre più fitta 
                    vegetazione ospitava <b>cappelle e monumenti disseminati e seminascosti nel verde</b> (in quest'area si trovano <b>la Tomba di Giuseppe Mazzini</b> e quelle di 
                    molti protagonisti del Risorgimento).
                </p>
                <p>
                    <b>Un'integrazione paesistica</b> che fu ulteriormente accentuata nel tempo con alcuni ampliamenti specificamente naturalistici, quali <b>l'area acattolica e 
                    il cimitero degli Inglesi</b>, approntati negli ultimi decenni del XIX secolo e nel primo del XX. La scelta del <b>Resasco risultò dunque particolarmente 
                    vincente</b> e segnò la fortuna di Staglieno come <b>modello nazionale ed internazionale di riferimento</b>: vi si combinavano, infatti, la tipologia 
                    del <b>Cimitero architettonico neoclassico</b>, di tradizione mediterranea, sempre più caratterizzatosi nel corso del tempo come "galleria" di monumenti, e 
                    quello di tipo naturalistico, più specifico, dopo gli anni quaranta, dell'area nordeuropea e anglosassone (a cominciare da quello parigino del Père Lachaise).
                </p>
                <p>
                    La <b>crescita della città</b>, che in quegli anni stava divenendo uno dei principali centri industriali e commerciali dell'Italia Settentrionale, impose ben 
                    presto <b>nuovi ampliamenti</b>. Lo stesso <b>Resasco</b>, nel 1868 propose un ampliamento a <b>nord-est</b> tramite un nuovo porticato semicircolare; un'analoga 
                    costruzione avrebbe dovuto essere realizzata in seguito, <b>simmetricamente</b>. Il progetto trovò applicazione parziale solo negli <b>anni Novanta dell'Ottocento</b>, 
                    con la costruzione del <b>Porticato semicircolare a nord-est</b>, divenuto ben presto anch'esso <b>galleria monumentale</b>, ricca di opere <b>liberty e déco</b>. 
                    Le ulteriori continue esigenze di sviluppo portarono da una parte all'<b>ampliamento</b>, in epoche diverse, dei porticati (quello frontale in particolare) e 
                    dall'altra a <b>nuove linee di espansione</b>. Sulla direttrice della <b>Valle del Veilino</b> - che aveva già visto l'espandersi delle aree <b>acattoliche</b> - 
                    si costruirà negli anni Venti del Novecento il <b>Porticato Montino</b>, ricco di opere déco e "<b>Novecento</b>"; e, più a monte, il <b>Sacrario ai Caduti della 
                    prima guerra mondiale (1935-1936)</b>; o, in quest'ultimo dopoguerra, il <b>Porticato S. Antonino</b> (i lavori iniziarono nel 1937, ma fu inaugurato nel 1955): 
                    ultimo intervento con ambizioni monumentali.
                </p>
            </div>
            <div className='margin mb-4'>
                <h3 className='color-subtitle text-center'>Mappa</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6744.499289043103!2d8.944968224282944!3d44.42985103958567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d344741670339d%3A0xdb14fceb1d050f57!2sStaglieno%20Cimitero%20Monumentale!5e1!3m2!1sit!2sit!4v1712751474980!5m2!1sit!2sit"
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
