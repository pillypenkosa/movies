// © 2024 DJS 
 
 
 
 
 
class ComponentFilm { 
 
 
 
	static args = {}; 
 
 
 
	static html( objData = {} ) { 
		const fooName = this.name + '.html()'; 
 
		this.args = objData.args ? objData.args : {}; 
 
 
 
		let tagParam = { 
			//'class' 		: '', 
			//'name' 		: '', 
			//'title' 		: '', 
			//'data-id' 	: '', 
			//'onclick' 	: '', 
			//'selected' 	: '', 
			//'defer' 		: '', 
		}; 
 
 
 
		let html = ''; 
 
 		//console.log( 'fooName: ', fooName ); 
		console.log( 'objData: ', objData ); 
 
		if ( objFilms ) {
			if ( objFilms[ objData.filmID ] ) {

				let htmlWikiUa = '';
				let htmlWikiRu = '';
				let htmlImdb = '';

				if ( objFilms[ objData.filmID ].internet ) {


					if ( objFilms[ objData.filmID ].internet.imdb ) 
						htmlImdb += `<a href="https://www.imdb.com/title/tt${ objFilms[ objData.filmID ].internet.imdb }" target="_blank"><img src="img/pic/logo_IMDb.png"></a>`;
					

					if ( objFilms[ objData.filmID ].internet.wiki_ua ) 
						htmlWikiUa += `<a href="https://uk.wikipedia.org/wiki/${ objFilms[ objData.filmID ].internet.wiki_ua }" target="_blank"><img src="img/pic/sn_wiki_ua.png"></a>`;
					
					if ( objFilms[ objData.filmID ].internet.wiki_ru ) 
						htmlWikiRu += `<a href="https://ru.wikipedia.org/wiki/${ objFilms[ objData.filmID ].internet.wiki_ru }" target="_blank"><img src="img/pic/sn_wiki_ru.png"></a>`;
					







				}



				html += `<div class="">
					<div class="img">
						<img src="img/poster/${ objData.filmID }.jpg" alt="${ objFilms[ objData.filmID ].title.ua }">
					</div>
					<div class="info">
						<div class="title-ua">${ objFilms[ objData.filmID ].title.ua }</div>
						<div class="title-en">${ objFilms[ objData.filmID ].title.en }</div>
						<div class="year">${ objFilms[ objData.filmID ].year }</div>

						<div class="internet">
							${ htmlImdb }
							${ htmlWikiUa }
							${ htmlWikiRu }
						</div>



					</div>

				</div>`;


			}

		}
		













 
 
		return { tagParam, html };  
	} 
 
 
 
 
 
	static clc( data ) { 
		const fooName = this.name + '.clc()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data', data ); 
 
	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
