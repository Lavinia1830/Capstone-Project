import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';
import Citroniera_scuderia_juvarriane_reggia_reale from '../../../../../assets/Piemonte/Citroniera_scuderia_juvarriane_reggia_reale_Torino_Piemonte.jpg';
import { Image } from 'react-bootstrap';

export default function Scuderie_Juvarriane(props) {
    return (
        <>
            <Head title="Scuderie Juvarriane"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='scuderia_juvarriane' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Scuderia Juvarriane</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <h3 className='text-center color-subtitle fst-italic'>
                            Le Scuderie juvarriane - uno degli spazi architettonici più imponenti della Venaria e del barocco europeo - completano il percorso di visita della Reggia dedicato al Teatro di Storia e Magnificenza della 
                            dinastia sabauda.
                        </h3>
                        <Image src={Citroniera_scuderia_juvarriane_reggia_reale} className='mx-auto w-50'/>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            La duplice fabbrica di <b>Scuderia Grande</b> e <b>Citroniera</b> è realizzata su progetto di Filippo Juvarra tra il 1722 e il 1727, per il re Vittorio Amedeo II. L’edificio unisce i due ambienti dietro un grande corpo 
                            di facciata che svolge funzione di quinta architettonica per i Giardini.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">La Scuderia Grande</h2>
                        <p>
                            Le grande navata, lunga 148 m, larga 12 e alta 15, (più ampia di qualsiasi altra scuderia di residenza reale in Piemonte e confrontabile con quella realizzata da Jean Aubert nel 1719 a Chantilly), poteva contenere circa 
                            200 cavalli. La sua presenza forniva riparo al lato nord della Citroniera.<br/>
                            Nel corso dell’Ottocento l’edificio mantiene la sua funzione, perfettamente funzionale alle esigenze militari.<br/>
                            Nella Scuderia Grande attualmente è ospitata La Regia Scuderia, un allestimento che comprende il Bucintoro dei Savoia e alcune carrozze di gala e portantine. L'allestimento si è arricchito, dal 2021, della Carrozza di 
                            Napoleone proveniente dalla Palazzina di Caccia di Stupinigi.
                        </p>
                        <p>
                            Nella Scuderia Grande attualmente è ospitata <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/la_regia_scuderia' className='text-decoration-none color_link'>La Regia Scuderia</Link>, un allestimento che comprende 
                            il Bucintoro dei Savoia e alcune carrozze di gala e portantine. L'allestimento si è arricchito, dal 2021, della <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/la_carrozza_di_napoleone_alla_reggia_di_venaria' 
                            className='text-decoration-none color_link fst-italic'>Carrozza di Napoleone</Link> proveniente dalla Palazzina di Caccia di Stupinigi.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">La Scuderia Grande</h2>
                        <p>
                            Illuminata nel lato sud da grandi finestroni, lunga 148 metri, larga 14 e alta 16, ospitava durante l’inverno circa 400 casse di agrumi del Gran Parterre, a cui si univano gelsomini, melograni e oleandri.
                        </p>
                        <p>
                            Lo spazio interno, oltre che imponente per dimensioni, era anche stato concepito in termini di grande ricchezza chiaroscurale e plastica: le pareti laterali sono scavate da nicchie che con la loro scansione imprimono un forte 
                            dinamismo all'involucro, risultando caratterizzate a sud dalla grande luminosità delle aperture ad arco sormontate da oculi (per accogliere il massimo di luce e calore d'inverno) e a nord dalla replica dei serramenti in trompe 
                            l'oeil sul muro di separazione dalla scuderia.
                        </p>
                        <p>
                            Juvarra aveva previsto un ricchissimo corredo a stucco per lesene, nicchie, volte e aperture, tale da competere con la Galleria Grande: tale corredo fu però realizzato solo in forma ridotta e scomparve nel corso del XIX secolo.
                        </p>
                        <p>
                            Lo spazio imponente ed elegante della Citroniera è la location ideale per ospitare gli eventi più grandi che si svolgono alla Reggia di Venaria.
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
