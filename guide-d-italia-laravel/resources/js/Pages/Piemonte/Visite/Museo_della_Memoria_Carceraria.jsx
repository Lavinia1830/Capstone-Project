import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Museo_della_Memoria_Carceraria(props) {
    return (
        <>
            <Head title="Museo della Memoria Carceraria"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='museo_della_memoria_carceraria' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Museo della Memoria Carceraria</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Sin dall’epoca della sua costruzione, la <b>Castiglia</b> rappresenta la più grande espressione del ruolo che la piccola, ma 
                            distinta, capitale di <b>Saluzzo</b> ha ricoperto per quattro secoli. La costruzione del <b>castello di Saluzzo</b>, che 
                            sostituisce le precedenti fortificazioni edificate sulla cima del borgo, risale tra il <b>1270</b> ed il 1286. Il nome 
                            popolare <b>Castiglia</b> è probabilmente riconducibile al plurale latino <b>castella</b> (’i <b>castelli</b>’) e forse fa 
                            riferimento al complesso di edifici difensivi esistenti già nel <b>1120</b>. Successivi interventi e modifiche (da fortezza 
                            a dimora signorile) cambiano completamente la sua struttura. Durante il <b>Cinquecento</b>, l’occupazione francese del 
                            Marchesato e la conseguente annessione al Ducato di <b>Savoia</b> portano il complesso alla decadenza e al degrado. 
                            Nel <b>1825</b> iniziano i lavori di trasformazione dell’antico maniero in <b>prigione</b>, la cui operazione richiede la 
                            ricostruzione del corpo principale e l’inevitabile distruzione delle decorazioni quattrocentesche. Dal <b>2006</b> un lungo 
                            e scrupoloso restauro restituisce alla fruizione pubblica la <b>Castiglia</b>. Oggi le sue ampie sale ospitano spazi 
                            museali dedicati all’arte contemporanea, aree riservate alla ristorazione di alto livello nonché eventi culturali e 
                            promozionali. Al pianterreno si trova l’esposizione e collezione permanente <b>IGAV</b>. Le opere esposte forniscono al 
                            pubblico una panoramica dell’evoluzione dell’arte contemporanea italiana e uno sguardo alla scena artistica odierna. 
                            L’<b>IGAV</b> permette alla <b>Castiglia</b> di far parte dei “Luoghi del <b>contempoananeo</b>”, identificati come tali 
                            dal Ministero dei Beni e delle Attività Culturali e del Turismo. Al terzo piano il Museo della Civiltà cavalleresca offre al 
                            pubblico una visione dell’identità culturale del Marchesato di <b>Saluzzo</b> nel periodo compreso tra il <b>XII</b> e 
                            il <b>XV</b> secolo. Un originale percorso museale, arricchito da suggestivi allestimenti, si snoda tra i locali 
                            dell’ex <b>carcere</b>, dove è stato allestito il Museo della Memoria <b>Carceraria</b>. Una riflessione a <b>360 
                            gradi</b> sul <b>carcere</b>, sulla sua importanza storica per le moderne democrazie, e sui suoi infiniti rapporti con 
                            l’arte, il cinema e la letteratura.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1527.4975236642397!2d7.485703954504499!3d44.642721788507764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cd4970d71ca645%3A0xcfcdd6422eaae77b!2sMuseo%20della%20Memoria%20Carceraria!5e1!3m2!1sit!2sit!4v1717075825975!5m2!1sit!2sit"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map"
                            className='mx-auto mappa'
                        ></iframe>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
