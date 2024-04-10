import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';


export default function Palazzo_Martinengo_di_Brescia(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='p_martinengo_di_brescia' style={{ position: 'relative' }}>
            <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Palazzo Martinengo di Brescia</h1>
            <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
            <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Visite</p>
            </div>
            <div className="margin mt-3">
                <p>
                    <strong>Palazzo Martinengo Cesaresco</strong> si affaccia su via Musei e piazza del Foro in pieno centro storico a Brescia, a pochi metri dal Capitolium. La storia dell’area su cui è situato l’edificio risale alla 
                    prima Età del Ferro, come certificano gli importanti reperti visibili nel percorso archeologico sotterraneo del palazzo, che sarà accessibile gratuitamente ai visitatori della mostra. Il palazzo attuale venne eretto 
                    verso la metà del XVII secolo sui resti di una precedente costruzione quattrocentesca su commissione del conte Cesare IV Martinengo Cesaresco. Con la morte del conte l’edificio divenne proprietà dei suoi figli – 
                    Carlo I, Scilla ed Enrico – che lo divisero in tre parti determinando così una segmentazione della proprietà, che venne acquistata all’inizio del ’900 dalla Provincia di Brescia.
                </p>
                <p>
                    La facciata del palazzo su via Musei venne probabilmente costruita verso il 1680-90 per ovviare all’impedimento delle autorità dell’epoca al progetto di ampliamento dello stabile proposto da Cesare Martinengo. Qui 
                    spicca per imponenza il portale attribuito a Stefano e Carlo Carra, con ai lati due maestose aquile poste come telamoni in sostituzione dei capitelli al di sopra delle due colonne che sorreggono il balcone in marmo 
                    di Botticino. Entrando nel portale, passando sotto una volta a botte affrescata, si arriva al piccolo cortile interno dove è presente un’elegante fontana cinquecentesca con una nicchia che ospita la statua di Nettuno. 
                    All’interno di quest’area si trova la cappella privata del vescovo di Famagosta, Mattia Ugoni, membro della nobile famiglia bresciana proprietaria di quest’ala del palazzo nel Cinquecento, prima dell’acquisizione da 
                    parte di Cesare IV Martinengo Cesaresco.
                </p>
                <p>
                    Nella cappella si trovavano gli affreschi del Moretto raffiguranti i Dodici Profeti e Mosè e il roveto ardente, staccati nel XIX secolo ed oggi conservati nella Pinacoteca Tosio Martinengo. La facciata del palazzo su 
                    Piazza del Foro si caratterizza, invece, per uno stile cinquecentesco più austero voluto probabilmente da Cesare Martinengo per mantenere un’omogeneità con le parti interne, realizzate un secolo prima dalle famiglie 
                    Gambara e Ugoni. Nella parte orientale del loggiato vi è il grande scalone seicentesco che porta al piano superiore costituito da sette stanze tra cui spiccano il salone da ballo con affreschi di Ludovico Bracchi e 
                    l’elegante sala in stile neoclassico che fu probabilmente il luogo d’incontro, nel primo ‘800, tra l’allora proprietaria del palazzo Marzia Martinengo e il poeta Ugo Foscolo.
                </p>
            </div>
            <div className='margin mb-4'>
            <h3 className='color-subtitle text-center'>Mappa</h3>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.350703041462!2d10.223389059534975!3d45.539428165817014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781761572bad7b1%3A0x759141005896ee59!2sPalazzo%20Martinengo%20Cesaresco%20Novarino!5e1!3m2!1sit!2sit!4v1712668569491!5m2!1sit!2sit"
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
