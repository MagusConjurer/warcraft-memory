(this["webpackJsonpmemory-app"]=this["webpackJsonpmemory-app"]||[]).push([[0],{27:function(e){e.exports=JSON.parse('[{"id":1,"name":"ChaosGrom","image":"/images/characters/ChoasGrom.png","clicked":false},{"id":2,"name":"Demoness","image":"/images/characters/Demoness.png","clicked":false},{"id":3,"name":"DeathKnightArthas","image":"/images/characters/DKArthas.png","clicked":false},{"id":4,"name":"Dragon","image":"/images/characters/Dragon.png","clicked":false},{"id":5,"name":"Dryad","image":"/images/characters/Dryad.png","clicked":false},{"id":6,"name":"ElfVillager","image":"/images/characters/ElfVillager.png","clicked":false},{"id":7,"name":"FlyingMachine","image":"/images/characters/FlyingMachine.png","clicked":false},{"id":8,"name":"Gul\'dan","image":"/images/characters/Guldan.png","clicked":false},{"id":9,"name":"Headhunter","image":"/images/characters/Headhunter.png","clicked":false},{"id":10,"name":"Kael\'thas","image":"/images/characters/Kael\'thas.png","clicked":false},{"id":11,"name":"KelThuzad","image":"/images/characters/KelThuzad.png","clicked":false},{"id":12,"name":"Maiev","image":"/images/characters/Maiev.png","clicked":false},{"id":13,"name":"Malfurion","image":"/images/characters/Malfurion.png","clicked":false},{"id":14,"name":"Medivh","image":"/images/characters/Medivh.png","clicked":false},{"id":15,"name":"MortarTeam","image":"/images/characters/MortarTeam.png","clicked":false},{"id":16,"name":"Muradin","image":"/images/characters/Muradin.png","clicked":false},{"id":17,"name":"Necromancer","image":"/images/characters/Necromancer.png","clicked":false},{"id":18,"name":"Rexxar","image":"/images/characters/Rexxar.png","clicked":false},{"id":19,"name":"SeaWitch","image":"/images/characters/SeaWitch.png","clicked":false},{"id":20,"name":"Shaman","image":"/images/characters/Shaman.png","clicked":false},{"id":21,"name":"ChenStormstout","image":"/images/characters/Stormstout.png","clicked":false},{"id":22,"name":"Sylvanas","image":"/images/characters/Sylvanas.png","clicked":false},{"id":23,"name":"Thrall","image":"/images/characters/Thrall.png","clicked":false},{"id":24,"name":"IllidanMetamorphisis","image":"/images/characters/Illidan.png","clicked":false}]')},28:function(e,a,t){e.exports=t(45)},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var c=t(0),r=t.n(c),n=t(14),i=t.n(n),s=(t(33),t(7)),o=t(8),l=t(15),m=t(11),h=t(10),d=t(25),u=t(22);t(34);var g=function(e){var a="."+e.image;return r.a.createElement(u.a,null,r.a.createElement(u.a.Img,{"data-key":e["data-key"],onClick:e.onClick,alt:e.name,src:a}))},p=(t(35),function(e){Object(m.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(s.a)(this,t);for(var c=arguments.length,r=new Array(c),n=0;n<c;n++)r[n]=arguments[n];return(e=a.call.apply(a,[this].concat(r))).state={characters:e.props.characters},e.shuffleCards=function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*a),c=e[a];e[a]=e[t],e[t]=c}return e},e.handleCardClicked=function(a){a.preventDefault();var t=parseInt(a.target.getAttribute("data-key")),c=e.state.characters.findIndex((function(e){return e.id===t})),r=e.state.characters.slice();!1===r[c].clicked&&!0!==e.props.lost?(r[c].clicked=!0,e.shuffleCards(r),e.props.updateCharacters(r)):!1===e.props.lost&&e.props.updateLoseCondition(!0)},e}return Object(o.a)(t,[{key:"componentDidUpdate",value:function(e){e.characters!==this.props.characters&&this.setState({characters:this.props.characters})}},{key:"render",value:function(){var e=this;return r.a.createElement(d.a,null,this.state.characters.map((function(a){return r.a.createElement(g,{key:a.id.toString(),"data-key":a.id,onClick:e.handleCardClicked,name:a.name,image:a.image})})))}}]),t}(r.a.Component)),f=t(16),k=t(21),v=(t(36),function(e){Object(m.a)(t,e);var a=Object(h.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,{bg:"dark",expand:"lg"},r.a.createElement(k.a.Link,{href:"https://magusconjurer.github.io/portfolio.html"},"Return to Portfolio"),r.a.createElement(k.a,{className:"ml-auto"},r.a.createElement(f.a.Text,null,"Score: ",this.props.score),r.a.createElement(f.a.Text,null,"|"),r.a.createElement(f.a.Text,null,"High Score: ",this.props.highScore)))}}]),t}(r.a.Component)),b=t(26),C=(t(43),function(e){Object(m.a)(t,e);var a=Object(h.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(b.a,null,r.a.createElement("h3",{id:"status"},!1===this.props.lost&&this.props.score>=0?[24===this.props.score?"You clicked every card once!":"Choose a card, but don't click the same one twice!"]:"Oops, you clicked the same card twice! Let's try again."))}}]),t}(r.a.Component)),y=t(27),S=function(e){Object(m.a)(t,e);var a=Object(h.a)(t);function t(e){var c;return Object(s.a)(this,t),(c=a.call(this,e)).updateCharacters=function(e){c.setState({characters:e}),c.updateScore()},c.updateLoseCondition=function(e){c.setState({lost:e}),c.restartGame(e)},c.restartGame=function(e){if(!0===e){var a=c.state.characters.slice();a.forEach((function(e){!0===e.clicked&&(e.clicked=!1)})),setTimeout(function(){this.setState({characters:a,lost:!1,score:0})}.bind(Object(l.a)(c)),3e3)}},c.updateCharacters=c.updateCharacters.bind(Object(l.a)(c)),c.updateLoseCondition=c.updateLoseCondition.bind(Object(l.a)(c)),c.state={characters:y,lost:!1,score:0,highScore:0},c}return Object(o.a)(t,[{key:"updateScore",value:function(){var e=0,a=this.state.highScore,t=0;this.state.characters.forEach((function(a){!0===a.clicked&&e++})),t=e>a?e:a,this.setState({score:e,highScore:t})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(v,{score:this.state.score,highScore:this.state.highScore}),r.a.createElement(C,{score:this.state.score,lost:this.state.lost}),r.a.createElement(p,Object.assign({},this.state,{updateLoseCondition:this.updateLoseCondition,updateCharacters:this.updateCharacters})))}}]),t}(r.a.Component);t(44);var E=function(){return r.a.createElement(S,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.253a28c6.chunk.js.map