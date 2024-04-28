import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Duomo_di_San_Giovanni(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='duomo_di_san_giovanni' style={{ position: 'relative' }}>
            <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Duomo di San Giovanni</h1>
            <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
            <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
            </div>
            <div className="margin mt-3">
                <p>
                    Il <strong>Duomo di Torino</strong>, costruito tra il 1491 e il 1498 sul luogo in cui sorgeva una basilica trecentesca, è l’unico esempio superstite di architettura rinascimentale. Qui è custodita la reliquia più controversa della cristianità, la Sindone, esposta in 
                    copia davanti all’altare maggiore.
                </p>
                <p>
                    Il <strong>Duomo di Torino</strong>, dedicato a San Giovanni Battista sorge nella piazza, anch’essa intitolata al santo, nei pressi dei Musei Reali e a pochi passi da piazza Castello e dal Teatro Romano dell’antica Augusta Taurinorum, quindi in pieno centro storico. 
                    Tra le chiese di Torino, il Duomo guida sicuramente la classifica di quelle da visitare assolutamente. Si tratta dell’unica chiesa in stile rinascimentale del capoluogo piemontese.
                </p>
                <p>
                    Nel corso del Seicento il Duomo è stato ampliato per permettere di conservare al meglio la Sacra Sindone, che, nel frattempo, era stata portata a Torino dalla famiglia Savoia. Sempre nel corso del Seicento Guarino Guarini, il quale aveva già lavorato alla Real Chiesa di 
                    San Lorenzo, si occupò della costruzione della maestosa cupola. I lavori durarono ben ventotto anni, dal 1666 al 1694.
                </p>
                <p>
                    La Cappella del Duomo di Torino, a pianta interna circolare, opera del Guarini, fu commissionata da Emanuele Filiberto di Savoia per conservare il sacro lenzuolo. Al centro della Cappella sorge l’altare, di fattura barocca come quest’ultima ed opera di Antonio Bertola. 
                    Conserva al suo interno, in una teca di vetro e argento, la Sindone.
                </p>
                <p>
                    All’esterno del Duomo si può notare il campanile, costruito nel 1468, e che nei lavori di ampliamento nel Seicento non venne toccato. Voluto dal vescovo Giovanni di Compeys, il campanile, a tre ordini e munito di cella campanaria, ha subito alcune modifiche, soprattutto 
                    in altezza, durante il regno di Vittorio Amedeo II.
                </p>
                <p>
                    La facciata e gli interni del Duomo furono restaurati dopo l’incendio avvenuto nella notte tra l’11 e il 12 Aprile del 1997 che ne aveva distrutto una buona parte. In quella occasione la Sindone fu salvata dal lavoro dei vigili del fuoco; ricordiamo tutti le immagini della 
                    teca portata fuori dall’edificio ancora in fiamme.
                </p>
                <p>
                    Proprio a seguito di quell’incendio si è provveduto a sistemare il lenzuolo in una nuova teca. Secondo le disposizioni date una commissione scientifica nominata dall’arcivescovo di Torino, il Cardinal Giovanni Saldarini, la Sindone è disposta in posizione distesa, piana ed 
                    orizzontale. Inoltre la teca è in vetro antiproiettile, a tenuta stagne, in assenza di aria e con un gas inerte, protetta dalla luce a dagli altri agenti atmosferici.
                </p>
                <p>
                    Sulla parete opposta all’altare maggiore, è possibile ammirare una copia dell’Ultima Cena di Leonardo Da Vinci. Si tratta di un dipinto davvero imponente di circa 900 kg commissionata nel 1835 dal Re Carlo Felice e realizzata in olio su legno dal pittore vercellese Luigi Cagna.
                </p>
            </div>
            <div className='margin mb-4'>
                <h3 className='color-subtitle text-center'>Mappa</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2804.307364383734!2d7.683283743499951!3d45.07347874819242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886d76d4d9a829%3A0x1b434b48c005218b!2sCattedrale%20di%20San%20Giovanni%20Battista!5e1!3m2!1sit!2sit!4v1712576448974!5m2!1sit!2sit"
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
