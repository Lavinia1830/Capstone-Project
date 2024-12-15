import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function La_Sacrestia_Rinnovata(props) {
    return (
        <>
            <Head title="La Sacrestia Rinnovata"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='la_sacrestia_rinnovata' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>La Sacrestia Rinnovata</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <h3 className='text-center color-subtitle fst-italic'>
                            Capolavori d’arte sacra
                        </h3>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Nell'autunno del 2019 è stata riaperta la Sacrestia della Cappella di Sant’Uberto della Reggia di Venaria con un rinnovato allestimento che ne esalta la sacralità e la funzione.
                        </p>
                        <p>
                            Le opere proposte, oltre a essere preziose <b>testimonianze della cultura artistica del Seicento e del Settecento</b>, raccontano l’illuminata committenza di Casa Savoia e il suo forte legame con la Chiesa cattolica.
                        </p>
                        <p>
                            Capolavori provenienti dalle raccolte del <b>Museo Civico di Arte Antica di Palazzo Madama</b> arricchiscono e completano lo spazio così ripensato per l’occasione.
                        </p>
                        <p>
                            Nel <b>maestoso tondo</b> databile ai primi anni del ‘700 (più di 3.50 metri di diametro) il pittore di corte <b>Daniel Seiter</b> raffigura l’Elemosina del <i>Beato Amedeo IX di Savoia</i> (duca 1465-1472, beatificato 
                            nel 1677), opera destinata alla chiesa dell’Ospedale di Carità di via Po a Torino (oggi Palazzo degli Stemmi), per la prima volta esposto in Italia dopo un soggiorno quadriennale al Museo di Belle Arti di Chambéry.<br/>
                            È fiancheggiato da due opere lignee settecentesche, un <i>Cristo in croce</i> e un Porta corale completamente scolpito e intagliato.
                        </p>
                        <p>
                            La <i>Deposizione di Cristo dalla Croce</i> di <b>Claudio Francesco Beaumont</b> è considerata tra le migliori opere dell'artista: la tela fu commissionata per l'altare maggiore della chiesa di Santa Croce a Torino, 
                            disegnato nel 1730 dall'architetto Filippo Juvarra.
                        </p>
                        <p>
                            Di <b>Luigi Prinotto</b>, ebanista attivo alla corte sabauda nel XVIII secolo, è il <b>prezioso tabernacolo d’altare</b> realizzato con materiali pregiati (madreperla, avorio, alabastro, rame dorato), che anticipa 
                            le raffinate invenzioni di Pietro Piffetti.
                        </p>
                        <p>
                            Non ultimo, l’importanza artistica delle opere ora presentate rafforza gli assoluti pittorici delle tele di Francesco Trevisani, Sebastiano Ricci e Sebastiano Conca per i grandi altari della Cappella di Sant’Uberto, 
                            tra le più alte creazioni di Filippo Juvarra.
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
