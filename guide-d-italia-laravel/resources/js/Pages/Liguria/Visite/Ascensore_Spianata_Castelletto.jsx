import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Ascensore_Spianata_Castelletto(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='ascensore_del_castelletto' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>L'Ascensore Spianata Castelletto</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
            </div>
            <div className="margin mt-3">
                <p>
                    <b>Suggestiva “terrazza” sospesa sul Centro Storico</b> con <b>vista spettacolare sulla città e sul porto</b>. Emozionante 
                    salirci con l'<b>ascensore liberty</b>.
                </p>
                <p className='text-center '>
                    <i>"Quando mi sarò deciso<br/>
                    d'andarci in paradiso<br/>
                    ci andrò con l'ascensore<br/>
                    di Castelletto…"</i><br/>
                    (Giorgio Caproni, da “L'ascensore”)
                </p>
                <p>
                    Da qui si possono ammirare i tetti  delle vecchie case in ardesia, materiale tipico in questa zona,  torri medievali e cupole barocche; in lontananza il mare animato da navi moderne e da memorie antiche.
                </p>
                <p>
                    Come quinte, le alture della città punteggiate da parchi, ville, santuari e coronate da fortezze.
                </p>
                <p>
                    Fino al 1849, al posto di questo magnifico belvedere, affacciato sulla città, c'era la fortezza di Castelletto, che venne appunto spianata, a furor di popolo, dato che poteva costituire una temibile minaccia, in caso di occupazione nemica, per la città sottostante.
                </p>
                <p>
                    Dal 1910, quando le fotografie di Alinari ne diffusero la bellezza, la spianata/belvedere di Castelletto è entrata nell'elenco delle meraviglie genovesi da non perdere. Oltre che dalla panoramicissima Circonvallazione a Monte (tracciata nella seconda metà del XIX secolo, a mezza costa), la 
                    spianata è raggiungibile in ascensore. L'ascensore, che sale da Piazza Portello a due passi da Strada Nuova, conserva tutt'ora il fascino liberty dell'epoca in cui venne realizzato.
                </p>
                <p>
                    Per raggiungere la splendida terrazza panoramica di Castelletto potete anche salire su per le creuze, le caratteristiche strade pedonali mattonate, che un tempo erano le "tangenziali" che portavano i viaggiatori fuori Genova, proprio quelle cantate da Fabrizio De Andrè.<br/>
                    Da via Garibaldi, subito dopo Palazzo Bianco, parte Salita San Francesco, che poi diventa Salita a Spianata Castelletto: in pochi passi si verrà trasportati dal brusio della città al silenzio di case colorate, piccoli giardini fioriti e di alcuni punti perfetti per scattare fotografie indimenticabili. 
                    O semplicemente, come fanno da sempre i genovesi, per prendersi un attimo di relax e assaporare con calma un gustoso gelato o una granita fatta a regola d'arte. 
                </p>
            </div>
            <div className='margin mb-4'>
                <h3 className='color-subtitle text-center'>Mappa</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1686.6050326530321!2d8.931498639278363!3d44.413202631235166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d343e431582e1d%3A0xc6203d1cc3e614c7!2sAscensore%20Castelletto%20Ponente!5e1!3m2!1sit!2sit!4v1712758717247!5m2!1sit!2sit"
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
