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
        let tempElement = DOMCalls.languageOptionsContainerElement;
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
                return DOMCalls.englishImageElement;
            break;
            case "kirundi-image-id":
                return DOMCalls.kirundiImageElement;
            break;
            case "spanish-image-id":
                return DOMCalls.spanishImageElement;
            break;
            case "english-id":
                return DOMCalls.englishElement;
            break;
            case "kirundi-id":
                return DOMCalls.kirundiElement;
            break;
            case "spanish-id":
                return DOMCalls.spanishElement;
            break;
            default:
                alert("No such Object");
        } 
    }
}  /* End of Class(Object) "LanguageManager" */



