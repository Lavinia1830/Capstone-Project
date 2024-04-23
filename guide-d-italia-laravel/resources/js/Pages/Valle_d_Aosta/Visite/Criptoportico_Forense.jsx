import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Criptoportico_Forense(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='criptoportico_forense' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Criptoportico Forense</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        A sinistra della Cattedrale, oltre un tempio a 6 colonne, si attraversa un antico varco per accedere al Criptoportico forense, <b>a forma di ferro di cavallo</b>, in parte interrato, con volta a botte e articolato in due corsie da una serie di arcate ribassate e massicci 
                        pilastri di travertino, illuminato da piccole finestre dalla forma a bocca di lupo. Questa <b>galleria</b> aveva principalmente funzione di contenimento e regolarizzazione del terreno su cui sorgeva l’area sacra, in leggera pendenza. Tra il III e il IV il criptoportico 
                        divenne probabilmente un magazzino. Era collegato con il portico del foro e offriva così un percorso protetto in inverno. Faceva inoltre da sostegno a un porticato che faceva da cornice ai due templi affiancati. 
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
