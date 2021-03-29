/* Selection Javascript Classes
*  1.) SelectedData             [line 10] 
*  2.) WeekSelectorUpdate       [line 40]
*  3.) DaySelectorUpdate        [line 80]
*  4.) SelectMode               [line 130]				
*/



var SelectedData = {
    // Properties
    week: 0,
    day: 0,

    // Methods
    setWeek: function(week){
                this.week = week;
                this.setData();
            },

    setDay: function(day){
               this.day= day;
               this.setData();
           },  

    setData: function() {
        DOMCalls.gospelValueElement.innerHTML = monasticScheduleObj.Week[this.week].Day[this.day].scripture.gospel;
        DOMCalls.letterValueElement.innerHTML = monasticScheduleObj.Week[this.week].Day[this.day].scripture.letter;
        DOMCalls.psalmValueElement.innerHTML = monasticScheduleObj.Week[this.week].Day[this.day].scripture.psalm;
        DOMCalls.devoutValueElement.innerHTML = monasticScheduleObj.Week[this.week].Day[this.day].devout;
    }
}






var WeekSelectorUpdate = {
    // Properties
    selectedWeek: "week-1",

    // Methods
    changeWeek: function(week) {
        this.getDomElement(this.selectedWeek + "-link-id").classList.replace("selected-link","un-selected-link");
        this.selectedWeek = week;
        this.getDomElement(week + "-link-id").classList.replace("un-selected-link","selected-link");
        let weekIndex =  parseInt(week.charAt(5)) - 1;
        SelectedData.setWeek(weekIndex);
    },

    getDomElement: function(id) {
      //  alert("id: " + id);
        switch(id) {
            case "week-1-link-id":
                return DOMCalls.weekOneLinkElement;
            break;
            case "week-2-link-id":
                return DOMCalls.weekTwoLinkElement;
            break;
            case "week-3-link-id":
                return DOMCalls.weekThreeLinkElement;
            break;
            case "week-4-link-id":
                return DOMCalls.weekFourLinkElement;
            break;
            default:
                alert("No such Object");
        } 
    }
}







var DaySelectorUpdate = {
    // Properties
    selectedDay: "day-1",

    // Methods
    changeDay: function(day) {
  //  alert("day: " + day);
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
                return DOMCalls.dayOneLinkElement;
            break;
            case "day-2-link-id":
                return DOMCalls.dayTwoLinkElement;
            break;
            case "day-3-link-id":
                return DOMCalls.dayThreeLinkElement;
            break;
            case "day-4-link-id":
                return DOMCalls.dayFourLinkElement;
            break;
            case "day-5-link-id":
                return DOMCalls.dayFiveLinkElement;
            break;
            case "day-6-link-id":
                return DOMCalls.daySixLinkElement;
            break;
            case "day-7-link-id":
                return DOMCalls.daySevenLinkElement;
            break;
            default:
                alert("No such Object");
        } 
    }
} 





var SelectedMode = {
    // Properties
    mode: "study",
    openClosed: "closed",

    // Methods
    changeMode: function(evt) {
    // alert("in changeMode");
        // Switch color of Opts 
        if( evt.target.id.charAt(0) == "s") {
            DOMCalls.studyElement.style.color = "orange";
            DOMCalls.testElement.style.color = "white";
            this.mode = "study";
        }else{
            DOMCalls.studyElement.style.color = "white";
            DOMCalls.testElement.style.color = "orange";
            this.mode = "test";
        }
        this.openCloseSelectOptions(); 
    },

    openCloseSelectOptions: function() {
     // alert("this.openClosed is presently: " + this.openClosed);
        if( this.openClosed == "closed") {
            DOMCalls.studyTestOptionsContainerElement.classList.remove("hide-study-test-options");
            this.openClosed = "open";
         // alert("this.openClosed was 'closed' and is now: " + this.openClosed);
        }else{
            DOMCalls.studyTestOptionsContainerElement.classList.add("hide-study-test-options");
            this.openClosed = "closed";
       //   alert("this.openClosed was 'open' and is now: " + this.openClosed);
        } 
    },

    leave: function() {
        if( this.openClosed == "closed") { return }
        this.openCloseSelectOptions(); 
    }
} 






