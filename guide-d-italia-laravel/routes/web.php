<?php


use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', function () {
    return Inertia::render('Welcome'/* , [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ] */);
});

Route::get('/home', function () {
    return Inertia::render('Home');
})->middleware(['auth', 'verified'])->name('home');

/*Valle d'Aosta*/

    Route::get('/valle_d_aosta', function () {
        return Inertia::render('Valle_d_Aosta');
    })->middleware(['auth', 'verified'])->name('valle_d_aosta');

    Route::get('/destinazioni/valle_d_aosta/aosta', function () {
        return Inertia::render('Valle_d_Aosta/Destinazioni/Aosta');
    })->middleware(['auth', 'verified'])->name('aosta');

    /*Inizio Aosta*/

        Route::get('/visite/valle_d_aosta/aosta/arco_di_augusto', function () {
            return Inertia::render('Valle_d_Aosta/Visite/Arco_di_Augusto');
        })->middleware(['auth', 'verified'])->name('arco_di_augusto');

        Route::get('/visite/valle_d_aosta/aosta/via_francigena', function () {
            return Inertia::render('Valle_d_Aosta/Visite/Via_Francigena');
        })->middleware(['auth', 'verified'])->name('via_francigena');

        Route::get('/visite/valle_d_aosta/parco_nazionale_del_gran_paradiso', function () {
            return Inertia::render('Valle_d_Aosta/Visite/Parco_Nazionale_del_Gran_Paradiso');
        })->middleware(['auth', 'verified'])->name('parco_nazionale_del_gran_paradiso');
        
        Route::get('/visite/valle_d_aosta/castelli_medievali', function () {
            return Inertia::render('Valle_d_Aosta/Visite/Castelli_Medievali');
        })->middleware(['auth', 'verified'])->name('castelli_medievali');

        /*Inizio Castelli Medieviali*/

            Route::get('/visite/valle_d_aosta/castelli_medievali/castel_savoia', function () {
                return Inertia::render('Valle_d_Aosta/Visite/Castelli_Medievali/Castel_Savoia');
            })->middleware(['auth', 'verified'])->name('castel_savoia');

            Route::get('/visite/valle_d_aosta/castelli_medievali/castello_di_issogne', function () {
                return Inertia::render('Valle_d_Aosta/Visite/Castelli_Medievali/Castello_di_Issogne');
            })->middleware(['auth', 'verified'])->name('castello_di_issogne');

            Route::get('/visite/valle_d_aosta/castelli_medievali/castello_di_verrès', function () {
                return Inertia::render('Valle_d_Aosta/Visite/Castelli_Medievali/Castello_di_Verrès');
            })->middleware(['auth', 'verified'])->name('castello_di_verrès');

            Route::get('/visite/valle_d_aosta/castelli_medievali/castello_di_ussel', function () {
                return Inertia::render('Valle_d_Aosta/Visite/Castelli_Medievali/Castello_di_Ussel');
            })->middleware(['auth', 'verified'])->name('castello_di_ussel');

            Route::get('/visite/valle_d_aosta/castelli_medievali/castello_di_cly', function () {
                return Inertia::render('Valle_d_Aosta/Visite/Castelli_Medievali/Castello_di_Cly');
            })->middleware(['auth', 'verified'])->name('castello_di_cly');

            Route::get('/visite/valle_d_aosta/castelli_medievali/castello_di_fénis', function () {
                return Inertia::render('Valle_d_Aosta/Visite/Castelli_Medievali/Castello_di_Fénis');
            })->middleware(['auth', 'verified'])->name('castello_di_fénis');
            
            Route::get('/visite/valle_d_aosta/castelli_medievali/forte_di_bard', function () {
                return Inertia::render('Valle_d_Aosta/Visite/Castelli_Medievali/Forte_di_Bard');
            })->middleware(['auth', 'verified'])->name('forte_di_bard');

            Route::get('/visite/valle_d_aosta/castelli_medievali/castello_reale_di_sarre', function () {
                return Inertia::render('Valle_d_Aosta/Visite/Castelli_Medievali/Castello_Reale_di_Sarre');
            })->middleware(['auth', 'verified'])->name('castello_reale_di_sarre');  
            
            Route::get('/visite/valle_d_aosta/castelli_medievali/castello_di_aymavilles', function () {
                return Inertia::render('Valle_d_Aosta/Visite/Castelli_Medievali/Castello_di_Aymavilles');
            })->middleware(['auth', 'verified'])->name('castello_di_aymavilles');

            Route::get('/visite/valle_d_aosta/castelli_medievali/castello_sarriod_de_la_tour', function () {
                return Inertia::render('Valle_d_Aosta/Visite/Castelli_Medievali/Castello_Sarriod_de_la_Tour');
            })->middleware(['auth', 'verified'])->name('castello_sarriod_de_la_tour');

        /*Fine Castelli Medieviali*/

        Route::get('/visite/valle_d_aosta/aosta/torre_di_bramafam', function () {
            return Inertia::render('Valle_d_Aosta/Visite/Torre_di_Bramafam');
        })->middleware(['auth', 'verified'])->name('torre_di_bramafam');

        Route::get('/visite/valle_d_aosta/aosta/chiesa_paleocristiana_di_san_lorenzo', function () {
            return Inertia::render('Valle_d_Aosta/Visite/Chiesa_Paleocristiana_di_San_Lorenzo');
        })->middleware(['auth', 'verified'])->name('chiesa_paleocristiana_di_san_lorenzo');

        Route::get('/visite/valle_d_aosta/aosta/monumenti_romani_ad_aosta', function () {
            return Inertia::render('Valle_d_Aosta/Visite/Monumenti_Romani_ad_Aosta');
        })->middleware(['auth', 'verified'])->name('monumenti_romani_ad_aosta');

        /*Inizio Monumenti Romani ad Aosta*/

            Route::get('/visite/valle_d_aosta/aosta/ponte_romano', function () {
                return Inertia::render('Valle_d_Aosta/Visite/Ponte_Romano');
            })->middleware(['auth', 'verified'])->name('ponte_romano');

            Route::get('/visite/valle_d_aosta/aosta/porta_praetoria', function () {
                return Inertia::render('Valle_d_Aosta/Visite/Porta_Praetoria');
            })->middleware(['auth', 'verified'])->name('porta_praetoria');

            Route::get('/visite/valle_d_aosta/aosta/teatro_romano', function () {
                return Inertia::render('Valle_d_Aosta/Visite/Teatro_Romano');
            })->middleware(['auth', 'verified'])->name('teatro_romano');

            Route::get('/visite/valle_d_aosta/aosta/criptoportico_forense', function () {
                return Inertia::render('Valle_d_Aosta/Visite/Criptoportico_Forense');
            })->middleware(['auth', 'verified'])->name('criptoportico_forense');

            Route::get('/visite/valle_d_aosta/aosta/aosta_romana', function () {
                return Inertia::render('Valle_d_Aosta/Visite/Aosta_Romana');
            })->middleware(['auth', 'verified'])->name('aosta_romana');

            Route::get('/visite/valle_d_aosta/aosta/museo_archeologico_regionale', function () {
                return Inertia::render('Valle_d_Aosta/Visite/Museo_Archeologico_Regionale');
            })->middleware(['auth', 'verified'])->name('museo_archeologico_regionale');

        /*Fine Monumenti Romani ad Aosta*/

        Route::get('/visite/valle_d_aosta/aosta/piazza_chanoux', function () {
            return Inertia::render('Valle_d_Aosta/Visite/Piazza_Chanoux');
        })->middleware(['auth', 'verified'])->name('piazza_chanoux');

        Route::get('/visite/valle_d_aosta/aosta/cattedrale_di_aosta', function () {
            return Inertia::render('Valle_d_Aosta/Visite/Cattedrale_di_Aosta');
        })->middleware(['auth', 'verified'])->name('cattedrale_di_aosta');

        Route::get('/eventi/valle_d_aosta/aosta/fiera_di_sant_orso', function () {
            return Inertia::render('Valle_d_Aosta/Eventi/Fiera_di_Sant_Orso');
        })->middleware(['auth', 'verified'])->name('fiera_di_sant_orso');

    /*Fine Aosta*/
    
    Route::get('/destinazioni/valle_d_aosta/courmayeur', function () {
        return Inertia::render('Valle_d_Aosta/Destinazioni/Courmayeur');
    })->middleware(['auth', 'verified'])->name('courmayeur');

    /*Inizio Courmayeur*/  

        Route::get('/montagna/valle_d_aosta/monte_bianco', function () {
            return Inertia::render('Montagna/Monte_Bianco');
        })->middleware(['auth', 'verified'])->name('monte_bianco');

        Route::get('/visite/valle_d_aosta/courmayeur/chiesa_dei_santi_pantaleone_e_valentino', function () {
            return Inertia::render('Valle_d_Aosta/Visite/Chiesa_dei_Santi_Pantaleone_e_Valentino');
        })->middleware(['auth', 'verified'])->name('chiesa_dei_santi_pantaleone_e_valentino');
        
        Route::get('/visite/valle_d_aosta/courmayeur/musei_duca_degli_abruzzi', function () {
            return Inertia::render('Valle_d_Aosta/Visite/Museo_Duca_degli_Abruzzi');
        })->middleware(['auth', 'verified'])->name('musei_duca_degli_abruzzi');

        Route::get('/eventi/valle_d_aosta/courmayeur/festa_della_badoche', function () {
            return Inertia::render('Valle_d_Aosta/Eventi/Festa_della_Badoche');
        })->middleware(['auth', 'verified'])->name('festa_della_badoche');

        Route::get('/montagna/valle_d_aosta/courmayeur_montagna', function () {
            return Inertia::render('Montagna/Courmayeur_Montagna');
        })->middleware(['auth', 'verified'])->name('courmayeur_montagna');

        Route::get('/montagna/valle_d_aosta/val_ferret', function () {
            return Inertia::render('Montagna/Val_Ferret');
        })->middleware(['auth', 'verified'])->name('val_ferret');

        Route::get('/montagna/valle_d_aosta/funivia_skyway_monte_bianco', function () {
            return Inertia::render('Montagna/Funivia_Skyway_Monte_Bianco');
        })->middleware(['auth', 'verified'])->name('funivia_skyway_monte_bianco');

        Route::get('/montagna/valle_d_aosta/monte_rosa', function () {
            return Inertia::render('Montagna/Monte_Rosa');
        })->middleware(['auth', 'verified'])->name('monte_rosa');

    /*Fine Courmayeur*/

    Route::get('/destinazioni/valle_d_aosta/cervinia_valtournanche', function () {
        return Inertia::render('Valle_d_Aosta/Destinazioni/Cervinia_Valtournanche');
    })->middleware(['auth', 'verified'])->name('cervinia_valtournanche');

    /*Inizio Cervinia Valtournanche*/

        Route::get('/laghi/valle_d_aosta/lago_blu', function () {
            return Inertia::render('Laghi/Lago_Blu');
        })->middleware(['auth', 'verified'])->name('lago_blu');

        Route::get('/visite/valle_d_aosta/cervinia_valtournanche/marmitte_dei_giganti', function () {
            return Inertia::render('Valle_d_Aosta/Visite/Marmitte_dei_Giganti');
        })->middleware(['auth', 'verified'])->name('marmitte_dei_giganti');

        Route::get('/visite/valle_d_asota/cervinia_valtournanche/grotte_delle_busserailles', function () {
            return Inertia::render('Valle_d_Aosta/Visite/Grotte_delle_Busserailles');
        })->middleware(['auth', 'verified'])->name('grotte_delle_busserailles');
    
    /*Fine Cervinia Valtournanche*/

    Route::get('/montagna/valle_d_aosta/monte_cervino', function () {
        return Inertia::render('Montagna/Monte_Cervino');
    })->middleware(['auth', 'verified'])->name('monte_cervino');

    Route::get('/laghi/valle_d_aosta/lago_di_goillet', function () {
        return Inertia::render('Laghi/Lago_di_Goillet');
    })->middleware(['auth', 'verified'])->name('lago_di_goillet');

    /*Enogastronomia Valle d'Aosta*/

        Route::get('/enogastonomia/valle_d_aosta/specialità_tipiche_valdostane', function () {
            return Inertia::render('Enogastronomia/Specialità_Tipiche_Valdostane');
        })->middleware(['auth', 'verified'])->name('specialità_tipiche_valdostane');

        Route::get('/enogastronomia/valle_d_aosta/prodotti_tipici_valdostani', function () {
            return Inertia::render('Enogastronomia/Prodotti_Tipici_Valdostani');
        })->middleware(['auth', 'verified'])->name('prodotti_tipici_valdostani');

        Route::get('/enogastronomia/valle_d_aosta/grappa_valdostana', function () {
            return Inertia::render('Enogastronomia/Grappa_Valdostana');
        })->middleware(['auth', 'verified'])->name('grappa_valdostana');
    
    /*Fine Enogastronomia Valle d'Aosta*/

    Route::get('/destinazioni/valle_d_aosta/champoluc', function () {
        return Inertia::render('Valle_d_Aosta/Destinazioni/Champoluc');
    })->middleware(['auth', 'verified'])->name('champoluc');

    /*Inizio Chamoluc*/

        Route::get('/visite/valle_d_aosta/champoluc/la_chiesa_parocchiale_di_san_martino', function () {
            return Inertia::render('Valle_d_Aosta/Visite/La_Chiesa_Parrocchiale_di_San_Martino');
        })->middleware(['auth', 'verified'])->name('la_chiesa_parocchiale_di_san_martino');

        Route::get('/visite/valle_d_aosta/champoluc/la_mostra_permanente_dell_artigianato_tipico', function () {
            return Inertia::render('Valle_d_Aosta/Visite/La_mostra_permanente_dell_artigianato_tipico');
        })->middleware(['auth', 'verified'])->name('la_mostra_permanente_dell_artigianato_tipico');

        Route::get('/visite/valle_d_aosta/champoluc/il_santuario_di_notre_dame_du_bon_secours', function () {
            return Inertia::render('Valle_d_Aosta/Visite/Il_Santuario_di_Notre_Dame_Du_Bon_Secours');
        })->middleware(['auth', 'verified'])->name('il_santuario_di_notre_dame_du_bon_secours');

        Route::get('/eventi/valle_d_aosta/champoluc/festa_delle_guide_alpine', function () {
            return Inertia::render('Valle_d_Aosta/Eventi/Festa_delle_Guide_Alpine');
        })->middleware(['auth', 'verified'])->name('festa_delle_guide_alpine');

        Route::get('/eventi/valle_d_aosta/champoluc/fiaccolata_dei_maestri_di_scii', function () {
            return Inertia::render('Valle_d_Aosta/Eventi/Fiaccolata_dei_Maestri_di_Scii');
        })->middleware(['auth', 'verified'])->name('fiaccolata_dei_maestri_di_scii');
    
    /*Fine Chamoluc*/

    Route::get('/destinazioni/valle_d_aosta/valpelline', function () {
        return Inertia::render('Valle_d_Aosta/Destinazioni/Valpelline');
    })->middleware(['auth', 'verified'])->name('valpelline');

    /*Inizio Valpelline*/

        Route::get('/visite/valle_d_aosta/valpelline/maison_la_tour_de_valpelline', function () {
            return Inertia::render('Valle_d_Aosta/Visite/Maison_la_tour_de_Valpelline');
        })->middleware(['auth', 'verified'])->name('maison_la_tour_de_valpelline');

        Route::get('/visite/valle_d_aosta/valpelline/la_tornalla', function () {
            return Inertia::render('Valle_d_Aosta/Visite/La_Tornalla');
        })->middleware(['auth', 'verified'])->name('la_tornalla');

        Route::get('/visite/valle_d_aosta/valpelline/il_ponte_della_betenda', function () {
            return Inertia::render('Valle_d_Aosta/Visite/Il_Ponte_della_Betenda');
        })->middleware(['auth', 'verified'])->name('il_ponte_della_betenda');

        Route::get('/visite/valle_d_aosta/valpelline/la_porta_del_bouyoz', function () {
            return Inertia::render('Valle_d_Aosta/Visite/La_porta_del_Bouyoz');
        })->middleware(['auth', 'verified'])->name('la_porta_del_bouyoz');

        Route::get('/visite/valle_d_aosta/valpelline/il_faggio_monumentale_di_voisinal', function () {
            return Inertia::render('Valle_d_Aosta/Visite/Il_Faggio_Monumentale_di_Voisinal');
        })->middleware(['auth', 'verified'])->name('il_faggio_monumentale_di_voisinal');

        Route::get('/visite/valle_d_aosta/valpelline/la_brenva_foula_di_gorzé', function () {
            return Inertia::render('Valle_d_Aosta/Visite/La_Brenva_Foula_di_Gorzé');
        })->middleware(['auth', 'verified'])->name('la_brenva_foula_di_gorzé');
    /*Fine Valpelline*/

    Route::get('/destinazioni/valle_d_aosta/cogne', function () {
        return Inertia::render('Valle_d_Aosta/Destinazioni/Cogne');
    })->middleware(['auth', 'verified'])->name('cogne');

    /*Inizio Cogne*/

        Route::get('/visite/valle_d_aosta/cogne/chiasa_di_sant_orso', function () {
            return Inertia::render('Valle_d_Aosta/Visite/Chiesa_di_Sant_Orso');
        })->middleware(['auth', 'verified'])->name('chiesa_di_sant_orso');

        Route::get('/visite/valle_d_aosta/cogne/casa_dei_pizzi', function () {
            return Inertia::render('Valle_d_Aosta/Visite/Casa_dei_Pizzi');
        })->middleware(['auth', 'verified'])->name('casa_dei_pizzi');

        Route::get('/visite/valle_d_aosta/cogne/torre_del_vescovo', function () {
            return Inertia::render('Valle_d_Aosta/Visite/Torre_del_Vescovo');
        })->middleware(['auth', 'verified'])->name('torre_del_vescovo');

        Route::get('/visite/valle_d_aosta/cogne/la_grandze_place_commune', function () {
            return Inertia::render('Valle_d_Aosta/Visite/La_Grandze_Place_Commune');
        })->middleware(['auth', 'verified'])->name('la_grandze_place_commune');
        
        Route::get('/visite/valle_d_aosta/cogne/prato_di_sant_orso', function () {
            return Inertia::render('Valle_d_Aosta/Visite/Prato_di_Sant_Orso');
        })->middleware(['auth', 'verified'])->name('prato_di_sant_orso');
        
        Route::get('/visite/valle_d_aosta/cogne/fontana_di_ferro', function () {
            return Inertia::render('Valle_d_Aosta/Visite/Fontana_di_Ferro');
        })->middleware(['auth', 'verified'])->name('fontana_di_ferro');

        Route::get('/visite/valle_d_aosta/cogne/casa_dell_orologio', function () {
            return Inertia::render('Valle_d_Aosta/Visite/Casa_dell_Orologio');
        })->middleware(['auth', 'verified'])->name('casa_dell_orologio');

        Route::get('/visite/valle_d_aosta/cogne/maison_de_cogne_gerard_dayné', function () {
            return Inertia::render('Valle_d_Aosta/Visite/Maison_de_Cogne_Gerard_Dayné');
        })->middleware(['auth', 'verified'])->name('maison_de_cogne_gerard_dayné');

        Route::get('/visite/valle_d_aosta/cogne/atelier_d_arts_et_métiers', function () {
            return Inertia::render('Valle_d_Aosta/Visite/Atelier_d_Arts_et_Métiers');
        })->middleware(['auth', 'verified'])->name('atelier_d_arts_et_métiers');

        Route::get('/visite/valle_d_aosta/cogne/piazza_chanoux_cogne', function () {
            return Inertia::render('Valle_d_Aosta/Visite/Piazza_Chanoux_Cogne');
        })->middleware(['auth', 'verified'])->name('piazza_chanoux_cogne');
    
    /*Fine Cogne

/*Fine Valle d'Aosta*/
    
/*Inizio Piemonte */
    Route::get('/piemonte', function () {
        return Inertia::render('Piemonte');
    })->middleware(['auth', 'verified'])->name('piemonte');

    Route::get('/destinazioni/piemonte/torino', function () {
        return Inertia::render('Piemonte/Destinazioni/Torino');
    })->middleware(['auth', 'verified'])->name('torino');

    /*Inizio Torino*/
        
        Route::get('/visite/piemonte/torino/palazzo_reale', function () {
            return Inertia::render('Piemonte/Visite/Palazzo_Reale');
        })->middleware(['auth', 'verified'])->name('palazzo_reale');

        /*Inizio Palazzo Reale*/

            Route::get('/visite/piemonte/torino/palazzo_reale/palazzo_reale_armeria_reale_e_cappella_della_sindone', function () {
                return Inertia::render('Piemonte/Visite/Palazzo_reale/Palazzo_reale_armeria_reale_e_cappella_della_sindone');
            })->middleware(['auth', 'verified'])->name('palazzo_reale_armeria_reale_e_cappella_della_sindone');

            Route::get('/visite/piemonte/torino/palazzo_reale/visita_archeologica', function () {
                return Inertia::render('Piemonte/Visite/Palazzo_reale/Visita_Archeologica');
            })->middleware(['auth', 'verified'])->name('visita_archeologica');

            Route::get('/visite/piemonte/torino/palazzo_reale/capolavori_della_pittura', function () {
                return Inertia::render('Piemonte/Visite/Palazzo_reale/Capolavori_della_pittura');
            })->middleware(['auth', 'verified'])->name('capolavori_della_pittura');

            Route::get('/visite/piemonte/torino/palazzo_reale/visita_completa', function () {
                return Inertia::render('Piemonte/Visite/Palazzo_reale/Visita_completa');
            })->middleware(['auth', 'verified'])->name('visita_completa');

            Route::get('/visite/piemonte/torino/palazzo_reale/visita_ai_giardini', function () {
                return Inertia::render('Piemonte/Visite/Palazzo_reale/Visita_ai_giardini');
            })->middleware(['auth', 'verified'])->name('visita_ai_giardini');
        
        /*Fine Palazzo Reale*/

        Route::get('/visite/piemonte/torino/museo_nazionale_del_cinema', function () {
            return Inertia::render('Piemonte/Visite/Museo_Nazionale_del_Cinema');
        })->middleware(['auth', 'verified'])->name('museo_nazionale_del_cinema');

        Route::get('/visite/piemonte/torino/museo_egizio', function () {
            return Inertia::render('Piemonte/Visite/Museo_egizio');
        })->middleware(['auth', 'verified'])->name('museo_egizio');

        Route::get('/visite/piemonte/torino/porta_palazzo_e_il_balôn', function () {
            return Inertia::render('Piemonte/Visite/Porta_Palazzo_e_il_Balôn');
        })->middleware(['auth', 'verified'])->name('porta_palazzo_e_il_balôn');

        Route::get('/visite/piemonte/torino/palazzo_madama', function () {
            return Inertia::render('Piemonte/Visite/Palazzo_Madama');
        })->middleware(['auth', 'verified'])->name('palazzo_madama');

        /*Inizio Palazzo Madama*/

            Route::get('/visite/piemonte/torino/palazzo_madama/giardino_botanico_medievale', function () {
                return Inertia::render('Piemonte/Visite/Palazzo_Madama/Il_Giardino_Botanico_Medievale');
            })->middleware(['auth', 'verified'])->name('palazzo_madama');
        
        /*Fine Palazzo Madama*/

        Route::get('/visite/piemonte/torino/duomo_di_san_giovanni', function () {
            return Inertia::render('Piemonte/Visite/Duomo_di_San_Giovanni');
        })->middleware(['auth', 'verified'])->name('duomo_di_san_giovanni');

        Route::get('/visite/piemonte/torino/po_e_parco_del_valentino', function () {
            return Inertia::render('Piemonte/Visite/Po_e_Parco_del_Valentino');
        })->middleware(['auth', 'verified'])->name('po_e_parco_del_valentino');

        Route::get('/visite/piemonte/torino/reggia_di_venaria_reale', function () {
            return Inertia::render('Piemonte/Visite/Reggia_di_Venaria_Reale');
        })->middleware(['auth', 'verified'])->name('reggia_di_venaria_reale');

        /*Inizio Reggia di Venaria Reale*/

            Route::get('/visite/piemonte/torino/reggia_di_venaria_reale/la_reggia', function () {
                return Inertia::render('Piemonte/Visite/Reggia_di_Venaria_Reale/La_Reggia');
            })->middleware(['auth', 'verified'])->name('la_reggia');

            /*Inizio La Reggia*/

                Route::get('/visite/piemonte/torino/reggia_di_venaria_reale/la_reggia/breve_storia', function () {
                    return Inertia::render('Piemonte/Visite/Reggia_di_Venaria_Reale/Breve_Storia');
                })->middleware(['auth', 'verified'])->name('breve_storia');

                Route::get('/visite/piemonte/torino/reggia_di_venaria_reale/la_reggia/percorso_espositivo', function () {
                    return Inertia::render('Piemonte/Visite/Reggia_di_Venaria_Reale/Percorso_Espositivo');
                })->middleware(['auth', 'verified'])->name('percorso_espositivo');

                Route::get('/visite/piemonte/torino/reggia_di_venaria_reale/esplora/la_reggia/arte_contemporanea', function () {
                    return Inertia::render('Piemonte/Visite/Reggia_di_Venaria_Reale/Arte_Contemporanea');
                })->middleware(['auth', 'verified'])->name('arte_contemporanea');
            
            /*Fine La Reggia*/

            /*Inizio I Capolavori*/

                Route::get('/visite/piemonte/torino/reggia_di_venaria_reale/i_capolavori/sala_di_diana', function () {
                    return Inertia::render('Piemonte/Visite/Reggia_di_Venaria_Reale/Sala_di_Diana');
                })->middleware(['auth', 'verified'])->name('sala_di_diana');

                Route::get('/visite/piemonte/torino/reggia_di_venaria_reale/i_capolavori/galleria_grande', function () {
                    return Inertia::render('Piemonte/Visite/Reggia_di_Venaria_Reale/Galleria_Grande');
                })->middleware(['auth', 'verified'])->name('galleria_grande');

                Route::get('/visite/piemonte/torino/reggia_di_venaria_reale/i_capolavori/cappella_di_sant_uberto', function () {
                    return Inertia::render('Piemonte/Visite/Reggia_di_Venaria_Reale/Cappella_di_Sant_Uberto');
                })->middleware(['auth', 'verified'])->name('cappella_di_sant_uberto');

                Route::get('/visite/piemonte/torino/reggia_di_venaria_reale/i_capolavori/scuderie_juvarriane', function () {
                    return Inertia::render('Piemonte/Visite/Reggia_di_Venaria_Reale/Scuderie_Juvarriane');
                })->middleware(['auth', 'verified'])->name('scuderie_juvarriane');
            
            /*Fine I Capolavori*/

            /*Inizio La Regggia*/

                Route::get('/visite/piemonte/torino/reggia_di_venaria_reale/la_sacrestia_rinnovata', function () {
                    return Inertia::render('Piemonte/Visite/Reggia_di_Venaria_Reale/La_Sacrestia_Rinnovata');
                })->middleware(['auth', 'verified'])->name('la_sacrestia_rinnovata');

                Route::get('/visite/piemonte/torino/reggia_di_venaria_reale/la_regia_scuderia_il_bucintoro_e_le_carrozze_regali', function () {
                    return Inertia::render('Piemonte/Visite/Reggia_di_Venaria_Reale/La_Regia_Scuderia_Il_Bucintoro_e_le_Carrozze_Regali');
                })->middleware(['auth', 'verified'])->name('la_regia_scuderia_il_bucintoro_e_le_carrozze_regali');
                
                Route::get('/visite/piemonte/torino/reggia_di_venaria_reale/la_carrozza_di_napoleone_alla_reggia_di_venaria', function () {
                    return Inertia::render('Piemonte/Visite/Reggia_di_Venaria_Reale/La_Carrozza_di_Napoleone_alla_Reggia_di_Venaria');
                })->middleware(['auth', 'verified'])->name('la_carrozza_di_napoleone_alla_reggia_di_venaria');

                Route::get('/visite/piemonte/torino/reggia_di_venaria_reale/ripopolare_la_reggia_di_peter_greenaway', function () {
                    return Inertia::render('Piemonte/Visite/Reggia_di_Venaria_Reale/Ripopolare_la_Reggia_di_Peter_Greenaway');
                })->middleware(['auth', 'verified'])->name('ripopolare_la_reggia_di_peter_greenaway');

                Route::get('/visite/piemonte/torino/reggia_di_venaria_reale/esposizione_del_dipinto_restaurato_di_palma_il_giovane', function () {
                    return Inertia::render('Piemonte/Visite/Reggia_di_Venaria_Reale/Esposizione_del_dipinto_restaurato_di_Palma_il_Giovane');
                })->middleware(['auth', 'verified'])->name('esposizione_del_dipinto_restaurato_di_palma_il_giovane');

                Route::get('/visite/piemonte/torino/reggia_di_venaria_reale/esposizioni_permanenti/storyboard_paladino_reggia_venaria', function () {
                    return Inertia::render('Piemonte/Visite/Reggia_di_Venaria_Reale/Storyboard_Paladino_Reggia_Venaria');
                })->middleware(['auth', 'verified'])->name('reggia_giardini_castello_della_mandria');

                Route::get('/visite/piemonte/torino/reggia_di_venaria_reale/esposizioni_permanenti/dove_stelle_si_avvicinano_spanna', function () {
                    return Inertia::render('Piemonte/Visite/Reggia_di_Venaria_Reale/Dove_le_stelle_si_avvicinano_di_una_spanna');
                })->middleware(['auth', 'verified'])->name('dove_stelle_si_avvicinano_spanna');

                Route::get('/visite/piemonte/torino/reggia_di_venaria_reale/i_capolavori/giardino_delle_sculture_fluide', function () {
                    return Inertia::render('Piemonte/Visite/Reggia_di_Venaria_Reale/Giardino_delle_Sculture_Fluide');
                })->middleware(['auth', 'verified'])->name('giardino_delle_sculture_fluide');

                Route::get('/visite/piemonte/torino/reggia_di_venaria_reale/esposizioni_permanenti/anafora_di_giuseppe_penone', function () {
                    return Inertia::render('Piemonte/Visite/Reggia_di_Venaria_Reale/Anafora_di_Giuseppe_Penone');
                })->middleware(['auth', 'verified'])->name('anafora_di_giuseppe_penone');
            
            /*Fine La Reggia*/

            Route::get('/visite/piemonte/torino/reggia_di_venaria_reale/i_giardini', function () {
                return Inertia::render('Piemonte/Visite/Reggia_di_Venaria_Reale/I_Giardini');
            })->middleware(['auth', 'verified'])->name('i_giardini');

            /*Inizio I Giardini*/

                Route::get('/visite/piemonte/torino/reggia_di_venaria_reale/i_giardini/breve_storia', function () {
                    return Inertia::render('Piemonte/Visite/Reggia_di_Venaria_Reale/Breve_Storia_Giardini');
                })->middleware(['auth', 'verified'])->name('breve_storia_giardini');
            
                Route::get('/visite/piemonte/torino/reggia_di_venaria_reale/i_giardini/la_freccia_di_diana_il_trenino_dei_giardini', function () {
                    return Inertia::render('Piemonte/Visite/Reggia_di_Venaria_Reale/La_Freccia_di_Diana_il_trenino_dei_Giardini');
                })->middleware(['auth', 'verified'])->name('la_freccia_di_diana_il_trenino_dei_giardini');
            
                Route::get('/visite/piemonte/torino/reggia_di_venaria_reale/i_giardini/parco_alto', function () {
                    return Inertia::render('Piemonte/Visite/Reggia_di_Venaria_Reale/Parco_Alto');
                })->middleware(['auth', 'verified'])->name('parco_alto');

                Route::get('/visite/piemonte/torino/reggia_di_venaria_reale/i_giardini/parco_basso', function () {
                    return Inertia::render('Piemonte/Visite/Reggia_di_Venaria_Reale/Parco_Basso');
                })->middleware(['auth', 'verified'])->name('parco_basso');

            /*Fine I Giardini*/

            Route::get('/visite/piemonte/torino/reggia_di_venaria_reale/l_hercole_colosso', function () {
                return Inertia::render('Piemonte/Visite/Reggia_di_Venaria_Reale/L_Hercole_Colosso');
            })->middleware(['auth', 'verified'])->name('la_freccia_di_diana_il_trenino_dei_giardini');

            Route::get('/visite/piemonte/torino/reggia_di_venaria_reale/la_fontana_d_ercole', function () {
                return Inertia::render('Piemonte/Visite/Reggia_di_Venaria_Reale/La_Fontana_d_Ercole');
            })->middleware(['auth', 'verified'])->name('la_fontana_d_ercole');

            Route::get('/visite/piemonte/torino/reggia_di_venaria_reale/mostre/igloo_di_mario_merz_alla_reggia_di_venaria', function () {
                return Inertia::render('Piemonte/Visite/Reggia_di_Venaria_Reale/Igloo_di_Mario_Merz');
            })->middleware(['auth', 'verified'])->name('igloo_di_mario_merz_alla_reggia_di_venaria');

            Route::get('/visite/piemonte/torino/reggia_di_venaria_reale/sinergie_esapodi', function () {
                return Inertia::render('Piemonte/Visite/Reggia_di_Venaria_Reale/Sinergie_Esapodi');
            })->middleware(['auth', 'verified'])->name('sinergie_esapodi');
            
            Route::get('/visite/piemonte/torino/reggia_di_venaria_reale/castello_mandria', function () {
                return Inertia::render('Piemonte/Visite/Reggia_di_Venaria_Reale/Il_Castello_della_Mandria');
            })->middleware(['auth', 'verified'])->name('il_castello_della_mandria');

            /*Inizio Il castello della Mandria*/

                Route::get('/visite/piemonte/torino/reggia_di_venaria_reale/castello_mandria/breve_storia_castello_mandria', function () {
                    return Inertia::render('Piemonte/Visite/Reggia_di_Venaria_Reale/Breve_Storia_Castello_Mandria');
                })->middleware(['auth', 'verified'])->name('breve_storia_giardini');

                Route::get('/visite/piemonte/torino/reggia_di_venaria_reale/castello_mandria/il_parco_della_mandria', function () {
                    return Inertia::render('Piemonte/Visite/Reggia_di_Venaria_Reale/Il_Parco_della_Mandria');
                })->middleware(['auth', 'verified'])->name('il_parco_della_mandria');

                Route::get('/visite/piemonte/torino/reggia_di_venaria_reale/castello_mandria/appartamenti_reali', function () {
                    return Inertia::render('Piemonte/Visite/Reggia_di_Venaria_Reale/Gli_Appartamenti_Reali');
                })->middleware(['auth', 'verified'])->name('appartamenti_reali');
            
            /*Fine il Castello della Mandria*/
            
        /*Fine Reggia di Venaria Reale*/

        Route::get('/visite/piemonte/torino/monte_dei_cappuccini', function () {
            return Inertia::render('Piemonte/Visite/Monte_dei_Cappuccini');
        })->middleware(['auth', 'verified'])->name('monte_dei_cappuccini');

        Route::get('/visite/piemonte/torino/ponte_vittorio_emanuele_i', function () {
            return Inertia::render('Piemonte/Visite/Ponte_Vittorio_Emanuele_I');
        })->middleware(['auth', 'verified'])->name('ponte_vittorio_emaniele_i');

        Route::get('/visite/piemonte/torino/chiesa_della_gran_madre', function () {
            return Inertia::render('Piemonte/Visite/Chiesa_della_Gran_Madre');
        })->middleware(['auth', 'verified'])->name('chiesa_della_gran_madre');

        Route::get('/visite/piemonte/torino/piazza_san_carlo', function () {
            return Inertia::render('Piemonte/Visite/Piazza_san_Carlo');
        })->middleware(['auth', 'verified'])->name('piazza_san_carlo');

        Route::get('/visite/piemonte/torino/basilica_di_superga', function () {
            return Inertia::render('Piemonte/Visite/Basilica_di_Superga');
        })->middleware(['auth', 'verified'])->name('basilica_di_superga');

        Route::get('/visite/torino/chiesa_della_gran_maria_di_dio', function () {
            return Inertia::render('Piemonte/Visite/Chiesa_della_gran_madre_di_dio');
        })->middleware(['auth', 'verified'])->name('chiesa_della_gran_maria_di_dio');

        Route::get('/visite/piemonte/torino/eataly', function () {
            return Inertia::render('Piemonte/Visite/Eataly');
        })->middleware(['auth', 'verified'])->name('eataly');

        Route::get('/visite/piemonte/torino/gam', function () {
            return Inertia::render('Piemonte/Visite/GAM');
        })->middleware(['auth', 'verified'])->name('gam');

        Route::get('/visite/piemonte/torino/museo_d_arte_orientale', function () {
            return Inertia::render('Piemonte/Visite/MAO');
        })->middleware(['auth', 'verified'])->name('museo_d_arte_orientale');

        Route::get('/visite/piemonte/torino/murazzi', function () {
            return Inertia::render('Piemonte/Visite/Murazzi');
        })->middleware(['auth', 'verified'])->name('murazzi');

        Route::get('/visite/piemonte/torino/museo_nazionale_del_risorgimento_italiano', function () {
            return Inertia::render('Piemonte/Visite/Mn_del_R_italiano');
        })->middleware(['auth', 'verified'])->name('museo_nazionale_del_risorgimento_italiano');

        Route::get('/visite/piemonte/torino/museo_dell_automobile', function () {
            return Inertia::render('Piemonte/Visite/Museo_dell_Automobile');
        })->middleware(['auth', 'verified'])->name('museo_dell_automobile');

        Route::get('/visite/piemonte/torino/museo_della_sindone', function () {
            return Inertia::render('Piemonte/Visite/Museo_della_Sindone');
        })->middleware(['auth', 'verified'])->name('museo_nazionale_del_risorgimento_italiano');

        Route::get('/visite/piemonte/torino/quadrilatero_romano', function () {
            return Inertia::render('Piemonte/Visite/Quadrilatero_Romano');
        })->middleware(['auth', 'verified'])->name('quadrilatero_romano');

        Route::get('/territori/piemonte/il_nord_e_i_laghi_maggiore_e_d_orta', function () {
            return Inertia::render('Piemonte/Territori/Il_nord_e_i_laghi_maggiore_e_d_Orta');
        })->middleware(['auth', 'verified'])->name('il_nord_e_i_laghi_maggiore_e_d_orta');
    
    /*Fine Torino*/

    Route::get('/destinazioni/piemonte/novara', function () {
        return Inertia::render('Piemonte/Destinazioni/Novara');
    })->middleware(['auth', 'verified'])->name('novara');

    /*Inizio Novara*/

        Route::get('/visite/piemonte/novara/cupola_di_san_gaudenzio', function () {
            return Inertia::render('Piemonte/Visite/Cupola_di_San_Gaudenzio');
        })->middleware(['auth', 'verified'])->name('cupola_di_san_gaudenzio');

        Route::get('/visite/piemonte/novara/basilica_di_san_gaudenzio', function () {
            return Inertia::render('Piemonte/Visite/Basilica_di_San_Gaudenzio');
        })->middleware(['auth', 'verified'])->name('basilica_di_san_gaudenzio');

        Route::get('/visite/piemonte/novara/cattedrale_santa_maria_assunta', function () {
            return Inertia::render('Piemonte/Visite/Cattedrale_Santa_Maria_Assunta');
        })->middleware(['auth', 'verified'])->name('cattedrale_santa_maria_assunta');

        Route::get('/visite/piemonte/novara/teatro_coccia', function () {
            return Inertia::render('Piemonte/Visite/Teatro_Coccia');
        })->middleware(['auth', 'verified'])->name('teatro_coccia');

        Route::get('/visite/piemonte/novara/piazza_martini', function () {
            return Inertia::render('Piemonte/Visite/Piazza_Martini');
        })->middleware(['auth', 'verified'])->name('piazza_martini');

        Route::get('/visite/piemonte/novara/castello_visconteo_sforzesco', function () {
            return Inertia::render('Piemonte/Visite/Castello_Visconteo_Sforzesco');
        })->middleware(['auth', 'verified'])->name('castello_visconteo_sforzesco');

        Route::get('/visite/piemonte/novara/palazzo_del_mercato', function () {
            return Inertia::render('Piemonte/Visite/Palazzo_del_Mercato');
        })->middleware(['auth', 'verified'])->name('palazzo_del_mercato');

        Route::get('/visite/piemonte/novara/chiesa_di_san_pietro_al_rosario', function () {
            return Inertia::render('Piemonte/Visite/Chiesa_di_San_Pietro_al_Rosario');
        })->middleware(['auth', 'verified'])->name('chiesa_di_san_pietro_al_rosario');

        Route::get('/visite/piemonte/novara/broletto', function () {
            return Inertia::render('Piemonte/Visite/Il_Broletto');
        })->middleware(['auth', 'verified'])->name('broletto');

        Route::get('/visite/piemonte/novara/mura_romane', function () {
            return Inertia::render('Piemonte/Visite/Mura_Romane');
        })->middleware(['auth', 'verified'])->name('mura_romane');
    /*Fine Novara*/

    Route::get('/destinazioni/piemonte/biella', function () {
        return Inertia::render('Piemonte/Destinazioni/Biella');
    })->middleware(['auth', 'verified'])->name('biella');

    /*Inizio Biella*/

        Route::get('/visite/piemonte/biella/quartiere_del_piazzo', function () {
            return Inertia::render('Piemonte/Visite/Quartiere_del_Piazzo');
        })->middleware(['auth', 'verified'])->name('quartiere_del_piazzo');

        Route::get('/visite/piemonte/biella/mebo', function () {
            return Inertia::render('Piemonte/Visite/MeBo');
        })->middleware(['auth', 'verified'])->name('mebo');

        Route::get('/visite/piemonte/biella/fondazione_fila_museum', function () {
            return Inertia::render('Piemonte/Visite/Fila');
        })->middleware(['auth', 'verified'])->name('fondazione_fila_museum');

        Route::get('/visite/piemonte/biella/cittadellarte_forndazione_pistoletto', function () {
            return Inertia::render('Piemonte/Visite/Cittadellarte');
        })->middleware(['auth', 'verified'])->name('cittadellarte_forndazione_pistoletto');

        Route::get('/visite/piemonte/biella/museo_del_territorio_biellese', function () {
            return Inertia::render('Piemonte/Visite/Museo_del_Territorio_Biellese');
        })->middleware(['auth', 'verified'])->name('museo_del_territorio_biellese');

        Route::get('/visite/piemonte/biella/museo_biellese_degli_alpini', function () {
            return Inertia::render('Piemonte/Visite/Museo_biellese_degli_alpini');
        })->middleware(['auth', 'verified'])->name('museo_biellese_degli_alpini');

        Route::get('/visite/piemonte/biella/museo_d_arte_contemporanea_internazionele_senza_tendenze', function () {
            return Inertia::render('Piemonte/Visite/Museo_d_Arte_Contemporanea_Internazionale');
        })->middleware(['auth', 'verified'])->name('museo_d_arte_contemporanea_internazionele_senza_tendenze');
    
    /*Fine Biella*/

    Route::get('/destinazioni/piemonte/vercelli', function () {
        return Inertia::render('Piemonte/Destinazioni/Vercelli');
    })->middleware(['auth', 'verified'])->name('vercelli');

    /*Inizio Vercelli*/

        Route::get('/visite/piemonte/vercelli/basilica_di_sant_andrea', function () {
            return Inertia::render('Piemonte/Visite/Basilica_di_Sant_Andrea');
        })->middleware(['auth', 'verified'])->name('basilica_di_sant_andrea');
        
        Route::get('/visite/piemonte/vercelli/cattedrale_di_sant_eusebio', function () {
            return Inertia::render('Piemonte/Visite/Cattedrale_di_Sant_Eusebio');
        })->middleware(['auth', 'verified'])->name('cattedrale_di_sant_eusebio');

        Route::get('/visite/piemonte/vercelli/castello_visconteo', function () {
            return Inertia::render('Piemonte/Visite/Castello_Visconteo');
        })->middleware(['auth', 'verified'])->name('castello_visconteo');

        Route::get('/visite/piemonte/vercelli/museo_leone', function () {
            return Inertia::render('Piemonte/Visite/Museo_Leone');
        })->middleware(['auth', 'verified'])->name('museo_leone');

        Route::get('/visite/piemonte/vercelli/pinacoteca_francesco_borgogna', function () {
            return Inertia::render('Piemonte/Visite/Pinacoteca_Francesco_Borgogna');
        })->middleware(['auth', 'verified'])->name('pinacoteca_francesco_borgogna');
        
        Route::get('/fiumi/piemonte/vercelli/fiume_sesia', function () {
            return Inertia::render('Fiumi/Fiume_Sesia');
        })->middleware(['auth', 'verified'])->name('fiume_sesia');

        Route::get('/montagna/piemonte/monte_rosa', function () {
            return Inertia::render('Montagna/Monte_Rosa');
        })->middleware(['auth', 'verified'])->name('monte_rosa');

        Route::get('/visite/piemonte/vercelli/parco_naturale_delle_lame_del_sesia', function () {
            return Inertia::render('Piemonte/Visite/Parco_Naturale_delle_Lame_del_Sesia');
        })->middleware(['auth', 'verified'])->name('parco_naturale_delle_lame_del_sesia');
    
    /*Fine Vercelli*/

    Route::get('/territori/piemonte/canavese_gran_paradiso_e_valli_di_lanzo', function () {
        return Inertia::render('Piemonte/Territori/Canavese_Gran_Paradiso');
    })->middleware(['auth', 'verified'])->name('canavese_gran_paradiso_e_valli_di_lanzo');

    /*Inizio Canavese, Gran Paradiso e Valli di Lanzo*/

        Route::get('/territori/piemonte/canavese', function () {
            return Inertia::render('Piemonte/Territori/Canavese');
        })->middleware(['auth', 'verified'])->name('canavese');

        Route::get('/territori/piemonte/torino/valle_di_lanzo', function () {
            return Inertia::render('Piemonte/Territori/Valli_di_Lanzo');
        })->middleware(['auth', 'verified'])->name('valli_di_lanzo');
    
    /*Fine Canavese, Gran Paradiso e Valli di Lanzo*/

    Route::get('/destinazioni/piemonte/ivrea', function () {
        return Inertia::render('Piemonte/Destinazioni/Ivrea');
    })->middleware(['auth', 'verified'])->name('ivrea');

    /*Inizio Ivrea*/

        Route::get('/visite/piemonte/ivrea/anfiteatro_morenico', function () {
            return Inertia::render('Piemonte/Visite/Anfiteatro_Morenico');
        })->middleware(['auth', 'verified'])->name('anfiteatro_morenico');

        Route::get('/visite/piemonte/ivrea/castello_di_ivrea', function () {
            return Inertia::render('Piemonte/Visite/Castello_di_Ivrea');
        })->middleware(['auth', 'verified'])->name('castello_di_ivrea');

        Route::get('/fiumi/piemonte/ivrea/fiume_dora_baltea', function () {
            return Inertia::render('Fiumi/Fiume_Dora_Baltea');
        })->middleware(['auth', 'verified'])->name('fiume_dora_baltea');

        Route::get('/visite/piemonte/ivrea/anfiteatro_romano', function () {
            return Inertia::render('Piemonte/Visite/Anfiteatro_Romano_Ivrea');
        })->middleware(['auth', 'verified'])->name('anfiteatro_romano');

        Route::get('/visite/piemonte/ivrea/duomo_di_s_maria_assunta', function () {
            return Inertia::render('Piemonte/Visite/Duomo_S_Maria_Assunta');
        })->middleware(['auth', 'verified'])->name('duomo_di_s_maria_assunta');

        Route::get('/visite/piemonte/ivrea/palazzo_vescovile', function () {
            return Inertia::render('Piemonte/Visite/Palazzo_Vescovile_di_Ivrea');
        })->middleware(['auth', 'verified'])->name('palazzo_vescovile');
        
        Route::get('/visite/piemonte/ivrea/museo_a_cielo_aperto_dell_architettura_moderna', function () {
            return Inertia::render('Piemonte/Visite/Maam');
        })->middleware(['auth', 'verified'])->name('museo_a_cielo_aperto_dell_architettura_moderna');
    
        Route::get('/fiumi/fiume_po', function () {
            return Inertia::render('Fiumi/Fiume_Po');
        })->middleware(['auth', 'verified'])->name('fiume_po');
    /*Fine Ivrea*/

    /*Inizio Agliè*/

        Route::get('/visite/piemonte/agliè/castello_di_agliè', function () {
            return Inertia::render('Piemonte/Visite/Castello_di_Agliè');
        })->middleware(['auth', 'verified'])->name('castello_di_agliè');
    
    /*Fine Agliè*/

    /*Inizio Caravino*/

        Route::get('/visite/piemonte/caravino/castello_di_masino', function () {
            return Inertia::render('Piemonte/Visite/Castello_di_Masino');
        })->middleware(['auth', 'verified'])->name('castello_di_masino');
    
    /*Fine Caravino*/

    Route::get('/destinazioni/piemonte/cuneo', function () {
        return Inertia::render('Piemonte/Destinazioni/Cuneo');
    })->middleware(['auth', 'verified'])->name('cuneo');

    /*Inizio Cuneo*/

        Route::get('/visite/piemonte/cuneo/piazza_galimberti', function () {
            return Inertia::render('Piemonte/Visite/Piazza_Galimberti');
        })->middleware(['auth', 'verified'])->name('piazza_galimberti');

        Route::get('/visite/piemonte/cuneo/palazzo_della_torre', function () {
            return Inertia::render('Piemonte/Visite/Palazzo_della_Torre');
        })->middleware(['auth', 'verified'])->name('palazzo_della_torre');

        Route::get('/visite/piemonte/cuneo/contrada_mondovì', function () {
            return Inertia::render('Piemonte/Visite/Contrada_Mondovì');
        })->middleware(['auth', 'verified'])->name('contrada_mondovì');

        Route::get('/territori/piemonte/cuneo/langhe', function () {
            return Inertia::render('Piemonte/Territori/Langhe');
        })->middleware(['auth', 'verified'])->name('langhe');

        Route::get('/enogastronomia/piemonte/cueno/tartufo_bianco', function () {
            return Inertia::render('Enogastronomia/Tartufo_Bianco');
        })->middleware(['auth', 'verified'])->name('tartufo_bianco');

        Route::get('/visite/piemonte/cuneo/castello_di_racconigi', function () {
            return Inertia::render('Piemonte/Visite/Castello_Reale_di_Racconigi');
        })->middleware(['auth', 'verified'])->name('castello_di_racconigi');

    /*Fine Cuneo*/

    Route::get('/destinazioni/piemonte/asti', function () {
        return Inertia::render('Piemonte/Destinazioni/Asti');
    })->middleware(['auth', 'verified'])->name('asti');

    /*Inizio Asti*/

        Route::get('/visite/piemonte/asti/collegiata_di_san_secondo', function () {
            return Inertia::render('Piemonte/Visite/Collegiata_di_San_Secondo');
        })->middleware(['auth', 'verified'])->name('collegiata_di_san_secondo');

        Route::get('/visite/piemonte/asti/palazzo_alfieri', function () {
            return Inertia::render('Piemonte/Visite/Palazzo_Alfieri');
        })->middleware(['auth', 'verified'])->name('palazzo_alfieri');

        Route::get('/visite/piemonte/asti/palazzo_mazzetti', function () {
            return Inertia::render('Piemonte/Visite/Palazzo_Mazzetti');
        })->middleware(['auth', 'verified'])->name('palazzo_mazzetti');

        Route::get('/visite/piemonte/asti/cattedrale_di_santa_maria_assunta', function () {
            return Inertia::render('Piemonte/Visite/Cattedrale_di_S_Maria_Assunta');
        })->middleware(['auth', 'verified'])->name('cattedrale_di_santa_maria_assunta');

        Route::get('/visite/piemonte/asti/chiesa_di_san_martino', function () {
            return Inertia::render('Piemonte/Visite/Chiesa_di_S_Martino');
        })->middleware(['auth', 'verified'])->name('chiesa_di_san_martino');

        Route::get('/visite/piemonte/asti/complesso_monumentale_di_sant_pietro_e_museo_archeologico', function () {
            return Inertia::render('Piemonte/Visite/Complesso_Monumentale_di_San_Pietro_e_Museo_Archeologico');
        })->middleware(['auth', 'verified'])->name('complesso_monumentale_di_sant_pietro_e_museo_archeologico');

        Route::get('/visite/piemonte/asti/museo_e_cripta_di_santa_anastasio', function () {
            return Inertia::render('Piemonte/Visite/Museo_e_Cripta_di_S_Anastasio');
        })->middleware(['auth', 'verified'])->name('museo_e_cripta_di_santa_anastasio');

        Route::get('/visite/piemonte/asti/palazzo_mazzola_archivio_storico_e_museo_del_palio', function () {
            return Inertia::render('Piemonte/Visite/Palazzo_Mazzola_Archivio_Storico_e_Museo_del_Palio');
        })->middleware(['auth', 'verified'])->name('palazzo_mazzola_archivio_storico_e_museo_del_palio');

        Route::get('/visite/piemonte/asti/palazzo_ottolenghi_e_museo_del_risorgimento', function () {
            return Inertia::render('Piemonte/Visite/Palazzo_Ottolenghi_e_Museo_del_Risorgimento');
        })->middleware(['auth', 'verified'])->name('palazzo_ottolenghi_e_museo_del_risorgimento');

        Route::get('/visite/piemonte/asti/torre_troyana', function () {
            return Inertia::render('Piemonte/Visite/Torre_Troyana');
        })->middleware(['auth', 'verified'])->name('torre_troyana');
    /*Fine Asti*/

    Route::get('/territori/piemonte/pianura_padana', function () {
        return Inertia::render('Piemonte/Territori/Pianura_Padana');
    })->middleware(['auth', 'verified'])->name('pianura_padana');
    
    Route::get('/destinazioni/piemonte/saluzzo', function () {
        return Inertia::render('Piemonte/Destinazioni/Saluzzo');
    })->middleware(['auth', 'verified'])->name('saluzzo');

    /*inizio Saluzzo*/

        Route::get('/visite/piemonte/saluzzo/castello_di_castellar', function () {
            return Inertia::render('Piemonte/Visite/Castello_di_Castellar');
        })->middleware(['auth', 'verified'])->name('castello_di_castellar');

        Route::get('/visite/piemonte/saluzzo/pinacoteca_matteo_olivero', function () {
            return Inertia::render('Piemonte/Visite/Pinacoteca_Matteo_Olivero');
        })->middleware(['auth', 'verified'])->name('pinacoteca_matteo_olivero');
        
        Route::get('/visite/piemonte/saluzzo/casa_museo_silvio_pellico', function () {
            return Inertia::render('Piemonte/Visite/Casa_Museo_Silvio_Pellico');
        })->middleware(['auth', 'verified'])->name('casa_museo_silvio_pellico');

        Route::get('/visite/piemonte/saluzzo/museo_della_memoria_carceraria', function () {
            return Inertia::render('Piemonte/Visite/Museo_della_Memoria_Carceraria');
        })->middleware(['auth', 'verified'])->name('museo_della_memoria_carceraria');
        
        Route::get('/visite/piemonte/saluzzo/museo_civico_casa_cavassa', function () {
            return Inertia::render('Piemonte/Visite/Museo_Civico_Casa_Cavassa');
        })->middleware(['auth', 'verified'])->name('museo_civico_casa_cavassa');

        Route::get('/visite/piemonte/saluzzo/palazzo_sarriod_de_la_tour', function () {
            return Inertia::render('Piemonte/Visite/Palazzo_Sarriod_de_La_Tour');
        })->middleware(['auth', 'verified'])->name('palazzo_sarriod_de_la_tour');
    /*Fine Saluzzo*/

    Route::get('/territori/piemonte/asti_alessandria_e_il_monferrato', function () {
        return Inertia::render('Piemonte/Territori/Asti_Alessandria_e_il_Monferrato');
    })->middleware(['auth', 'verified'])->name('asti_alessandra_e_il_monferrato');

    Route::get('/destinazioni/piemonte/alessandria', function () {
        return Inertia::render('Piemonte/Destinazioni/Alessandria');
    })->middleware(['auth', 'verified'])->name('alessandria');

    /*Inizio Alessandria*/

        Route::get('/visite/piemonte/alessandria/castello_sannazzaro_di_giarole', function () {
            return Inertia::render('Piemonte/Visite/Castello_Sannazzaro_di_Giarole');
        })->middleware(['auth', 'verified'])->name('castello_sannazzaro_di_giarole');

        Route::get('/visite/piemonte/alessandria/museo_di_marengo', function () {
            return Inertia::render('Piemonte/Visite/Museo_di_Marengo');
        })->middleware(['auth', 'verified'])->name('museo_di_marengo');

        Route::get('/visite/piemonte/alessandria/piazza_della_libertà', function () {
            return Inertia::render('Piemonte/Visite/Piazza_della_Libertà');
        })->middleware(['auth', 'verified'])->name('piazza_della_libertà');

        Route::get('/visite/piemonte/alessandria/duomo_di_alessandria', function () {
            return Inertia::render('Piemonte/Visite/Duomo_di_Alessandria');
        })->middleware(['auth', 'verified'])->name('duomo_di_alessandria');
        
        Route::get('/visite/piemonte/alessandria/cittadella_di_alessandria', function () {
            return Inertia::render('Piemonte/Visite/Cittadella_di_Alessandria');
        })->middleware(['auth', 'verified'])->name('cittadella_di_alessandria');

        Route::get('/territori/piemonte/monferrato', function () {
            return Inertia::render('Piemonte/Territori/Monferrato');
        })->middleware(['auth', 'verified'])->name('monferrato');
    /*Fine Alessandria*/

    Route::get('/territori/piemonte/valle_di_susa_chisone_pallice_germanasca', function () {
        return Inertia::render('Piemonte/Territori/Valle_di_Susa_Chisone_Pellice_e_Germanasca');
    })->middleware(['auth', 'verified'])->name('valle_di_susa_chisone_pallice_germanasca');
    
    /*Inizio Val di Susa, Chisone Pellice e Germanasca*/

        Route::get('/montagna/piemonte/valle_di_susa', function () {
            return Inertia::render('Montagna/Valle_di_Susa');
        })->middleware(['auth', 'verified'])->name('valle_di_susa');

        /*Inizio Val di Susa*/

            Route::get('/fiumi/piemonte/alpi_cozie/fiume_dora_riparia', function () {
                return Inertia::render('Fiumi/Fiume_Dora_Riparia');
            })->middleware(['auth', 'verified'])->name('fiume_dora_riparia');

            Route::get('/visite/piemonte/valle_di_susa/castello_della_contessa_adelaide', function () {
                return Inertia::render('Piemonte/Visite/Castello_della_Contessa_Adelaide');
            })->middleware(['auth', 'verified'])->name('castello_della_contessa_adelaide');

            Route::get('/visite/piemonte/valle_di_susa/forte_di_fenestrelle', function () {
                return Inertia::render('Piemonte/Visite/Forte_di_Fenestrelle');
            })->middleware(['auth', 'verified'])->name('forte_di_fenestrelle');
            
            Route::get('/visite/piemonte/valle_di_susa/abbazia_di_novalesa', function () {
                return Inertia::render('Piemonte/Visite/Abbazia_di_Novalesa');
            })->middleware(['auth', 'verified'])->name('abbazia_di_novalesa');

            Route::get('/visite/piemonte/valle_di_susa/sacra_di_san_michele', function () {
                return Inertia::render('Piemonte/Visite/Sacra_di_San_Michele');
            })->middleware(['auth', 'verified'])->name('sacra_di_san_michele');

        /*Fine Val di Susa*/

        Route::get('/montagna/piemonte/val_chisone', function () {
            return Inertia::render('Montagna/Val_Chisone');
        })->middleware(['auth', 'verified'])->name('val_chisone');

        /*Inizio Val Chisone*/

            Route::get('/visite/piemonte/val_chisone/gallia_cisalpina', function () {
                return Inertia::render('Piemonte/Visite/Gallia_Cisalpina');
            })->middleware(['auth', 'verified'])->name('gallia_cisalpina');

            Route::get('/visite/piemonte/val_chisone/gallia_narbonense', function () {
                return Inertia::render('Piemonte/Visite/Gallia_Narbonense');
            })->middleware(['auth', 'verified'])->name('gallia_narbonense');

        /*Fine Val Chisone*/

        Route::get('/montagna/piemonte/val_pellice', function () {
            return Inertia::render('Montagna/Val_Pellice');
        })->middleware(['auth', 'verified'])->name('val_pellice');

        Route::get('/montagna/piemonte/valle_germanasca', function () {
            return Inertia::render('Montagna/Valle_Germanasca');
        })->middleware(['auth', 'verified'])->name('valle_germanasca');
    
    /*Fine Val di Susa, Chisone Pellice e Germanasca*/

    Route::get('/territori/piemonte/langhe_e_roero', function () {
        return Inertia::render('Piemonte/Territori/Langhe_e_Roero');
    })->middleware(['auth', 'verified'])->name('langhe_e_roero');

    Route::get('/destinazioni/piemonte/alba', function () {
        return Inertia::render('Piemonte/Destinazioni/Alba');
    })->middleware(['auth', 'verified'])->name('alba');

    /*Inizio Alba*/

        Route::get('/visite/piemonte/alba/cattedrale_di_san_lorenzo', function () {
            return Inertia::render('Piemonte/Visite/Cattedrale_di_San_Lorenzo');
        })->middleware(['auth', 'verified'])->name('cattedrale_di_san_lorenzo');

        Route::get('/visite/piemonte/alba/chiesa_della_maddalena', function () {
            return Inertia::render('Piemonte/Visite/Chiesa_della_Maddalena');
        })->middleware(['auth', 'verified'])->name('chiesa_della_maddalena');

        Route::get('/visite/piemonte/alba/palazzo_comunale', function () {
            return Inertia::render('Piemonte/Visite/Palazzo_Comunale');
        })->middleware(['auth', 'verified'])->name('palazzo_comunale');

        Route::get('/visite/piemonte/alba/le_torri', function () {
            return Inertia::render('Piemonte/Visite/Le_Torri');
        })->middleware(['auth', 'verified'])->name('le_torri');

        Route::get('/visite/piemonte/alba/alba_sotterranea', function () {
            return Inertia::render('Piemonte/Visite/Alba_Sotterranea');
        })->middleware(['auth', 'verified'])->name('alba_sotterranea');

        Route::get('/visite/piemonte/alba/chiesa_di_san_domenico', function () {
            return Inertia::render('Piemonte/Visite/Chiesa_di_San_Domenico');
        })->middleware(['auth', 'verified'])->name('chiesa_di_san_domenico');

        Route::get('/visite/piemonte/alba/chiesa_di_san_giuseppe', function () {
            return Inertia::render('Piemonte/Visite/Chiesa_di_San_Giuseppe');
        })->middleware(['auth', 'verified'])->name('chiesa_di_san_giuseppe');

        Route::get('/visite/piemonte/alba/casa_fenoglio', function () {
            return Inertia::render('Piemonte/Visite/Casa_Fenoglio');
        })->middleware(['auth', 'verified'])->name('casa_fenoglio');

    /*Fine Alba*/
    
    Route::get('/visite/piemonte/serralunga_d_alba/castello_di_serralunga_d_alba', function () {
        return Inertia::render('Piemonte/Visite/Castello_di_Serralunga_d_Alba');
    })->middleware(['auth', 'verified'])->name('castello_di_serralunga_d_alba');

    Route::get('/visite/piemonte/gurene/castello_di_guarene', function () {
        return Inertia::render('Piemonte/Visite/Castello_di_Guarene');
    })->middleware(['auth', 'verified'])->name('castello_di_guarene');

/*Fine Piemonte */


/*Inizio Lombardia*/
    Route::get('/lombardia', function () {
        return Inertia::render('Lombardia');
    })->middleware(['auth', 'verified'])->name('lombardia');
    /*Inzio Milano*/
        Route::get('/destinazioni/lombardia/milano', function () {
            return Inertia::render('Lombardia/Destinazioni/Milano');
        })->middleware(['auth', 'verified'])->name('milano');

        Route::get('/visite/milano/duomo', function () {
            return Inertia::render('Lombardia/Visite/Duomo');
        })->middleware(['auth', 'verified'])->name('duomo');

        Route::get('/visite/milano/castello_sforzesco', function () {
            return Inertia::render('Lombardia/Visite/Castello_Sforzesco');
        })->middleware(['auth', 'verified'])->name('castello_sforzesco');

        Route::get('/visite/milano/pinacoteca_di_brera', function () {
            return Inertia::render('Lombardia/Visite/Pinacoteca_di_Brea');
        })->middleware(['auth', 'verified'])->name('pinacoteca_di_brera');

        Route::get('/visite/milano/cenacolo_vinciano', function () {
            return Inertia::render('Lombardia/Visite/Cenacolo_Vinciano');
        })->middleware(['auth', 'verified'])->name('cenacolo_vinciano');

        Route::get('/visite/milano/museo_nazionale_della_scienza_e_della_tecnologia_leonardo_da_vinci', function () {
            return Inertia::render('Lombardia/Visite/Museo_Nazionale_della_scienza_e_della_tecnologia_Leonrdo_da_Vinci');
        })->middleware(['auth', 'verified'])->name('museo_nazionale_della_scienza_e_della_tecnologia_leonardo_da_vinci');

        Route::get('/visite/milano/museo_civico_di_storia_naturale', function () {
            return Inertia::render('Lombardia/Visite/Museo_civico_di_storia_naturale');
        })->middleware(['auth', 'verified'])->name('museo_civico_di_storia_naturale');

        Route::get('/visite/milano/cimitero_monumentale', function () {
            return Inertia::render('Lombardia/Visite/Cimitero_Monumentale');
        })->middleware(['auth', 'verified'])->name('cimitero_monumentale');

        Route::get('/visite/milano/dolce_e_gabbana', function () {
            return Inertia::render('Lombardia/Visite/Dolce_e_Gabbana');
        })->middleware(['auth', 'verified'])->name('dolce_e_gabbana');

        Route::get('/visite/milano/museo_teatrale_alla_scala', function () {
            return Inertia::render('Lombardia/Visite/Museo_teatrale_alla_scala');
        })->middleware(['auth', 'verified'])->name('museo_teatrale_alla_scala');

        Route::get('/visite/milano/fondazione_prada', function () {
            return Inertia::render('Lombardia/Visite/Fondazione_Prada');
        })->middleware(['auth', 'verified'])->name('fondazione_prada');
    /*Fine Milano*/
    /*Inizio Brescia*/
        Route::get('/destinazioni/lombardia/brescia', function () {
            return Inertia::render('Lombardia/Destinazioni/Brescia');
        })->middleware(['auth', 'verified'])->name('brescia');

        Route::get('/visite/brescia/castello_di_brescia', function () {
            return Inertia::render('Lombardia/Visite/Castello_di_Brescia');
        })->middleware(['auth', 'verified'])->name('castello_di_brescia');

        Route::get('/visite/brescia/museo_di_santa_giulia', function () {
            return Inertia::render('Lombardia/Visite/Museo_di_Santa_Giulia');
        })->middleware(['auth', 'verified'])->name('museo_di_santa_giulia');

        Route::get('/visite/brescia/palazzo_martinengo_di_brescia', function () {
            return Inertia::render('Lombardia/Visite/Palazzo_Martinengo_di_Brescia');
        })->middleware(['auth', 'verified'])->name('palazzo_martinengo_di_brescia');

        Route::get('/visite/brescia/piazza_arnaldo', function () {
            return Inertia::render('Lombardia/Visite/Piazza_Arnaldo');
        })->middleware(['auth', 'verified'])->name('piazza_arnaldo');
    /*Fine Brescia*/
    /*Inizio Bergamo*/
        Route::get('/destinazioni/bergamo', function () {
            return Inertia::render('Lombardia/Destinazioni/Bergamo');
        })->middleware(['auth', 'verified'])->name('bergamo');

        Route::get('/visite/bergamo/piazza_mercato_delle_scarpe', function () {
            return Inertia::render('Lombardia/Visite/Piazza_Mercato_delle_scarpe');
        })->middleware(['auth', 'verified'])->name('piazza_mercato_delle_scarpe');

        Route::get('/visite/bergamo/piazza_vecchia', function () {
            return Inertia::render('Lombardia/Visite/Piazza_Vecchia');
        })->middleware(['auth', 'verified'])->name('piazza_vecchia');

        Route::get('/visite/bergamo/palazzo_della_regione', function () {
            return Inertia::render('Lombardia/Visite/Palazzo_della_Regione');
        })->middleware(['auth', 'verified'])->name('palazzo_della_regione');

        Route::get('/visite/bergamo/museo_e_tesoro_della_cattedrale', function () {
            return Inertia::render('Lombardia/Visite/Museo_e_Tesoro_della_Cattedrale');
        })->middleware(['auth', 'verified'])->name('museo_e_tesoro_della_cattedrale');
    
        Route::get('/visite/bergamo/accademia_carrara', function () {
            return Inertia::render('Lombardia/Visite/Accademia_Carrara');
        })->middleware(['auth', 'verified'])->name('accademia_carrara');
    
        Route::get('/visite/bergamo/palazzo_e_giardini_moroni', function () {
            return Inertia::render('Lombardia/Visite/Palazzo_e_Giardini_Moroni');
        })->middleware(['auth', 'verified'])->name('palazzo_e_giardini_moroni');
    
        Route::get('/visite/bergamo/cappella_colleoni', function () {
            return Inertia::render('Lombardia/Visite/Cappella_Colleoni');
        })->middleware(['auth', 'verified'])->name('cappella_colleoni');
    /*Fine Bergamo*/
/*Fine Lombardia */

/*Inizio Liguria*/
    Route::get('/liguria', function () {
        return Inertia::render('Liguria');
    })->middleware(['auth', 'verified'])->name('liguria');

    Route::get('/destinazioni/liguria/genova', function () {
        return Inertia::render('Liguria/Destinazioni/Genova');
    })->middleware(['auth', 'verified'])->name('genova');

    /*Inizio Genova*/
        Route::get('/visite/genova/acquario_di_genova', function () {
            return Inertia::render('Liguria/Visite/Acquario_di_Genova');
        })->middleware(['auth', 'verified'])->name('acquario_di_genova');

        Route::get('/visite/genova/lanterna_di_genova', function () {
            return Inertia::render('Liguria/Visite/Lanterna_di_Genova');
        })->middleware(['auth', 'verified'])->name('lanterna_di_genova');

        Route::get('/visite/genova/museo_di_palazzo_reale', function () {
            return Inertia::render('Liguria/Visite/Museo_di_Palazzo_Reale');
        })->middleware(['auth', 'verified'])->name('museo_di_palazzo_reale');

        Route::get('/visite/genova/palazzo_ducale_di_genova', function () {
            return Inertia::render('Liguria/Visite/Palazzo_ducale_di_Genova');
        })->middleware(['auth', 'verified'])->name('palazzo_ducale_di_genova');
        
        /*Inizio Palazzo Ducale di Genova*/
            Route::get('/visite/genova/palazzo_ducale_di_genova/facciata_piazza_matteotti', function () {
                return Inertia::render('Liguria/Visite/Palazzo_ducale_di_Genova/Facciata_piazza_Matteotti');
            })->middleware(['auth', 'verified'])->name('facciata_piazza_matteotti');

            Route::get('/visite/genova/palazzo_ducale_di_genova/la_torre_e_le_carceri', function () {
                return Inertia::render('Liguria/Visite/Palazzo_ducale_di_Genova/La_torre_e_le_carceri');
            })->middleware(['auth', 'verified'])->name('la_torre_e_le_carceri');

            Route::get('/visite/genova/palazzo_ducale_di_genova/i_saloni', function () {
                return Inertia::render('Liguria/Visite/Palazzo_ducale_di_Genova/I_Saloni');
            })->middleware(['auth', 'verified'])->name('i_saloni');

            Route::get('/visite/genova/palazzo_ducale_di_genova/la_cappella', function () {
                return Inertia::render('Liguria/Visite/Palazzo_ducale_di_Genova/La_Cappella');
            })->middleware(['auth', 'verified'])->name('la_cappella');
        /*Fine Palazzo Ducale di Genova*/

        Route::get('/visite/genova/villa_durazzo_pallavicini', function () {
            return Inertia::render('Liguria/Visite/Villa_Durazzo_Pallavicini');
        })->middleware(['auth', 'verified'])->name('villa_durazzo_pallavicini');

        Route::get('/visite/genova/cimitero_monumentale_di_staglieno', function () {
            return Inertia::render('Liguria/Visite/Cimitero_Monumentale_di_Staglieno');
        })->middleware(['auth', 'verified'])->name('cimitero_monumentale_di_staglieno');
        
        Route::get('/visite/genova/palazzo_della_meridiana_di_genova', function () {
            return Inertia::render('Liguria/Visite/Palazzo_della_Meridiana');
        })->middleware(['auth', 'verified'])->name('palazzo_della_meridiana_di_genova');
        
        Route::get('/visite/genova/l_ascensore_castello_d_albertis_montegalletto', function () {
            return Inertia::render('Liguria/Visite/Ascensore_Castello_d_Albertis_Montegalletto');
        })->middleware(['auth', 'verified'])->name('l_ascensore_castello_d_albertis_montegalletto');
        
        Route::get('/visite/genova/truogoli_di_santa_brigida', function () {
            return Inertia::render('Liguria/Visite/Truogoli_di_Santa_Brigida');
        })->middleware(['auth', 'verified'])->name('truogoli_di_santa_brigida');
        
        Route::get('/visite/genova/quartiere_del_carmine', function () {
            return Inertia::render('Liguria/Visite/Quartiere_del_Carmine');
        })->middleware(['auth', 'verified'])->name('quartiere_del_carmine');

        Route::get('/visite/genova/ascensore_spianata_castelletto', function () {
            return Inertia::render('Liguria/Visite/Ascensore_Spianata_Castelletto');
        })->middleware(['auth', 'verified'])->name('ascensore_spianata_castelletto');

        Route::get('/visite/genova/porto_antico_di_genova', function () {
            return Inertia::render('Liguria/Visite/Porto_Antico_di_Genova');
        })->middleware(['auth', 'verified'])->name('porto_antico_di_genova');

        Route::get('/visite/genova/chiesa_del_gesu', function () {
            return Inertia::render('Liguria/Visite/Chiesa_di_Gesu');
        })->middleware(['auth', 'verified'])->name('chiesa_del_gesu');
    /*Fine Genova*/

    Route::get('/destinazioni/liguria/savona', function () {
        return Inertia::render('Liguria/Destinazioni/Savona');
    })->middleware(['auth', 'verified'])->name('savona');

    /*Inizio Savona*/

        Route::get('/visite/liguria/savona/porto_di_savona', function () {
            return Inertia::render('Liguria/Visite/Porto_di_Savona');
        })->middleware(['auth', 'verified'])->name('porto_di_savona');

    /*Fine Savona*/

    Route::get('/destinazioni/liguria/la_spezia', function () {
        return Inertia::render('Liguria/Destinazioni/La_Spezia');
    })->middleware(['auth', 'verified'])->name('la_spezia');

    Route::get('/destinazioni/liguria/camogli', function () {
        return Inertia::render('Liguria/Destinazioni/Camogli');
    })->middleware(['auth', 'verified'])->name('camogli');


    /*Inizio Camogli*/
        Route::get('/visite/liguria/camongli/golfo_paradiso', function () {
            return Inertia::render('Liguria/Visite/Golfo_Paradiso');
        })->middleware(['auth', 'verified'])->name('golfo_paradiso');

        Route::get('/visite/liguria/camongli/castello_della_dragonaria', function () {
            return Inertia::render('Liguria/Visite/Castello_della_Dragonaria');
        })->middleware(['auth', 'verified'])->name('castello_della_dragonaria');
        
        Route::get('/visite/liguria/camongli/museo_marinaro', function () {
            return Inertia::render('Liguria/Visite/Museo_Marinaro');
        })->middleware(['auth', 'verified'])->name('museo_marinaro');
    /*Fine Camogli*/

    Route::get('/destinazioni/liguria/golfo_del_tigullio', function () {
        return Inertia::render('Liguria/Destinazioni/Golfo_del_Tigullio');
    })->middleware(['auth', 'verified'])->name('golfo_del_tigullio');
    
    /*Inizio Golfo del Tigullio*/
        
    /*Fine Golfo del Tigullio*/

    Route::get('/visite/liguria/abbazia_di_san_fruttuoso', function () {
        return Inertia::render('Liguria/Visite/Abbazia_di_San_Fruttuoso');
    })->middleware(['auth', 'verified'])->name('abbazia_di_san_fruttuoso');

    /*Inizio Abbazia di San Fruttuoso*/

    /*Fine Abbazia di San Fruttuoso*/

    Route::get('/visite/liguria/baia_di_san_fruttuoso', function () {
        return Inertia::render('Liguria/Visite/Baia_di_San_Fruttuoso');
    })->middleware(['auth', 'verified'])->name('baia_di_san_fruttuoso');

    Route::get('/destinazioni/liguria/recco', function () {
        return Inertia::render('Liguria/Destinazioni/Recco');
    })->middleware(['auth', 'verified'])->name('recco');

    Route::get('/visite/liguria/paraggi/baia_di_paraggi', function () {
        return Inertia::render('Liguria/Visite/Baia_di_Paraggi');
    })->middleware(['auth', 'verified'])->name('baia_di_paraggi');


    /*Inizio Portofino*/
        Route::get('/destinazioni/liguria/portofino', function () {
            return Inertia::render('Liguria/Destinazioni/Portofino');
        })->middleware(['auth', 'verified'])->name('portofino');
    /*Fine Portofino*/

    /*Inizio Mar Ligure*/
        Route::get('/mare/liguria/mar_ligure', function () {
            return Inertia::render('Mare/Mar_Ligure');
        })->middleware(['auth', 'verified'])->name('mar_ligure');
    /*Fine Mar Ligure*/

    /*Inizio le Cinque Terre*/
        Route::get('/destinazioni/liguria/cinque_terre', function () {
            return Inertia::render('Liguria/Destinazioni/Cinque_Terre');
        })->middleware(['auth', 'verified'])->name('cinque_terre');

        Route::get('/borghi/liguria/cinque_terre', function () {
            return Inertia::render('Liguria/Visite/Cinque_Terre_Borghi');
        })->middleware(['auth', 'verified'])->name('cinque_terre');
    /*Fine Le Cinque Terre*/

/*Fine Liguria*/

/*Inizio Trentino Alto Adige*/
    Route::get('/trentino_alto_adige', function () {
        return Inertia::render('Trentino_Alto_Adige');
    })->middleware(['auth', 'verified'])->name('trentino_alto_adige');

    Route::get('/destinazioni/trento', function () {
        return Inertia::render('Trentino_Alto_Adige/Destinazioni/Trento');
    })->middleware(['auth', 'verified'])->name('trento');
    /*Inizio Trento*/
        Route::get('/visite/trento/castello_del_buonconsiglio', function () {
            return Inertia::render('Trentino_Alto_Adige/Visite/Castello_del_Buonconsiglio');
        })->middleware(['auth', 'verified'])->name('trento');

        Route::get('/visite/trento/tridentum', function () {
            return Inertia::render('Trentino_Alto_Adige/Visite/Tridentum');
        })->middleware(['auth', 'verified'])->name('tridentum');

        Route::get('/visite/trento/museo_diocesano_tridentino', function () {
            return Inertia::render('Trentino_Alto_Adige/Visite/Museo_Diocesano_Tridentino');
        })->middleware(['auth', 'verified'])->name('museo_diocesano_tridentino');

        Route::get('/visite/trento/museo_delle_scienze', function () {
            return Inertia::render('Trentino_Alto_Adige/Visite/MUSE');
        })->middleware(['auth', 'verified'])->name('museo_delle_scienze');

        Route::get('/visite/trento/piazza_del_duomo', function () {
            return Inertia::render('Trentino_Alto_Adige/Visite/Piazza_del_Duomo');
        })->middleware(['auth', 'verified'])->name('piazza_del_duomo');

        Route::get('/visite/trento/cappella_del_crocifisso', function () {
            return Inertia::render('Trentino_Alto_Adige/Visite/Cappella_del_Crocifisso');
        })->middleware(['auth', 'verified'])->name('cappella_del_crocifisso');

        Route::get('/visite/trento/concilio', function () {
            return Inertia::render('Trentino_Alto_Adige/Visite/Concilio');
        })->middleware(['auth', 'verified'])->name('concilio');

        Route::get('/visite/trento/palazzo_cazuffi', function () {
            return Inertia::render('Trentino_Alto_Adige/Visite/Palazzo_Cazuffi');
        })->middleware(['auth', 'verified'])->name('palazzo_cazuffi');

        Route::get('/visite/trento/torre_civica', function () {
            return Inertia::render('Trentino_Alto_Adige/Visite/Torre_Civica');
        })->middleware(['auth', 'verified'])->name('torre_civica');

        Route::get('/visite/trento/fontana_di_nettuno', function () {
            return Inertia::render('Trentino_Alto_Adige/Visite/Fontana_di_Nettuno');
        })->middleware(['auth', 'verified'])->name('fontana_di_nettuno');

        Route::get('/laghi/lago_di_garda', function () {
            return Inertia::render('Laghi/Lago_di_Garda');
        })->middleware(['auth', 'verified'])->name('lago_di_garda');

        Route::get('/montagna/monte_bondone', function () {
            return Inertia::render('Montagna/Monte_Bondone');
        })->middleware(['auth', 'verified'])->name('monte_bondone');

        Route::get('/fiumi/fiume_adige', function () {
            return Inertia::render('Fiumi/Fiume_Adige');
        })->middleware(['auth', 'verified'])->name('fiume_adige');
    /*Fine Trento*/
    /*Inizio Rovereto*/
        Route::get('/destinazioni/rovereto', function () {
            return Inertia::render('Trentino_Alto_Adige/Destinazioni/Rovereto');
        })->middleware(['auth', 'verified'])->name('rovereto');

        Route::get('/visite/rovereto/mart_museo_di_arte_moderna_e_contemporanea', function () {
            return Inertia::render('Trentino_Alto_Adige/Visite/Mart');
        })->middleware(['auth', 'verified'])->name('mart_museo_di_arte_moderna_e_contemporanea');
    /*Fine Rovereto*/
/*Fine Trentino Alto Adige*/

/*Inizio Veneto*/
    Route::get('/veneto', function () {
        return Inertia::render('Veneto');
    })->middleware(['auth', 'verified'])->name('veneto');

    Route::get('/destinazioni/venezia', function () {
        return Inertia::render('Veneto/Destinazioni/Venezia');
    })->middleware(['auth', 'verified'])->name('venezia');
    /*Inizio Venezia*/
        Route::get('/visite/venezia/basilica_di_san_marco', function () {
            return Inertia::render('Veneto/Visite/Basilica_di_San_Marco');
        })->middleware(['auth', 'verified'])->name('basilica_di_san_marco');

        Route::get('/visite/venezia/palazzo_ducale', function () {
            return Inertia::render('Veneto/Visite/Palazzo_Ducale');
        })->middleware(['auth', 'verified'])->name('palazzo_ducale');

        Route::get('/visite/venezia/peggy_guggenheim_collection', function () {
            return Inertia::render('Veneto/Visite/Peggy_Guggenheim_Collection');
        })->middleware(['auth', 'verified'])->name('peggy_guggenheim_collection');

        Route::get('/visite/venezia/il_ghetto', function () {
            return Inertia::render('Veneto/Visite/Il_Ghetto');
        })->middleware(['auth', 'verified'])->name('il_ghetto');

        Route::get('/visite/venezia/ponte_di_rialto', function () {
            return Inertia::render('Veneto/Visite/Ponte_di_Rialto');
        })->middleware(['auth', 'verified'])->name('ponte_di_rialto');

        Route::get('/visite/venezia/punta_della_dogana', function () {
            return Inertia::render('Veneto/Visite/Punta_della_Dogana');
        })->middleware(['auth', 'verified'])->name('punta_della_dogana');

        Route::get('/visite/venezia/ca_d_oro', function () {
            return Inertia::render('Veneto/Visite/Ca_d_Oro');
        })->middleware(['auth', 'verified'])->name('ca_d_oro');
    /*Fine Venezia*/
/*Fine Veneto*/

/*Inizio Emilia-Romagna*/
    Route::get('/emilia_romagna', function () {
        return Inertia::render('Emilia_Romagna');
    })->middleware(['auth', 'verified'])->name('emilia_romagna');

    Route::get('/destinazioni/emilia_romagna/bologna', function () {
        return Inertia::render('Emilia_Romagna/Destinazioni/Bologna');
    })->middleware(['auth', 'verified'])->name('bologna');
    /*Inizio Bologna*/
        Route::get('/visite/bologna/basilica_di_san_petronio', function () {
            return Inertia::render('Emilia_Romagna/Visite/Basilica_di_San_Petronio');
        })->middleware(['auth', 'verified'])->name('basilica_di_san_petronio');

        Route::get('/visite/bologna/piazza_maggiore', function () {
            return Inertia::render('Emilia_Romagna/Visite/Piazza_Maggiore');
        })->middleware(['auth', 'verified'])->name('piazza_maggiore');

        Route::get('/visite/bologna/le_due_torri', function () {
            return Inertia::render('Emilia_Romagna/Visite/Le_Due_Torri');
        })->middleware(['auth', 'verified'])->name('le_due_torri');

        Route::get('/visite/bologna/mambo', function () {
            return Inertia::render('Emilia_Romagna/Visite/Mambo');
        })->middleware(['auth', 'verified'])->name('mambo');

        Route::get('/visite/bologna/antico_mercatio_di_bologna', function () {
            return Inertia::render('Emilia_Romagna/Visite/Antico_Mercato_di_Bologna');
        })->middleware(['auth', 'verified'])->name('antico_mercato_di_bologna');

        Route::get('/visite/bologna/archiginnasio', function () {
            return Inertia::render('Emilia_Romagna/Visite/Archiginnasio');
        })->middleware(['auth', 'verified'])->name('archiginnasio');

        Route::get('/visite/bologna/pinacoteca_nazionale', function () {
            return Inertia::render('Emilia_Romagna/Visite/Pinacoteca_Nazionale');
        })->middleware(['auth', 'verified'])->name('pinacoteca_nazionale');

        Route::get('/visite/bologna/piazza_santo_stefano', function () {
            return Inertia::render('Emilia_Romagna/Visite/Piazza_Santo_Stefano');
        })->middleware(['auth', 'verified'])->name('piazza_santo_stefano');

        Route::get('/visite/bologna/certosa_di_bologna', function () {
            return Inertia::render('Emilia_Romagna/Visite/Certosa_di_Bologna');
        })->middleware(['auth', 'verified'])->name('certosa_di_bologna');

        Route::get('/visite/bologna/museo_civico_medievale', function () {
            return Inertia::render('Emilia_Romagna/Visite/Museo_Civico_Medievale');
        })->middleware(['auth', 'verified'])->name('museo_civico_medievale');
    /*Fine Bologna*/
/*Fine Emilia-Romagna*/

/*Inizio Friuli Venezia Giulia*/
    Route::get('/friuli_venezia_giulia', function () {
        return Inertia::render('Friuli_Venezia_Giulia');
    })->middleware(['auth', 'verified'])->name('friuli_venezia_giulia');
    
    Route::get('/destinazioni/trieste', function () {
        return Inertia::render('Friuli_Venezia_Giulia/Destinazioni/Trieste');
    })->middleware(['auth', 'verified'])->name('trieste');
    /*Inizio Trieste*/
        Route::get('/visite/trieste/risiera_di_san_sabba', function () {
            return Inertia::render('Friuli_Venezia_Giulia/Visite/Risiera_di_San_Sabba');
        })->middleware(['auth', 'verified'])->name('risiera_di_san_sabba');

        Route::get('/visite/trieste/museo_revoltella', function () {
            return Inertia::render('Friuli_Venezia_Giulia/Visite/Museo_Revoltella');
        })->middleware(['auth', 'verified'])->name('museo_revoltella');

        Route::get('/visite/trieste/castello_di_san_giusto', function () {
            return Inertia::render('Friuli_Venezia_Giulia/Visite/Castello_di_San_Giusto');
        })->middleware(['auth', 'verified'])->name('castello_di_san_giusto');

        Route::get('/visite/trieste/castello_di_miramare', function () {
            return Inertia::render('Friuli_Venezia_Giulia/Visite/Castello_di_Miramare');
        })->middleware(['auth', 'verified'])->name('castello_di_miramare');

        Route::get('/visite/trieste/teatro_romano', function () {
            return Inertia::render('Friuli_Venezia_Giulia/Visite/Teatro_Romano');
        })->middleware(['auth', 'verified'])->name('teatro_romano');
    /*Fine Trieste*/
/*Fine Friuli Venezia Giulia*/

/*Inizio Toscana*/
    Route::get('/toscana', function () {
        return Inertia::render('Toscana');
    })->middleware(['auth', 'verified'])->name('toscana');

    Route::get('/destinazioni/toscana/firenze', function () {
        return Inertia::render('Toscana/Destinazioni/Firenze');
    })->middleware(['auth', 'verified'])->name('firenze');
    /*Inizio Firenze*/
        Route::get('/visite/toscana/firenze/duomo', function () {
            return Inertia::render('Toscana/Visite/Duomo_di_Firenze');
        })->middleware(['auth', 'verified'])->name('duomo');

        Route::get('/visite/toscana/firenze/battistero', function () {
            return Inertia::render('Toscana/Visite/Battistero');
        })->middleware(['auth', 'verified'])->name('battistero');

        Route::get('/visite/toscana/firenze/galleria_degli_uffizi', function () {
            return Inertia::render('Toscana/Visite/Galleria_degli_Uffizi');
        })->middleware(['auth', 'verified'])->name('galleria_degli_uffizi');

        Route::get('/visite/toscana/firenze/ponte_vecchio', function () {
            return Inertia::render('Toscana/Visite/Ponte_Vecchio');
        })->middleware(['auth', 'verified'])->name('ponte_vecchio');

        Route::get('/visite/toscana/firenze/palazzo_vecchio', function () {
            return Inertia::render('Toscana/Visite/Palazzo_Vecchio');
        })->middleware(['auth', 'verified'])->name('palazzo_vecchio');

        Route::get('/visite/toscana/firenze/palazzo_pitti', function () {
            return Inertia::render('Toscana/Visite/Palazzo_Pitti');
        })->middleware(['auth', 'verified'])->name('palazzo_pitti');

        Route::get('/visite/toscana/firenze/basilica_di_santa_croce', function () {
            return Inertia::render('Toscana/Visite/Basilica_di_Santa_Croce');
        })->middleware(['auth', 'verified'])->name('basilica_di_santa_croce');

        Route::get('/visite/toscana/firenze/basilica_di_santa_maria_del_carmine', function () {
            return Inertia::render('Toscana/Visite/Basilica_di_Santa_Maria_del_Carmine');
        })->middleware(['auth', 'verified'])->name('basilica_di_santa_maria_del_carmine');

        Route::get('/visite/toscana/firenze/cappelle_medicee', function () {
            return Inertia::render('Toscana/Visite/Cappelle_Medicee');
        })->middleware(['auth', 'verified'])->name('cappelle_medicee');

        Route::get('/visite/toscana/firenze/casa_di_dante', function () {
            return Inertia::render('Toscana/Visite/Casa_di_Dante');
        })->middleware(['auth', 'verified'])->name('casa_di_dante');

        Route::get('/visite/toscana/firenze/galleria_dell_accademia', function () {
            return Inertia::render('Toscana/Visite/Galleria_dell_Accademia');
        })->middleware(['auth', 'verified'])->name('galleria_dell_accademia');
    /*Fine Firenze*/
/*Fine Toscana*/

/*Inizio Umbria*/
    Route::get('/umbria', function () {
        return Inertia::render('Umbria');
    })->middleware(['auth', 'verified'])->name('umbria');

    Route::get('/destinazioni/umbria/perugia', function () {
        return Inertia::render('Umbria/Destinazioni/Perugia');
    })->middleware(['auth', 'verified'])->name('perugia');
    /*Inizio Perugia*/
        Route::get('/visite/umbria/perugia/perugina', function () {
            return Inertia::render('Umbria/Visite/Perugina');
        })->middleware(['auth', 'verified'])->name('perugina');
    /*Fine Perugia*/
/*Fine Umbria*/

/*Inizio Marche*/
    Route::get('/marche', function () {
        return Inertia::render('Marche');
    })->middleware(['auth', 'verified'])->name('marche');

    Route::get('/destinazioni/marche/ancona', function () {
        return Inertia::render('Marche/Destinazioni/Ancona');
    })->middleware(['auth', 'verified'])->name('ancona');
    /*Inizio Ancona*/
        Route::get('/visite/marche/ancona/museo_archeologico_nazionale_delle_marche', function () {
            return Inertia::render('Marche/Visite/Museo_Archeologico_Nazionale_delle_Marche');
        })->middleware(['auth', 'verified'])->name('museo_archeologico_nazionale_delle_marche');
    /*Fine Ancona*/
/*Fine Marche*/

/*Inizio Lazio*/
    Route::get('/lazio', function () {
        return Inertia::render('Lazio');
    })->middleware(['auth', 'verified'])->name('lazio');

    Route::get('/destinazioni/lazio/roma', function () {
        return Inertia::render('Lazio/Destinazioni/Roma');
    })->middleware(['auth', 'verified'])->name('roma');
    /*Inizio Roma*/
        Route::get('/visite/lazio/roma/colosseo', function () {
            return Inertia::render('Lazio/Visite/Colosseo');
        })->middleware(['auth', 'verified'])->name('colosseo');
    /*Fine Roma*/
/*Fine Lazio*/

/*Inizio Abruzzo*/
    Route::get('/abruzzo', function () {
        return Inertia::render('Abruzzo');
    })->middleware(['auth', 'verified'])->name('abruzzo');

    Route::get('/destinazioni/abruzzo/l_aquila', function () {
        return Inertia::render('Abruzzo/Destinazioni/L_Aquila');
    })->middleware(['auth', 'verified'])->name('l_aquila');
    /*Inizio L'Aquila*/
        Route::get('/visite/abruzzo/l_aquila/anfiteatro_romano_di_amiternum', function () {
            return Inertia::render('Abruzzo/Visite/Anfiteatro_Romano_di_Amiternum');
        })->middleware(['auth', 'verified'])->name('anfiteatro_romano_di_amiternum');

        Route::get('/visite/abruzzo/l_aquila/basilica_di_san_bernardino', function () {
            return Inertia::render('Abruzzo/Visite/Basilica_di_San_Bernardino');
        })->middleware(['auth', 'verified'])->name('basilica_di_san_bernardino');
    /*Fine L'Aquila*/
/*Fine Abruzzo*/

/*Inizio Molise*/
    Route::get('/molise', function () {
        return Inertia::render('Molise');
    })->middleware(['auth', 'verified'])->name('molise');

    Route::get('/destinazioni/molise/campobasso', function () {
        return Inertia::render('Molise/Destinazioni/Campobasso');
    })->middleware(['auth', 'verified'])->name('campobasso');
    /*Inizio Campobasso*/
        Route::get('/visite/molise/campobasso/castello_monforte', function () {
            return Inertia::render('Molise/Visite/Castello_Monforte');
        })->middleware(['auth', 'verified'])->name('castello_monforte');

        Route::get('/visite/molise/campobasso/museo_dei_misteri', function () {
            return Inertia::render('Molise/Visite/Museo_dei_Misteri');
        })->middleware(['auth', 'verified'])->name('museo_dei_misteri');

        Route::get('/visite/molise/campobasso/museo_di_palazzo_pistilli', function () {
            return Inertia::render('Molise/Visite/Museo_di_Palazzo_Pistilli');
        })->middleware(['auth', 'verified'])->name('museo_di_palazzo_pistilli');

        Route::get('/visite/molise/campobasso/museo_della_scuola_e_dell_educazione_popolare', function () {
            return Inertia::render('Molise/Visite/Museo_della_Scuola_e_dell_Educazione_Popolare');
        })->middleware(['auth', 'verified'])->name('museo_della_scuola_e_dell_educazione_popolare');

        Route::get('/visite/molise/campobasso/museo_internazione_del_pesepio_in_miniatura', function () {
            return Inertia::render('Molise/Visite/Museo_internazionale_del_Presepio_in_Miniatura');
        })->middleware(['auth', 'verified'])->name('museo_internazione_del_pesepio_in_miniatura');

        Route::get('/visite/molise/campobasso/museo_sannitico', function () {
            return Inertia::render('Molise/Visite/Museo_Sannitico');
        })->middleware(['auth', 'verified'])->name('museo_sannitico');
    /*Fine Campobasso*/
/*Fine Molise*/

/*Inizio Campania*/
    Route::get('/campania', function () {
        return Inertia::render('Campania');
    })->middleware(['auth', 'verified'])->name('campania');

    Route::get('/destinazioni/campania/napoli', function () {
        return Inertia::render('Campania/Destinazioni/Napoli');
    })->middleware(['auth', 'verified'])->name('napoli');
    /*Inizio Napoli*/
        Route::get('/visite/campania/napoli/duomo', function () {
            return Inertia::render('Campania/Visite/Duomo_di_Napoli');
        })->middleware(['auth', 'verified'])->name('duomo');

        Route::get('/visite/campania/napoli/piazza_del_plebiscito', function () {
            return Inertia::render('Campania/Visite/Piazza_del_Plebiscito');
        })->middleware(['auth', 'verified'])->name('piazza_del_plebiscito');

        Route::get('/visite/campania/napoli/basilica_di_santa_chiara', function () {
            return Inertia::render('Campania/Visite/Basilica_di_Santa_Chiara');
        })->middleware(['auth', 'verified'])->name('basilica_di_santa_chiara');

        Route::get('/visite/campania/napoli/palazzo_reale', function () {
            return Inertia::render('Campania/Visite/Palazzo_Reale');
        })->middleware(['auth', 'verified'])->name('palazzo_reale');

        Route::get('/visite/campania/napoli/basilica_di_san_lorenzo_maggiore', function () {
            return Inertia::render('Campania/Visite/Basilica_di_San_Lorenzo_Maggiore');
        })->middleware(['auth', 'verified'])->name('basilica_di_san_lorenzo_maggiore');

        Route::get('/visite/campania/napoli/teatro_san_carlo', function () {
            return Inertia::render('Campania/Visite/Teatro_San_Carlo');
        })->middleware(['auth', 'verified'])->name('teatro_san_carlo');

        Route::get('/visite/campania/napoli/galleria_umberto_1', function () {
            return Inertia::render('Campania/Visite/Galleria_Umberto_I');
        })->middleware(['auth', 'verified'])->name('galleria_umberto_1');

        Route::get('/visite/campania/napoli/castel_nuovo', function () {
            return Inertia::render('Campania/Visite/Castel_Nuovo');
        })->middleware(['auth', 'verified'])->name('castel_nuovo');

        Route::get('/visite/campania/napoli/castel_dell_ovo', function () {
            return Inertia::render('Campania/Visite/Castel_dell_Ovo');
        })->middleware(['auth', 'verified'])->name('castel_dell_ovo');

        Route::get('/visite/campania/napoli/vesuvio', function () {
            return Inertia::render('Campania/Visite/Vesuvio');
        })->middleware(['auth', 'verified'])->name('vesuvio');

        Route::get('/visite/campania/napoli/catacombe_di_san_gennaro', function () {
            return Inertia::render('Campania/Visite/Catacombe_di_San_Gennaro');
        })->middleware(['auth', 'verified'])->name('catacombe_di_san_gennaro');
    /*Fine Napoli*/
/*Fine Campania*/
        
/*Inizio Basilicata*/
    Route::get('/basilicata', function () {
        return Inertia::render('Basilicata');
    })->middleware(['auth', 'verified'])->name('basilicata');

    Route::get('/destinazioni/basilicata/matera', function () {
        return Inertia::render('Basilicata/Destinazioni/Matera');
    })->middleware(['auth', 'verified'])->name('matera');
    /*Inizio Matara*/
        Route::get('/visite/basilicata/matera/casa_grotta_nei_sassi_di_matera', function () {
            return Inertia::render('Basilicata/Visite/Casa_Grotta_nei_Sassi_di_Matera');
        })->middleware(['auth', 'verified'])->name('casa_grotta_nei_sassi_di_matera');

        Route::get('/visite/basilicata/matera/punti_panoramici', function () {
            return Inertia::render('Basilicata/Visite/Punti_Panoramici');
        })->middleware(['auth', 'verified'])->name('punti_panoramici');

        Route::get('/visite/basilicata/matera/belvedere_di_murgia_timone', function () {
            return Inertia::render('Basilicata/Visite/Belvedere_Murgia_Timone');
        })->middleware(['auth', 'verified'])->name('belvedere_di_murgia_timone');

        Route::get('/montagna/basilicata/parco_della_murgia', function () {
            return Inertia::render('Montagna/Parco_della_Murgia');
        })->middleware(['auth', 'verified'])->name('parco_della_murgia');
    /*Fine Matara*/
/*Fine Basilicata*/

/*Inizio Puglia*/
    Route::get('/puglia', function () {
        return Inertia::render('Puglia');
    })->middleware(['auth', 'verified'])->name('puglia');

    Route::get('/destinazioni/puglia/bari', function () {
        return Inertia::render('Puglia/Destinazioni/Bari');
    })->middleware(['auth', 'verified'])->name('bari');
    /*Inizio Bari*/
        Route::get('/visite/puglia/bari/castello_normanno_svevo', function () {
            return Inertia::render('Puglia/Visite/Castello_Normanno_Svevo');
        })->middleware(['auth', 'verified'])->name('castello_normanno_svevo');

        Route::get('/visite/puglia/bari/basilica_di_san_nicola', function () {
            return Inertia::render('Puglia/Visite/Basilica_di_San_Nicola');
        })->middleware(['auth', 'verified'])->name('basilica_di_san_nicola');

        Route::get('/visite/puglia/bari/grotte_di_castellana', function () {
            return Inertia::render('Puglia/Visite/Grotte_di_Castellana');
        })->middleware(['auth', 'verified'])->name('grotte_di_castellana');
    /*Fine Bari*/
/*Fine Puglia*/

/*Inizio Calabria*/
    Route::get('/calabria', function () {
        return Inertia::render('Calabria');
    })->middleware(['auth', 'verified'])->name('calabria');

    Route::get('/destinazioni/calabria/catanzaro', function () {
        return Inertia::render('Calabria/Destinazioni/Catanzaro');
    })->middleware(['auth', 'verified'])->name('catanzaro');
    /*Inizio Catanzaro*/
        Route::get('/visite/calabria/catanzaro/duomo_di_catanzaro', function () {
            return Inertia::render('Calabria/Visite/Duomo_di_Catanzaro');
        })->middleware(['auth', 'verified'])->name('duomo_di_catanzaro');

        Route::get('/visite/calabria/catanzaro/basilica_dell_immacolata', function () {
            return Inertia::render('Calabria/Visite/Basilica_dell_Immacolata');
        })->middleware(['auth', 'verified'])->name('basilica_dell_immacolata');

        Route::get('/visite/calabria/catanzaro/ponte_bisantis', function () {
            return Inertia::render('Calabria/Visite/Ponte_Bisantis');
        })->middleware(['auth', 'verified'])->name('ponte_bisantis');

        Route::get('/visite/calabria/catanzaro/complesso_monumentale_san_giovanni', function () {
            return Inertia::render('Calabria/Visite/Complesso_Monumentale_San_Giovanni');
        })->middleware(['auth', 'verified'])->name('complesso_monumentale_san_giovanni');

        Route::get('/visite/calabria/catanzaro/teatro_politeama', function () {
            return Inertia::render('Calabria/Visite/Teatro_Politeama');
        })->middleware(['auth', 'verified'])->name('teatro_politeama');
/*Inizio Calabria*/

/*Inizio Sicilia*/
    Route::get('/sicilia', function () {
        return Inertia::render('Sicilia');
    })->middleware(['auth', 'verified'])->name('sicilia');

    Route::get('/destinazioni/sicilia/palermo', function () {
        return Inertia::render('Sicilia/Destinazioni/Palermo');
    })->middleware(['auth', 'verified'])->name('palermo');
    /*Inizia Palermo*/
        Route::get('/visite/sicilia/palermo/palazzo_dei_normanni', function () {
            return Inertia::render('Sicilia/Visite/Palazzo_dei_Normanni');
        })->middleware(['auth', 'verified'])->name('palazzo_dei_normanni');

        Route::get('/visite/sicilia/palermo/teatro_massimo', function () {
            return Inertia::render('Sicilia/Visite/Teatro_Massimo');
        })->middleware(['auth', 'verified'])->name('teatro_massimo');

        Route::get('/visite/sicilia/palermo/cattedrale_di_palermo', function () {
            return Inertia::render('Sicilia/Visite/Cattedrale_di_Palermo');
        })->middleware(['auth', 'verified'])->name('cattedrale_di_palermo');

        Route::get('/visite/sicilia/palermo/santa_maria_dell_ammiraglio', function () {
            return Inertia::render('Sicilia/Visite/Santa_Maria_dell_Ammiraglio');
        })->middleware(['auth', 'verified'])->name('santa_maria_dell_ammiraglio');

        Route::get('/visite/sicilia/palermo/duomo_di_monreale', function () {
            return Inertia::render('Sicilia/Visite/Duomo_di_Monreale');
        })->middleware(['auth', 'verified'])->name('duomo_di_monreale');
    /*Fine Palermo*/
/*Fine Sicilia*/

/*Inizio Sardegna*/
    Route::get('/sardegna', function () {
        return Inertia::render('Sardegna');
    })->middleware(['auth', 'verified'])->name('sardegna');

    Route::get('/destinazioni/sardegna/cagliari', function () {
        return Inertia::render('Sardegna/Destinazioni/Cagliari');
    })->middleware(['auth', 'verified'])->name('cagliari');
    /*Inizia Cagliari*/
        Route::get('/visite/sardegna/cagliari/bastione_saint_remy', function () {
            return Inertia::render('Sardegna/Visite/Bastione_Saint_Remy');
        })->middleware(['auth', 'verified'])->name('bastione_saint_remy');

        Route::get('/visite/sardegna/cagliari/palazzo_civico', function () {
            return Inertia::render('Sardegna/Visite/Palazzo_Civico');
        })->middleware(['auth', 'verified'])->name('palazzo_civico');

        Route::get('/visite/sardegna/cagliari/duomo_di_cagliari', function () {
            return Inertia::render('Sardegna/Visite/Duomo_di_Cagliari');
        })->middleware(['auth', 'verified'])->name('duomo_di_cagliari');

        Route::get('/visite/sardegna/cagliari/torri_di_san_pancrazio_e_dell_elefante', function () {
            return Inertia::render('Sardegna/Visite/Torri_San_Pancrazio_e_dell_Elefante');
        })->middleware(['auth', 'verified'])->name('torri_di_san_pancrazio_e_dell_elefante');

        Route::get('/visite/sardegna/cagliari/parco_di_molentargius_e_saline', function () {
            return Inertia::render('Sardegna/Visite/Parco_di_Molentargius_e_Saline');
        })->middleware(['auth', 'verified'])->name('parco_di_molentargius_e_saline');

        Route::get('/mare/sardegna/cagliari/sella_del_diavolo', function () {
            return Inertia::render('Mare/Sella_del_Diavolo');
        })->middleware(['auth', 'verified'])->name('sella_del_diavolo');

        Route::get('/mare/sardegna/cagliari/spiaggia_del_poetto ', function () {
            return Inertia::render('Mare/Spiaggia_del_Poetto');
        })->middleware(['auth', 'verified'])->name('spiaggia_del_poetto ');
    /*Fine Cagliari*/
/*Fine Sardegna*/
    






























Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
