import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Il_Broletto(props) {
    return (
        <>
            <Head title="Il Broletto"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='il_broletto' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Il Broletto</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            <strong>Il Broletto</strong>, da “brolo” che significa <b>cortile</b>, era in origine una <b>corte recintata</b> destinata 
                            allo <b>scambio delle merci</b> e alle <b>funzioni pubbliche</b> nel cuore della città, dove, dopo la <b>Pace di 
                            Costanza</b> nel <b>1183</b>, il <b>Comune di Novara</b>, così come altre città padane, costruì gli <b>edifici per le 
                            assemblee</b> e l’amministrazione della giustizia.<br/>
                            <strong>Il Broletto</strong> è una <b>struttura tipica della Lombardia</b>, (Milano, Cremona, Crema) ma è l’unico esempio 
                            in <b>Piemonte</b>.<br/>
                            Quello di <b>Novara</b> comprende <b>quattro corpi di fabbrica</b> con <b>portici al piano terreno</b> che circondano 
                            un <b>cortile</b>, costruiti dal <b>XIII al XVIII secolo</b> con varietà di <b>elementi architettonici</b> e <b>decorativi 
                            non omogenei</b>.<br/>
                            Il <b>lato nord</b> era chiuso dal <b>Palazzo del Comune</b> o <b>dell’Arengo</b> di cui si ha notizie dal <b>1209</b>; 
                            sul lato est il <b>Palazzo delle Corporazioni Artigiane</b> o <b>Paratici</b> del <b>XIII sec</b>.; il lato sud, 
                            verso <b>Piazza Duomo</b>, il <b>Palazzo del Podestà</b> e nel <b>lato ovest </b> il <b>Palazzo dei Referendari</b> (cioè 
                            degli <b>esattori fiscali</b>) costruiti entrambi tra la <b>fine del XIV</b> e l’<b>inizio del XV sec</b>.<br/>
                            Dalla <b>metà del XVI sec.</b> il complesso subì un generale <b>degrado</b> sino al <b>XIX secolo</b> quando iniziarono 
                            sporadici <b>interventi di recupero</b>, ma solo durante gli anni tra il <b>1926 e il 1936</b> si ebbe un complessivo 
                            <b> restauro del Broletto</b>. La <b>sala dell’Arengo</b> venne sistemata a <b>spazio espositivo</b> nel <b>1964</b>; 
                            il <b>fregio del cortile</b> venne <b>restaurato</b> nel <b>1978</b> e la <b>facciata del Palazzo dei Paratici</b> nel 
                            <b> 1993</b>.<br/>
                            Il <b>complesso del Broletto</b> stato riaperto al <b>pubblico</b> nel <b>2011</b> dopo un <b>restauro</b> ed è sede 
                            della <b>Galleria d’Arte Moderna Paolo e Adele Giannoni</b> e di <b>mostre temporanee</b>.
                        </p>
                    </div>
                    <div className="margin mt-3">
                    
                        <p>
                            Il <b>PALAZZO DEL COMUNE</b> o <b>DELL’ARENGO</b> costruito in forme semplici ed essenziali, è costituito da un piano 
                            terreno a portico con <b>pilastri</b> che reggono <b>arconi a tutto sesto</b>, e da un piano superiore detto “<b>Salone 
                            dell’Arengo</b>”, cui si accede attraverso una scala detta <b>Arengaria</b> ricostruita durante il restauro degli anni 
                            ’30. La facciata reca tracce di <b>stemmi affrescati</b> e quattro eleganti <b>finestre a trifora</b>.
                        </p>
                        <p>
                            Nel <b>Salone dell’Arengo</b> vennero trasportati gli <b>affreschi quattrocenteschi</b> con “<b>Cristo e gli 
                            Apostoli</b>” e “<b>la Famiglia Tornielli presentata dalla Vergine</b>” staccati dalla Chiesa di San Clemente in 
                            Barengo e la “<b>Crocifissione</b>” staccata dal campanile della chiesa di Sant’Andrea in Novara.
                        </p>
                        <p>
                            La <b>fascia pittorica esterna</b> detta “<b>Fregio dei Cavalieri</b>” si snoda lungo il sottogronda ed è databile 
                            tra il <b>1230</b> e il <b>1260-70</b>. È un raro esempio di <b>pittura profana del primo gotico</b> e raffigura, in 
                            una serie di riquadri indipendenti tra loro, <b>scene cavalleresche e amorose</b> forse ispirate ai romanzi cortesi, 
                            con <b>duelli</b>, <b>assedi</b> e <b>figure allegoriche</b>.
                        </p>
                        <p>
                            Il <b>PALAZZO DEI PARATICI</b>, costruito nel <b>XII secolo</b>, dimostra la potenza della <b>corporazioni 
                            Commerciali</b> che vollero il loro Palazzo accanto a quello del Comune. L’edificio venne rimaneggiato nel <b>XV sec. </b> 
                            e nel <b>XVIII</b> gli venne aggiunta una <b>loggetta</b>. Al piano terreno vi è il <b>Museo Archeologico</b>; al piano 
                            superiore, ove sono le <b>raccolte civiche di arte e storia</b>, si notano tracce di finestre e frammenti di <b>pitture </b> 
                            simili a quelle del Palazzo del Comune.
                        </p>
                        <p>
                            Il <b>PALAZZO DEL PODESTÀ</b> e quello <b>DEI REFERENDARI</b> presentano snelle forme gotiche, inferiormente aperti da 
                            un <b>porticato ad arcate a sesto acuto</b> e facciate impreziosite da <b>stemmi</b> e <b>festoni di foglie e frutta 
                            dipinti</b>; molto eleganti le cinque <b>monofore</b> decorate da elementi in <b>cotto</b>.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d895.58808552294!2d8.619022921916336!3d45.446172979986606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786658945505c9d%3A0x453bf844f7b02ecf!2sBar%20-%20Il%20Broletto!5e1!3m2!1sit!2sit!4v1716210603012!5m2!1sit!2sit"
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
