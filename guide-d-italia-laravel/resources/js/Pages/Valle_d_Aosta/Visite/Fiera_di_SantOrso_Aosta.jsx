import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import Footer from '@/Components/Footer';

export default function Fiera_di_SantOrso_Aosta(props) {
  return (
    <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
    >
        <main>
            <div className='fiera_sorso_aosta' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Fiera di Sant'Orso ad Aosta</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Territorio</p>
            </div>
            <div className='margin mt-3'>
                <h2 className='color-subtitle'>Informazioni sulla Fiera di Sant'Orso ad Aosta</h2>
                <p>
                    La tradizionale <b>Fiera di Sant Orso Aosta</b> si svolge ogni anno il <b>30 e 31 gennaio</b> ed è uno degli eventi più attesi dell'inverno valdostano. In queste due giornate il centro di Aosta accoglie centinaia di bancarelle
                    dov'è esposta il meglio della <b>produzione artigianale</b> della Valle d'Aosta.
                </p>
                <p>
                    Gli artigiani locali mettono in mostra e in vendita il meglio della loro produzione che spezia dalla scultura all'intaglio; della lavorazione del legno alla pietra ollare, dai tessuti all'aggettistica. Un viaggio a 360º nella 
                    tradizione valdostana, quando questa Fiera era l'occazione per acquisire attrezzi aggricoli ed oggi vetrina del "made in Valle d'Aosta".
                </p>
                <p>
                    Un luogo di incontro e scambio dove apprezzare non solo l'artigianato locale, ma anche il meglio dell'enogastronomia locale in una cornice magica come quella del <b>centro storico di Aosta</b>.
                </p>
                <p>
                    Nei due giorni di Fiera la città si anima ed arricchisce di eventi, come la celebre <b>Veillà</b> ovvero una serata all'insegna della tradizione e del divertimento quando le cantine del centro si aprono al pubblico per degustare 
                    prodotti tipici allietati da canti e balli.
                </p>
            </div>
            <div className='margin mt-3'>
                <h2 className='color-subtitle'>Informazioni sulla Fiera di Sant'Orso ad Aosta</h2>
                <p>
                    La Fiera d Sant'Orso Aosta è un'occasione unica per visitare la città in una veste del utto inusuale tra bancarelle e allegri gruppi folkloristici.
                </p>
                <p>
                    La vostra visita alla Fiera può essere abbinata alla <b>visita guidata della città con una guida turistica.</b><br/>
                    Scoprirete le <Link href='/visite/aosta_romana_e_medievale' className='text-decoration-none color_link fw-bold'>vestigia romane di Aosta</Link> come l'<b>Arco di Augusto</b>, la <b>Porta Praetoria</b>, il <b>Teatro romano</b> ed il 
                    <b>Criptoportico</b>, oltre che mirabili monumenti medievali come la <b>Colleggiata di Sant'Orso</b> col suo chiostro istoriato e la <b>Cattedrale</b> dedicata a Santa Maria Assunta. <br/>
                    La visita guidata della città può essere abbinata alla <b>degustazione di prodotti tipici valdostani.</b>
                </p>
                <p>
                    Scopri tutte le <b>visite guidate</b> legate al <Link href='/territorio' className='text-decoration-none color_link fw-bold'>territorio della Valle d'Aosta</Link>
                </p>
            </div>
            <div className='margin mb-4'>
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d696.1716093518177!2d7.3196411107710935!3d45.73738283422174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478920b092674883%3A0x76cd9ed3cff37fb4!2sPiazza%20%C3%89mile%20Chanoux%2C%2011100%20Aosta%20AO!5e0!3m2!1sit!2sit!4v1712062726399!5m2!1sit!2sit"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className='mx-auto mappa'
                >
                </iframe>
            </div>
            <div className='margin'>
                <h3 className='color-subtitle'>Articoli</h3>
                <ul className='lista'>
                    <li>
                        <Link href='/fiera_di_sant_orso' className='text-decoration-none color_link'>La Millenaria Fiera di Sant'Orso Aosta</Link>
                    </li>
                    <li>
                        <Link href='/artigianato_in_valle_d_aosta_una_tradizione_millenaria' className='text-decoration-none color_link'>Artigianato in Valle d'Aosta, una tradizione millenaria</Link>
                    </li>
                </ul>
            </div>
        </main>
        <Footer/>
    </AuthenticatedLayout>
  )
}
