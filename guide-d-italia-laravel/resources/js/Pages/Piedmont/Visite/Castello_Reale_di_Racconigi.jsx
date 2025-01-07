import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Castello_Reale_di_Racconigi(props) {
    return (
        <>
            <Head title="Castello Reale di Racconigi"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='castello_reale_di_racconigi' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Piazza Martini</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Inizialmente costruito come <b>fortezza</b> nella <b>Marca di Torino</b> nell’<b>XI secolo</b>, il <strong>Castello di Racconigi</strong> passò nelle mani 
                            dei <b>Marchesi di Saluzzo</b> e poi ai <b>Savoia</b>. Nel <b>Seicento</b>, con l’elevazione del castello a <b>dimora reale</b>, <b>André Le Nôtre</b> progettò 
                            il giardino e <b>Guarino Guarini</b> realizzò una completa ristrutturazione dell’edificio, non portata a termine. A partire dal <b>1755</b>, per volontà 
                            del <b>Principe Luigi di Savoia-Carignano</b>, l’architetto <b>Giambattista Borra</b> ricostruì il castello, aggiungendo <b>padiglioni</b>, un grande <b>pronao</b>, 
                            un <b>salone</b> con la “<b>loggia dei musici</b>”, una <b>sala di Diana</b> e i <b>Gabinetti Cinesi</b>. Fu solo con l’ascesa al trono di <b>Carlo Alberto</b>, 
                            Principe di Carignano, che la residenza assunse la sua forma attuale: nel <b>1820 Xavier Kurten</b> ridisegnò gli <b>spazi verdi</b>, mentre <b>Pelagio Palagi</b> decorò 
                            e riallestì gli <b>interni</b>, sfoggiando un gusto <b>eclettico-neoclassico</b>, ben rappresentato da ambienti come il <b>Gabinetto Etrusco</b>. Contemporaneamente, 
                            vennero costruiti, ai margini del parco, edifici di servizio in stile <b>neogotico</b>, come le <b>Serre</b> e la <b>Margaria</b>, per gestire in modo agricolo il 
                            territorio di pertinenza del castello. Col trasferimento della <b>capitale</b> da <Link href='/destinazione/piemonte/torino' 
                            className='text-decoration-none color_link'>Torino</Link> a <Link href='/destinazioni/toscana/firenze' className='text-decoration-none'>Firenze</Link> (<b>1865</b>) e 
                            poi a <Link href='/destinazioni/lazio/roma' className='text-decoration-none color_link'>Roma</Link> (<b>1871</b>), la famiglia reale perse gradualmente interesse 
                            per il castello, fino ai primi anni del <b>XX secolo</b>, quando il re <b>Vittorio Emanuele III</b> lo riportò a essere una sede di villeggiatura. Acquistato nel 
                            1980 dallo Stato italiano, il castello si affaccia sul grande <b>Parco Reale</b>, aperto in determinati periodi. Nel <b>Seicento</b>, a nord del palazzo c’era 
                            l’armonioso giardino di Le Nôtre, mentre nel <b>Settecento Giuseppina di Lorena</b> fece trasformare una parte del parco in giardino “<b>all’inglese</b>”. 
                            Nel <b>XIX secolo</b>, parallelamente ai lavori nella residenza, il parco fu ampliato e trasformato da Xavier Kurten, con <b>sentieri tortuosi</b>, 
                            un <b>lago</b> con <b>isoletta</b>, <b>ponticelli</b>, <b>rovine</b>, <b>grotta</b>, edifici <b>pittoreschi</b> e prospettive sempre diverse. Nel dopoguerra, a 
                            causa della mancata manutenzione, il parco si trovò in stato di <b>abbandono</b>. Oggi, dopo <b>restauri</b>, si presenta al visitatore nello stesso aspetto datogli 
                            da Kurten nell’Ottocento, con una grande varietà di <b>specie vegetali</b> e <b>animali protetti</b>, ospitando attività ed eventi <b>culturali</b>.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1593.1725263508051!2d7.674389899652596!3d44.76899976768957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47880245988c99cb%3A0x68b9f39a19fc9e96!2sCastello%20Reale%20di%20Racconigi!5e1!3m2!1sit!2sit!4v1722944738579!5m2!1sit!2sit"
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
