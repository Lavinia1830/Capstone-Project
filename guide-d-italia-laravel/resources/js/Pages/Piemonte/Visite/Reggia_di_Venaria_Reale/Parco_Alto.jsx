import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Parco_Alto(props) {
    return (
        <>
            <Head title="Parco Alto"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='parco Alto' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>L'Hercole Colosso</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p className='fst-italic text-center'>
                            La citazione del settecentesco Parco alto, con il caratteristico schema geometrico a "maglie quadrate", comprende il rinato Gran Parterre con al suo crocevia la suggestiva installazione dell'artista Giovanni Anselmo.
                        </p>
                    </div>
                    <div className='margin mt-3'>
                        <p>
                            Sempre nel Parco alto, sono inoltre presenti le <b>grandi Allee</b>, i <b>boschetti</b> e il Fantacasino, l'attrazione del Boschetto dei Giochi pensata per le famiglie ed un pubblico di ogni età che ripropone in chiave moderna la funzione di luogo di <i>loisir</i> dei Giardini.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Allea di Terrazza</h2>
                        <p>
                            <b>Dopo oltre due secoli</b> la monumentale statua dell’Ercole, «<i>avanzo della famosa fontana che eravi nel [suo] Real giardino</i>» (così G.L. Amedeo Grossi già la descrive a fine Settecento, quando si trovava danneggiata alla Villa del Capriglio nella collina torinese), è <b>tornata nei suoi aulici 
                            luoghi d’origine</b>, grazie al prezioso intervento della <b>Consulta per la Valorizzazione dei Beni Artistici e Culturali di Torino</b> che ne ha finanziato l’accurato restauro permettendone il recupero e la ricollocazione nei Giardini della Reggia.
                        </p>
                        <p>
                            Erano stati gli studi di Paolo Cornaglia a metà anni Novanta a confermare che il colosso di marmo presente alla <b>Villa del Capriglio</b> almeno fino agli anni Cinquanta e successivamente custodito nei magazzini di <b>Palazzo Madama</b> a Torino, fosse la stessa statua d’Ercole realizzata nella seconda 
                            metà del Seicento da Bernardo Falconi per ornare l’omonima fontana dei giardini castellamontiani della Venaria.<br/>
                            All’epoca questi si presentavano come un crescendo impressionante di statue, busti, telamoni, piramidi, vasi, mascheroni (oltre 300 manufatti in pietra, ben raffigurati nelle incisioni del <i>Theatrum Sabaudiae</i>) poi progressivamente smantellato e demolito tra il 1700 e la metà del secolo per opera 
                            consapevole degli architetti di corte, artefici ed interpreti di un rinnovato gusto culturale.
                        </p>
                        <p>
                            La statua si trovava ancora a Venaria nel 1776 (non più però presso la Fontana, ormai inesistente, ma in locali di ricovero): nel corso delle vicende relative alla cosiddetta “diaspora” dei beni marmorei della Reggia, fu destinata dai conti Melina di Capriglio, nobile famiglia con importanti incarichi 
                            a corte, alla loro villa nella collina torinese appunto, per poi essere trasferita a Palazzo Madama nei primi anni Sessanta.
                        </p>
                        <p>
                            Il complesso <b>restauro</b>, realizzato dal <b>Laboratorio Persano Radelet di Torino e da Mario Catella</b> con il contributo della Consulta, ha consentito al Consorzio La Venaria Reale di programmarne lo <b>storico ritorno</b>, affidando all’arch. <b>Gianfranco Gritella</b> la progettazione 
                            dell’<b>allestimento</b> previsto inizialmente presso il parterre dell’Allea di Terrazza del Parco alto e ora tornato al centro della <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/la_fontana_d_ercole' className='text-decoration-none color_link'>Fontana dell'Ercole</Link>.
                        </p>
                        <p>
                            La <b>statua dell’Ercole</b> sorgeva al centro della maestosa Fontana, in un autentico scenario incantato, fatto di selve di marmo e giochi d’acqua, che così descrisse <b>Castellamonte</b>: «O’ portento dell’Ingegno, ò stupore dell’Arte, ò meraviglia dell’uno, e dell’altra […]. Da ogni parte l’Arte gareggia con la Natura», presentandolo come il luogo che lo stesso duca Carlo Emanuele II volle concepire fra più eccelsi della Venaria «epilogando in questo Fonte intitolato dell’Hercole tutto quello possa essere di delitioso, e di ricco [con] la superba Statua […] di marmo di altezza doppia al naturale, con la spoglia del Leone sopra le spalle, e Clava alla mano, in atto d’uccider l’Hidra, ogni cosa di bronzo, che formandoli attorno con li sette capi un’artificiata corona dall’acqua, che copiosa esce dalle loro lingue (maestrevolmente tessuta in tela) ne vien formato un ben unito Padiglione».
                        </p>
                        <p>
                            Il ritorno della statua dell’Hercole Colosso, concessa in <b>comodato al Consorzio La Venaria dalla Fondazione Torino Musei – Palazzo Madama</b>, è destinato ad arricchire in modo permanente le attrazioni della Venaria, in questo caso più che mai contestuali e rappresentative del grande connubio storia, arte e natura che è tornato a caratterizzare la Reggia ed i suoi Giardini.
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
