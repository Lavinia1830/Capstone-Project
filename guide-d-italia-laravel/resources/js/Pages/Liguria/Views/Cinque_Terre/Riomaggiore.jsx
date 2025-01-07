import React  from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Riomaggiore(props) {
    return (
        <>
            <Head title='Riomaggiore'/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='riomaggiore' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Riomaggiore</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Borghi</p>
                    </div>
                    <div className='margin mt-3'>
                        <p>
                            <strong>Riomaggiore</strong> fa parte delle <b>Cinque Terre</b>, un insieme di antichi borghi da cartolina sulla Riviera Ligure.
                            Una delle vie principali di Riomaggiore è <b>via Colombo</b> che porta alla parte alta del paese, su cui svetta la grande 
                            chiesa di S. Giovanni Battista con la sua facciata neogotica e un rosone in marmo di Carrara. Al suo interno la chiesa conserva 
                            un Crocifisso ligneo del Maragliano, un trittico della Madonna con bambino e i santi Rocco e Sebastiano. Salendo ancora, oltre 
                            la chiesa, si arriva ai resti del <b>castello</b>, costruito tre XIII e XVI secolo, che oggi ospita eventi e convegni. 
                            Da <strong>Riomaggiore</strong> oarte la <b>Via dell'Amore</b>, un sentierp percorribile a piedi che collega il borgo 
                            con <Link href='/borghi/liguria/cinque_terre/manarola' className='text-decoration-none color_link'>Manarola</Link>. 
                            Un altro sentiero, invece, porta al <b>santuario della Madonna di Montenero</b> che custodisce la sacra immagine dell'Assunzione 
                            della Vergine. Da qui si apre una bellissima vista sul paese e sul mare.
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
