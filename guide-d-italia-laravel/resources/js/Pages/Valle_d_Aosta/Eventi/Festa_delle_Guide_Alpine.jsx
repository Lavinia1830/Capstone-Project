import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Festa_delle_Guide_Alpine(props) {
    return (
        <>
            <Head title="Festa delle Guide Alpine"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='festa_delle_guide_alpine' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Festa delle Guide Alpine</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Eventi</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            La <strong>festa delle guide alpine</strong> ricorre ogni anno in piena estate, il <b>15 agosto</b>.
                        </p>
                        <p>
                            Per l'occasione, molte società di guide alpine valdostane organizzano, in varie località della Valle d'Aosta, sfilate in divisa e spettacolari esibizioni di abilità nell'arrampicata e nelle manovre in parete rocciosa.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Il giorno di Ferragosto è dedicato alla <strong>festa delle Guide Alpine</strong>. Mercoledì prossimo, 15 agosto, a Courmayeur la sfilata inizierà alle 9 lungo le vie del paese fino al cimitero e ritorno alla Società delle Guide. Alle 10 la Messa, poi 
                            altra sfilata lungo via Roma fino al Jardin de l’Ange con l'appello delle Guide e le premiazioni: il "Premio fedeltà alla montagna" verrà consegnato ai clienti delle guide che da anni sono rimasti affezionati e si sono fatti accompagnare in salite 
                            importanti. Tra i premiati anche il vice sindaco di Paolo Corio, che riceverà il titolo di guida onoraria.
                        </p>
                        <p>
                            A <b>Valtournenche</b> si inizia la sera di martedì 14, alle 19.30, con l'aperitivo in piazzetta e la proiezione di filmati di montagna, poi alle 21 processione dell’Assunta. Il giorno dopo, vicino all'Hotel Breithorn al Breuil, alle 10.45 sfilata con la banda 
                            e i gruppi folkloristici fino al campo di golf, dove si celebra la Messa delle 11.30. Dalle 15 alle 17 i bambini possono provare giochi ludico-esplorativi con le Guide Alpine, maestri di sci e mountain bike: segue una dimostrazione di Soccorso Alpino con 
                            l’intervento della Protezione Civile.
                        </p>
                        <p>
                            A <b>Champoluc</b> di Ayas, dopo la Messa delle 10.30, le guide offriranno una dimostrazione con discesa dal campanile, seguita da un ballo in costume de "Li Tsoquè d’Ayas" e dallas sfilata insieme ai Maestri di Sci. Alle 21 al Centro Congressi di Monterosa Terme 
                            verranno proiettate immagini di montagna proposte dalle Guide di Ayas.
                        </p>
                        <p>
                            A <b>Cogne</b>, alle cascate di Lillaz, inizierà alle 10 la dimostrazione di arrampicata su roccia e pronto soccorso in parete naturale: alle 13 il pranzo a cura della Pro Loco e alle 21, nella sala Maison de la Grivola a Cogne, la proiezione di un filmato sulla 
                            montagna.
                        </p>
                        <p>
                            A <b>La Thuile</b> inizierà alle 10 la sfilata delle Guide e dei Maestri di Sci: alle 11 la Messa sul palco delle manifestazioni in centro al paese (in caso di maltempo nella chiesa parrocchiale) e il momento conviviale in piazzetta Corrado Gex.
                        </p>
                        <p>
                            A <b>Valsavarenche</b> la festa avrà inizio alle 10 a Pont con la dimostrazione pratica di soccorso alpino: alle 21 a Dégioz la fiaccolata ”Il Fuoco Sacro".
                        </p>
                        <p>
                            A <b>Gressoney-Saint-Jean</b>, martedì 14 alle 21, è in programma la dimostrazione in notturna delle Guide e dei Volontari del Soccorso Alpino sul campanile della chiesa. Il giorno dopo le Guide di Gressoney porteranno la statua della Madonna in processione dopo 
                            la Messa delle 10.30 fino a Gressoney-La-Trinité.
                        </p>
                        <p>
                            A <b>Ollomont</b> dalle 16 i bambini vengono invitati a sperimentare l'arrampicata prima dell’apericena.
                        </p>
                        <p>
                            A <b>Valgrisenche</b>, dopo la Messa delle 10.30, commemorazione e rinfresco sul sagrato della chiesa: dalle 15,30, invece, la dimostrazione di soccorso in montagna con intervento dell'elicottero della Protezione Civile. 
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
        
    )
}
