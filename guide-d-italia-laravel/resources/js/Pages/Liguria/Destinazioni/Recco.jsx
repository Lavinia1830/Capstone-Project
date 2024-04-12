import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';

export default function Recco(props) {
  return (
    <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        >
        <main>
            <div className='recco' style={{ position: 'relative' }}>
            <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Recco</h1>
            <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
            <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
            </div>
            <div className="margin mt-3">
                <h2 className='color-subtitle'>La patria della focaccia al formaggio </h2>
                <p>
                    Situata in una piccola insenatura del Golfo del Paradiso, tra i comuni di Sori e <Link href='/destinazioni/camogli' className='text-decoration-none color_link'>Camogli</Link>, <strong>Recco</strong> è considerata la porta d’accesso alla Riviera di Levante e al Tigullio. Rinomata 
                    località turistica ligure, celebre per la sua <b>focaccia al formaggio</b>, dista appena 30 minuti di auto da <b>Portofino</b> e vanta un pittoresco centro storico.
                </p>
                <p>
                    Uno degli edifici più noti è il <b>Santuario della Madonna del Suffragio</b> della metà del Settecento, con il suo alto campanile che rende riconoscibile la cittadina anche da lontano. Un altro edificio religioso degno di nota è la <b>Chiesa di Nostra Signora delle Grazie </b> 
                    nella frazione di Megli, al cui interno è custodita quella che è ritenuta una spina della corona del Cristo. Merita senz’altro una visita <b>Villa Dufour</b>, nella frazione di Mulinetti. Eretta nel 1894 e oggi patrocinata dal FAI, ha uno stile architettonico molto vario, che 
                    spazia dal neo-manierismo al neo-barocco. Il giardino si affaccia sul mare, mentre a monte si sviluppa in terrazzamenti. 
                </p>
                <p>
                    Nel centro città si trovano due <b>spiagge</b> attrezzate e alle loro estremità due spiagge libere con ciottoli. L’arenile più adatto ai bambini è quello più lontano dalla stazione, vicino al parco: qui i fondali sono bassi ed è presente un’area giochi. Se volete esplorare il 
                    litorale, vi segnaliamo <b>Camogli</b> e la <b>baia di Paraggi</b>, a mezz’ora di auto, mentre <b>la baia di San Fruttuoso</b> è raggiungibile in battello.  
                </p>
            </div>
        </main>
        <Footer/>
        </AuthenticatedLayout>
  )
}
