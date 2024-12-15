import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';

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
                    I <strong>Murazzi</strong> di <b>Torino</b> sono una parte <b>iconica</b> della città che ha una <b>storia</b> ricca e interessante. Situati lungo 
                    il <Link href='/fiumi/fiume_adige' className='text-decoration-none color_link'>fiume Po</Link>, i Murazzi sono una serie di <b>argini</b> e <b>moli</b> che 
                    un tempo svolgevano un ruolo <b>cruciale</b> nel sistema di <b>trasporto fluviale</b> della città e nell'<b>industria</b> locale.
                </p>
                <p>
                    La storia dei Murazzi risale al <b>XVIII secolo</b>, quando furono costruiti per proteggere la città dalle <b>inondazioni</b> del fiume Po e per 
                    facilitare il <b>commercio fluviale</b>. Nel corso del tempo, i Murazzi divennero un importante centro commerciale e industriale, 
                    con <b>magazzini</b>, <b>cantieri navali</b>, e <b>depositi</b> lungo le sue sponde. Inoltre, divennero anche un luogo 
                    di <b>svago</b> e <b>intrattenimento</b> per i residenti di Torino, con <b>bar</b>, <b>caffè</b> e <b>locali notturni</b> che si affacciavano sul fiume.
                </p>
                <p>
                    Durante il <b>XIX</b> e <b>XX secolo</b>, i Murazzi furono testimoni di cambiamenti significativi nella storia di Torino, inclusi periodi 
                    di <b>crescita economica</b> e di <b>crisi industriale</b>. Tuttavia, negli ultimi decenni del XX secolo, l'area dei Murazzi cadde in <b>declino</b>, 
                    con molti dei suoi edifici <b>abbandonati</b> e <b>trascurati</b>.
                </p>
                <p>
                    Negli ultimi anni, i Murazzi sono stati oggetto di <b>rinnovamento</b> e <b>riqualificazione urbana</b>. Oggi, sono diventati una delle zone più 
                    vivaci della <b>vita notturna</b> torinese, con una grande varietà di <b>bar</b>, <b>ristoranti</b> e <b>locali notturni</b> che attrae sia 
                    i <b>residenti</b> che i <b>turisti</b>. L'area dei Murazzi è diventata un punto di riferimento per la <b>cultura giovanile</b> e <b>alternativa</b> della 
                    città, mantenendo al contempo il suo <b>fascino storico</b> e il suo legame con il <b>fiume Po</b>.
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
