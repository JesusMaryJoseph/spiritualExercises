/* Selection Javascript Classes
*  1.) SelectedData             [line 10] 
*  2.) WeekSelectorUpdate       [line 140]
*  3.) DaySelectorUpdate        [line 200]
*  4.) SelectedMode             [line 280]				
*/



var SelectedData = {
    // Properties
	isInitialized: false,
    gospelValueElement: {},
    letterValueElement: {},
    psalmValueElement: {},
    devoutValueElement: {},
    pentateuchValueElement: {},
    historicalValueElement: {},
    novellasValueElement: {},
    wisdomValueElement: {},
    prophetsValueElement: {},
    minorProphetsValueElement: {},
    pentateuchContainerElement: {},
    historicalContainerElement: {},
    novellasContainerElement: {},
    wisdomContainerElement: {},
    prophetsContainerElement: {},
    minorProphetsContainerElement: {},
    week: 0,
    day: 0,

    // Methods
    setWeek: function(week){
		    	if(this.isInitialized) {

		    	}else{
		    		this.initialize();
		    		this.isInitialized = true;
		    	}
                this.week = week;
                this.setData(); 
            },

    setDay: function(day){
		    	if(this.isInitialized) {

		    	}else{
		    		this.initialize();
		    		this.isInitialized = true;
		    	}
               this.day= day;
               this.setData(); 
           },  

    setData: function() {
    //alert("in SelectedData.setData()");
    	if(this.isInitialized) {

    	}else{
    		this.initialize();
    		this.isInitialized = true;
    	}
        this.gospelValueElement.innerHTML = monasticScheduleObj.Week[this.week].Day[this.day].gospel;
        this.letterValueElement.innerHTML = monasticScheduleObj.Week[this.week].Day[this.day].letter;
        this.psalmValueElement.innerHTML = monasticScheduleObj.Week[this.week].Day[this.day].psalm;
        this.devoutValueElement.innerHTML = monasticScheduleObj.Week[this.week].Day[this.day].devout;
        this.pentateuchValueElement.innerHTML = monasticScheduleObj.Week[0].Day[this.day].pentateuch;
        this.novellasValueElement.innerHTML = monasticScheduleObj.Week[0].Day[this.day].novellas;
        this.historicalValueElement.innerHTML = monasticScheduleObj.Week[1].Day[this.day].historical;
        this.wisdomValueElement.innerHTML = monasticScheduleObj.Week[2].Day[this.day].wisdom;
        this.prophetsValueElement.innerHTML = monasticScheduleObj.Week[3].Day[this.day].prophets;
        this.minorProphetsValueElement.innerHTML = monasticScheduleObj.Week[3].Day[this.day].minor;
   
        switch(this.week.toString()){
            case '0':
                this.pentateuchContainerElement.classList.remove("hide-block");
                this.historicalContainerElement.classList.add("hide-block");
                this.novellasContainerElement.classList.remove("hide-block");
                this.wisdomContainerElement.classList.add("hide-block");
                this.prophetsContainerElement.classList.add("hide-block");
                this.minorProphetsContainerElement.classList.add("hide-block");
                break;
            case '1':
                this.pentateuchContainerElement.classList.add("hide-block");
                this.historicalContainerElement.classList.remove("hide-block");
                this.novellasContainerElement.classList.add("hide-block");
                this.wisdomContainerElement.classList.add("hide-block");
                this.prophetsContainerElement.classList.add("hide-block");
                this.minorProphetsContainerElement.classList.add("hide-block");
                break;
            case '2':
                this.pentateuchContainerElement.classList.add("hide-block");
                this.historicalContainerElement.classList.add("hide-block");
                this.novellasContainerElement.classList.add("hide-block");
                this.wisdomContainerElement.classList.remove("hide-block");
                this.prophetsContainerElement.classList.add("hide-block");
                this.minorProphetsContainerElement.classList.add("hide-block");
                break;
            case '3':
                this.pentateuchContainerElement.classList.add("hide-block");
                this.historicalContainerElement.classList.add("hide-block");
                this.novellasContainerElement.classList.add("hide-block");
                this.wisdomContainerElement.classList.add("hide-block");
                this.prophetsContainerElement.classList.remove("hide-block");
                this.minorProphetsContainerElement.classList.remove("hide-block");
                break;
        }
    },

    initialize: function() {
    //alert("In SetData.initialize()");
        this.gospelValueElement = document.getElementById("gospel-value-id");
        this.letterValueElement = document.getElementById("letter-value-id");
        this.psalmValueElement = document.getElementById("psalm-value-id");
        this.devoutValueElement = document.getElementById("devout-value-id");

        this.pentateuchValueElement = document.getElementById("pentateuch-value-id");
        this.historicalValueElement = document.getElementById("historical-value-id");
        this.novellasValueElement = document.getElementById("novellas-value-id");
        this.wisdomValueElement = document.getElementById("wisdom-value-id");
        this.prophetsValueElement = document.getElementById("prophets-value-id");
        this.minorProphetsValueElement = document.getElementById("minor-prophets-value-id");

        this.pentateuchContainerElement = document.getElementById("pentateuch-container-id");
        this.historicalContainerElement = document.getElementById("historical-container-id");
        this.novellasContainerElement = document.getElementById("novellas-container-id");
        this.wisdomContainerElement = document.getElementById("wisdom-container-id");
        this.prophetsContainerElement = document.getElementById("prophets-container-id");
        this.minorProphetsContainerElement = document.getElementById("minor-prophets-container-id");
   }
}








var WeekSelectorUpdate = {
    // Properties
    isInitialized: false,
    weekOneLinkElement: {},
    weekTwoLinkElement: {},
    weekThreeLinkElement: {},
    weekFourLinkElement: {},
    selectedWeek: "week-1",

    // Methods
    changeWeek: function(week) {
  //  alert("in changeWeek");
    	if(this.isInitialized) {

    	}else{
    		this.initialize();
    		this.isInitialized = true;
    	}
        this.getDomElement(this.selectedWeek + "-link-id").classList.replace("selected-link","un-selected-link");
        this.selectedWeek = week;
        this.getDomElement(week + "-link-id").classList.replace("un-selected-link","selected-link");
        let weekIndex =  parseInt(week.charAt(5)) - 1;
    //   alert("setting Week");
        SelectedData.setWeek(weekIndex);
    },

    getDomElement: function(id) {
      //  alert("id: " + id);
        switch(id) {
            case "week-1-link-id":
                return this.weekOneLinkElement;
            break;
            case "week-2-link-id":
                return this.weekTwoLinkElement;
            break;
            case "week-3-link-id":
                return this.weekThreeLinkElement;
            break;
            case "week-4-link-id":
                return this.weekFourLinkElement;
            break;
            default:
                alert("No such Object");
        } 
    },

    initialize: function() {
        this.weekOneLinkElement = document.getElementById("week-1-link-id");
        this.weekTwoLinkElement = document.getElementById("week-2-link-id");
        this.weekThreeLinkElement = document.getElementById("week-3-link-id");
        this.weekFourLinkElement = document.getElementById("week-4-link-id");
    }
}







var DaySelectorUpdate = {
    // Properties
    isInitialized: false,
    dayOneLinkElement: {},
    dayTwoLinkElement: {},
    dayThreeLinkElement: {},
    dayFourLinkElement: {},
    dayFiveLinkElement: {},
    daySixLinkElement: {},
    daySevenLinkElement: {},
    selectedDay: "day-1",

    // Methods
    changeDay: function(day) {
  //  alert("day: " + day);
        if(this.isInitialized) {

        }else{
            this.initialize();
            this.isInitialized = true;
        }
        this.getDomElement(this.selectedDay + "-link-id").classList.replace("selected-link","un-selected-link");
        this.getDomElement(day + "-link-id").classList.replace("un-selected-link","selected-link");
        this.selectedDay = day;
  //  alert("this.selectedDay: " + this.selectedDay);
        let dayIndex =  parseInt(day.charAt(4)) - 1;
  //  alert("dayIndex: " + dayIndex);
        SelectedData.setDay(dayIndex);
    },

    getDomElement: function(id) {
      //  alert("id: " + id);
        switch(id) {
            case "day-1-link-id":
                return this.dayOneLinkElement;
            break;
            case "day-2-link-id":
                return this.dayTwoLinkElement;
            break;
            case "day-3-link-id":
                return this.dayThreeLinkElement;
            break;
            case "day-4-link-id":
                return this.dayFourLinkElement;
            break;
            case "day-5-link-id":
                return this.dayFiveLinkElement;
            break;
            case "day-6-link-id":
                return this.daySixLinkElement;
            break;
            case "day-7-link-id":
                return this.daySevenLinkElement;
            break;
            default:
                alert("No such Object");
        } 
    },

    initialize: function() {
        this.dayOneLinkElement = document.getElementById("day-1-link-id");
        this.dayTwoLinkElement = document.getElementById("day-2-link-id");
        this.dayThreeLinkElement = document.getElementById("day-3-link-id");
        this.dayFourLinkElement = document.getElementById("day-4-link-id");
        this.dayFiveLinkElement = document.getElementById("day-5-link-id");
        this.daySixLinkElement = document.getElementById("day-6-link-id");
        this.daySevenLinkElement = document.getElementById("day-7-link-id");
    }
} 











var SelectedMode = {
    // Properties
    isInitialized: false,
    studyTestLabelElement: {},
    studyTestOptionsContainerElement: {},
    studyElement: {},
    testElement: {},
    studyLabelElement: {},
    testLabelElement: {},  
    mode: "study",
    openClosed: "closed",

    // Methods
    changeMode: function(evt) {
        if( evt.target.id.charAt(0) == "s") {
            this.studyLabelElement.style.color = "orange";
            this.testLabelElement.style.color = "white";
            this.mode = "study";
        }else{
            this.studyLabelElement.style.color = "white";
            this.testLabelElement.style.color = "orange";
            this.mode = "test";
        }
        this.openCloseSelectOptions(); 
    },

    openCloseSelectOptions: function() {
        if(this.isInitialized) {

        }else{
            this.initialize();
            this.isInitialized = true;
        }
        if( this.openClosed == "closed") {
            this.studyTestOptionsContainerElement.classList.remove("hide-study-test-options");
            this.openClosed = "open";
         // alert("this.openClosed was 'closed' and is now: " + this.openClosed);
        }else{
            this.studyTestOptionsContainerElement.classList.add("hide-study-test-options");
            this.openClosed = "closed";
       //   alert("this.openClosed was 'open' and is now: " + this.openClosed);
        } 
    },

    leave: function() {
        if( this.openClosed == "closed") { return }
        this.openCloseSelectOptions(); 
    },

    initialize: function() {
        this.studyTestLabelElement = document.getElementById("study-test-label-id");
        this.studyTestOptionsContainerElement = document.getElementById("study-test-options-container-id");
        this.studyElement = document.getElementById("study-id");
        this.testElement = document.getElementById("test-id");
        this.studyLabelElement = document.getElementById("study-label-id"); 
        this.testLabelElement = document.getElementById("test-label-id");  
    }
} 








