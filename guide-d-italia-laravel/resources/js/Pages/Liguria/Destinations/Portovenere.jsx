import React  from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Portovenere(props) {
    return (
        <>
            <Head title='Portevenere'/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='portovenere' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Portovenere</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Città</p>
                    </div>
                    <div className='margin mt-3'>
                        <p>
                            <strong>Portovenere</strong> è una delle mete preferite della <b>Riviera Ligure</b>. La parte antica del borgo è chiusa al traffico e si sviluppa su un
                            promontorio carattwrizzato da una serie di edifici alti e colorati. Nel XII secolo il borgo è stato preso sotto l'ala di <Link href='/destinazioni/liguria/genova' 
                            className='text-decoration-none color_link'>Genova</Link> e <b>fortificato</b> per fare da balualdo contro la città di <Link href='/destinazioni/toscana/pisa'
                            className='text-decoration-none color_link'>Pisa</Link>. Della fortificazione rimane un'antica porta che oggi costiruisce uno degli ingressi del paese. 
                            La <b>via Capellini</b> è la via principale che, stretta e ripida con i suoi gradoni, sale fino alla punta del promontorio con la <Link 
                            href='/visite/liguria/portovenere/chiesa_di_san_pietro' className='text-decoration-none color_link'>chiesa di S. Pietro</Link>:
                            il corpo è paleocristiono in marmo nero del VI secolo, con una parte in stile gotico a fasce e un grosso campanile che svolgeva funzione difensiva. La chiesa è 
                            strettab da una <b>loggetta romanica</b> ad archi, da cui si ha un belvedere sul Golfo. Qui si trovava una volt il <Link href='/storia/liguria/portovenere/tempio_di_venere'
                            className='text-decoration-none color_link'>tempio di Venere</Link> che diede il nome al 
                            borgo.
                        </p>
                        <p>
                            Se, invece, si percorre la via Capellini in discesa si arriva al porticciolo e alla <Link href='/visite/liguria/portovenere/grotta_arpaia' 
                            className='text-decoration-none color_link'>grotta Arpaia</Link> che è stata intitolata a <b>Lord Byron</b>. Si diceva che il poeta si recasse lì per meditare e, 
                            innamorato del borgo, dedicò un poema a <strong>Portovenere</strong>. La <Link href='/visite/liguria/portovenere/chiesa_di_san_lorenzo' className='text-decoration-none color_link'>chiesa 
                            di S. Lorenzo</Link> del XII secolo è anche conosciuta come Santuario della Madonna Bianca ed è stata pi1u volte restaurata a causa di incendi e cannoneggiamanti che, 
                            nel corso del tempo, ne hanno rovinato la struttura. Da questa chiesa si può salire fino al <Link href='/viviste/liguria/portvenere/castello_doria' 
                            className='text-decoration-none color_link'>castello Doria</Link>, che oggi ospita mostre artistiche.
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
