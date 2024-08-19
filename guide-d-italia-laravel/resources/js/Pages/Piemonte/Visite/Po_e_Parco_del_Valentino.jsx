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
                        <b>Un grande fiume</b>, circa <b>500.000 mq di verde</b> che lo circondano: è la <b>più grande e amata area naturalistica</b> della città. 
                        Disegnato nell’Ottocento dal paesaggista <b>Barillet-Deschamps</b>, oggi il Valentino è la versione sabauda di <b>Central Park</b>: a qualsiasi 
                        ora del giorno, fino al tramonto, vi troverete <b>jogger</b>, <b>innamorati</b>, <b>ciclisti</b>, <b>roller</b>, <b>skater</b>, torinesi e 
                        stranieri che si riposano e giocano a pallone. Una bella passeggiata su questi <b>argini</b> è un <b>must</b> che chi visita Torino non può 
                        perdere.
                    </p>
                    <p>
                        Lungo le rive del <Link href='/fiumi/fiume_po' className='text-decoration-none color_link'>fiume Po</Link>, uno dei <b>parchi più 
                        antichi</b> di <Link href='/destinazioni/piemonte/torino' className='text-decoration-none color_link'>Torino</Link> dove godersi <b>aria 
                        fresca</b>, passeggiare <b>all’aperto</b>, a piedi o in bicicletta, lontani dal <b>caos cittadino</b>. Il parco vanta un <b>notevole patrimonio 
                        floristico e arboreo</b>, con circa <b>1800 alberi ad alto fusto</b> e una <b>ricca avifauna</b>, con tante specie di uccelli locali che ben si 
                        adattano all’habitat fluviale come <b>aironi e germani reali</b>. Non solo natura, all’interno dell’area verde si trova il <b>Borgo 
                        Medievale</b> realizzato per valorizzare e diffondere le <b>antiche tradizioni storiche e culturali piemontesi</b>, abitazioni, vie e statue tra 
                        cui quelle dedicate a <b>Massimo D’Azeglio</b> e <b>Cesare Battisti</b>, fontane come la <b>Fontana dei dodici mesi</b> con una grande vasca in 
                        stile rococò, e il caratteristico <b>Giardino Roccioso</b> con le stradine lastricate, i ruscelli e i giochi d’acqua. Sarà possibile fare una 
                        sosta ad uno dei tanti <b>bar e locali</b> o salire sul <b>battello per navigare il Po</b>. Nel <b>Parco</b> inoltre si svolgono 
                        diverse <b>iniziative</b>, <b>eventi e spettacoli di intrattenimento</b>.
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
