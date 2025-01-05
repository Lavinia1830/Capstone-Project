import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Il_Giardino_Botanico_Medievale(props) {
    return (
        <>
            <Head title="Il Giardino Botanico Medievale"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='il_giardino_botanico_medievale' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Il Giardino Botanico Medievale</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            <b>I Conti esaminati</b>, oggi conservati presso l’Archivio di Stato di Torino (Sezioni Riunite), abbracciano un arco cronologico dal 1402 al 1516. Per ricreare il giardino sono state quindi seguite le indicazioni contenute in questi documenti medievali, 
                            rispettando la tradizionale suddivisione dello spazio in <b>hortus (orto), viridarium (bosco e frutteto) e iardinum domini (giardino del principe)</b> come anche la presenza degli arredi tradizionali (falconara, porcilaia, recinto delle galline).
                        </p>
                        <p>
                            In questo spazio, oltre alle piante e alle specie vegetali citate nelle carte antiche, sono state inserite anche piante e erbe non specificatamente descritte nelle fonti, ma certamente presenti nei giardini medievali tra Italia e Francia, in base 
                            alle indicazioni fornite dai trattati di agricoltura e piante medicinali del XIV e XV secolo.
                        </p>
                        <p>
                            <b>L’Orto (hortus)</b> Organizzato secondo uno schema a scacchiera formato da aiuole rettangolari, l’orto è uno spazio particolare, frequentato dal principe durante le sue passeggiate all’ombra dei peri e dei meli, e dai giardinieri del castello, che 
                            curavano le piante necessarie a rifornire regolarmente le cucine di legumi, ortaggi, aromi e erbe medicinali. La recinzione serviva per impedire l’ingresso degli animali. <b>Il Bosco e Frutteto (viridarium)</b> Dal latino “viridis” (verdeggiante), è un 
                            boschetto con piante ad alto fusto, spesso posto fuori dalle mura del castello, in un’area in cui trovano posto la porcilaia, la falconara, la colombaia e i mulini.
                        </p>
                        <p>
                            A <Link href='/destinazioni/piemonte/torino' className='text-decoration-none color_link'>Torino</Link> era molto la zona del bosco e del frutteto era molto vasto e arrivava a impegnare contemporaneamente anche cinquanta giardinieri. Oltre a 
                            castagni, noci, salici, pruni, sorbi, ciliegi, ulivi e palme - tutti citati nei documenti antichi - una parte di questo spazio era occupata dalla vigna del principe, che produceva il vino per la mensa del castello. <b>Il Giardino del principe (iardinum 
                            domini)</b> Spazio privato dei principi, per la lettura, la conversazione, il riposo e il gioco.
                        </p>
                        <p>
                            Nel medioevo si trovava sul limite meridionale della città, vicino alla cinta muraria e alla Porta Fibellona; era chiuso da mura costeggiate da cespugli di more, lastricato in pietra e presentava un pergolato di vite. Il suo aspetto doveva essere molto 
                            simile a quello tramandatoci da tappezzerie e miniature del Quattrocento: circondato da un fitto prato “millefleurs”, presentava come arredi fissi la fontana, ricca di rimandi alla letteratura cortese dell’epoca, sedili in laterizio rivestiti d’erba e 
                            una serie di vasi in maiolica decorata con piante profumate come lavanda, salvia, maggiorana.
                        </p>
                        <p>
                            La principessa d’Acaia Bona di Savoia teneva in questa parte del giardino una gabbia di pappagalli. Il Giardino si presta a molteplici usi socio-didattici. Esso rappresenta per Palazzo Madama una grande opportunità di sviluppo e di ampliamento 
                            dell’offerta-museo, sia per i percorsi, sia per la possibilità di indirizzare le politiche educative verso nuovi temi legati all’ecologia della città, all’importanza delle aree verdi nella vita delle comunità, alla loro storia e ai problemi della loro 
                            tutela di oggi.
                        </p>
                        <p>
                            La ricostruzione del giardino medievale consente l’approccio a specie vegetali ormai marginali, recuperando il senso e il valore della bio-diversità, favorendo e promuovendo progetti in collaborazione con altre istituzioni cittadine. Il progetto è stato 
                            realizzato nel 2011 grazie al significativo contributo di 1 milione e 100 mila euro della Fondazione CRT nell' ambito del più ampio progetto “Giardini e Parchi Storici”.
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
