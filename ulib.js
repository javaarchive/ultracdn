console.log("Manager Loading");
  mscript = {
    editable: function(){document.designMode = "on";}
  }
console.log("ulib finished loading");
var ujs = {
	getAllPosts:function(){
		var posts = document.getElementsByClassName("cmty-post-html");
		return posts;
	},
	renderBBcode:function (code,callback) {
		last_compile = "code";

		$.post( "/m/texer/ajax.php", {
			action : "aopscode",
			token : "fsiabgvp", // Change if you want to a texer id
			tex : Base64.encode( code ),
			rerender : AoPS.session.a && e.ctrlKey
		}, function( data ) {
			if ( data.error_code ) {
				// Turn off re-render so we don't duplicate error
				if ( rerender_timeout ) {
					clearTimeout( rerender_timeout );
				}
				AoPS.Ui.Modal.showAlertQuick( data.error_msg );
			} else {
				//var div = document.getElementById( "preview" );
				//div.innerHTML = data.response.html;
				//$( div ).find( "code" ).each( function( idx, dom ) {
				//	hljs.highlightBlock( dom );
				//} );
				// Rainbow.color( div );
				callback(data.response.html);
				return data.response.html;
			}
		}, "json" );
	}

}
window.uload();
