// © 2024 DJS 
 
 
 
 
 
class ComponentWinMovies { 
 
 
 
	static args = {}; 
 
 
 
	static html( objData = {} ) { 
		const fooName = this.name + '.html()'; 
 
		//this.args = objData.args ? objData.args : {}; 
 
 
 
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
 
		//console.log( objData ); // GET - параметры

		let arrSelected = arrFilms;

		//console.log( arrSelected );

		if ( objData ) {

			if ( objData.cast ) {
				arrSelected = arrSelected.filter( k => {
					if ( k.cast ) {
						if ( k.cast[ objData.cast ] )
							return true;
					}
				});
			}

			if ( objData.director ) {
				arrSelected = arrSelected.filter( k => {
					if ( k.director ) {
						if ( k.director[ objData.director ] )
							return true;
					}
				});
			}

			if ( objData.composser ) {
				arrSelected = arrSelected.filter( k => {
					if ( k.composser ) {
						if ( k.composser[ objData.composser ] )
							return true;
					}
				});
			}

			if ( objData.studio ) {
				arrSelected = arrSelected.filter( k => {
					if ( k.studio ) {
						if ( k.studio[ objData.studio ] )
							return true;
					}
				});
			}

			if ( objData.hash ) {
				arrSelected = arrSelected.filter( k => {
					if ( k.hash ) {
						if ( k.hash[ objData.hash ] )
							return true;
					}
				});
			}

			if ( objData.letter ) {
				if ( objData.letter != 'all' ) {

					arrSelected = arrSelected.filter( k => {
						if ( k.title ) {
							if ( k.title.ua ) {

								let firstSym = k.title.ua.slice( 0, 1 );

								if ( objData.letter == 'eng' ) {
									if ( /^[A-Z]$/.test( firstSym ) ) 
										return true;
								
								} else if ( objData.letter == '123' ) {
									if ( /^[0-9]$/.test( firstSym ) ) 
										return true;

								} else {

									//console.log( objData.letter );
									//console.log( decodeURI( objData.letter ) );
									//console.log( firstSym );

									if ( decodeURI( objData.letter ).toUpperCase() == firstSym ) 
										return true;
								}
							}
						}
					});
				}
			}


			if ( objData.year ) {
				arrSelected = arrSelected.filter( k => {
					if ( k.year ) {
						if ( k.year == +objData.year )
							return true;
					}
				});
			}

			if ( objData.genre ) {
				arrSelected = arrSelected.filter( k => {
					if ( k.genre ) {
						if ( k.genre[ objData.genre ] ) 
							return true;
					}
				});
			}

			if ( objData.country ) {
				arrSelected = arrSelected.filter( k => {
					if ( k.country ) {
						if ( k.country[ objData.country ] ) 
							return true;
					}
				});
			}

			if ( objData.set ) {
				if ( objData.set == '_5+' ) {
					arrSelected = arrSelected.filter( k => {
						
						if ( k.rating ) {
							if ( k.rating == '5+' )
								return true;
						}
					});
				}

				if ( objData.set == '_5' ) {
					arrSelected = arrSelected.filter( k => {

						if ( k.rating ) {
							if ( k.rating == '5+' || k.rating == +'5' )
								return true;
						}
					});
				}
			}

			if ( objData.sort ) {
				if ( objData.sort == 'year_up' ) {

    				function sortUp( a, b ) { return ( a.year > b.year ) ? 1 : -1; }     
    				arrSelected.sort( sortUp );
				}

				if ( objData.sort == 'year_down' ) {

    				function sortDown( a, b ) { return ( a.year < b.year ) ? 1 : -1; }     
    				arrSelected.sort( sortDown );
				}

			}
		}





		


		//console.log( arrSelected );


		//console.log( arrSelected );

		arrSelected.forEach( k => {
			html += `<div class="each-movie">
				<div class="title pointer" onclick="${ this.name }.clcBtnTitle( this )">${ k.title.ua } (${ k.year })</div>
				<div class="body unvivisible">
					${ Component( 'Film', { filmID: k.id } ) }
				</div>
			</div>`;
		});



 
 
		setMeta({ 
			title 			: fooName, 
			description 	: 'Опис...', 
			//image 		: '', 
		}); 
 
 
 
		return { tagParam, html };  
	} 
 
 
 
 
 
	static clcBtnTitle( elem ) { 
		const fooName = this.name + '.clcBtnTitle()'; 
 
		console.log( 'fooName: ', fooName ); 
		console.log( 'elem: ', elem ); 
 

		elem.closest( '.each-movie' ).querySelector( '.body' ).classList.toggle( 'unvivisible' );








	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
