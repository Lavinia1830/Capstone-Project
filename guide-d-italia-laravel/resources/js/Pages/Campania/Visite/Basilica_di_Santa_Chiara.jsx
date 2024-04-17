import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Basilica_di_Santa_Chiara(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='basilica_di_santa_chiara' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Basilica di Santa Chiara</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        La costruzione del complesso monumentale di S. Chiara ebbe inizio nel 1310, per volontà del re Roberto d’Angiò e della sua seconda moglie Sancia di Maiorca. I lavori, furono eseguiti sotto la direzione di Gagliardo Primario e Lionardo di Vito. Nel 1340 la chiesa fu aperta 
                        al culto.
                    </p>
                    <p>
                        La cittadella francescana fu realizzata costruendo due edifici religiosi contigui ma separati: un monastero, destinato ad accogliere le clarisse, e un convento, ospitante i frati minori francescani. Questa originale conformazione a “convento doppio” fu possibile grazie all’approvazione papale 
                        ottenuta nel 1317.
                    </p>
                    <p>
                        La chiesa si presenta oggi nelle sue originarie forme gotiche, con una facciata a larga cuspide, nella quale è incastonato l’antico rosone traforato, con il pronao dagli archi a sesto acuto e l’interno  con un’ unica navata, su cui si aprono dieci cappelle per lato. La copertura è a capriate.
                    </p>
                    <p>
                        Alle spalle dell’altare è situato il Coro delle clarisse, composto da tre navate. Su una parete sono visibili i frammenti di un affresco raffigurante la Crocifissione, in cui si riconosce la mano di Giotto, chiamato a decorare le pareti della chiesa nel 1326. I monumenti funebri, situati nel 
                        presbiterio, furono realizzati da scultori trecenteschi come Tino di Camaino, che lavorò alle tombe di Carlo di Calabria e di Maria di Valois, e i fratelli Bertini, cui si deve il sepolcro di Roberto d'Angiò.
                    </p>
                    <p>
                        Nel 1742 la chiesa subì delle modifiche ad opera dell’architetto D. A. Vaccaro. Fastosi rivestimenti donarono al complesso un aspetto barocco: l’interno fu ricoperto da marmi policromi, stucchi e cornici dorate; il tetto a capriate fu nascosto da una volta affrescata da grandi pittori 
                        dell’epoca, quali F. de Mura, S. Conca, G. Bonito e P. de Maio; G. B. Massotti si occupò dell’altare maggiore, mentre il pavimento in marmo fu eseguito da F. Fuga.
                    </p>
                    <p>
                        Il 4 agosto del 1943 la chiesa fu quasi del tutto distrutta da un bombardamento aereo. Essa fu ricostruita e restaurata sotto la direzione di Mario Zampino, secondo l’originario stile gotico.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d893.0626097713638!2d14.25164123480864!3d40.84687225666707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b09a067d88b75%3A0x62f5e84ac6527c8f!2sChiesa%20di%20Santa%20Chiara!5e1!3m2!1sit!2sit!4v1713355124799!5m2!1sit!2sit"
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
