import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function La_Regia_Scuderia_Il_Bucintoro_e_le_Carrozze_Regali(props) {
    return (
        <>
            <Head title="La Regia Scuderia. Il Bucintoro e le Carrozze_Regali"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='la_regia_scuderia_il_bucintoro_e_le_carrozze_regali' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>La Regia Scuderia Il Bucintoro e le Carrozze Regali</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <h3 className='text-center color-subtitle fst-italic'>
                            Nel complesso delle Scuderie juvarriane - spazi fra i più imponenti di Venaria e del barocco europeo – giunge a conclusione il percorso di visita della Reggia.
                        </h3>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Nella Scuderia Grande sono esposti lo splendido <b className='fst-italic'>Bucintoro</b>, fatto realizzare a Venezia da Vit­torio Amedeo II fra il 1729 e il 1731, e alcune <b>carrozze</b> e portantine, che testimoniano 
                            l’importanza che queste vetture assunsero nel XVIII secolo nella rappresentazione del potere aristocratico oltre che dei sovrani.<br/>
                            Fra le carrozze si segnalano importanti pre­stiti del Quirinale quali la <i>Berlina dorata</i> di gala, commissionata da Vittorio Emanuele II asceso al trono d’Italia, la Berlina argentata della regina Margherita e 
                            alcune carrozze di Umberto I e Vittorio Emanuele III.
                        </p>
                        <p>
                            <i>Bucintoro</i> e carrozze sono così l’occasione per raccontare l’organizzazione della Regia Scuderia e per riflettere sull’ultimo secolo di storia della dinastia, cento anni che con­cludono un viaggio millenario che 
                            dalle montagne delle Alpi giunge ai colli di Roma, da Chambéry e Torino all’Italia delle cento città.
                        </p>
                        <p>
                            L’esposizione si articola in quattro sezioni: 1. Il Bucintoro dei Savoia; 2. Le carrozze dell’antico regime; 3. La Regia Scuderia; 4. I Savoia re d’Italia.
                        </p>
                        <p>
                            Ad esse si aggiungono delle esposizioni temporanee di carrozze di particolare rilevanza artistica e storica, come, dal 2021, la <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/la_carrozza_di_napoleone_alla_reggia_di_venaria'
                            className='text-decoration-none color_link fst-italic'>Carrozza di Napoleone</Link> proveniente dalla Palazzina di Caccia di Stupinigi.
                        </p>
                        <hr />
                        <p>
                            L’allestimento è stato ideato e realizzato dal Consorzio delle Residenze Reali Sabaude.
                        </p>
                        <p>
                            Il Bucintoro è stato concesso in comodato alla Reggia di Venaria dalla Fondazione Torino Musei - Palazzo Madama-Museo Civico d’Arte Antica ed è stato restaurato nel 2012 dal Centro per la Conservazione ed il Restauro dei 
                            Beni Culturali “La Venaria Reale”, con l’apporto progettuale e finanziario della Consulta per la Valorizzazione dei Beni Artistici e Culturali di Torino.
                        </p>
                        <p>
                            Completano il percorso di visita alcune vetture del XVIII secolo di Palazzo Madama-Museo Civico d’Arte Antica di Torino e due carrozze di gala dei Savoia re d’Italia che appartengono al Palazzo del Quirinale di Roma.
                        </p>
                        <p>
                            Il progetto scientifico della sezione dedicata alle carrozze e alle scuderie è di Silvia Ghisotti e Andrea Merlotti in collaborazione con Marco Lattanzi.<br/>
                            L’ideazione delle scenografie e l’allestimento sono di Gianfranco Gritella e Stefania Giulio – Studio Arch. Gianfranco Gritella & Associati.<br/>
                            Il progetto e la ricostruzione dell’armo velico del Bucintoro sono stati predisposti da Gilberto Penzo.<br/>
                            La ricerca iconografica dei figurini e degli stendardi storici si deve a Enrico Ricchiardi.<br/>
                            Le musiche sono state composte da Marco Robino – Architorti su testo di Daniele Martino.
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}

