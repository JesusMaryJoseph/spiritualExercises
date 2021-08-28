/* Selection Data 
*  1.) monasticScheduleObj		[line 10]
*  2.) psalmInfo				[line 60]
*  3.) spExHT					[line 170]
*					
*/



var W1 = `{"Day":[{"scripture":{"gospel":"Mt 1-2","letter":"Acts 1-7","psalm":"Ps 1"},"devout":"Part I 1-4","hist":"Yrs: 67-115"},` +
	 `{"scripture":{"gospel":"Mt 3-7","letter":"Acts 8-14","psalm":"Ps 8"},"devout":"Part I 5-8","hist":"Yrs: 115-217"},` +
	 `{"scripture":{"gospel":"Mt 8-10","letter":"Acts 15-21","psalm":"Ps 13"},"devout":"Part I 9-13","hist":"Yrs: 217-250"},` +
	 `{"scripture":{"gospel":"Mt 11-13","letter":"Acts 22-28","psalm":"Ps 19"},"devout":"Part I 14-18","hist":"Yrs: 250-336"},` +
	 `{"scripture":{"gospel":"Mt 14-18","letter":"Rom 1-5","psalm":"Ps 23"},"devout":"Part I 19-24","hist":"Yrs: 336-418"},` +
	 `{"scripture":{"gospel":"Mt 19-25","letter":"Rom 6-11","psalm":"Ps 27"},"devout":"Part II 1-7","hist":"Yrs: 418-530"},` +
	 `{"scripture":{"gospel":"Mt 26-28","letter":"Rom 12-16","psalm":"Ps 32"},"devout":"Part II 8-11","hist":"Yrs: 530-606"}` + 
	 `]}`; 


	

var W2 = `{"Day":[{"scripture":{"gospel":"Mk 1-2","letter":"1Cor 1-10","psalm":"Ps 33"},"devout":"Part II 12-13","hist":"Yrs: 606-708"},` +
	 `{"scripture":{"gospel":"Mk 3-4","letter":"1Cor 11-16","psalm":"Ps 51"},"devout":"Part II 14-18","hist":"Yrs: 708-872"},` +
	 `{"scripture":{"gospel":"Mk 5-6","letter":"2Cor 1-7","psalm":"Ps 63"},"devout":"Part II 19-21","hist":"Yrs: 872-903"},` +
	 `{"scripture":{"gospel":"Mk 7-8","letter":"2Cor 8-13","psalm":"Ps 91"},"devout":"Part III 1-2","hist":"Yrs: 903-972"},` +
	 `{"scripture":{"gospel":"Mk 9-10","letter":"Gal","psalm":"Ps 100"},"devout":"Part III 3-7","hist":"Yrs: 972-999"},` +
	 `{"scripture":{"gospel":"Mk 11-13","letter":"Eph","psalm":"Ps 95"},"devout":"Part III 8-10","hist":"Yrs: 999-1047"},` +
	 `{"scripture":{"gospel":"Mk 14-16","letter":"Phil","psalm":"Ps 121"},"devout":"Part III 11-13","hist":"Yrs: 1047-1085"}` +
	 `]}`; 

var W3 = `{"Day":[{"scripture":{"gospel":"Lk 1-4:13","letter":"Col","psalm":"Ps 123"},"devout":"Part III 14-16","hist":"Yrs: 1085-1119"},` +
	 `{"scripture":{"gospel":"Lk 4:14-6","letter":"1 & 2 Thes","psalm":"Ps 126"},"devout":"Part III 17 - 22","hist":"Yrs: 1119 - 1153"},` +
	 `{"scripture":{"gospel":"Lk 7-9:50","letter":"1 Tim","psalm":"Ps 127"},"devout":"Part III 23-25","hist":"Yrs: 1153-1187"},` +
	 `{"scripture":{"gospel":"Lk 9:51-14","letter":"2Tim, Ti, Phlm","psalm":"Ps 128"},"devout":"Part III 26-28","hist":"Yrs: 1187-1241"},` +
	 `{"scripture":{"gospel":"Lk 15-19:27","letter":"Heb 1-5","psalm":"Ps 130"},"devout":"Part III 29-30","hist":"Yrs: 1241-1276"},` +
	 `{"scripture":{"gospel":"Lk 19:28-21","letter":"Heb 6-10","psalm":"Ps 131"},"devout":"Part III 31-37","hist":"Yrs: 1276-1285"},` +
	 `{"scripture":{"gospel":"Lk 22-24","letter":"Heb 11-13","psalm":"Ps 133"},"devout":"Part III 38-41","hist":"Yrs: 1285-1294"}` +
	 `]}`;

var W4 = `{"Day":[{"scripture":{"gospel":"Jn 1-3","letter":"Jas","psalm":"Ps 134"},"devout":"Part IV 1-4","hist":"Yrs: 1294-1314"},` +
	 `{"scripture":{"gospel":"Jn 4-6","letter":"1 Pt","psalm":"Ps 142"},"devout":"Part IV 5-10","hist":"Yrs: 1314-1389"},` +
	 `{"scripture":{"gospel":"Jn 7-10","letter":"2 Pt","psalm":"Ps 144"},"devout":"Part IV 11-12","hist":"Yrs: 1389-1513"},` +
	 `{"scripture":{"gospel":"Jn 11-12","letter":"1,2,3 Jn & Jude","psalm":"Ps 146"},"devout":"Part IV 13-15","hist":"Yrs: 1513-1572"},` +
	 `{"scripture":{"gospel":"Jn 13-17","letter":"Rev 1-5","psalm":"Ps 147"},"devout":"Part V 1-7","hist":"Yrs: 1572-1730"},` +
	 `{"scripture":{"gospel":"Jn 18-19","letter":"Rev 6-16","psalm":"Ps 148"},"devout":"Part V 8-14","hist":"Yrs: 1730-1939"},` +
	 `{"scripture":{"gospel":"Jn 20-21","letter":"Rev 17-22","psalm":"Ps 150"},"devout":"Part V 15-18","hist":"Yrs: 1939-present"}` +
	 `]}`; 

var monasticSchedule = '{"Week":[' + W1 + ',' + W2 + ',' + W3 + ',' + W4 + ']}'; 

var monasticScheduleObj = JSON.parse(monasticSchedule);








    /* look up table for the psalms
    *		any given Psalm is displayed in 1 or more Nodes
    *		eg: Psalm 1 has 2 children with id's ('s021000' and 's021001'):
	*            	// Children of sNode02100 (Psalms 1) 
	*            	var sNode021000 = {
	*                	id: "s021000",
	*                	name:"<ul><li id='vs1' onclick='liClkHndlr(event)'>"+ps1[0]+"</li><li id='vs2' onclick='liClkHndlr(event)'>"+ps1[1]+"</li><li id='vs3' onclick='liClkHndlr(event)'>"+ps1[2]+"</li></ul>",
	*                	data: {"width": "370","height": "165"},
	*                	children: []
	*            	};
	*
	*            	var sNode021001 = {
	*                	id: "s021001",
	*                	name:"<ul><li id='vs4' onclick='liClkHndlr(event)'>"+ps1[3]+"</li><li id='vs5' onclick='liClkHndlr(event)'>"+ps1[4]+"</li><li id='vs6' onclick='liClkHndlr(event)'>"+ps1[5]+"</li></ul>",
	*                	data: {"width": "370","height": "130"},
	*                	children: []
	*            	};
	*
    *      from psalmInfo[nodeId] we get:
    *			1.) which Psalm it is('src') 
    *			2.) the firstVerse('firstVs') for this node and 
    *			3.) how many verses('vss') are in this node
    */
          
	var psalmInfo = {};
	
	psalmInfo['s021000'] = {'firstVs':'0','vss':'3','src':ps1}; 	
	psalmInfo['s021001'] = {'firstVs':'3','vss':'3','src':ps1};	
	psalmInfo['s021010'] = {'firstVs':'0','vss':'4','src':ps8}; 	
	psalmInfo['s021011'] = {'firstVs':'4','vss':'5','src':ps8};	
	psalmInfo['s021020'] = {'firstVs':'0','vss':'3','src':ps13}; 	
	psalmInfo['s021021'] = {'firstVs':'3','vss':'2','src':ps13};	
	psalmInfo['s021030'] = {'firstVs':'0','vss':'4','src':ps19}; 	
	psalmInfo['s021031'] = {'firstVs':'4','vss':'3','src':ps19};	
	psalmInfo['s021032'] = {'firstVs':'7','vss':'3','src':ps19}; 	
	psalmInfo['s021033'] = {'firstVs':'10','vss':'4','src':ps19};	
	psalmInfo['s021040'] = {'firstVs':'0','vss':'3','src':ps23}; 	
	psalmInfo['s021041'] = {'firstVs':'3','vss':'3','src':ps23};	
	psalmInfo['s021050'] = {'firstVs':'0','vss':'3','src':ps27}; 	
	psalmInfo['s021051'] = {'firstVs':'3','vss':'3','src':ps27};	
	psalmInfo['s021052'] = {'firstVs':'6','vss':'4','src':ps27}; 	
	psalmInfo['s021053'] = {'firstVs':'10','vss':'4','src':ps27};	
	psalmInfo['s021060'] = {'firstVs':'0','vss':'4','src':ps32}; 	
	psalmInfo['s021061'] = {'firstVs':'4','vss':'3','src':ps32};	
	psalmInfo['s021062'] = {'firstVs':'7','vss':'4','src':ps32};
	
	psalmInfo['s021100'] = {'firstVs':'0','vss':'5','src':ps33}; 	
	psalmInfo['s021101'] = {'firstVs':'5','vss':'5','src':ps33};	
	psalmInfo['s021102'] = {'firstVs':'10','vss':'6','src':ps33}; 	
	psalmInfo['s021103'] = {'firstVs':'16','vss':'6','src':ps33};	
	psalmInfo['s021110'] = {'firstVs':'0','vss':'4','src':ps51}; 	
	psalmInfo['s021111'] = {'firstVs':'4','vss':'5','src':ps51};	
	psalmInfo['s021112'] = {'firstVs':'9','vss':'5','src':ps51}; 	
	psalmInfo['s021113'] = {'firstVs':'14','vss':'5','src':ps51}; 	
	psalmInfo['s021120'] = {'firstVs':'0','vss':'3','src':ps63};	
	psalmInfo['s021121'] = {'firstVs':'3','vss':'4','src':ps63}; 	
	psalmInfo['s021122'] = {'firstVs':'7','vss':'4','src':ps63};	
	psalmInfo['s021130'] = {'firstVs':'0','vss':'4','src':ps91}; 	
	psalmInfo['s021131'] = {'firstVs':'4','vss':'4','src':ps91};	
	psalmInfo['s021132'] = {'firstVs':'8','vss':'4','src':ps91}; 	
	psalmInfo['s021133'] = {'firstVs':'12','vss':'4','src':ps91};	
	psalmInfo['s021140'] = {'firstVs':'0','vss':'3','src':ps100}; 	
	psalmInfo['s021141'] = {'firstVs':'3','vss':'2','src':ps100};	
	psalmInfo['s021150'] = {'firstVs':'0','vss':'4','src':ps95}; 	
	psalmInfo['s021151'] = {'firstVs':'4','vss':'4','src':ps95};	
	psalmInfo['s021152'] = {'firstVs':'8','vss':'3','src':ps95};	
	psalmInfo['s021160'] = {'firstVs':'0','vss':'4','src':ps121}; 	
	psalmInfo['s021161'] = {'firstVs':'4','vss':'4','src':ps121};
	 	
	psalmInfo['s021200'] = {'firstVs':'0','vss':'4','src':ps123};
	psalmInfo['s021210'] = {'firstVs':'0','vss':'3','src':ps126};
	psalmInfo['s021211'] = {'firstVs':'3','vss':'3','src':ps126};
	psalmInfo['s021220'] = {'firstVs':'0','vss':'2','src':ps127};
	psalmInfo['s021221'] = {'firstVs':'2','vss':'3','src':ps127};
	psalmInfo['s021230'] = {'firstVs':'0','vss':'3','src':ps128};
	psalmInfo['s021231'] = {'firstVs':'3','vss':'3','src':ps128};
	psalmInfo['s021240'] = {'firstVs':'0','vss':'4','src':ps130};
	psalmInfo['s021241'] = {'firstVs':'4','vss':'4','src':ps130};
	psalmInfo['s021250'] = {'firstVs':'0','vss':'3','src':ps131};
	psalmInfo['s021260'] = {'firstVs':'0','vss':'3','src':ps133};
	
	psalmInfo['s021300'] = {'firstVs':'0','vss':'3','src':ps134};
	psalmInfo['s021310'] = {'firstVs':'0','vss':'4','src':ps142};
	psalmInfo['s021311'] = {'firstVs':'4','vss':'3','src':ps142};
	psalmInfo['s021320'] = {'firstVs':'0','vss':'4','src':ps144};
	psalmInfo['s021321'] = {'firstVs':'4','vss':'4','src':ps144};
	psalmInfo['s021322'] = {'firstVs':'8','vss':'3','src':ps144};
	psalmInfo['s021323'] = {'firstVs':'11','vss':'3','src':ps144};
	psalmInfo['s021330'] = {'firstVs':'0','vss':'3','src':ps146};
	psalmInfo['s021331'] = {'firstVs':'3','vss':'3','src':ps146};
	psalmInfo['s021332'] = {'firstVs':'6','vss':'3','src':ps146};
	psalmInfo['s021340'] = {'firstVs':'0','vss':'5','src':ps147};
	psalmInfo['s021341'] = {'firstVs':'5','vss':'5','src':ps147};
	psalmInfo['s021342'] = {'firstVs':'10','vss':'5','src':ps147};
	psalmInfo['s021343'] = {'firstVs':'15','vss':'5','src':ps147};
	psalmInfo['s021350'] = {'firstVs':'0','vss':'4','src':ps148};
	psalmInfo['s021351'] = {'firstVs':'4','vss':'3','src':ps148};
	psalmInfo['s021352'] = {'firstVs':'7','vss':'4','src':ps148};
	psalmInfo['s021353'] = {'firstVs':'11','vss':'3','src':ps148};
	psalmInfo['s021360'] = {'firstVs':'0','vss':'3','src':ps150};
	psalmInfo['s021361'] = {'firstVs':'3','vss':'3','src':ps150};
	
	
	






    // hash table   where:
    //                	1.) key = "id of selected item in weekly table"
	//					2.) value = "var name of associated JSON file"
	
	var spExHT = {};
	
	spExHT['gw01'] = sNode1000;    spExHT['gw02'] = sNode1001;	spExHT['gw03'] = sNode1002;	spExHT['gw04'] = sNode1003;	spExHT['gw05'] = sNode1004;	spExHT['gw06'] = sNode1005;	spExHT['gw07'] = sNode1006;	
	spExHT['gw11'] = sNode1010;	spExHT['gw12'] = sNode1011;	spExHT['gw13'] = sNode1012;	spExHT['gw14'] = sNode1013;	spExHT['gw15'] = sNode1014;	spExHT['gw16'] = sNode1015;	spExHT['gw17'] = sNode1016;
	spExHT['gw21'] = sNode1020/*Lk1-4:13*/;	spExHT['gw22'] = sNode1021/*Lk4:14-6*/;	spExHT['gw23'] = sNode1022/*Lk7-9:50*/;	spExHT['gw24'] = sNode1023/*Lk9:51-14*/;	spExHT['gw25'] = sNode1024/*Lk15-19:27*/;	spExHT['gw26'] = sNode1025/*Lk19:28-21*/;	spExHT['gw27'] = sNode1026/*Lk22-24*/;
	spExHT['gw31'] = sNode10300;	spExHT['gw32'] = sNode10301;	spExHT['gw33'] = sNode10302;	spExHT['gw34'] = sNode10303;	spExHT['gw35'] = sNode10310;	spExHT['gw36'] = sNode10311;	spExHT['gw37'] = sNode10312;
	
	spExHT['lw01'] = sNode110;    spExHT['lw02'] = sNode111;	spExHT['lw03'] = sNode112;	spExHT['lw04'] = sNode113;	spExHT['lw05'] = sNode1200;	spExHT['lw06'] = sNode1201;	spExHT['lw07'] = sNode1202;	
	spExHT['lw11'] = sNode12100/*"1Cor:1-10"*/;	  spExHT['lw12'] = sNode12101/*"1Cor:11-16"*/;	spExHT['lw13'] = sNode12110/*"2Cor:1-7"*/;	spExHT['lw14'] = sNode12111/*"2Cor:8-13"*/;	spExHT['lw15'] = sNode122/*"Gal"*/;	spExHT['lw16'] = sNode123/*"Eph"*/;	spExHT['lw17'] = sNode124/*"Phil"*/;
	spExHT['lw21'] = sNode125/*"Col"*/;	   spExHT['lw22'] = sNode126/*"1&2Thes"*/;	spExHT['lw23'] = sNode127/*"1Tim"*/;	spExHT['lw24'] = sNode128/*"2TimTiPhlm"*/;	spExHT['lw25'] = sNode1290/*"Heb:1-5"*/;	spExHT['lw26'] = sNode1291/*"Heb:6-10"*/;	spExHT['lw27'] = sNode1292/*"Heb:11-13"*/;
	spExHT['lw31'] = sNode130/*"Jas"*/;	spExHT['lw32'] = sNode131/*"1Pt"*/;	spExHT['lw33'] = sNode132/*"2Pt"*/;	spExHT['lw34'] = sNode133/*"123JohnJude"*/;	spExHT['lw35'] = sNode140/*"Rev1-5"*/;	spExHT['lw36'] = sNode141/*"Rev6-16"*/;	spExHT['lw37'] = sNode142/*"Rev17-21"*/;

	spExHT['pw01'] = sNode02100;    spExHT['pw02'] = sNode02101;	spExHT['pw03'] = sNode02102;	spExHT['pw04'] = sNode02103;	spExHT['pw05'] = sNode02104;	spExHT['pw06'] = sNode02105;	spExHT['pw07'] = sNode02106;	
	spExHT['pw11'] = sNode02110;	spExHT['pw12'] = sNode02111;	spExHT['pw13'] = sNode02112;	spExHT['pw14'] = sNode02113;	spExHT['pw15'] = sNode02114;	spExHT['pw16'] = sNode02115;	spExHT['pw17'] = sNode02116;
	spExHT['pw21'] = sNode02120;	spExHT['pw22'] = sNode02121;	spExHT['pw23'] = sNode02122;	spExHT['pw24'] = sNode02123;	spExHT['pw25'] = sNode02124;	spExHT['pw26'] = sNode02125;	spExHT['pw27'] = sNode02126;
	spExHT['pw31'] = sNode02130;	spExHT['pw32'] = sNode02131;	spExHT['pw33'] = sNode02132;	spExHT['pw34'] = sNode02133;	spExHT['pw35'] = sNode02134;	spExHT['pw36'] = sNode02135;	spExHT['pw37'] = sNode02136;
	 
	spExHT['dw01'] = dNode00/*"PartI:1-4"*/; spExHT['dw02'] = dNode01/*"PartI:5-8"*/;	spExHT['dw03'] = dNode02/*"PartI:9-13"*/;	spExHT['dw04'] = dNode03/*"PartI:14-18"*/;	spExHT['dw05'] = dNode04/*"PartI:19-24"*/;	spExHT['dw06'] = dNode05/*"Part II 1-7"*/;	spExHT['dw07'] = dNode06/*"Part II 8-11"*/;	
	spExHT['dw11'] = dNode10/*"PartII:12-13"*/;	spExHT['dw12'] = dNode11/*"PartII:14-18"*/;	spExHT['dw13'] = dNode12/*"PartII:19-21"*/;	spExHT['dw14'] = dNode13/*"PartIII:Ch 1-3"*/;	spExHT['dw15'] = dNode14/*"PartIII:4-6"*/;	spExHT['dw16'] = dNode15/*"PartIII:7-9"*/;	spExHT['dw17'] = dNode16/*"PartIII:10-13"*/;
	spExHT['dw21'] = dNode20/*"PartIII:14-16"*/; spExHT['dw22'] = dNode21/*"PartIII:17-22"*/; spExHT['dw23'] = dNode22/*"PartIII:23-25"*/;	spExHT['dw24'] = dNode23/*"PartIII:26-28"*/;	spExHT['dw25'] = dNode24/*"PartIII:29-30"*/;	spExHT['dw26'] = dNode25/*"PartIII:31-37"*/;	spExHT['dw27'] = dNode26/*"PartIII:38-41"*/;
	spExHT['dw31'] = dNode30/*"PartIV:1-4"*/; spExHT['dw32'] = dNode31/*"PartIV:5-10"*/;	spExHT['dw33'] = dNode32/*"PartIV:11-13"*/;	spExHT['dw34'] = dNode33/*"PartIV:14-15"*/;	spExHT['dw35'] = dNode34/*"PartV:1-5"*/;	spExHT['dw36'] = dNode35/*"PartV:6-14"*/;	spExHT['dw37'] = dNode36/*"PartV:15-18"*/;
	
	spExHT['hw01'] = chNode00/*"Yrs:67-115"*/;    spExHT['hw02'] = chNode01/*"Yrs:115-217"*/;	spExHT['hw03'] = chNode02/*"Yrs:217-250"*/;	spExHT['hw04'] = chNode03/*"Yrs:251-336"*/;	spExHT['hw05'] = chNode04/*"Yrs:336-418"*/;	spExHT['hw06'] = chNode05/*"Yrs:418-530"*/;	spExHT['hw07'] = chNode06/*"Yrs:530-606"*/;	
	spExHT['hw11'] = chNode10/*"Yrs:606-708"*/;	spExHT['hw12'] = chNode11/*"Yrs:708-872"*/;	spExHT['hw13'] = chNode12/*"Yrs:872-903"*/;	spExHT['hw14'] = chNode13/*"Yrs:903-972"*/;	spExHT['hw15'] = chNode14/*"Yrs:972-999"*/;	spExHT['hw16'] = chNode15/*"Yrs:999-1047"*/;	spExHT['hw17'] = chNode16/*"Yrs:1047-1085"*/;
	spExHT['hw21'] = chNode20/*"Yrs:1085-1119"*/;	spExHT['hw22'] = chNode21/*"Yrs:1119-1153"*/;	spExHT['hw23'] = chNode22/*"Yrs:1153-1187"*/;	spExHT['hw24'] = chNode23/*"Yrs:1187-1241"*/;	spExHT['hw25'] = chNode24/*"Yrs:1241-1276"*/;	spExHT['hw26'] = chNode25/*"Yrs:1276-1285"*/;	spExHT['hw27'] = chNode26/*"Yrs:1285-1294"*/;
	spExHT['hw31'] = chNode30/*"Yrs:1294-1314"*/;	spExHT['hw32'] = chNode31/*"Yrs:1314-1389"*/;	spExHT['hw33'] = chNode32/*"Yrs:1389-1513"*/;	spExHT['hw34'] = chNode33/*"Yrs:1513-1572"*/;	spExHT['hw35'] = chNode34/*"Yrs:1572-1730"*/;	spExHT['hw36'] = chNode35/*"Yrs:1730-1939"*/;	spExHT['hw37'] = chNode36/*"Yrs:19-39-present"*/;

