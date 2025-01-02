import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Chiesa_di_San_Pietro(props) {
    return (
        <>
            <Head title='Chiesa di San Pietro'/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                <div className='chiesa_di_san_pietro_portovenere' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Chiesa di San Pietro</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Nota per la sua <b>antica architettura</b>, è <b>famosissima</b> per le sue particolari <b>valenze panoramiche</b> e <b>paesaggistiche</b>: posta
                        a <b>strapiombo sul mare</b>, la chiesa è oggetto di numerose e celebri <b>fotografie</b>. Costituita da due edifici collegati: l'uono di 
                        stile <b>gotico</b> più recente; l'altro <b>romanico</b>, molto più antico. L'edificio pi1u antico, incluso nel perimetro della chiesa ne è parte 
                        integrante, a <b>pietra rettangolare</b> con l'<b>abside semicircolare</b> ha l'asse longitudinale correttamente orientato a <b>levante</b>, ne 
                        consegue ovviamente che quello <b>medioevale</b>, forma del tutto <b>inusuale</b>, volge a <b>sud</b> la sua <b>abside quadrata</b>. L'edificio 
                        più recente iniziato nel <b>1256</b> e terminati <b>1277</b> secondo il disegno originale doveva essere condotta a <b>tre navate</b> sopra l'area 
                        spianta della vecchia chiesa, questo progetto fu poi modificato e i due templi furono collegati mediamente due <b>arcate a tutto sesto</b> aperte 
                        nel muro della chiesa antica. L'<b>inverno</b> è decorato da laeghe <b>fasce bianche e nere</b> e il <b>presbiterio</b> è dotato di due <b>cappelle 
                        laterali quadrate</b> coperte da <b>volte ogicali</b>. La <b>torre campanaria</b>, contrariamente al corpo dell'edifiscio che si presenta avaro 
                        di vuoti, si apre all'estreno presentando in ordini sovrapposti delle <b>bifore</b> che ne alleggeriscono l'<b>imponente mole</b>. Per la <b>tecnica 
                        ardimentosa</b> della sua struttura e per la fin <b>eleganza scultorea</b> è una delle costruzioni esemplari dell'<b>architettura gotico 
                        genovese</b> in <Link href='/liguria' className='text-decoration-none color_link'>Liguria</Link>.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1091.109681649427!2d9.831684878670421!3d44.04844271128526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d4fea1b1e8caf5%3A0xf9d11cb3a60cd557!2sChiesa%20di%20San%20Pietro%20in%20Portovenere!5e1!3m2!1sit!2sit!4v1734623692989!5m2!1sit!2sit"
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
