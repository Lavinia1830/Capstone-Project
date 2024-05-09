import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Breve_Storia_Giardini(props) {
    return (
        <>
            <Head title="Breve Storia"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='breve_storia_giardini' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Breve Storia</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p className='fst-italic text-center'>
                            Il risultato è prodigioso, tenendo conto delle condizioni dell'area che, ancora alle soglie degli anni 2000, erano tali da non consentire neanche più la possibilità di percepire i frammenti della conformazione originale sei-settecentesca 
                            dei Giardini della Venaria.
                        </p>
                    </div>
                    <div className='margin mt-3'>
                        <p>
                            I Giardini della Reggia sono oggi diventati uno <b>stretto connubio tra antico e moderno</b>, un dialogo virtuoso tra insediamenti archeologici e opere contemporanee. La monumentale <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/l_hercole_colosso' 
                            className='text-decoration-none color_link'>statua dell’Hercole Colosso</Link>, originariamente posizionata all’interno della Fontana dell’Ercole, dialoga con le opere  di noti artisti contemporanei come <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/i_capolavori/giardino_delle_sculture_fluide' 
                            className='text-decoration-none color_link'>Giuseppe Penone</Link> e <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/la_reggia/arte_contemporanea' className='text-decoration-none color_link'>Giovanni Anselmo</Link>, il tutto incorniciato in un'incomparabile visione all'infinito che non ha riscontri 
                            analoghi fra i giardini italiani per la magnificenza delle prospettive e la vastità del panorama naturale circondato dai boschi del Parco della Mandria e dalla catena montuosa delle Alpi.
                        </p>
                        <p>
                            I giovani Giardini della Reggia di Venaria, inaugurati solo nel 2007, superata la prima fase di assestamento, stanno entrando, come un adolescente, in un momento importante della loro crescita ed evoluzione durante la quale iniziano a delinearsi in maniera più evidente e definita gli elementi caratterizzanti e 
                            la "forza" del loro disegno, a testimonianza di una <b>continua trasformazione naturale che nel panorama dei grandi giardini storici europei rappresenta un'esperienza unica</b>. La loro visita può dunque costituire una piacevole sorpresa anche per chi li ha già visitati in passato.
                        </p>
                        <p>
                            Oltre ad una semplice passeggiata o alle visite guidate con specifici itinerari didattici, i Giardini possono essere esplorati con <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/i_giardini/la_freccia_di_diana_il_trenino_dei_giardini' className='text-decoration-none color_link'>il trenino Freccia di Diana</Link>.
                        </p>
                        <p>
                            I Giardini della Reggia di Venaria fanno parte della rete dei <a href='https://www.grandigiardini.it/' className='text-decoration-none color_link'>Grandi Giardini Italiani</a>. 
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
