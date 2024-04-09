import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Biella(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='biella' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Biella</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Città</p>
            </div>
            <div className="margin mt-3">
                <p>
                    Il biellese è stato per anni snobbato a causa del suo ingombrante passato industriale. In realtà Biella e dintorni sono luoghi deliziosi. La parte antica, il Piazzo, con i palazzi medievali, le chiese e i bassi portici che si affacciano sulle silenziose strade acciottolate, è una panoramica balconata sulle Prealpi, 
                    mentre quella nuova, ai suoi piedi, è un concentrato d’eleganza ottocentesca che nasconde musei ricchi di opere d’arte.
                </p>
                <h2 className='color-subtitle'>Cosa vedere a Biella</h2>
                <p>
                    Visitare Biella in Piemonte vuol dire scoprire i segreti della città della lana, in una provincia fortemente legata alla tradizione tessile. Non solo: negli anni a Biella le cose da vedere si sono moltiplicate non solo da un punto di vista artistico, culturale o industriale ma anche gastronomico. La produzione di 
                    birra artigianale, qui, è una cosa seria. La mappa di Biella è costellata di birrifici e aziende che hanno fatto della produzione di questa bevanda un vero e proprio presidio di eccellenza.
                </p>
            </div>
        </main>
        <Footer/>
    </AuthenticatedLayout>
  )
}
