
		
        // Children of chNode25 (Friday:<br>Yrs. 1276 - 1285)

			var chNode2500 = {
			    id: "ch2500",
				name: "John XXI:<br>Yrs. 1276 - 1277",
				data:{},
				children:[]			
			};

			CalcWdHt.calc(chNode2500);
			
		    var chNode2501 = {
				id: "ch2501",
				name: "Nicholas III:<br>Yrs. 1277 - 1281",
                data:{},
        		children:[]			
			};

			CalcWdHt.calc(chNode2501);
			
			var chNode2502 = {
				id: "ch2502",
				name: "Martin IV:<br>Yrs. 1281 - 1285",
				data:{},
				children:[]			
			};

			CalcWdHt.calc(chNode2502);

	    var chNode250 = {
	        id: "ch250",
	        name: "Popes",
		    data:{},
            children:[chNode2500,chNode2501,chNode2502]			
        };

        CalcWdHt.calc(chNode250);

		    // Children of chNode251 (Saints)
			
			var chNode2510 = {
			    id: "ch2510",
				name: "Mary &<br>Joseph",
				data:{},
				children:[]			
			};

        	CalcWdHt.calc(chNode2510);
		
	    var chNode251 = {
	        id: "ch251",
		    name: "Saints",
	        data:{},
	        children:[chNode2510]			
        };

        CalcWdHt.calc(chNode251);
	
		    // Children of chNode252 (Events)
			
			var chNode2520 = {
			    id: "ch2520",
				name: "Pentecost",
				data:{},
				children:[]			
			};

        	CalcWdHt.calc(chNode2520);
			
		    var chNode2521 = {
				id: "ch2521",
				name: "Counsil of<br>Jerusalem",
                data:{},
        		children:[]			
			};

        	CalcWdHt.calc(chNode2521);
		
	    var chNode252 = {
	        id: "ch252",
		    name: "Events",
	        data:{},
	        children:[chNode2520,chNode2521]			
	    };

        CalcWdHt.calc(chNode252);
	
		    // Children of chNode253 (Herrisies)
			
			var chNode2530 = {
			    id: "ch2530",
				name: "Gnosticism",
				data:{},
				children:[]			
			};

        	CalcWdHt.calc(chNode2530);
			
		    var chNode2531 = {
				id: "ch2531",
				name: "",
                data:{},
        		children:[]			
			};

        	CalcWdHt.calc(chNode2531);
		
	    var chNode253 = {
	        id: "ch253",
		    name: "Herrisies",
	        data:{},
	        children:[chNode2530]			
	    };

        CalcWdHt.calc(chNode253);