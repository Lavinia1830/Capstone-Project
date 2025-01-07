import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Piazza_del_Duomo(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='piazza_del_duomo' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Piazza del Duomo</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Nel passato fu chiamata anche piazza Grande, piazza Comune, piazza Italiana, piazza Vittorio Emanuele III, piazza Cesare Battisti.<br/>
                        È stata definita una delle più belle piazze urbane del mondo. Senza dubbio è una delle più caratteristiche e policrome. Il suo effetto scenografico è davvero sorprendente e si accompagna armoniosamente alla colorazione degli edifici che la delimitano, alla loro impulsiva linea 
                        architettonica esaltata da tre sequenze di portici quattro – cinquecenteschi. E´ il cuore del centro storico e fu l´aula della vita civica e religiosa della città alpina. Urbanisticamente era decentrata rispetto allo svolgersi della cinta murata a causa delle vicende storiche che elessero, 
                        a chiesa cattedrale, l´edificio cimiteriale cristiano fuori dalla romana porta Veronese.
                    </p>
                    <p>
                        Un percorso espositivo che usa la metafora della montagna per raccontare, dall’alto verso il basso, la formazione delle Dolomiti, la biodiversità alpina, la storia dei primi insediamenti umani e la scoperta delle origini del mondo attraverso la più grande mostra dei dinosauri dell’arco 
                        alpino. Il rapporto uomo-natura è al centro della filosofia espositiva del MUSE. Visitando il museo è possibile comprendere come la scienza e la tecnologia possano contribuire a trovare buone soluzioni per il futuro del nostro pianeta. Il MUSE, tramite exhibit interattivi e installazioni 
                        multimediali, offre un meraviglioso viaggio nella scienza e nella natura, pensato soprattutto per giovani, bambini e famiglie. Accanto al percorso espositivo permanente, trovano spazio progetti innovativi e numerose ed interessanti mostre temporanee, così come tanti eventi e progetti 
                        speciali.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2755.1463301849935!2d11.118839730574699!3d46.06679366605797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4782714b0797af07%3A0x716173009399df70!2sPiazza%20del%20Duomo%2C%2038122%20Trento%20TN!5e1!3m2!1sit!2sit!4v1712924277913!5m2!1sit!2sit"
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
