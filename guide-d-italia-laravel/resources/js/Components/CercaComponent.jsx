import React, {useState} from 'react';
import { Link } from '@inertiajs/react';

export default function CercaComponent() {

    const [isHoveredContattami, setIsHoveredContattami] = useState(false);

    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState(null);
  
    const handleChange = (event) => {
      setQuery(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      
      // Esegui qui la logica per la ricerca
      fetch(`https://api.example.com/search?q=${query}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Errore durante la ricerca');
          }
          return response.json();
        })
        .then(data => {
          setSearchResults(data.results); // Aggiorna lo stato con i risultati della ricerca
          setError(null); // Resetta eventuali errori precedenti
        })
        .catch(error => {
          console.error('Si è verificato un errore durante la ricerca:', error);
          setSearchResults([]); // Resetta i risultati della ricerca
          setError('Si è verificato un errore durante la ricerca');
        });
    };

  return (
    <div className="col-lg-3" style={{paddingLeft:'30px'}}>
          <div className='mt-6 mb-3'>
            <Link 
              className="bottone_link_contattaci" 
              href='/contatti_guida_turistica_valle_d_aosta'
              onMouseEnter={() => setIsHoveredContattami(true)}
              onMouseLeave={() => setIsHoveredContattami(false)}
              >Contattami {isHoveredContattami && <i className="bi bi-chevron-right"></i>}
              
            </Link>
          </div>
				  <div>
            <h4>Cerca</h4>
            <form onSubmit={handleSubmit} className="form-inline my-2">
              <div className='d-flex'>
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={query}
                  onChange={handleChange}
                  style={{width: '90%'}}
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                  id="searchsubmit"
                >
                  Cerca
                </button>
              </div>
            </form>
          </div>
		        <div>
		          <h4>Articoli recenti</h4>
		          <ul className='ps-3'>
								<li>
					        <Link to='/la_fontina_valdostana_la_regina_dei_formaggi' className='text-decoration-none color_link'>La Fontina Valdostana: la regina dei formaggi</Link>
									<p className="m-0 text-secondary">29 Maggio 2023</p>
								</li>
								<li>
					        <Link to="/borghi_della_valle_d_aosta" className='text-decoration-none color_link'>I Borghi della Valle d’Aosta: i più belli da visitare</Link>
									<p className="m-0 text-secondary">4 Maggio 2022</p>
								</li>
								<li>
					        <Link to="/valdigne-cosa-vedere-vicino-courmayeur" className='text-decoration-none color_link'>La Valdigne, cosa vedere vicino a Courmayeur</Link>
									<p className="m-0 text-secondary">7 Marzo 2022</p>
								</li>
								<li>
					        <Link to="/carnevale_di_pont_saint_martin_san_martino_il_diavolo_e_la_ninfa" className='text-decoration-none color_link'>Carnevale di Pont Saint Martin: San Martino, il Diavolo e la Ninfa</Link>
									<p className="m-0 text-secondary">28 Gennaio 2022</p>
								</li>
								<li>
					        <Link to="/sport_tradizionali_della_valle_daosta" className='text-decoration-none color_link'>Gli sport tradizionali della Valle d’Aosta</Link>
									<p className="m-0 text-secondary">9 Gennaio 2022</p>
								</li>
					    </ul>
            </div>
            <div>
              <h4>Categorie</h4>
			        <ul className='ps-3'>
					      <li>
                  <Link to="/categoria/a_spasso_per_la_valle" className='text-decoration-none color_link'>A Spasso per la Valle</Link>
                </li>
	              <li>
                  <Link to="/categoria/castelli_della_valle_d_aosta" className='text-decoration-none color_link'>Castelli della Valle d'Aosta</Link>
                </li>
                <li>
                  <Link to="/categoria/castelli_valle_d_aosta_visitabili" className='text-decoration-none color_link'>Castelli Valle d'Aosta visitabili</Link>
                </li>
                <li>
                  <Link to="/categoria/itinerari_gourmet" className='text-decoration-none color_link'>Cucina Valdostana</Link>
                </li>
                <li>
                  <Link to="/categoria/eventi_valle_d_aosta" className='text-decoration-none color_link'>Eventi in Valle d'Aosta</Link>
                </li>
                <li>
                  <Link to="/categoria/itinerari_tematici" className='text-decoration-none color_link'>Itinerari</Link>
                </li>
	              <li>
                  <Link to="/categorria/legggende_valle_d_aosta" className='text-decoration-none color_link'>Leggende della Valle d'Aosta</Link>
                </li>
                <li>
                  <a href="/categoria/montagne_valle_d_aosta" className='text-decoration-none color_link'>Montagne della Valle d'Aosta</a>
                </li>
                <li>
                  <a href="/categoria/informazioni_utili" className='text-decoration-none color_link'>Orari e tariffe dei siti regionali</a>
                </li>
                <li>
                  <a href="/categoria/passeggiate_in_citta" className='text-decoration-none color_link'>Passeggiate in città</a>
                </li>
                <li>
                  <a href="/categoria/santuari_e_spiritualita" className='text-decoration-none color_link'>Santuari e spiritualità</a>
                </li>
                <li>
                  <a href="/categoria/terme" className='text-decoration-none color_link'>Terme</a>
                </li>
                <li>
                  <a href="/categoria/territorio" className='text-decoration-none color_link'>Territorio</a>
                </li>
                <li>
                  <a href="/categoria/tradizioni_valle_d_aosta" className='text-decoration-none color_link'>Tradizioni della Valle d'Aosta</a>
                </li>
			        </ul>
			    </div>
			  </div>
  )
}
