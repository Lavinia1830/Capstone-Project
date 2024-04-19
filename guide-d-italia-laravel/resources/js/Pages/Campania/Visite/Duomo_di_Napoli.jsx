import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Duomo_di_Napoli(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='duomo_di_napoli' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Duomo</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Il <strong>Duomo di Napoli</strong>, o <b>cattedrale metrolopitana di Santa Maria Assunta</b>, è probabilmente la basilica monumentale più importante di Napoli, nonché sede dell'arcidiocesi (la sede metropolitana della Chiesa Cattolica), del capoluogo di regione della 
                        Campania. Il <b>Duomo di Napoli</b> è senza dubbio una delle chiese più grandi e importanti di tutta la città, sia dal punto di vista artistico, dato la commistione di più stiti architettonici che vanno del gotico trecentesco al neogotico ottocentesco, sia dal punto di 
                        vista della tradizione e del folklore. È nel <b>Duomo di Napoli</b> che viene ospitato per tre volte all'anno il rito dello scioglimento del sangue di <b>San Gennaro</b>, il patrono di Napoli.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Storia del Duomo di Napoli</h2>
                    <p>
                        L'edificio sacro fu eretto a partire nel XIII secolo, in un'area in cui vi erano già presenti alcune strutture paleocristiane che furono inglobate nel nuovo luogo di culto voluto da Carlo I, fondatore della dinastia angioina. I lavori di costruzione continuarono durante il 
                        regno di Carlo II, che chiamò a raccolta degli architetti francesi per abbellire l'opera, che fu terminata nel 1313 sotto il regno di Roberto d'Angiò, il quale assistette alla solenne cerimonia di intitolazione del Duomo a Santa Maria Assunta, per opera dell'allora 
                        arcivescovo Umberto d?ormonte, prelato originario della Borgogna.
                    </p>
                    <p>
                        Il <strong>Duomo di Napoli</strong> subì nel 1349 il crollo del campanile e della facciata, che venne ricostruita in stile gotico agli inizi del XV secolo. Numerosi restauri e rifacimenti nel corso dei secoli hanno portato la chiesa a come la si conosce oggi, passando 
                        attraverso il tetto a cassettoni sopra il precedente tetto a capriate (1621) e gli interventi di stile barocco nelle cappelle nelle seconda metà del seicento.
                    </p>
                    <p>
                        Sempre nel seicento la cosiddetta dedica all’Assunta fu confermata nella <b>consacrazione della chiesa a Santa Maria Assunta</b>, per merito dell’arcivescovo dell’epoca Ascanio Filomarino. Sul finire del 700 ulteriori restauri di stile gotico con influssi dell’epoca 
                        modificarono la navata, a cui seguì un secolo più tardi la nuova facciata in stile neogotico, i cui lavori si conclusero nel 1905. I bombardamenti alleati della seconda guerra mondiale danneggiarono la struttura, che ricevette una serie di restauri tra il 1969 e il 1972, 
                        che portarono alla luce resti archeologici romani, greci e medievali attualmente visitabili.
                    </p>
                    <p>
                        Il <strong>Duomo di Napoli</strong> è composto da una pianta croce latina a tre navate, su cui lati vi sono dieci cappelle, cinque per lato. Sulla controfacciata della chiesa vi sono i sepolcri di <b>Carlo I d’Angiò e di Carlo Martello d’Angiò</b>, che riposa assieme alla 
                        moglie <b>Clemenza d’Asburgo</b>. Nel transetto rialzato rispetto alla navata centrale vi è la <strong>Cappella del Succorpo</strong>, voluta dal Cardinale Oliviero Carafa nel quattrocento. Interamente in marmo, è senza dubbio una delle più grande opere del rinascimento 
                        napoletano, e vi sono conservate al suo interno le <b>reliquie di San Gennaro</b>, che dimorano di fronte la statua del Cardinale Carafa. Le navate laterali danno rispettivamente sulla Basilica di Santa Restituta (sinistra) e alla Cappella del Tesoro di San Gennaro (destra). 
                        All’interno della Basilica di Santa Restituta vi sono elementi di pregio come il Battistero di San Giovanni in Fonte, il più antico di tutto l’occidente, e gli scavi archeologici greci e romani. Nella Cappella del Tesoro di San Gennaro, eretta nel 1527 come voto <i>ex 
                        novo</i> per ringraziare il santo patrono per aver liberato Napoli dai tre flagelli, colera, la guerra franco-spagnola e l’eruzione del Vesuvio, contiene affreschi e marmi di pregio che valgono assolutamente la visita, assieme al Tesoro di San Gennaro, composto da centinaia 
                        di donazioni nel corso dei secoli e dal valore inestimabile.
                    </p>
                </div>
                <div className='margin mt-3'>
                    <h2 className="color-subtitle">Curiosità sul Duomo di Napoli</h2>
                    <p>
                        Il Duomo nel corso degli anni ha letteralmente inglobato come cappelle laterali due edifici di culto che erano sorti indipendenti dalla sede dell’arcidiocesi: ovvero la basilica di Santa Restituta, che custodisce tra l’altro il battistero più antico di tutto l’occidente, 
                        quello intitolato a San Giovanni in Fonte, e la reale cappella del Tesoro di San Gennaro, che conserva il sangue del santo patrono della città.
                    </p>
                    <p>
                        Le campane del Duomo hanno origine equestre: nel 1322 il cardinale Filomarino fece disfare una enorme statua equestre in bronzo posta nelle vicinanze, in quanto mal sopportava le credenze e le superstizioni attorno alla scultura bronzea, che pare fosse stata scolpita da 
                        Virgilio per mezzo di stregoneria e avesse il potere di far guarire i cavalli malati. Il cardinale Filomarino per porre fine a queste dicerie volle quindi far fondere la statua per farne le campane per il Duomo.
                    </p>
                    <p>
                        Una delle novelle del Decameron, l’opera più importante di Giovanni Boccaccio, è ambientata nel Duomo di Napoli. È la novella di Andruccio da Perugia, che in visita alla cappella Minutolo del Duomo di Napoli ne esce con un tesoro dal valore di oltre cinquecento fiorini.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2123.894980612533!2d14.257763343465472!3d40.85242026809013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b086a71dc7939%3A0x8bad90ad52187adc!2sDuomo%20di%20Napoli!5e1!3m2!1sit!2sit!4v1713351282510!5m2!1sit!2sit"
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
