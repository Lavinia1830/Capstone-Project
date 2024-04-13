import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Il_Ghetto(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='il_ghetto' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Il Ghetto</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Prima del Ghetto</h2>
                    <p>
                        Con un decreto del 29 marzo 1516 il senato della Serenissima Repubblica di Venezia rinchiudeva in un recinto separato gli ebrei presenti in città, segregandoli dal resto della popolazione: nasceva in tal modo il primo e più antico ghetto d’Italia.
                    </p>
                    <p>
                        Nei secoli precedenti l’istituzione del Ghetto, gli ebrei vissero, in prevalenza, nei paesi della terraferma veneta: poche furono le famiglie residenti in Venezia. Non trova più credito oggi tra gli studiosi la notizia che gli ebrei abbiano abitato l’isola della Giudecca, il cui nome 
                        deriverebbe piuttosto dal veneziano zudegà (famiglie giudicate e relegate nell’isola). I prestatori e i mercanti ebrei della terraferma erano esclusi da ogni corporazione e dal possesso di beni immobili, e costretti perciò, per vivere, a praticare il prestito su pegno o il piccolo commercio 
                        dell’usato (strazarìa). Essi avevano il permesso di soggiornare in città solo per un periodo non superiore ai quindici giorni consecutivi, durante i quali potevano praticare i loro commerci presso il mercato di Rialto, per poi tornare a Mestre. Alcuni potevano esercitare l’arte medica. Fino 
                        agli inizi del XVI secolo non fu ammessa una residenza stabile in città, tranne che nel breve periodo tra il 1382 e il 1397, quando, in una situazione di emergenza, fu stipulata una condotta (permesso) temporanea, durante la quale, nel 1386, gli ebrei poterono ottenere un terreno al Lido di 
                        Venezia per uso cimiteriale.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h3 className="color-subtitle">L’istruzione del Ghetto</h3>
                    <p>
                        Dopo la sconfitta veneziana di Agnadello (1509), in una difficile situazione socio-economica, lo Stato veneziano accolse ebrei nel centro storico, con la condotta del 1513, in cambio di un contributo annuo di 6500 ducati. Molte abitazioni vicino a Rialto ospitarono famiglie ebree, con grandi 
                        proteste, tuttavia, da parte dei frati predicatori. Nel 1515, allora, fu proposto in senato di mantenere gli ebrei in città, tenendo conto del loro apporto economico, ma di segregarli in zone appartate. Scartate le ipotesi di chiuderli nelle isole della Giudecca o di Murano, con il decreto 
                        del 29 marzo 1516, fu approvata la proposta di rinchiudere tutti gli ebrei in Ghetto Nuovo.
                    </p>
                    <p>
                        “Tutti gli ebrei che al momento si trovano ad abitare in diverse contrade della città e quelli che in seguito verranno, sono tenuti e devono andare immediatamente ad abitare uniti nelle case che si trovano in Ghetto, luogo capacissimo, presso S. Girolamo”.
                    </p>
                    <p>
                        Si stima che circa settecento ebrei, tedeschi, italiani e alcune famiglie levantine, siano entrati, in breve tempo, nelle case del Ghetto Nuovo, pagando un affitto aumentato di un terzo e sotto il controllo delle severe magistrature della Serenissima Repubblica. Gli ebrei, obbligati, in 
                        tutta Italia, a portare come segno distintivo una “O” gialla sugli abiti, furono invece costretti a indossare, a Venezia, un berretto giallo; ne erano esentati solo alcuni banchieri e i medici. Il ghetto fu cinto da alte mura, i cui portoni si chiudevano alla sera per aprirsi solo all’alba, 
                        mentre giorno e notte alcuni guardiani, pagati dagli ebrei stessi, sorvegliavano il recinto, girando anche per i canali circostanti.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h3 className="color-subtitle">Il termine ‘Ghetto’</h3>
                    <p>
                        Si discute molto sull’origine della parola ‘ghetto’. La parola appare nei vecchi documenti con varie grafie: ghèto, getto, ghetto, geto, ma a indicare spesso il luogo in cui furono rinchiusi gli ebrei, prima nel Ghetto Nuovo, poi nel Ghetto Vecchio. Quel “tratto di terreno chiamato il getto 
                        o il ghetto era la sede delle pubbliche fonderie, ove si gettavano le bombarde” e dunque “il luogo si chiamava el getto perché c’erano più di 12 fornaci e vi si fondeva il bronzo”. Ghetto, dunque, deriverebbe dal nome dell’isola dove esistevano le antiche fonderie. Questa è l’ipotesi che 
                        trova oggi i maggiori consensi tra gli studiosi, mentre altre etimologie appaiono più difficilmente accettabili. Spetta dunque a Venezia aver diffuso nel mondo la parola che indica segregazione e discriminazione sociale.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Le tre 'Nationi' (comunità) del Ghetto di Venezia nel XVI secolo</h2>
                    <p>
                        Da quel 1516 e fino al 1797, per circa tre secoli, la convivenza delle diverse entità etniche confluite sulla laguna (tedeschi, italiani, levantini e ponentini) comportò spesso tensioni per la diversità di usi, di lingua e di costumi, ma anche per il differente trattamento riservato dal 
                        governo veneziano ai vari gruppi sociali. Alla natione tedesca, comprendente anche gli italiani, rinchiusa nel Campo di Ghetto Nuovo, si aggiunse, infatti, dapprima, la natione levantina, che occupò le case delle vicine calli del Ghetto Vecchio nel 1541 e che fu composta da levantini 
                        ‘viandanti’ (di passaggio) e levantini ‘habitanti’ (residenti) con le loro famiglie. In un secondo momento, però, fu accolta anche la natione ponentina, costituita soprattutto dagli ebrei sefarditi cacciati dalla penisola iberica nel 1492: essa abitò nelle stesse calli, soprattutto a 
                        partire dalla condotta del 1589. Altri ebrei sefarditi, in seguito, ottennero, su loro esplicita richiesta, anche un nucleo di case vicine al ghetto nuovo, a formare, nel 1633, il Ghetto Nuovissimo. La storia della “università de gli Hebrei” (così era chiamata la comunità nel suo complesso) 
                        a Venezia fu dunque, per gran tempo, storia di minoranze, in una società composita, ma unita sempre da un profondo legame religioso.
                    </p>
                    <p>
                        Gli ebrei tedeschi (ashkenaziti) trovarono rifugio nelle terre venete per sfuggire alle  terribili persecuzioni che, fin dall’epoca delle crociate, provocarono massacri in molte città dell’Europa centro-orientale. Prestatori e mercanti, da quando furono rinchiusi nel Ghetto Nuovo, furono 
                        costretti a tenere i banchi di pegno a interesse controllato (furono tre, tra ‘500 e ‘600: il verde, il nero e il rosso) e a praticare solo il mercato dell’usato (strazarìa), sotto il severo controllo, soprattutto, dei magistrati al Cattavèr. In questa difficile condizione, tuttavia, essi 
                        riuscirono, già tra il 1528 e il 1532, a costruire le loro splendide sinagoghe maggiori (Scola Grande Tedesca e Scola Cantòn), nelle quali poter seguire il loro rito originario e alle quali si aggiunsero, successivamente, altre tre più piccole Scole sorte nel Campo (Kohanim, Mesullamim e 
                        Luzzatto). Essi mantennero viva, per più di un secolo dalla reclusione, la loro lingua yiddish; stamparono, inoltre, il loro formulario di preghiere (machazor), e operarono nella stamperia in ebraico di Daniel Bomberg, la più importante di Venezia.
                    </p>
                    <p>
                        Uniti ai tedeschi, gli italiani non formarono mai una natione autonoma. Emigrati da Roma o dall’Italia centrale, vissero in Ghetto Nuovo nelle stesse difficili condizioni dei tedeschi, ma anch’essi seppero mantenere vivo il loro culto, strutturare una solida organizzazione comunitaria 
                        interna e, soprattutto, costruire la loro sinagoga nel 1575 (Scola Italiana), accanto ai luoghi di culto tedesch.
                    </p>
                    <p>
                        Ben diverse furono invece le condizioni di vita della natione levantina e di quella ponentina, accolte, nella seconda metà del ‘500 (1541 e 1589), nelle calli vicine al Ghetto Nuovo. Divenuti sudditi dell’impero ottomano, gli ebrei levantini acquistarono un posto di prestigio nel grande 
                        commercio marittimo, perciò Venezia li accolse con favore, in vista del loro apporto all’economia della città. La Serenissima li pose sotto il controllo della magistratura dei Cinque Savi alla Mercanzia e concesse loro lo spazio aperto del Ghetto Vecchio, dove poterono avere un loro 
                        ospedale, una locanda, un ricovero per i mercanti di passaggio e dove poterono esibire la loro ricchezza non solo nella sontuosità del vestire, ma soprattutto nella esuberante decorazione della loro grande sinagoga, la Scola Levantina.
                    </p>
                    <p>
                        Nelle calli vicine, gli ebrei ponentini, profughi dalla penisola iberica dopo la cacciata del 1492, eredi della grande cultura dell’ebraismo spagnolo medievale, videro in Venezia, come disse uno dei loro più celebri intellettuali, Don Isacco Abrabanel, uno stato perfetto, dove regnava 
                        l’armonia dei poteri. Grande merito ebbe per favorire il loro insediamento in città il loro rappresentante Daniel Rodriga, per i vantaggi apportati dalle sue proposte all’economia lagunare; tanto che, in una condizione di favore, essi poterono erigere la più grande sinagoga del ghetto 
                        veneziano, la Scola spagnola, dove seguire, come i levantini, il rito sefardita, con propri libri di preghiera, mantenendo per molto tempo anche la loro lingua spagnola.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">La vita nel Ghetto (sec. XVII-XX)</h2>
                    <p>
                        Le differenti condizioni di vita tra le nationi crearono, per tutto il primo secolo di esistenza del ghetto, tensioni e attriti interni, ma nel primo ‘600 molte divergenze furono per gran parte superate: i tedeschi ottennero un limitato accesso anche al mercato esterno; levantini viandanti 
                        e habitanti trovarono un loro interno accordo; i ponentini consolidarono il loro prestigio fino a diventare la maggioranza all’interno del consiglio che rappresentava la comunità di fronte allo stato. Per molti storici questa fu l’età di maggior stabilità del ghetto veneziano. Negli anni 
                        in cui l’aristocrazia veneziana stava perdendo il proprio dominio sul Mediterraneo, trasformandosi sempre più in aristocrazia terriera, le possibilità commerciali di levantini e ponentini acquistarono un peso sempre più rilevante nell’economia dello stato, mentre un coinvolgimento del 
                        Ghetto Vecchio anche nella gestione dei “banchi per la povertà” del Ghetto Nuovo portò a un maggior equilibrio tra la varie nationi. Tale fase di stabilità interna favorì un ampio sviluppo degli studi e dell’attività culturale. Le dure imposizioni esterne, quali la proibizione dello studio 
                        del Talmud, o alcuni gravi eventi interni, quali la terribile peste del 1630, non furono di impedimento alla produzione di opere di alto valore.  Il grande fenomeno dell’editoria in ebraico, che nel secolo precedente aveva prodotto le più importanti opere della cultura ebraica, con l’apporto 
                        degli intellettuali ebrei, nelle stamperie gestite da Bomberg o da Giustiniani, da Bragadin o da Di Gara, continuò con la Stamparia Bragadina e Vendramina e con editori minori, con i quali pubblicarono i loro lavori i più noti rabbini del tempo. Fu l’epoca di Leon Modena, il più celebre 
                        rabbino veneziano, abile predicatore, autore di molte opere (tra le quali l’importante Historia de riti Hebraici), che seppe raccogliere attorno a sé un’élite culturale di prestigio; di Simone Luzzatto, noto per il suo famoso Discorso sullo stato degli ebrei veneziani; della poetessa Sara 
                        Copio Sullam, il cui Manifesto sull’immortalità dell’anima può essere ritenuto una vera e propria apologia dell’ebraismo; di Moshè Zacuto, che ispirò le sue poesie e i suoi drammi alla mistica luriana.
                    </p>
                    <p>
                        Furono, però, anni di una stabilità destinata a non ripetersi più, perché dopo i momenti di illusione e di delusione suscitati anche in Venezia dall’apparizione del falso messia Shabbatay Tzevì, la crisi della Repubblica Serenissima determinò anche, tra Seicento e Settecento, la crisi delle 
                        tre nationi del ghetto. Nel corso del XVIII secolo, infatti, le tasse imposte sul ghetto aumentarono, crebbe l’indebitamento pubblico e si aggravò la condizione del prestito, della quale era ritenuta responsabile l’intera comunità. La condotta del 1777 segnò, in questo senso, il momento di 
                        maggior tensione: i suoi articoli furono fortemente restrittivi nei confronti di molte attività concesse agli ebrei e a nulla valsero le timide aperture riparatrici della successiva condotta del 1788. La caduta della Repubblica e del ghetto erano imminenti. Anche se l’impoverimento della 
                        comunità ebraica, nel suo insieme, non impedì l’ascesa economica di alcune grandi famiglie, la condizione di diffusa miseria del ghetto è chiaramente documentata da un’inchiesta-anagrafe del settembre 1797: in quel censimento vengono registrati 1626 abitanti, in maggioranza di umile 
                        condizione, servitori, strazzaroli, bottegai; poche le famiglie benestanti, un sol rabbino.
                    </p>
                    <p>
                        In quell’anno le truppe francesi guidate da Napoleone abbatterono la Repubblica di Venezia e portarono la libertà anche agli ebrei, che divennero cittadini a tutti gli effetti. I portoni del ghetto furono abbattuti e nel campo di Ghetto fu innalzato l’albero della libertà. Il ghetto, in 
                        quanto luogo di segregazione e di discriminazione, dopo tre secoli di alterne vicende, non esisteva più.
                    </p>
                    <p>
                        Da allora, dopo la liberazione portata dalle truppe francesi, la storia degli ebrei di Venezia si sviluppò su linee simili a quelle degli altri ebrei d’Italia. La comunità veneziana partecipò alle lotte risorgimentali, portò il proprio contributo di sangue alla prima guerra mondiale, 
                        visse i terribili anni del fascismo e della Shoà, che vide morire nei campi di concentramento 246 suoi iscritti, rifiorì lentamente a nuova vita dopo la seconda guerra mondiale. Oggi, il ghetto, l’unico che mantenga intatta la sua fisionomia di calli e campielli, con le sue cinque splendide 
                        sinagoghe e il suo museo, sa ancora raccontare le memorie di una comunità che ha vissuto per secoli sulle isole della laguna, apportando spesso un alto contributo alla cultura veneta, come parte integrante della lunga storia della città di Venezia.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1433.8225800694704!2d12.325587499087316!3d45.445183581083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477eb1c1b3be9ee7%3A0xb57b5ab6ceb7ea08!2sGhetto%20Ebraico%20-%20Comunit%C3%A0%20Ebraica%20di%20Venezia!5e1!3m2!1sit!2sit!4v1712993791372!5m2!1sit!2sit"
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
