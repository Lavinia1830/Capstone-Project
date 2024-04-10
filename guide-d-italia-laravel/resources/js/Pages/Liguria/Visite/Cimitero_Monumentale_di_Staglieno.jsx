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
                    Il Cimitero di Staglieno fu aperto ufficialmente al pubblico il 1° Gennaio 1851. Sebbene a questa data fosse ancora largamente incompiuto, ne era peraltro ormai tracciata la specifica fisionomia architettonica, funzionale e simbolica.
                </p>
                <p>
                    L'incarico della progettazione era stato affidato già nel 1835 all'architetto civico Carlo Barabino (1768-1835) - a lui si deve gran parte delle fattezze neoclassiche di Genova e la realizzazione di edifici rappresentativi come il Teatro Carlo Felice, il Palazzo dell'Accademia 
                    e tanti altri - il quale però non riuscì a portare a termine l'incarico per l'improvvisa morte nel 1835 durante la grande epidemia di colera. Il compito di sviluppare il progetto fu affidato, allora, al suo allievo e collaboratore Giovanni Battista Resasco (1798-1871), il cui 
                    piano fu approvato nel 1840. I lavori iniziarono nel 1844 nell'area di Villa Vaccarezza a Staglieno, in gran parte ancora poco abitata e non molto distante dal centro cittadino.
                </p>
                <p>
                    Del progetto barabiniano Resasco mantenne la struttura quadrangolare come nucleo di base, accentuandone il carattere monumentale. La forte suggestione di questo impianto architettonico è tuttora percepibile e suscitava grande ammirazione nei contemporanei che, entrati dall'ingresso 
                    principale, si trovavano immersi in questa ampia scenografia, costituita dal succedersi di porticati monumentali, stilisticamente omogenei, culminanti nella imponente architettura del Pantheon.
                </p>
                <p>
                    Una volta portata a termine, fra gli anni Sessanta e Ottanta, la struttura complessiva del cimitero, l'effetto veniva a essere esaltato nel suo insieme dall'inserimento nel contesto ambientale naturale. Il Pantheon infatti, contornato dai porticati superiori, collegati attraverso la 
                    monumentale scalinata a quelli inferiori si adagiava sulla verde collina retrostante - la zona dei Boschetti e della Valletta Pontasso - che, popolata da una sempre più fitta vegetazione ospitava cappelle e monumenti disseminati e seminascosti nel verde (in quest'area si trovano la 
                    Tomba di Giuseppe Mazzini e quelle di molti protagonisti del Risorgimento).
                </p>
                <p>
                    Un'integrazione paesistica che fu ulteriormente accentuata nel tempo con alcuni ampliamenti specificamente naturalistici, quali l'area acattolica e il cimitero degli Inglesi, approntati negli ultimi decenni del XIX secolo e nel primo del XX. La scelta del Resasco risultò dunque 
                    particolarmente vincente e segnò la fortuna di Staglieno come modello nazionale ed internazionale di riferimento: vi si combinavano, infatti, la tipologia del Cimitero architettonico neoclassico, di tradizione mediterranea, sempre più caratterizzatosi nel corso del tempo come "galleria" 
                    di monumenti, e quello di tipo naturalistico, più specifico, dopo gli anni quaranta, dell'area nordeuropea e anglosassone (a cominciare da quello parigino del Père Lachaise).
                </p>
                <p>
                    La crescita della città, che in quegli anni stava divenendo uno dei principali centri industriali e commerciali dell'Italia Settentrionale, impose ben presto nuovi ampliamenti. Lo stesso Resasco, nel 1868 propose un ampliamento a nord-est tramite un nuovo porticato semicircolare; un'analoga 
                    costruzione avrebbe dovuto essere realizzata in seguito, simmetricamente. Il progetto trovò applicazione parziale solo negli anni Novanta dell'Ottocento, con la costruzione del Porticato semicircolare a nord-est, divenuto ben presto anch'esso galleria monumentale, ricca di opere liberty e 
                    déco. Le ulteriori continue esigenze di sviluppo portarono da una parte all'ampliamento, in epoche diverse, dei porticati (quello frontale in particolare) e dall'altra a nuove linee di espansione. Sulla direttrice della Valle del Veilino - che aveva già visto l'espandersi delle aree 
                    acattoliche - si costruirà negli anni Venti del Novecento il Porticato Montino, ricco di opere déco e "Novecento"; e, più a monte, il Sacrario ai Caduti della prima guerra mondiale (1935-1936); o, in quest'ultimo dopoguerra, il Porticato S. Antonino (i lavori iniziarono nel 1937, ma fu 
                    inaugurato nel 1955): ultimo intervento con ambizioni monumentali.
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
