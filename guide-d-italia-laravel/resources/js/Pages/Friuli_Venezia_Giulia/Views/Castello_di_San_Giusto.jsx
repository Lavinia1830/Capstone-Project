import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';
import { Image } from 'react-bootstrap';
import La_Casa_del_Capitano from '../../../../assets/Friuli_Venezia_Giulia/La_Casa_del_Capitano_Trieste_Friuli_Venezia_Giulia.jpg';
import La_Fortezza_Triangolare from '../../../../assets/Friuli_Venezia_Giulia/La_Fortezza_Triangolare_Trieste_Friuli_Venzia_Giulia.jpg';
import I_restauri_degli_anni_Trenta from '../../../../assets/Friuli_Venezia_Giulia/I_Restauri_degli_anni_Trenta_Trieste_Friuli_Venezia_Giulia.jpg';

export default function Castello_di_San_Giusto(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='castello_di_san_giusto' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Castello di San Giusto</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">La storia</h2>
                    <p>
                        Sulla sommità del colle che domina Trieste si erge il Castello, che della città può essere considerato il simbolo. La storia di questo sito è lunga quanto quella della città: infatti dalla fine dell’età del Bronzo fino a tutta l’età del Ferro (1000 a. C.) un castelliere, l’abitato 
                        fortificato tipico della preistoria dell’arco altoadriatico, occupava la cima di questo colle, che è il più alto sulla riva del mare, strategicamente fondamentale per un controllo totale del territorio circostante. Da questo castelliere, nel corso della prima metà del primo millennio 
                        a. C., si sviluppa un centro abitato, il cui nome – Tergeste – è composto da Terg, radice indoeuropea che significa “mercato”, e dal suffisso veneto este, cioè “città”. Nella prima metà del II secolo a.C. i Romani si impadroniscono della città e collocano il centro del loro accampamento 
                        sulla cima del colle, fondando attorno la colonia militare, nello spicchio di terra che dal colle digrada verso il mare.<br/>
                        Con il tempo in questa zona sorgono gli edifici più importanti della città romana: il tempio dedicato alla triade capitolina (da questo il colle si chiamerà infatti “Capitolino”), con i monumentali Propilei (metà del I sec. d.C.) i cui resti sono visibili sotto il campanile della 
                        cattedrale di San Giusto; la Basilica Civile, databile al 133 d.C., enorme, bi-absidata, sede del consiglio del municipium, tribunale e luogo di riunione e, accanto ad essa, la piazza del foro. I resti della basilica e la platea del Foro sono stati rimessi in luce in seguito a scavi negli 
                        anni ’30 e possono essere ammirati tuttora ai piedi del Castello.
                    </p>
                </div>    
                <div className="margin mt-3">
                    <h4 className='color-subtitle'>Indice</h4>
                    <Link href='/visite/trieste/castello_di_san_giusto#la_casa_del_capitano' className='color_link link'>La Casa del Capitano</Link><br/>
                    <Link href='/visite/trieste/castello_di_san_giusto#la_fortezza_triangolare' className='color_link link'>La Fortezza Triangolare</Link><br/>
                    <Link href='/visite/trieste/castello_di_san_giusto#i_restauri_degli_anni_trenta' className='color_link link'>I restauri degli Trenta</Link>
                </div>
                <div className="margin mt-3">
                    <Image src={La_Casa_del_Capitano} className='mx-auto' id='la_casa_del_capitano'/>
                    <h2 className='color-subtitle'>La Casa del Capitano</h2>
                    <h5 className='color-subtitle'>1468-1471</h5>
                    <p>
                        La storia vera e propria del Castello è legata alle perenni guerre tra Trieste, Venezia e l’Austria: la prima per mantenere la propria indipendenza, mentre le altre due desideravano sottometterla. Nel 1382 infatti Trieste, logorata dalle guerre con Venezia e dalle lotte intestine, 
                        firma la propria “Spontanea Dedizione all’Austria”, secondo cui la città manteneva una sua autonomia amministrativa, ma veniva protetta da un Capitano Imperiale di nomina regia che era il capo militare della città. Nonostante ciò la città non era del tutto pacificata, e, nel 1468, 
                        l’imperatore Federico III ordina quindi la costruzione, a spese dei cittadini, di una casa fortificata, affiancata da una torre, in cima al colle di San Giusto, affinché il capitano cesareo, suo rappresentante a Trieste, potesse controllare efficacemente il borgo cittadino. Si 
                        tratta dell’edificio rettangolare a due piani sormontato da una torre a forma di “L” che oggi ospita il museo storico. Questa parte del Castello viene chiamata “Casa del Capitano” perché fu anche l’abitazione del capitano imperiale. Il primo piano è privo di finestre in facciata, 
                        mentre riceve luce da alcune finestre verso l’attuale Cortile delle Milizie ed era riservato ai servizi e agli uffici; il secondo piano, tenuto prudentemente molto alto, è aperto da cinque finestre in facciata e cinque sull’altro lato ed accoglieva l’abitazione del Capitano. Unico 
                        ornamento il terrazzino coperto oggi visibile dal Bastione Rotondo. A piano terra c’era l’atrio tagliato a sghimbescio – che ora porta nel Cortile delle Milizie – con uno stallaggio nella parte sotto la torre e dall’altra uno stanzone per la guardia, attraverso il quale si accedeva 
                        alla cappella.
                    </p>
                </div>
                <div className="margin mt-3">
                    <Image src={La_Fortezza_Triangolare} className='mx-auto' id='la_fortezza_triangolare'/>
                    <h2 className='color-subtitle'>La Fortezza Triangolare</h2>
                    <h5 className='color-subtitle'>1508-1636</h5>
                    <p>
                        Intorno alla Casa del Capitano si sviluppò nei secoli seguenti la struttura del Castello. L’idea della fortezza triangolare con tre bastioni ai vertici si deve alla breve dominazione veneziana tra il 1508 e il 1509. La Serenissima provvide alla costruzione del primo bastione circolare 
                        attorno alla preesistente torre federiciana, chiamato infatti bastione “Rotondo” o “Veneto”. I lavori vengono interrotti nel 1509, al ritiro delle truppe veneziane da Trieste: resta un castello incompiuto, formato dalla vecchia costruzione imperiale, da un bastione rotondo alto tre 
                        metri che la avviluppava in parte e da una cortina di mura che si allungava verso oriente. Il progetto della fortezza triangolare munita di bastioni non viene abbandonato, ma fino alla metà del XVI secolo i lavori alla fortezza continuano lentamente sotto la direzione dell’architetto 
                        triestino Gerolamo Decio, che consolida le parti già costruite e inizia l’erezione della cortina muraria verso Sud.<br/>
                        Sotto il comando del capitano imperiale Giovanni de Hoyos, insediatosi nel 1545, che voleva uno strumento per piegare lo spirito insofferente dei Triestini, viene realizzato il bastione di Sud-Est, che dà sul retro della cattedrale di San Giusto, chiamato “Lalio” – dal nome del 
                        soprintendente militare della Casa d’Austria Domenico de Lalio, ricordato anche per la costruzione del Castello di Graz – oppure “Hoyos”, dal nome del capitano imperiale che ne aveva voluto la costruzione. Per questo bastione viene scelta una forma poligonale più moderna, chiamata “a 
                        muso camuso”, dovuta all’esigenza di adeguare il sistema difensivo alle più perfezionate tecnologie belliche seguite all’introduzione dell’impiego sistematico della polvere da sparo nelle armi pesanti. In questa occasione viene aggiunta una parte più bassa alla Casa del Capitano, per 
                        raccordarla al nuovo bastione. Nel 1553 i lavori al bastione sono a buon punto: per commemorare l’avvenimento vi viene murata una lapide con lo stemma di Giovanni de Hoyos, raffigurante due teste contrapposte di squali. Nel 1557, anno della conclusione dei lavori, viene anche realizzato 
                        l’avancorpo che racchiude il vestibolo del castello – dove oggi sono esposti svariati stemmi in pietra e le statue di Michez e Jachez – con le due porte (una per i carriaggi ed i cavalli, l’altra per i pedoni) ora sospese nel vuoto prospiciente la basilica romana, tuttora visibili 
                        (l’attuale entrata sul lato corto dell’atrio è stata aperta tra il 1590 e il 1595). Per il momento resta totalmente sguarnito il lato della fortezza verso la campagna, perché il pericolo per gli Austriaci continuava a venire dal mare o dalla città.<br/>
                        Nel 1636 la fortezza viene completata con l’esecuzione del terzo bastione, di forma triangolare, chiamato bastione”Fiorito” o “Pomis”, dal nome dell’architetto imperiale Giovanni Pietro de Pomis, autore anche della chiesa di Mariahilf e del Mausoleo di Ferdinando II a Graz.<br/>
                        Il Castello non fu mai al centro di fatti militari rilevanti, e grazie a questo si è conservato fino ad oggi: infatti già in una relazione del 1639, a pochi anni dal completamento, l’ingegnere imperiale Giovanni Pieroni sottolineava come esso fosse del tutto inadeguato ad affrontare 
                        qualsiasi tipo di attacco od assedio. Il Castello resta sede del Capitano Imperiale austriaco fino al 1750, quando Niccolò Hamilton, allora in carica, decide di trasferire la propria residenza in città, in un nuovo palazzo costruito nel 1749 sul luogo dell’attuale Tergesteo. Il Castello 
                        diventa fortezza e caserma e, talvolta, anche prigione: le casematte nei bastioni, originariamente vani per collocarvi i pezzi di artiglieria, vengono trasformate e usate come carceri politiche per tutto il periodo risorgimentale.
                    </p>
                </div>
                <div className="margin mt-3">
                    <Image src={I_restauri_degli_anni_Trenta} className='mx-auto' id='i_restauri_degli_anni_trenta'/>
                    <h2 className='color-subtitle'>I restauri degli anni Trenta</h2>
                    <p>
                        Nel 1918, con l’annessione di Trieste all’Italia, nel Castello si stabilisce il distretto militare e, nel 1930, l’intero comprensorio diviene proprietà del Comune. Nel corso degli anni Trenta l’intero complesso viene sottoposto ad un integrale intervento di restauro, per poterne fare un 
                        centro di attività artistico-culturali ed un luogo di svago di carattere popolare e turistico, nonché per offrire una sede adeguata ad alcune sezioni del museo civico. La Casa del Capitano viene in parte a riassumere la sua fisionomia originaria e vi viene istituito il Museo che ospita 
                        l’Armeria e gli arredi già di proprietà di Giuseppe Caprin.<br/>
                        Il Piazzale delle Milizie viene trasformato in un vasto teatro all’aperto per la realizzazione di grandi eventi spettacolari durante l’estate.<br/>
                        I lavori, diretti dall’architetto Ferdinando Forlati, mirano a liberare l’intero complesso dalle sovrastrutture sette-ottocentesche, cercando di riportare in luce le strutture originarie. Per gli esterni infatti particolare attenzione è posta al recupero dell’aspetto medievale: riemerge 
                        la torre della Casa del Capitano, antica architettura militare per anni celata dalle insignificanti forme di un edificio intonacato; si ritrovano le mensole di sostegno e l’arcone murato del terrazzino sul Bastione Rotondo, che viene ripristinato. Si riaprono i tre arconi sul Cortile delle 
                        Milizie e si ristabiliscono i sovrapposti fornici delle casematte del Bastione Lalio. Il piano di calpestio del Cortile delle Milizie viene abbassato di circa un metro per ricondurlo al livello originario e al centro del cortile vengono messi in luce i resti della polveriera esplosa nella 
                        notte del 9 luglio 1690, quando cinquanta barili di polvere da sparo vennero colpiti da un fulmine. I restauri degli anni ’30 hanno dunque liberato il Castello da ogni sovrastruttura posticcia, consentendo anche a noi di ammirarlo nell’aspetto originario, mentre la posizione strategica del 
                        forte fa sì che dai camminamenti e dai bastioni si possano godere straordinari panorami sulla città e sul golfo di Trieste.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1167.177545028973!2d13.77211714621059!3d45.64685713202796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477b6b749ec83f5b%3A0xd77e88acc4aa20af!2sCastello%20di%20San%20Giusto!5e1!3m2!1sit!2sit!4v1713183600809!5m2!1sit!2sit"
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
