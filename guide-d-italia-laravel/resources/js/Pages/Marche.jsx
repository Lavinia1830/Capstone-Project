import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';
import Footer from '@/Components/Footer';

export default function Marche(props) {
    
    const [isHoveredAncona, setIsHoveredAncona] = useState(false);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='text-center marche'>
                <h1>Marche</h1>
                </div>
                <div className='text-center margin mt-3'>
                <p>
                    Punteggiate di piccoli borghi senza tempo, splendide città ricche d’arte e cultura e im­preziosite da una natura a volte selvaggia e altre ordinatamente addomesticata, la cartina delle Marche restituisce un territorio stupefacente, per molti versi ancora 
                    sconosciuto. E proba­bilmente una delle ragioni del loro grande fascino è proprio quella di poter scoprire con calma, e in relativa solitudine, maestose rovine romane, svettanti architetture goti­ che, massicci castelli medievali e sublimi palazzi 
                    rinascimentali che custodiscono collezioni d’arte tra le più ricche d’Italia. Le vacanze nelle <strong>Marche</strong> sono diventate negli ultimi anni un vero must. E non potrebbe essere altrimenti, visto che le bellezze e le attrazioni turistiche delle 
                    Marche sono tutte racchiuse tra alte montagne boscose e la placida costa dell’Adriatico. I danni causati dal ter­remoto del 2016, le cui ferite sono ancora vi­sibili, rimangono sì una ferita ancora aperta: ma ovunque decidiate di andare, e qualunque sia la 
                    stagione del vostro viaggio, troverete sempre meraviglie di cui stupirvi. Un week end nelle Marche è sempre una buona idea, sia per scoprire il Conero e cosa vedere della sua costa, che per esplorare l’entroterra.
                </p>
                </div>
                <div className="margin mt-3">
                    <h2 className='color-subtitle'>Marche, turismo riscoperto</h2>
                    <p>
                        La varietà e l’elevato numero di luoghi di interesse delle Marche sono il risultato, prezioso, delle molte stratificazioni culturali che vi si sono sovrapposte nel corso dei mil­lenni, da quando i piceni prima e i romani poi popolarono questo territorio. 
                        Gli itinerari, nelle Marche, fanno spaziare con la vista, il gusto, l’olfatto, il tatto e anche l’udito. Ad <Link href='/destinazioni/marche/ancona' className='text-decoration-none color_link'>Ancona</Link>  vi si sveleranno le suggestioni d’Oriente, 
                        ad <Link href='/distinazioni/marche/ascoli' className='text-decoration-none color_link'>Ascoli</Link> e <Link href='/destinazioni/marche/fermo' className='text-decoration-none color_link'>Fermo</Link>  sarà invece l’eleganza medievale a farvi sgranare 
                        gli occhi. <Link href='/destinazioni/marche/marcerata' className='text-decoration-none color_link'>Macerata</Link> vi accoglierà con le innumerevoli bellezze svelate dietro una facciata di provincia, a <Link href='/destinazioni/marche/pesaro' 
                        className='text-decoration-none color_link'>Pesaro</Link> vivrete un’esperienza tipicamente romagnola tra ombrelloni e vivace vita not­turna, mentre a Urbino respirerete ancora i fasti rinascimentali, patrocinati dai duchi del Montefeltro. E se alle città 
                        preferite i pittoreschi borghi dal sapore antico, in cui il tempo sembra essersi fermato, avrete solo l’imbarazzo della scelta: il Piceno, il Ferma­no o il Montefeltro saranno ricche miniere di infinite scoperte. Non rimane poi che scoprire cosa vedere 
                        a <Link href='/destinazioni/marche/fano' className='text-decoration-none color_link'>Fano</Link>, a <Link href='/destinazioni/marche/senigallia' className='text-decoration-none color_link'>Senigallia</Link>, a <Link href='/destinazioni/marche/fabriano' 
                        className='text-decoration-none color_link'>Fabriano</Link>, in un crescendo di bellezza che non stanca mai, a caccia dei posti romantici delle Marche che entrano nel cuore e non escono più.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className='color-subtitle'>Viaggio nelle Marche alla scoperta del buon vivere</h2>
                    <p>
                        Le Marche non sono però solo arte, cultura e natura, ma anche una gastronomia genui­na e appetitosa, che imbandisce le tavole con prelibatezze sempre diverse a seconda dei luoghi e delle stagioni. A eccellenze come il profumatissimo (e costosissimo) 
                        tartufo bianco, o ai piatti a base di caccia­gione dell’entroterra, si affiancano lungo le rive del mare piatti veraci e saporiti come il <i>brodetto</i>, nel quale convergono tutti i sapori dell’Adriatico, lo stoccafisso all’anconetana o i <i>móscioli</i>, 
                        le gustose cozze selvatiche del Conero. Da innaffiare con una gran varietà di vini, di cui negli ultimi anni le Marche sono diventate produttrici d’eccellenza.
                    </p>
                </div>
                <div className='row d-flex justify-content-center mx-0 mb-4'>
                <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Marche'>
                    <CardBody className='bottone'>
                    <Link 
                        className="bottone_link" 
                        href='/destinazioni/marche/ancona'
                        onMouseEnter={() => setIsHoveredAncona(true)}
                        onMouseLeave={() => setIsHoveredAncona(false)}
                        >Ancona {isHoveredAncona&& <i className="bi bi-chevron-right"></i>}
                    </Link>
                    </CardBody>
                </Card>
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
    )
}
