import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Lago_di_Garda(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='lago_di_garda' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Lago di Garda</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Il <strong>lago di Garda</strong>, chiamato anche <b>Benaco</b>, è il più grande lago italiano e si sviluppa su una superficie di 370 kmq tra le regioni di Lombardia, Veneto e Trentino Alto Adige.
                    </p>
                    <p>
                        A nord il lago si presenta stretto e lungo, quasi come un fiordo, circondato da montagne che cadono a strapiombo sulle sue acque, mentre nella parte meridionale si allarga e il paesaggio si addolcisce. Per le sue caratteristiche il lago di Garda è una frequentata <b>meta 
                        turistica</b> amata da persone di tutte le età per una vacanza all'insegna dello sport, del divertimento, del gusto e del relax. Poli attrattivi principali, ideali cornici per gli appassionanti della <b>vela</b>, del <b>windsurf</b> e per i <b>free climbers</b> (che 
                        cercano le pareti a strapiombo sul lago), sono le città di <b>Riva</b>, <b>Torbole</b>, <b>Arco</b>. In territorio trentino, le altre località presenti nei pressi del lago sono <b>Tenno</b>, la <b>Valle di Ledro e Dro</b>.
                    </p>
                    <p>
                        Il Lago di Garda offre una diversità di ambienti, un clima dolce e mite, una vegetazione fatta di ulivi, limoni, oleandri e aranci e un’acqua cristallina che fanno da cornice a numerose testimonianze storiche, castelli, rocche, chiese e musei che lo rendono davvero attraente.
                    </p>
                    <p>
                        Il Lago di Garda si caratterizza per montagne a picco sul lago a nord e per dolci colline moreniche che si sviluppano a sud. Tra le catene che costeggiano il lago c’è ad esempio quella del Monte Baldo che si sviluppa per 40 km lungo l’asse Trentino-Veronese, oppure il Monte 
                        Pizzocolo da dove si possono ammirare l’Adamello, gli Appennini, il Monte Rosa… A sud, tra le province di Brescia, Mantova e Verona si sviluppa invece un grande anfiteatro morenico, dove si sviluppano piante tipiche mediterranee come la vite, l’olivo e altre piante da frutta.
                    </p>
                    <p>
                        Il lago offre anche numerosi laghetti intermorenici e zone umide, spesso tutelati da Riserve naturali o parchi fluviali, come il territorio del Castellaro Lagusello o quello del Mincio. Tante sono le località che si affacciano sul lago suddivise tra le province di <b>Trento</b>, 
                        <b> Verona</b> e <b>Brescia</b>.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251186.10306071537!2d10.545107552587794!3d45.66281839281088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781eca8aec020b9%3A0x91dcf07c1c969bb8!2sLago%20di%20Garda!5e1!3m2!1sit!2sit!4v1712929775620!5m2!1sit!2sit"
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
