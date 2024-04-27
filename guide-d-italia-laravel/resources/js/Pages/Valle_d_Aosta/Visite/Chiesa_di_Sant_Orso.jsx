import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/inertia-react';

export default function Chiesa_di_Sant_Orso(props) {
    return (
        <>
            <Head title="Chiesa di Sant'Orso"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='chiesa_di_sant_orso' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Chiesa di Sant Orso</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            L’itinerario tra le cose da vedere a Cogne parte dalla sua <strong>chiesa di Sant’Orso</strong>. Questa <b>definisce il profilo della città</b> e arrivandoci potrai vedere chiaramente il suo campanile e la sua fiancata dalla parte opposta del fiume Grand Eyvia.
                        </p>
                        <p>
                            Le origini della chiesa di Sant’Orso sono piuttosto antiche. <b>Risale al 1202</b> la sua prima consacrazione, quando <b>fu istituita per sostituire una chiesa ancora più antica</b> posizionata a Cret, nel vallone dell’Urtier (zona eventualmente raggiungibile con il giro ad anello del lago di Loie).
                        </p>
                        <p>
                            Nei secoli subì diverse modifiche, tanto che <b>nel 1642 venne totalmente ricostruita</b> a causa di una devastante alluvione che ne aveva minato la stabilità. Queste non furono però le ultime modifiche: nel 1684 furono apportate modifiche al coro e aggiunta la cupola ottagonale. Nel 1727 la navata fu prolungata in avanti e vennero rifatte 
                            le volte. Anche il campanile subì delle modifiche, fino ad essere totalmente ricostruito nelle forme attuali tra il 1838 e il 1840.
                        </p>
                        <p>
                            Intorno alla chiesa di Sant’Orso c’era l’antico cimitero, che occupava la parte anteriore e i due fianchi della struttura. Questo fu spostato poi nel 1886 all’interno del prato di Sant’Orso.
                        </p>
                        <p>
                            All’interno della chiesa di Sant’Orso puoi vedere cinque altari in legno, dipinti e dorati, che risalgono alla metà del settecento. Il resto delle decorazioni è invece risalente per lo più al 1960 ed è opera del pittore Nino Pirlato. Gli spazi sono organizzati su di un’unica navata, con il presbiterio sormontato da un tiburio ottagonale.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">La leggenda sulla costruzione della chiesa di Sant’Orso</h2>
                        <p>
                            <b>C’è una leggenda che avvolge la nascita della chiesa di Sant’Orso</b>. Si narra infatti che anticamente gli abitanti di Cogne dovevano recarsi a piedi nell’antica cappella di Cret per assistere alla messa. Questa era piuttosto distante e, soprattutto nei mesi invernali, era difficile raggiungerla anche a causa della neve e del ghiaccio.
                        </p>
                        <p>
                            Gli abitanti di Cogne decisero quindi di costruire una chiesa in città e scelsero la frazione di Lisardey per costruirla, proprio al di là del torrente Grand Eyvia. Quando portarono all’interno della chiesa <b>alcune reliquie</b> si accorsero presto che queste <b>tendevano a sparire e venivano puntualmente ritrovate sulla riva opposta del 
                            torrente</b>, anche dopo essere state riportate in chiesa.
                        </p>
                        <p>
                            Fu così chiaro che questa doveva essere una manifestazione della volontà divina sul luogo in cui costruire la chiesa. Nacque così la chiesa di Sant’Orso nella sua attuale posizione.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d315.264537028576!2d7.355400004737624!3d45.60973718293084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4788e1733ae1a27d%3A0x6325241a016ceab0!2sChiesa%20Parrocchiale%20di%20Sant&#39;Orso%20a%20Cogne!5e1!3m2!1sit!2sit!4v1714150736788!5m2!1sit!2sit"
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
