import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Asti_Alessandria_e_il_Monferrato(props) {
  return (
    <>
      <Head title="Asti, Alessandria e il Monferrato"/>
      <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
      >
        <main>
          <div className='a_a_e_il_m' style={{ position: 'relative' }}>
            <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Asti, Alessandria e il Monferrato</h1>
            <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
            <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Territori</p>
          </div>
          <div className="margin mt-3">
            <p>
              Il <Link href='/destinazione/piemonte/monferrato' className='text-decoration-none color_link'>Monferrato</Link>, quell’ampia porzione di territorio a 
              sud del <Link href='/piemonte' className='text-decoration-none color_link'>Piemonte</Link> che si estende dal <Link href='/fiumi/piemonte/fiume_po' 
              className='text-decoration-none color_link'>Po</Link> fin quasi alla <Link href='/liguria' 
              className='text-decoration-none color_link'>Liguria</Link>, è una terra antica. Il suo nome è legato alla romantica figura del marchese Aleramo, 
              vissuto tra il 904 e il 993, e a quella sua sfrenata corsa a cavallo durata tre giorni e tre notti concessagli dall’imperatore Ottone per definire i 
              confini della terra che il 21 marzo dell’anno 967 sarebbe diventata sua; l’avrebbe infatti chiamata Monferrato dal mattone (mòn) che utilizzò per 
              ferrare il cavallo, rimasto privo di un ferro (fèr) durante l’irrefrenabile cavalcata.<br/>
              Otre a essere antica, quella del Monferrato è una terra autentica, rimasta fuori dai grandi circuiti turistici che hanno portato le Langhe alla 
              ribalta del mondo. Ma, come le Langhe, ha moltissimi motivi d’incanto. Anche qui ci sono i tartufi e le vigne che risalgono i colli fino a incidersi 
              nel cielo, e in cima le panchine giganti dell’americano Chris Bangle che regalano panorami mozzafiato su Alpi e Appennini. E poi i piccoli paesi 
              disseminati sulle colline, spesso sovrastati da castelli e ognuno portatore di sapori unici: la Robiola di Roccaverano, il cardo gobbo di Nizza, i 
              bolliti misti di Moncalvo, gli amaretti di Mombaruzzo e così via.<br/>
              Difficile consigliare una città più che un’altra: ad <Link href='/destinazioni/piemonte/asti' 
              className='text-decoration-none color_link'>Asti</Link> si celebrano il Medioevo e il barocco, Vittorio e Benedetto Alfieri, ma l’appuntamento 
              irrinunciabile è il Palio. Casale ha dalla sua parte il Po, il castello e una sinagoga sontuosa; <Link href='/destinazione/piemonte/alessandria'
              className='text-decoration-none color_link'>Alessandria</Link> i cappelli Borsalino e un imperdibile ciclo pittorico ispirato alle peripezie 
              letterarie del celebre Lancillotto; Acqui le sorgenti termali e Tortona le tele di Giuseppe Pelizza da Volpedo. A voi la scelta di quale viaggio 
              intraprendere...
            </p>
          </div>
        </main>
        <Footer/>
      </AuthenticatedLayout>
    </>
    
  )
}
