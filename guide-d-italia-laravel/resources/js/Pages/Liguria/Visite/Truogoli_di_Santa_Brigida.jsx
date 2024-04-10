import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Truogoli_di_Santa_Brigida(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='truogoli_di_santa_brigida' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Truogoli di Santa Brigida</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
            </div>
            <div className="margin mt-3">
                <p>
                    Sul lato a monte di <b>piazza della Commenda</b> si imbocca <b>via di Prè</b>. Dopo un breve tratto, si svolta a sinistra in <b>vico di Santa Brigida</b> per raggiungere <b>piazza dei Truogoli di Santa Brigida</b>. È la piazza degli antichi lavatoi, circondata da case antiche ben rinnovate e coloratissime, con un'edicola sacra 
                    su un muro.
                </p>
                <p>
                    Al centro della piazza c'è una tettoia in ferro che copre i “truogoli”, dove sino a non molti decenni fa le donne del quartiere si incontravano per lavare i panni e socializzare.
                </p>
                <p>
                    I vecchi genovesi dicevano che a <b>Santa Brigida</b> “l'acqua andava sprecata”, poiché la fontana del lavatoio era sempre aperta.
                </p>
                <p>
                    La piazza e i truogoli prendono il nome dal convento - ora scomparso - che occupava l’area a monte della piazza e di <b>via Balbi</b>.
                </p>
                <p>
                    Oggi è una delle piazzette più belle del centro storico, suggestiva quando è deserta e silenziosa, allegra quando è animata dalla gente che entra ed esce da ristoranti, librerie e negozietti.
                </p>
                <p>
                    Sotto la tettoia dei truogoli ci si siede intorno ai tavolini per pranzare o prendere un aperitivo, assistere a pubbliche letture, conferenze, film all'aperto.
                </p>
            </div>
            <div className='margin mb-4'>
                <h3 className='color-subtitle text-center'>Mappa</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d843.2749300081908!2d8.924029130303088!3d44.415115661740614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d343e281ae91c3%3A0xeacf92240771bd61!2sPiazza%20dei%20Truogoli%20di%20S.%20Brigida%2C%2016126%20Genova%20GE!5e1!3m2!1sit!2sit!4v1712753719927!5m2!1sit!2sit"
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
