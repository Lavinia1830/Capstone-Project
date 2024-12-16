import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Museo_e_Cripta_di_S_Anastasio(props) {
    return (
        <>
            <Head title="Museo e Cripta di San Anastasio"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='museo_e_cripta_di_s_anastasio' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Museo e Cripta di San Anastasio</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Ci sono <b>pochi luoghi suggestivi</b> e <b>ricchi di storia</b> nel territorio piemontese come <strong>la Cripta di Sant’Anastasio</strong>, 
                            vero e proprio <b>gioiello della città</b>. Perché significa letteralmente <b>immergersi nella storia più antica di Asti</b> e interpretare 
                            le <b>tracce del tempo</b> che si <b>intrecciano in questo sito</b>, e che affondano le loro <b>radici in epoca longobarda</b> e 
                            addirittura <b>romana</b>.
                        </p>
                        <p>
                            <b>Nel sito si possono vedere ancora oggi i resti della chiesa romanica dedicata a Sant’Anastasio</b>, che a partire almeno dall’<b>XI secolo 
                            diventò sede di un importante monastero femminile</b>. <b>La chiesa che fu costruita poco dopo il 1000 d.C. era a tre navate</b>, e di grande 
                            impatto doveva essere il <b>sistema delle volte a crociera</b>, che poggiavano su <b>pilastri quadrangolari in muratura</b> o <b>su sostegni 
                            formati da quattro semicolonne</b>. <b>La gran parte dei capitelli esposti nel corridoio del museo dovevano decorare proprio questo sistema 
                            di colonne</b>. <b>La chiesa era dotata anche di un campanile quadrato</b>, di cui rimangono tuttavia solo le fondazioni.
                        </p>
                        <p>
                            <b>A parte alcune eccezioni</b>, <b>i capitelli esposti</b> nel <b>lungo corridoio</b> appartengono alla <b>fase più monumentale della chiesa</b>. 
                            Dopo la sua <b>fondazione il monastero di Sant’Anastasio</b> aveva infatti <b>man mano</b> assunto un <b>ruolo spirituale</b>, ma 
                            anche <b>economico</b> sempre più <b>importante</b>: ciò aveva portato alla <b>necessità di rinnovare la struttura</b>, ampliandone 
                            la <b>superficie</b> e migliorando i suoi <b>apparati decorativi</b>, e lo si può notare dalla <b>varietà dei soggetti scolpiti sui 
                            capitelli</b>: <b>scene figurate</b>, <b>angeli</b>, <b>croci</b>, ma anche <b>girali</b> e <b>motivi vegetali</b>.
                        </p>
                        <p>
                            Un’intera sala del museo è invece dedicata all’esposizione di <b>vari reperti in pietra</b>, provenienti da <b>palazzi nobiliari della città</b>. 
                            Fra tutti spiccano <b>gli stemmi delle famiglie nobiliari astigiane e le decorazioni architettoniche</b>, oltre allo splendido <b>frammento 
                            di fontana a più teste</b>.
                        </p>
                        <p>
                            Sul sito sono presenti anche <b>tombe in muratura</b> o <b>scavate nella terra</b> che sono ciò che rimane della <b>presenza longobarda</b>. 
                            Le <b>analisi al radiocarbonio</b> hanno infatti permesso di <b>datare le sepolture</b> ad un periodo che va 
                            dalla <b>fine del 600 d.C.</b> alla <b>fine dell’800 d.C.</b>
                        </p>
                        <p>
                            <b>In alcuni punti si possono vedere alcune lastre di pietra</b>: sono ciò che resta della pavimentazione del <b>Foro di Hasta</b>, 
                            ovvero l’<b>Asti di epoca romana</b>. Proprio qui, affacciata su quello che oggi è <b>corso Alfieri</b> e che un tempo era il <b>Decumano Massimo</b>, 
                            c’era la <b>piazza della città</b>, su cui dovevano sorgere edifici pubblici di natura <b>religiosa</b>, <b>commerciale</b> e <b>giudiziaria</b>.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1075.3151309529594!2d8.198945260253929!3d44.89935405108304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47879325810e46bb%3A0xb2d01a938cabd6d!2sCripta%20di%20Sant&#39;Anastasio!5e1!3m2!1sit!2sit!4v1717429384492!5m2!1sit!2sit"
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
