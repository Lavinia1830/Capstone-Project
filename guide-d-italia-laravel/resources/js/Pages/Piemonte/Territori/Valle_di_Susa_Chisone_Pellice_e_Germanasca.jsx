import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Valle_di_Susa_Chisone_Pellice_e_Germanasca(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='vds_c_p_e_g' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Valle si Susa, Chisone, Pellice e Germanasca </h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Territori</p>
            </div>
            <div className="margin mt-3">
                <p>
                    Molti puristi della montagna disdegnano le valli più prossime al capoluogo regionale per l’eccessiva antropizzazione e un’identità un po’ troppo modaiola, lontana dalle più idilliche sembianze dei territori confinanti. Tutto vero, e basta percorrere la Val Susa in 
                    autostrada fino a Bardonecchia per rendersene conto. Ma per le stesse ragioni c’è invece chi si innamorerà di queste valli: la loro centralità nella storia ha lasciato in dote un patrimonio artistico strabiliante, che spazia da capolavori pittorici ad architetture 
                    militari e superbi edifici sacri; inoltre, la consolidata tradizione negli sport invernali e la presenza di ottime infrastrutture e servizi, potenziati con i XX Giochi Olimpici invernali del 2006, accompagna l’inarrestabile successo di uno tra i più imponenti 
                    comprensori sciistici dell’intera Europa.<br/>
                    E tutto questo non preclude la presenza di superbi scenari naturali, angoli incontaminati, tradizioni secolari e addirittura istituzioni religiose sopravvissute miracolosamente alle persecuzioni di secoli interi. In definitiva, se siete alla ricerca di un posto in 
                    cui ritirarvi per giorni in contemplazione, forse è meglio che guardiate due o tre valli più a sud; ma se dal vostro viaggio esigete esperienze molteplici (sport, cultura e magari anche un ristorante di tendenza), allora questi sono davvero i luoghi giusti per voi.
                </p>
                
            </div>
        </main>
        <Footer/>
    </AuthenticatedLayout>
  )
}
