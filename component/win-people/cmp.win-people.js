
 
 
 
 
 
class ComponentWinPeople { 
 
 
 
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
 
		//console.log( fooName ); 
		//console.log( objData ); 



		if ( objData ) {
			if ( objData.win && objData.win == 'people' ) {

				//console.log( arrSelected );

				if ( objData.uid ) {

					//console.log( objData.uid );
					//console.log( arrSelected );
					//console.log( objListPeople );

					let user = {};
					if ( objListPeople[ objData.uid ] ) {

						html += Component( 'Each-People', objListPeople[ objData.uid ] ); 

						let user = objListPeople[ objData.uid ];



						let name = '';
						if ( user.name ) {
							if ( user.name.n ) 
								name += user.name.n;
							
							if ( user.name.s ) 
								name += ' ' + user.name.s;
						}


						setMeta({ 
							title 			: name, 
							description 	: name,
							keywords 		: name,
							image 			: `https://pillypenkosa.github.io/media/img/people/${ user.id }/1.jpg`, 
						});
					}
				}

				if ( objData.cat ) {

/*
НЕ видаляти - Пошук (людей без посилання на WikiUA)

					if ( objData.cat == 'noWikiUa' ) {
						arrSelected = arrSelected.filter( k => {
							if ( k.internet ) {
								if ( !k.internet.wiki_ua ) {

									console.log( k.id );
									return true;
								}
							}
						});
					}

*/
					let arrSelected = [];

					if ( objData.cat == 'actor' ) {
						arrSelected = arrListPeople.filter( k => {

							if ( k.id && objFilmsActorIDs[ k.id ] ) 
								return true;
						});
					}

					if ( objData.cat == 'director' ) {
						arrSelected = arrListPeople.filter( k => {

							if ( k.id && objFilmsDirectorIDs[ k.id ] ) 
								return true;
						});
					}

					if ( objData.cat == 'composer' ) {
						arrSelected = arrListPeople.filter( k => {

							if ( k.id && objFilmsComposerIDs[ k.id ] ) 
								return true;
						});
					}


					arrSelected.forEach( k => {
						
						html += Component( 'Spoyler', { key: 'people', data: k, } ); 
					});
				}
			}
		}

		return { tagParam, html };  
	} 
 
 
 
 
 
	static clcSpoyler( elem ) { 
		const fooName = this.name + '.clcSpoyler()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem:', elem ); 

		let innerBody = elem.closest( '.each-people' ).querySelector( '.body' ).innerHTML;

		//console.log( 'innerBody: ', innerBody ); 

		let elemParent = elem.closest( '.each-people' );
		let uid = elemParent.dataset.id;

		//console.log( 'uid: ', uid ); 


		if ( !innerBody ) 
			elem.closest( '.each-people' ).querySelector( '.body' ).innerHTML = this.getPeopleHTML( uid );

		else 
			elem.closest( '.each-people' ).querySelector( '.body' ).classList.toggle( 'unvisible' );
	} 
 
 






 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
