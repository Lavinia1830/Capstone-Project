import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Cuneo(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='cuneo' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Cuneo</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Città</p>
            </div>
            <div className="margin mt-3">
                <p>
                    La Cuneo turistica rimane spesso celata a chi, spesso pieno di pregiudizi, non la inserisce in un itinerario alla scoperta del Piemonte. Non è un caso che, a chiunque sia stato in città qualche anno fa, visitare Cuneo abbia ricordato quegli 
                    adolescenti goffi e un po’ impacciati che una volta raggiunta la maturità rifulgono, all’improvviso, di una compiuta e inaspettata bellezza. <br/>
                    E in effetti, dopo le recenti opere di riqualificazione come la pedonalizzazione di Via Roma, il restauro degli edifici di Contrada Mondovì e l’incessante apertura di ristoranti), la mappa di Cuneo ora è più variegata e più appetibile per il 
                    viaggiatore. Il turismo a Cuneo oggi accende i riflettori su questo capoluogo, che non è più soltanto il centro di gravità delle valli circostanti, un luogo di passaggio quasi obbligato per esplorare le superlative montagne che sovrastano il 
                    suo orizzonte, ma una destinazione sofisticata e orgogliosa, cui rendere omaggio e la dovuta considerazione.
                </p>
                <h2 className="color-subtitle">Cosa vedere a Cuneo</h2>
                <p>
                    Lo stile di Cuneo è quello della tipica città sabauda, che a un primo sguardo potrebbe sembrare austera e distaccata mentre in realtà riserva sorprese, da più punti di vista. La Cuneo da vedere e da scoprire si rivela a Piazza Galimberti, via 
                    Roma e la Cattedrale di Santa Maria del Bosco. Passeggiare tra i suoi palazzi e i bei negozi è un tuffo nel vero Piemonte: Cuneo e dintorni, con le belle Mondovì, Saluzzo e Bra in cima alla lista dei borghi piemontesi da visitare, rimane 
                    comunque un’esperienza unica per scoprire le atmosfere di una regione che non smette di stupire.
                </p>
            </div>
        </main>
        <Footer/>
    </AuthenticatedLayout>
  )
}
