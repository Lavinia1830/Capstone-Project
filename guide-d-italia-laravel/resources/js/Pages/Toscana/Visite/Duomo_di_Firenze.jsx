import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Duomo_di_Firenze(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='duomo_di_firenze' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Duomo</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Rivestita di marmo bianco, rosa e verde, spalleggiata dal vertiginoso e snello Campanile di Giotto e con la Cupola di Brunelleschi che fa capolino alle spalle della facciata, la Cattedraledi Santa Maria del Fiore è l’edificio più conosciuto di Firenze. Costruita a partire dal 1296 
                        e terminata un secolo e mezzo dopo, è un perfetto amalgama architettonico che spazia dal goticoal rinascimentale. Il Battistero di San Giovanni, che le sorge proprio di fronte, nasconde dietro le monumentali porte bronzee uno sfolgorante ciclo di mosaici dorati.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className='color-subtitle'>La cattedrale</h2>
                    <p>
                        Abbagliante e arzigogolata, e di una grandezza fuori scala in un centro storico fatto di strette strade ombrose e acciottolate, la Cattedrale di Santa Maria del Fiore è un capolavoro ingegneristico che per secoli ha impegnato i massimi architetti fiorentini. Sotto il controllo del 
                        progettista Arnolfo di Cambio – poi sostituito come capomastro da Giotto, da Andrea Pisano e da Francesco Talenti – i lavori cominciarono alla fine del Duecento e terminarono 140 anni più tardi, dopo infinite modifiche strutturali che però garantirono sempre l’armonia stilistica 
                        del complesso. Lunga 153 m, larga 38 m e con un transetto di 90 m al centro del quale si eleva la Cupola di Brunelleschi, questa enorme chiesa (la terza più grande al mondo) può contenere fino a trentamila fedeli.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className='color-subtitle'>La facciata</h2>
                    <p>
                        Anche se a un primo sguardo la complessa facciata tripartita può sembrare un tutt’uno con il resto del complesso religioso, in realtà è un rifacimento tardo ottocentesco in stile neogotico. Quella originaria del Trecento, disegnata da Arnolfo ma mai terminata per la morte 
                        dell’architetto, che era decorata da sculture di Donatello e Nanni di Banco, fu abbattuta nel 1587. Dopo tre secoli di traversie, liti, progetti approvati e poi finiti nel dimenticatoio, i lavori per la nuova facciata furono affidati nel 1867 a Emilio de Fabris. Il risultato è 
                        un’opera sorprendente: ricoperta da marmi bianchi, rossi e verdi come i fianchi della basilica, e con un grande rosone centrale, è movimentata da nicchie, cornicioni e colonnine che sovrastano i tre portali e incorniciano le statue della Madonna in trono e santi e le sculture dei 
                        papi e dei vescovi fiorentini.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className='color-subtitle'>La Cupola di Brunelleschi</h2>
                    <p>
                        Terminati gli interni in tempi tutto sommato rapidi, considerata l’epoca e l’opera, il problema da risolvere affinché la chiesa potesse essere utilizzata era legato alla cupola. Il tamburo voluto dall’architetto Talenti era troppo ampio, alto e debole per reggere la copertura con 
                        la tradizionale tecnica delle cèntine, le impalcature in legno che sostenevano il peso della cupola durante la sua realizzazione. La soluzione la trovò, nel 1420, Filippo Brunelleschi, che ideò una strutturain calcestruzzo dotata di una doppia calotta; quella inferiore, più piccola 
                        e autoportante, sosteneva quella esterna, di 54 m di diametro. Fu un successo, e sedici anni dopo l’inizio dei lavori – e a quasi un secolo e mezzo dalla posa della prima pietra del duomo – la cupola era completata. Mancavano ancora le statue che avrebbero ornato i contrafforti della 
                        calotta (il David di Michelangelo era stato commissionato per essere collocato lì, nel punto più in vista della cattedrale) e anche la lanterna, realizzata poco dopo da Andrea del Verrocchio, ma la chiesa poteva finalmente essere consacrata.
                    </p>
                    <p>
                        Chi voglia provare il brivido di salire fino in cima, a circa 90 m dal suolo, e capire più nel dettaglio la genialata ingegneristica di Brunelleschi, si prepari ad affrontare 463 ripidissimi e interminabili scalini: la fatica sarà ampiamente ripagata dal colpo d’occhio sulla città. 
                        Se doveste capitare qui l’8 settembre, avrete la possibilità di visitare anche le terrazze che circondano la cattedrale: sono aperte a ingresso libero solo in quel giorno dell’anno; ma, se siete disposti a spendere una cifra non proprio irrisoria, potete prenotare una visita guidata 
                        telefonando al Grande Museo del Duomo.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1205.591406119875!2d11.254550155636306!3d43.7729668561344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a5403bfe22ff5%3A0x5591438487aaf1f5!2sCattedrale%20di%20Santa%20Maria%20del%20Fiore!5e1!3m2!1sit!2sit!4v1713190935567!5m2!1sit!2sit"
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
