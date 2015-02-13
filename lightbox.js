var body = document.body;

var fundo = document.createElement("div");
fundo.setAttribute('id','fundo');
fundo.setAttribute('style','position:fixed;z-index:1000;top:0;left:0;background:#000;width:0%;height:0%;opacity:0.5;');

var lightbox = document.createElement('div');
lightbox.setAttribute('id','lightbox');
lightbox.setAttribute('style','position:fixed;z-index:1001;background:#e9ebf3;width:27%;height:100%;top:68.5%;left:25%;margin-left:-25%;margin-top:7%;padding-bottom: 20%;border:3px solid #CCC;-webkit-border-radius:5px;');

var c = document.createElement('a');
c.setAttribute('id','close');
c.setAttribute('href','#');
c.setAttribute('style','float:right;text-decoration:none;padding:0px;color:#356C81;');
c.innerHTML = "fechar";

lightbox.appendChild(c);

var content = document.createElement('div');
content.setAttribute('id','content');
content.setAttribute('style','padding:0px;clear:both;border:none;');

var iframe = document.createElement('iframe');
iframe.setAttribute('src','http://www.vacuumsolutions.com.br/12345.html');
iframe.setAttribute('style','border:none;');
iframe.setAttribute('width', '100%');
iframe.setAttribute('height', '148');

content.appendChild(iframe);
lightbox.appendChild(content);

body.appendChild(fundo);
body.appendChild(lightbox);

c.onclick = function(){
	
	body.removeChild(fundo);
	body.removeChild(lightbox);
	
}