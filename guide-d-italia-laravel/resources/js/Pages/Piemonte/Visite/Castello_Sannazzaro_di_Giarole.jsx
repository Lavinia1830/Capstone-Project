import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Castello_Sannazzaro_di_Giarole(props) {
    return (
        <>
            <Head title="Castello Sannazzaro di Giarole"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='castello_sannazzaro_di_giarole' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Castello Sannazzaro di Giarole</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Il Castello</h2>
                        <p>
                            <b>La costruzione</b> del <strong>Castello</strong> venne ideata sulla base di un <b>diploma</b> dato dall’<b>Imperatore Federico 
                            Barbarossa</b> a <Link href='/destinazione//pavia' className='text-decoration-none color_link'>Pavia</Link> il <b>4 dicembre del 
                            1163</b> a <b>Guido</b>, <b>Burgundio</b>, <b>Assalito</b> e <b>Raineri</b>, cavalieri di <b>Sannazzaro</b> in cui, tra gli altri 
                            privilegi, li autorizzava a costruire un <b>castello</b> dovunque volessero nei loro possedimenti (<b>ubicumque voluerint in 
                            possessionibus eorum</b>).
                        </p>
                        <p>
                            Il primo <b>documento</b> in cui il <b>castello</b> appare essere completato e già pienamente funzionante è del <b>1277</b>. In 
                            tale documento il castello è già dotato di <b>fossato</b>, <b>ponte levatoio</b>, <b>torre d’ingresso</b>, <b>un ricetto</b> e 
                            una zona a sud est abitata dai figli del magnifico <b>Corradino di Sannazzaro</b> probabile costruttore del castello. <b>Modificato</b> più 
                            volte in varie epoche venne trasformato in <b>residenza di campagna</b> nel <b>XVIII secolo</b> con la ristrutturazione 
                            dell’<b>ala sud prospiciente il paese</b>, mentre nel <b>1854-57</b> venne ridecorata e restaurata secondo il <b>gusto neogotico</b> allora 
                            imperante l’<b>ala occidentale</b> e <b>settentrionale</b> con importanti risultati <b>scenografici</b> e <b>decorativi</b>.
                        </p>
                        <p>
                            Caso estremamente raro in Italia è sempre stato di proprietà dei <b>Sannazzaro</b> che tuttora vi abitano.
                        </p>
                        <p>
                            Nel passato ha ospitato, tra gli altri, i <b>principi Paleologo</b> marchesi di <Link href='/destinazioni/piemonte/monferrato' 
                            className='text-decoration-none color_link'>Monferrato</Link>, i <b>principi Gonzaga</b> duchi di <Link href='/destinazioni//mantova' 
                            className='text-decoration-none color_link'>Mantova</Link> e <b>Monferrato</b>, il <b>re Carlo Emanuele III</b> di <Link href='/sardegna' 
                            className='text-decoration-none color_link'>Sardegna</Link> con il figlio <b>principe di</b> <Link href='/piemonte' 
                            className='text-decoration-none color_link'>Piemonte</Link> (futuro <b>Vittorio Amedeo III</b>) che qui soggiornarono per pochi giorni nel 
                            settembre del 1745, il <b>Re Vittorio Emanuele II</b> con l’<b>Imperatore Napoleone III</b> nel maggio del 1859, il <b>duca Emanuele 
                            Filiberto di Savoia-Aosta</b> nel 1911, <b>artisti</b> e altri <b>personaggi celebri</b>.
                        </p>
                        <p>
                            <b>Il complesso</b> è circondato da <b>un parco</b> di circa <b>23000 metri quadri</b> delimitato dal <b>torrente Grana</b> che un tempo 
                            forniva l’acqua al <b>fossato</b>, il <b>giardino</b> di impianto <b>Ottocentesco</b>, all’<b>inglese</b>, con <b>alberi d’alto 
                            fusto</b> (<b>Platani</b>, <b>Ippocastani</b>, <b>Ginko</b>, <b>Noci</b>, <b>Tassi</b>, <b>Pioppi</b> e altre specie) e con un <b>piccolo 
                            frutteto</b> e un <b>ampio gazebo</b> nella parte <b>occidentale</b> dietro le <b>scuderie</b>.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Il Fantasma</h2>
                        <p>
                            <b>Nel 1854-57</b>, il <b>conte Giacinto Sannazzaro Natta</b> fece <b>restaurare</b> in stile <b>neogotico</b> (e <b>neorinascimentale</b>) 
                            il <b>grande salone d’ingresso</b>, lo <b>scalone principale</b>, la <b>sala da ballo</b> e le <b>principali camere da letto</b>. Fu in 
                            quell’occasione che lavorarono per <b>Giarole</b> alcuni <b>valenti artisti e pittori piemontesi</b> come <b>Paolo Emilio 
                            Morgari</b> e <b>Andrea Gastaldi</b>. Un altro pittore di valore, un giovane della <b>famiglia Grosso</b> (stirpe di pittori piemontesi 
                            dell’Ottocento), <b>morì cadendo</b> mentre affrescava il <b>gruppo centrale della sala da ballo</b>. Si dice che il suo <b>fantasma 
                            vaghi ancora nelle sale del castello</b> e forse è proprio lui che a dispetto dei suoi <b>proprietari</b>, <b>amici</b> ed <b>ospiti</b> accende 
                            le <b>luci negli angoli più impensati</b>, e non solo… (attenti alla torre!).
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">La Madonna del Rosario</h2>
                        <p>
                            <b>Da molti secoli</b> i <b>Sannazzaro</b> portano in <b>processione</b> per il paese di <b>Giarole</b> durante la <b>prima domenica del 
                            Rosario</b>, dedicata da <b>S.S. Pio V</b> nel <b>1571</b> alla <b>battaglia di Lepanto</b>, una <b>statua lignea</b> della <b>Madonna</b>. 
                            Il <b>padre</b> dell’attuale <b>proprietario</b>, <b>Ranieri Sannazzaro</b> raccontava a qualcuno dei suoi giovani parenti che 
                            partecipava <b>svogliatamente</b> a questa <b>tradizione</b> di averla saltata soltanto in due occasioni: nel <b>1943</b> e 
                            nel <b>1944</b> quando era <b>prigioniero</b> in <b>Germania</b>!
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Il passaggio segreto e i sotterranei del castello</h2>
                        <p>
                            Molti <b>castelli</b> hanno leggende di <b>passaggi segreti</b> collegate a <b>castelli</b> e <b>fortezze</b>, Giarole ne ha due: una parla 
                            di un <b>passaggio segreto</b> verso il <b>castello</b> di <b>Pomaro</b> (circa 3 Km di distanza), già residenza dei conti <b>Calvi di 
                            Bergolo</b> e della <b>principessa Iolanda di Savoia</b>; l’altra di un <b>passaggio segreto</b> verso il <b>castello</b> di <b>Baldesco</b>, 
                            che fu per molti secoli proprietà dei <b>marchesi Natta d’Alfiano</b>, cugini dei <b>Sannazzaro</b>. L’ingresso di questi <b>passaggi 
                            segreti</b> sarebbe, a detta di esperti, facilmente identificabile nella parte nord dei <b>sotterranei</b> del <b>castello</b>, non lontano 
                            da quella che fu la <b>prigione</b> (in uso e documentata fino al <b>1796</b>). Nella parte nord dei <b>sotterranei</b> si trova anche 
                            un “<b>infernot</b>” in mattoni e muratura dove veniva conservato il vino migliorer prodotto dalle aziende agricole legate al <b>castello</b>. 
                            Provate a convincere i padroni di casa a portarvici. Tra i <b>sotterranei</b> del <b>castello</b> e la <b>cripta</b> della <b>Chiesa di San 
                            Giacomo</b> potreste fare altre interessanti scoperte.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">La ghiacciaia</h2>
                        <p>
                            Nel <b>giardino</b> proprio di fronte all’<b>ingresso</b> è possibile osservare una <b>montagnetta</b> coperta di <b>alberi di tasso</b> che 
                            nasconde una <b>struttura</b> in <b>mattoni</b> a forma di <b>uovo</b>. Anticamente veniva utilizzata come <b>ghiacciaia</b> (o <b>neviera</b>). 
                            In <b>inverno</b> veniva riempita di <b>neve</b> e <b>blocchi di ghiaccio</b> e poi il tutto coperto di <b>paglia</b>. D’<b>estate</b> manteneva 
                            al fresco le <b>provviste</b>, le <b>bevande</b> e gli <b>alimenti</b> che secondo documenti d’<b>archivio</b> rimanevano  tali fino alla fine 
                            dell’<b>estate</b>.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Il laghetto</h2>
                        <p>
                            Fino a <b>non molti anni fa</b> in un <b>angolo del parco</b> esisteva un <b>piccolo laghetto</b> che in <b>inverno</b> ghiacciava e veniva 
                            trasformato in una <b>pista da pattinaggio</b>.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1275.1533049181162!2d8.5643872180119!3d45.061848564279074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4787a7341af72357%3A0x6810bbf19d6a1e9!2sCastello%20Sannazzaro!5e1!3m2!1sit!2sit!4v1718633107472!5m2!1sit!2sit"
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
