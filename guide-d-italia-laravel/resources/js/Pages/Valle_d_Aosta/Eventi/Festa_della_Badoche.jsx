import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Festa_della_Badoche(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='festa_della_badoche' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Festa della Badoche</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        La <i className='fw-bold'>Badoche</i> è una tradizione che <b>a Morgex viene celebrata il 15 agosto</b>, la giornata dedicata a <i>Notre Dame d’Aôut</i>, e che da secoli rallegra i villaggi della Valdigne con canti, balli e colori. La Badoche viene ripresa <b>anche nelle frazioni ed in particolare 
                        al Villai</b>r il giorno di San Rocco, al <b>Revers</b> il giorno dei S.S. Pietro e Paolo e a <b>La Ruine</b>.
                    </p>
                    <p>
                        Le origini della Badoche paiono risalire ai riti propiziatori celebrati presso i Celti e rituali simili caratterizzano i festeggiamenti per il Santo patrono anche fuori dalla Valdigne. 
                    </p>
                    <p>
                        Protagonisti della Badoche sono i <b>giovano scapoli</b> che organizzano un ballo collettivo sulla piazza del paese. Alcuni giorni prima i giovani si riuniscono e designano il <i>Capo Badocher</i>, il quale insieme con la sua compagna, la <i>Badochère</i>, dirigerà la festa. Alla vigilia <b>la 
                        coppia, nei vestiti tradizionali</b>, guida di casa in casa il piccolo corteo accompagnato dai suonatori di fisarmonica, per <b>raccogliere denaro e offerte che assicureranno l’approvvigionamento del vino e delle bevande per il giorno dopo</b>.
                    </p>
                    <p>
                        L’insegna del Badocher è la cosiddetta “<b>alabarda</b>”, un bastone a tre punte coronato di fiori e ornato di nastri di seta multicolori, donata dai genitori nell’anno di nascita del proprio figlio, mentre per la questua si presenta <b>un piatto anch’esso decorato da fiori e nastri</b>, pieno 
                        di dolciumi e di sigarette da offrire in cambio dell’obolo. In passato il Badocher brandiva un ramo di alloro o di pino alla cui sommità era infilata una mela o una pera nella quale si infiggevano monete d’oro, secondo un antico rituale di druidico testimoniato anche nella attigua Savoia.
                    </p>
                    <p>
                        <b>Il giorno della Festa patronale l’allegra brigata della Badoche</b>, accompagnati dal suono di una fisarmonica e di un clarino, <b>fa il suo ingresso nella piazza all’uscita della messa</b>: le danze sono aperte dal Capo Badocher, che successivamente inviteranno gli altri badochers, le 
                        autorità, le coppie di giovani provenienti dai villaggi vicini, i coscritti e ogni categoria de persone e di lavoratori, secondo una consuetudine tramandata dalla tradizione orale. <b>Il gran ballo riprende nel pomeriggio dopo i vespri</b>. In quest’occasione, i genitori dei bimbi nati nell’anno 
                        si presentano per donare un nastro di seta colorato da attaccare alla “alabarda”. La festa prosegue, accompagnata da generose mescite di vino e si conclude a sera tarda.
                    </p>
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
    )
}
