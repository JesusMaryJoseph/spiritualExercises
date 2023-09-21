/* Global Video Home Material
*  1.) LanguageManager			[line 10]
*
*
*
*
*/


var LanguageManager = {
    // Properties
    language: "english",
    selectOptions: "closed",

    // Methods
    selectLanguage: function (evt) {
        let newLanguage = evt.target.id.slice(0,7);
        this.getDomElement(this.language + "-image-id").classList.replace("show-opacity","hide-opacity");
        this.getDomElement(newLanguage + "-image-id").classList.replace("hide-opacity","show-opacity");
        this.getDomElement(this.language + "-id").classList.remove("selected-language");
        this.getDomElement(newLanguage + "-id").classList.add("selected-language");
        this.language = newLanguage;
        this.openCloseSelectOptions();  
    },

    openCloseSelectOptions: function() {
      //alert("in openCloseSelectOptions()");
        let tempElement = DOMCallsInitializer.languageOptionsContainerElement;
        if ( this.selectOptions == "closed" ) {
            tempElement.classList.remove("hide-language-options-container");
            this.selectOptions = "open";
        }else{
            tempElement.classList.add("hide-language-options-container");
            this.selectOptions = "closed";
        }
    },

    leave: function() {
        if (this.selectOptions == "closed") { return; }
        this.openCloseSelectOptions();
    },

    getDomElement: function(id) {
        switch(id) {
            case "english-image-id":
                return DOMCallsInitializer.englishImageElement;
            break;
            case "kirundi-image-id":
                return DOMCallsInitializer.kirundiImageElement;
            break;
            case "spanish-image-id":
                return DOMCallsInitializer.spanishImageElement;
            break;
            case "english-id":
                return DOMCallsInitializer.englishElement;
            break;
            case "kirundi-id":
                return DOMCallsInitializer.kirundiElement;
            break;
            case "spanish-id":
                return DOMCallsInitializer.spanishElement;
            break;
            default:
                alert("No such Object");
        } 
    }
}  /* End of Class(Object) "LanguageManager" */



