import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Image } from 'react-bootstrap';
import PalazzoDucale_Facciata1 from '../../../../../assets/Liguria/PalazzoDucale_Facciata_Genova_Liguria_1.jpg';
import PalazzoDucale_Facciata2 from '../../../../../assets/Liguria/PalazzoDucale_Facciata_Genova_Liguria_2.jpg';
import PalazzoDucale_Facciata3 from '../../../../../assets/Liguria/PalazzoDucale_Facciata_Genova_Liguria_3.jpg';
import PalazzoDucale_Facciata4 from '../../../../../assets/Liguria/PalazzoDucale_Facciata_Genova_Liguria_4.jpg';
import PalazzoDucale_Facciata5 from '../../../../../assets/Liguria/PalazzoDucale_Facciata_Genova_Liguria_5.jpg';
import PalazzoDucale_Facciata6 from '../../../../../assets/Liguria/PalazzoDucale_Facciata_Genova_Liguria_6.jpg';
import PalazzoDucale_Facciata7 from '../../../../../assets/Liguria/PalazzoDucale_Facciata_Genova_Liguria_7.jpg';
import PalazzoDucale_Facciata8 from '../../../../../assets/Liguria/PalazzoDucale_Facciata_Genova_Liguria_8.jpg';

export default function Facciata_piazza_Matteotti(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='facciata_p_matteotti' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Facciata piazza Matteotti</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
            </div>
            <div className="margin mt-3">
                <h2 className='color-subtitle'>La Facciata di piazza Matteotti</h2>
                <p>
                    Fino alla metà del XVIII secolo l’attuale piazza Matteotti era chiusa da una “cortina”: il Palazzo era una vera e propria sede di Stato, con ambienti di rappresentanza e piazza d’armi. Alla metà del Settecento però, venute meno le esigenze difensive, si decise di 
                    abbattere la cortina: l’effetto a sorpresa della visione della piazza e, soprattutto, della facciata fu straordinario, reso ancora più solenne dalla pendenza del percorso culminante nella scalinata centrale con le due rampe laterali per la salita dei cavalli e delle 
                    portantine.
                </p>
                <p>
                    L’attuale facciata è stata realizzata dall’architetto ticinese Simone Cantoni fra il 1778 e il 1783 dopo che, il 3 novembre 1777, un furioso incendio distrusse il corpo centrale del Palazzo dai tetti fino al piano nobile. Simone Cantoni, architetto formatosi nelle 
                    Accademie di Roma e di Parma, era considerato uno dei migliori esponenti del primo neoclassicismo nell’Italia Settentrionale. A lui si deve, oltre all’elegante facciata risolta con marmi veri e marmi finti in stucco lucido dalla delicata cromia chiara, anche la 
                    ricostruzione delle sale del Maggiore e del Minor Consiglio al piano nobile. Alle decorazioni plastiche della facciata lavorarono Nicolò Traverso e Francesco Ravaschio, due scultori genovesi formatisi nell’ambiente artistico di Roma da cui furono chiamati appositamente 
                    nel 1780, autori dei gruppi di trofei con figure di schiavi barbareschi e prigioni.
                </p>
                <h2 className="color-subtitle">La Facciata di piazza De Ferrari</h2>
                <p>
                    Il prospetto che si affaccia su piazza De Ferrari subì importanti modifiche durante i lavori di restauro eseguiti da Orlando Grosso nei primi decenni del XX secolo. Prima dei lavori di Grosso essa doveva presentarsi come una facciata liscia intonacata, sulla quale erano 
                    visibili tracce di affreschi seicenteschi. Grosso rielaborò la facciata in stile classicista, regolarizzando le aperture e inserendole all’interno di uno schema di colonne e altri elementi architettonici dipinti. Furono inoltre aperte tre porte per collegare la piazza con 
                    il porticato interno del palazzo.
                </p>
                <p>
                    La facciata, dipinta nel 1938, risultava in gran parte dilavata al momento del restauro del 1992. Durante questo restauro è stata ripristinata la decorazione di Grosso, spostando però verso l’alto le tre porte in modo da renderle alla stessa quota del cortile interno sul 
                    quale si affacciano. La facciata è organizzata su due livelli, scanditi da una decorazione pittorica. Al piano terra si trovano, oltre alle tre aperture una serie di finestroni, sormontati ognuno da una finestrella. Il livello superiore riprende lo schema del piano terra, 
                    con una nuova serie di finestroni e di finestrelle.
                </p>
                <div className='row d-flex justify-content-evenly mx-0 mb-4'>
                    <Image src={PalazzoDucale_Facciata1} className='col-4 px-0 w-sm-50 w-md-50 w-lg-50 m-2'/>
                    <Image src={PalazzoDucale_Facciata2} className='col-4 px-0 w-sm-50 w-md-50 w-lg-50 m-2'/>
                    <Image src={PalazzoDucale_Facciata3} className='col-4 px-0 w-sm-50 w-md-50 w-lg-50 m-2'/>
                    <Image src={PalazzoDucale_Facciata4} className='col-4 px-0 w-sm-50 w-md-50 w-lg-50 m-2'/>
                    <Image src={PalazzoDucale_Facciata5} className='col-4 px-0 w-sm-50 w-md-50 w-lg-50 m-2'/>
                    <Image src={PalazzoDucale_Facciata6} className='col-4 px-0 w-sm-50 w-md-50 w-lg-50 m-2'/>
                    <Image src={PalazzoDucale_Facciata7} className='col-4 px-0 w-sm-50 w-md-50 w-lg-50 m-2'/>
                    <Image src={PalazzoDucale_Facciata8} className='col-4 px-0 w-sm-50 w-md-50 w-lg-50 m-2'/>
                </div>
            </div>
        </main>
        <Footer/>
    </AuthenticatedLayout>
  )
}
