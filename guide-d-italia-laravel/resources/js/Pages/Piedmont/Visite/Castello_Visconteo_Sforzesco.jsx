import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Castello_Visconteo_Sforzesco(props) {
    return (
        <>
            <Head title="Castello Viconteo Sforzesco"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='castello_visconteo_sforzesco' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Il Castello Visconteo Sforzesco</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            <b>Castello</b> si nasce, non si diventa. Adagio rimaneggiato che calza perfettamente al <b>castello di Novara</b>, nato nel lontano 
                            1272 per dare concretezza alla vocazione difensiva della città. Sono gli anni in cui l’Italia è attraversata dalle lotte 
                            guelfo-ghibelline, e Novara non fa eccezione, segnata com’è più dalle lotte intestine che dalle invasioni esterne. In questo scenario 
                            inquieto, un po’ per la posizione strategica e un po’ per le sue solide fortificazioni il castello novarese diviene presto un potente 
                            strumento di potere per il governo della città e del territorio circostante.
                        </p>
                        <p>
                            A ordinare la costruzione è il guelfo <b>Francesco Della Torre</b>, che individua nell’antico palazzo nobiliare della famiglia Tettoni 
                            (ghibellina… uno sgarbo?) la premessa ideale per  un fortilizio destinato ad attraversare i secoli. A Novara esistevano altri palazzi 
                            nobiliari, ‘castelli minori’ in una costellazione di residenze signorili, ma nessuno di essi poteva vantare una caratteristica 
                            strutturale altrettanto strategica: avere due lati coincidenti con la cerchia muraria. Più difeso di così…
                        </p>
                        <p>
                            <b>Palazzo Tettoni</b> viene così elevato al rango di castello con il nome di <i>Turricella</i>. E, si sa, in <i>nomen omen</i>. Alle 
                            sue torri prima e alle sue mura poi, spetterà il compito di difendere il signore di turno e la città dai suoi nemici. Non senza andare 
                            incontro ad alterne vicende di demolizioni e ricostruzioni, di torri che svettano e mura che si fanno via via più spesse, per rispondere 
                            ai cambiamenti nell’arte della guerra.
                        </p>
                        <p>
                            Sono i <b>Visconti</b> i primi signori forestieri a comprendere le potenzialità del Castello di Novara e a trasformarlo, verso la metà 
                            del Trecento, in una vera e propria fortezza in grado di reggere incursioni e assedi come quello orchestrato dal vicino marchese del 
                            Monferrato.
                        </p>
                        <p>
                            Ed è sempre la famiglia Visconti a costruire nuove torri, rafforzare le mura di cinta e demolire gli edifici colpevoli di essere troppo 
                            vicini. Tuttavia, è in <b>epoca sforzesca</b> che la vocazione del castello giunge al suo pieno compimento. Il duca <b>Galeazzo Maria</b>, 
                            noto per il temperamento poco raccomandabile, ordina di demolire le parti più incerte della vecchia cittadella e inglobare le strutture 
                            esistenti entro una possente ghirlanda quadrangolare.
                        </p>
                        <p>
                            Al leggendario <b>Ludovico il Moro</b>, gran demiurgo della politica italiana nella seconda metà del Quattrocento, spetterà infine 
                            l’ulteriore opera di manutenzione e  rafforzamento delle difese, anche se  saranno i cambiamenti delle tecniche difensive a forgiare 
                            definitivamente le mura del castello e i suoi accessi come li conosciamo oggi.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Dopo la morte di <b>Ludovico il Moro</b>, il castello di Novara è conteso tra francesi, milanesi e svizzeri prima, e da spagnoli e famiglia 
                            Farnese dopo (ebbene sì, su Novara si distende anche la <i>longa manus</i> di <b>Papa Paolo Farnese III</b>, che desidera assegnare un buon 
                            marchesato al proprio figlio prediletto, Pier Luigi). Un avvicendamento di <b>dominus</b> che pone l’accento ancora una volta sull’importanza 
                            di Novara nei disegni politici di tutte le potenze in gioco negli anni delle cosiddette ‘Guerre d’Italia’.
                        </p>
                        <p>
                            Dopo la morte di Ludovico il Moro, il castello di Novara è conteso tra francesi, milanesi e svizzeri prima, e da spagnoli e famiglia Farnese 
                            dopo (ebbene sì, su Novara si distende anche la longa manus di Papa Paolo Farnese III, che desidera assegnare un buon marchesato al proprio 
                            figlio prediletto, Pier Luigi). Un avvicendamento di dominus che pone l’accento ancora una volta sull’importanza di Novara nei disegni politici 
                            di tutte le potenze in gioco negli anni delle cosiddette ‘Guerre d’Italia’.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Negli anni della <b>dominazione napoleonica</b> il castello cambia destinazione d’uso: al suo interno viene trasferito il carcere 
                            precedentemente ubicato nel Palazzo del Pretorio di Novara. Nel 1807 partono i lavori di ammodernamento: vengono costruiti pavimenti, nuove 
                            porte dotate di sportellino di ispezione e nuove finestre. Il risultato sono 5 locali di detenzione, un’infermeria e un’abitazione per il 
                            custode. Ma il numero dei detenuti è sempre in aumento e nel giro di pochi anni si arriva a 12 locali destinati agli uomini e 3 alle donne, per 
                            una capienza massima di 120 persone.
                        </p>
                        <p>
                            Solo verso la fine dell’Ottocento si affaccia per la prima volta l’idea di trasferire il carcere in altra sede e di destinare il Castello a nuovi 
                            utilizzi. L’ipotesi è tutt’altro che conservativa: si parla di radere al suolo per far spazio ad una scuola di Arti e mestieri. Tuttavia gli uffici 
                            preposti alla conservazione dei beni del Piemonte non avvallano il progetto e il castello viene riconosciuto quale parte integrante della memoria
                            e della storia locale.
                        </p>
                        <p>
                            Ma non è questa l’unica volta in cui il Castello rischia di essere declassato ad ‘ammasso di pietre’. Nel 1900 è l’amministrazione locale a 
                            rivendicarne lo spazio per creare un nuovo quartiere e ridefinire l’assetto urbanistico di Novara. Il Castello viene percepito come un ostacolo 
                            al ‘nuovo che avanza’, ma per fortuna il progetto non ha seguito e fino al 1973 il Castello di Novara rimane un carcere.
                        </p>
                        <p>
                            Si racconta che i detenuti, una volta trasferiti nei nuovi locali del carcere della Bicocca abbiano rimpianto l’atmosfera di quello che è rimasto 
                            e rimarrà sempre ‘il castello’ di Novara e dei Novaresi.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Castello visconteo sforzesco, castello delle signorie, castello delle dominazioni straniere. Il Castello di Novara è stato definito in molti modi 
                            che ne riflettono la storia e le contese. Oggi ci piace definirlo semplicemente il castello dei novaresi. E tale è da quando, da luogo chiuso e 
                            arroccato si è aperto prima alle passeggiate e poi alla vita, agli eventi e alla cultura, per i propri cittadini e non solo.
                        </p>
                        <p>
                            Un lungo e discusso <b>restauro</b> ha regalato alla città di Novara un eccellente <b>polo culturale</b>, sede di musei, mostre d’arte, eventi 
                            pubblici e privati, convention e congressi, spazi di ristoro e condivisione. Tra passato e futuro, il Castello è oggi sinonimo di accoglienza, 
                            scambio e conoscenza.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1266.563675692318!2d8.617033996004295!3d45.44568934170638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47865a1f573f0a85%3A0xb148332b47c47682!2sP.za%20Martiri%20della%20Libert%C3%A0%2C%2028100%20Novara%20NO!5e1!3m2!1sit!2sit!4v1716040346676!5m2!1sit!2sit"
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
