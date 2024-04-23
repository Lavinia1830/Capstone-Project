import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/inertia-react';

export default function Castello_di_Aymavilles(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='castello_di_aymavilles' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Castello di Aymavilles</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Castello di Aymavilles: una residenza museo ricca di storia e bellezze naturali</h2>
                    <p>
                        Un unico blocco rettangolare con quattro possenti torri , abbracciato da un ampio parco, il <strong>Castello di Aymavilles</strong> , nel comune di Aymavilles, sorge su una collina digradante verso la Dora Baltea, lungo la strada per <Link href='/destinazione/valle_d_aosta/cogne' 
                        className='text-decoration-none color_link'>Cogne</Link>.
                    </p>
                    <p>
                        Risalente al 1200 ma più volte rimaneggiato, presenta oggi un vero patchwork stilistico, testimoniando il suo passaggio da fortezza medievale a signorile residenza rococò.<br/>
                        Uno scenario bellissimo, verde con il bel tempo, bianco d'inverno.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Le tante vite del maniero</h2>
                    <p>
                        Il Castello di Aymavilles nel corso dei secoli è passato di mano in mano, modificandone la struttura architettonica. <b>La sovrapposizione di stili susciterà sicuramente il tuo interesse</b>, in un ambiente che fonde gotico, barocco e rococò.
                    </p>
                    <p>
                        Risalente al XIII secolo, dal XIV secolo divenne maniero dell'illustre famiglia <b>Challant</b> , che vi apportò subito delle modifiche. Nel 1400 furono aggiunte le quattro torri angolari, poi nel 1700 le logge decorate con stucchi e il rifacimento degli interni. Il 
                        castello perse progressivamente il suo carattere difensivo medievale per divenire una splendida dimora signorile, completata dal <b>parco terrazzato</b>.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Il percorso espositivo</h2>
                    <p>
                        Dopo anni di sofisticate ricerche e restauri portati avanti dalla Regione Valle d'Aosta, oggi il Castello di Aymavilles propone <b>visite guidate</b> lungo un affascinante percorso espositivo multimediale che mette al centro storia, arte e architettura. Puoi accedere a 
                        quattro diversi livelli, ciascuno con il proprio tema.
                    </p>
                    <p>
                        La prima racconta delle famiglie che vi abitarono, la seconda è dedicata al <b>collezionismo dell'Ottocento</b>, la terza ospita la <b>Collezione dell'Accademia di Sant'Anselmo</b>, autorevole associazione valdostana di studi storici, oltre a reperti dell'Ottocento. vita 
                        quotidiana del duecento nel maniero.
                    </p>
                    <p>
                        Il quarto piano offre la possibilità di ammirare le numerose trasformazioni architettoniche del Castello, con l'ausilio di <b>plastici e ricostruzioni multimediali</b>. Alzando lo sguardo al soffitto si può apprezzare un capolavoro di falegnameria lignea del XV secolo 
                        perfettamente conservato. Mentre ti muovi attraverso le sale, assicurati di ammirare le sontuose decorazioni e gli elementi in stile barocco in un miscuglio di motivi molto vari.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">L'arte della vinificazione</h2>
                    <p>
                        Dopo aver esplorato l'interno del Castello di Aymavilles, vale la pena fermarsi nel <b>parco</b> per ammirare la sua intricata struttura a terrazzamenti, creata dopo la demolizione delle mura padronali.<br/>
                        L'area verde costeggia le colline circostanti, dove si possono osservare <b>i vigneti</b>. Questa zona è profondamente legata al vino, grazie al <b>microclima alpino ai piedi del Monte Bianco</b>, che favorisce la coltivazione della vite. La gente del posto si dedica 
                        all'agricoltura da millenni, una tradizione di duro lavoro tramandata fino a noi attraverso <b>i famosi vini Torrette</b>, 17 rossi tipici di questa zona della Valle d'Aosta.
                    </p>
                    <p>
                        Se ami il buon vino ti consigliamo vivamente di visitare alcune cantine della zona. Non dimenticate di fermarvi alla <b>cooperativa vinicola "Cave des Onze Communes" vicino al castello, dove potrete degustare e acquistare vini Torrette e altri prodotti tradizionali. 
                        Oppure potete chiederne un bicchiere in un ristorante locale da abbinare a succulenti piatti di selvaggina, o alla classica zuppa autunnale di castagne</b>.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">3 luoghi da scoprire intorno al castello</h2>
                    <p>
                        Sulla strada che da Aymavilles porta a Cogne, in località Pont d'Ael, si trova un maestoso <b>ponte acquedotto risalente all'epoca romana</b>. Vale la pena lasciare l'auto ed esplorare a piedi, seguendo il percorso ben studiato.
                    </p>
                    <p>
                        Avventurandosi lungo il percorso escursionistico <b>Camino Balteo</b> che passa di qui, scoprirete la <b>Chiesa di Saint-Léger</b>, immersa nella natura.
                    </p>
                    <p>
                        Non dimenticate di visitare il villaggio di <b>Ozein</b>Ozein , una piccola frazione di Aymavilles, dove troverete anche la <b>Tornalla, un'antica casa fortificata</b>.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d926.4871542349448!2d7.247314933917777!3d45.702485490957635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4789211af06a094f%3A0x782e69a378493ad6!2sCastello%20di%20Aymavilles!5e1!3m2!1sit!2sit!4v1713863783528!5m2!1sit!2sit"
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
