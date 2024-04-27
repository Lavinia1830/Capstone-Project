import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Monumenti_Romani_ad_Aosta(props) {
    return (
        <>
            <Head title="Monumenti Romani ad Aosta"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='monumenti_romani_ad_aosta' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Monumenti Romani ad Aosta</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            <b>Aosta</b> si è guadagnata l’appellativo di “<b>piccola Roma delle Alpi</b>” per la straordinaria ricchezza dei suoi siti archeologici di epoca romana che si visitano come un museo a cielo aperto.
                        </p>
                        <p>
                            Conquistata da Roma ai tempi di Augusto, la città venne rinominata <i>Augusta Praetoria</i> e arricchita di monumenti importanti per la sua posizione strategica sulla <b>Via romana delle Gallie</b>.
                        </p>
                        <p>
                            Da visitare di giorno e da rivedere la sera, quando le vestigia romane illuminate hanno un fascino ancora maggiore.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitile">A darvi il benvenuto c'è l'Arco di Augusto</h2>
                        <p>
                            La prima cosa che vedete entrando in città è l’<Link href='/visite/valle_d_aosta/aosta/arco_di_augusto' className='text-decoration-none color_link'>Arco di Augusto</Link>: costruito tra il 25 e il 23 a.C. per celebrare la vittoria dei romani sulla popolazione locale è 
                            uno dei punti di partenza per ogni visita del centro storico. Alto 11,5 metri e realizzato con la tenera pietra locale molto deteriorata nel tempo, rendendo illeggibili i rilievi che lo ornavano; l’arco è stato in parte protetto da un tetto di ardesia realizzato nel 1716 
                            per ripararlo dalle infiltrazioni d’acqua.
                        </p>
                        <p>
                            A pochi passi dall’Arco c’è il <Link href='/visite/valle_d_aosta/aosta/ponte_romano' className='text-decoration-none color_link'>Ponte romano</Link>, a schiena d’asino, sull’antico corso del torrente Buthier, perfettamente conservato e tuttora utilizzato, che faceva parte 
                            della <Link href='/visite/valle_d_aosta/aosta/via_francigena' className='text-decoration-none color_link'>Via romana delle Gallie</Link>.
                        </p>
                        <p>
                            Lasciandosi alle spalle l’Arco di Augusto, lungo via sant’Anselmo, per entrare nel centro storico si varca <Link href='/visite/valle_d_aosta/aosta/porta_praetoria' className='text-decoration-none color_link'>Porta Praetoria</Link>, l’unica porta romana giunta integra fino 
                            ai nostri giorni, edificata negli stessi anni dell’Arco. Con tre aperture, una centrale per i carri, due laterali per i pedoni, era composta da due cortine di mura separate da un cortile centrale che fungeva da piazza d’armi. Sulla facciata orientale conserva tracce delle 
                            lastre di marmo del rivestimento originale e i segni degli elementi che reggevano i cancelli che la sera venivano chiusi. In epoca medievale la Porta fu abitata da una famiglia nobile che prese possesso della torre sul lato nord: proprio lì oggi c’è l’ufficio di 
                            informazioni turistiche.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Il maestoso Teatro Romano</h2>
                        <p>
                            A pochi passi da Porta Pretoria si innalza la maestosa facciata del <Link href='/visite/valle_d_aosta/aosta/teatro_romano' className='text-decoration-none color_link'>Teatro romano</Link>, capolavoro dell’architettura provinciale romana dell’Alto Impero alto 22 metri e 
                            alleggerito da 3 ordini di arcate e finestre di diverse dimensioni. Delle gradinate che potevano ospitare fino a 3 o 4 mila spettatori, oggi restano soltanto le sei inferiori a ridosso dell’orchestra. Quel che vediamo del muro di scena, di cui rimangono solo le fondamenta, 
                            lascia intuire che fosse ornato di colonne e statue. Un porticato lo collegava all’area dell’anfiteatro, di cui oggi rimangono solo pochi archi inglobati in un convento del Duecento.
                        </p>
                        <p>
                            Durante il Medioevo il teatro fu completamente negletto e in parte utilizzato per realizzare altre costruzioni che furono demolite solo nella prima metà del Novecento grazie ad una campagna di restauri che permise di restituirlo alla città. 
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">L’enigma del Criptoportico Forense</h2>
                        <p>
                            Di fronte all’ingresso della Cattedrale, nel pieno centro storico di Aosta, si accede ad uno dei tesori romani sotterranei, il <Link href='/visite/valle_d_aosta/aosta/criptoportico_forense' className='text-decoration-none color_link'>Criptoportico Forense</Link>, un imponente 
                            passaggio coperto seminterrato, la cui funzione originale è ancora un enigma per gli archeologi.
                        </p>
                        <p>
                            Il Criptoportico è articolato in 3 doppi corridoi con volte a botte, retti da robusti archi in travertino, illuminati da finestrelle strombate che garantiscono anche l’afflusso di aria. Costruiti in età augustea, come l’Arco di Augusto e la Porta Pretoria, quando tutta Aosta 
                            doveva essere un grande cantiere, hanno avuto una funzione di contenimento e livellamento del terreno, ma si ritiene che siano stati utilizzati come ambienti legati al <b>culto imperiale</b> oppure sedi di <b>corporazioni religiose o civili</b>.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-sutitle">Ancora quattro passi nell’Aosta romana</h2>
                        <p>
                            Questa passeggiata nell’<Link href='/visite/valle_d_aosta/aosta/aosta_romana' className='text-decoration-none color_link'>Aosta romana</Link> può continuare lungo gli ampi tratti di mura ancora esistenti, alla necropoli di Porta Decumana, agli scavi della villa romana fuori 
                            dalle mura e al <Link href='/visite/valle_d_aosta/aosta/museo_archeologico_regionale' className='text-decoration-none color_link'>Museo Archeologico Regionale di Aosta</Link> che espone una vasta sezione con reperti romani legati a riti funerari, all’edilizia pubblica e 
                            privata come alla cura della persona.
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
        
    )
}
