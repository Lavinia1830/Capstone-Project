import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Pianura_Padana(props) {
    return (
        <>
            <Head title="Pianura Padana"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='pianura_padana' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Pianura Padana</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>territori</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            La <strong>Pianura Padana</strong>, anche nota come <b>Val Padana</b> o <b>Valle del Po</b>, è una vasta regione pianeggiante situata nel <b>nord 
                            Italia</b>. È delimitata dalle <b>Alpi</b> a nord e ad ovest, dagli <b>Appennini</b> a sud, e dal <b>Mar Adriatico</b> a est. La Pianura Padana è 
                            attraversata dal <Link href='/fiumi/fiume_po' className='text-decoration-none color_link'>fiume Po</Link>, il fiume più lungo d'Italia, e dai 
                            suoi numerosi <b>affluenti</b>.
                        </p>
                        <p>
                            <b>Storicamente</b>, questa regione è stata abitata fin dall'<b>età del bronzo</b>, con testimonianze di <b>insediamenti</b> umani risalenti 
                            a <b>migliaia di anni fa</b>. Nel corso dei secoli, la Pianura Padana è stata un <b>importante centro agricolo</b>, grazie alla sua terra fertile 
                            e all'abbondanza di acqua. È stata anche un crocevia di <b>commerci</b> e <b>scambi culturali</b>, soprattutto durante l'<b>Impero Romano</b>, 
                            quando venne integrata nell'impero come parte della <b>Gallia Cisalpina</b>.
                        </p>
                        <p>
                            Durante il <b>Medioevo</b>, la Pianura Padana divenne il fulcro di numerose <b>signorie</b> e <b>ducati</b>, come quelli di <Link href='/destinazioni/lombardia/milano'
                            className='text-decoration-none color_link'>Milano</Link>, <Link href='/destinazioni/lombardia/mantova' className='text-decoration-none 
                            color_link'>Mantova</Link>, <Link href='/destinazioni/emilia_romagna/ferrara' className='text-decoration-none color_link'>Ferrara</Link> e <Link href='/destinazioni/emilia_romagna/modena'
                            className='text-decoration-none color_link'>Modena</Link>. Questi stati erano spesso in conflitto tra loro, ma contribuirono anche a un fiorire 
                            di <b>arte</b>, <b>cultura</b> e <b>architettura</b> che caratterizzò il <b>Rinascimento italiano</b>.
                        </p>
                        <p>
                            Nel corso del <b>XIX secolo</b>, la Pianura Padana giocò un ruolo cruciale nell'<b>Unificazione Italiana</b>, con battaglie decisive come quella 
                            di <b>Solferino</b> e <b>San Martino</b>. Dopo l'unità d'Italia, la regione si industrializzò rapidamente, diventando uno dei principali motori 
                            economici del paese. La <strong>Pianura Padana</strong> è oggi una delle aree più sviluppate e densamente popolate d'Italia, con città importanti 
                            come <Link href='/destinazioni/lombardia/milano' className='text-decoration-none color_link'>Milano</Link>, <Link href='/destinazioni/piemonte/torino' 
                            className='text-decoration-none color_link'>Torino</Link>, <Link href='/destinazioni/emilia_romagna/bologna' className='text-decoration-none 
                            color_link'>Bologna</Link>, <Link href='/destinazione/veneto/verona' className='text-decoration-none color_link'>Verona</Link> e <Link href='/destinazione/emilia_romagna/parma' 
                            className='text-decoration-none color_link'>Parma</Link>.
                        </p>
                        <p>
                            L'economia della Pianura Padana si basa ancora in parte sull'agricoltura, con colture come il grano, il mais, il riso e la vite, ma è anche un centro industriale di primaria importanza, con una forte presenza di industrie manifatturiere, automobilistiche, alimentari e tecnologiche.
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
