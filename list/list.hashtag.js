



const arrHashTags = [



	{ id: '-' 				, title: '--- --- ЛЮДИ --- ---' 		, app: { films: 1, }, },
	{ id: 'fight' 			, title: 'бійці' 						, app: { films: 1, }, }, // бойові мистецтва
	{ id: 'truckers' 		, title: 'далекобійники' 				, app: { films: 1, }, },
	{ id: 'children' 		, title: 'діти' 						, app: { films: 1, }, },
	{ id: 'bond' 			, title: 'ДжеймсБонд' 					, app: { films: 1, }, }, 
	{ id: 'hostage' 		, title: 'заручники' 					, app: { films: 1, }, },
	{ id: 'killer' 			, title: 'кілери' 						, app: { films: 1, }, },
	{ id: 'cowboy' 			, title: 'ковбої' 						, app: { films: 1, }, },
	{ id: 'team' 			, title: 'команда' 						, app: { films: 1, }, }, // група осіб
	{ id: 'love' 			, title: 'кохання' 						, app: { films: 1, }, },
	{ id: 'doctor' 			, title: 'лікар' 						, app: { films: 1, }, },
	{ id: 'maniac' 			, title: 'маніяки' 						, app: { films: 1, }, },
	{ id: 'young' 			, title: 'молодь' 						, app: { films: 1, }, },
	{ id: 'oneman' 			, title: 'одинАктор' 					, app: { films: 1, }, }, // театр одного актора
	{ id: 'pirates' 		, title: 'пірати' 						, app: { films: 1, }, },
	{ id: 'cop' 			, title: 'поліцейські' 					, app: { films: 1, }, },
	{ id: 'prince' 			, title: 'принц' 						, app: { films: 1, }, }, 
	{ id: 'superhero' 		, title: 'супергерої' 					, app: { films: 1, }, },
	{ id: 'terrorist' 		, title: 'терористи' 					, app: { films: 1, }, },
	


	{ id: '-' 				, title: '--- --- ПОТОЙБІЧНИЙ СВІТ --- ---' 	, app: { films: 1, }, },
	{ id: 'vampire' 		, title: 'вампіри' 								, app: { films: 1, }, }, 
	{ id: 'witch' 			, title: 'відьми' 								, app: { films: 1, }, },
	{ id: 'zombie' 			, title: 'зомбі' 								, app: { films: 1, }, },
	{ id: 'mutant' 			, title: 'мутанти'								, app: { films: 1, }, },
	{ id: 'bodyChange' 		, title: 'обмінТілами' 							, app: { films: 1, }, }, // театр одного актора
	{ id: 'werewolf' 		, title: 'перевертні' 							, app: { films: 1, }, },
	{ id: 'souls' 			, title: 'переселенняДуш' 						, app: { films: 1, }, }, 
	{ id: 'ghost' 			, title: 'привиди' 								, app: { films: 1, }, }, 



	{ id: '-' 				, title: '--- --- ТВАРИНИ --- ---' 		, app: { films: 1, }, },
	{ id: 'animal' 			, title: 'тварини' 						, app: { films: 1, }, },
	{ id: 'shark' 			, title: 'акули' 						, app: { films: 1, }, },
	{ id: 'groundhog' 		, title: 'бабак' 						, app: { films: 1, }, }, // в стилі Дня Бабака
	{ id: 'bear' 			, title: 'ведмеді' 						, app: { films: 1, }, }, 
	{ id: 'virus' 			, title: 'вірус' 						, app: { films: 1, }, },
	{ id: 'dinosaur' 		, title: 'динозаври' 					, app: { films: 1, }, },
	{ id: 'snake' 			, title: 'змії' 						, app: { films: 1, }, },
	{ id: 'crocodile' 		, title: 'крокодили' 					, app: { films: 1, }, },
	{ id: 'monkey' 			, title: 'мавпи' 						, app: { films: 1, }, },
	{ id: 'spider' 			, title: 'павук' 						, app: { films: 1, }, }, 
	{ id: 'dog' 			, title: 'собаки' 						, app: { films: 1, }, },



	{ id: '-' 				, title: '--- --- ВІЙНА --- ---' 		, app: { films: 1, }, },
	{ id: 'army' 			, title: 'армія' 						, app: { films: 1, }, },
	{ id: 'battle' 			, title: 'битва' 						, app: { films: 1, }, },
	{ id: 'war' 			, title: 'війна' 						, app: { films: 1, }, }, 
	{ id: 'war1w' 			, title: 'війна1світова' 				, app: { films: 1, }, }, // Друга світова війна
	{ id: 'war2w' 			, title: 'війна2світова' 				, app: { films: 1, }, }, // Друга світова війна
	{ id: 'nuclear_bomb' 	, title: 'ЯдернаБомба' 					, app: { films: 1, }, }, // Друга світова війна



	{ id: '-' 				, title: '--- --- ГЕОГРАФІЯ --- ---' 	, app: { films: 1, }, },
	{ id: 'mountains' 		, title: 'гори' 						, app: { films: 1, }, },
	{ id: 'jungle' 			, title: 'джунглі' 						, app: { films: 1, }, }, 
	{ id: 'road' 			, title: 'дорога' 						, app: { films: 1, }, }, // події в дорозі
	{ id: 'winter' 			, title: 'зима' 						, app: { films: 1, }, },
	{ id: 'travel' 			, title: 'мандри' 						, app: { films: 1, }, }, // подорожі по світу
	{ id: 'sea' 			, title: 'море'							, app: { films: 1, }, },
	{ id: 'newyork' 		, title: 'Нью-Йорк' 					, app: { films: 1, }, },
	{ id: 'island' 			, title: 'острів' 						, app: { films: 1, }, }, 
	{ id: 'underwater' 		, title: 'підВодою' 					, app: { films: 1, }, },
	{ id: 'beach' 			, title: 'пляж' 						, app: { films: 1, }, },
	{ id: 'desert' 			, title: 'пустеля' 						, app: { films: 1, }, },
	{ id: 'treasure' 		, title: 'скарби' 						, app: { films: 1, }, },
	{ id: 'tropic' 			, title: 'тропіки' 						, app: { films: 1, }, },
	


	{ id: '-' 				, title: '--- --- КОСМОС --- ---' 		, app: { films: 1, }, },
	{ id: 'space' 			, title: 'космос' 						, app: { films: 1, }, },
	{ id: 'aliens' 			, title: 'інопланетяни' 				, app: { films: 1, }, },
	{ id: 'planet' 			, title: 'планети' 						, app: { films: 1, }, }, // події на інших планетах
	


	{ id: '-' 				, title: '--- --- КРИМІНАЛ --- ---' 	, app: { films: 1, }, },
	{ id: 'escape' 			, title: 'втеча' 						, app: { films: 1, }, }, 
	{ id: 'prison' 			, title: 'в\'язниця' 					, app: { films: 1, }, },
	{ id: 'hostage' 		, title: 'заручники' 					, app: { films: 1, }, },
	{ id: 'killer' 			, title: 'кілери' 						, app: { films: 1, }, },
	{ id: 'maniac' 			, title: 'маніяки' 						, app: { films: 1, }, },
	{ id: 'drugs' 			, title: 'наркотики' 					, app: { films: 1, }, },
	{ id: 'pirates' 		, title: 'пірати' 						, app: { films: 1, }, },
	{ id: 'robbery' 		, title: 'пограбування' 				, app: { films: 1, }, },
	{ id: 'justice' 		, title: 'правосуддя' 					, app: { films: 1, }, }, 
	{ id: 'cop' 			, title: 'поліцейські' 					, app: { films: 1, }, },
	{ id: 'police' 			, title: 'поліція' 						, app: { films: 1, }, },
	{ id: 'hunting' 		, title: 'полюванняНаЛюдину' 			, app: { films: 1, }, },
	{ id: 'terrorist' 		, title: 'терористи' 					, app: { films: 1, }, },
	


	{ id: '-' 				, title: '--- --- ПАСТКИ --- ---' 		, app: { films: 1, }, },
	{ id: 'trap' 			, title: 'пастка' 						, app: { films: 1, }, }, // випадкові смертельні пастки
	{ id: 'surviving' 		, title: 'виживання' 					, app: { films: 1, }, }, // подорожі у часі
	{ id: 'quest' 			, title: 'квест' 						, app: { films: 1, }, },



	{ id: '-' 				, title: '--- --- СВІТИ --- ---' 		, app: { films: 1, }, },
	{ id: 'apocalypse' 		, title: 'апокаліпсис' 					, app: { films: 1, }, },
	{ id: 'future' 			, title: 'майбутнє' 					, app: { films: 1, }, },
	{ id: 'real' 			, title: 'наРеальнихПодіях' 			, app: { films: 1, }, }, // засновано на реальних подіях
	{ id: 'middleAges' 		, title: 'середньовіччя' 				, app: { films: 1, }, },
	{ id: 'ancient' 		, title: 'стародавнійСвіт' 				, app: { films: 1, }, }, // подорожі у часі
	{ id: 'world' 			, title: 'світ' 						, app: { films: 1, }, }, // вигаданий світ
	{ id: 'utopia' 			, title: 'утопія' 						, app: { films: 1, }, }, 
	{ id: 'time' 			, title: 'уЧасі' 						, app: { films: 1, }, }, // подорожі у часі



	{ id: '-' 				, title: '--- --- СПОРТ --- ---' 		, app: { films: 1, }, },
	{ id: 'sport' 			, title: 'спорт' 						, app: { films: 1, }, },
	{ id: 'armwrestling' 	, title: 'армрестлінг' 					, app: { films: 1, }, },
	{ id: 'fight' 			, title: 'бійці' 						, app: { films: 1, }, }, // бойові мистецтва
	{ id: 'box' 			, title: 'бокс' 						, app: { films: 1, }, }, // досліди в лабораторіях
	{ id: 'skydive' 		, title: 'парашюти' 					, app: { films: 1, }, },
	{ id: 'race' 			, title: 'перегони' 					, app: { films: 1, }, },
	{ id: 'surfing' 		, title: 'серфінг' 						, app: { films: 1, }, }, // подорожі у часі
	{ id: 'chess' 			, title: 'шахи' 						, app: { films: 1, }, }, // подорожі у часі



	{ id: '-' 				, title: '--- --- СПОРУДИ --- ---' 		, app: { films: 1, }, },
	{ id: 'bank' 			, title: 'банк' 						, app: { films: 1, }, },
	{ id: 'biomedlab' 		, title: 'біомедлаб' 					, app: { films: 1, }, }, // досліди в лабораторіях
	{ id: 'madhouse' 		, title: 'божевільня' 					, app: { films: 1, }, }, // досліди в лабораторіях
	


	{ id: '-' 				, title: '--- --- СФЕРИ --- ---' 		, app: { films: 1, }, },
	{ id: 'air' 			, title: 'авіація' 						, app: { films: 1, }, },
	{ id: 'medicine' 		, title: 'медицина' 					, app: { films: 1, }, },
	{ id: 'fashion' 		, title: 'мода' 						, app: { films: 1, }, },
	{ id: 'politic' 		, title: 'політика' 					, app: { films: 1, }, },
	{ id: 'psycho' 			, title: 'психо' 						, app: { films: 1, }, }, // зламай мозок



	{ id: '-' 				, title: '--- --- ТЕХНО --- ---' 		, app: { films: 1, }, },
	{ id: 'techno' 			, title: 'техно' 						, app: { films: 1, }, }, // технології
	{ id: 'cyber' 			, title: 'кібер' 						, app: { films: 1, }, },
	{ id: 'robot' 			, title: 'роботи' 						, app: { films: 1, }, },
	{ id: 'phone' 			, title: 'телефон' 						, app: { films: 1, }, }, // телефонні дзвінки/переговори
	{ id: 'photo' 			, title: 'фото' 						, app: { films: 1, }, }, // подорожі у часі



	{ id: '-' 				, title: '--- --- ТРАНСПОРТ --- ---' 	, app: { films: 1, }, },
	{ id: 'bus' 			, title: 'автобус' 						, app: { films: 1, }, },
	{ id: 'helicopter' 		, title: 'гелікоптер' 					, app: { films: 1, }, },
	{ id: 'ship' 			, title: 'кораблі' 						, app: { films: 1, }, },
	{ id: 'plane' 			, title: 'літаки' 						, app: { films: 1, }, },
	{ id: 'cars' 			, title: 'машини' 						, app: { films: 1, }, },
	{ id: 'subway' 			, title: 'метро'						, app: { films: 1, }, },
	{ id: 'motorbike' 		, title: 'мотоцикли'					, app: { films: 1, }, },
	{ id: 'skydive' 		, title: 'парашюти' 					, app: { films: 1, }, },
	{ id: 'submarine' 		, title: 'підводнийЧовен' 				, app: { films: 1, }, },
	{ id: 'train' 			, title: 'поїзд' 						, app: { films: 1, }, }, 
	{ id: 'tank' 			, title: 'танк' 						, app: { films: 1, }, },







	//{ id: 'air' 			, title: 'авіація' 			, },

	//{ id: 'railroad' 	, title: 'залізниця' 		, },
	





];




let objHashTags = {};
arrHashTags.forEach( k => {
	objHashTags[ k.id ] = k;
});












