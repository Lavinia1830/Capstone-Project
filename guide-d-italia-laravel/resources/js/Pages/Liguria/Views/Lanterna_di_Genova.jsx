import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';

export default function Lanterna_di_Genova(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='lanterna_di_genova' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Lanterna di Genova</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
            </div>
            <div className="margin mt-3">
                <h2 className='color-subtitle'>Faro e simbolo della città</h2>
                <p>
                    La Lanterna di Genova, <b>icona di <Link href='/destinazioni/genova' className='text-decoration-none color_link'>Genova</Link></b>, con i suoi <b>77 metri</b> è il faro <b>più alto del Mediterraneo e il secondo d'Europa</b>. Ha raggiunto il <b>suo aspetto definitivo nel 1543</b> sul 
                    promontorio di Capo di Faro, ma secondo alcune fonti già nel XII secolo esisteva in questo luogo una torre di guardia di struttura simile. La Lanterna di Genova è tutt’oggi <b>pienamente in funzione</b> e illumina il mare indicando il porto con un periodo di 20 secondi.
                </p>
                <p>
                    Grazie al percorso di visita, salendo i 172 scalini, si può arrivare alla cima della Lanterna e <b>ammirare il panorama sul porto e sulla città vecchia</b>. Nel <b>museo multimediale</b> al suo interno sono raccolte storie e testimonianze su Genova e la sua provincia. Per raggiungere 
                    la Lanterna è possibile percorrere il tratto che, lungo le mura di Genova, la collega al Terminal Traghetti.
                </p>
                <p>
                    E nonostante il passare del tempo e le trasformazioni urbane, Genova rimane “la città all’ombra della Lanterna”. 
                </p>
            </div>
            <div className='margin mb-4'>
                <h3 className='color-subtitle text-center'>Mappa</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13494.792108780122!2d8.894304972763925!3d44.404742166963814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d3416c84a3538d%3A0xcfb7df6fc459bf37!2sLanterna%20di%20Genova!5e1!3m2!1sit!2sit!4v1712736907380!5m2!1sit!2sit"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                    className='mx-auto mappa'
                ></iframe>
            </div>
        </main>
        <Footer/>
    </AuthenticatedLayout>
  )
}
