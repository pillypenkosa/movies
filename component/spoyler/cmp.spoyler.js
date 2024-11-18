// © 2024 DJS 
 
 
 
 
 
class ComponentSpoyler { 
 
 
 
	static args = {}; 
 
 
 
	static html( objData = {} ) { 
		const fooName = this.name + '.html()'; 
 
		this.args = objData.args ? objData.args : {}; 
 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'objData: ', objData ); 


 
		let tagParam = { 
			//'class' 		: '', 
			//'name' 		: '', 
			//'title' 		: '', 
			'data-key' 		: objData.key, 
			'data-id' 		: objData.data.id, 
			//'onclick' 		: 'ComponentSpoyler.clc( this )', 
			//'selected' 	: '', 
			//'defer' 		: '', 
		}; 
 
 
		let title = '';
		if ( objData ) {
			if ( objData.key ) {




				if ( objData.key == 'movie' ) {
					if ( objData.data ) {
						let film = objData.data;

						if ( film.title ) {
							if ( film.title.ua ) {
								title = film.title.ua;

								if ( film.year )
									title += ` (${ film.year })`;

								if ( film.rating ) {
									let htmlRating = '';

									//console.log( film );

									if ( film.rating == '5' )
										htmlRating = ' <span class="txt-rating5">&#10003;</span>';

									if ( film.rating == '5+' )
										htmlRating = ' <span class="txt-rating5p">&#10030;</span>';

									title = title + htmlRating;
								}
							}
						}
					}
				}


				if ( objData.key == 'people' ) {
					if ( objData.data ) {

						let user = objData.data;


						if ( user.name ) {

							//console.log( objData.data );


							//let name = '';
							if ( user.name ) {
								if ( user.name.n ) 
									title += user.name.n;
								
								if ( user.name.s ) 
									title += ' ' + user.name.s;
							}
						}
					}
				}
			}
		}

 
		let html = `
			<div class="title" onclick="${ this.name }.clc( this )">
				<div class="txt">${ title }</div>
				<div class="pm" title="Розгорнути / згорнути">+</div>
			</div>
			<div class="body"></div>
		`; 
 
 

 
 
 
		return { tagParam, html };  
	} 
 
 
 
 
 
	static clc( elem ) { 
		const fooName = this.name + '.clc()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem: ', elem );

		let elemParent = elem.closest( 'cmp-spoyler' );



		let key = elemParent.dataset.key;
		let id = elemParent.dataset.id;


		//console.log( 'key: ', key );
		//console.log( 'id: ', id );



		let html = '';

		if ( key == 'movie' ) 
			html = this.getMovie( id );

		if ( key == 'people' ) 
			html = this.getPeople( id );



		let elemBody = document.querySelector( `cmp-spoyler[ data-id="${ id }" ] .body` );


		if ( !elemBody.innerHTML ) 
			elemBody.innerHTML = html;

		else 
			elemBody.classList.toggle( 'unvisible' );


		let htmlPM = '';
		if ( elemBody.classList.contains( 'unvisible' ) ) 
			htmlPM = '+';
		else 
			htmlPM = '-';
			
		elem.querySelector( '.title .pm' ).innerHTML = htmlPM;



		elemBody.innerHTML = html;
		
	} 
 
 


	static getMovie( id = '' ) { 
		const fooName = this.name + '.getMovie()'; 
		//console.log( 'fooName: ', fooName ); 



		let film = {};
		if ( id ) {
			if ( objFilms && objFilms[ id ] ) 
				film = objFilms[ id ];
		}

		
		let html = Component( 'Movie', film );


		return html;

	}




	static getPeople( id = '' ) { 
		const fooName = this.name + '.getPeople()'; 
		//console.log( 'fooName: ', fooName ); 



		let user = {};
		if ( id ) {
			if ( objListPeople && objListPeople[ id ] ) 
				user = objListPeople[ id ];
		}

		//console.log( 'user: ', user ); 
		
		let html = Component( 'Each-People', user );


		return html;
	}


















	static linkTo( data = {} ) {
		const fooName = this.name + '.linkTo()'; 

		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data: ', data ); 







	}






 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
