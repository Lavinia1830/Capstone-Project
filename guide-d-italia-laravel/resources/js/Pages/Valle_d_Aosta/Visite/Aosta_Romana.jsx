import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/inertia-react';

export default function Aosta_Romana(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='aosta_romana' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Aosta Romana</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Fondata nel 25 a.C. con il nome di <b>Augusta Praetoria</b> in onore dell’imperatore Augusto, la città di <Link href='/destinazione/valle_d_aosta/aosta' className='text-decoration-none color_link'>Aosta</Link> conserva pregevoli resti archeologici di epoca <b>romana</b>. Lo 
                        stesso impianto urbano del capoluogo è quello tipico del <i>castrum</i>.
                    </p>
                    <p>
                        Prima di entrare nel centro storico, il visitatore è accolto dall’<Link href='/visite/valle_d_aosta/aosta/arco_di_augusto' className='text-decoration-none color_link'>Arco di Augusto</Link>. All’ingresso della città, la monumentale <Link href='/visite/valle_d_aosta/aosta/porta_praetoria' 
                        className='text-decoration-none color_link'>Porta Praetoria</Link> resiste in maniera impeccabile all’usura del tempo. Una volta giunti nel cuore della piccola “Roma delle Alpi” ammirate parte della <b>cinta muraria</b> e delle <b>torri difensive</b>. Poi, lungo quella che in 
                        passato costituiva la <Link href='/visite/valle_d_aosta/aosta/via_francigena' className='text-decoration-none color_link'>Strada delle Gallie</Link>, attraversate il <Link href='/visite/valle_d_aosta/aosta/ponte_romano' className='text-decoration-none color_link'>ponte romano 
                        sul torrente Buthier</Link>. 
                    </p>
                    <p>
                        Tra i luoghi più suggestivi di Aosta Romana spicca il <Link href='/visite/valle_d_aosta/aosta/teatro_romano' className='text-decoration-none color_link'>teatro</Link>, di cui resta la cavea e la maestosa facciata, alta ben 22 metri. Infine, il <b>Foro</b>: della zona anticamente 
                        più trafficata della città oggi è visitabile soltanto il <Link href='/visite/valle_d_aosta/aosta/criptoportico_forense' className='text-decoration-none color_link'>criptoportico forense</Link>, una sorta di porticato nascosto che sorgeva intorno ai due templi dell’area sacra e 
                        che conserva inalterato il suo fascino.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d756.4195203612867!2d7.316922565089329!3d45.7380272822963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478920ae2253217f%3A0x92b91a47ac5eadd7!2sCriptoportico%20Forense!5e1!3m2!1sit!2sit!4v1713859329405!5m2!1sit!2sit"
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
