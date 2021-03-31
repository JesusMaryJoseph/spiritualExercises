
		
        // Children of chNode00 (Sunday:<br>Yrs 33 - 115)
	
		    // Children of chNode000 (Popes)
			
			var chNode0000 = {
			    id: "ch0000",
				name: "Peter:<br>Yrs. 33 - 67",
				data:{"width": "","height": ""},
				children:[]			
			};

			CalcWdHt.calc(chNode0000);
			
		    var chNode0001 = {
				id: "ch0001",
				name: "Linus:<br>Yrs. 67 - 76",
                data:{"width": "","height": ""},
        		children:[]			
			};

			CalcWdHt.calc(chNode0001);
			
			var chNode0002 = {
				id: "ch0002",
				name: "Anacletus:<br>Yrs. 76 - 88",
				data:{"width": "","height": ""},
				children:[]			
			};

			CalcWdHt.calc(chNode0002);
			
			var chNode0003 = {
				id: "ch0003",
				name: "Clement I:<br>Yrs. 88 - 97",
				data:{"width": "","height": ""},
				children:[]			
			};

			CalcWdHt.calc(chNode0003);
			
			var chNode0004 = {
				id: "ch0004",
				name: "Evaristus:<br>Yrs. 97 - 105",
				data:{"width": "","height": ""},
				children:[]			
			};

			CalcWdHt.calc(chNode0004);
			
			var chNode0005 = {
				id: "ch0005",
				name: "Alexandre I:<br>Yrs. 105 - 115",
				data:{"width": "","height": ""},
				children:[]			
			};

			CalcWdHt.calc(chNode0005);
		
	    var chNode000 = {
	        id: "ch000",
	        name: "Popes",
		    data:{"width": "50","height": "20"},
            children:[chNode0000,chNode0001,chNode0002,chNode0003,chNode0004,chNode0005]			
        };

		    // Children of chNode001 (Saints)
			
			var chNode0010 = {
			    id: "ch0010",
				name: "Mary &<br>Joseph",
				data:{"width": "50","height": "35"},
				children:[]			
			};
			
		    var chNode0011 = {
				id: "ch0011",
				name: "Apostles",
                data:{"width": "65","height": "20"},
        		children:[]			
			};
		
	    var chNode001 = {
	        id: "ch001",
		    name: "Saints",
	        data:{"width": "50","height": "20"},
	        children:[chNode0010,chNode0011/*,chNode0012,chNode0013,chNode0014,chNode0015,chNode0016,chNode0017*/]			
        };
	
		    // Children of chNode002 (Events)
			
			var chNode0020 = {
			    id: "ch0020",
				name: "Pentecost",
				data:{"width": "75","height": "20"},
				children:[]			
			};
			
		    var chNode0021 = {
				id: "ch0021",
				name: "Counsil of<br>Jerusalem",
                data:{"width": "75","height": "35"},
        		children:[]			
			};
		
	    var chNode002 = {
	        id: "ch002",
		    name: "Events",
	        data:{"width": "50","height": "20"},
	        children:[chNode0020,chNode0021]			
	    };
	
		    // Children of chNode003 (Herrisies)
			
			var chNode0030 = {
			    id: "ch0030",
				name: "Gnosticism",
				data:{"width": "80","height": "20"},
				children:[]			
			};
			
		    var chNode0031 = {
				id: "ch0031",
				name: "",
                data:{"width": "80","height": "35"},
        		children:[]			
			};
		
	    var chNode003 = {
	        id: "ch003",
		    name: "Herrisies",
	        data:{"width": "60","height": "20"},
	        children:[chNode0030]			
	    };