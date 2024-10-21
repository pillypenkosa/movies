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
		let film = {};
 
 		//console.log( 'fooName: ', fooName ); 
		//console.log( 'objData: ', objData ); 
 
		if ( objFilms ) {
			if ( objFilms[ objData.filmID ] ) {

				film = objFilms[ objData.filmID ];



				let htmlWikiUa = '';
				let htmlWikiRu = '';
				let htmlImdb = '';
				let htmlHdVip = '';
				let htmlAuliki7 = '';




				if ( film.internet ) {

					if ( film.internet.imdb ) 
						htmlImdb += `<a href="https://www.imdb.com/title/tt${ film.internet.imdb }" target="_blank" title="IMDb"><img src="img/pic/logo_IMDb.png" alt="IMDb"></a>`;
					
					if ( film.internet.wiki_ua ) 
						htmlWikiUa += `<a href="https://uk.wikipedia.org/wiki/${ film.internet.wiki_ua }" target="_blank" title="WikiUa"><img src="img/pic/sn_wiki_ua.png" alt="WikiUa"></a>`;
					
					if ( film.internet.wiki_ru ) 
						htmlWikiRu += `<a href="https://ru.wikipedia.org/wiki/${ film.internet.wiki_ru }" target="_blank" title="WikiRu"><img src="img/pic/sn_wiki_ru.png" alt="WikiRu"></a>`;
					
					if ( film.internet.ashdivip ) 
						htmlHdVip = `<a href="https://ashdi.vip/vod/${ film.internet.ashdivip }" target="_blank" title="HDVip"><img src="img/pic/logo_hdvip.png" alt="HDVip"></a>`;
					
					if ( film.internet.auliki7 ) 
						htmlAuliki7 = `<a href="http://auliki7.xyz/stream.php?name=films/${ film.internet.auliki7 }.mp4" target="_blank" title="Auliki7"><img src="img/pic/logo_auliki7.png" alt="Auliki7"></a>`;
				}


				let htmlCountry = '';
				if ( film.country ) {
					for ( let k in film.country ) {

						if ( objCountry[ k ] ) {
							if ( objCountry[ k ].title ) {
								if ( objCountry[ k ].title.ua ) 
									htmlCountry += `${ objCountry[ k ].title.ua }, `;
							}
						}
					}
					htmlCountry = htmlCountry.slice( 0, -2 );
				}


				let htmlGenre = '';
				if ( film.genre ) {
					for ( let k in film.genre ) {
						if ( objGenres[ k ] ) {
							if ( objGenres[ k ].title ) {

								htmlGenre += `${ objGenres[ k ].title }, `;
							}
						}
					}

					htmlGenre = htmlGenre.slice( 0, -2 );
				}



				let htmlHash = '';
				if ( film.hash ) {
					for ( let k in film.hash ) {
						if ( objHashTags[ k ] ) {
							if ( objHashTags[ k ].title ) {

								htmlHash += `<div class="hashtag pointer">#${ objHashTags[ k ].title }</div>`;
							}
						}
					}


					//htmlHash.slice( 0, -2 );
				}




						//<div class="title-ua">${ film.title.ua }</div>
				html += `
					<div class="section1">
						<div class="title-en">${ film.title.en }</div>
						<div class="year">( ${ film.year } )</div>
					</div>


					<div class="section2">
						<div class="img">
							<img src="img/poster/${ objData.filmID }.jpg" alt="${ film.title.ua }">
						</div>

						<div class="internet">
							${ htmlImdb }
							${ htmlWikiUa }
							${ htmlWikiRu }
							${ htmlHdVip }
							${ htmlAuliki7 }
						</div>
					</div>

					<div class="section3">
						<div class="keyval"><span class="key">рік:</span> <span class="val">${ film.year }</span></div>
						<div class="keyval"><span class="key">країна:</span> <span class="val">${ htmlCountry }</span></div>
						<div class="keyval"><span class="key">жанр:</span> <span class="val">${ htmlGenre }</span></div>
					</div>

					<div class="section4">${ htmlHash }</div>

					<div class="section5">
						${ film.cast ? Component( 'Cast', film  ) : '' }
					</div>
				`;
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
 
 
 	
 
 
 
 
 	
 
 
