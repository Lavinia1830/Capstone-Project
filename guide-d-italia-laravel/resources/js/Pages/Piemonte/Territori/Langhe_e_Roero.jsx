import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Langhe_e_Roero(props) {
  return (
    <>
      <Head title="Langhe e Roero"/>
      <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
      >
          <main>
              <div className='langhe_e_roero' style={{ position: 'relative' }}>
                  <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Langhe e Roero</h1>
                  <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                  <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Territori</p>
              </div>
              <div className="margin mt-3">
                  <p>
                    Cuore verde della regione, le <Link href='/territori/piemonte/cuneo/langhe' className='text-decoration-none color_link'>Langhe</Link> sono una porzione 
                    di territorio compresa tra le province di <Link href='/destinazioni/piemonte/cuneo' className='text-decoration-none 
                    color_link'>Cuneo</Link>, <Link href='/destinazioni/piemonte/asti' className='text-decoration-none color_link'>Asti</Link> e <Link href='/destinazioni/piemonte/alessandria'
                    className='text-decoration-none color_link'>Alessandria</Link> e costituiscono, insieme al <b>Monferrato</b> e al <b>Roero</b>, un’area del basso <b>Piemonte</b>. Tra 
                    colline e vigneti, la zona è un susseguirsi di borghi medievali che meritano una sosta, a partire da <Link href='/destinazioni/piemonte/alba' className='text-decoration-none 
                    color_link'>Alba</Link>, anche detta la “città delle cento torri” per le sue fortificazioni, celebre in tutto il mondo per il suo pregiato tartufo bianco. A pochi chilometri, 
                    si trova il <Link href='/visite/piemonte/serralunga_d_alba/castello_di_serralunga_d_alba' className='text-decoration-none color_link'>Castello di Serralunga d’Alba</Link> di epoca medievale. 
                    Proseguendo sulla stessa strada si trova il Castello Falletti di Barolo, da dove poter ammirare le colline dall’alto. Scendendo, non dimenticate una sosta all’Enoteca 
                    Regionale del <b>Barolo</b> per un calice di buon rosso. In luglio, a Barolo si tiene il Festival Collisioni, tra gli eventi musicali più affermati in Nord Italia. Se invece 
                    amate le zone più selvagge e incontaminate, l’<b>Alta Longa</b> è quella che fa per voi, con le sue colline brulle dove i vigneti lasciano il posto ai noccioleti. 
                  </p>
                  <p>
                    Spostandovi nel <b>Roero</b>, vi consigliamo una visita al <Link href='/visite/piemonte/gurene/castello_di_guarene' className='text-decoration-none color_link'>Castello di 
                    Guarene</Link> e a <b>Bra</b>, famoso per essere il paese del formaggio oltre che la culla del barocco piemontese. Non perdete neppure le <b>Rocche del Roero</b>, canyon 
                    generatisi 250mila anni fa dalla deviazione del fiume Tanaro. Da qui il Grande sentiero del Roero, che segue la linea che da Bra porta a Cisterna d’Asti, permette di vivere 
                    un’esperienza naturalistica indimenticabile.
                  </p>
              </div>
          </main>
          <Footer/>
      </AuthenticatedLayout>
    </>
    
  )
}
