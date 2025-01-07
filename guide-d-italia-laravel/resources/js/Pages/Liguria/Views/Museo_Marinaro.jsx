import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Museo_Marinaro(props) {
  return (
    <>
      <Head title='Museo Marinaro'/>
      <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
      >
        <main>
          <div className='museo_marinaro' style={{ position: 'relative' }}>
            <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Museo Marinaro</h1>
            <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
            <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
          </div>
          <div className="margin mt-3">
            <p>
              Il <strong>Museo Marinaro di Camogli</strong> è intitolato al suo fondatore, <b>Gio Bono Ferrari</b>, autore della <b>Trilogia della vela</b>; uno dei più 
              noti studiosi della <b>storia della marina velica ligure</b> e, in particolare, camogliese.
            </p>
            <p>
              Nel <b>1938</b> il Museo venne donato al Comune, che lo ospitò nel ridotto del teatro <b>Principe Umberto</b> (l’attuale teatro Sociale) e <b>Gio Bono 
              Ferrari</b> ne fu anche il <b>primo direttore</b>.
            </p>
            <p>
              <b>Quadri, fotografie, modelli e documenti esposti</b> sono doni di famiglie camogliesi. Rappresentano solo una piccola testimonianza dei <b>2.900 e più 
              bastimenti a vela</b> che gli armatori camogliesi acquisirono, e capitani e marinai armarono, nel periodo compreso tra <b>le guerre napoleoniche e la 
              prima guerra mondiale</b>.
            </p>
            <p>
              Nelle <b>didascalie</b> che illustrano le vetrine sono riportati i cognomi e i soprannomi della gente di Camogli, con tutte le storie da loro vissute. 
              Ricordano gli <b>antichi proprietari</b> degli oggetti, i loro <b>costruttori</b> e donatori. Questi particolari fanno del Museo Marinaro 
              un <b>vivissimo ed emozionante luogo della memoria </b> dedicato non a generici argomenti, ma a <b>persone vere</b> e vive nel ricordo della loro storia, 
              dei loro familiari e dei loro concittadini.
            </p>
            <p>
              Il <b>secondo direttore</b> del Museo è stato, nel <b>1942</b>, l’ingegner <b>Mario Casabona</b> che ha seguito le direttive del fondatore <b>Gio Bono 
              Ferrari</b>.
            </p>
            <p>
              Nel <b>1944</b>, a causa della guerra, il Museo fu ricoverato in un magazzino.
            </p>
            <p>
              Nel <b>1973</b> il nuovo direttore, il capitano <b>Attilio Bertolotto</b>, preciso studioso della storia marinara e capace costruttore di <b>modelli</b> e 
              di <b>strumenti di bordo</b>, fu incaricato di sistemare il Museo nell’attuale sede di <b>via Gio Bono Ferrari</b>.
            </p>
          </div>
          <div className='margin mb-4'>
            <h3 className='color-subtitle text-center'>Mappa</h3>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2007.9651747370901!2d9.155453322483309!3d44.34778001769049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d35fc5f9146505%3A0xced86b2856a48dfd!2sCivico%20Museo%20Marinaro%20Gio%20Bono%20Ferrari!5e1!3m2!1sit!2sit!4v1712828014146!5m2!1sit!2sit"
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
