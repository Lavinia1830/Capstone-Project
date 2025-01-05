import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Il_Parco_della_Mandria(props) {
    return (
        <>
            <Head title="Il Parco della Mandria"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='il_parco_della_mandria' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Il Parco della Mandria</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p className='fst-italic text-center'>
                            La Mandria è il Parco naturale recintato più grande d’Europa, un’ex riserva di caccia reale divenuta scrigno di biodiversità
                        </p>
                    </div>
                    <div className='margin mt-3'>
                        <p>
                            Il Parco naturale regionale La Mandria, con un’estensione di 6570 ettari, è un sito di rilevanza europea, che conserva i querceti di pianura sopravvissuti all’urbanizzazione, alternati a prati e specchi d’acqua. In questo paesaggio straordinario vivono liberamente animali selvatici, come i cervi, e 
                            si trovano habitat preziosi, che danno rifugio e nutrimento a specie protette a livello comunitario poiché a rischio di estinzione (ad esempio il tritone crestato, il coleottero <i>Osmoderma eremita</i>, vari tipi di farfalle, pesci, uccelli e, tra i mammiferi, il lupo e specie particolarmente 
                            tutelate di pipistrelli).
                        </p>
                        <p>
                            Nell’area pubblica del Parco (cioè il nucleo centrale, che misurando 1700 ettari è il più grande parco cintato d’Europa) è anche presente un considerevole patrimonio storico-architettonico immerso nel verde, comprendente oltre al <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/castello_mandria'
                            className='text-decoration-none color_link'>Castello della Mandria</Link> (la Dimora di Caccia di Vittorio Emanuele II e della Bella Rosina, classificato dall’UNESCO “Patrimonio dell’Umanità”), la Villa dei Laghi, la Bizzarria, la chiesetta di San Giuliano con resti di ricetto medievale e numerose cascine 
                            d’epoca che offrono servizi ai visitatori.
                        </p>
                        <p>
                            L’area cintata del Parco, di proprietà regionale, apre tutti i giorni dell’anno dalle ore 8 (chiusura secondo stagione tra le 17 e le 20). L’ingresso è gratuito. Le visite sono effettuabili liberamente sui circa 30 Km di viali ciclopedonali aperti al pubblico (ma è precluso l’ingresso ai cani per ragioni 
                            di tutela naturalistica), oppure in forma guidata con l'ausilio delle guide del Parco che propongono una vasta gamma di escursioni, a piedi o in bicicletta, anche in orari e luoghi in cui è vietato l’accesso generalizzato.  
                        </p>
                        <p>
                            Per informazioni sul Parco La Mandria o per prenotare visite guidate: Ente di gestione dei Parchi Reali <br/>
                            tel. +39 011 4993381 - <a href='mailto:info@parcomandria.it' className='text-decoration-none color_link'>info@parcomandria.it</a>  -  <a href='https://www.parchireali.it/parco.mandria/' className='text-decoration-none color_link'>www.parchireali.it/parco.mandria</a>
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
