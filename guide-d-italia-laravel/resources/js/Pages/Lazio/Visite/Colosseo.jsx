import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Colosseo(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='colosseo' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Colosseo</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        L’<b>Anfiteatro Flavio</b>, più comunemente noto con il nome di <strong>Colosseo</strong>, si innalza nel cuore archeologico della città di Roma e accoglie quotidianamente un gran numero di visitatori attratti dal fascino della sua storia e della sua complessa architettura.
                    </p>
                    <p>
                        L’edificio, detto <b>Colosseo</b> per via di una colossale statua che sorgeva nelle vicinanze, venne edificato nel I secolo d.C. per volere degli imperatori della dinastia flavia, ed ha accolto, fino alla fine dell’età antica, spettacoli di grande richiamo popolare, quali le cacce e i giochi gladiatori. 
                        L’edificio era, e rimane ancora oggi, uno spettacolo in se stesso. Si tratta infatti del più grande anfiteatro del mondo, in grado di offrire sorprendenti apparati scenografici, nonché servizi per gli spettatori.
                    </p>
                    <p>
                        Simbolo dei fasti dell’impero, l’Anfiteatro ha cambiato nei secoli il proprio volto e la propria funzione, offrendosi come spazio strutturato ma aperto alla comunità romana.
                    </p>
                    <p>
                        Nel 438 con l’abolizione dei giochi gladiatori per volere di Valentiniano III l’anfiteatro subisce un lento e progressivo declino tanto da essere utilizzato nel Medioevo e nel Rinascimento come cava di materiali, utilizzati anche per la costruzione della Basilica di San Pietro, e come ricovero per 
                        animali e sede per laboratori artigianali e abitazioni, mentre lungo è il processo della sua cristianizzazione. Dalla stagione romantica nella quale il fascino della rovina attrasse letterati e artisti si passò presto a quella degli scavi sistematici e dei restauri.
                    </p>
                    <p>
                        Oggi l’Anfiteatro è un monumento alle opere dell’ingegno umano che sopravvivono al tempo e si presenta ancora come una struttura accogliente e dinamica che offre un’ampia panoramica sugli spazi interni, ma anche suggestive viste sulla città quando ci si affaccia dai fornici esterni.
                    </p>
                    <p>
                        Periodicamente ospita esposizioni temporanee legate ai temi dell’antico e del suo rapporto con la contemporaneità, nonché spettacoli moderni. Questo portato di vicende e di esperienze ha fatto dell’Anfiteatro un luogo che si rinnova ogni giorno, significativo per tutti e capace di raccontare a 
                        ciascuno una Storia.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Curiosità sul Colosseo</h2>
                    <p>
                        Sapevi che per l'apertura del <b>Colosseo</b> venne organizzata una festa che durò 100 giorni dove decine di gladiatori furono uccisi? Nel 80 dC fu inaugurato il Colosseo romano, dopo tre anni di lavoro. Dion Casio, storico, ci racconta che durante i giochi inaugurali del Anfiteatro Flavio, 9000 tra 
                        animali addestrati e selvaggi perirono.
                    </p>
                    <p>
                        Sapevi che l'ingresso al Colosseo serve per entrare in tre musei? Con l'ingresso al <b>Colosseo</b> Romano si può anche entrare nel Palatino e al Foro Romano, ma è anche un'entrata valida per 2 giorni dal primo utilizzo.
                    </p>
                    <p>
                        Il <b>Foro Romano</b> è un vero santuario della Roma antica, dove una volta erano erette le basiliche, i templi, la Curia del Senato, la Tribuna degli Oratori o la Casa dei Vestali. Oggi possiamo vedere solo le sue rovine, ma potrai rivivere la sua storia in ognuno di questi magnifici scenari. Nella 
                        valle del Foro Romano sorge la Collina dei Palatino, dove si trovano le rovine della residenza imperiale la cui costruzione è stata avviata da Augusto e completata dai suoi successori, qui è possibile visitare le sedi, le basiliche, le gallerie sotterranee ecc.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Perché visitare il Colosseo?</h2>
                    <p>
                        Perché è parte della storia di un impero che, per il divertimento dei cittadini romani, qui organizzava lotte tra gladiatori o contro animali feroci e spettacoli fantastici come le “naumachie”, veri combattimenti navali in un’arena riempita d’acqua. Sotto l’arena del <b>Colosseo</b> c’erano numerosi 
                        corridoi e stanze adibite ad accogliere i gladiatori e gli animali feroci che potevano essere portati al centro dell’arena grazie a una serie di elevatori e di rampe di accesso.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2956.0650731072265!2d12.49040277435717!3d41.89103676902165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61b6532013ad%3A0x28f1c82e908503c4!2sColosseo!5e1!3m2!1sit!2sit!4v1713270315912!5m2!1sit!2sit"
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
