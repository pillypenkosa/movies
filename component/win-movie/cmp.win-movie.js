// © 2024 DJS 
 
 
 
 
 
class ComponentWinMovie { 
 
 
 
	//static args = {}; 
 
 
 
	static html( objData = {} ) {  	// objData.pm == true - спойлер розвернутий, false - мінімалізований в title
		const fooName = this.name + '.html()'; 
 
		//this.args = objData.args ? objData.args : {}; 
		//console.log( 'objData: ', objData ); 
 
 
 
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

		if ( objData ) {
			if ( objData.win && objData.win == 'movie' ) {
				if ( objData.id ) {

					//console.log( 'objData: ', objData ); 

					if ( objFilms ) {
						if ( objFilms[ objData.id ] ) {


							let film = objFilms[ objData.id ];
							//console.log( 'film: ', film ); 


							let txtGenre = '';
							if ( film.genre ) {
								for ( let k in film.genre ) {

									if ( objGenres[ k ] ) {
										if ( objGenres[ k ].title ) 
											txtGenre += `${ objGenres[ k ].title.toLowerCase() }, `;

									}
								}



								txtGenre = txtGenre.slice( 0, -2 );
								//console.log( txtGenre );

								//film.genre = txtGenre;

								txtGenre = txtGenre[ 0 ].toUpperCase() + txtGenre.slice( 1 );

								//console.log( txtGenre );

							}


							let txtCountry = '';
							if ( film.country ) {
								for ( let k in film.country ) {

									if ( objCountry[ k ] ) {
										if ( objCountry[ k ].title ) {
											if ( objCountry[ k ].title.ua ) 
												txtCountry += `${ objCountry[ k ].title.ua }, `;
										}
									}
								}
								//txtCountry = txtCountry.slice( 0, -2 );
							}


							//console.log( txtCountry );


							html = Component( 'Movie', film );


							setMeta({ 
								title 			: `${ film.title.ua } (${ film.year })`, 
								description 	: `${ film.title.ua } (${ txtCountry }${ film.year } рік). ${ txtGenre }.`,
								keywords 		: `${ film.title.ua }, ${ film.year }, ${ txtGenre }`,
								image 			: `img/poster/${ film.id }.jpg`, 
							}); 

						} else 
							html = Component( 'Win-Err404' );
					}
				
				} else 
					html = Component( 'Win-Err404' );

			}
		}



		return { tagParam, html };  
	} 
 
 
 
 
 
	static clcBtnTitle( elem ) { 
		const fooName = this.name + '.clc()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem', elem ); 


	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
