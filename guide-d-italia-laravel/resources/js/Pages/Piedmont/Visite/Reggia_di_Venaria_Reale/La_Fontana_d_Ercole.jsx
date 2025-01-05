import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function La_Fontana_d_Ercole(props) {
    return (
        <>
            <Head title="La Fontana d'Ercole"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='la_fontana_d_ercole' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>La Fontana d'Ercole</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className='margin mt-3'>
                        <p>
                            Il complesso della <strong>Fontana d’Ercole Colosso</strong>, realizzato tra il 1669 e il 1672 per i Giardini, era il luogo delle feste: una straordinaria “macchina scenografica barocca”, frutto del dialogo tra natura e architetture, imperdibile attrazione dei Giardini della Reggia.
                        </p>
                        <p>
                            In origine era costituita da scalinate e padiglioni, ninfei e grotte preziosamente decorati, giochi d’acqua e un grandioso apparato decorativo, dominato dalla <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/l_hercole_colosso' 
                            className='text-decoration-none color_link'>statua d’Ercole Colosso</Link>, protagonista del contesto e collocato al centro della grande vasca.
                        </p>
                        <p>
                            Simbolo del giardino tardo-manierista l’imponente sito era stato pensato da <b>Amedeo di Castellamonte</b> come una delle grandi meraviglie della nuova Reggia. Ideato e realizzato per il <i>loisir</i> e impostato su un raffinato gioco di rimandi allegorici e allusioni mitologiche, 
                            dava lustro alla dinastia sabauda, di cui incarnava il desiderio di rivaleggiare con le più grandi corti delle monarchie europee.
                        </p>
                        <p>
                            Un mutamento del gusto e gravi eventi bellici ne decretarono lo <b>smantellamento</b> già agli inizi del Settecento. Il patrimonio decorativo e statuario fu disperso su altre residenze reali e nobiliari e il sito demolito e interrato.
                        </p>
                        <p>
                            L’ambizioso <b>intervento di restauro</b> e valorizzazione del capolavoro seicentesco, completato nel giugno del 2022, si pone come ultimo tassello del Progetto di recupero della Venaria Reale, avviato nel 1998.  
                        </p>
                        <p>
                            La fontana è alimentata da un ricircolo d'acqua a circuito chiuso proveniente da una falda sottostante.
                        </p>
                    </div>
                    <hr className="margin mt-3" />
                    <div className="margin mt-3">
                        <p>
                            Il progetto di restauro è stato realizzato grazie alle aziende e agli enti soci della <b>Consulta di Torino</b> cui si sono uniti prestigiosi partners: <i>Fondazione Compagnia di San Paolo, Intesa Sanpaolo, Reale Mutua, Consorzio delle Residenze Sabaude, A.V.T.A. – Amici Reggia 
                            Venaria Reale</i> e <i>Iren</i>.
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
