
 
 
 
 
 
class ComponentTitleSpoyler { 
 
 
 
	static args = {}; 
 
 
 
	static html( objData = {} ) { 
		const fooName = this.name + '.html()'; 
 
		this.args = objData.args ? objData.args : {}; 
 



		//console.log( 'objData: ', objData ); 
 
 
		let tagParam = { 
			//'class' 		: '', 
			//'name' 		: '', 
			//'title' 		: '', 
			//'data-id' 	: '', 
			'onclick' 		: objData.foo, 
			//'selected' 	: '', 
			//'defer' 		: '', 
		}; 
 
 
 
		let html = `
			<div class="txt">${ objData.title }</div>
			<div class="pm">+</div>
		`; 
 
 

 
 
		return { tagParam, html };  
	} 
 
 
 
 
 
	static clc( data ) { 
		const fooName = this.name + '.clc()'; 
 /*
		console.log( 'fooName: ', fooName ); 
		console.log( 'data: ', data ); 


*/





 
	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
