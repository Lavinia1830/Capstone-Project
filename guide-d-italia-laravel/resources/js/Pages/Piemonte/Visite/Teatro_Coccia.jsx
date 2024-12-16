import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Teatro_Coccia(props) {
    return (
        <>
            <Head title="Teatro Coccia"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='teatro_coccia' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Teatro Coccia</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Così <b>Arturo Toscanini</b> testimonia di quel lontano <b>22 dicembre 1888</b>, quando, tra entusiasmo e legittima soddisfazione, per la 
                            prima volta i <b>novaresi</b> facevano risuonare gli applausi nel nuovo <b>Teatro</b>, nato sulle spoglie del vecchio <b>Teatro morelliano</b> 
                            eretto nella seconda metà del XVIII secolo.
                        </p>
                        <p>
                            Il primo teatro di <b>Novara</b> fu eretto su progetto dell’architetto pontificio <b>Cosimo Morelli</b> e venne inaugurato nel 1779. Col 
                            passare degli anni la struttura non si rivelò più adatta alle esigenze teatrali del tempo: il palco era poco capiente e male si adattava ai 
                            nuovi melodrammi, agli spettacoli circensi e di burattini tanto amati dalla classe borghese. Inoltre la città, che era in continua evoluzione, 
                            esigeva nuovi simboli dopo la costruzione della <Link href='/visite/piemonte/novara/basilica_di_san_gaudenzio' 
                            className='text-decoration-none color_link'>cattedrale</Link> e della <Link href='/visite/piemonte/novara/cupola_di_san_gaudenzio' className='text-decoration-none color_link'>cupola di San Gaudenzio</Link>. Per questo motivo nel <b>1853-55</b> fu costruito il <b>Teatro 
                            Sociale</b> che da subito entrò in competizione con quello più antico, in quanto i due teatri rappresentavano perfettamente la dicotomia della 
                            società del tempo, divisa tra la compassata <b>aristocrazia</b> legata alle tradizionali rappresentazioni liriche e l’esuberante <b>borghesia 
                            cittadina</b> attratta dai nuovi tipi di intrattenimento. Nel <b>1880</b> l’amministrazione comunale stabilì l’acquisto del Sociale e del 
                            teatro morelliano, che già dal <b>1873</b> aveva assunto la denominazione di <strong>Teatro Coccia</strong>, in onore di <b>Carlo Coccia</b>, 
                            celebre maestro di cappella del <b>Duomo di Novara</b>. L’intento era infatti di sostituire entrambi gli edifici con un nuovo teatro e per 
                            favorire questo procedimento si sciolse la <b>Società dei Palchettisti del Coccia</b>. Nel <b>1881</b> l’architetto <b>Giuseppe Oliverio</b>, 
                            su iniziale progetto di <b>Andrea Scala</b>, rivide il piano di costruzione del nuovo stabile che inizialmente avrebbe dovuto sorgere di fianco 
                            al castello in <b>Piazza Rivarola</b>. Negli stessi anni il consigliere comunale <b>Andreoni</b> avanzò l’idea di ristrutturare il <b>Sociale</b>, 
                            ma l’amministrazione precisò che solo uno dei due progetti sarebbe stato approvato: è palese che, oltre che tra due progetti architettonici, 
                            l’amministrazione comunale avrebbe dovuto scegliere anche tra due progetti politici. Nel mentre si riformò la <b>Società dei Palchettisti</b>, 
                            coordinata dal marchese <b>Luigi Tornielli</b>, sindaco di Novara, che fece ostruzionismo contro la ristrutturazione del Sociale e spinse 
                            per l’edificazione del nuovo Coccia; la presa di posizione del <b>Tornielli</b> fu fondamentale e la commissione istituita dal Comune scelse di 
                            attuare il progetto dell’architetto <b>Oliverio</b>. Per far fronte ai costi il Comune concesse l’area del vecchio <b>Coccia</b> per 
                            l’edificazione e <b>220.000 lire</b> per la costruzione; le restanti spese sarebbero state coperte collocando <b>49 azioni da 5.000 lire 
                            cadauna</b>. Nel <b>1886</b> ci fu la posa della prima pietra del nuovo teatro, costruito anche con il materiale del precedente edificio che 
                            venne demolito quasi completamente. Il <b>22 dicembre 1888</b> fu inaugurato con l’opera “<b>Gli Ugonotti</b>” di <b>Meyerbeer</b> diretta da 
                            un giovanissimo <b>Arturo Toscanini</b> che rimase così piacevolmente colpito da quell’esperienza da scrivere ormai in tarda età in una lettera 
                            al suo pupillo novarese <b>Guido Cantelli</b>: «unirò il mio applauso a quello dei tuoi concittadini che ti onorano, forse, in quel teatro che 
                            io, non ancora ventiduenne ebbi l’onore e il piacere d’inaugurare nel carnevale <b>1888-89</b>… Oh! Il bel tempo che fu!!!». Il nuovo teatro 
                            sostituì, nell’immaginario dei novaresi, il precedente edificio settecentesco. Esso occupava un’area quattro volte maggiore ed era orientato 
                            diversamente rispetto al vecchio <b>Coccia</b>, con l’entrata sull’attuale <b>via Fratelli Rosselli</b> anziché sull’odierno <b>largo Puccini</b>. 
                            La facciata principale, con primo piano in stile dorico e i successivi in stile ionico, venne circondata da un porticato in <b>granito rosa di 
                            Baveno</b>. L’esterno fu dipinto di color grigio granito. L’atrio con pavimento a mosaico fu abbellito anche da quattro colonne di ghisa e 
                            altrettante nicchie contenenti i busti di <b>Giuseppe Verdi</b>, <b>Vincenzo Bellini</b>, <b>Gioacchino Rossini</b> e <b>Gaetano Donizetti</b>; 
                            in platea furono posizionati i busti di <b>Saverio Mercadante</b> e di <b>Carlo Coccia</b>. Ancor oggi la grande sala interna, a ferro di cavallo, 
                            ha tre ordini di palchi, al di sopra dei quali vi è la galleria. I palchi, con decori rinascimentali, sul retro potevano contare su camerini 
                            privati e retropalchi. Per far fronte agli allora popolari spettacoli equestri che necessitavano di ampi spazi, il palcoscenico era di grandi 
                            dimensioni (<b>16 m. per 23 m.</b>) e aveva un’area centrale mobile, nonché delle aree di servizio nascoste. Il progetto di <b>Giuseppe 
                            Oliverio</b>, per ragioni di bilancio, fu completato solo nel <b>1928</b>. Nello stesso anno il <b>teatro Sociale</b> fu demolito per fare posto 
                            al <b>palazzo delle poste</b>: il <b>Coccia</b> consolidò così la sua importanza e divenne il simbolo per eccellenza della vita culturale dei 
                            novaresi.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1791.193505082563!2d8.617727101737492!3d45.44562706886868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47865a202a3ebe63%3A0x414b24c3afa36645!2sCattedrale%20di%20Santa%20Maria%20Assunta!5e1!3m2!1sit!2sit!4v1716037602122!5m2!1sit!2sit"
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
