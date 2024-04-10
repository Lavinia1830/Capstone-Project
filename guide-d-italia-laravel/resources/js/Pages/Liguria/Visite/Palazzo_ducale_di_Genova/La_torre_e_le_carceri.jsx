import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Image } from 'react-bootstrap';
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
                    La Torre rappresenta un punto fermo nella ricostruzione operata da Orlando Grosso (Genova 1882-1968) durante i lavori di restauro del 1935-1940. Lo studioso pone infatti la costruzione della Torre in una fase cronologica intermedia della strutturazione del Palazzo del 
                    Comune: la Torre sarebbe stata costruita non prima del 1298 e non molto oltre il 1307 dopo il completamento del portico e del primo piano del Palazzo di Alberto Fieschi; ad essa sarebbe stato poi addossato l’edificio di ponente, ed infine un altro piano si sarebbe 
                    aggiunto al Palazzo Fieschi. Se la successione può risultare verosimile per i due palazzi che vennero a costituire l’organismo del Palazzo del Comune, il problema della Torre è argomento controverso. Alcuni fatti e dati fanno pensare che la Torre non solo fosse anteriore 
                    all’edificio del 1291, ma addirittura che preesistesse allo stesso Palazzo Fieschi. Principale assertore di quest’ultima tesi è il Poggi che si allinea alle teorie del Banchero e in certo qual modo a quelle del Giustiniani. “La torre – egli dice – può essere una delle 
                    antiche torri di difesa della città dalla parte di Serravalle. È stato obbiettato che la torre ha carattere di costruzione civile e non militare. Senonchè l’osservazione è messa in dubbio dal fatto che la cinta del secolo XI e X fu una difesa apprestata in fretta dagli 
                    abitanti di San Lorenzo e dai milanesi di S. Ambrogio per chiudersi, per coprirsi le spalle dal colle di S. Andrea di Banchi. Le torri furono probabilmente apprestate in fretta dove erano le case, e la popolazione concorse nell’elevare le mura fra torre e torre. Ed ogni 
                    torre ebbe il suo proprietario.” Entrambi le teorie, in mancanza di documenti certi, hanno un loro fondamento, tuttavia l’origine viscontile prospettata dal Poggi appare più mitica che storica. Quel che comunque appare certo è il fatto che la Torre faceva sicuramente parte 
                    del Palazzo di Alberto Fieschi. Una parola decisiva avrebbe potuto essere detta dai restauri, e ancor più dalle relazioni condotte su di essi dal Grosso. Senonchè l’angolo visivo in cui sono esaminati i dati che vengono man mano alla luce à quello di un’origine trecentesca 
                    della Torre – considerata come un fatto scontato – per cui ci sono di ben poco aiuto in questa direzione.
                </p>
                <h2 className="color-subtitle">Esterno</h2>
                <p>
                    Il restauro del Grosso ricondusse nella sua sostanza la Torre all’assetto trecentesco, liberandola per quanto possibile dalle interpolazioni dei secoli successivi, e riportando l’antica suddivisione in piani; ed infine riducendo l’assetto esterno in forme il più vicine 
                    possibile a quelle trecentesche, eliminando il pesante intonaco seicentesco. L’aspetto attuale della Torre à quello di una struttura di sette piani di cui i primi quattro fanno parte integrante del volume del Palazzo, mentre gli ultimi tre si alzano in gran parte liberi 
                    sui quattro lati. Il primo piano à ricoperto da un bugnato fortemente aggettante che riprende quello del Palazzo Fieschi. Il secondo ed il terzo sono ricoperti dalla decorazione a fasce bianche e nere: sono divisi dal primo piano da una serie di archetti pensili, e fra loro 
                    da una cordonatura. Quinto, sesto e settimo piano sono in mattoni di diverso tipo. Il limite fra quinto e sesto è rappresentato dalla stessa cordonatura, mentre sesto e settimo sono divisi da una triplice serie di archetti. Questa serie rappresenta il limite fra la costruzione 
                    medievale e la sopraelevazione cinquecentesca. La Torre ha al primo piano una finestra rettangolare, frutto di una modifica relativamente recente; al secondo e al terzo si aprono due quadrifore; al quarto una trifora. Il quinto piano che si fa parzialmente libero sui lati, ha 
                    una monofora. Completamente libero è il sesto, che è l’ultimo della costruzione medievale. ed ha a Sud una grande monofora; sugli altri lati bifore, i cui fornici sono divisi da grosse colonne a rocchi bianchi e neri. L’ultimo livello in mattoni risulta dei primi anni del XVII 
                    secolo, coevo alla grande costruzione vannoniana del Palazzo.
                </p>
                <h2 className="color-subtitle">Interno</h2>
                <p>
                    Dal secolo XVI fino a gran parte del XVII la Torre subì modifiche interne considerevoli, in seguito alla sua trasformazione in carcere: ebbe i piani dimezzati e notevoli variazioni nelle aperture. <br/>
                    In particolare la cella – sottostante alla triplice fila di archetti – ebbe le primitive monofore trasformate in bifore per esigenze statiche dopo l’innalzamento cinquecentesco.<br/>
                    La muratura perimetrale à rimasta in sostanza quella originaria.<br/>
                </p>
                <div className='row d-flex justify-content-evenly mx-0 mb-4'>
                    <Image src={PalazzoDucale_Carcere1} className='col-4 px-0 w-sm-50 w-md-50 w-lg-50 m-2'/>
                    <Image src={PalazzoDucale_Carcere2} className='col-4 px-0 w-sm-50 w-md-50 w-lg-50 m-2'/>
                    <Image src={PalazzoDucale_Carcere3} className='col-4 px-0 w-sm-50 w-md-50 w-lg-50 m-2'/>
                    <Image src={PalazzoDucale_Carcere4} className='col-4 px-0 w-sm-50 w-md-50 w-lg-50 m-2'/>
                    <Image src={PalazzoDucale_Carcere5} className='col-4 px-0 w-sm-50 w-md-50 w-lg-50 m-2'/>
                    <Image src={PalazzoDucale_Carcere6} className='col-4 px-0 w-sm-50 w-md-50 w-lg-50 m-2'/>
                    <Image src={PalazzoDucale_Carcere7} className='col-4 px-0 w-sm-50 w-md-50 w-lg-50 m-2'/>
                    <Image src={PalazzoDucale_Carcere8} className='col-4 px-0 w-sm-50 w-md-50 w-lg-50 m-2'/>
                </div>
            </div>
            <div className="margin mt-3">
                <h2 className='color-subtitle'>La Campane della Torre</h2>
                <p>
                    Fin dal Medioevo la campana nella Torre del Palazzo del Comune, poi Palazzo Ducale, aveva molteplici funzioni.<br/>
                    Da essa partivano i segnali di convocazione delle magistrature, quelli relativi agli esiti delle guerre in corso ed anche quelli per il coprifuoco e gli allarmi in generale.<br/>
                    La campana veniva però anche usata nelle ricorrenze solenni, nei festeggiamenti o per dare il benvenuto alle personalità politiche e religiose che facevano visita ai Dogi ed al Senato.<br/>
                    La storia di queste campane parte con la nascita stessa di Palazzo Ducale, infatti nei pressi della rampa d’accesso a Palazzo Ducale sono stati ritrovati i resti diuna fornace da campane databile al XIV secolo.<br/>
                    “E già per due anni avevano fatto fabbricare per mano di Guglielmo di Montalto la campana grossa del Comune la quale fecero riporre nella torre del palazzo nuovo”.<br/>
                    Così l’annalista Giustiniani ci informa dell’esistenza di una campana nella torre già a partire dal 1291, anzi, la torre sarebbe stata edificata appositamente per questo scopo.<br/>
                    La campana fusa da Giuliano di Montaldo durò “…per spazio di più di 230 anni”, dice ancora il Giustiniani. “E poi al tempo della ricuperata libertà la campana si è rinnovata e non è di tanta bontà come la prima”. L’anno della “ricuperata libertà” è il 1528, anno in cui la vecchia 
                    campana fu rifusa.<br/>
                    Secondo l’Alizeri, fra il 1529 ed il 1539, vennero provate ben tre campane, probabilmente fuse dai Gioardi, una famiglia di fonditori che aveva l’officina e l’abitazione a San Marco presso il Molo.<br/>
                    Nel 1539 si scioglieva la questione della campana in modo radicale ricorrendo alle Fiandre – forse ad Anversa – e decretando la sopraelevazione della torre perchè il suono si propagasse meglio”.<br/>
                    Questo è ciò che emerge dalle note di spese poste sotto la rubrica generale: “Expense reparationis turris et erectionis eiusdem, ac armamenti campane magne super eam”.<br/>
                    La nuova campana del 1539, che non è quella citata dal Giustiniani, rimase in funzione fino al 1570. L’anno successivo venne ordinata un’altra campana ad Anversa, come si evince dagli Atti del Senato: “Impense campane magne Turris palacii et Sancti Laurenti”.<br/>
                    Secondo l’Alizeri però la campana del 1571 portava la marca di tal Cattaneo di Brescia, quindi verosimilmente la campana proveniente dalle Fiandre fu destinata al Duomo di San Lorenzo.<br/>
                    La campana bresciana rimase integra fino agli anni ’60 dell’Ottocento, quando si ruppe. Venne allora riparata, ma tornò a spaccarsi durante le celebrazioni colombiane del 1892.<br/>
                    Da quell’anno rimase inattiva per essere infine fusa dalle truppe tedesche durante la Seconda Guerra Mondiale.<br/>
                    La campana attuale è stata rifatta a cura dell’Associazione “A Compagna” nel 1980.<br/>
                </p>
                <div className='row d-flex justify-content-evenly mx-0 mb-4'>
                    <Image src={PalazzoDucale_TorreGrimaldina1} className='col-4 px-0 w-sm-50 w-md-50 w-lg-50 m-2'/>
                    <Image src={PalazzoDucale_TorreGrimaldina2} className='col-4 px-0 w-sm-50 w-md-50 w-lg-50 m-2'/>
                    <Image src={PalazzoDucale_TorreGrimaldina3} className='col-4 px-0 w-sm-50 w-md-50 w-lg-50 m-2'/>
                    <Image src={PalazzoDucale_TorreGrimaldina4} className='col-4 px-0 w-sm-50 w-md-50 w-lg-50 m-2'/>
                </div>
            </div>
        </main>
        <Footer/>
    </AuthenticatedLayout>
  )
}
