import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Il_Santuario_di_Notre_Dame_Du_Bon_Secours(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='il_santuario_notre_dame_du_bon_secours' style={{ position: 'relative' }}>
                    <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Il Santuario di Notre Dame du Bon Secours</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Il santuario si trova a <b>Barmasc</b>, una frazione a monte di Antagnod, a 1828 metri di quota; è dedicato alla <b>Madonna del Soccorso “Notre-Dame du Bon Secours”</b> che viene festeggata il 3 di agosto.
                    </p>
                    <p>
                        Caratteristico il sentiero che conduce al santuario partendo dalle Ville Rivetti ad Antagnod.
                    </p>
                    <p>
                        Il santuario, costruito tra l’anno 1661 e l’anno 1663, attirò subito folle di pellegrini provenienti dalle parrocchie più lontane. <b>Processioni</b> vi affluivano in passato da La Magdeleine, da Chamois, 
                        da Antey oltre che da Challand-Saint-Victor e Challand-Saint-Anselme, per invocare il dono della pioggia.<br/>
                        Un rito propiziatorio era quello di immergere la croce nella acqua che scorre sotto la cappella.<br/>
                        Il 15 luglio 1990 il santuario è stato visitato dal <b>Papa Giovanni Paolo II</b>.
                    </p>
                    <p>
                        All’interno si trovano affreschi della Natività, della incoronazione della Vergine, un’Annunciazione e una deposizione dalla croce. Alcuni ex voto sono posti lungo le pareti della chiesa.
                    </p>
                    <p>
                        Presente inoltre un altare con baldacchino, un tabernacolo in legno e una tela della Madonna col Bambino tra i santi Grato e Giocondo.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">La boutique di Ayas</h2>
                    <p>
                        La boutique è situata in località Antagnod, a 1.699 metri s.l.m., in un delizioso paesino da cui si ammira un’incomparabile vista sul massiccio del Monte Rosa. Il negozio è posto all’interno de “<b>La Maison de l’Ours</b>”, 
                        dimora del montanaro che uccise l’ultimo orso della Valle d’Aosta, e presenta lo stile e le dimensioni tipiche dell’edilizia tradizionale. Inoltre, al suo interno è ancora visibile un antico forno restaurato, in passato 
                        utilizzato per la cottura del pane.<br/>
                        Un luogo storicamente suggestivo in cui poter selezionare un oggetto di qualità e di sapiente maestria tecnica.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d489.848434374959!2d7.677441693641454!3d45.80958459464924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4788c901f8090d6b%3A0x7854b90e7dff09c0!2sSantuario%20di%20Barmasc!5e1!3m2!1sit!2sit!4v1713955650800!5m2!1sit!2sit"
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
