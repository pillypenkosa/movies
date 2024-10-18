// © 2024 DJS 
 
 
 
 
 
class ComponentWinActor { 
 
 
 
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
 
 
 
		let html = fooName; 


 
		setMeta({ 
			title 			: fooName, 
			description 	: 'Опис...', 
			//image 		: '', 
		}); 
 
 
		if ( objData ) {
			if ( objData.win && objData.uid && objData.win == 'actor' ) {


		//console.log( fooName ); 
		//console.log( objData ); 
 
 



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
 
 
 	
 
 
 
 
 	
 
 
