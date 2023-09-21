/* View Javascript Classes
*  1.) DivLiClickHandler	    [line 10]
*  2.) ImageDataManager         [line 120]
*  3.) SpaceTreeLog 		    [line 250] 
*  4.) SpaceTree                [line 270]
* 		
*/


var DivLiClickHandler = {
    //properties

    //methods
    divClick: function(evt) {
     // alert("in DivLiClickHandler.divClick()");
        if(SelectedMode.mode == "study") {
            return
        }
        let nodeObj;
      //alert("evt.target.parentNode.ID.charAt(0): " + evt.target.parentNode.id.charAt(0));
        let bookLetter = evt.target.parentNode.id.charAt(0);
        let startIndex = 1; 
        if(bookLetter == 's'){
            nodeObj = sNodeRoot;
        }
        if(bookLetter == 'd'){ 
            nodeObj = dNodeRoot;
        }
        if(bookLetter == 'c'){
            startIndex = 2;
            nodeObj = chNodeRoot;
        }
        let labelId = evt.target.parentNode.id;
      //alert("evt.target.parentNode.id: " + labelId);
        let childNumber;
        for(let i = startIndex;i < labelId.length;i++){
            if (labelId.charAt(i) < 10){
                childNumber = labelId.charAt(i);
            }else{
                switch ( labelId.charAt(i) ){
                    case "a":
                        childNumber = 10;
                        break;
                    case "b":
                        childNumber = 11;
                        break;
                    case "c":
                        childNumber = 12;
                        break;
                    case "d":
                        childNumber = 13;
                        break;
                    case "e":
                        childNumber = 14;
                        break;
                    case "f":
                        childNumber = 15;
                        break;
                    case "g":
                        childNumber = 16;
                        break;
                    case "h":
                        childNumber = 17;
                        break;
                    case "i":
                        childNumber = 18;
                        break;
                    case "j":
                        childNumber = 19;
                        break;
                    case "k":
                        childNumber = 20;
                        break;
                    case "l":
                        childNumber = 21;
                        break;
                    case "m":
                        childNumber = 22;
                        break;
                    case "n":
                        childNumber = 23;
                        break;
                    case "o":
                        childNumber = 24;
                        break;
                    default:
                        alert("Number of Nodes<br>must be < 25");
                }
            }
        //alert("childNumber: " + childNumber);
            nodeObj = nodeObj.children[childNumber];
      //alert("nodeObj.children[childNumber].id: " + nodeObj.id);
        }
        document.getElementById(labelId).innerHTML = nodeObj.name;
    },

    liClick: function(evt) {
        if(SelectedMode.mode == "study") return;
        let labelId = evt.target.parentNode.parentNode.id;
        let theId = evt.target.id;
        let psNmbr = parseInt(theId.slice(2,theId.length)) - 1;
        let src = psalmInfo[labelId].src;
        document.getElementById(evt.target.id).innerHTML = src[psNmbr];  

    }
} //End Class(Object): DivLiClickHandler













var ImageDataManager = {
      // Properties
      url: "",
      credit: "",

    // Methods
    getData: function(folderImgNmbr) {
        let periodLoc = folderImgNmbr.indexOf(".");
        let folder = folderImgNmbr.slice(0,periodLoc);
        let imgNmbr = folderImgNmbr.slice(periodLoc + 1, folderImgNmbr.length);
        let imgNameCredit = "";  
        let folderURL = "";
        switch (folder) {
            case "maps":
                folderURL = "imgs/NT/Maps/";
                imgNameCredit = ImageData.maps[imgNmbr];
                break;
            case "apostles":
                folderURL = "imgs/NT/Gospels/Apostles/";
                imgNameCredit = ImageData.apostles[imgNmbr];
                break;
            case "call":
                folderURL = "imgs/NT/Gospels/Call/";
                imgNameCredit = ImageData.call[imgNmbr];
                break;
            case "jn":
                folderURL = "imgs/NT/Gospels/John/";
                imgNameCredit = ImageData.jn[imgNmbr];
                break;
            case "lk":
                folderURL = "imgs/NT/Gospels/Luke/";
                imgNameCredit = ImageData.lk[imgNmbr];
                break;
            case "mk":
                folderURL = "imgs/NT/Gospels/Mark/";
                imgNameCredit = ImageData.mk[imgNmbr];
                break;
            case "mt":
                folderURL = "imgs/NT/Gospels/Matthew/";
                imgNameCredit = ImageData.mt[imgNmbr];
                break;
            case "miracles":
                folderURL = "imgs/NT/Gospels/Miracles/";
                imgNameCredit = ImageData.miracles[imgNmbr];
                break;
            case "missionJerusalem":
                folderURL = "imgs/NT/Gospels/Mission_Jerusalem/";
                imgNameCredit = ImageData.missionJerusalem[imgNmbr];
                break;
            case "nativities":
                folderURL = "imgs/NT/Gospels/Nativities/";
                imgNameCredit = ImageData.nativities[imgNmbr];
                break;
            case "otherEvents":
                folderURL = "imgs/NT/Gospels/Other_Events/";
                imgNameCredit = ImageData.otherEvents[imgNmbr];
                break;
            case "parables":
                folderURL = "imgs/NT/Gospels/Parables/";
                imgNameCredit = ImageData.parables[imgNmbr];
                break;
            case "passion":
                folderURL = "imgs/NT/Gospels/Passion/";
                imgNameCredit = ImageData.passion[imgNmbr];
                break;
            case "preparation":
                folderURL = "imgs/NT/Gospels/Preparation/";
                imgNameCredit = ImageData.preparation[imgNmbr];
                break;
            case "resurrection":
                folderURL = "imgs/NT/Gospels/Resurrection/";
                imgNameCredit = ImageData.resurrection[imgNmbr];
                break;
            case "teaching":
                folderURL = "imgs/NT/Gospels/Teaching/";
                imgNameCredit = ImageData.teaching[imgNmbr];
                break;
            case "acts":
                folderURL = "imgs/NT/Letters/Acts/";
                imgNameCredit = ImageData.acts[imgNmbr];
                break;
            case "revelation":
                folderURL = "imgs/NT/Letters/Revelation/";
                imgNameCredit = ImageData.revelation[imgNmbr];
                break;
            case "pauline":
                folderURL = "imgs/NT/Letters/PaulineLetters/";
                imgNameCredit = ImageData.pauline[imgNmbr];
                break;
            case "pastoral":
                folderURL = "imgs/NT/Letters/Pastoral/";
                imgNameCredit = ImageData.pastoral[imgNmbr];
                break;
            case "catholic":
                folderURL = "imgs/NT/Letters/CatholicLetters/";
                imgNameCredit = ImageData.catholic[imgNmbr];
                break;
            case "kings":
                folderURL = "imgs/OT/Kings/";
                imgNameCredit = ImageDataOT.kings[imgNmbr];
                break;
            case "prophets":
                folderURL = "imgs/OT/Prophets/";
                imgNameCredit = ImageDataOT.prophets[imgNmbr];
                break;
            case "holyLand":
                folderURL = "imgs/OT/Holy_Land/";
                imgNameCredit = ImageDataOT.holyLand[imgNmbr];
                break;
            case "saints":
                folderURL = "imgs/Church_History/Saints/";
                imgNameCredit = ImageData.saints[imgNmbr];
                break;
            default :
                alert("No folder Exist with this Name: " + folder);
        }
        let separatorLoc = imgNameCredit.indexOf("$");
        this.url = folderURL + imgNameCredit.slice(0,separatorLoc);
        this.credit = imgNameCredit.slice(separatorLoc + 1,imgNameCredit.length);
        return [this.url,this.credit];
    }
}/* End of Class(Object) "ImageDataManager" */








var SpaceTreeLog = {
  elem: false,
  write: function(text){
    if (!this.elem) 
        this.elem = DOMCallsInitializer.spaceTreeLogElement; 
        this.elem.innerHTML = text;
        this.elem.style.left = 50 + 'px';
  }
}











var SpaceTree = {
    //Properties

    //Methods
    createNewST: function(selectedNode,mode) {
        DOMCallsInitializer.authorCreditElement.innerHTML = "";
        DOMCallsInitializer.spaceTreeElement.style.backgroundImage =  "none";
        if(document.getElementById("space-tree-id-canvaswidget")){
            var infoEle = document.getElementById("space-tree-id-canvaswidget");
            infoEle.remove();
        } 
        // next 2 lines added March 12, 2022
        let creditEle = DOMCallsInitializer.authorCreditElement;
        creditEle.classList.replace("show-opacity","hide-opacity"); 
        let jsonObj = selectedNode;
        let thisId = jsonObj.id;
        let levelDist = 2;
        if(thisId.slice(0,4)=="s031"){
            levelDist = 100;
        };
        var monasticST = new $jit.ST({
            injectInto: 'space-tree-id',
            orientation:'top',
            duration: 700,
            transition: $jit.Trans.Quart.easeInOut,
            levelsToShow: 1,
            levelDistance: levelDist,
            Navigation: {
              enable:true,
              panning:true
            },
            Node: {
                autoHeight:true,
                autoWidth:true,
                color: '#FF0', 
                overridable: true
            },
            
            Edge: {
                type: 'bezier',
                overridable: true
            },
            
            onBeforeCompute: function(node){
                SpaceTreeLog.write("loading ");
            },
            
            onAfterCompute: function(){
                SpaceTreeLog.write("done");
            },
            
            onCreateLabel: function(label, node){ 
            //alert("Create Label for: " + node.name);
                label.id = node.id; 
                if(node.id.slice(0,4) != "s031"){
                    if(SelectedMode.mode == "study"){
                        label.innerHTML = node.name;   
                    }else{
                        label.innerHTML = "<div style='width:100%;height:100%;' onclick='DivLiClickHandler.divClick(event)'>?</div>";
                    }
                }else{
                    if(node.id.length == 6){
                    //alert("node.id.length == 6");
                        if(SelectedMode.mode == "study"){
                            label.innerHTML = node.name;            
                        } else {
                            label.innerHTML = "<div style='width:100%;height:100%;' onclick='DivLiClickHandler.divClick(event)'>?</div>";  
                        }
                    } else {
                    //alert("node.id.length != 6");
                        var vs1Id = parseInt(psalmInfo[node.id].firstVs) + 1;
                        var vss = parseInt(psalmInfo[node.id].vss);
                    //alert("vss: " + vss);
                        var src = psalmInfo[node.id].src;
                        var ulString = "<ul>";
                        for(var i=vs1Id;i <= vs1Id + vss - 1;i++){
                            ulString += "<li id='vs" + i + "' onclick='DivLiClickHandler.liClick(event)'>";
                            if(SelectedMode.mode == "study"){
                                ulString += src[i-1];
                            } else {
                                ulString += i + ".) ?";
                            }
                            ulString += "</li>";
                        }
                        ulString += "</ul>";
                    //alert("ulString: " + ulString);
                        label.innerHTML = ulString;
                        label.classList.add("psalmLi");
                    }   
                }

                var style = label.style;
                style.width = node.data.width + 'px';
              //  style.width = (parseInt(node.data.width) + 1) + 'px';
                style.height = node.data.height + 'px';            
                style.cursor = 'pointer';
                style.color = 'blue'; 
                style.fontFamily = 'Arial, monospace, monospace';
                style.fontSize = '0.9em';  
                style.textAlign= 'center';
                style.paddingTop = '0.2em';
                style.fontWeight = 'bold';
                style.backgroundColor = "yellow";
              //  style.border = "2px solid blue";
              //  style.marginLeft = "-1px";
               // style.borderRadius = '15px';

                label.onclick = function() {
                    let url = "";
                    let credit = "";
                    let urlCredit = "";
                //    let creditEle = DOMCallsInitializer.authorCreditElement; 
                    let visEle = DOMCallsInitializer.spaceTreeElement; 
                    if (node.data.img) {
                        creditEle.classList.replace("hide-opacity","show-opacity");
                        let folderImgNmbr = node.data.img; 
                        urlCredit = ImageDataManager.getData(folderImgNmbr);
                  //  alert("urlCredit[0]: " + urlCredit[0]);
                        url = urlCredit[0];
                        credit = urlCredit[1];
                        visEle.style.backgroundImage = "url(" + url + ")";
                        visEle.style.backgroundSize = "contain";
                        visEle.style.backgroundRepeat= "no-repeat";
                        visEle.style.backgroundPosition = "left center";
                        creditEle.innerHTML = credit;
                    }else{
                        visEle.style.backgroundImage =  "none";
                        creditEle.classList.replace("show-opacity","hide-opacity");
                    }
                    monasticST.onClick(node.id);
                }
            },
            
            onBeforePlotNode: function(node){
                node.data.$width = node.data.width;
                node.data.$height = node.data.height;
                
                if (node.selected) {
                    node.data.$color = "#ff0";
                }
                else {
                    delete node.data.$color;
                    if(!node.anySubnode("exist")) {
                        var count = 0;
                        node.eachSubnode(function(n) { count++; });
                        node.data.$color = '#ff0';  //['#aaa', '#baa', '#caa', '#daa', '#eaa', '#faa'][count];                    
                    }
                }
            },
            
            onBeforePlotLine: function(adj){
                if (adj.nodeFrom.selected && adj.nodeTo.selected) {
                    adj.data.$color = "#00f";// "#eed";
                    adj.data.$lineWidth = 4; //3;
                }
                else {
            //        delete adj.data.$color;
                    adj.data.$color = "lightblue"//"#fff";
            //        delete adj.data.$lineWidth;
                    adj.data.$lineWidth = 2; //3;
                }
            }
        });
        
        DOMCallsInitializer.spaceTreeElement.style.backgroundColor = "black";
        monasticST.loadJSON(jsonObj);
        monasticST.compute();
        monasticST.geom.translate(new $jit.Complex(-200, 0), "current");
        monasticST.onClick(monasticST.root);
    }
}  /* End of Class(Object) "SpaceTree" */


