import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Via_del_Prione(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='via_del_prione' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Via del Prione</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Il vostro giro del <b>Centro Storico</b> della Spezia non può non coinvolgere <strong>Via del Prione</strong>, e anche volendo non potete evitarla dal momento che si tratta della via più importante della città. La strada vi farà immergere nell’atmosfera spezzina e vi darà l’impressione 
                        che gli anni non siano davvero passati. 
                    </p>
                    <p>
                        Via del Prione, conosciuta anche come “<i>carugio drito</i>”, il vicolo principale, è da sempre un luogo di aggregazione e incontro. Il suo nome deriva probabilmente dal genovese “pria”, pietra, che simboleggiava la presenza di un pulpito destinato alle assemblee del banditore comunale.<br/> 
                        Oggi, a quasi sei secoli di distanza, è una <b>via animata</b> dal vociare dei ragazzi e dei negozianti. <br/>
                        Fu proprio questa caratteristica confusionaria ad attirare l’attenzione del famoso compositore tedesco <b>Richard Wagner</b> che sostò in città trovandovi l’ispirazione per il preludio dell’”<i>Oro del Reno</i>”.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2016.2375392865854!2d9.818417463823902!3d44.10577460815657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d4fc991eeb0259%3A0xe1fc17c68715cea7!2sVia%20del%20Prione%2C%20La%20Spezia%20SP!5e1!3m2!1sit!2sit!4v1712848913442!5m2!1sit!2sit"
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
