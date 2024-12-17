import React  from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Corniglia(props) {
    return (
        <>
            <Head title='Corniglia'/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='corniglia' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Corniglia</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Borghi</p>
                    </div>
                    <div className='margin mt-3'>
                        <p>
                            <strong>Corniglia</strong> fa parte delle <b>Cinque Terre</b> ma, diversamante da <Link href='/borghi/liguria/cinque_terre/monterosso_al_mare' 
                            className='text-decoration-none color_link'>Monterosso al Mare</Link>, <Link href='/borghi/liguria/cinque_terre/vernazza' 
                            className='text-decoration-none color_link'>Vernazza</Link>, <Link href='/borghi/liguria/cinque_terre/manarola' 
                            className='text-decoration-none color_link'>Manarola</Link>, <Link href='/borghi/liguria/cinque_terre/riomaggiore'
                            className='text-decoration-none color_link'>Riomaggiore</Link> è l'unico borgo che non affaccia direttamente sull'acqua: si trova, infatti, un 
                            centinaio di metri sopra il livello del mare, su di un <b>promontorio</b>. Per questo <strong>Corniglia</strong> è considerato più come 
                            un <b>borgo collinare</b> che un borgo marinaro, anche se alla spiaggia è pur collegato da una lunga scalinata di 377 gradini (la stessa che 
                            collega il borgo anche alla stazione ferroviaria la Lardarina).
                        </p>
                        <p>
                            Si tratta di un centro prevalentmente agricolo, di fatto gode di una lunga tradizione di viticoltura (di oltre due millenni) e il suo vino ha 
                            una storia molto antica. Negli scavi di Pompei, fra i ritrovamenti, vi era anche il <b>vino di Corniglia</b>, conservato in anfore con la 
                            dicitura "Cornelia".
                        </p>
                        <p>
                            In paese si trova <b>la chiesa di S. Pietro</b>, edificata su una cappella preesistente nel XIV secolo ma modificata nel XVII secolo, in età 
                            baracco. Conserva, tuttavia, all'esterno il portale e il rosone gotico in marmo di Carrara, opera del 1351 dei maestri campionesi Pietro e 
                            Matteo da Campilio, mentre all'interno un fonte battesimale del XII secolo. Sul retro dell'edificio sono visibili alcuni rilievi a tema zoomorfo 
                            di reimpiego e parte della muratura dell'antica cappella.
                        </p>
                        <p>
                            Grazie alla sua posizione arroccata sul promontorio, il paese vanta una visita stupenda sul belvedere al termine delle <b>via Fieschi</b>. 
                            Su <b>largo Taragio</b> ("er Tragiu" in termini dialettali) si affaccia l'oratorio dei Disciplinati di S. Caterina e sulla via pedonale che 
                            la fiancheggia si possono trovare indicazioni per il <b>Sentiero Verde Azzurro</b>, che collega <strong>Corniglia</strong> a <b>Monterosso al Mare</b>.
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
