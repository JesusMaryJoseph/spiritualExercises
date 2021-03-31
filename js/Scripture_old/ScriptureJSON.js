
// Data for all Scripture

    // Children of sNodeRoot(The Bible)
				
	    // Children of sNode0 (The Old Testament)
      
        var sNode00 = {
             id: "s00",
            name: "Pentateuch<br>Plus",
            data:{"width":"90","height":"37"},
            children:[/*sNode000,sNode001,sNode002,sNode003*/]
        };
            
        var sNode01 =  {
            id: "s01",
            name: "Historical<br>Books",
            data:{"width":"80","height":"37"},
            children:[/*sNode010,sNode011,sNode012,sNode013,sNode014,sNode015*/]            
        };
            
        var sNode02 = {
            id: "s02",
            name: "Wisdomk<br>Books",
            data:{"width":"75","height":"37"},
            children:[sNode020,sNode021/*,sNode022,sNode023,sNode024,sNode025,sNode026*/]
        };
            
        var sNode03 =  {
            id: "s03",
            name: "Prophetic<br>Books",
            data:{"width":"80","height":"37"},
            children:[/*sNode030,sNode031,sNode032*/]           
        };
        
    var sNode0 = {
        id: "s0",
        name: "Old<br>Testament",
        data:{"width":"85","height":"37"},
        children:[sNode00,sNode01,sNode02,sNode03]
    };


    
    // Children of sNode1 (The New Testament)
        
        var sNode10 = {
            id: "s10",
            name: "Gospels",
            data:{"width":"70","height":"22"},
            children:[sNode100,sNode101,sNode102,sNode103]
        };
            
        var sNode11 =  {
            id: "s11",
            name: "Acts Of<br>The Apostles",
            data:{"width":"105","height":"37"},
            children:[sNode110,sNode111,sNode112,sNode113]
        };
            
        var sNode12 =  {
            id: "s12",
            name: "Pauline<br>Letters",
            data:{"width":"60","height":"37"},
            children:[sNode120,sNode121,sNode122,sNode123,sNode124,sNode125,sNode126,sNode127,sNode128,sNode129]
        };
            
        var sNode13 = {
            id: "s13",
            name: "Catholic<br>Letters",
            data:{"width":"65","height":"37"},
            children:[sNode130,sNode131,sNode132,sNode133]
        };
    
        var sNode14 =  {
            id: "s14",
            name: "Revelation",
            data:{"width":"85","height":"22"},
            children:[sNode140,sNode141,sNode142]           
        };
        
    var sNode1 =  {
        id: "s1",
        name: "New<br>Testament",
        data:{"width":"80","height":"37"},
        children:[sNode10,sNode11,sNode12,sNode13,sNode14]          
    };
        
 var sNodeRoot =  {
    id: "sRoot",
    name: "The<br>Bible",
    data:{"width": "55","height": "37"},
    children:[sNode0,sNode1]            
 };