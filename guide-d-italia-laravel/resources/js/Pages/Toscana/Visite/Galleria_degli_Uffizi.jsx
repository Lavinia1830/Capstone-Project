import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Galleria_degli_Uffizi(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='galleria_degli_uffizi' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Galleria degli Uffizi</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        <strong>Uffizi</strong>, Firenze: destinazione che nessun appassionato di arte potrebbe mai perdersi. Il polo museale fiorentino di cui gli Uffizi di Firenze fanno parte è Visitato ogni anno da due milioni di viaggiatori. Oltre a essere un binomio inscindibile (Firenze e gli Uffizi, 
                        chi potrebbe mai separarli?) e il Museo l’attrazione più visitata della città, ha anche un altro record: è stato anche il primo museo d’Europa. Fu il granduca Ferdinando I, nel 1591, ad aprire al pubblico i corridoi e le sale di questo palazzo a ferro di cavallo progettato da Vasari per 
                        unire idealmente i simboli della città: l’Arno e il Palazzo Vecchio. Dimenticatevi del tempo che passa e perdetevi tra le opere di Giotto, Cimabue, Botticelli, Leonardo, Michelangelo e Raffaello. Quando uscirete da qui, dopo un ipnotico viaggio nella bellezza, vedrete il mondo con altri 
                        occhi.
                    </p>
                </div>
                <div className='margin mt-3'>
                    <h2 className='color-subtitle'>La Galleria degli Uffizi di Firenze e il Palazzo degli Uffizi</h2>
                    <p>
                        Edificato a partire dal 1560, il palazzo che ospita il museo fu voluto da Cosimo I de’ Medici per riunire in un unico edificio le 13 magistrature della città (gli ‘uffizi’, appunto). Costituito da due corpi paralleli sostenuti da un fitto colonnato in stile dorico, e con un breve corridoio 
                        di raccordo che offre una spettacolare vista sull’Arno, già nel 1584 aveva perso la funzione amministrativa per essere riconvertito in uno spazio espositivo.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Uffizi Firenze, opere e altre meraviglie</h2>
                    <p>
                        Si deve ai Medici, grandi collezionisti d’arte classica e audaci compratori, il merito di aver raccolto la quasi totalità delle opere esposte. Intorno al nucleo antico, costituitosi nel Cinquecento, si sono poi aggiunti capolavori provenienti dalle chiese, dai conventi fiorentini soppressi 
                        e dalle donazioni di privati. Oggi il museo possiede una mastodontica raccolta d’arte toscana rinascimentale: nelle sue sale sono esposti lavori di Botticelli, Michelangelo, Leonardo e Piero della Francesca, tali da suscitare uno strano senso di vertigine.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Cosa vedere agli Uffizi: i corridoi</h2>
                    <p>
                        Sebbene possano sembrarvi poca cosa rispetto alle sale che vi si affacciano e accolgono i dipinti, il Corridoio di Ponente e il Corridoio di Levante sono il fulcro originario del museo e meritano uno sguardo attento. I busti in marmo e le figure di epoca romana condividono gli spazi, sotto 
                        il cornicione del soffitto decorato a grottesche, con i ritratti dei ‘moderni’, tra cui vari membri della famiglia Medici e i loro amici. Vi farà piacere sapere che i visitatori degli Uffizi all’epoca in cui il museo fu aperto al pubblico, oltre quattro secoli fa, ammiravano le stesse opere.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d852.5526340312741!2d11.254642927190957!3d43.768001541220976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a54008dc59081%3A0xcddeb7c89bf0c4cd!2sGalleria%20degli%20Uffizi!5e1!3m2!1sit!2sit!4v1713191596599!5m2!1sit!2sit"
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
