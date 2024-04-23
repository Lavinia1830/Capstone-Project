<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Mail;

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

        Route::get('/valle_d_aosta/eventi/aosta/fiera_di_sant_orso', function () {
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

        Route::get('/valle_d_aosta/eventi/courmayeur/festa_della_badoche', function () {
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

    Route::get('/destinazioni/valle_d_aosta/cervinia_valtounernche', function () {
        return Inertia::render('Valle_d_Aosta/Destinazioni/Cervinia_Valtournanche');
    })->middleware(['auth', 'verified'])->name('cervinia_valtournanche');

    /*Inizio Cervinia Valtournanche*/

        Route::get('/laghi/valle_d_aosta/lago_blu', function () {
            return Inertia::render('Valle_d_Aosta/Visite/Lago_Blu');
        })->middleware(['auth', 'verified'])->name('lago_blu');

/*Fine Valle d'Aosta*/
    

/* Route::get('/castelli_valle_d_aosta', function () {
    return Inertia::render('Valle_d_Aosta/Castelli_valle_d_aosta');
})->middleware(['auth', 'verified'])->name('castelli_valle_d_aosta');

Route::get('/visite/forte_di_bard', function () {
    return Inertia::render('Valle_d_Aosta/Visite/Forte_di_Bard');
})->middleware(['auth', 'verified'])->name('forte_di_bard');

Route::get('/localita_turistiche', function () {
    return Inertia::render('Valle_d_Aosta/Localita_turistiche');
})->middleware(['auth', 'verified'])->name('localita_turistiche');

Route::get('/territorio', function () {
    return Inertia::render('Valle_d_Aosta/Territorio');
})->middleware(['auth', 'verified'])->name('territorio');

Route::get('/luoghi_visite/il_ponte_romano', function () {
    return Inertia::render('Valle_d_Aosta/Luoghi_visite/Il_ponte_romano');
})->middleware(['auth', 'verified'])->name('il_ponte_romano');

Route::get('/visite/strada_romana_gallie', function () {
    return Inertia::render('Valle_d_Aosta/Visite/Strada_romana_gallie');
})->middleware(['auth', 'verified'])->name('strada_romana_gallie');

Route::get('/luoghi_visite/arco_d_augusto', function () {
    return Inertia::render('Valle_d_Aosta/Luoghi_visite/Arco_d_Augusto');
})->middleware(['auth', 'verified'])->name('arco_d_augusto');

Route::get('/luoghi_visite/porta_praetoria', function () {
    return Inertia::render('Valle_d_Aosta/Luoghi_visite/Porta_praetoria');
})->middleware(['auth', 'verified'])->name('porta_praetoria');

Route::get('/luoghi_visite/teatro_romano_di_aosta', function () {
    return Inertia::render('Valle_d_Aosta/Luoghi_visite/Teatro_romano_di_Aosta');
})->middleware(['auth', 'verified'])->name('teatro_romano_di_aosta');

Route::get('/luoghi_visite/criptoportico_forense', function () {
    return Inertia::render('Valle_d_Aosta/Luoghi_visite/Criptoportico_Forense');
})->middleware(['auth', 'verified'])->name('criptoportico_forense');

Route::get('/luoghi_visite/cinta_muraria', function () {
    return Inertia::render('Valle_d_Aosta/Luoghi_visite/Cinta_muraria');
})->middleware(['auth', 'verified'])->name('cinta_muraria');

Route::get('/luoghi_visite/collegiata_di_sant_orso', function () {
    return Inertia::render('Valle_d_Aosta/Luoghi_visite/Collegiata_di_sant_orso');
})->middleware(['auth', 'verified'])->name('collegiata_di_sant_orso');

Route::get('/luoghi_visite/cattedrale_di_santa_maria_assunta', function () {
    return Inertia::render('Valle_d_Aosta/Luoghi_visite/Cattedrale_di_Santa_Maria_Assunta');
})->middleware(['auth', 'verified'])->name('cattedrale_di_santa_maria_assunta');

Route::get('/luoghi_visite/affreschi_ottoniani', function () {
    return Inertia::render('Valle_d_Aosta/Luoghi_visite/Affreschi_ottoniani');
})->middleware(['auth', 'verified'])->name('affreschi_ottoniani');

Route::get('/gite_scolastiche_scuola_primaria', function () {
    return Inertia::render('Valle_d_Aosta/Gite_scolastiche_scuola_primaria');
})->middleware(['auth', 'verified'])->name('gite_scolastiche_scuola_primaria');

Route::get('/luoghi_visite/basilica_paleocristiana_di_san_lorenzo', function () {
    return Inertia::render('Valle_d_Aosta/Luoghi_visite/Basilica_paleocristiana_S_Lorenzo');
})->middleware(['auth', 'verified'])->name('basilica_paleocristiana_di_san_lorenzo');

Route::get('/articoli/cosa_vedere_ad_aosta_in_un_giorno', function () {
    return Inertia::render('Valle_d_Aosta/Articoli/Cosa_vedere_Aosta_in_un_giorno');
})->middleware(['auth', 'verified'])->name('cosa_vedere_ad_aosta_in_un_giorno');

Route::get('/contatti_guida_turistica_valle_d_aosta', function () {
    return Inertia::render('Valle_d_Aosta/Contatti_guida_turistica_Valle_d_Aosta');
})->middleware(['auth', 'verified'])->name('contatti_guida_turistica_valle_d_aosta');

Route::get('/articoli/cosa_visitare_aosta_romana', function () {
    return Inertia::render('Valle_d_Aosta/Articoli/Cosa_visitare_aosta_romana');
})->middleware(['auth', 'verified'])->name('cosa_visitare_aosta_romana');

Route::get('/articoli/aosta_medievale_tra_spiritualita_e_arte', function () {
    return Inertia::render('Valle_d_Aosta/Articoli/Aosta_medievale_tra_spiritualità_e_arte');
})->middleware(['auth', 'verified'])->name('aosta_medievale_tra_spiritualita_e_arte');

Route::get('/articoli/orari_siti_romani_aosta', function () {
    return Inertia::render('Valle_d_Aosta/Articoli/Orari_siti_romani_Aosta');
})->middleware(['auth', 'verified'])->name('orari_siti_romani_aosta');

Route::get('/visite/ponte_romano_pont_saint_martin', function () {
    return Inertia::render('Valle_d_Aosta/Visite/Ponte_romano_pont_saint_martin');
})->middleware(['auth', 'verified'])->name('ponte_romano_pont_saint_martin');

Route::get('/visite/fiera_sa_orso', function () {
    return Inertia::render('Valle_d_Aosta/Visite/Fiera_di_SantOrso_Aosta');
})->middleware(['auth', 'verified'])->name('fiera_sa_orso');

Route::get('/fiera_di_sant_orso', function () {
    return Inertia::render('Valle_d_Aosta/Fiera_di_Sant_Orso');
})->middleware(['auth', 'verified'])->name('fiera_di_sant_orso');

Route::get('/artigianato_in_valle_d_aosta_una_tradizione_millenaria', function () {
    return Inertia::render('Valle_d_Aosta/Artigianato_tradizione_millenaria');
})->middleware(['auth', 'verified'])->name('artigianato_in_valle_d_aosta_una_tradizione_millenaria');

Route::get('/visite/museo_del_tesoro', function () {
    return Inertia::render('Valle_d_Aosta/Visite/Museo_del_tesoro');
})->middleware(['auth', 'verified'])->name('museo_del_tesoro');

Route::get('/musei_aosta', function () {
    return Inertia::render('Valle_d_Aosta/Musei_Aosta');
})->middleware(['auth', 'verified'])->name('museo_aosta');

Route::get('/visite/castello_gamba', function () {
    return Inertia::render('Valle_d_Aosta/Visite/Castello_Gamba');
})->middleware(['auth', 'verified'])->name('castello_gamba');

Route::get('/i_castelli_della_valle_d_asota_piu_belli_da_visitare', function () {
    return Inertia::render('Valle_d_Aosta/I_Castelli_piu_belli_Valle_d_Aosta');
})->middleware(['auth', 'verified'])->name('i_castelli_della_valle_d_asota_piu_belli_da_visitare');

Route::get('/castello_di_ussel', function () {
    return Inertia::render('Valle_d_Aosta/Castello_di_Ussel');
})->middleware(['auth', 'verified'])->name('castello_di_ussel');

Route::get('/chatillon_cosa_vedere', function () {
    return Inertia::render('Valle_d_Aosta/Chatillon_cosa_vedere');
})->middleware(['auth', 'verified'])->name('chatillon_cosa_vedere');

Route::get('/le_piu_belle_passeggiate_lungo_i_ru_della_valle_d_aosta', function () {
    return Inertia::render('Valle_d_Aosta/Articoli/Le_passeggiate_lungo_i_ru_della_valle_d_aosta');
})->middleware(['auth', 'verified'])->name('le_piu_belle_passeggiate_lungo_i_ru_della_valle_d_aosta'); */





/*Inizio Piemonte */
    Route::get('/piemonte', function () {
        return Inertia::render('Piemonte');
    })->middleware(['auth', 'verified'])->name('piemonte');

    Route::get('/destinazioni/torino', function () {
        return Inertia::render('Piemonte/Destinazioni/Torino');
    })->middleware(['auth', 'verified'])->name('torino');

    Route::get('/visite/torino/palazzo_reale', function () {
        return Inertia::render('Piemonte/Visite/Torino/Palazzo_reale');
    })->middleware(['auth', 'verified'])->name('palazzo_reale');

    Route::get('/visite/torino/palazzo_reale/palazzo_reale_armeria_reale_e_cappella_della_sindone', function () {
        return Inertia::render('Piemonte/Visite/Palazzo_reale/Palazzo_reale_armeria_reale_e_cappella_della_sindone');
    })->middleware(['auth', 'verified'])->name('palazzo_reale_armeria_reale_e_cappella_della_sindone');

    Route::get('/visite/torino/palazzo_reale/visita_archeologica', function () {
        return Inertia::render('Piemonte/Visite/Palazzo_reale/Visita_Archeologica');
    })->middleware(['auth', 'verified'])->name('visita_archeologica');

    Route::get('/visite/torino/palazzo_reale/capolavori_della_pittura', function () {
        return Inertia::render('Piemonte/Visite/Palazzo_reale/Capolavori_della_pittura');
    })->middleware(['auth', 'verified'])->name('capolavori_della_pittura');

    Route::get('/visite/torino/palazzo_reale/visita_completa', function () {
        return Inertia::render('Piemonte/Visite/Palazzo_reale/Visita_completa');
    })->middleware(['auth', 'verified'])->name('visita_completa');

    Route::get('/visite/torino/palazzo_reale/visita_ai_giardini', function () {
        return Inertia::render('Piemonte/Visite/Palazzo_reale/Visita_ai_giardini');
    })->middleware(['auth', 'verified'])->name('visita_ai_giardini');

    Route::get('/visite/torino/museo_nazionale_del_cinema', function () {
        return Inertia::render('Piemonte/Visite/Torino/Museo_Nazionale_del_Cinema');
    })->middleware(['auth', 'verified'])->name('museo_nazionale_del_cinema');

    Route::get('/visite/torino/museo_egizio', function () {
        return Inertia::render('Piemonte/Visite/Torino/Museo_egizio');
    })->middleware(['auth', 'verified'])->name('museo_egizio');

    Route::get('/visite/torino/porta_palazzo_e_il_balôn', function () {
        return Inertia::render('Piemonte/Visite/Torino/Porta_Palazzo_e_il_Balôn');
    })->middleware(['auth', 'verified'])->name('porta_palazzo_e_il_balôn');

    Route::get('/visite/torino/palazzo_madama', function () {
        return Inertia::render('Piemonte/Visite/Torino/Palazzo_Madama');
    })->middleware(['auth', 'verified'])->name('palazzo_madama');

    Route::get('/visite/torino/duomo_di_san_giovanni', function () {
        return Inertia::render('Piemonte/Visite/Torino/Duomo_di_San_Giovanni');
    })->middleware(['auth', 'verified'])->name('duomo_di_san_giovanni');

    Route::get('/visite/torino/po_e_parco_del_valentino', function () {
        return Inertia::render('Piemonte/Visite/Torino/Po_e_Parco_del_Valentino');
    })->middleware(['auth', 'verified'])->name('po_e_parco_del_valentino');

    Route::get('/visite/torino/reggia_di_venaria_reale', function () {
        return Inertia::render('Piemonte/Visite/Torino/Reggia_di_Venaria_Reale');
    })->middleware(['auth', 'verified'])->name('reggia_di_venaria_reale');

    Route::get('/visite/torino/reggia_di_venaria_reale/la_reggia', function () {
        return Inertia::render('Piemonte/Visite/Torino/Reggia_di_Venaria_Reale/La_Reggia');
    })->middleware(['auth', 'verified'])->name('la_reggia');

    Route::get('/visite/torino/reggia_di_venaria_reale/la_reggia/mappa_interattiva', function () {
        return Inertia::render('Piemonte/Visite/Torino/Reggia_di_Venaria_Reale/Mappa_interattiva');
    })->middleware(['auth', 'verified'])->name('mappa_interattiva');

    Route::get('/visite/torino/reggia_di_venaria_reale/la_reggia/breve_storia', function () {
        return Inertia::render('Piemonte/Visite/Torino/Reggia_di_Venaria_Reale/Breve_Storia');
    })->middleware(['auth', 'verified'])->name('breve_storia');

    Route::get('/visite/torino/reggia_di_venaria_reale/la_reggia/percorso_espositivo', function () {
        return Inertia::render('Piemonte/Visite/Torino/Reggia_di_Venaria_Reale/Percorso_Espositivo');
    })->middleware(['auth', 'verified'])->name('breve_storia');

    Route::get('/visite/torino/monte_dei_cappuccini', function () {
        return Inertia::render('Piemonte/Visite/Torino/Monte_dei_Cappuccini');
    })->middleware(['auth', 'verified'])->name('monte_dei_cappuccini');

    Route::get('/visite/torino/piazza_san_carlo', function () {
        return Inertia::render('Piemonte/Visite/Torino/Piazza_san_Carlo');
    })->middleware(['auth', 'verified'])->name('piazza_san_carlo');

    Route::get('/visite/torino/basilica_di_superga', function () {
        return Inertia::render('Piemonte/Visite/Torino/Basilica_di_Superga');
    })->middleware(['auth', 'verified'])->name('basilica_di_superga');

    Route::get('/visite/torino/chiesa_della_gran_maria_di_dio', function () {
        return Inertia::render('Piemonte/Visite/Torino/Chiesa_della_gran_madre_di_dio');
    })->middleware(['auth', 'verified'])->name('chiesa_della_gran_maria_di_dio');

    Route::get('/visite/torino/eataly', function () {
        return Inertia::render('Piemonte/Visite/Torino/Eataly');
    })->middleware(['auth', 'verified'])->name('eataly');

    Route::get('/visite/torino/gam', function () {
        return Inertia::render('Piemonte/Visite/Torino/GAM');
    })->middleware(['auth', 'verified'])->name('gam');

    Route::get('/visite/torino/museo_d_arte_orientale', function () {
        return Inertia::render('Piemonte/Visite/Torino/MAO');
    })->middleware(['auth', 'verified'])->name('museo_d_arte_orientale');

    Route::get('/visite/torino/murazzi', function () {
        return Inertia::render('Piemonte/Visite/Torino/Murazzi');
    })->middleware(['auth', 'verified'])->name('murazzi');

    Route::get('/visite/torino/museo_nazionale_del_risorgimento_italiano', function () {
        return Inertia::render('Piemonte/Visite/Torino/Mn_del_R_italiano');
    })->middleware(['auth', 'verified'])->name('museo_nazionale_del_risorgimento_italiano');

    Route::get('/visite/torino/museo_dell_automobile', function () {
        return Inertia::render('Piemonte/Visite/Torino/Museo_dell_Automobile');
    })->middleware(['auth', 'verified'])->name('museo_dell_automobile');

    Route::get('/visite/torino/museo_della_sindone', function () {
        return Inertia::render('Piemonte/Visite/Torino/Museo_della_Sindone');
    })->middleware(['auth', 'verified'])->name('museo_nazionale_del_risorgimento_italiano');

    Route::get('/visite/torino/quadrilateo_romano', function () {
        return Inertia::render('Piemonte/Visite/Torino/Quadrilatero_Romano');
    })->middleware(['auth', 'verified'])->name('quadrilateo_romano');

    Route::get('/territori/il_nord_e_i_laghi_maggiore_e_d_orta', function () {
        return Inertia::render('Piemonte/Territori/Il_nord_e_i_laghi_maggiore_e_d_Orta');
    })->middleware(['auth', 'verified'])->name('il_nord_e_i_laghi_maggiore_e_d_orta');

    Route::get('/destinazioni/novara', function () {
        return Inertia::render('Piemonte/Destinazioni/Novara');
    })->middleware(['auth', 'verified'])->name('novara');

    Route::get('/destinazioni/biella', function () {
        return Inertia::render('Piemonte/Destinazioni/Biella');
    })->middleware(['auth', 'verified'])->name('biella');

    Route::get('/destinazioni/vercelli', function () {
        return Inertia::render('Piemonte/Destinazioni/Vercelli');
    })->middleware(['auth', 'verified'])->name('vercelli');

    Route::get('/territori/canadese_gran_paradiso_e_valli_di_lanzo', function () {
        return Inertia::render('Piemonte/Territori/Canavese_Gran_paradiso');
    })->middleware(['auth', 'verified'])->name('canadese_gran_paradiso_e_valli_di_lanzo');

    Route::get('/destinazioni/ivrea', function () {
        return Inertia::render('Piemonte/Destinazioni/Ivrea');
    })->middleware(['auth', 'verified'])->name('ivrea');

    Route::get('/destinazioni/cuneo', function () {
        return Inertia::render('Piemonte/Destinazioni/Cuneo');
    })->middleware(['auth', 'verified'])->name('cuneo');

    Route::get('/destinazioni/saluzzo', function () {
        return Inertia::render('Piemonte/Destinazioni/Saluzzo');
    })->middleware(['auth', 'verified'])->name('saluzzo');

    Route::get('/territori/asti_alessandra_e_il_monferrato', function () {
        return Inertia::render('Piemonte/Territori/Asti_Alessandria_e_il_Monferrato');
    })->middleware(['auth', 'verified'])->name('asti_alessandra_e_il_monferrato');

    Route::get('/territori/valle_di_susa_chisone_pallice_germanasca', function () {
        return Inertia::render('Piemonte/Territori/Valle_di_Susa_Chisone_Pellice_e_Germanasca');
    })->middleware(['auth', 'verified'])->name('valle_di_susa_chisone_pallice_germanasca');

    Route::get('/territori/langhe_e_roero', function () {
        return Inertia::render('Piemonte/Territori/Langhe_e_Roero');
    })->middleware(['auth', 'verified'])->name('langhe_e_roero');
/*Fine Piemonte */


/*Inizio Lombardia*/
    Route::get('/lombardia', function () {
        return Inertia::render('Lombardia');
    })->middleware(['auth', 'verified'])->name('lombardia');
    /*Inzio Milano*/
        Route::get('/destinazioni/milano', function () {
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
        Route::get('/destinazioni/brescia', function () {
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

    Route::get('/destinazioni/genova', function () {
        return Inertia::render('Liguria/Destinazioni/Genova');
    })->middleware(['auth', 'verified'])->name('genova');

    Route::get('/destinazioni/camogli', function () {
        return Inertia::render('Liguria/Destinazioni/Camogli');
    })->middleware(['auth', 'verified'])->name('camogli');

    Route::get('/destinazioni/golfo_del_tigullio', function () {
        return Inertia::render('Liguria/Destinazioni/Camogli');
    })->middleware(['auth', 'verified'])->name('golfo_del_tigullio');

    Route::get('/destinazioni/abbazia_di_san_fruttuoso', function () {
        return Inertia::render('Liguria/Destinazioni/Camogli');
    })->middleware(['auth', 'verified'])->name('abbazia_di_san_fruttuoso');
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
    /*Inizio Camogli*/
        Route::get('/visite/camongli/golfo_paradiso', function () {
            return Inertia::render('Liguria/Visite/Golfo_Paradiso');
        })->middleware(['auth', 'verified'])->name('golfo_paradiso');

        Route::get('/visite/camongli/castello_della_dragonaria', function () {
            return Inertia::render('Liguria/Visite/Castello_della_Dragonaria');
        })->middleware(['auth', 'verified'])->name('castello_della_dragonaria');
    /*Fine Camogli*/
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

    Route::get('/destinazioni/bologna', function () {
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
    /*Inizia Palermo*/
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
    






























Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
