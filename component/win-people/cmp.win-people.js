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

				if ( objData.cat ) {

					//console.log( objData.cat );

					arrSelected = arrSelected.filter( k => {
						if ( k.hash ) {
							if ( k.hash[ objData.cat ] ) 
								return true;
						}
					});
				}

				arrSelected.forEach( k => {

					let name = '';

					if ( k.name ) {
						if ( k.name.n ) 
							name += k.name.n;
						
						if ( k.name.s ) 
							name += ' ' + k.name.s;
					}


					html += `<div class="">${ name }</div>`;
				});
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
 
 
 	
 
 
 
 
 	
 
 
