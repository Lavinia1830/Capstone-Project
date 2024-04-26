import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Piazza_Chanoux(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='piazza_chanoux' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Piazza Chanoux</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        La grande <strong>piazza Chanoux</strong> fu realizzata sotto il regno di Carlo Alberto, a cui era intitolata prima di essere dedicata al notaio Émile Chanoux, capo e martire della Resistenza valdostana. È il salotto della città, luogo di ritrovo, feste e mercato, ospita 
                        gli edifici più eleganti di Aosta, tra cui il neoclassico Palazzo del Municipio, con belle decorazioni, un interno ricco di affreschi e intarsi. Di fronte al palazzo si trova il monumento al Soldato valdostano di Pietro Canonica del 1924.
                    </p>
                    <p>
                        Di fianco al Municipio, l’<b>Hôtel des États</b>, oggi sede di mostre temporanee, è un importante edificio del 1724-25: fu sede dell’Amministrazione del ducato, del Conseil des Commis e, per un periodo a partire dal 1870, anche tribunale. Sempre sulla stessa piazza, si 
                        affacciano l’<b>ex hotel Couronne</b> (già della Posta), riconoscibile per il piccolo loggiato in facciata, e il <b>palazzo Frassy</b>, con facciata maiolicata di gusto liberty ma di impianto ottocentesco. Qui aveva sede l’Hôtel Centoz, con il cortile adibito a stazione di 
                        posta e attrezzato per accogliere carrozze e cavalli. 
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d824.8907215687684!2d7.319709465573895!3d45.737390797481716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478920b092674883%3A0x76cd9ed3cff37fb4!2sPiazza%20%C3%89mile%20Chanoux%2C%2011100%20Aosta%20AO!5e1!3m2!1sit!2sit!4v1713861267556!5m2!1sit!2sit"
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
