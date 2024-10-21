




const dependences = [



	// масиви-списки з інших сайтів ( сторонні ) ----------------------------------------------------------------------------------
	
		// https://pillypenkosa.github.io/   ${ k.site }   /list/list.   ${ k.db }   .js
	
	{ db: 'country' 	, site: 'db' 		, },
	{ db: 'people' 		, site: 'media' 	, },  





	// масиви-списки з ЦЬОГО проекту ( свої ) -------------------------------------------------------------------------------------

	{ arr: 'studio' 		, },	
	{ arr: 'hashtag' 		, },
	{ arr: 'franchise' 		, },
	{ arr: 'movieset' 		, },
	{ arr: 'films' 			, },	





	// сервіси ---------------------------------------------------------------------------------------------------------------------

	//{ service: 'prepare' 			, },
	



	// компоненти загальні --------------------------------------------------------------------------------------------------------


	{ cmp: 'Win-Err404' 		, },
	{ cmp: 'Footer' 			, },
	{ cmp: 'Header' 			, },
	{ cmp: 'Logo' 				, },

	{ cmp: 'Menu' 				, },
	{ cmp: 'Menu-Filter-Movie' 	, },
	{ cmp: 'Menu-Filter-People' , },

	{ cmp: 'Cast' 				, },
	{ cmp: 'Each-Movie' 		, },

	//{ cmp: 'Franchise' 			, },







	// компоненти-контенти // win-сторiнки ----------------------------------------------------------------------------------------
	
	{ cmp: 'Win-Index' 					, win: /^index$/ 					, }, 	// regexp - url-маршрут (route) в адресному рядку
	
	{ cmp: 'Win-Actor' 					, win: /^actor$/ 					, }, 	
	{ cmp: 'Win-Actors' 				, win: /^actors$/ 					, }, 	
	{ cmp: 'Win-Movie' 					, win: /^movie$/ 					, }, 	
	{ cmp: 'Win-Movies' 				, win: /^movies$/ 					, }, 	
	{ cmp: 'Win-People' 				, win: /^people$/ 					, }, 	




	//{ cmp: 'Win-User' 			, regexp: /^user\/[0-9]+$/ 				, }, 	// user/{ n }
	//{ cmp: 'Win-User' 			, regexp: /^user\/[0-9A-Za-z]+$/ 		, }, 	// user/{ txt }
	//{ cmp: 'Win-Users' 			, regexp: /^users$/ 					, },










];




















