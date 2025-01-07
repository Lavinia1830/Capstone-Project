import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Image, Modal } from 'react-bootstrap';
import PalazzoDucale_Carcere1 from '../../../../../assets/Liguria/PalazzoDucale_Carceri_1.jpg';
import PalazzoDucale_Carcere2 from '../../../../../assets/Liguria/PalazzoDucale_Carceri_2.jpg';
import PalazzoDucale_Carcere3 from '../../../../../assets/Liguria/PalazzoDucale_Carceri_3.jpg';
import PalazzoDucale_Carcere4 from '../../../../../assets/Liguria/PalazzoDucale_Carceri_4.jpg';
import PalazzoDucale_Carcere5 from '../../../../../assets/Liguria/PalazzoDucale_Carceri_5.jpg';
import PalazzoDucale_Carcere6 from '../../../../../assets/Liguria/PalazzoDucale_Carceri_6.jpg';
import PalazzoDucale_Carcere7 from '../../../../../assets/Liguria/PalazzoDucale_Carceri_7.jpg';
import PalazzoDucale_Carcere8 from '../../../../../assets/Liguria/PalazzoDucale_Carceri_8.jpg';
import PalazzoDucale_TorreGrimaldina1 from '../../../../../assets/Liguria/PalazzoDucale_TorreGrimaldina_1.jpg';
import PalazzoDucale_TorreGrimaldina2 from '../../../../../assets/Liguria/PalazzoDucale_TorreGrimaldina_2.jpg';
import PalazzoDucale_TorreGrimaldina3 from '../../../../../assets/Liguria/PalazzoDucale_TorreGrimaldina_3.jpg';
import PalazzoDucale_TorreGrimaldina4 from '../../../../../assets/Liguria/PalazzoDucale_TorreGrimaldina_4.jpg';




export default function La_torre_e_le_carceri(props) {

    const images = [
        PalazzoDucale_Carcere1,
        PalazzoDucale_Carcere2,
        PalazzoDucale_Carcere3,
        PalazzoDucale_Carcere4,
        PalazzoDucale_Carcere5,
        PalazzoDucale_Carcere6,
        PalazzoDucale_Carcere7,
        PalazzoDucale_Carcere8,
    ]

    const imagestorre = [
        PalazzoDucale_TorreGrimaldina1,
        PalazzoDucale_TorreGrimaldina2,
        PalazzoDucale_TorreGrimaldina3,
        PalazzoDucale_TorreGrimaldina4
    ]

    const [show, setShow] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const [showTorre, setShowTorre] = useState(false);
    const [selectedImageIndexTorre, setSelectedImageIndexTorre] = useState(0);

    
    const handleShow = (index) => {
        setSelectedImageIndex(index);
        setShow(true);
    };

    const handleClose = () => setShow(false);
    
    const handleShowTorre = (index) => {
        setSelectedImageIndexTorre(index);
        setShowTorre(true);
    };
    const handleCloseTorre = () => setShowTorre(false);

    const handlePrev = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
    
    const handlePrevTorre = () => {
        setSelectedImageIndexTorre((prevIndex) => (prevIndex === 0 ? imagestorre.length - 1 : prevIndex - 1));
    };

    const handleNextTorre = () => {
        setSelectedImageIndexTorre((prevIndex) => (prevIndex === imagestorre.length - 1 ? 0 : prevIndex + 1));
    };

  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='torre_carceri' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>La Torre e le Carceri</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
            </div>
            <div className="margin mt-3">
                <h2 className='color-subtitle'>La Torre Grimaldina</h2>
                <p>
                    La <b>Torre</b> rappresenta un punto fermo nella <b>ricostruzione</b> operata da <b>Orlando Grosso</b> (Genova 1882-1968) durante i lavori 
                    di <b>restauro</b> del 1935-1940. Lo studioso pone infatti la costruzione della Torre in una fase cronologica <b>intermedia</b> della 
                    strutturazione del <b>Palazzo del Comune</b>: la Torre sarebbe stata costruita non prima del <b>1298</b> e non molto oltre il <b>1307</b> dopo 
                    il completamento del portico e del primo piano del <b>Palazzo di Alberto Fieschi</b>; ad essa sarebbe stato poi addossato l’edificio di ponente, 
                    ed infine un altro piano si sarebbe aggiunto al Palazzo Fieschi. Se la successione può risultare verosimile per i due palazzi che vennero a 
                    costituire l’organismo del Palazzo del Comune, il problema della Torre è argomento controverso. Alcuni fatti e dati fanno pensare che la Torre 
                    non solo fosse anteriore all’edificio del <b>1291</b>, ma addirittura che preesistesse allo stesso Palazzo Fieschi. Principale assertore di 
                    quest’ultima tesi è il <b>Poggi</b> che si allinea alle teorie del <b>Banchero</b> e in certo qual modo a quelle del <b>Giustiniani</b>. 
                    “La torre – egli dice – può essere una delle antiche torri di difesa della città dalla parte di Serravalle. È stato obbiettato che la torre 
                    ha carattere di costruzione civile e non militare. Senonchè l’osservazione è messa in dubbio dal fatto che la cinta del secolo XI e X fu una 
                    difesa apprestata in fretta dagli abitanti di San Lorenzo e dai milanesi di S. Ambrogio per chiudersi, per coprirsi le spalle dal colle di S. 
                    Andrea di Banchi. Le torri furono probabilmente apprestate in fretta dove erano le case, e la popolazione concorse nell’elevare le mura fra 
                    torre e torre. Ed ogni torre ebbe il suo proprietario.” Entrambi le teorie, in mancanza di documenti certi, hanno un loro fondamento, tuttavia 
                    l’origine <b>viscontile</b> prospettata dal Poggi appare più mitica che storica. Quel che comunque appare certo è il fatto che la Torre faceva 
                    sicuramente parte del Palazzo di Alberto Fieschi. Una parola decisiva avrebbe potuto essere detta dai restauri, e ancor più dalle relazioni 
                    condotte su di essi dal Grosso. Senonchè l’angolo visivo in cui sono esaminati i dati che vengono man mano alla luce à quello di 
                    un’origine <b>trecentesca</b> della Torre – considerata come un fatto scontato – per cui ci sono di ben poco aiuto in questa direzione.
                </p>
                <h2 className="color-subtitle">Esterno</h2>
                <p>
                    Il restauro del <b>Grosso</b> ricondusse nella sua sostanza la <b>Torre</b> all’<b>assetto trecentesco</b>, liberandola per quanto possibile 
                    dalle <b>interpolazioni</b> dei secoli successivi, e riportando l’antica <b>suddivisione in piani</b>; ed infine riducendo l’<b>assetto 
                    esterno</b> in forme il più vicine possibile a quelle trecentesche, eliminando il pesante <b>intonaco seicentesco</b>. L’aspetto attuale 
                    della <b>Torre</b> à quello di una struttura di <b>sette piani</b> di cui i primi <b>quattro</b> fanno parte integrante del volume del <b>Palazzo</b>, 
                    mentre gli ultimi <b>tre</b> si alzano in gran parte <b>liberi sui quattro lati</b>. Il <b>primo piano</b> à ricoperto da un <b>bugnato 
                    fortemente aggettante</b> che riprende quello del <b>Palazzo Fieschi</b>. Il <b>secondo</b> ed il <b>terzo</b> sono ricoperti dalla decorazione 
                    a <b>fasce bianche e nere</b>: sono divisi dal primo piano da una serie di <b>archetti pensili</b>, e fra loro da 
                    una <b>cordonatura</b>. <b>Quinto</b>, <b>sesto</b> e <b>settimo piano</b> sono in <b>mattoni di diverso tipo</b>. Il limite 
                    fra <b>quinto</b> e <b>sesto</b> è rappresentato dalla stessa <b>cordonatura</b>, mentre <b>sesto</b> e <b>settimo</b> sono divisi da una 
                    triplice serie di <b>archetti</b>. Questa serie rappresenta il limite fra la costruzione <b>medievale</b> e la <b>sopraelevazione 
                    cinquecentesca</b>. La <b>Torre</b> ha al primo piano una <b>finestra rettangolare</b>, frutto di una modifica relativamente recente; 
                    al <b>secondo</b> e al <b>terzo</b> si aprono due <b>quadrifore</b>; al <b>quarto</b> una <b>trifora</b>. Il <b>quinto piano</b> che si 
                    fa parzialmente libero sui lati, ha una <b>monofora</b>. Completamente libero è il <b>sesto</b>, che è l’ultimo della costruzione medievale. 
                    ed ha a Sud una grande <b>monofora</b>; sugli altri lati <b>bifore</b>, i cui fornici sono divisi da grosse colonne a <b>rocchi bianchi e neri</b>. 
                    L’ultimo livello in <b>mattoni</b> risulta dei primi anni del <b>XVII secolo</b>, coevo alla grande costruzione <b>vannoniana</b> del <b>Palazzo</b>.
                </p>
                <h2 className="color-subtitle">Interno</h2>
                <p>
                    Dal <b>secolo XVI</b> fino a gran parte del <b>XVII</b> la <b>Torre</b> subì modifiche interne considerevoli, in seguito alla sua trasformazione 
                    in <b>carcere</b>: ebbe i piani dimezzati e notevoli variazioni nelle <b>aperture</b>. <br/>
                    In particolare la <b>cella</b> – sottostante alla triplice fila di <b>archetti</b> – ebbe le primitive <b>monofore</b> trasformate in <b>bifore</b> per 
                    esigenze statiche dopo l’<b>innalzamento cinquecentesco</b>.<br/>
                    La <b>muratura perimetrale</b> à rimasta in sostanza quella <b>originaria</b>.<br/>
                </p>
                <div className='row d-flex justify-content-evenly mx-0 mb-4'>
                    {images.map((image, index) => (
                        <Image 
                            key={index}
                            src={image} 
                            className='col-4 px-0 w-sm-50 w-md-50 w-lg-50 m-2' 
                            onClick={() => handleShow(index)} 
                        />
                    ))}
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Palazzo Ducale Carcere</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="text-center">
                        <Image src={images[selectedImageIndex]} fluid />
                    </Modal.Body>
                    <Modal.Footer className='d-flex justify-content-center'>
                        <button className='btn-card' onClick={handlePrev}>
                            Indietro
                        </button>
                        <button className='btn-card' onClick={handleNext}>
                            Avanti
                        </button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div className="margin mt-3">
                <h2 className='color-subtitle'>La Campane della Torre</h2>
                <p>
                    Fin dal <b>Medioevo</b> la <b>campana</b> nella <b>Torre del Palazzo del Comune</b>, poi <b>Palazzo Ducale</b>, aveva molteplici funzioni.<br/>
                    Da essa partivano i segnali di <b>convocazione delle magistrature</b>, quelli relativi agli esiti delle guerre in corso ed anche quelli per 
                    il <b>coprifuoco</b> e gli <b>allarmi</b> in generale.<br/>
                    La campana veniva però anche usata nelle ricorrenze solenni, nei festeggiamenti o per dare il <b>benvenuto</b> alle personalità politiche e 
                    religiose che facevano visita ai <b>Dogi</b> ed al <b>Senato</b>.<br/>
                    La storia di queste campane parte con la nascita stessa di <b>Palazzo Ducale</b>, infatti nei pressi della rampa d’accesso a Palazzo Ducale sono 
                    stati ritrovati i resti diuna <b>fornace</b> da campane databile al <b>XIV secolo</b>.<br/>
                    “E già per due anni avevano fatto fabbricare per mano di <b>Guglielmo di Montalto</b> la campana grossa del Comune la quale fecero riporre 
                    nella <b>torre del palazzo nuovo</b>”.<br/>
                    Così l’annalista <b>Giustiniani</b> ci informa dell’esistenza di una campana nella torre già a partire dal <b>1291</b>, anzi, la torre sarebbe 
                    stata edificata appositamente per questo scopo.<br/>
                    La campana fusa da <b>Giuliano di Montaldo</b> durò “…per spazio di più di <b>230 anni</b>”, dice ancora il Giustiniani. “E poi al tempo 
                    della <b>ricuperata libertà</b> la campana si è rinnovata e non è di tanta bontà come la prima”. L’anno della “ricuperata libertà” è il <b>1528</b>, 
                    anno in cui la vecchia campana fu rifusa.<br/>
                    Secondo l’<b>Alizeri</b>, fra il <b>1529</b> ed il <b>1539</b>, vennero provate ben tre campane, probabilmente fuse dai <b>Gioardi</b>, una 
                    famiglia di fonditori che aveva l’officina e l’abitazione a <b>San Marco</b> presso il <b>Molo</b>.<br/>
                    Nel <b>1539</b> si scioglieva la questione della campana in modo radicale ricorrendo alle <b>Fiandre</b> – forse ad <b>Anversa</b> – e decretando 
                    la <b>sopraelevazione</b> della torre perchè il suono si propagasse meglio”.<br/>
                    Questo è ciò che emerge dalle note di spese poste sotto la rubrica generale: “Expense reparationis turris et erectionis eiusdem, ac armamenti 
                    campane magne super eam”.<br/>
                    La nuova campana del <b>1539</b>, che non è quella citata dal Giustiniani, rimase in funzione fino al <b>1570</b>. L’anno successivo venne ordinata 
                    un’altra campana ad <b>Anversa</b>, come si evince dagli <b>Atti del Senato</b>: “Impense campane magne <b>Turris palacii et Sancti Laurenti</b>”.<br/>
                    Secondo l’<b>Alizeri</b> però la campana del <b>1571</b> portava la marca di tal <b>Cattaneo di Brescia</b>, quindi verosimilmente la campana 
                    proveniente dalle <b>Fiandre</b> fu destinata al <b>Duomo di San Lorenzo</b>.<br/>
                    La campana bresciana rimase integra fino agli anni ’60 dell’<b>Ottocento</b>, quando si ruppe. Venne allora riparata, ma tornò a spaccarsi durante 
                    le <b>celebrazioni colombiane del 1892</b>.<br/>
                    Da quell’anno rimase inattiva per essere infine fusa dalle truppe tedesche durante la <b>Seconda Guerra Mondiale</b>.<br/>
                    La campana attuale è stata rifatta a cura dell’Associazione “<b>A Compagna</b>” nel <b>1980</b>.<br/>
                </p>
                <div className="row d-flex justify-content-evenly mx-0 mb-4">
                    {imagestorre.map((image, index) => (
                        <Image
                            key={index}
                            src={image}
                            className="col-4 px-0 w-sm-50 w-md-50 w-lg-50 m-2"
                            onClick={() => handleShowTorre(index)}
                        />
                    ))}
                </div>
                <Modal show={showTorre} onHide={handleCloseTorre}>
                    <Modal.Header closeButton>
                        <Modal.Title>Palazzo Ducale Torre</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="text-center">
                        <Image src={imagestorre[selectedImageIndexTorre]} fluid />
                    </Modal.Body>
                    <Modal.Footer className='d-flex justify-content-center'>
                        <button className='btn-card' onClick={handlePrevTorre}>
                            Indietro
                        </button>
                        <button className='btn-card' onClick={handleNextTorre}>
                            Avanti
                        </button>
                    </Modal.Footer>
                </Modal>
            </div>
        </main>
        <Footer/>
    </AuthenticatedLayout>
  )
}
