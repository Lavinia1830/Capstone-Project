import React, { useState, useEffect } from 'react';
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout';
import Footer from '../Components/Footer';
import { Head, Link } from '@inertiajs/react';
import ItalyMap from '@/Components/ItalyMap';
import TrendingMuseums from '../Components/TrendingMuseums';
import { useTranslation } from 'react-i18next';

const apiUrl = 'http://localhost:3000/';

export default function Home(props) {

    const { t } = useTranslation();


    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState(null);
    const [searched, setSearched] = useState(false); // Nuovo stato per tenere traccia se la ricerca è stata eseguita

    useEffect(() => {
        getAllSearch();
    }, []);

    const getAllSearch = () => {
        fetch(apiUrl + 'search', {
            method: "GET"
        })
            .then(response => response.json())
            .then(data => {
                setSearchResults(data);
                setError('');
            })
            .catch(err => {
                console.log(err);
                setError('Si è verificato un errore durante il recupero dei dati.');
            });
    }

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Esegui la ricerca solo se è stata inserita una query
        if (query.trim() !== '') {
            // Filtra i risultati in base alla query
            const filteredResults = searchResults.filter(result =>
                result.title.toLowerCase().includes(query.toLowerCase())
            );
            setSearchResults(filteredResults);
            setError('');
            setSearched(true); // Imposta searched a true dopo aver eseguito la ricerca
        } else {
            setError('Inserisci un termine di ricerca valido.');
        }
    };

    

    return (
        <>
            <Head title={t("Home")}/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <div className="bg-green-50 text-green-900">
                    <main className="p-8 grid lg:grid-cols-2 gap-6">
                        <section>
                            <h2 className=" font-bold mb-4">{t("home1")}</h2>
                            <div>
                                <h4>{t("search")}</h4>
                                <form onSubmit={handleSubmit} className="form-inline my-2">
                                    <div className='d-flex'>
                                        <input
                                            className="form-control mr-sm-2"
                                            type="search"
                                            placeholder="Search"
                                            aria-label="Search"
                                            value={query}
                                            onChange={handleChange}
                                        />
                                        <button
                                            className="btn btn-outline-success my-2 my-sm-0 me-3"
                                            type="submit"
                                            id="searchsubmit"
                                        >
                                            {t("search")}
                                        </button>
                                    </div>
                                </form>
                            </div>
                            {/* Qui aggiungi il codice per mostrare i risultati della ricerca e gestire gli errori */}
                            {error && <div className="alert alert-danger" role="alert">{error}</div>}
                            {/* Visualizza i risultati solo se la ricerca è stata eseguita */}
                            {searched && (
                                <>
                                    {searchResults.length > 0 ? (
                                        <div>
                                            <h4>{t("search results")}</h4>
                                            <ul>
                                                {searchResults.map((result, index) => (
                                                    <li key={index}>
                                                        <Link href={result.url} className='text-decoration-none color_link'>{result.title}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ) : (
                                        <p>{t("no results found")}</p>
                                    )}
                                </>
                            )}
                            <div className="mt-6">
                                <ItalyMap />
                            </div>
                        </section>

                    <TrendingMuseums/>

                    </main>

                    <Footer />
                </div>
            </AuthenticatedLayout>
        </>

    );
}
