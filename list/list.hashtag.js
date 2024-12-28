



const arrHashTags = [



	{ id: '-' 				, title: '--- --- ЛЮДИ --- ---' 		, app: { movies: 1, }, },
	{ id: 'fight' 			, title: 'бійці' 						, app: { movies: 1, }, }, // бойові мистецтва
	{ id: 'genius' 			, title: 'генії' 						, app: { movies: 1, }, },
	{ id: 'truckers' 		, title: 'далекобійники' 				, app: { movies: 1, }, },
	{ id: 'children' 		, title: 'діти' 						, app: { movies: 1, }, },
	{ id: 'bond' 			, title: 'ДжеймсБонд' 					, app: { movies: 1, }, }, 
	{ id: 'hostage' 		, title: 'заручники' 					, app: { movies: 1, }, },
	{ id: 'killer' 			, title: 'кілери' 						, app: { movies: 1, }, },
	{ id: 'cowboy' 			, title: 'ковбої' 						, app: { movies: 1, }, },
	{ id: 'team' 			, title: 'команда' 						, app: { movies: 1, }, }, // група осіб
	{ id: 'love' 			, title: 'кохання' 						, app: { movies: 1, }, },
	{ id: 'doctor' 			, title: 'лікар' 						, app: { movies: 1, }, },
	{ id: 'maniac' 			, title: 'маніяки' 						, app: { movies: 1, }, },
	{ id: 'young' 			, title: 'молодь' 						, app: { movies: 1, }, },
	{ id: 'oneman' 			, title: 'одинАктор' 					, app: { movies: 1, }, }, // театр одного актора
	{ id: 'pirates' 		, title: 'пірати' 						, app: { movies: 1, }, },
	{ id: 'cop' 			, title: 'поліцейські' 					, app: { movies: 1, }, },
	{ id: 'president' 		, title: 'президент' 					, app: { movies: 1, }, }, 
	{ id: 'prince' 			, title: 'принц' 						, app: { movies: 1, }, }, 
	{ id: 'blind' 			, title: 'сліпі' 						, app: { movies: 1, }, },
	{ id: 'superhero' 		, title: 'супергерої' 					, app: { movies: 1, }, },
	{ id: 'terrorist' 		, title: 'терористи' 					, app: { movies: 1, }, },
	{ id: 'coma' 			, title: 'уКомі' 						, app: { movies: 1, }, },



	{ id: '-' 				, title: '--- --- ТВАРИНИ --- ---' 		, app: { movies: 1, }, },
	{ id: 'animal' 			, title: 'тварини' 						, app: { movies: 1, }, },
	{ id: 'shark' 			, title: 'акули' 						, app: { movies: 1, }, },
	{ id: 'groundhog' 		, title: 'бабак' 						, app: { movies: 1, }, }, // в стилі Дня Бабака
	{ id: 'bear' 			, title: 'ведмеді' 						, app: { movies: 1, }, }, 
	{ id: 'dinosaur' 		, title: 'динозаври' 					, app: { movies: 1, }, },
	{ id: 'snake' 			, title: 'змії' 						, app: { movies: 1, }, },
	{ id: 'crocodile' 		, title: 'крокодили' 					, app: { movies: 1, }, },
	{ id: 'monkey' 			, title: 'мавпи' 						, app: { movies: 1, }, },
	{ id: 'spider' 			, title: 'павук' 						, app: { movies: 1, }, }, 
	{ id: 'dog' 			, title: 'собаки' 						, app: { movies: 1, }, },



	{ id: '-' 				, title: '--- --- ІСТОТИ --- ---' 				, app: { movies: 1, }, },
	{ id: 'creature' 		, title: 'істоти' 								, app: { movies: 1, }, },
	{ id: 'vampire' 		, title: 'вампіри' 								, app: { movies: 1, }, }, 
	{ id: 'dragon' 			, title: 'дракони' 								, app: { movies: 1, }, },
	{ id: 'zombie' 			, title: 'зомбі' 								, app: { movies: 1, }, },
	{ id: 'mutant' 			, title: 'мутанти'								, app: { movies: 1, }, },
	{ id: 'werewolf' 		, title: 'перевертні' 							, app: { movies: 1, }, },



	{ id: '-' 				, title: '--- --- ПАРАЛЕЛЬНИЙ СВІТ --- ---' 	, app: { movies: 1, }, },
	{ id: 'witch' 			, title: 'відьми' 								, app: { movies: 1, }, },
	{ id: 'bodyChange' 		, title: 'обмінТілами' 							, app: { movies: 1, }, }, // театр одного актора
	{ id: 'souls' 			, title: 'переселенняДуш' 						, app: { movies: 1, }, }, 
	{ id: 'ghost' 			, title: 'привиди' 								, app: { movies: 1, }, }, 



	{ id: '-' 				, title: '--- --- ВІЙНА --- ---' 		, app: { movies: 1, }, },
	{ id: 'army' 			, title: 'армія' 						, app: { movies: 1, }, },
	{ id: 'battle' 			, title: 'битва' 						, app: { movies: 1, }, },
	{ id: 'war' 			, title: 'війна' 						, app: { movies: 1, }, }, 
	{ id: 'war1w' 			, title: 'війна1світова' 				, app: { movies: 1, }, }, // Друга світова війна
	{ id: 'war2w' 			, title: 'війна2світова' 				, app: { movies: 1, }, }, // Друга світова війна
	{ id: 'nuclear_bomb' 	, title: 'ЯдернаБомба' 					, app: { movies: 1, }, }, // Друга світова війна



	{ id: '-' 				, title: '--- --- ГЕОГРАФІЯ --- ---' 	, app: { movies: 1, }, },
	{ id: 'mountains' 		, title: 'гори' 						, app: { movies: 1, }, },
	{ id: 'jungle' 			, title: 'джунглі' 						, app: { movies: 1, }, }, 
	{ id: 'road' 			, title: 'дорога' 						, app: { movies: 1, }, },
	{ id: 'winter' 			, title: 'зима' 						, app: { movies: 1, }, },
	{ id: 'forest' 			, title: 'ліс' 							, app: { movies: 1, }, },
	{ id: 'travel' 			, title: 'мандри' 						, app: { movies: 1, }, },
	{ id: 'sea' 			, title: 'море'							, app: { movies: 1, }, },
	{ id: 'newyork' 		, title: 'Нью-Йорк' 					, app: { movies: 1, }, },
	{ id: 'island' 			, title: 'острів' 						, app: { movies: 1, }, }, 
	{ id: 'underwater' 		, title: 'підВодою' 					, app: { movies: 1, }, },
	{ id: 'beach' 			, title: 'пляж' 						, app: { movies: 1, }, },
	{ id: 'desert' 			, title: 'пустеля' 						, app: { movies: 1, }, },
	{ id: 'treasure' 		, title: 'скарби' 						, app: { movies: 1, }, },
	{ id: 'tropic' 			, title: 'тропіки' 						, app: { movies: 1, }, },
	


	{ id: '-' 				, title: '--- --- ДАТИ --- ---' 		, app: { movies: 1, }, },
	{ id: 'new_year' 		, title: 'новийРік' 					, app: { movies: 1, }, },



	{ id: '-' 				, title: '--- --- КОСМОС --- ---' 		, app: { movies: 1, }, },
	{ id: 'space' 			, title: 'космос' 						, app: { movies: 1, }, },
	{ id: 'aliens' 			, title: 'інопланетяни' 				, app: { movies: 1, }, },
	{ id: 'planet' 			, title: 'планети' 						, app: { movies: 1, }, }, // події на інших планетах
	


	{ id: '-' 				, title: '--- --- КРИМІНАЛ --- ---' 	, app: { movies: 1, }, },
	{ id: 'bomb' 			, title: 'бомба' 						, app: { movies: 1, }, },
	{ id: 'escape' 			, title: 'втеча' 						, app: { movies: 1, }, }, 
	{ id: 'prison' 			, title: 'в\'язниця' 					, app: { movies: 1, }, },
	{ id: 'hostage' 		, title: 'заручники' 					, app: { movies: 1, }, },
	{ id: 'killer' 			, title: 'кілери' 						, app: { movies: 1, }, },
	{ id: 'maniac' 			, title: 'маніяки' 						, app: { movies: 1, }, },
	{ id: 'mafia' 			, title: 'мафія' 						, app: { movies: 1, }, },
	{ id: 'drugs' 			, title: 'наркотики' 					, app: { movies: 1, }, },
	{ id: 'pirates' 		, title: 'пірати' 						, app: { movies: 1, }, },
	{ id: 'robbery' 		, title: 'пограбування' 				, app: { movies: 1, }, },
	{ id: 'justice' 		, title: 'правосуддя' 					, app: { movies: 1, }, }, 
	{ id: 'cop' 			, title: 'поліцейські' 					, app: { movies: 1, }, },
	{ id: 'police' 			, title: 'поліція' 						, app: { movies: 1, }, },
	{ id: 'hunting' 		, title: 'полюванняНаЛюдину' 			, app: { movies: 1, }, },
	{ id: 'terrorist' 		, title: 'терористи' 					, app: { movies: 1, }, },




	{ id: '-' 				, title: '--- --- ЗАГРОЗА --- ---' 		, app: { movies: 1, }, },
	{ id: 'surviving' 		, title: 'виживання' 					, app: { movies: 1, }, }, // подорожі у часі
	{ id: 'virus' 			, title: 'вірус' 						, app: { movies: 1, }, },
	{ id: 'quest' 			, title: 'квест' 						, app: { movies: 1, }, },
	{ id: 'unreal_danger' 	, title: 'нереальнаНебезпека' 			, app: { movies: 1, }, }, // загроза/небезпека неіснуючого походження
	{ id: 'trap' 			, title: 'пастка' 						, app: { movies: 1, }, }, // випадкові смертельні пастки



	{ id: '-' 				, title: '--- --- СВІТИ --- ---' 		, app: { movies: 1, }, },
	{ id: 'apocalypse' 		, title: 'апокаліпсис' 					, app: { movies: 1, }, },
	{ id: 'future' 			, title: 'майбутнє' 					, app: { movies: 1, }, },
	{ id: 'real' 			, title: 'наРеальнихПодіях' 			, app: { movies: 1, }, }, // засновано на реальних подіях
	{ id: 'middleAges' 		, title: 'старіЧаси' 					, app: { movies: 1, }, },
	{ id: 'ancient' 		, title: 'стародавнійСвіт' 				, app: { movies: 1, }, }, 
	{ id: 'world' 			, title: 'світ' 						, app: { movies: 1, }, }, // вигаданий світ
	{ id: 'utopia' 			, title: 'утопія' 						, app: { movies: 1, }, }, 
	{ id: 'time' 			, title: 'уЧасі' 						, app: { movies: 1, }, }, // подорожі у часі



	{ id: '-' 				, title: '--- --- СПОРТ --- ---' 		, app: { movies: 1, }, },
	{ id: 'sport' 			, title: 'спорт' 						, app: { movies: 1, }, },
	{ id: 'armwrestling' 	, title: 'армрестлінг' 					, app: { movies: 1, }, },
	{ id: 'fight' 			, title: 'бійці' 						, app: { movies: 1, }, }, // бойові мистецтва
	{ id: 'box' 			, title: 'бокс' 						, app: { movies: 1, }, }, // досліди в лабораторіях
	{ id: 'skydive' 		, title: 'парашюти' 					, app: { movies: 1, }, },
	{ id: 'race' 			, title: 'перегони' 					, app: { movies: 1, }, },
	{ id: 'surfing' 		, title: 'серфінг' 						, app: { movies: 1, }, }, // подорожі у часі
	{ id: 'chess' 			, title: 'шахи' 						, app: { movies: 1, }, }, // подорожі у часі



	{ id: '-' 				, title: '--- --- СПОРУДИ --- ---' 		, app: { movies: 1, }, },
	{ id: 'airport' 		, title: 'aеропорт' 					, app: { movies: 1, }, }, // досліди в лабораторіях
	{ id: 'bank' 			, title: 'банк' 						, app: { movies: 1, }, },
	{ id: 'biomedlab' 		, title: 'біомедлаб' 					, app: { movies: 1, }, }, // досліди в лабораторіях
	{ id: 'madhouse' 		, title: 'божевільня' 					, app: { movies: 1, }, }, // досліди в лабораторіях
	{ id: 'elevator' 		, title: 'ліфт' 						, app: { movies: 1, }, }, // зламай мозок
	
	


	{ id: '-' 				, title: '--- --- СФЕРИ --- ---' 		, app: { movies: 1, }, },
	{ id: 'air' 			, title: 'авіація' 						, app: { movies: 1, }, },
	{ id: 'medicine' 		, title: 'медицина' 					, app: { movies: 1, }, },
	{ id: 'fashion' 		, title: 'мода' 						, app: { movies: 1, }, },
	{ id: 'politic' 		, title: 'політика' 					, app: { movies: 1, }, },
	{ id: 'psycho' 			, title: 'психо' 						, app: { movies: 1, }, }, // зламай мозок
	{ id: 'finance' 		, title: 'фінанси' 						, app: { movies: 1, }, }, // зламай мозок





	{ id: '-' 				, title: '--- --- ТЕХНО --- ---' 		, app: { movies: 1, }, },
	{ id: 'techno' 			, title: 'техно' 						, app: { movies: 1, }, }, // технології
	{ id: 'cyber' 			, title: 'кібер' 						, app: { movies: 1, }, },
	{ id: 'robot' 			, title: 'роботи' 						, app: { movies: 1, }, },
	{ id: 'phone' 			, title: 'телефон' 						, app: { movies: 1, }, }, // телефонні дзвінки/переговори
	{ id: 'photo' 			, title: 'фото' 						, app: { movies: 1, }, }, // подорожі у часі



	{ id: '-' 				, title: '--- --- ТРАНСПОРТ --- ---' 	, app: { movies: 1, }, },
	{ id: 'bus' 			, title: 'автобус' 						, app: { movies: 1, }, },
	{ id: 'helicopter' 		, title: 'гелікоптер' 					, app: { movies: 1, }, },
	{ id: 'ship' 			, title: 'кораблі' 						, app: { movies: 1, }, },
	{ id: 'plane' 			, title: 'літаки' 						, app: { movies: 1, }, },
	{ id: 'cars' 			, title: 'машини' 						, app: { movies: 1, }, },
	{ id: 'subway' 			, title: 'метро'						, app: { movies: 1, }, },
	{ id: 'motorbike' 		, title: 'мотоцикли'					, app: { movies: 1, }, },
	{ id: 'skydive' 		, title: 'парашюти' 					, app: { movies: 1, }, },
	{ id: 'submarine' 		, title: 'підводнийЧовен' 				, app: { movies: 1, }, },
	{ id: 'train' 			, title: 'поїзд' 						, app: { movies: 1, }, }, 
	{ id: 'tank' 			, title: 'танк' 						, app: { movies: 1, }, },






	//{ id: 'air' 			, title: 'авіація' 			, },

	//{ id: 'railroad' 	, title: 'залізниця' 		, },
	





];




let objHashTags = {};
arrHashTags.forEach( k => {
	objHashTags[ k.id ] = k;
});












