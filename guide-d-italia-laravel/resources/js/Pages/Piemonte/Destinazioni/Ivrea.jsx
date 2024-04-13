import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Ivrea(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='ivrea' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Ivrea</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Città</p>
            </div>
            <div className="margin mt-3">
                <p>
                    Raccolta ed elegante, con un lungo asse pedonale che attraversa il centro, Ivrea è una cittadina piacevole e animata, piena di locali, negozi e spazi culturali da vivere tutto l’anno. E anche se il meglio di sé lo dà durante il Carnevale, 
                    quando le strade si riempiono di migliaia di personaggi in costume pronti a sfidarsi in una battaglia a colpi di arance, non pensiate che sia questo l’unico momento buono per visitarla. Qui, dove nacque l’Olivetti, e dove la Dora Baltea 
                    scorre impetuosa, troverete sempre qualcosa di bello da fare.
                </p>
                <h2 className="color-subtitle">Ivrea, cosa vedere</h2>
                <p>
                    Il Duomo di Ivrea è uno degli edifici cittadini da includere assolutamente nel tour dell’eporediese. Ma il turismo, a Ivrea, ruota senz’altro intorno ai festeggiamenti del Carnevale e al Museo Olivetti, che in città è una vera istituzione. Il 
                    primo è un condensato storico e folkloristico che si tramanda da generazioni e coinvolge tutta la città. Il secondo è un tributo all’uomo che ha fatto grande questi luoghi e che nessun abitante di Ivrea potrà mai dimenticare. Anche il Museo 
                    Garda a Ivrea è un pilastro culturale: intitolato a Pier Alessandro Garda, è un museo civico ricco di storia, incastonato nel bellissimo contesto dell’antico Monastero di Santa Chiara.
                </p>
            </div>
        </main>
        <Footer/>
    </AuthenticatedLayout>
  )
}
