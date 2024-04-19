import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Duomo_di_Cagliari(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='duomo_di_cagliari' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Duomo di Cagliari</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className='margin mt-3'>
                    <p className='fst-italic text-center'>
                        Nel cuore del capoluogo sardo c’è il monumento più importante e famoso del quartiere di Castello, nonché un pezzo di storia: è il duomo di Cagliari, eretto nel XIII secolo e ristrutturato in varie fasi, luogo di culto e centro della vita politica
                    </p>
                    <p>
                        Arrivando a Cagliari in aereo, è impossibile non notare la sua cupola. La cattedrale di Santa Maria, l’edificio di culto simbolo della città insieme alla <b>basilica di Bonaria</b>, svetta sul quartiere di <b>Castello</b> con una mole imponente, affiancata a <b>Palazzo Regio</b> e 
                        all’antico Palazzo di città. La chiesa, lunga 35 metri, larga 34 e alta 32, fu costruita in forme gotico-romaniche. Se ne ha notizia dal 1255: era la cattedrale con patrona santa Cecilia (poi fu intitolata a Santa Maria). Tra XIII e XIV secolo i pisani la ampliarono, ma la veste 
                        attuale è il risultato di interventi catalano-aragonesi durati quattro secoli. Con un’appendice a inizio 1900: la facciata barocca in marmo risalente al 1704, ispirata alle cattedrali di Lucca e Pisa, fu smantellata nella vana speranza di trovare sotto quella medioevale. Fu 
                        rimpiazzata nel 1931 con una struttura marmorea neoromanica.<br/>
                        Le forme barocche risalgono ai lavori del quinquennio 1669-74: ampliamento della navata centrale e realizzazione di pilastri a sostegno della nuova e più alta copertura e della celebre cupola. I lavori conferirono al Duomo una fisionomia slanciata, esaltandone la maestosità. 
                        Dell’originario impianto pisano rimasero torre campanaria, controfacciata, muri perimetrali del transetto e i due portali laterali.<br/>
                        La pianta è a croce latina: tre navate e transetto, pavimento in marmo e cappelle arricchite da opere come il tabernacolo d’argento e la Sacra Spina. Addossato alla parete della navata centrale, c’è il pergamo di Guglielmo, pulpito scolpito per la cattedrale di Pisa, poi trasferito 
                        a Cagliari (1312). Di grande valore anche la Madonna col Bambino, scultura lignea dorata (XIV secolo), la lampada d’argento di Giovanni Mameli (1602) e i dipinti del soffitto centrale, opera di Filippo Figari.<br/>
                        Sotto l’altare ecco il <b>santuario dei Martiri</b>, un a cripta scavata nella roccia (1618), che conserva 192 reliquie, distribuite in nicchie, opera di maestri cagliaritani e siciliani. Nella sacrestia è conservato il tesoro della cattedrale: spiccano il Trittico di Clemente VII, 
                        attribuito a una bottega fiamminga (XV secolo), il Retablo dei Beneficiati, creazione di artisti napoletani e il meraviglioso paliotto opera di argentieri palermitani.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d528.3664221434207!2d9.11667518539693!3d39.218720007943936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e7340e8c808243%3A0xafea20fdcd17fac8!2sCattedrale%20di%20Santa%20Maria%20Assunta%20e%20Santa%20Cecilia!5e1!3m2!1sit!2sit!4v1713531916238!5m2!1sit!2sit"
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

