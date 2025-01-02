import React  from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Vernazza(props) {
    return (
        <>
            <Head title='Vernazza'/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='vernazza' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Vernazza</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Borghi</p>
                    </div>
                    <div className='margin mt-3'>
                        <p>
                            Il piccolo borgo di <strong>Vernazza</strong> fa parte delle <b>Cinque Terre</b>, come <Link href='/borghi/liguria/cinque_terre/monterosso_al_mare' 
                            className='text-decoration-none color_link'>Monterosso al Mare</Link>, <Link href='/borghi/liguria/cinque_terre/corniglia' 
                            className='text-decoration-none color_link'>Corniglia</Link>, <Link href='/borghi/liguria/cinque_terre/manarola' 
                            className='text-decoration-none color_link'>Manarola</Link>, <Link href='/borghi/liguria/cinque_terre/riomaggiore' 
                            className='text-decoration-none color_link'>Riomaggiore</Link>. Tra tutti questi è stato, purtroppo, il borgo che più di tutti ha risentito 
                            dell'alluvione del 2011. A testimonianza di questa disgrazia è stata allestita un'esposizione permanente con le immagini di quei giorni, lungo l'asse 
                            centrale del paese: <b>via Roma</b>. Su questa strada si affastellano una serie di negozi, ristoranti e boutique, fino ad arrivare a;;a colorata 
                            piazzetta da cartolina che sbocca sull'unico porticciolo turistico delle Cinque Terre.
                        </p>
                        <p>
                            La struttura del borgo è di origine medievale ma alcuni elementi artitettonici rendono Vernazza un borgo più ricco rispetto agli altri vicini. La sua 
                            prosperità è dovuta in particolare alla produzione vinicola, infatti Vernazza è celebre per la produzione del vino, di fatto il paesaggio collinare è 
                            ricco di <b>vigneti arroccati</b> lungo il cammino che giunge al sentiero della Madonna di Reggio, lungo il quale si susseguono una serie di cappelle.
                        </p>
                        <p>
                            Sulla piazzetta del borgo si affaccia la <b>chiesa di S. Margherita di Antiochia</b>, in stile gotico ligure e affiancata da una torre ottagonale 
                            di 40 metri. Il lato della chiesa che affaccia sul mare presenta due bifore che inondano l'interno di una luce sommessa.<br/>
                            Crostruito secondo un impianto romanico a tre navate, il tempio è abbellito dal Crocifisso ligneo del Maregliano. Una vera e propria torre di avvistamento 
                            medievale si trova sulla vetta del monte del paese e guarda verso il mare, mentre un'altra torre, <b>torre Doria</b>, è ciò che rimane di un castello 
                            che dominava la baia.
                        </p>
                        <p>
                            Tornando alla via Roma, attraverso un arco di roccia che viene chiuso in caso di mareggiate, si arriva ad una spiaggetta sabbiosa. Da qui, in un'ora di 
                            cammino è possibile arrivare al <b>santuario ella Madonna di Reggio</b>, che risale all'XI secolo ed è stato in parte ricostruito. Un tratto del Sentiero 
                            Verde Azzurro parte proprio da via Roma e porta, in salita, ad un punto di osservazione panoramico sul porticciolo.
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
