const arrMovieSet = [

	{ id: '_5+' 		, title: '&#10030; 5+' 		, },
	{ id: '_5' 			, title: '&#10003; 5' 		, },
	{ id: 'kinoman' 	, title: 'Кіноман' 			, },
	//{ id: '_007' 	, title: 'Агент 007' 	, },

];






const arrMovieSort = [

	//{ id: 'abc' 	, title: 'Алфавіт' 		, },
	{ id: 'year_up' 	, title: 'Рік +' 			, },
	{ id: 'year_down' 	, title: 'Рік -' 			, },

];





/*

Границы безумия (2022) 							// https://www.imdb.com/title/tt 22964884
Жизнь Дэвида Гейла (2003) 						// https://www.imdb.com/title/tt 0289992
Ниндзя из Беверли-Хиллз (1997) 					// https://www.imdb.com/title/tt 0118708
Обряд (2011) 									// https://www.imdb.com/title/tt 1161864
Пацанская история (2022) 						// https://www.imdb.com/title/tt 21997048
Помни (2000) 									// https://www.imdb.com/title/tt 0209144
Продавец (2009) 								// https://www.imdb.com/title/tt 1092633
Пьяный мастер (1978) 							// https://www.imdb.com/title/tt 0080179
Самый быстрый Индиан (2005) 					// https://www.imdb.com/title/tt 0412080
Святые из Бундока (1999) 						// https://www.imdb.com/title/tt 0144117
Смокинг (2002) 									// https://www.imdb.com/title/tt 0290095
Тайлер Рейк: Операция по спасению - 2 ()2023  	// https://www.imdb.com/title/tt 12263384
Тринадцатий воин (1999) 						// https://www.imdb.com/title/tt 0120657
Ужасающий - 3 (2024) 							// https://www.imdb.com/title/tt 27911000
Хэллоуин убивает (2021) 						// https://www.imdb.com/title/tt 10665338
Экстрасенс (2011) 								// https://www.imdb.com/title/tt 1687901



-- серіали --

Бункер (2023) 										// https://www.imdb.com/title/tt14688458/
Вавилон-Берлин (2017) 								// https://www.imdb.com/title/tt4378376/
Голяк (2019) 										// https://www.imdb.com/title/tt9174582/
Дисклеймер / Все совпадения неслучайны (2024) 		// https://www.imdb.com/title/tt16294384/
Друзья (1994) 										// https://www.imdb.com/title/tt0108778/
Императрица (2022) 									// https://www.imdb.com/title/tt13720112/
Почему женщины убивают (2019) 						// https://www.imdb.com/title/tt9054904/








*/




const arrSetKinoman  = [


	'13_sins_2014' 								, // 13 гріхів
	'1917_2019' 								, // 1917

	'avatar_2009' 								, // Аватар
	'avatar_2_2022' 							, // Аватар - 2
	'the_devil_s_advocate_1997' 				, // Адвокат диявола
	'upgrade_2018' 								, // Апгрейд
	'armageddon_1998' 							, // Армагеддон
	'atomic_blonde_2017' 						, // Атомна блондинка
	'the_beekeeper_2024'						, // Бджоляр
	'face_off_1997' 							, // Без обличчя
	'beetlejuice_2024' 							, // Бітлджюс Бітлджюс
	'fight_club_1999' 							, // Бійцівський клуб
	'stonehearst_asylum_2014'					, // Будинок проклятих
	'van_helsing_2004' 							, // Ван Хелсінг
	'killer_heat_2024' 							, // Вбивча спека
	'venom_2018' 								, // Веном
	'venom_let_there_be_carnage_2021' 			, // Веном - 2
	'willow_1988' 								, // Віллоу
	'the_crow_2024' 							, // Ворон
	'saving_private_Ryan_1998'					, // Врятувати рядового Раяна
	'hot_shots_2_1993' 							, // Гарячі голови - 2
	'hellboy_2024' 								, // Геллбой: Горбань
	'gladiator_2000' 							, // Гладіатор
	'squid_game_2021' 							, // Гра в кальмара
	'the_killer_s_game_2024' 					, // Гра кілера
	'game_of_thrones_2011' 						, // Гра престолів
	'le_comte_de_monte_cristo_2024' 			, // Граф Монте-Крісто
	'gemini_man_2019' 							, // Двійник
	'the_devil_s_double_20011' 					, // Двійник диявола
	'deja_vu_2006' 								, // Дежа вю
	'the_thing_2011'							, // Дещо
	'the_girl_with_the_dragon_tattoo_2011'		, // Дівчина з тату дракона
	'joker_2019' 								, // Джокер
	'the_ring_2002'								, // Дзвінок
	'longlegs_2024' 							, // Довгоніг
	'soul_2020' 								, // Душа
	'exam_2009' 								, // Екзамен
	'the_experiment_2010'						, // Експеримент
	'paradox_effect_2024' 						, // Ефект парадокса
	'falling_down_1993' 						, // З мене досить
	'detained_2024' 							, // Затримана
	'klatwa_doliny_wezy_1987' 					, // Закляття долини змій
	'trap_2024' 								, // Западня
	'from_2022' 								, // Ззовні
	'zootopia_2016' 							, // Зоотрополіс
	'abgeschnitten_2018' 						, // Ізоляція
	'the_foreigner_2017' 						, // Іноземець
	'influencer_2022' 							, // Інфлюенсер
	'the_skeleton_key_2005' 					, // Ключ від усіх дверей
	'amber_alert_2024' 							, // Код жовтий
	'canary_black_2024' 						, // Код Чорна канарка
	'monsters_inc_2001' 						, // Корпорація монстрів
	'beauty_and_the_beast_1991' 				, // Красуня і чудовисько
	'jolt_2021' 								, // Красуня на драйві
	'snowpiercer_2013' 							, // Крізь сніг / Снігобур
	'cube_2_hypercube_2002' 					, // Куб - 2
	'labyrinth_1986' 							, // Лабіринт
	'into_the_blue_2005' 						, // Ласкаво просимо до раю
	'leon_1994' 								, // Леон
	'bad_genius_2024' 							, // Ліга мільйонерів
	'the_lobster_2015' 							, // Лобстер
	'ice_age_2002' 								, // Льодовиковий період
	'haunted_mansion_2023' 						, // Маєток з привидами
	'mars_attacks_1996' 						, // Марс атакує
	'the_matrix_1999' 							, // Матриця
	'the_matrix_2_2003' 						, // Матриця - 2
	'the_menu_2022' 							, // Меню
	'elevation_2024' 							, // Мертві землі
	'hansel_gretel_witch_hunters_2013'			, // Мисливці за відьмами
	'mine_2016' 								, // Міна
	'mission_impossible_7_2023' 				, // Місія неможлива - 7
	'die_hard_4_2007' 							, // Міцний горішок - 4
	'morbius_2022' 								, // Морбіус
	'trainspotting_1996' 						, // На голці
	'point_break_1991' 							, // На гребені хвилі
	'live_die_repeat_edge_of_tomorrow_2014' 	, // На межі майбутнього
	'back_to_the_future_1985' 					, // Назад у майбутнє
	'back_to_the_future_2_1989' 				, // Назад у майбутнє - 2
	'back_to_the_future_3_1990' 				, // Назад у майбутнє - 3
	'assassins_1995' 							, // Наймані вбивці
	'home_2015' 								, // Нарешті вдома
	'awake_2007' 								, // Наркоз
	'don_t_hang_up_2016' 						, // Не вішайте слухавку
	'hollow_man_2000' 							, // Невидимка
	'subservience_2024' 						, // Непокірна Еліс
	'nowhere_2023' 								, // Ніде
	'knives_out_2019'							, // Ножі наголо
	'twin_sitters_1994' 						, // Няньки
	'limitless_2011' 							, // Області темряви
	'scarface_1983' 							, // Обличчя зі шрамом
	'caddo_lake_2024'							, // Озеро Каддо
	'eagle_eye_2008'							, // Орлиний зір
	'the_wasp_2024'								, // Оса
	'resident_evil_2002'						, // Оселя зла
	'unit_234_2024' 							, // Осередок 234
	'basic_instinct_1992'						, // Основний інстинкт
	'minority_report_2002'						, // Особлива думка
	'last_action_hero_1993' 					, // Останній кіногерой
	'the_island_2005' 							, // Острів
	'olympus_has_fallen_2013'					, // Падіння Олімпу
	'la_casa_de_papel_2017' 					, // Паперовий будинок
	'swordfish_2001' 							, // Пароль Риба-Меч
	'perfume_2006' 								, // Парфумер
	'entrapment_1999' 							, // Пастка
	'timecop_1994' 								, // Патруль часу
	'pearl_harbor_2001'							, // Перл Гарбор
	'the_cave_2005' 							, // Печера
	'hypnotic_2023' 							, // Під гіпнозом
	'el_hoyo_2019' 								, // Платформа
	'el_hoyo_2_2024' 							, // Платформа - 2
	'bad_boys_4_2024' 							, // Погані хлопці - 4
	'cop_car_2015' 								, // Поліцейський автомобіль
	'beverly_hills_cop_4_2024' 					, // Поліцейський із Беверлі-Гіллз - 4
	'the_hitcher_1986'							, // Попутник
	'source_code_2011' 							, // Початковий код
	'inception_2010'							, // Початок
	'damaged_2024' 								, // Почерк кілера
	'righteous_kill_2008' 						, // Право на вбивство
	'next_2007' 								, // Пророк
	'road_house_2024' 							, // Придорожній клуб
	'ghosted_2023' 								, // Примарні
	'3_body_problem_2024' 						, // Проблема 3 тіл
	'absolution_2024' 							, // Прощення
	'fifty_shades_of_grey_2015'					, // П'ятдесят відтінків сірого
	'the_fifth_element_1997' 					, // П'ятий елемент
	'paradise_2023'								, // Рай
	'serbuan_maut_2011'							, // Рейд
	'the_recruit_2003'							, // Рекрут
	'rampage_2018' 								, // Ремпейдж
	'role_play_2024'							, // Рольові ігри
	'samaritan_2022' 							, // Самаритянин
	'dragon_heart_1996'							, // Серце дракона
	'sicario_2015'								, // Сікаріо 
	'the_union_2024'							, // Спілка
	'showgirls_1995' 							, // Стриптизерки
	'the_substance_2024' 						, // Субстанція
	'dredd_2012'								, // Суддя Дредд
	'cars_2006' 								, // Тачки
	'tenet_2020' 								, // Тенет
	'the_terminal_2004'							, // Термінал
	'titanic_1997'								, // Титанік
	'jennifer_s_body_2009'						, // Тіло Дженніфер
	'interstate_60_2002' 						, // Траса 60
	'tremors_1990' 								, // Тремтіння землі
	'the_informer_2019' 						, // Три секунди
	'the_tourist_2010' 							, // Турист
	'dial_m_for_murder_1954' 					, // У випадку вбивства телефонуйте М
	'smile_2_2024'								, // Усміхайся - 2
	'the_apprentice_2024' 						, // Учень. Історія Трампа
	'miller_s_girl_2024' 						, // Фаворитка Міллера
	'fallout_2024' 								, // Фолаут
	'forrest_gump_1994' 						, // Форрест Ґамп
	'mad_max_5_2024' 							, // Фуріоза: Шалений Макс. Сага
	'halloween_2018' 							, // Хелловін
	'splice_2009' 								, // Химера
	'the_godfather_1972' 						, // Хрещений батько
	'mr_brooks_2007' 							, // Хто Ви містере Брукс
	'it_s_what_s_inside_2024' 					, // Хто ти всередині
	'in_time_2011' 								, // Час
	'what_women_want_2000' 						, // Чого хочуть жінки
	'alien_romulus_2024'						, // Чужий: Ромул
	'speed_1994' 								, // Швидкість
	'the_thing_1982' 							, // Щось
	'i_am_legend_2007' 							, // Я - легенда

	'boss_level_2020' 							, // Boss Level: Фінальна гра




];






const arrSetNation  = [

	'the_mexican_2001', // нема в базі // https://www.imdb.com/title/tt0236493/
	'',


];























