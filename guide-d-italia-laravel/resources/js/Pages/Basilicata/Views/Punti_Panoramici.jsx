import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Punti_Panoramici(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='punti_panoramici' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Punti panoramici di Matera</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        I Sassi, la Gravina, la Murgia. Chiese e abitazioni arcaiche. La roccia di tufo modellata dal vento e dall’uomo. Il panorama unico di <b>Matera</b>, città catalogata dall’<b>UNESCO</b> tra i Patrimoni dell’Umanità, si apre in tutta la sua poetica spettacolarità delle <b>terrazze panoramiche</b> 
                        disseminate nel centro storico e nei dintorni.<br/>
                        Sono i luoghi ideali in cui lasciare vagare lo sguardo in quell’immensità di pietra, dove fermarsi a lungo ad osservare. E per una pausa gourmet, sono tanti i bar e ristoranti che offrono i loro punti panoramici. <b>Ecco le location con la migliore vista su Matera e il paesaggio circostante</b>.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">I 5 punti panoramici di Matera imperdibili per vivere la magia dei Sassi</h2>
                    <p>
                        Camminando nei vicoli, apprezzate le meraviglie di questa cittadina unica al mondo e non mancate di approdare qui, in questi belvedere <b>dove la visuale si allarga porgendovi uno scenario mozzafiato</b>. Sostate, respirate e riempitevi gli occhi di pura meraviglia, scattate foto memorabili. 
                    </p>
                    <ul className='lista'>
                        <li className='fw-bold'>Belvedere Luigi Guerricchio</li>
                        
                    </ul>
                    <p>
                        Siete nella centralissima Piazza Vittorio Veneto, sul suo lato orientale. Il Belvedere <b>Luigi Guerricchio</b> è intitolato al pittore Luigi Guerricchio ed è una piccola balconata, chiamata anche <b>Belvedere dei Tre Archi</b> poiché tre arcate la separano dalla piazza. Davanti a voi 
                        trovate il <b>Sasso Barisano</b>, che si spalanca in tutta la sua grandiosità, ma questo è anche il punto migliore per osservare da una certa distanza la <b>Cattedrale</b> della città.
                    </p>
                    <ul className='lista'>
                        <li className='fw-bold'>Belvedere Giovanni Pascoli</li>
                        
                    </ul>
                    <p>
                        Dalla balaustra del belvedere nella piazza dedicata al grande poeta l’occhio corre sulle <b>case scavate nella roccia dell’area del Sasso Caveoso</b>, rimaste intatte nei secoli. Di notte, illuminate da luci sapienti, sembrano occhieggiare verso di voi. Lasciate vagare lo sguardo, poi fermatelo 
                        all’altezza della <b>Chiesa della Madonna de Idris</b> cesellata in una rupe.
                    </p>
                    <ul className='lista'>
                        <li className='fw-bold'>Belvedere Emilio Colombo</li>
                        
                    </ul>
                    <p>
                        Questo punto panoramico nei pressi della <b>Chiesa di Sant’Agostino</b> è stato in anni recenti intitolato allo statista lucano <b>Emilio Colombo</b> (1920 – 2013). Indugiate sulla <b>terrazza sospesa sul Sasso Barisano</b>, con la Cattedrale bene in vista, e fate in modo di arrivarci all’ora del 
                        tramonto, quando ombre viola e arancio animano l’alveare di pietra, avvolgendovi in <b>un’atmosfera da favola</b>.
                    </p>
                    <ul className='lista'>
                        <li className='fw-bold'>Belvedere della Cattedrale</li>
                        
                    </ul>
                    <p>
                        Dopo la visita agli interni della Cattedrale della Madonna della Bruna e di Sant’Eustachio, ovvero il duomo cittadino, fermatevi sulla piazza: <b>una balconata che abbraccia l’intero Sasso Barisano</b>, con i suoi fitti meandri di pietra e roccia.
                    </p>
                    <ul className='lista'>
                        <li className='fw-bold'>Belvedere Murgia Timone</li>
                        
                    </ul>
                    <p>
                        L’ultimo colpo di scena, il più sensazionale, è al Belvedere Murgia Timone, appena fuori città. <b>Si trova al di là del fiume, sopra una collina che guarda Matera</b>. Se ne avete la possibilità, arrivate a piedi, percorrendo il nuovo ponte sospeso sul torrente Gravina e poi passeggiando tra 
                        scalinate e sentieri, in un’escursione piacevolissima. Oppure raggiungetelo in auto, con un percorso di circa mezz’ora. Dal Belvedere sulla cima dell’altura, qui nell’altipiano materano, <b>la vista dell’intera città con i suoi iconici Sassi</b>, da lontano, è di quelle che non si dimenticano. 
                        Tutt’intorno, un tripudio di grotte, chiesette rupestri, rocce. Vi sembrerà di stare sulla Luna.
                    </p>
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
    )
}
