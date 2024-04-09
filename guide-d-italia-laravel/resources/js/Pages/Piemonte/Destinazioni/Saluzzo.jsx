import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Saluzzo(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='saluzzo' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Saluzzo</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Città</p>
            </div>
            <div className="margin mt-3">
                <p>
                    Provate a immaginare un borgo da cartolina, con stradine acciottolate, porticati, terrazzini fioriti, piazzette in cui si danno convegno gli innamorati, chiesette che profumano di spiritualità, facciate affrescate e l’immancabile fortezza 
                    sulla sommità. Così avrete la <b>Saluzzo turistica</b>, che concretizza nella realtà gli svolazzi della fantasia. E se a rompere l’incantesimo ci sono i sobborghi industriali, è pur vero che le Alpi, con il Monviso che domina, ripagano la 
                    vista.
                </p>
                <h2 className="color-subtitle">Saluzzo, cosa vedere nel salotto del Piemonte</h2>
                <p>
                    La Saluzzo da visitare si snoda sulle colline nei dintorni di Cuneo, con il Monviso che guarda dalla sua postazione imponente questo borgo bellissimo e fotogenico. Alla <b>mappa di Saluzzo</b> aggiungete la posizione sensazionale, la ricca 
                    offerta culturale, le succulente mele coltivate nei dintorni e capirete perché la città dell’antico marchesato costituisce una tappa fondamentale di un viaggio in Piemonte. Città della musica, con l’Antico Monastero dell’Annunziata nel 
                    <b> centro storico di Saluzzo</b> a contenere l’esuberante bellezza delle note di chi si iscrive alla Scuola di Alto Perfezionamento Musicale, a Saluzzo il turismo si abbina alle passeggiate lente nel borgo, nel Giardino Botanico di Villa 
                    Bricherasio e ovviamente nella casa in cui è nato Silvio Pellico.
                </p>
            </div>
        </main>
        <Footer/>
    </AuthenticatedLayout>
  )
}
