import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Murazzi(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='murazzi' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Murazzi</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
            </div>
            <div className="margin mt-3">
                <p>
                    I Murazzi di Torino sono una parte iconica della città che ha una storia ricca e interessante. Situati lungo il fiume Po, i Murazzi sono una serie di 
                    argini e moli che un tempo svolgevano un ruolo cruciale nel sistema di trasporto fluviale della città e nell'industria locale.
                </p>
                <p>
                    La storia dei Murazzi risale al XVIII secolo, quando furono costruiti per proteggere la città dalle inondazioni del fiume Po e per facilitare il 
                    commercio fluviale. Nel corso del tempo, i Murazzi divennero un importante centro commerciale e industriale, con magazzini, cantieri navali, e depositi 
                    lungo le sue sponde. Inoltre, divennero anche un luogo di svago e intrattenimento per i residenti di Torino, con bar, caffè e locali notturni che si 
                    affacciavano sul fiume.
                </p>
                <p>
                    Durante il XIX e XX secolo, i Murazzi furono testimoni di cambiamenti significativi nella storia di Torino, inclusi periodi di crescita economica e di 
                    crisi industriale. Tuttavia, negli ultimi decenni del XX secolo, l'area dei Murazzi cadde in declino, con molti dei suoi edifici abbandonati e 
                    trascurati.
                </p>
                <p>
                    Negli ultimi anni, i Murazzi sono stati oggetto di rinnovamento e riqualificazione urbana. Oggi, sono diventati una delle zone più vivaci della vita 
                    notturna torinese, con una grande varietà di bar, ristoranti e locali notturni che attrae sia i residenti che i turisti. L'area dei Murazzi è diventata un 
                    punto di riferimento per la cultura giovanile e alternativa della città, mantenendo al contempo il suo fascino storico e il suo legame con il fiume Po.
                </p>
            </div>
            <div className='margin mb-4'>
                <h3 className='color-subtitle text-center'>Mappa</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3335.6121062438065!2d7.691159276583435!3d45.06131326022917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886d61b714b10d%3A0x3f5008254f185e6!2sMurazzi%20del%20Po%20Gipo%20Farassino%2C%20Torino%20TO!5e1!3m2!1sit!2sit!4v1712588609995!5m2!1sit!2sit"
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
