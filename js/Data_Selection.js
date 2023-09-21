/* Selection Data 
*  1.) monasticScheduleObj		[line 10]
*  2.) psalmInfo				[line 60]
*  3.) spExHT					[line 170]
*					
*/



var W1 = `{"Day":[{"gospel":"Mt 1-2","letter":"Acts 1-7","psalm":"Ps 1","devout":"Part I 1-4","pentateuch":"Gn: 1-25.18","novellas":"Tobit"},` +
	 `{"gospel":"Mt 3-7","letter":"Acts 8-14","psalm":"Ps 8","devout":"Part I 5-8","pentateuch":"Gn: 25.19-50","novellas":"Judith"},` +
	 `{"gospel":"Mt 8-10","letter":"Acts 15-21","psalm":"Ps 13","devout":"Part I 9-13","pentateuch":"Ex: 1-31","novellas":"Esther"},` +
	 `{"gospel":"Mt 11-13","letter":"Acts 22-28","psalm":"Ps 19","devout":"Part I 14-18","pentateuch":"Ex: 32-40","novellas":"1 Mc: 1-8"},` +
	 `{"gospel":"Mt 14-18","letter":"Rom 1-5","psalm":"Ps 23","devout":"Part I 19-24","pentateuch":"Lv: 1-27","novellas":"1 Mc: 9-16"},` +
	 `{"gospel":"Mt 19-25","letter":"Rom 6-11","psalm":"Ps 27","devout":"Part II 1-9","pentateuch":"Nm: 1-36","novellas":"2 Mc: 1-7"},` +
	 `{"gospel":"Mt 26-28","letter":"Rom 12-16","psalm":"Ps 32","devout":"Part II 10-11","pentateuch":"Dt: 1-34","novellas":"2 Mc: 8-15"}` + 
	 `]}`; 


var W2 = `{"Day":[{"gospel":"Mk 1-2","letter":"1Cor 1-10","psalm":"Ps 33","devout":"Part II 12-13","historical":"Jos, Jgs, Ruth"},` +
	 `{"gospel":"Mk 3-4","letter":"1Cor 11-16","psalm":"Ps 51","devout":"Part II 14-18","historical":"1 Sm"},` +
	 `{"gospel":"Mk 5-6","letter":"2Cor 1-7","psalm":"Ps 63","devout":"Part II 19-21","historical":"2 Sm"},` +
	 `{"gospel":"Mk 7-8","letter":"2Cor 8-13","psalm":"Ps 91","devout":"Part III 1-2","historical":"1 Kgs"},` +
	 `{"gospel":"Mk 9-10","letter":"Gal","psalm":"Ps 100","devout":"Part III 3-7","historical":"2 Kgs"},` +
	 `{"gospel":"Mk 11-13","letter":"Eph","psalm":"Ps 95","devout":"Part III 8-10","historical":"1 Chr, Neh"},` +
	 `{"gospel":"Mk 14-16","letter":"Phil","psalm":"Ps 121","devout":"Part III 11-13","historical":"2 Chr, Ezra"}` +
	 `]}`; 

var W3 = `{"Day":[{"gospel":"Lk 1-4:13","letter":"Col","psalm":"Ps 123","devout":"Part III 14-16","wisdom":"Job: 1-21"},` +
	 `{"gospel":"Lk 4:14-6","letter":"1 & 2 Thes","psalm":"Ps 126","devout":"Part III 17 - 22","wisdom":"Job: 22 - 42"},` +
	 `{"gospel":"Lk 7-9:50","letter":"1 Tim","psalm":"Ps 127","devout":"Part III 23-25","wisdom":"Proverbs"},` +
	 `{"gospel":"Lk 9:51-14","letter":"2Tim, Ti, Phlm","psalm":"Ps 128","devout":"Part III 26-28","wisdom":"Eccl, Sg"},` +
	 `{"gospel":"Lk 15-19:27","letter":"Heb 1-5","psalm":"Ps 130","devout":"Part III 29-30","wisdom":"Wisdom"},` +
	 `{"gospel":"Lk 19:28-21","letter":"Heb 6-10","psalm":"Ps 131","devout":"Part III 31-37","wisdom":"Sira: 1-26"},` +
	 `{"gospel":"Lk 22-24","letter":"Heb 11-13","psalm":"Ps 133","devout":"Part III 38-41","wisdom":"Sira: 27-51"}` +
	 `]}`;

var W4 = `{"Day":[{"gospel":"Jn 1-3","letter":"Jas","psalm":"Ps 134","devout":"Part IV 1-2","prophets":"Is: 1-39","minor":"Hosea"},` +
	 `{"gospel":"Jn 4-6","letter":"1 Pt","psalm":"Ps 142","devout":"Part IV 3-6","prophets":"Is: 40-66","minor":"Joel"},` +
	 `{"gospel":"Jn 7-10","letter":"2 Pt","psalm":"Ps 144","devout":"Part IV 7-10","prophets":"Jer: 1-29, Bar","minor":"Amos"},` +
	 `{"gospel":"Jn 11-12","letter":"1,2,3 Jn & Jude","psalm":"Ps 146","devout":"Part IV 11-15","prophets":"Jer: 30-52, Lam","minor":"Ob, Jonah"},` +
	 `{"gospel":"Jn 13-17","letter":"Rev 1-5","psalm":"Ps 147","devout":"Part V 1-7","prophets":"Eze: 1-24","minor":"Micah, Nahum"},` +
	 `{"gospel":"Jn 18-19","letter":"Rev 6-16","psalm":"Ps 148","devout":"Part V 8-14","prophets":"Eze: 25-48","minor":"Ha, Zep, Hg"},` +
	 `{"gospel":"Jn 20-21","letter":"Rev 17-22","psalm":"Ps 150","devout":"Part V 15-18","prophets":"Daniel","minor":"Zec, Mal"}` +
	 `]}`; 

var monasticSchedule = '{"Week":[' + W1 + ',' + W2 + ',' + W3 + ',' + W4 + ']}';  

//var monasticSchedule = '{"Week":[' + W1 +  ']}'; 

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
	
	psalmInfo['s031000'] = {'firstVs':'0','vss':'3','src':ps1}; 	
	psalmInfo['s031001'] = {'firstVs':'3','vss':'3','src':ps1};	
	psalmInfo['s031010'] = {'firstVs':'0','vss':'4','src':ps8}; 	
	psalmInfo['s031011'] = {'firstVs':'4','vss':'5','src':ps8};	
	psalmInfo['s031020'] = {'firstVs':'0','vss':'3','src':ps13}; 	
	psalmInfo['s031021'] = {'firstVs':'3','vss':'2','src':ps13};	
	psalmInfo['s031030'] = {'firstVs':'0','vss':'4','src':ps19}; 	
	psalmInfo['s031031'] = {'firstVs':'4','vss':'3','src':ps19};	
	psalmInfo['s031032'] = {'firstVs':'7','vss':'3','src':ps19}; 	
	psalmInfo['s031033'] = {'firstVs':'10','vss':'4','src':ps19};	
	psalmInfo['s031040'] = {'firstVs':'0','vss':'3','src':ps23}; 	
	psalmInfo['s031041'] = {'firstVs':'3','vss':'3','src':ps23};	
	psalmInfo['s031050'] = {'firstVs':'0','vss':'3','src':ps27}; 	
	psalmInfo['s031051'] = {'firstVs':'3','vss':'3','src':ps27};	
	psalmInfo['s031052'] = {'firstVs':'6','vss':'4','src':ps27}; 	
	psalmInfo['s031053'] = {'firstVs':'10','vss':'4','src':ps27};	
	psalmInfo['s031060'] = {'firstVs':'0','vss':'4','src':ps32}; 	
	psalmInfo['s031061'] = {'firstVs':'4','vss':'3','src':ps32};	
	psalmInfo['s031062'] = {'firstVs':'7','vss':'4','src':ps32};
	
	psalmInfo['s031100'] = {'firstVs':'0','vss':'5','src':ps33}; 	
	psalmInfo['s031101'] = {'firstVs':'5','vss':'5','src':ps33};	
	psalmInfo['s031102'] = {'firstVs':'10','vss':'6','src':ps33}; 	
	psalmInfo['s031103'] = {'firstVs':'16','vss':'6','src':ps33};	
	psalmInfo['s031110'] = {'firstVs':'0','vss':'4','src':ps51}; 	
	psalmInfo['s031111'] = {'firstVs':'4','vss':'5','src':ps51};	
	psalmInfo['s031112'] = {'firstVs':'9','vss':'5','src':ps51}; 	
	psalmInfo['s031113'] = {'firstVs':'14','vss':'5','src':ps51}; 	
	psalmInfo['s031120'] = {'firstVs':'0','vss':'3','src':ps63};	
	psalmInfo['s031121'] = {'firstVs':'3','vss':'4','src':ps63}; 	
	psalmInfo['s031122'] = {'firstVs':'7','vss':'4','src':ps63};	
	psalmInfo['s031130'] = {'firstVs':'0','vss':'4','src':ps91}; 	
	psalmInfo['s031131'] = {'firstVs':'4','vss':'4','src':ps91};	
	psalmInfo['s031132'] = {'firstVs':'8','vss':'4','src':ps91}; 	
	psalmInfo['s031133'] = {'firstVs':'12','vss':'4','src':ps91};	
	psalmInfo['s031140'] = {'firstVs':'0','vss':'3','src':ps100}; 	
	psalmInfo['s031141'] = {'firstVs':'3','vss':'2','src':ps100};	
	psalmInfo['s031150'] = {'firstVs':'0','vss':'4','src':ps95}; 	
	psalmInfo['s031151'] = {'firstVs':'4','vss':'4','src':ps95};	
	psalmInfo['s031152'] = {'firstVs':'8','vss':'3','src':ps95};	
	psalmInfo['s031160'] = {'firstVs':'0','vss':'4','src':ps121}; 	
	psalmInfo['s031161'] = {'firstVs':'4','vss':'4','src':ps121};
	 	
	psalmInfo['s031200'] = {'firstVs':'0','vss':'4','src':ps123};
	psalmInfo['s031210'] = {'firstVs':'0','vss':'3','src':ps126};
	psalmInfo['s031211'] = {'firstVs':'3','vss':'3','src':ps126};
	psalmInfo['s031220'] = {'firstVs':'0','vss':'2','src':ps127};
	psalmInfo['s031221'] = {'firstVs':'2','vss':'3','src':ps127};
	psalmInfo['s031230'] = {'firstVs':'0','vss':'3','src':ps128};
	psalmInfo['s031231'] = {'firstVs':'3','vss':'3','src':ps128};
	psalmInfo['s031240'] = {'firstVs':'0','vss':'4','src':ps130};
	psalmInfo['s031241'] = {'firstVs':'4','vss':'4','src':ps130};
	psalmInfo['s031250'] = {'firstVs':'0','vss':'3','src':ps131};
	psalmInfo['s031260'] = {'firstVs':'0','vss':'3','src':ps133};
	
	psalmInfo['s031300'] = {'firstVs':'0','vss':'3','src':ps134};
	psalmInfo['s031310'] = {'firstVs':'0','vss':'4','src':ps142};
	psalmInfo['s031311'] = {'firstVs':'4','vss':'3','src':ps142};
	psalmInfo['s031320'] = {'firstVs':'0','vss':'4','src':ps144};
	psalmInfo['s031321'] = {'firstVs':'4','vss':'4','src':ps144};
	psalmInfo['s031322'] = {'firstVs':'8','vss':'3','src':ps144};
	psalmInfo['s031323'] = {'firstVs':'11','vss':'3','src':ps144};
	psalmInfo['s031330'] = {'firstVs':'0','vss':'3','src':ps146};
	psalmInfo['s031331'] = {'firstVs':'3','vss':'3','src':ps146};
	psalmInfo['s031332'] = {'firstVs':'6','vss':'3','src':ps146};
	psalmInfo['s031340'] = {'firstVs':'0','vss':'5','src':ps147};
	psalmInfo['s031341'] = {'firstVs':'5','vss':'5','src':ps147};
	psalmInfo['s031342'] = {'firstVs':'10','vss':'5','src':ps147};
	psalmInfo['s031343'] = {'firstVs':'15','vss':'5','src':ps147};
	psalmInfo['s031350'] = {'firstVs':'0','vss':'4','src':ps148};
	psalmInfo['s031351'] = {'firstVs':'4','vss':'3','src':ps148};
	psalmInfo['s031352'] = {'firstVs':'7','vss':'4','src':ps148};
	psalmInfo['s031353'] = {'firstVs':'11','vss':'3','src':ps148};
	psalmInfo['s031360'] = {'firstVs':'0','vss':'3','src':ps150};
	psalmInfo['s031361'] = {'firstVs':'3','vss':'3','src':ps150};
	
	
	






    // hash table   where:
    //                	1.) key = "id of selected item in weekly table"
	//					2.) value = "var name of associated JSON file"
	//   Codes:  	Object		Code
	//				Gospel  	"go"
	//				Letters  	"le"
	//				Psalms 		"ps"
	//				Devout 		"de"
	//				Pentatecuh 	"pe"
	//				Historical 	"hi"
	// 				Wisdom 		"wi"
	//				Prophets 	"pr"
	// 				Novelas 	"no"
	//				MinorProphets "mp"
	
	var spExHT = {};
	spExHT['go01'] = sNode1000;    spExHT['go02'] = sNode1001;	spExHT['go03'] = sNode1002;	spExHT['go04'] = sNode1003;	spExHT['go05'] = sNode1004;	spExHT['go06'] = sNode1005;	spExHT['go07'] = sNode1006;	
	spExHT['go11'] = sNode1010;	spExHT['go12'] = sNode1011;	spExHT['go13'] = sNode1012;	spExHT['go14'] = sNode1013;	spExHT['go15'] = sNode1014;	spExHT['go16'] = sNode1015;	spExHT['go17'] = sNode1016;
	spExHT['go21'] = sNode1020/*Lk1-4:13*/;	spExHT['go22'] = sNode1021/*Lk4:14-6*/;	spExHT['go23'] = sNode1022/*Lk7-9:50*/;	spExHT['go24'] = sNode1023/*Lk9:51-14*/;	spExHT['go25'] = sNode1024/*Lk15-19:27*/;	spExHT['go26'] = sNode1025/*Lk19:28-21*/;	spExHT['go27'] = sNode1026/*Lk22-24*/;
	spExHT['go31'] = sNode10300;	spExHT['go32'] = sNode10301;	spExHT['go33'] = sNode10302;	spExHT['go34'] = sNode10303;	spExHT['go35'] = sNode10310;	spExHT['go36'] = sNode10311;	spExHT['go37'] = sNode10312;
	
	spExHT['le01'] = sNode110;    spExHT['le02'] = sNode111;	spExHT['le03'] = sNode112;	spExHT['le04'] = sNode113;	spExHT['le05'] = sNode1200;	spExHT['le06'] = sNode1201;	spExHT['le07'] = sNode1202;	
	spExHT['le11'] = sNode12100/*"1Cor:1-10"*/;	  spExHT['le12'] = sNode12101/*"1Cor:11-16"*/;	spExHT['le13'] = sNode12110/*"2Cor:1-7"*/;	spExHT['le14'] = sNode12111/*"2Cor:8-13"*/;	spExHT['le15'] = sNode122/*"Gal"*/;	spExHT['le16'] = sNode123/*"Eph"*/;	spExHT['le17'] = sNode124/*"Phil"*/;
	spExHT['le21'] = sNode125/*"Col"*/;	   spExHT['le22'] = sNode126/*"1&2Thes"*/;	spExHT['le23'] = sNode127/*"1Tim"*/;	spExHT['le24'] = sNode128/*"2TimTiPhlm"*/;	spExHT['le25'] = sNode1290/*"Heb:1-5"*/;	spExHT['le26'] = sNode1291/*"Heb:6-10"*/;	spExHT['le27'] = sNode1292/*"Heb:11-13"*/;
	spExHT['le31'] = sNode130/*"Jas"*/;	spExHT['le32'] = sNode131/*"1Pt"*/;	spExHT['le33'] = sNode132/*"2Pt"*/;	spExHT['le34'] = sNode133/*"123JohnJude"*/;	spExHT['le35'] = sNode140/*"Rev1-5"*/;	spExHT['le36'] = sNode141/*"Rev6-16"*/;	spExHT['le37'] = sNode142/*"Rev17-21"*/;

	spExHT['ps01'] = sNode03100;    spExHT['ps02'] = sNode03101;	spExHT['ps03'] = sNode03102;	spExHT['ps04'] = sNode03103;	spExHT['ps05'] = sNode03104;	spExHT['ps06'] = sNode03105;	spExHT['ps07'] = sNode03106;	
	spExHT['ps11'] = sNode03110;	spExHT['ps12'] = sNode03111;	spExHT['ps13'] = sNode03112;	spExHT['ps14'] = sNode03113;	spExHT['ps15'] = sNode03114;	spExHT['ps16'] = sNode03115;	spExHT['ps17'] = sNode03116;
	spExHT['ps21'] = sNode03120;	spExHT['ps22'] = sNode03121;	spExHT['ps23'] = sNode03122;	spExHT['ps24'] = sNode03123;	spExHT['ps25'] = sNode03124;	spExHT['ps26'] = sNode03125;	spExHT['ps27'] = sNode03126;
	spExHT['ps31'] = sNode03130;	spExHT['ps32'] = sNode03131;	spExHT['ps33'] = sNode03132;	spExHT['ps34'] = sNode03133;	spExHT['ps35'] = sNode03134;	spExHT['ps36'] = sNode03135;	spExHT['ps37'] = sNode03136;
	
	spExHT['de01'] = dNode00/*"PartI:1-4"*/; spExHT['de02'] = dNode01/*"PartI:5-8"*/;	spExHT['de03'] = dNode02/*"PartI:9-13"*/;	spExHT['de04'] = dNode03/*"PartI:14-18"*/;	spExHT['de05'] = dNode04/*"PartI:19-24"*/;	spExHT['de06'] = dNode05/*"Part II 1-7"*/;	spExHT['de07'] = dNode06/*"Part II 8-11"*/;	
	spExHT['de11'] = dNode10/*"PartII:12-13"*/;	spExHT['de12'] = dNode11/*"PartII:14-18"*/;	spExHT['de13'] = dNode12/*"PartII:19-21"*/;	spExHT['de14'] = dNode13/*"PartIII:Ch 1-3"*/;	spExHT['de15'] = dNode14/*"PartIII:4-6"*/;	spExHT['de16'] = dNode15/*"PartIII:7-9"*/;	spExHT['de17'] = dNode16/*"PartIII:10-13"*/;
	spExHT['de21'] = dNode20/*"PartIII:14-16"*/; spExHT['de22'] = dNode21/*"PartIII:17-22"*/; spExHT['de23'] = dNode22/*"PartIII:23-25"*/;	spExHT['de24'] = dNode23/*"PartIII:26-28"*/;	spExHT['de25'] = dNode24/*"PartIII:29-30"*/;	spExHT['de26'] = dNode25/*"PartIII:31-37"*/;	spExHT['de27'] = dNode26/*"PartIII:38-41"*/;
	spExHT['de31'] = dNode30/*"PartIV:1-2"*/; spExHT['de32'] = dNode31/*"PartIV:3-6"*/;	spExHT['de33'] = dNode32/*"PartIV:7-10"*/;	spExHT['de34'] = dNode33/*"PartIV:11-15"*/;	spExHT['de35'] = dNode34/*"PartV:1-5"*/;	spExHT['de36'] = dNode35/*"PartV:6-14"*/;	spExHT['de37'] = dNode36/*"PartV:15-18"*/;
 
	spExHT['pe01'] = sNode0000/*Genesis(1)*/;    spExHT['pe02'] = sNode0001/*Genesis(2)*/;	spExHT['pe03'] = sNode0010/*Exodus(1)*/;	spExHT['pe04'] = sNode0011/*Exodus(2)*/;	spExHT['pe05'] = sNode002/*Leviticus*/;	spExHT['pe06'] = sNode003/*Numbers*/;	spExHT['pe07'] = sNode004/*Deuteronomy*/;	
	
	spExHT['no01'] = sNode020/*Tobit*/;    spExHT['no02'] = sNode021/*Judith*/;	spExHT['no03'] = sNode022/*Esther*/;	spExHT['no04'] = sNode02300/*1Maccabees(1)*/;	spExHT['no05'] = sNode02301/*1Maccabees(2)*/;	spExHT['no06'] = sNode02310/*2Maccabees(1)*/;	spExHT['no07'] = sNode02311/*2Maccabees(2)*/;	

    spExHT['hi11'] = sNode010/*Joshua-Judges-Ruth*/;    spExHT['hi12'] = sNode0110/*1Samuel*/;  spExHT['hi13'] = sNode0111/*2Samuel*/;  spExHT['hi14'] = sNode0120/*1Kings*/;   spExHT['hi15'] = sNode0121/*2Kings*/;   spExHT['hi16'] = sNode013/*1 Chronicles-Nehemiah*/; spExHT['hi17'] = sNode014/*1 Chronicles-Ezra*/;
	
	spExHT['wi21'] = sNode0300/*Job(1)*/;	spExHT['wi22'] = sNode0301/*Job(2)*/;	spExHT['wi23'] = sNode032/*Proverbs*/;	spExHT['wi24'] = sNode033/*Ecclesiastes_SongOfSongs*/;	spExHT['wi25'] = sNode034/*Wisdom*/;	spExHT['wi26'] = sNode035/*Sirach(1)"*/;	spExHT['wi27'] = sNode036/*Sirach(2)*/;

	spExHT['pr31'] = sNode04000/*"Isaiah(1)*/;	spExHT['pr32'] = sNode04001/*Isaiah(2)*/;	spExHT['pr33'] = sNode04010/*Jeremiah(1)*/;	spExHT['pr34'] = sNode04011/*Jeremiah(2)-Lametations*/;	spExHT['pr35'] = sNode04020/*Ezekiel(1)*/;	spExHT['pr36'] = sNode04021/*Ezekiel(2) Baruch*/;	spExHT['pr37'] = sNode0403/*Daniel"*/;

	spExHT['mi31'] = sNode0410/*Hosea*/;	spExHT['mi32'] = sNode0411/*Joel*/;	spExHT['mi33'] = sNode0412/*Amos*/;	spExHT['mi34'] = sNode0413/*Obadiah-Jonah*/;	spExHT['mi35'] = sNode0414/*Micah-Nahum*/;	spExHT['mi36'] = sNode0420/*Habakkuk-Zephaniah-Haggai*/;	spExHT['mi37'] = sNode0421/*Zechariah-Malachi*/;
