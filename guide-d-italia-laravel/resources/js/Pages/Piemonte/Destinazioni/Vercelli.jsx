import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Vercelli(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='vercelli' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Vercelli</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Città</p>
            </div>
            <div className="margin mt-3">
                <p>
                    Visitare Vercelli vuol dire fare un tuffo nella sua storia. Fondata dai celti e colonizzata dai romani (II secolo a.C.), dopo aver attraversato l’Alto Medioevo un po’ in sordina, occupata prima dai longobardi e poi dai franchi, Vercelli si allea con Milano e nel 1167 entra nella Lega Lombarda. Nel Duecento diventa libero 
                    comune, controlla un territorio esteso dalle Alpi alla Dora Baltea e diventa uno dei centri più importanti del nord della penisola. Passata nella prima metà del XIV secolo ai Visconti, quindi ai Savoia e agli spagnoli, la città vive decenni di povertà, tra carestie e assedi che la devastano. Con le vittorie di Napoleone e 
                    l’annessione alla Francia rinasce: vengono costruiti nuovi edifici pubblici, realizzati i viali lungo il perimetro delle antiche mura e gettate le basi per il suo sviluppo economico in ambito agricolo, che – dopo l’Unità d’Italia e le guerre mondiali – la configura oggi come la capitale europea del riso
                </p>
                <h2 className='color-subtitle'>Vercelli, cosa vedere</h2>
                <p>
                    Musei straordinariamente ricchi, chiese affascinanti, un centro storico animato ed elegante, e genuine trattorie dove si mangia una cucina semplice e gustosa: tutto questo offre la mappa di Vercelli, una delle più belle sorprese che vi attendono lungo il viaggio in Piemonte.
                </p>
                <h2 className='color-subtitle'> Vercelli, monumenti da scoprire</h2>
                <p>
                    Cosa visitare a Vercelli, quando i palazzi antichi si susseguono senza sosta, dando spazio anche a Musei, chiese e cattedrali perfettamente conservate? Dall’Antico Chiostro di San Graziano, passando per la Basilica di Sant’Andrea e la Cattedrale di Sant’Eusebio, a Vercelli turismo fa rima con arte e cultura. L’offerta 
                    museale poi esplode nel Museo Borgogna e in quello del Tesoro del Duomo di Vercelli, piccolo capolavoro pullulante di ricchezze.
                </p>
            </div>
        </main>
        <Footer/>
    </AuthenticatedLayout>
  )
}
