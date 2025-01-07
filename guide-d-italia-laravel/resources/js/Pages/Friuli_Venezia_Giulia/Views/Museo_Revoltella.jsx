import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Museo_Revoltella(props) {

    const [is1992, setIs1992] = useState(false);

    const toggle1992 = () => {
        setIs1992(!is1992);
    };

    const [is1993, setIs1993] = useState(false);

    const toggle1993 = () => {
        setIs1993(!is1993);
    };

    const [is1994, setIs1994] = useState(false);

    const toggle1994 = () => {
        setIs1994(!is1994);
    };

    const [is1995, setIs1995] = useState(false);

    const toggle1995 = () => {
        setIs1995(!is1995);
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='museo_revoltella' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Museo Revoltella</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">La storia</h2>
                    <p>
                        Situato nel centro di Trieste a poca distanza dalla riva del mare, il Museo Revoltella è una galleria d’arte moderna fondata nel 1872 per volontà del barone Pasquale Revoltella (1795-1869), una delle figure più rappresentative della società triestina dell’Ottocento, che lasciò alla città, 
                        oltre a molti altri beni, la sua casa e tutte le opere d’arte, gli arredi e i libri che conteneva.
                    </p>
                    <p>
                        Il palazzo originario, un’elegante costruzione neorinascimentale di tre piani, edificata tra il 1854 e il 1858 su progetto del berlinese Friedrich Hitzig, si affaccia su piazza Venezia, un tempo chiamata piazza Giuseppina in memoria dell’imperatore austriaco (Giuseppe II, figlio di Maria 
                        Teresa) sotto il quale, alla fine del ‘700, era avvenuta l’espansione di quest’area della città.<br/>
                        Grazie alla disponibilità finanziaria lasciata dal fondatore per il mantenimento e lo sviluppo dell’istituzione, ma anche per svolgere una funzione educativa nei confronti dei giovani artisti e degli artigiani, in pochi decenni il Museo Revoltella si arricchì di un cospicuo numero di opere 
                        d’arte di notevole valore (spesso acquistate alle prime Esposizioni internazionali, tra cui la Biennale di Venezia) che resero necessario l’ampliamento della sede.
                    </p>
                    <p>
                        Una rappresentativa selezione delle numerosissime opere acquisite dal 1872 in poi occupa, invece, gli spazi completamente rinnovati di palazzo Brunner, articolata in quattro piani secondo la seguente sistemazione: al terzo piano gli autori italiani del secondo Ottocento (Fattori, Induno, 
                        Palizzi, Morelli), al quarto piano gli acquisti effettuati – tra la fine dell’Ottocento e la prima guerra mondiale – alle Esposizioni internazionali (De Nittis, Nono, Ciardi, Trentacoste, Canonica, Bistolfi, Carena, von Stuck, Zuloaga), al quinto piano gli artisti del primo Novecento a 
                        Trieste e in Italia (Marussig, Bolaffio, Timmel, Dudovich, Casorati, Sironi, Carrà, de Chirico, Martini) e,in una galleria più piccola, gli artisti del Friuli-Venezia Giulia degli ultimi cinquant’anni (Zigaina, Afro, Dino e Mirko Basaldella, Spacal, Perizi) mentre i protagonisti del 
                        panorama nazionale del secondo Novecento trovano posto nella grande sala del sesto piano che si apre alla vista della città e del mare. Da qui si può uscire sulla grande terrazza, disegnata pure da Carlo Scarpa, e vedere uno splendido panorama. Nelle sere d’estate (dal 15 luglio ai 
                        primi di settembre, da giovedì a domenica) in questi spazi è in funzione un caffè aperto fino a mezzanotte.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className='color-subtitle'>La storia del Museo anno per anno</h2>
                    <table>
                        <tbody>
                            <tr className='border'>
                                <div className='p-2'>
                                    <h3>1992 <span onClick={toggle1992} className='float-right'> {is1992 ? <i className="bi bi-chevron-down"></i> : <i className="bi bi-chevron-up"></i>} </span></h3>
                                    <div className={is1992 ? 'border-top' : 'h-0 overflow-hidden position-relative'}>
                                        <p className='p-2'>
                                            Alla fine del 1991 terminano i lavori di ristrutturazione della Galleria d’arte moderna, ospitata a Palazzo Brunner, vasto edificio ottocentesco adiacente a Palazzo Revoltella. Erano iniziati alla metà degli anni Sessanta, dopo l’affidamento del progetto a Carlo Scarpa, ed 
                                            erano continuati, fra molte interruzioni, per oltre vent’anni. La fase finale è diretta dall’architetto Giampaolo Bartoli. Non appena gli spazi sono disponibili, nella primavera del 1992 vengono selezionate circa 350 opere del patrimonio di pittura e scultura posseduto dal museo, 
                                            e il 13 giugno il Revoltella viene finalmente riaperto al pubblico con una mostra che si intitola “Da Canova a Burri. Il museo in mostra”.
                                        </p>
                                    </div>
                                </div>
                            </tr>
                            <tr className='border'>
                                <div className='p-2'>
                                    <h3>1993 <span onClick={toggle1993} className='float-right'> {is1993 ? <i className="bi bi-chevron-down"></i> : <i className="bi bi-chevron-up"></i>} </span></h3>
                                    <div className={is1993 ? 'border-top' : 'h-0 overflow-hidden position-relative'}>
                                        <p className='p-2'>
                                            La città riscopre a poco a poco il Museo Revoltella, che molti avevano dimenticato. La rinascita non è comunque facile. Occorre ricostruire una rete di rapporti attorno al museo e, soprattutto, occorre riorganizzare l’attività, che purtroppo non può contare su una struttura 
                                            adeguata e su risorse finanziarie proporzionate all’importanza del museo. Tuttavia si riesce ad avviare un processo di normalizzazione, sia pure lento, e ricominciano a funzionare quasi tutti i servizi, la biblioteca, la didattica, la ricerca. In ottobre si apre una mostra 
                                            antologica di Cesare Sofianopulo (1889-1968) uno dei personaggi più originali del Novecento triestino, figura molto rappresentativa di quella generazione che si era formata ai tempi dell’Austria e aveva vissuto da protagonista il passaggio della città all’Italia.
                                        </p>
                                    </div>
                                </div>
                            </tr>
                            <tr className='border'>
                                <div className='p-2'>
                                    <h3>1994 <span onClick={toggle1994} className='float-right'> {is1994 ? <i className="bi bi-chevron-down"></i> : <i className="bi bi-chevron-up"></i>} </span></h3>
                                    <div className={is1994 ? 'border-top' : 'h-0 overflow-hidden position-relative'}>
                                        <p className='p-2'>
                                            Si decide di organizzare una mostra sul paesaggio dell’Ottocento e del Novecento, suggerita dalla scoperta, avvenuta durante il riordino delle collezioni precedente alla riapertura del ’92, di un consistente nucleo di dipinti di questo genere, tra cui parecchi provenienti 
                                            dalla collezione del barone Revoltella. La mostra si intitola “Punti di vista. Il paesaggio dalle collezioni del Revoltella alla cultura contemporanea” e comprende anche alcune sezioni dedicate alla fotografia, al disegno, all’editoria, alla tutela dell’ambiente, all’arte 
                                            contemporanea. E’ la prima mostra interdisciplinare, che vede impegnato un folto gruppo di collaboratori.<br/>
                                            Dalla primavera il museo supera i gravi problemi di sorveglianza grazie alla collaborazione di due associazioni, gli “Amici dei Musei” e “Cittaviva”, che mettono a disposizione oltre cinquanta volontari, e viene finalmente aperto alla visita con un orario giornaliero di 
                                            apertura molto ampio.<br/>
                                            In autunno si realizza una mostra di disegni dell’architetto Enrico Nordio (1851-1923) provenienti dalla collezione dell’Istituto Statale d’Arte di Trieste.
                                        </p>
                                    </div>
                                </div>
                            </tr>
                            <tr className='border'>
                                <div className='p-2'>
                                    <h3>1995 <span onClick={toggle1995} className='float-right'> {is1995 ? <i className="bi bi-chevron-down"></i> : <i className="bi bi-chevron-up"></i>} </span></h3>
                                    <div className={is1995 ? 'border-top' : 'h-0 overflow-hidden position-relative'}>
                                        <p className='p-2'>
                                            Partono con quest’anno le ricerche sul secondo Novecento, incentrate soprattutto sullo sviluppo del museo sia per quanto riguarda il progetto di ampliamento della sede (da Scarpa in avanti) sia in termini di crescita del patrimonio. Da qui nasce l’idea della mostra 
                                            “Anni fantastici. Arte a Trieste dal 1948 al 1972” che descrive il contesto culturale con cui si confronta in quegli anni l’attività del Revoltella. Il ’95 è un anno intensissimo. Si opera su tematiche molto diverse ma tutte stimolanti: la mostra “Dualità. Aspetti 
                                            della cultura slovena a Trieste” amplia la ricerca di “Anni fantastici” alle vicende culturali di ambito sloveno, mentre “Dall’aquila al leone” introduce, attraverso la storia delle Assicurazioni Generali, la grande mostra (“Sogno e consapevolezza del cosmopolitismo 
                                            triestino”) dedicata alla figura di Pasquale Revoltella nel bicentenario della nascita. L’estate è dedicata a un protagonista della pop art americana, James Rosenquist, che progetta personalmente la mostra della sua produzione recente per il Museo Revoltella. L’anno 
                                            del centenario della Biennale, istituzione a cui il museo è strettamente legato perché lì furono fatti i più importanti acquisti della sua storia, si chiude con una grande mostra intitolata “Arte d’Europa tra due secoli 1894-1914. Trieste, Venezia e le Biennali” e 
                                            organizzata assieme alla Galleria di Ca’Pesaro.
                                        </p>
                                    </div>
                                </div>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1513.627860688913!2d13.762044403152261!3d45.64737952109725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477b6b776516d04d%3A0x53ba2ad55eda9f37!2sMuseo%20Revoltella!5e1!3m2!1sit!2sit!4v1713183526588!5m2!1sit!2sit"
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
