import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Museo_Sannitico(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='museo_sannitico' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Museo Sannitico</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Nato nel 1881, il Museo e la Biblioteca Provinciale sono stati ospitati nel Palazzo della Prefettura e, nel 1889, l’archeologo Antonio Sogliano ha provveduto a una prima catalogazione del materiale, pubblicando l’Inventario. Da allora, le strutture hanno attraversato alterne vicende e numerosi traslochi fino al 1995, quando il Museo 
                        è stato finalmente allestito nei locali del Palazzo Mazzarotta, ubicato nel centro storico di Campobasso. Le collezioni racchiudono sia la raccolta provinciale di epoca ottocentesca sia i reperti provenienti dagli scavi archeologici condotti nella Provincia di Campobasso. L’esposizione permanente è suddivisa secondo un criterio 
                        cronologico e tematico. Al piano terra si trova l’età del Bronzo e la Prima età del Ferro, con l’emersione e il consolidamento delle aristocrazie guerriere, come dimostrato da armi dell’età del Bronzo Finale e da gioielli in ambra dell’età del Ferro. Al primo piano la sezione dedicata ai Sanniti, dove spiccano una ricca collezione di 
                        statuette votive di Ercole, ornamenti in terracotta provenienti dai santuari e alcuni tesoretti votivi.Il secondo piano è dedicato alla romanizzazione del Sannio, con materiali provenienti anche da Sepino. Si possono ammirare sculture in marmo, piccoli oggetti di uso quotidiano, come chiavi, elementi di toilette femminile e suppellettili 
                        in bronzo. Una sezione molto interessante è quella dell’alto medioevo, dove sono conservati i resti di ricchissime tombe di guerrieri Bulgari ritrovate nella Piana di Bojano, tra le quali spicca la ricostruzione completa di quella di un cavaliere e del suo cavallo, con bardature in argento. In appendice, è presente una breve sezione 
                        in cui sono esposte ceramiche e altri reperti basso medioevali.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d624.630339581308!2d14.65804092738646!3d41.561647325683865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133a74d2d624b7dd%3A0x1d64a7b6a63e434d!2sMuseo%20Sannitico!5e1!3m2!1sit!2sit!4v1713343485702!5m2!1sit!2sit"
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
