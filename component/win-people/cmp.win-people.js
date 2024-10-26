// © 2024 DJS 
 
 
 
 
 
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
 
 
		setMeta({ 
			title 			: 'Movie People', 
			description 	: 'Опис...', 
			//image 		: '', 
		}); 
 
 


		let arrSelected = arrListPeople.filter( k => {

			if ( k.hash ) {
				if ( k.hash.movie ) 
					return true;
			}
		});



		//console.log( arrSelected );

		if ( objData ) {
			if ( objData.win && objData.win == 'people' ) {

				//console.log( arrSelected );



				if ( objData.uid ) {

					//alert( objData.uid );

					arrSelected = arrSelected.filter( k => k.id == objData.uid  );

					//alert( objData.uid );

					arrSelected.forEach( k => {
						html += Component( 'Each-People', { uid: k.id, pm: true, } ); 
					});

				}



				if ( objData.cat ) {

					//console.log( objData.cat );

					arrSelected = arrSelected.filter( k => {
						if ( k.hash ) {
							if ( k.hash[ objData.cat ] ) 
								return true;
						}
					});

					arrSelected.forEach( k => {
						html += Component( 'Each-People', { uid: k.id, pm: false, } ); 
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
 
 
 	
 
 
 
 
 	
 
 
