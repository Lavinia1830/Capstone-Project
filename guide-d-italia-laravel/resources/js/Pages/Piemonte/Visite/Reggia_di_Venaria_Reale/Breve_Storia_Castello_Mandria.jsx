import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Breve_Storia_Castello_Mandria(props) {
    return (
        <>
            <Head title="Breve Storia"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='breve_storia_castello_mandria' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Breve Storia</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p className='fst-italic text-center'>
                            Legato sino al XIX secolo al destino e alla storia della Reggia di Venaria, il Parco della Mandria e il Castello, il corpo di fabbrica situato su un'altura artificiale denominata la "Nuova Mandria", viene destinato ad uso esclusivo e privato di Vittorio Emanuele II di Savoia già a partire dal 1859.
                        </p>
                    </div>
                    <div className='margin mt-3'>
                        <p>
                            A tal fine il <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/castello_mandria/il_parco_della_mandria' className='text-decoration-none color_link'>Parco della Mandria</Link> viene completamente murato e gli architetti regi Barnaba Panizza e Domenico Ferri vennero incaricati di edificare 
                            e costituire tutti i fabbricati che potessero permettere al sovrano di praticare la sua attività più amata, quella venatoria.
                        </p>
                        <p>
                            In facciata al Castello, il più importante tra i fabbricati presenti sul territorio del Parco, vennero realizzati gli ambienti che tutt'oggi costituiscono i bellissimi <b>Appartamenti Reali</b>.
                        </p>
                        <p>
                            Spaccato perfetto delle scelte e del gusto del sovrano, le oltre 20 sale, <b>aperte al pubblico</b>, mostrano al visitatore tutto il fascino di un grande protagonista del Risorgimento italiano che condivise parte della sua vita privata, proprio al Castello della Mandria, con la moglie 
                            morganatica <b>Rosa Vercellana</b> (detta la Bela Rosin) nominata contessa di Mirafiori e Fontanafredda.
                        </p>
                        <p>
                            Con la morte del sovrano il Parco, il complesso del Castello e tutti i reposoir di caccia vennero acquistati tra il 1882 e il 1887 dalla famiglia Medici del Vascello. Con essi la storia del territorio conobbe una nuova fase di sviluppo sino al 1976 quando la Regione Piemonte acquistò tutto il patrimonio 
                            ambientale e architettonico del Parco, istituendo nel 1978 l'Ente di Gestione del Parco Regionale della Mandria.
                        </p>
                        <p>
                            Dal 1997 il Castello della Mandria, insieme a tutte le altre residenze sabaude piemontesi, è Patrimonio Mondiale dell'Umanità (Unesco).
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
