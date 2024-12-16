import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Piazza_san_Carlo(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='piazza_san_carlo' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Piazza San Carlo</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
            </div>
            <div className="margin mt-3">
                <p>
                    <strong>Piazza San Carlo</strong>, dal 1618 dedicata a San Carlo Borromeo, è senz’altro una <b>tra le più belle e importanti piazze della città di Torino</b>, tanto da essere spesso teatro 
                    di <b>concerti, manifestazioni, comizi elettorali e di vari eventi sociali e culturali</b>, nonché dei festeggiamenti per le vittorie della squadra di calcio Juventus. Diversi furono i nomi 
                    dati alla piazza nel corso dei secoli: fu prima <b>Piazza Reale</b>, poi <b>Piazza d’Armi</b> e <b>Place Napoléon</b> nel periodo napoleonico.
                </p>
                <p>
                    Come nel caso di molti monumenti e luoghi di interesse torinesi, <b>la storia di Piazza San Carlo si intreccia con le vicissitudini della famiglia Savoia</b>. La piazza venne, infatti, 
                    inaugurata nel 1638 e rappresentava il desiderio del Duca di Savoia di espandere la città verso Sud, dopo che Torino divenne capitale del regno. Sulla piazza, di forma rettangolare, sorgono 
                    ancora oggi numerosi luoghi di interesse: al centro è situata <b>una statua equestre di Emanuele Filiberto</b>, mentre, sul lato sud della piazza, si trovano le due chiese gemelle in stile 
                    barocco, <b>quella di Santa Cristina</b> costruita nel 1639 e <b>quella di San Carlo</b> del 1619.
                </p>
                <p>
                    Proprio in questa piazza, nel 1773, il celebre scrittore <b>Vittorio Alfieri</b> acquistò una casa, in cui in seguito istituì una società ispirata a Voltaire insieme ad alcuni compagni di Accademia.
                </p>
                <p>
                    Non è solo la sua bellezza a rendere famosa <b>Piazza San Carlo</b>, ma soprattutto l’importante ruolo sociale che svolse fin dalla sua realizzazione. Sul perimetro della piazza sorgono, infatti, 
                    diversi caffè, luoghi in cui tipicamente intellettuali e uomini di cultura, ma anche nobili e reali, usavano riunirsi per discutere, in particolar modo, di faccende politiche. Famosissimo è, 
                    sicuramente, <b>il Caffé San Carlo ed il Caffè Torino</b>.
                </p>
                <p>
                    <b>La piazza fu, inoltre, teatro di diversi avvenimenti importanti</b>. Nel settembre del 1864, dopo che il governo Minghetti prese la decisione di spostare la capitale da Torino a Firenze, proprio 
                    in Piazza San Carlo si riunirono i torinesi per protestare contro questa decisione. Nonostante il carattere pacifico della manifestazione, 184 persone furono uccise dalle forze pubbliche. 
                </p>
                <p>
                    In tempi decisamente più recenti, in occasione delle XX Olimpiadi Invernali, Piazza San Carlo, oggi conosciuta come “Il Salotto di Torino”, è stata oggetto di una riqualificazione che, tra le altre cose, 
                    ha avuto visto la trasformazione dell’intera piazza in area pedonale.
                </p>
            </div>
            <div className='margin mb-4'>
                <h3 className='color-subtitle text-center'>Mappa</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3335.2286657288396!2d7.6798953858778205!3d45.067885157172995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886d6e4235bb45%3A0x281aa473315ae145!2sP.za%20S.%20Carlo%2C%20Torino%20TO!5e1!3m2!1sit!2sit!4v1712586469464!5m2!1sit!2sit"
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
