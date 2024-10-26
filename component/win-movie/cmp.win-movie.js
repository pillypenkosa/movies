// © 2024 DJS 
 
 
 
 
 
class ComponentWinMovie { 
 
 
 
	static args = {}; 
 
 
 
	static html( objData = {} ) {  	// objData.pm == true - спойлер розвернутий, false - мінімалізований в title
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
		if ( objData ) {
			if ( objData.win && objData.win == 'movie' && objData.id ) {

				//console.log( 'objData: ', objData ); 

				if ( objFilms ) {
					if ( objFilms[ objData.id ] ) {


						let film = objFilms[ objData.id ];
						//console.log( 'film: ', film ); 


						setMeta({ 
							title 			: `${ film.title.ua } (${ film.year })`, 
							description 	: `${ film.title.ua } (${ film.year })`, 
							image 			: `img/poster/${ film.id }.jpg`, 
						}); 


						html = Component( 'Each-Movie', { filmID: objData.id, pm: true, } );

					}
				}
			}
		}


		return { tagParam, html };  
	} 
 
 
 
 
 
	static clcBtnTitle( elem ) { 
		const fooName = this.name + '.clc()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem', elem ); 




		let elemParnet = elem.closest( '.each-movie' );
		let elemBody = elemParnet.querySelector( '.body' );


		if ( !elemBody.innerHTML ) 
			elemBody.innerHTML = Component( 'Film', { filmID: elemParnet.dataset.id } );

		else 
			elemBody.classList.toggle( 'unvisible' );


		let htmlPM = '';
		if ( elemBody.classList.contains( 'unvisible' ) ) 
			htmlPM = '+';
		else 
			htmlPM = '-';
			
		elem.querySelector( '.pm' ).innerHTML = htmlPM;


	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
