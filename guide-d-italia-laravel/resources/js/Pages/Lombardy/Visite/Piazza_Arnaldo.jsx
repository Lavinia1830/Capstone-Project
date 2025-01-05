import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';

export default function Piazza_Arnaldo(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='piazza_arnaldo' style={{ position: 'relative' }}>
            <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Piazza Arnaldo</h1>
            <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
            <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Visite</p>
            </div>
            <div className="margin mt-3">
                <p>
                    Se siete a <Link href="/destinazioni/brescia" className='text-decoration-none color_link'>Brescia</Link> e volete vivere la movida locale come la gente del posto, non potete non passare per un aperitivo o una cena 
                    a <strong>Piazza Arnaldo</strong>. Situata sul perimetro orientale del centro storico, tra corso Magenta e via Tosio, questa antica piazza è stata recentemente riqualificata, passando da essere la sede di un magazzino 
                    agricolo a luogo di aggregazione, soprattutto per i più giovani.
                </p>
                <p>
                    L’edificio più imponente della piazza è l’<b>ex Mercato dei Grani</b>, struttura ottocentesca che custodiva ben dodici magazzini sotterranei per l'approvvigionamento. Il suo <b>porticato</b> con archi a sesto acuto lo 
                    rende estremamente armonioso ed elegante. Ai lati si trovano due <b>fontane</b>, opera di Angelo Vita.
                </p>
                <p>
                    Il centro della piazza è occupato dalla <b>statua in bronzo del frate Arnaldo da Brescia</b>, che nel XII secolo venne giustiziato per essersi opposto all’opulenza e alla corruzione della Chiesa. Bruciato sul rogo a Roma, 
                    le sue ceneri furono disperse nel Tevere per evitare che qualcuno potesse venerare il suo corpo.
                </p>
            </div>
            <div className='margin mb-4'>
            <h3 className='color-subtitle text-center'>Mappa</h3>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1966.8013995793633!2d10.22875145803747!3d45.53687060653677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47817617238fcb6d%3A0xc8e5c6794543efe2!2sPiazzale%20Arnaldo!5e1!3m2!1sit!2sit!4v1712669206465!5m2!1sit!2sit"
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
