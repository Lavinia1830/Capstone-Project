import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Porta_Palazzo_e_il_Balôn(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='pp_balôn' style={{ position: 'relative' }}>
            <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Porta Palazzo e il Balôn</h1>
            <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
            <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
            </div>
            <div className="margin mt-3">
                <p>
                    Il <strong>Mercato delle Pulci di Porta Palazzo</strong>, più comunemente conosciuto a Torino con il nome di <b>Balon</b>, è il più storico e il più famoso mercato delle pulci della città. Questo mercato, che si sviluppa tra le vie <b>Borgo Dora</b>, 
                    Lanino, Mameli e Canale Molassi, vanta oltre 250 espositori e più di 50 negozi. È il posto giusto a Torino se siete <b>amanti dell’antiquariato</b>, del vintage e sì, anche del vecchio.
                </p>
                <p>
                    Tra le bancarelle e i negozi del Balon potrete trovare una grande quantità di cose: <b>mobili antichi</b>, vecchi giocattoli, <b>vestiti e accessori <i>vintage</i></b>, libri usati, dischi in vinile, ceramiche, prodotti di artigianato e tantissima altra roba. 
                    Armati di pazienza e spulciando tra le varie bancarelle e gli espositori potrete forse trovare il disco che stavate cercando, il tavolo basso che volevate per il salotto, il giocattolo che vi ricorda la vostra infanzia a <b>prezzi davvero 
                    d’occasione</b>.
                </p>
                <p>
                    E dopo aver spulciato bene tra le bancarelle alla ricerca dell’affare del giorno, dedicate un po’ di tempo alla <b>visita del quartiere</b> dove il Balon si svolge, quello di Porta Palazzo. Un’immersione in una zona storica di Torino meno 
                    conosciuta dai turisti dove troverete, oltre ai tanti negozi di antiquariato, anche <b>tantissime trattorie</b> che propongono cucina tipica piemontese a prezzi accessibili.
                </p>
                <p>
                    Il Balon si trasforma poi, ogni seconda domenica del mese, nel <b>Gran Balon</b>, molto più grande e con una <b>maggiore proposta di pezzi di antiquariato</b> per gli appassionati. Se siete alla ricerca di qualche mobile o qualche pezzo di arredamento 
                    particolare, il mercatino del Gran Balon fa di sicuro al caso vostro.
                </p>
            </div>
            <div className='margin mb-4'>
                <h3 className='color-subtitle text-center'>Mappa</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.7879177759455!2d7.681405579092874!3d45.07658627889219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886d64d0018ae7%3A0xc85fe4c7721a1612!2sPorta%20Palazzo!5e1!3m2!1sit!2sit!4v1712566855027!5m2!1sit!2sit"
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
