import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Anfiteatro_Romano_di_Amiternum(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='anfiteatro_romano_di_amiternum' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Anfiteatro romano di Amiternum</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        <strong>L'anfiteatro romano di Amiternum</strong> era il principale anfiteatro dell'antica città sabina di Amiternum, i cui resti archeologici sono situati nei pressi dell'abitato di San Vittorino nel territorio comunale dell'Aquila.
                    </p>
                    <p>
                        La struttura si fa risalire al I secolo d.C., ed è quindi leggermente successiva al teatro romano. Contrariamente a quest'ultimo, l'anfiteatro si staglia all'estremità meridionale della città, lontano dal Foro. La cavea, che si eleva sulla via Amiternina tra il 
                        colle San Marco e il fiume Aterno, ha diametri di 68 e 53 metri misurati rispettivamente sulle direttrici est-ovest (lato parallelo alla scena del teatro) e nord-sud. Le arcate sono 48 e reggevano le gradinate, oggi praticamente scomparse, originariamente disposte 
                        su due piani e rivestite in laterizio; si stima che la capienza complessiva fosse di 6.000 persone. Dell'anfiteatro è oggi ancora visibile l'intero corridoio esterno con il colonnato a mattoncini sagomati e la struttura della cavea con muratura a sacco e rivestimento 
                        in laterizio. L'ingresso all'arena avviene dall'entrata situata sull'asse maggiore est-ovest, detta Porta Triumphalis.
                    </p>
                    <p>
                        Il monumento si presume sia stato rinnovato nel secolo successivo alla sua costruzione ed abbandonato in seguito alla decadenza di Amiternum. La cavea è rimasta sempre in vista e ne è testimoniata la presenza negli archivi catastali ma l'intera struttura è tornata 
                        alla luce solo con gli scavi archeologici del 1880, mentre i lavori di consolidamento e restauro risalgono al 1996.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1743.592767140451!2d13.303907281752974!3d42.400717283299635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132e332c6fe29d2d%3A0xac8f1f1f98f4a8ec!2sArea%20Archeologica%20di%20Amiternum%20-%20Anfiteatro%20Romano!5e1!3m2!1sit!2sit!4v1713280453014!5m2!1sit!2sit"
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
