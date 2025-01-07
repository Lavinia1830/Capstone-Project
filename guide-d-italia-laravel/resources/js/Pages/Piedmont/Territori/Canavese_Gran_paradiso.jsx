import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link, Head } from '@inertiajs/react';

export default function Canavese_Gran_Paradiso(props) {
  return (
    <>
      <Head title="Canavese, Gran Paradiso e Valli di Lanzo"/>
      <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
      >
          <main>
              <div className='canavese_gran_paradiso' style={{ position: 'relative' }}>
                  <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Canavese, Gran Paradiso e Valli di Lanzo</h1>
                  <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                  <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Territori</p>
              </div>
              <div className="margin mt-3">
                  <p>
                      <b>Avete presente la sensazione che si ha quando si riceve un regalo inaspettato?</b> Ecco, quel misto di <b>sorpresa</b>, <b>gioia</b> e <b>curiosità</b> per 
                      ciò che ci si trova davanti è esattamente il sentimento che vivrete nell’esplorare il <Link href='/territori/piemonte/canavese' 
                      className='text-decoration-none color_link'>Canavese</Link> , un territorio molto spesso trascurato dai viaggiatori e che tuttavia nasconde bellezze e 
                      tradizioni millenarie che vi lasceranno senza fiato. Non solo visitando l’elegante Ivrea, conosciuta più per il Carnevale che non per il suo elegante centro 
                      storico, ma anche (e forse soprattutto) esplorando la vasta e variegata regione circostante. <br/>
                      Qui troverete chiese medievali coperte di affreschi, stupendi castelli che proteggono capolavori artistici e all’interno dei quali si è fatta la storia d’Italia, 
                      e poi ancora laghi, fiumi e colline che offrono scenari da cartolina. E se quel che cercate è la montagna, con il suo ventaglio di attività all’aria aperta, 
                      dovrete solo spostarvi più a nord, nelle rigogliose <Link href='/territori/piemonte/torino/valle_di_lanzo' className='text-decoration-none color_link'>Valli di Lanzo</Link> o 
                      ai piedi del Massiccio del <Link href='/visite/valle_d_aosta/parco_nazionale_del_gran_paradiso' className='text-decoration-none color_link'>Gran Paradiso</Link>, dove 
                      i boschi e le alte vette innevate saranno soltanto l’ultimo capolavoro davanti al quale proverete quel piacevole senso di beatitudine.
                  </p>
              </div>
          </main>
          <Footer/>
      </AuthenticatedLayout>
    </>
  )
}
