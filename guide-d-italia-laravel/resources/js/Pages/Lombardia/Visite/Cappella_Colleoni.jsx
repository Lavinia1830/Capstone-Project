import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Cappella_Colleoni(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
      <main>
        <div className='cappella_colleoni' style={{ position: 'relative' }}>
            <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Cappella Colleoni</h1>
            <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
            <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Visite</p>
        </div>
        <div className="margin mt-3">
            <p>
                È senza dubbio l’edificio più maestoso di Bergamo.
            </p>
            <p>
                La sua facciata decorata da marmi rossi e bianchi è un capolavoro del Rinascimento italiano; i suoi interni un concentrato incredibile di opere d’arte: la statua equestre del condottiero bergamasco Bartolomeo Colleoni, i sarcofagi interamente intarsiati nel marmo, la delicata tomba 
                della figlia Medea, i legni scolpiti dei banchi.
            </p>
            <p>
                Servirebbero pagine e pagine solo per descriverli tutti, quello che possiamo suggerirti è di entrare nella cappella e farti avvolgere da questo fantastico concentrato di arte!
            </p>
            <p>
                Una curiosità: si narra che toccare a mezzanotte il simbolo araldico posto sulla cancellata porti fortuna. Vero o no, può essere un’ottima scusa per una passeggiata nella suggestiva Città Alta notturna!
            </p>
            <p>
                Bartolomeo Colleoni è stato tra i più celebri capitani di ventura d’Italia. Soldato intrepido, passò la sua vita a guerreggiare in giro per l’Italia, principalmente al servizio della Repubblica di Venezia.
            </p>
            <p>
                La sua vita è legata a doppio filo con Bergamo: qui nacque, qui tornò all’apice del suo potere e qui volle essere seppellito.
            </p>
            <p>
                I bergamaschi sono quindi molto legati alla sua figura e alle tracce che ha lasciato sul territorio: dai numerosi castelli nella pianura, alla fitta rete di canalizzazione da lui voluta, fino alla bellissima cappella in cui riposa.
            </p>
            <p>
                Non si deve dimenticare però come fosse un uomo forte, quasi brutale! A proposito della cappella si narra come i canonici di Santa Maria Maggiore fossero contrari a concedergli lo spazio per la sua edificazione. Bartolomeo risolse la questione con la diplomazia usuale a un mercenario 
                di 600 anni fa: mandò i suoi soldati e fece abbattere la vecchia sagrestia della basilica. Che questo aneddoto sia vero o no, a noi rimane la bellezza di questa imponente opera architettonica.
            </p>
        </div>
        <div className='margin mb-4'>
            <h3 className='color-subtitle text-center'>Mappa</h3>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1165.9968849728957!2d9.661394498627839!3d45.70349329574065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781516ab2b45893%3A0x2e54ce7a3650b729!2sCappella%20Colleoni!5e1!3m2!1sit!2sit!4v1712674838198!5m2!1sit!2sit"
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
