import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Porta_Palazzo_e_il_Balôn(props) {
  return (
    <>
        <Head title="Porta Palazzo e il Balôn"/>
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='pp_balôn' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Porta Palazzo e il Balôn</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        <strong>Porta Palazzo</strong> appartiene al centro storico della città, ma conserva alcuni tratti caratteristici (forma urbana, storia, popolazione insediata, attività economiche) che la connotano come quartiere “popolare” a tutti gli effetti, con una forte 
                        identità e un forte senso di appartenenza.<br/>
                        <strong>Porta Palazzo</strong> però non è un “quartiere” dal punto di vista amministrativo, ma è un’area percepita in modo unitario grazie ad un fenomeno di fondamentale importanza cittadina: il mercato di Piazza della Repubblica. Dal punto di vista 
                        urbanistico, la storia di quest’area è profondamente complessa, differente ed eterogenea.<br/>
                        <strong>Porta Palazzo</strong> deve il suo nome ad una delle porte della città, l’antica Postierla San Michele, che collegava i borghi suburbani con il mercato di Piazza delle Erbe, l’attuale Piazza Palazzo di Città. Nel corso dei secoli la postierla venne 
                        sostituita da una porta in muratura, e nel XVII sec. subentrò definitivamente alle Porte Palatine quale accesso principale settentrionale.<br/>
                        Il <b>Re Vittorio Amedeo II</b>, desideroso di dare di Torino l’immagine di moderna capitale settecentesca, promosse una serie di interventi sulle porte di accesso alla città, che assunsero, oltre al tradizionale ruolo difensivo, una nuova veste di 
                        rappresentanza.<br/>
                        I lavori iniziarono nel 1699 e nel 1701 venne inaugurata la <strong>Porta Palazzo</strong>.
                    </p>
                    <p>
                        Il <b>primo impianto</b> dell’attuale piazza della Repubblica nasce però all’interno della riforma urbanistica della cosiddetta “città vecchia” con il progetto dell’Architetto Filippo Juvarra.<br/>
                        Con la costruzione della piazza avvenne di fatto la saldatura fra la città e il <b>Borgo Dora</b>. L’area detta attualmente "<strong>Balon</strong>", era in origine una zona campestre abitata, in epoca romana, da agricoltori. Nel <b>medioevo</b> la zona 
                        diventò territorio amministrativo della città, popolandosi di cascinali, mulini ed orti, dapprima, e di alcuni primordiali nuclei industriali, attorno al 1500. I numerosi canali tratti dalla Dora divennero fonte di preziosa energia per piccoli opifici e 
                        per una Polveriera. <br/>
                        All’inizio del <b>XXIX secolo</b> Borgo Dora si presentava, quindi, come un’area viva e florida della città.<br/>
                        In seguito, durante il periodo di dominazione napoleonica, nell’800, con il progetto di smantellamento delle fortificazioni cittadine la <strong>Porta Palazzo</strong> venne abbattuta. Il dibattito apertosi sul ridisegno urbanistico della piazza e la 
                        nuova espansione settentrionale della città si concluse nel 1817, con il progetto di G. Lombardi di una grande piazza ottagonale intitolato ad <b>Emanuele Filiberto</b>, l’attuale piazza della Repubblica, a coronamento dell’esedra juvarriana.
                    </p>
                    <p>
                        Vari sono stati dall’800 ad oggi gli sforzi per abbellire e connotare la piazza e gli interventi sul territorio circostante. Nel 1825 l’arch. Formento elaborò il progetto per la parte meridionale della piazza, in particolare per l’isolato dei macelli, quello 
                        attualmente compreso tra la piazza e via Porta Palatina.<br/>
                        La sistemazione definitiva dei contorni della piazza venne risolta intorno al 1830, grazie all’intervento di privati, in concomitanza con l’ampliamento dell’<b>Ospedale Mauriziano</b> ad opera dell’ing. Mosca.
                    </p>
                    <p>
                        I  <b>mercati a Porta Palazzo</b> si stabilirono definitivamente il 29 agosto 1835, a seguito di un  “Manifesto Vicariale” che proibì, a causa dell’infierire del colera, la vendita sulle piazze Palazzo di Città (piazza delle Erbe) e Corpus Domini e nel 1837 
                        si completò piazza della Repubblica, che prese il nome di piazza Emanuele Filiberto.<br/>
                        In seguito a tale provvedimento, la Città decise la costruzione di tettoie nei due primi quadrati della piazza Emanuele Filiberto per il mercato dei commestibili. Allo stesso tempo si lasciarono le lunghe file di baracche per i mercanti di stoffe, chincaglierie 
                        e terraglie.<br/>
                        Per la conservazione delle merci venivano utilizzate le Ghiacciaie, grandi locali nel sottosuolo suddivisi in quattro piani sotto il livello della strada, già esistenti nel 1922, poi demolite e ricostruite nel 1945. A forma elicoidale, degradanti verso il basso, 
                        le Ghiacciaie permettevano ai carri di scendere e depositare le merci fra il ghiaccio naturale dei mesi invernali, raccolto nei prati vicini, o trasportato dal Moncenisio durante gli inverni meno rigidi.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.7879177759455!2d7.681405579092874!3d45.07658627889219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886d64d0018ae7%3A0xc85fe4c7721a1612!2sPorta%20Palazzo!5e1!3m2!1sit!2sit!4v1712566855027!5m2!1sit!2sit"
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
    </>
    
  )
}
