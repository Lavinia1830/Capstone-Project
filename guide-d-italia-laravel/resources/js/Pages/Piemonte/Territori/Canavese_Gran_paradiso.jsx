import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Canavese_Gran_paradiso(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='canavese' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Canavese, Gran Paradiso e Valli di Lanzo</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Territori</p>
            </div>
            <div className="margin mt-3">
                <p>
                    Avete presente la sensazione che si ha quando si riceve un regalo inaspettato? Ecco, quel misto di sorpresa, gioia e curiosità per ciò che ci si trova davanti è esattamente il sentimento che vivrete nell’esplorare il Canavese, un territorio molto 
                    spesso trascurato dai viaggiatori e che tuttavia nasconde bellezze e tradizioni millenarie che vi lasceranno senza fiato. Non solo visitando l’elegante Ivrea, conosciuta più per il Carnevale che non per il suo elegante centro storico, ma anche 
                    (e forse soprattutto) esplorando la vasta e variegata regione circostante. <br/>
                    Qui troverete chiese medievali coperte di affreschi, stupendi castelli che proteggono capolavori artistici e all’interno dei quali si è fatta la storia d’Italia, e poi ancora laghi, fiumi e colline che offrono scenari da cartolina. E se quel che 
                    cercate è la montagna, con il suo ventaglio di attività all’aria aperta, dovrete solo spostarvi più a nord, nelle rigogliose Valli di Lanzo o ai piedi del Massiccio del Gran Paradiso, dove i boschi e le alte vette innevate saranno soltanto l’ultimo 
                    capolavoro davanti al quale proverete quel piacevole senso di beatitudine.
                </p>
            </div>
        </main>
        <Footer/>
    </AuthenticatedLayout>
  )
}
