import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';

export default function Monterosso_al_mare(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
      <main>
        <div className='monterosso_al_mare' style={{ position: 'relative' }}>
          <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Materasso al Mare</h1>
          <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
          <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
        </div>
        <div className="margin mt-3">
            <h2 className='color-subtitle'>Monterosso al Mare: in vacanza tra comfort e natura</h2>
            <p>
                <strong>Monterosso al Mare</strong> è la porta delle <Link href='/destinazioni/le_5_terre/' className='text-decoration-none color_link'>Cinque Terre</Link> , quel tratto della Riviera Ligure di Levante inserito dall’<b>Unesco</b> nella lista dei luoghi Patrimonio dell’Umanità, per la 
                capacità dell’uomo di interagire rispettosamente con il paesaggio, onorandolo in tutta la sua grandiosa bellezza.
            </p>
            <p>
                Il <b>borgo di Monterosso</b> è il più grande dei 5 che compongono le Cinque Terre ed è <b>l’unico a vantare ampie e splendide spiagge di facile accesso</b>.<br/>
                L’ideale per una vacanza in famiglia, a stretto contatto con la natura.
            </p>
        </div>
        <div className="margin mt-3">
            <h2 className='color-subtitle'>Sulla sensuale spiaggia di Fegina</h2>
            <p>
                Il fascino delle Cinque Terre deve molto al suo territorio impervio. A Monterosso la natura è ugualmente incontrastata, ma tra i 5 borghi della celebre costa è l’unico a vantare un’ampia e comoda spiaggia di sabbia. Si tratta di <b>Fegina</b>, definita dall’autorevole rivista 
                statunitense <i>Forbes</i> “<b>una delle 25 spiagge più sexy del mondo</b>”.
            </p>
            <p>
                Partendo dalla stazione ferroviaria, vi risulterà comodissimo scendere pochi gradini per trovarvi un posto al sole, sul tratto libero o servito dagli stabilimenti balneari. Siamo nell’area marittima del <b>Parco delle Cinque Terre</b> e l’acqua, grazie a un’attenta tutela, sorprende 
                per la sua tonalità di un azzurro brillante.<br/>
                Il litorale è di <b>sabbia mista a ciottolini</b>.<br/>
                I bambini sono a loro agio, i genitori possono rilassarsi sui lettini. Al limitare del lungomare di Fegina potrete invece sostare sulla <b>scogliera sotto la torre Aurora</b>. 
            </p>
            <p>
                Poco oltre c’è la piccola <b>Spiaggia della Stazione</b> e alla fine del lungomare, puntando verso Levante, potete incontrare la <b>Spiaggia del Gigante</b>: la si riconosce dalla grande statua di 14 metri che la sovrasta, raffigurante il dio Nettuno.<br/>
                Subito dopo il Circolo Velico, bastano pochi passi per raggiungere la <b>Spiaggia del Portiglione</b>.
            </p>
        </div>
        <div className="margin mt-3">
            <h2 className='color-subtitle'>Sulle orme di un grande poeta: Eugenio Montale</h2>
            <p>
                Leggete le poesie <i>I limoni e Punta del Mesco</i>, nella raccolta <i>Ossi di Seppia</i> dell’immenso poeta italiano e premio Nobel per la letteratura <b>Eugenio Montale</b>, genovese. Coglierete in questi versi tutta la meraviglia di Monterosso al Mare, i suoi suoni e profumi, 
                le <b>liriche suggestioni paesaggistiche</b>. Perché Montale ha trascorso fin dall’infanzia le sue vacanze qui, nella residenza estiva di famiglia in stile liberty.
            </p>
            <p>
                Si chiama <b>Villa delle Due Palme</b>, anche se lui la ricorda con il nome di Pagoda Giallognola. Si erge sulle prime pendici del Mesco, lungo il litorale di Fegina, e attorno è stato ideato l’itinerario del <b>Parco Letterario Eugenio Montale</b>.
            </p>
            <p>
                La dimora è oggi proprietà privata e ospita in parte una struttura ricettiva, ma potrete ammirarla dall’esterno e soprattutto avrete l’occasione di partecipare a una delle <b>passeggiate</b> organizzate dall’Istituzione del Parco Letterario.
            </p>
            <p>
            Le casette colorate del borgo e i suoi monumenti, la vegetazione e i panorami vi appariranno in un’ottica diversa, come un <b>esaltante racconto tra cultura e natura</b>.
            </p>
        </div>
        <div className="margin mt-3">
            <h2 className='color-subtitle'>A zonzo nel borgo</h2>
            <p>
                È un piacere gironzolare nei <b>carruggi</b>, come sono chiamate le piccole vie delle località liguri. Tra scalinate e piazzette si susseguono nel borgo antico <b>botteghe di specialità alimentari</b>, focaccerie, bar e ristoranti.<br/>
                Visitate con calma la <b>Chiesa di San Giovanni Battista</b> dalla facciata decorata a strisce bianche e nere e la seicentesca <b>Chiesa di San Francesco</b> con annesso il <b>Convento dei Cappuccini</b>. Ammirate i preziosi dipinti all’interno, poi uscite: da qui si apre un <b>grandioso 
                panorama</b> su tutta la costa delle Cinque Terre.
            </p>
        </div>
        <div className="margin mt-3">
            <h2 className='color-subtitle'>5 suggerimenti per un soggiorno indimenticabile a Monterosso al Mare</h2>
            <p>
                <b>Monterosso</b> è il perfetto punto di partenza o di arrivo per una visita alle Cinque Terre.
            </p>
            <p>
                Il primo consiglio è quello di <b>lasciare la macchina e da Monterosso al Mare muoversi con il treno</b> che percorre la costiera. Comodo, economico, ecologico e panoramico. In alternativa potete camminare lungo i sentieri tracciati.
            </p>
            <p>
                Suggestiva una visita al <b>Santuario di Nostra Signora di Soviore</b> in collina, dove si può anche pernottare e prenotare un tavolo al ristorante. Per chi se la sente, raggiungerlo <b>a piedi</b> attraverso un meraviglioso e breve sentiero dal borgo è il massimo. <b>Soggiornare in un 
                agriturismo in altura</b>, immersi nel silenzio e nella vegetazione, può essere un’ottima idea. E poi recatevi al molo per <b>programmare una gita al mare</b> tra le meraviglie del Golfo dei Poeti.
            </p>
        </div>
        <div className='margin mb-4'>
            <h3 className='color-subtitle text-center'>Mappa</h3>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9584.101598368212!2d9.64293996859871!3d44.147636267469885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d4ee1b7eca3573%3A0x3c02e4311a909756!2s19016%20Monterosso%20al%20Mare%20SP!5e1!3m2!1sit!2sit!4v1712839960974!5m2!1sit!2sit"
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
