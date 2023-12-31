document.addEventListener('DOMContentLoaded', function() {
	imgs=document.querySelectorAll('img');
	imgs.forEach(function(img){
		img.onerror=function(){
			this.src='/rsrc/img/solidsnakee_.jpg';
		}
	});
});

const appAutoload=(function(w){
	let value=fname=i=el=uri=null;
	let regex={};
	regex['uri'] = /^(https?):\/\/[^\s/$.?#].[^\s]*$/i;
	const rsrc={
		"js":[
			"jquery.min.js",
			"popper.min.js",
			"bootstrap.min.js",
			"helper.js",
			"handler.js",
			"tools.js",
			"https://cse.google.com/cse.js?cx=a3eab434c79534db2",
		],
		"css":[
			"bootstrap.min.css",
			"main.css", 
		],
	};
	for(const key in rsrc){
		if(rsrc.hasOwnProperty(key))
		{
			value=rsrc[key];
			value.forEach((fname,i)=>{
				if(fname!==null && fname!==''){
					uri=(regex['uri'].test(fname))?fname:"/rsrc/"+key+'/'+fname;
					if(key==='css')
					{
						el=document.createElement("link");
						el.href=uri;
						el.rel='stylesheet';
						document.head.appendChild(el);
					}			
					else if(key==='js')
					{
						el=document.createElement("script");
						el.src=uri;
						document.body.appendChild(el);
					}
				}
			});
		}
	}
	
	setTimeout(function(){
		$(document).ready(function(){
			$(".gscInput").keypress(function(e){
				let data=$(this).data();
				let target=data.target;
				if(e.keyCode===13)
				{
					document.location.href='#gsc.tab=0&gsc.q='+(this.value);
					$("#"+target).show();
				}
			});
				
			$(".btn-close").click(function(){
				let data=$(this).data();
				let target=data.target;
				$("#"+target).hide();
			});
		});
	},1300);
})(window,undefined);

/*
 * Author:ssolidsnake
 * Threads:https://www.threads.net/@solidsnakee_
 * Nitter:https://nitter.net/solidsnakee_
 * X:https://x.com/solidsnakee_
 * */
