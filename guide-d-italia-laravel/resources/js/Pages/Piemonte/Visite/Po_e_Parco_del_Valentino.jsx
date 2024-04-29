import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link, Head } from '@inertiajs/react';


export default function Po_e_Parco_del_Valentino(props) {
  return (
    <>
        <Head title="Po e Parco del Valentino"/>
        <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        >
            <main>
                <div className='po_e_parco_del_valentino' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Po e Parco del Valentino</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Un grande fiume, circa 500.000 mq di verde che lo circondano: è la più grande e amata area naturalistica della città. Disegnato nell’Ottocento dal paesaggista Barillet-Deschamps, oggi il Valentino è la versione sabauda di Central Park: a qualsiasi ora del giorno, fino 
                        al tramonto, vi troverete jogger, innamorati, ciclisti, roller, skater, torinesi e stranieri che si riposano e giocano a pallone. Una bella passeggiata su questi argini è un must che chi visita Torino non può perdere.
                    </p>
                    <p>
                        Lungo le rive del fiume Po, uno dei parchi più antichi di <Link href='/destinazioni/piemonte/torino' className='text-decoration-none color_link'>Torino</Link> dove godersi aria fresca, passeggiare all’aperto, a piedi o in bicicletta, lontani dal caos cittadino. Il parco vanta 
                        un notevole patrimonio floristico e arboreo, con circa 1800 alberi ad alto fusto e una ricca avifauna, con tante specie di uccelli locali che ben si adattano all’habitat fluviale come aironi e germani reali. Non solo natura, all’interno dell’area verde si trova il Borgo Medievale 
                        realizzato per valorizzare e diffondere le antiche tradizioni storiche e culturali piemontesi, abitazioni, vie e statue tra cui quelle dedicate a Massimo D’Azeglio e Cesare Battisti, fontane come la Fontana dei dodici mesi con una grande vasca in stile rococò, e il caratteristico 
                        Giardino Roccioso con le stradine lastricate, i ruscelli e i giochi d’acqua. Sarà possibile fare una sosta ad uno dei tanti bar e locali o salire sul battello per navigare il Po. Nel Parco inoltre si svolgono diverse iniziative, eventi e spettacoli di intrattenimento.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.0208742964915!2d7.684769148778536!3d45.054835489880894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886d5a5b537cf7%3A0x302a325cef683e8f!2sParco%20del%20Valentino!5e1!3m2!1sit!2sit!4v1712577854521!5m2!1sit!2sit"
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
    </>
    
  )
}
