import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Monferrato(props) {
    return (
        <>
      <Head title="Monferrato"/>
      <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
      >
        <main>
          <div className='monferrato' style={{ position: 'relative' }}>
            <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Monferrato</h1>
            <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
            <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Territori</p>
          </div>
          <div className="margin mt-3">
            <p>
                Il <strong>Monferrato</strong> è una regione storica del <Link href='/piemonte' className='text-decoration-none color_link'>Piemonte</Link> e parte 
                della <Link href='/liguria' className='text-decoration-none color_link'>Liguria</Link>, nel nord-ovest dell'<b>Italia</b>. Il nome "Monferrato" appare 
                per la prima volta nei documenti del <b>X secolo</b>. Durante il <b>Medioevo</b>, il territorio fu sotto il controllo dei <b>Marchesi di Monferrato</b>, 
                una dinastia influente che governò per secoli. Il periodo di maggior splendore fu durante il <b>XIII secolo</b>, quando i marchesi acquisirono vasti 
                territori e aumentarono il loro potere.
            </p>
            <p>
                Nel <b>XVI secolo</b>, il Monferrato passò sotto il controllo dei <b>Gonzaga di Mantova</b>, grazie a matrimoni strategici. Questa dinastia contribuì alla 
                fioritura culturale e artistica della regione. Tuttavia, con la morte dell'ultimo duca <b>Guglielmo Gonzaga</b> nel <b>1708</b>, il Monferrato fu annesso 
                ai domini dei <b>Savoia</b>.
            </p>
            <p>
                Durante il <b>Risorgimento</b>, il Monferrato giocò un ruolo significativo nel processo di unificazione dell'<b>Italia</b>. La regione fu teatro di 
                battaglie importanti e di movimenti patriottici.
            </p>
            <p>
                Oggi, il Monferrato è noto per il suo <b>patrimonio culturale</b>, i suoi <b>paesaggi collinari</b>, e la produzione di <b>vini pregiati</b>, come 
                il <b>Barbera</b> e il <b>Grignolino</b>. Il territorio è anche riconosciuto come <b>Patrimonio dell'Umanità</b> dall'<b>UNESCO</b> per i 
                suoi <b>paesaggi vitivinicoli</b>.
            </p>
          </div>
        </main>
        <Footer/>
      </AuthenticatedLayout>
    </>
    )
}
