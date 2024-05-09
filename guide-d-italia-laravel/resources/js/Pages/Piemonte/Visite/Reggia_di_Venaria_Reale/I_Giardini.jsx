import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link, Head } from '@inertiajs/react';
import {Card, CardBody, CardTitle, CardText} from 'react-bootstrap';

export default function I_Giardini(props) {
    return (
        <>
            <Head title="I Giardini"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='i_giardini' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>I Giardini</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className='text-center color-subtitle'>
                            Il risultato è prodigioso, tenendo conto delle condizioni dell'area che, ancora alle soglie degli anni 2000, erano tali da non consentire neanche più la possibilità di percepire i frammenti della conformazione originale sei-settecentesca dei Giardini della Venaria.
                        </h2>
                        <p>
                            I Giardini della Reggia sono oggi diventati uno <b>stretto straordinario connubio tra antico e moderno</b>, un dialogo virtuoso tra insediamenti archeologici e opere contemporanee. Nel Parco Basso infatti si estende per 500 metri 
                            il <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/esposizioni_permanenti/giardino_delle_sculture_fluide' className='text-decoration-none color_link'>Giardino delle Sculture Fluide di Giuseppe Penone</Link>, con 14  sculture che scandiscono un cammino 
                            senza cesure tra mondo minerale, vegetale e umano. Nel Parco Alto invece, al centro del Gran Parterre juvarriano, la suggestiva <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/esplora/la_reggia/arte_contemporanea' className='text-decoration-none color_link'>installazione 
                            dell'artista Giovanni Anselmo</Link>: sei lastre di granito su cui è incisa la scritta “Dove le stelle si avvicinano di una spanna in più”.
                        </p>
                        <p>
                            Il tutto incorniciato in un'incomparabile visione all'infinito che non ha riscontri analoghi fra i giardini italiani per la magnificenza delle prospettive e la vastità del panorama naturale circondato dai boschi del Parco della Mandria e dalla catena montuosa delle Alpi.
                        </p>
                        <p>
                            I giovani Giardini della Reggia di Venaria, inaugurati solo nel 2007, superata la prima fase di assestamento, stanno entrando, come un adolescente, in un momento importante della loro crescita ed evoluzione durante la quale iniziano a delinearsi in maniera più evidente e 
                            definita gli elementi caratterizzanti e la "forza" del loro disegno, a testimonianza di una <b>continua trasformazione naturale che nel panorama dei grandi giardini storici europei rappresenta un'esperienza unica</b>. La loro visita può dunque costituire una piacevole 
                            sorpresa anche per chi li ha già visitati in passato.
                        </p>
                        <p>
                            Oltre ad una <b>semplice passeggiata</b> o alle <b>visite guidate con specifici itinerari didattici</b>, i Giardini possono essere esplorati in altri modi divertenti, come con il trenino <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/la_freccia_di_diana' 
                            className='text-decoration-none color_link'>Freccia di Diana</Link>.
                        </p>
                        <p>
                            I Giardini della Reggia di Venaria fanno parte della rete dei <a href='http://www.grandigiardini.it/' className='text-decoration-none color_link'>Grandi Giardini Italiani</a>.
                        </p>
                    </div>
                    <hr className="margin mt-3" />
                    <div className="margin mt-3">
                        <p>
                            <a href='https://lavenaria.it/it/esplora/i-giardini' className='text-decoration-none color_link'>Per sapere di più</a>
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
