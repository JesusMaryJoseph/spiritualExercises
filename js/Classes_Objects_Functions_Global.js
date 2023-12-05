/* Classes/Objects/Functions for Media(Images/Videos)
*  1.) GLOBAL variables,function 
*		for jit SpaceTree			[line 20]
*  2.) GLOBAL variable (player) 
*		for the YouTubeVideo API	[line 50]
*  3.) ControlButtonHandler 		[line 80]
*  4.) SeasonButtonHandler			[line 100]
*  5.) ButtonStateManager 			[line 170]
*  6.) PlayerControlsManager 		[line 260]
*  7.) VideoDataManager          	[line 390]						
*  8.) PageManager					[line 430]
*  9.) DOMCallsInitializer			[line 500]
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










/*
// Create GLOBAL variable (player) for the YouTubeVideo API
var player;
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
onYouTubeIframeAPIReady();


function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		width: '600',
		videoId: '3tqSeu47iIc', 
		playerVars: {
			controls: 0,
			autoplay: 1,
		},
		events: {
			'onStateChange': PlayerControlsManager.onPlayerStateChange
		}
	});
	//PlayerControlsManager.setSongTitle();
}  */



var ControlButtonHandler = {
	/* Properties */
	controlsHidden: true,

	/* Methods */
	showHidePlayerControls: function() {
		if( this.controlsHidden){
			DOMCallsInitializer.controlImagesContainerElement.classList.replace("hide-controls","show-controls");
		}else{
			DOMCallsInitializer.controlImagesContainerElement.classList.replace("show-controls","hide-controls");
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
			DOMCallsInitializer.seasonOptionsElement.classList.add("show-season");
			this.seasonOptionsHidden = false;
		}else{ 
			DOMCallsInitializer.seasonOptionsElement.classList.remove("show-season");
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
		VideoDataManager.selectedSeason = this.selectedSeason;
		DOMCallsInitializer.seasonOptionsElement.classList.replace("show-season", "hide-season");
		this.seasonOptionsHidden = true;
	},

	leave: function() {
		if(this.seasonOptionsHidden) { return }
			this.showHideSeasonList();
	},

	getDomElement: function(id) {
		switch(id) {
			case "ordinary":
				return DOMCallsInitializer.ordinaryElement;
				break;
			case "advent":
				return DOMCallsInitializer.adventElement;
				break;
			case "christmas":
				return DOMCallsInitializer.christmasElement;
				break;
			case "lent":
				return DOMCallsInitializer.lentElement;
				break;
			case "easter":
				return DOMCallsInitializer.easterElement;
				break;
			default:
				alert("No such Object");
		} 
	}
}  /* End of Class(Object) "SeasonButtonHandler" */ 













var ButtonStateManager = {
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
					DOMCallsInitializer.playButtonElement.src = "imgs/Controls/play_white.png";
				}else{
					DOMCallsInitializer.playButtonElement.src = "imgs/Controls/play_on_orange.png";
				}
				this.playState = !this.playState;
				break;
			case "stop":
				if ( this.stopState ) {
					DOMCallsInitializer.stopButtonElement.src = "imgs/Controls/stop_white.png";
				}else{
					DOMCallsInitializer.stopButtonElement.src = "imgs/Controls/stop_on_orange.png";
				}
				this.stopState = !this.stopState;
				break;
			case "pause":
				if ( this.pauseState ) {
					DOMCallsInitializer.pauseButtonElement.src = "imgs/Controls/pause_white.png";
				}else{
					DOMCallsInitializer.pauseButtonElement.src = "imgs/Controls/pause_on_orange.png";
				}
				this.pauseState = !this.pauseState;
				break;
			case "shuffle":
				if ( this.shuffleState ) {
					DOMCallsInitializer.shuffleButtonElement.src = "imgs/Controls/playlist_shuffle_white.png";
				}else{
					DOMCallsInitializer.shuffleButtonElement.src = "imgs/Controls/playlist_shuffle_on_orange.png";
				}
				this.shuffleState = !this.shuffleState;
				break;
			default:
				alert("Something wrong with CheckControl.checkState()");
		}
	}, 

	reset: function() {
		this.playState = false;
		DOMCallsInitializer.playButtonElement.src = "imgs/Controls/play_white.png";  
		this.stopState = false;
		DOMCallsInitializer.stopButtonElement.src = "imgs/Controls/stop_white.png";
		this.pauseState = false;
		DOMCallsInitializer.pauseButtonElement.src = "imgs/Controls/pause_white.png";
		this.shuffleState = false;
		DOMCallsInitializer.shuffleButtonElement.src = "imgs/Controls/playlist_shuffle_white.png";
	}
}  /* End of Class(Object) "ButtonStateManager" */ 












var PlayerControlsManager = {
	// Properties
	currentVideoId: 0,
	playedVideos: [-1,-1,-1,-1,-1,-1,-1,-1],  //Arbitraily set to size = 8

	// Methods
	onPlayerStateChange: function(event) {
	//alert("in onPlayerStateChange");
		if (event.data == YT.PlayerState.ENDED && player.getVideoLoadedFraction() > 0) {
	//alert("just before: PlayerControlsManager.setCurrentVideoId("next");");
			PlayerControlsManager.setCurrentVideoId("next");
			player.loadVideoById(VideoDataManager.getData(VideoDataManager.selectedSeason).ids[this.currentVideoId]);
			this.setSongTitle();
			this.startVideo();
		}
	},

	setCurrentVideoId: function(direction){
		if (ButtonStateManager.getState('shuffle') ) {
			let randomNumber = Math.floor( Math.random() * VideoDataManager.getData(VideoDataManager.selectedSeason).ids.length);
			while ( PlayerControlsManager.playedVideos.includes(randomNumber) ) {
				randomNumber = Math.floor( Math.random() * VideoDataManager.getData(VideoDataManager.selectedSeason).ids.length);
			}
			this.playedVideos.unshift(randomNumber);
			this.playedVideos.pop();
			this.currentVideoId = randomNumber;
		}else{
			if(direction == "next"){ 
				if (this.currentVideoId < VideoDataManager.getData(VideoDataManager.selectedSeason).ids.length - 1) {
					this.currentVideoId = this.currentVideoId + 1;
				}else{
					this.currentVideoId = 0;
				} 
			}else{
				if (this.currentVideoId > 0) {
					this.currentVideoId = this.currentVideoId - 1;
				}else{
					this.currentVideoId = VideoDataManager.getData(VideoDataManager.selectedSeason).ids.length - 1;
				}
			}
		}
	},

	startVideo: function() {
		if( ButtonStateManager.getState('play') ) {
			return;
		}
		player.playVideo();
		ButtonStateManager.changeState('play');
		if( ButtonStateManager.getState('stop') ) {
			ButtonStateManager.changeState('stop');
		}
		if( ButtonStateManager.getState('pause') ) {
			ButtonStateManager.changeState('pause');
		}
	},

	pauseVideo: function() {
		if( !ButtonStateManager.getState('play') ) {
			return;
		}
		player.pauseVideo();
		this.setSongTitle();
		ButtonStateManager.changeState('pause');
		ButtonStateManager.changeState('play');
	},


	stopVideo: function() {
		if( !ButtonStateManager.getState('play') ) {
			return;
		}
		player.stopVideo();
		ButtonStateManager.changeState('stop');
		ButtonStateManager.changeState('play');
	},


	nextVideo: function() {
		if( !ButtonStateManager.getState('play') ) {
			ButtonStateManager.changeState('play');
		}
		if( ButtonStateManager.getState('stop') ) {
			ButtonStateManager.changeState('stop');
		}
		if( ButtonStateManager.getState('pause') ) {
			ButtonStateManager.changeState('pause');
		}
		this.setCurrentVideoId("next");
		player.loadVideoById(VideoDataManager.getData(VideoDataManager.selectedSeason).ids[this.currentVideoId]);
		this.setSongTitle();
	},

	prevVideo: function() {
		if( !ButtonStateManager.getState('play') ) {
			ButtonStateManager.changeState('play');
		}
		if( ButtonStateManager.getState('stop') ) {
			ButtonStateManager.changeState('stop');
		}
		if( ButtonStateManager.getState('pause') ) {
			ButtonStateManager.changeState('pause');
		}
		this.setCurrentVideoId("previous");
		player.loadVideoById(VideoDataManager.getData(VideoDataManager.selectedSeason).ids[this.currentVideoId]);
		this.setSongTitle();
	},

	shuffle: function() {
	  //alert("in shuffle");
		ButtonStateManager.changeState('shuffle');
	},

	setSongTitle: function() {
	  //alert("1 in setSongTitle");
	  //alert("2 in setSontTitle and VideoDataManager.selectedSeason =  " + VideoDataManager.selectedSeason);
	  //alert("3 in setSontTitle and this.currentVideoId =  " + this.currentVideoId);
	  //alert("4 in setSontTitle and VideoData.ordinary.names.this.currentVideoId =  " + VideoData.ordinary.names[this.currentVideoId]);
		let lableElement = document.getElementById("song-title");
		lableElement.innerHTML = VideoDataManager.getData(VideoDataManager.selectedSeason).names[this.currentVideoId];        
	}
}   /* End of Class(Object) "PlayerControlsManager" */ 










var VideoDataManager = {
	// Properties
	selectedSeason: 'ordinary',

	// Methods
	setSeason: function(season) {
		this.selectedSeason = season;
	}, 

	getData: function(season) {
		switch (season) {
			case 'advent':
				return VideoData.advent;
				break;
			case 'christmas':
				return VideoData.christmas;
				break;
			case 'ordinary':
				return VideoData.ordinary;
				break;
			case 'lent':
				return VideoData.lent;
				break;
			case 'easter':
				return VideoData.easter;
				break;
			default:
		}
	}

} /* End of Class(Object) "VideoDataManager" */









var PageManager = {
    /* Properties */
    activeContainer: "home",  /* options: ("home", "exercises")   default: "home"  */
    activeSubContainer: "selection", /* options: ("selection", "view")  default: "selection" */
    selectedNode: {},

    /* Methods  */
    goToExercises: function() {
        DOMCallsInitializer.homeContainerElement.classList.remove("z-50");
        DOMCallsInitializer.homeContainerElement.classList.replace("show-opacity","hide-opacity");
        this.activeContainer = "exercises";
        if(this.activeSubContainer == "selection"){
            DOMCallsInitializer.selectionContainerElement.classList.add("z-50");
            DOMCallsInitializer.selectionContainerElement.classList.replace("hide-opacity","show-opacity");
        }else{
            DOMCallsInitializer.viewContainerElement.classList.add("z-50");
            DOMCallsInitializer.viewContainerElement.classList.replace("hide-opacity","show-opacity");
        }
    },

    goToHome: function() {
        if(this.activeSubContainer == "selection"){
            DOMCallsInitializer.selectionContainerElement.classList.remove("z-50");
            DOMCallsInitializer.selectionContainerElement.classList.replace("show-opacity","hide-opacity");
        }else{
            DOMCallsInitializer.viewContainerElement.classList.remove("z-50");
            DOMCallsInitializer.viewContainerElement.classList.replace("show-opacity","hide-opacity");
        }
        DOMCallsInitializer.homeContainerElement.classList.replace("z-10","z-50");
        DOMCallsInitializer.homeContainerElement.classList.replace("hide-opacity","show-opacity");
        this.activeContainer = "home";
    },

    goToView: function(evt) {
        DOMCallsInitializer.selectionContainerElement.classList.remove("z-50");
        DOMCallsInitializer.selectionContainerElement.classList.replace("show-opacity","hide-opacity");
        this.activeSubContainer = "view";
        DOMCallsInitializer.viewContainerElement.classList.add("z-50");
        DOMCallsInitializer.viewContainerElement.classList.replace("hide-opacity","show-opacity");
        let clickedId = evt.target.id;
      //alert("clickedId.slice(0,2): " + clickedId.slice(0,2));
        if(clickedId.length != 4){
            clickedId = clickedId.slice(0,2) + SelectedData.week + (SelectedData.day + 1);
         //   clickedId = clickedId.charAt(0) + "w" + SelectedData.week + (SelectedData.day + 1);
      //alert("formed clickedId: " + clickedId);
        }
        this.selectedNode = spExHT[clickedId];
    	SpaceTree.createNewST(this.selectedNode,SelectedMode.mode);
    },

    goToSelection: function() {
        DOMCallsInitializer.viewContainerElement.classList.remove("z-50");
        DOMCallsInitializer.viewContainerElement.classList.replace("show-opacity","hide-opacity");
        this.activeSubContainer = "selection";
        DOMCallsInitializer.selectionContainerElement.classList.add("z-50");
        DOMCallsInitializer.selectionContainerElement.classList.replace("hide-opacity","show-opacity");
    }
} /* End of Class(Object) "PageManager" */ 












var DOMCallsInitializer = {
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
      //alert("in DOMCallsInitializer.initialize()");
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
} /* End of Class(Object) "DOMCallsInitializer" */



// Create GLOBAL variable (player) for the YouTubeVideo API
var player;
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//onYouTubeIframeAPIReady();


function callBack() {
	PlayerControlsManager.onPlayerStateChange();
}
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		width: '600',
		videoId: '3tqSeu47iIc',
		playerVars: {
			controls: 0,
			autoplay: 1,
		},
		events: {
			'onStateChange': callBack
		}
	});
	PlayerControlsManager.setSongTitle();
}  
