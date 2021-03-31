
		
        // Children of chNode30 (Sunday:<br>Yrs 1294 - 1314)
	
		    // Children of chNode300 (Popes)
			
			var chNode3000 = {
			    id: "ch3000",
				name: "Boniface VIII:<br>Yrs. 1294 - 1303",
				data:{"width": "","height": ""},
				children:[]			
			};

			CalcWdHt.calc(chNode3000);
			
		    var chNode3001 = {
				id: "ch3001",
				name: "Benedict XI:<br>Yrs. 1303 - 1304",
                data:{"width": "","height": ""},
        		children:[]			
			};

			CalcWdHt.calc(chNode3001);
			
			var chNode3002 = {
				id: "ch3002",
				name: "Clement V:<br>Yrs. 1305 - 1314",
				data:{"width": "","height": ""},
				children:[]			
			};

			CalcWdHt.calc(chNode3002);
		
	    var chNode300 = {
	        id: "ch300",
	        name: "Popes",
		    data:{"width": "50","height": "20"},
            children:[chNode3000,chNode3001,chNode3002]			
        };

		    // Children of chNode301 (Saints)
			
			var chNode3010 = {
			    id: "ch3010",
				name: "Mary &<br>Joseph",
				data:{"width": "50","height": "35"},
				children:[]			
			};
			
		    var chNode3011 = {
				id: "ch3011",
				name: "Apostles",
                data:{"width": "65","height": "20"},
        		children:[]			
			};
		
	    var chNode301 = {
	        id: "ch301",
		    name: "Saints",
	        data:{"width": "50","height": "20"},
	        children:[chNode3010,chNode3011/*,chNode3012,chNode3013,chNode3014,chNode3015,chNode3016,chNode3017*/]			
        };
	
		    // Children of chNode302 (Events)
			
			var chNode3020 = {
			    id: "ch3020",
				name: "Pentecost",
				data:{"width": "75","height": "20"},
				children:[]			
			};
			
		    var chNode3021 = {
				id: "ch3021",
				name: "Counsil of<br>Jerusalem",
                data:{"width": "75","height": "35"},
        		children:[]			
			};
		
	    var chNode302 = {
	        id: "ch302",
		    name: "Events",
	        data:{"width": "50","height": "20"},
	        children:[chNode3020,chNode3021]			
	    };
	
		    // Children of chNode303 (Herrisies)
			
			var chNode3030 = {
			    id: "ch3030",
				name: "Gnosticism",
				data:{"width": "80","height": "20"},
				children:[]			
			};
			
		    var chNode3031 = {
				id: "ch3031",
				name: "",
                data:{"width": "80","height": "35"},
        		children:[]			
			};
		
	    var chNode303 = {
	        id: "ch303",
		    name: "Herrisies",
	        data:{"width": "60","height": "20"},
	        children:[chNode3030]			
	    };