import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Monte_dei_Cappuccini(props) {
  return (
    <>
        <Head title="Monte dei Cappuccini"/>
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='monte_dei_cappuccini' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Monte dei Cappuccini</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Il <strong>Monte dei Cappuccini</strong> è una collina di 325 s.l.m. che <b>sorge nella città di Torino</b>, a circa 200 metri dalla riva destra del <Link href='/fiumi/po' className='text-decoration-none color_link'>Po</Link>, in quartiere Borgo Po. È molto vicino al centro storico, in prossimità 
                        del <Link href='/visite/piemonte/torino/ponte_vittorio_emanuele_i'>Ponte Vittorio Emanuele I</Link>, che dà accesso a Piazza Vittorio Veneto. Su di esso, si erge il convento e la chiesa tardo-rinascimentale, manierista, e con interni barocchi di Santa Maria al <strong>Monte dei Cappuccini</strong> affidati ai frati 
                        Cappuccini, da cui il nome.
                    </p>
                </div>
                <div>
                    <h2 className="color-subtitle">Storia</h2>
                    <h3 className='color-subtitle'>Prima del convento</h3>
                    <p>
                        Questa collina fu utilizzata fin dall'antichità per scopi difensivi, in quanto sovrastante uno dei punti di attraversamento del <b>Po</b>. Gli <b>antichi romani del I secolo a.C.</b> vi dedicarono in cima un piccolo tempio dedicato a <b>Giove</b>, come si evince da resti rinvenuti nel <b>XVI secolo</b>.
                    </p>
                    <p>
                        Una primitiva fortificazione fu eretta dall'<b>XI secolo</b>, ed era composta da una semplice torre, detta <i>Bastita Taurini</i>. Si attesta la successiva presenza una piccola chiesetta romanica dedicata alla Santa Vergine, intorno al <b>IX secolo</b>, detta Santa Maria alla Bastita. Dal 1204 al 1314 il <strong>Monte 
                        dei Cappuccini</strong> fu un presidio fortificato dei <b>Templari</b>; in alcuni recenti scavi sono stati trovarti reperti del periodo che hanno confermato la loro presenza. Sotto i templari, la fortificazione si evolve e si espande. Dopo la scomparsa dei Templari, i <b>Canonici regolari di Sant'Antonio di 
                        Vienne</b> si prendono cura di officiare alla chiesa. Nel 1238 l'imperatore <b>Federico II di Svevia</b> diede la fortificazione a <b>Tommaso II di Savoia</b>, che la modificò in una vera e propria bastida militare, rinforzata a più riprese a causa dei numerosi tentativi di assedio lungo gli anni. Questa rimase possesso 
                        della casa comitale di Savoia fino al <b>1473</b>, quando divenne proprietà privata dei Vasco, poi dei Bersatore di Pinerolo, i Maletto e, infine, i conti Scaravello, che la rivendettero a <b>Carlo Emanuele I</b> di Savoia nel 1581. Questi, al fine di recuperare il consenso cattolico nei territori, donò il monte 
                        all'<b>Ordine dei frati minori Cappuccini</b>, già alloggiati in città nel borgo di <b>Madonna di Campagna</b>, al fine di costruire loro un convento e una nuova chiesa, sempre dedicata alla Vergine Maria.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3335.7126942903765!2d7.694735826239456!3d45.059589128310115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4788729f96b782b7%3A0x8b40c2cb92862ac2!2sPiazzale%20Monte%20dei%20Cappuccini%2C%2010131%20Torino%20TO!5e1!3m2!1sit!2sit!4v1712586210357!5m2!1sit!2sit"
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
