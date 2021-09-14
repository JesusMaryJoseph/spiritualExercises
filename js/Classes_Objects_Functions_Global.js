/* Classes/Objects/Functions for Media(Images/Videos)
*  1.) GLOBAL variables,function 
*		for jit SpaceTree			[line 20]
*  2.) GLOBAL variable (player) 
*		for the YouTubeVideo API	[line 50]
*  3.) ControlButtonHandler 		[line 80]
*  4.) SeasonButtonHandler			[line 100]
*  5.) ButtonState 					[line 170]
*  6.) PlayerControl 				[line 260]						
*  7.) PageManager					[line 380]
*  8.) DOMCalls						[line 450]
*
*
*
*/




// Global Variables 
var labelType, useGradients, nativeTextSupport, animate;
var navHndlr;

// Immediately executed function for jit SpaceTree 
(function() {
  var ua = navigator.userAgent,
      iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
      typeOfCanvas = typeof HTMLCanvasElement,
      nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      textSupport = nativeCanvasSupport 
        && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
  //I'm setting this based on the fact that ExCanvas provides text support for IE
  //and that as of today iPhone/iPad current text support is lame
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
  nativeTextSupport = labelType == 'Native';
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
  })();











// Create GLOBAL variable (player) for the YouTubeVideo API
var player;
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


function onYouTubeIframeAPIReady() {
  //alert("VideoData.getData(VideoData.selectedSeason).ids[this.currentVideoId]: " + VideoData.getData(VideoData.selectedSeason).ids[this.currentVideoId]);
	player = new YT.Player('player', {
		width: '600',
		videoId: '0eSDd8EJjDU',  //null, 
		playerVars: {
			controls: 0,
			autoplay: 1,
		},
		events: {
			'onStateChange': PlayerControl.onPlayerStateChange
		}
	});
	PlayerControl.setSongTitle();
}








var ControlButtonHandler = {
	/* Properties */
	controlsHidden: true,

	/* Methods */
	showHidePlayerControls: function() {
		if( this.controlsHidden){
			DOMCalls.controlImagesContainerElement.classList.replace("hide-controls","show-controls");
		}else{
			DOMCalls.controlImagesContainerElement.classList.replace("show-controls","hide-controls");
	  	}
		this.controlsHidden = !this.controlsHidden;
	}
}  /* End of Class(Object) "ControlButtonHandler" */


	



var SeasonButtonHandler = {
	// Properties 
	selectedSeason: "ordinary",
	seasonOptionsHidden: true,

	// Methods  
	showHideSeasonList: function() {
		if(this.seasonOptionsHidden){
			DOMCalls.seasonOptionsElement.classList.add("show-season");
			this.seasonOptionsHidden = false;
		}else{ 
			DOMCalls.seasonOptionsElement.classList.remove("show-season");
			this.seasonOptionsHidden = true;
		}
	},

	changeSeason: function(evt) {
		let newSeason = evt.target.innerHTML;
		newSeason = newSeason.toLowerCase();
		if(newSeason == "ordinary time") {
			newSeason = "ordinary";
		}
		this.getDomElement(this.selectedSeason).classList.remove("selected-season");
		this.getDomElement(newSeason).classList.add("selected-season");
		this.selectedSeason = newSeason;
		VideoData.selectedSeason = this.selectedSeason;
		DOMCalls.seasonOptionsElement.classList.replace("show-season", "hide-season");
		this.seasonOptionsHidden = true;
	},

	leave: function() {
		if(this.seasonOptionsHidden) { return }
			this.showHideSeasonList();
	},

	getDomElement: function(id) {
		switch(id) {
			case "ordinary":
				return DOMCalls.ordinaryElement;
				break;
			case "advent":
				return DOMCalls.adventElement;
				break;
			case "christmas":
				return DOMCalls.christmasElement;
				break;
			case "lent":
				return DOMCalls.lentElement;
				break;
			case "easter":
				return DOMCalls.easterElement;
				break;
			default:
				alert("No such Object");
		} 
	}
}  /* End of Class(Object) "SeasonButtonHandler" */ 













var ButtonState = {
	// Properties
	playState: false,  /* false: playButton is '0ff' while true: playButton is 'on' */
	stopState: false,
	pauseState: false,
	shuffleState: false,

	// Methods
	getState: function(button) {
		switch (button) {
			case "play":
				return this.playState;
				break;
			case "stop":
				return this.stopState;
				break;
			case "pause":
				return this.pauseState;
				break;
			case "shuffle":
				return this.shuffleState;
				break;
			default:
				alert("Something wrong with ButtonState.getState()");
		}
	},


	changeState: function(button) {
		switch (button) {
			case "play":
				if ( this.playState ) {
					DOMCalls.playButtonElement.src = "imgs/Controls/play_white.png";
				}else{
					DOMCalls.playButtonElement.src = "imgs/Controls/play_on_orange.png";
				}
				this.playState = !this.playState;
				break;
			case "stop":
				if ( this.stopState ) {
					DOMCalls.stopButtonElement.src = "imgs/Controls/stop_white.png";
				}else{
					DOMCalls.stopButtonElement.src = "imgs/Controls/stop_on_orange.png";
				}
				this.stopState = !this.stopState;
				break;
			case "pause":
				if ( this.pauseState ) {
					DOMCalls.pauseButtonElement.src = "imgs/Controls/pause_white.png";
				}else{
					DOMCalls.pauseButtonElement.src = "imgs/Controls/pause_on_orange.png";
				}
				this.pauseState = !this.pauseState;
				break;
			case "shuffle":
				if ( this.shuffleState ) {
					DOMCalls.shuffleButtonElement.src = "imgs/Controls/playlist_shuffle_white.png";
				}else{
					DOMCalls.shuffleButtonElement.src = "imgs/Controls/playlist_shuffle_on_orange.png";
				}
				this.shuffleState = !this.shuffleState;
				break;
			default:
				alert("Something wrong with CheckControl.checkState()");
		}
	}, 

	reset: function() {
		this.playState = false;
		DOMCalls.playButtonElement.src = "imgs/Controls/play_white.png";  
		this.stopState = false;
		DOMCalls.stopButtonElement.src = "imgs/Controls/stop_white.png";
		this.pauseState = false;
		DOMCalls.pauseButtonElement.src = "imgs/Controls/pause_white.png";
		this.shuffleState = false;
		DOMCalls.shuffleButtonElement.src = "imgs/Controls/playlist_shuffle_white.png";
	}
}  /* End of Class(Object) "ButtonState" */ 












var PlayerControl = {
	// Properties
	currentVideoId: 0,
	playedVideos: [-1,-1,-1,-1,-1,-1,-1,-1],  //Arbitraily set to size = 8

	// Methods
	onPlayerStateChange: function(event) {
		if (event.data == YT.PlayerState.ENDED && player.getVideoLoadedFraction() > 0) {
			if (ButtonState.getState('shuffle') ) {
				let randomNumber = Math.floor( Math.random() * VideoData.getData(VideoData.selectedSeason).ids.length);
				while ( this.playedVideos.includes(randomNumber) ) {
					randomNumber = Math.floor( Math.random() * VideoData.getData(VideoData.selectedSeason).ids.length);
				}
				this.playedVideos.unshift(randomNumber);
				this.playedVideos.pop();
				this.currentVideoId = randomNumber;
			}else{         
				this.currentVideoId = this.currentVideoId + 1;
				if (this.currentVideoId >= VideoData.getData(VideoData.selectedSeason).ids.length) {
					this.currentVideoId = 0;
				}
			}
		  alert("ready to load, setTitle, and play");
			player.loadVideoById(VideoData.getData(VideoData.selectedSeason).ids[this.currentVideoId]);
			PlayerControl.setSongTitle();
			PlayerControl.startVideo();
		  alert("done");
		}
	},

	startVideo: function() {
		if( ButtonState.getState('play') ) {
			return;
		}
		player.playVideo();
		ButtonState.changeState('play');
		if( ButtonState.getState('stop') ) {
			ButtonState.changeState('stop');
		}
		if( ButtonState.getState('pause') ) {
			ButtonState.changeState('pause');
		}
	},

	pauseVideo: function() {
		if( !ButtonState.getState('play') ) {
			return;
		}
		player.pauseVideo();
		this.setSongTitle();
		ButtonState.changeState('pause');
		ButtonState.changeState('play');
	},


	stopVideo: function() {
		if( !ButtonState.getState('play') ) {
			return;
		}
		player.stopVideo();
		ButtonState.changeState('stop');
		ButtonState.changeState('play');
	},


	nextVideo: function() {
		if( !ButtonState.getState('play') ) {
			ButtonState.changeState('play');
		}
		if( ButtonState.getState('stop') ) {
			ButtonState.changeState('stop');
		}
		if( ButtonState.getState('pause') ) {
			ButtonState.changeState('pause');
		}
		if (this.currentVideoId < VideoData.getData(VideoData.selectedSeason).ids.length - 1) {
			this.currentVideoId = this.currentVideoId + 1;
		}else{
			this.currentVideoId = 0;
		}
		player.loadVideoById(VideoData.getData(VideoData.selectedSeason).ids[this.currentVideoId]);
		this.setSongTitle();
	},

	prevVideo: function() {
		if( !ButtonState.getState('play') ) {
			ButtonState.changeState('play');
		}
		if( ButtonState.getState('stop') ) {
			ButtonState.changeState('stop');
		}
		if( ButtonState.getState('pause') ) {
			ButtonState.changeState('pause');
		}
		if (this.currentVideoId > 0) {
			this.currentVideoId = this.currentVideoId - 1;
		}else{
			this.currentVideoId = VideoData.getData(VideoData.selectedSeason).ids.length - 1;
		}
		player.loadVideoById(VideoData.getData(VideoData.selectedSeason).ids[this.currentVideoId]);
		this.setSongTitle();
	},

	shuffle: function() {
		ButtonState.changeState('shuffle');
	},

	setSongTitle: function() {
		let labElementle = document.getElementById("song-title");
		labElementle.innerHTML = VideoData.getData(VideoData.selectedSeason).names[this.currentVideoId];        
	},
}   /* End of Class(Object) "PlayerControl" */ 











var PageManager = {
    /* Properties */
    activeContainer: "home",  /* options: ("home", "exercises")   default: "home"  */
    activeSubContainer: "selection", /* options: ("selection", "view")  default: "selection" */
    selectedNode: {},

    /* Methods  */
    goToExercises: function() {
        DOMCalls.homeContainerElement.classList.remove("z-50");
        DOMCalls.homeContainerElement.classList.replace("show-opacity","hide-opacity");
        this.activeContainer = "exercises";
        if(this.activeSubContainer == "selection"){
            DOMCalls.selectionContainerElement.classList.add("z-50");
            DOMCalls.selectionContainerElement.classList.replace("hide-opacity","show-opacity");
        }else{
            DOMCalls.viewContainerElement.classList.add("z-50");
            DOMCalls.viewContainerElement.classList.replace("hide-opacity","show-opacity");
        }
    },

    goToHome: function() {
        if(this.activeSubContainer == "selection"){
            DOMCalls.selectionContainerElement.classList.remove("z-50");
            DOMCalls.selectionContainerElement.classList.replace("show-opacity","hide-opacity");
        }else{
            DOMCalls.viewContainerElement.classList.remove("z-50");
            DOMCalls.viewContainerElement.classList.replace("show-opacity","hide-opacity");
        }
        DOMCalls.homeContainerElement.classList.replace("z-10","z-50");
        DOMCalls.homeContainerElement.classList.replace("hide-opacity","show-opacity");
        this.activeContainer = "home";
    },

    goToView: function(evt) {
        DOMCalls.selectionContainerElement.classList.remove("z-50");
        DOMCalls.selectionContainerElement.classList.replace("show-opacity","hide-opacity");
        this.activeSubContainer = "view";
        DOMCalls.viewContainerElement.classList.add("z-50");
        DOMCalls.viewContainerElement.classList.replace("hide-opacity","show-opacity");
        let clickedId = evt.target.id;
    //  alert("clickedId.slice(0,2): " + clickedId.slice(0,2));
        if(clickedId.length != 4){
            clickedId = clickedId.slice(0,2) + SelectedData.week + (SelectedData.day + 1);
         //   clickedId = clickedId.charAt(0) + "w" + SelectedData.week + (SelectedData.day + 1);
      //alert("formed clickedId: " + clickedId);
        }
        this.selectedNode = spExHT[clickedId];
    	SpaceTree.createNewST(this.selectedNode,SelectedMode.mode);
    },

    goToSelection: function() {
        DOMCalls.viewContainerElement.classList.remove("z-50");
        DOMCalls.viewContainerElement.classList.replace("show-opacity","hide-opacity");
        this.activeSubContainer = "selection";
        DOMCalls.selectionContainerElement.classList.add("z-50");
        DOMCalls.selectionContainerElement.classList.replace("hide-opacity","show-opacity");
    }
} /* End of Class(Object) "PageManager" */ 















var DOMCalls = {
    //Properties
    //Globel_Video_Home
    	//ControlButtonHandler
		controlImagesContainerElement: {},
		//SeasonButtonHandler
		seasonOptionsElement: {},
		ordinaryElement: {},
		adventElement: {},
		christmasElement: {},
		lentElement: {},
		easterElement: {},
		//ButtonState
		playButtonElement: {},
		stopButtonElement: {},
		pauseButtonElement: {},
		shuffleButtonElement: {},
		//PageManager
	    homeContainerElement: {},
	    selectionContainerElement: {},
	    viewContainerElement: {},
	    //LanguageManager
	    englishImageElement: {},
	    kirundiImageElement: {},
	    spanishImageElement: {},
	    englishElement: {},
	    kirundiElement: {},
	    spanishElement: {},
	    languageLabElement: {},
	    languageOptionsContainerElement: {},
	//Selection
        //SpaceTreeLog
		spaceTreeLogElement: {},
        //SpaceTreeLabel
        authorCreditElement: {},
        spaceTreeElement: {},


    //Methods
    initialize: function() {
    //alert("in DOMCalls.initialize()");
    //Globel_Video_Home
    	//ControlButtonHandler
  		this.controlImagesContainerElement = document.getElementById("control-images-container-id");
  		//SeasonButtonHandler
		this.seasonOptionsElement = document.getElementById("season-options-id"); 
		this.ordinaryElement = document.getElementById("ordinary-id");
		this.adventElement = document.getElementById("advent-id");
		this.christmasElement = document.getElementById("christmas-id");
		this.lentElement = document.getElementById("lent-id");
		this.easterElement = document.getElementById("easter-id");
		//ButtonState
		this.playButtonElement = document.getElementById("play-button-id"); 
		this.stopButtonElement = document.getElementById("stop-button-id");
		this.pauseButtonElement = document.getElementById("pause-button-id");
		this.shuffleButtonElement = document.getElementById("shuffle-button-id");
		//PageManager
        this.homeContainerElement = document.getElementById("home-container-id");
        this.selectionContainerElement = document.getElementById("selection-container-id");
        this.viewContainerElement = document.getElementById("view-container-id");
        //LanguageManager
        this.englishImageElement = document.getElementById("english-image-id");
        this.kirundiImageElement = document.getElementById("kirundi-image-id");
        this.spanishImageElement = document.getElementById("spanish-image-id");
        this.englishElement = document.getElementById("english-id");
        this.kirundiElement = document.getElementById("kirundi-id");
        this.spanishElement = document.getElementById("spanish-id");
        this.languageLabElement = document.getElementById("language-label-id");
        this.languageOptionsContainerElement = document.getElementById("language-options-container-id");
	//Selection
        //SpaceTreeLog
		this.spaceTreeLogElement = document.getElementById('space-tree-log-id');
        //SpaceTreeLabel
        this.authorCreditElement = document.getElementById("author-credit-id");
        this.spaceTreeElement = document.getElementById("space-tree-id");
       //alert("end of DOMCalls.initialize()");
    }
} /* End of Class(Object) "DOMCalls" */

	 
