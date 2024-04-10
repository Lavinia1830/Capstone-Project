import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Image } from 'react-bootstrap';
import PalazzoDucale_Saloni1 from '../../../../../assets/Liguria/PalazzoDucale_Saloni_1.jpg';
import PalazzoDucale_Saloni2 from '../../../../../assets/Liguria/PalazzoDucale_Saloni_2.jpg';
import PalazzoDucale_Saloni3 from '../../../../../assets/Liguria/PalazzoDucale_Saloni_3.jpg';
import PalazzoDucale_Saloni4 from '../../../../../assets/Liguria/PalazzoDucale_Saloni_4.jpg';
import PalazzoDucale_Saloni5 from '../../../../../assets/Liguria/PalazzoDucale_Saloni_5.jpg';
import PalazzoDucale_Saloni6 from '../../../../../assets/Liguria/PalazzoDucale_Saloni_6.jpg';
import PalazzoDucale_Saloni7 from '../../../../../assets/Liguria/PalazzoDucale_Saloni_7.jpg';



export default function I_Saloni(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='i_saloni' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>I Saloni</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
            </div>
            <div className="margin mt-3">
                <h2 className='color-subtitle'>La Sotia</h2>
                <p>
                    Il corpo centrale del Palazzo è occupato dalle sale del Minore e del Maggiore Consiglio, spazi che nel progetto cinquecentesco del Vannone rappresentavano il cuore e il centro compositivo del Palazzo. Le sale che vediamo oggi sono quelle ricostruite dopo l’incendio del 
                    1777 dall’architetto Simone Cantoni, autore anche delle celebri coperture delle stesse a forma di carena rovesciata e della facciata su piazza Matteotti. 
                </p>
                <h2 className="color-subtitle">Sala del Maggior Consiglio</h2>
                <hr className='border-3'/>
                <p>
                    L’immagine che offre oggi al visitatore il Salone del Maggior Consiglio è quella neoclassica settecentesca riferibile al restauro di Simone Cantoni avvenuto dopo il furioso incendio del 1777. Tutto sommato però le dimensioni restano quelle della “Sala Grande” trecentesca e 
                    del Salone vannoniano di fine Cinquecento.
                </p>
                <p>
                    In questa sala si riunivano i 400 nobili che amministravano la Repubblica, in base alla riforma aristocratica di Andrea Doria del 1528, ma si ha notizia anche di banchetti, danze, concerti e spettacoli di carnevale in netto contrasto con l’austerità e la severità del governo 
                    di un’importante Repubblica racchiuso all’interno di un palazzo-fortezza. Questo è spiegabile, secondo alcuni storici, poiché Genova a partire dal Seicento aveva ormai perso le sue peculiarità di repubblica mercantile e militare per assumere il ruolo di potenza economica e 
                    bancaria in grado di gestire gli ingenti flussi di metalli preziosi provenienti dalle Americhe.
                </p>
                <p>
                    Al Cantoni si deve, oltre che alla ricostruzione di questo salone e di quello del Minor Consiglio e della facciata con ardite innovazioni ingegneristiche, anche la realizzazione di un complesso programma decorativo neoclassico in sostituzione di quanto realizzato dal Vannone nel 
                    1591.
                </p>
                <p>
                    Se gli stucchi della volta furono affidati al milanese Carlo Fozzi, del genovese Andrea Casaregi sono le staue in gesso con le allegorie della <i>Concordiae</i> della <i>Pace</i> ai lati del grande portale d’ingresso. Nicolò Traverso e Francesco Ravaschio eseguirono rispettivamente 
                    le altre due statue della <i>Giustizia</i> e della <i>Fortezza</i> che affiancavano il trono del Doge in fondo al Salone.
                </p>
                <p>
                    Il trono fu distrutto, insieme alle statue di <i>Uomini Illustri</i> che erano posizionate nelle otto nicchie laterali e alle statue dei Doria della scalinata d’ingresso della piazza. Artefice di tale scempio fu la rivolta giacobina del 1797 che, sopprimendo i simboli del potere 
                    nobiliare, segnarono la fine della Repubblica aristocratica.
                </p>
                <p>
                    Sopra l’ingresso principale si trova <i>La battaglia della Meloria</i> ad opera di Giovanni David (Cabella 1743 – Genova 1790) a memoria della battaglia navale del 1284 durante la quale Genova sconfisse definitivamente la nemica Pisa, un’altra delle quattro repubbliche marinare 
                    assieme a Venezia e Amalfi.
                </p>
                <p>
                    Sul fronte opposto, al di sopra dello stemma reale dei Savoia, ancora su bozzetto del David, Emanuele Tagliafichi rappresentò <i>Il Doge Leonardo Montaldo restituisce la libertà al Re di Cipro, Jacopo da Lusignano</i>.
                </p>
                <p>
                    Il progetto di Simone Cantoni fu anche di interventi eccezionali, come nel caso del lavoro di Giandomenico Tiepolo, allievo e collaboratore del padre Giambattista, che sulla volta realizzò il grande affresco <i>La Liguria e le glorie della famiglia Giustiniani</i> realizzato tra il 
                    1783 e 1785 e andato perduto poco dopo.
                </p>
                <p>
                    L’affresco venne sostituito dal dipinto tutt’ora visibile di Giuseppe Isola (Genova 1808 – 1893) raffigurante <i>L’allegoria del commercio dei Liguri</i> realizzato nel 1875.
                </p>
                <p>
                    L’assetto decorativo fu completato in fretta e furia in occasione della visita di Napoleone a Genova in città nel 1805 con una serie di di grandi tele chiaro scure di soggetto mitologico e con sagome di putti inseriti nelle nicchie quadrangolari.
                </p>
                <p>
                    I grandi lampadari attualmente visibili, sono stati realizzati appositamente per la riapertura del Palazzo al pubblico nel 1992. 
                </p>
                <h2 className="color-subtitle">Interno</h2>
                <p>
                    Dal secolo XVI fino a gran parte del XVII la Torre subì modifiche interne considerevoli, in seguito alla sua trasformazione in carcere: ebbe i piani dimezzati e notevoli variazioni nelle aperture. <br/>
                    In particolare la cella – sottostante alla triplice fila di archetti – ebbe le primitive monofore trasformate in bifore per esigenze statiche dopo l’innalzamento cinquecentesco.<br/>
                    La muratura perimetrale à rimasta in sostanza quella originaria.<br/>
                </p>
                <div className='row d-flex justify-content-evenly mx-0 mb-4'>
                    <Image src={PalazzoDucale_Saloni1} className='col-4 px-0 w-sm-50 w-md-50 w-lg-50 m-2'/>
                    <Image src={PalazzoDucale_Saloni2} className='col-4 px-0 w-sm-50 w-md-50 w-lg-50 m-2'/>
                    <Image src={PalazzoDucale_Saloni3} className='col-4 px-0 w-sm-50 w-md-50 w-lg-50 m-2'/>
                    <Image src={PalazzoDucale_Saloni4} className='col-4 px-0 w-sm-50 w-md-50 w-lg-50 m-2'/>
                    <Image src={PalazzoDucale_Saloni5} className='col-4 px-0 w-sm-50 w-md-50 w-lg-50 m-2'/>
                    <Image src={PalazzoDucale_Saloni6} className='col-4 px-0 w-sm-50 w-md-50 w-lg-50 m-2'/>
                </div>
            </div>
            <div className="margin mt-3">
                <h2 className="color-subtitle">Sala del Minor Consiglio</h2>
                <hr className='border-3'/>
                <p>
                    Disposto verso Nord, era denominato per la sua collocazione sede del “Consiglietto d’Estate” da utilizzarsi nei mesi caldi dell’anno.<br/>
                    Il Minor Consiglio era composto da 100 membri e aveva giurisdizione, fra le altre cose, sui possedimenti genovesi d’oltremare. L’esempio forse più significativo di queste competenze di governo è rappresentato da una decisione del 1768 quando Genova 
                    cedette definitivamente la Corsica alla Francia. Curiosamente Napoleone Bonaparte nacque ad Ajaccio un anno dopo.
                </p>
                <p>
                    L’apparato decorativo di questo ambiente fu affidato dal Cantoni allo pittore e scrittore d’arti Carlo Giuseppe Ratti allora direttore della scuola di pittura dell’Accademia Linguistica. A Carlo Barabino fu invece affidata la realizzazione della balaustra 
                    circolare in marmo (Esedra) che delimitiva lo spazio del Doge.
                </p>
                <p>
                    Il Ratti, fra i massimi esponenti del primo neoclassicismo in Liguria, con un occhio alla tradizione barocca, riprese ancora una volta i temi dell’autocelebrazione con <i>lo sbarco di Colombo nelle Indie</i> sopra l’ingresso principale e <i>L’arrivo a Genova 
                    delle Ceneri del Battista</i> di fronte.
                </p>
                <p>
                    Sul soffitto, fra i monocromi <i>La Liguria sparge tesori alle Provincie e Giano sacrifica alla Pace</i>, campeggia <i>L’apoteosi della Repubblica con l’allegoria della Divina Sapienza</i> ripresa da un bozzetto di Domenico Piola.
                </p>
                <div className='row d-flex justify-content-evenly mx-0 mb-4'>
                    <Image src={PalazzoDucale_Saloni7} className='col-4 px-0 w-sm-50 w-md-50 w-lg-50 m-2'/>
                </div>
            </div>
        </main>
        <Footer/>
    </AuthenticatedLayout>
  )
}
