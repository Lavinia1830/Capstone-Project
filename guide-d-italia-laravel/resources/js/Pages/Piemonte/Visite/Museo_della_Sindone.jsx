import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Museo_della_Sindone(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='museo_della_sindone' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Museo della Sindone</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
            </div>
            <div className="margin mt-3">
                <p>
                    Il <strong>Museo della Sindone</strong> – che oggi si estende sul piano terra dell’edificio di via S. Domenico 28 e nella cripta della chiesa del SS. Sudario di Torino – ha ottant’anni e conta 
                    una serie di sempre più sistematici allestimenti.
                </p>
                <p>
                    Fu infatti intorno al <b>1936</b> che la <b>Confraternita del SS. Sudario</b> – ente ecclesiale fondato il 25 maggio 1598 proprio per diffondere il culto e la devozione alla Sindone  – decise 
                    di organizzare alcuni dei preziosi <b>reperti</b> sulla <b>Sindone</b> raccolti nei secoli in una <b>mostra permanente</b>. L’esposizione fu inaugurata il <b>4 giugno 1936</b> alla presenza 
                    dell’arcivescovo di Torino, <b>card.Maurilio Fossati</b>. La “<b>Mostra documentaria dell’insigne reliquia</b>“, come allora fu battezzata, trovò spazio in due stanze a fianco della <b>Chiesa 
                    del SS. Sudario</b>.
                </p>
            </div>
            <div className='margin mb-4'>
                <h3 className='color-subtitle text-center'>Mappa</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1402.0823986366615!2d7.675741689493122!3d45.0763840514102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886d0b1806148f%3A0x2f2078a81a2f425a!2sMuseo%20della%20Sindone!5e1!3m2!1sit!2sit!4v1712589972122!5m2!1sit!2sit"
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
