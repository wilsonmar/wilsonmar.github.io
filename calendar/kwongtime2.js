<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>
	<meta name="AUTHOR" content="Wilson Mar">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="keywords" content="World Clock Cities Daylight Savings">
	<meta name="description" content="World Clock for Cities with Daylight Savings">
<title>Kwong Time</title>
<noscript>Whoops. This page needs ActiveX and Javascript enabled.
If there is a yellow message at the top of the screen, please click it.
If you're using a mobile phone, sorry, we're working on this for you.
- Wilson Mar
</noscript>
<META http-equiv="Content-Type" content="text/html; charset=windows-1252" />
<meta name="AUTHOR" content="Wilson Mar, 310.320-7878" />
<meta name="description" content="This widget displays the current time at selected cities around the world's 13 time zones. The display is refreshed once every minute. Buttons are provided to add/subtract hours, control font size up/down, and reset settings to program defaults. Links to the timeanddate.com website provides a way to confirm the time. Selections are saved as cookies for retrieval and redisplay at initialization. Copyright 2008 Wilson Mar [wilsonmar@gmail.com]. All rights reserved."/>
<meta name="robots" content="all" />
<script type="text/javascript"><!-- 
var prefsLoaded = false;
var defaultFontSize = 10;
var currentFontPx = defaultFontSize;
var thans = new Date(); // Client Local time NOW at start of program.
var specOffHrs
var s_1224 = "12"; // or "24"
var city_color= new Array('121212','121212','#121212','CCFFFF','006400','FF9900','800000','7','8');
var ty,tm,td,th,tmm,ts;
ty = thans.getFullYear(); // This is a JavaScript 1.2 dependency.
tm = thans.getMonth()+1; //Jan=0!
td = thans.getDate(); // day
th = thans.getHours();
tmm = thans.getMinutes();
ts = thans.getSeconds();
// cloud merc.tv/img/icons/4_lge.gif
function init(){ // Fill display fields:
	if(!prefsLoaded){
		cookie = readCookie("12or24");
		cookie = readCookie("fontSize");
		currentFontPx = cookie ? cookie : defaultFontSize;
		fnt_set(currentFontPx);
		prefsLoaded = true;
	}
	specOffHrs = 0;
	display(); // the first one.
}
window.onunload = saveSettings;
function saveSettings(){
  createCookie("12or24", currentFontPx, 365);
  createCookie("fontSize", currentFontPx, 365);
}
function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}
function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}
function fnt_set(size) {
   var p = document.getElementsByTagName('p');
   for(i=0;i<p.length;i++) {
      if(p[i].style.fontSize) {
         var s = parseInt(p[i].style.fontSize.replace("px",""));
      } else {
         var s = size;
      }
      p[i].style.fontSize = s+"px"
   }
   currentFontPx = s;
	changeTextById("Info1",size);
}
function fnt_is() {
   var p = document.getElementsByTagName('p');
   for(i=0;i<p.length;i++) {
      if(p[i].style.fontSize) {
         var s = parseInt(p[i].style.fontSize.replace("px",""));
      } else {
         var s = defaultFontSize;
      }
      if(s!=24) { // font maximum (largest) size
	s = s + (s * .3)
         // s += 2;
      }
      p[i].style.fontSize = s+"px"
   }
   currentFontPx = s;
	changeTextById("Info1",currentFontPx);
}
function fnt_ds() {
   var p = document.getElementsByTagName('p');
   for(i=0;i<p.length;i++) {
      if(p[i].style.fontSize) {
         var s = parseInt(p[i].style.fontSize.replace("px",""));
      } else {
         var s = defaultFontSize;
      }
      if(s!=8) { // font minimum (smallest) size = 8
	s = s - (s * .3)
         // s -= 2;
      }
      p[i].style.fontSize = s+"px"
   }   
   currentFontPx = s;
	changeTextById("Info1",currentFontPx);
}
function tm_fwd(){
	specOffHrs = specOffHrs + 1; // Eastward 1 hour
	display();
}
function tm_bwd(){
	specOffHrs = specOffHrs - 1; // Westward 1 hour
	display();
}
function changeTextById(elementId,changeVal){
var hasInnerText =
    (document.getElementsByTagName("body")[0].innerText != undefined) ? true : false;
    var elem = document.getElementById(elementId);
    if(!hasInnerText){
	elem.textContent = changeVal;
    }else{
	elem.innerText = changeVal;
    }
}
function display(){ // Fill display fields:
	changeTextById("city01",wm_d_hm('Beijing 北京',+8, +8,'cn',0,1) ); // &#21271;&#20140;&#24066;
//alert(document.getElementById('city01').rows[0].cells[0].firstChild.firstChild.nodeValue);
//	city01.title ="Peking";
//	city01.lang ="zh_CN";

//	changeTextById("city01",wm_d_hm('Taipei',+8,+8,'cn',0,1) ); // Taiwan 122
//	changeTextById("city01",wm_d_hm('Kuala Lumpur',+8,+8,'none',2,1) ); // Malaysia 122
// Singapore 
// Saskatchewan - no DST Canada
	changeTextById("city02",wm_d_hm('Perth',  +8, +9,'WST',0,1) ); // WST - Australian Western Standard Time (+8 UTC) in WA. DST 28/10/2007-30/3/2008
//	changeTextById("city03",wm_d_hm('Yakutsk',+9,+9,'ru',2,1) ); // Russia
//	changeTextById("city03",wm_d_hm('Seoul',+9,+9,'kr',2,1) ); // Korea
//	changeTextById("city03",wm_d_hm('Tokyo ???',+9,+9,'none',0,1) ); // Japan - no DST
	changeTextById("city03",wm_d_hm('Darwin',+9.5,+10.5,'au',0,1) ); // CST - Australian Central Standard Time (+9.5 UTC) in NT and SA 
		// http://en.wikipedia.org/wiki/Darwin,_Northern_Territory
	changeTextById("city04",wm_d_hm('Cairns', +9,+10,'au',0,1) ); // Queensland & Northern Territories do not observe summer time.
	changeTextById("city05",wm_d_hm('Sydney',+10,+11,'au',2,1) ); // EST - Australian Eastern Standard Time (+10 UTC) in Qld, NSW, Vic and Tas (Canberra, Brisbane)
//	changeTextById("city05",wm_d_hm('Vladivostok Владивосток',+10,+11,'ru',2,1) ); // Russia
//	changeTextById("city06",wm_d_hm('Magadan', +11, +11,'none',0,1) ); // 
	changeTextById("city06",wm_d_hm('Auckland',+12,+13,'nz',2,1) ); // New Zealand Wellington NZST Sun 2008-4-6 NZDT 2008-9-28
//	changeTextById("city06",wm_d_hm('Fiji', +12, +12,'none',0,1) ); // 
//	changeTextById("city07",wm_d_hm('Nuku'alofa, Tonga', +13, +13,'none',0,1) ); // Tonga
//	changeTextById("city07",wm_d_hm('Midway Island', -11, -11,'us',2,1) );
//	changeTextById("city07",wm_d_hm('Eniwetok', -12, -12,'??',2,1) );
//	changeTextById("city07",wm_d_hm('Hawaii', -10, -10,'us',2,1) );
//	changeTextById("city07",wm_d_hm('Alaska', -9, -9,'us',2,1) );
//	changeTextById("city07",wm_d_hm('Tijauna', -8, -7,'mx',2,1) ); // Mexico
// 1:- General: GMT-6
// Mexico's Baja California Sur, Chihuahua, Nayarit, Sonora, Sinaloa & use US Mountain Standard Time GMT-7
// Mexico's Baja California Norte Mexico's uses Pacific Standard Time GMT-8
//	changeTextById("city07",wm_d_hm('Sonora', -7, -7,'mx',2,1) ); // does not observe DST and stays at GMT-7.
	changeTextById("city07",wm_d_hm('San Francisco', -8, -7,'us',2,1) );
	changeTextById("city08",wm_d_hm('Phoenix',-7, -7,'us',0,1) );
	changeTextById("city09",wm_d_hm('Denver', -7, -6,'us',2,1) ); 
	changeTextById("city10",wm_d_hm('Chicago', -6, -5,'us',2,1) ); 
//	changeTextById("city10",wm_d_hm('New York', -5, -4,'us',2,1) ); 
	changeTextById("city11",wm_d_hm('Boston', -5, -4,'us',2,1) ); 
	changeTextById("city12",wm_d_hm('London', +0, +1,'eu',1,1) ); 
	changeTextById("city13",wm_d_hm('Geneva', +1, +2,'eu',2,1) ); // Switzerland CET & CEST
	changeTextById("city14",wm_d_hm('Bangalore', +5.5, +5.5,'none',0,0) );

	// Repeat forever:
	setTimeout("display()",60000) // 1000 = 1 second.
}
function wm_d_hm(location,std_offset,dst_offset,tz_type,tz_hour,tz_adjhrs){ // Display Hour Minutes 
	offset = wm_tzadj(std_offset,dst_offset,tz_type,tz_hour,tz_adjhrs);// Adj for time zone, Daylight Savings
	thans = new Date(); // Client Local time NOW 
	tmstamp = thans.getTime() // Client Local time from Jan 1, 1970 (1206712481385)
	tmstamp = tmstamp + ( offset 		* 3600000 )
	tmstamp = tmstamp + ( specOffHrs 	* 3600000 )
	thans.setTime(tmstamp); // store tmstamp in the time object.
	dateString = thans.toGMTString(); // dateString=>Fri,,15,Jul,2005,18:54:21,UTC
	arrDateStr = dateString.split(" ");
	wm_th=arrDateStr[4].substr(3,2);
/*
	if( wm_th <=  4){ city_color[city_id]="121212"; // grey (sleeping)
	}
	if( wm_th <=  4){ city_color[z]="121212"; // grey (sleeping)
	}else
	if( wm_th <=  8){ city_color[z]="CCFFFF"; // light blue (morning)
	}else
	if( wm_th <=  17){ city_color[z]="006400"; // dark green (work day 9-5)
	}else
	if( wm_th <=  20){ city_color[z]="FF9900"; // orange (sunset 6-8)
	}else
	if( wm_th <=  23){ city_color[z]="800000"; // dark maroon (night 9-11pm)
	}else{
    		        city_color[z]="121212"; // grey (sleeping)
	}
*/
	txt=twodigit(wm_12(arrDateStr[4].substr(0,2))) +":"+ arrDateStr[4].substr(3,2) +" "+ wm_ampm(arrDateStr[4].substr(0,2))
	return txt+" "+location
}
function wm_tzadj(std_offset,dst_offset,tz_type,tz_hour,tz_adjhrs){
	// List of DST dates worldwide at http://webexhibits.org/daylightsaving/g.html
	if( tz_type == "au" || tz_type == "WST" || tz_type == "nz" ){ // DST changed in 2007 
		// The Southern Hemisphere has DST opposite to the Northern hem.
		thans = new Date(); // Client Local time NOW 
		tmstamp = thans.getTime() // Client Local time from Jan 1, 1970 (1206712481385)

		offset = dst_offset; // Set default offset to Standard Time in middle of year
		adj=offset * 3600000
		thans.setTime(tmstamp+adj); // store tmstamp in the time object.
		rdnow=fixedfromgregorian( thans.getUTCFullYear(), (thans.getUTCMonth()+1), thans.getUTCDate() )
		// rdnow for 2008 March 29=733130
		gy=thans.getUTCFullYear()
		thans.setTime(tmstamp); // store tmstamp in the time object.

	     	if( std_offset == dst_offset ){	
			return offset;
		}else
	     	if( tz_type == "au" ){	
			// Per http://www.australia.gov.au/Time_Zones
			// And http://www.bom.gov.au/climate/averages/tables/daysavtm.shtml
			rd1=nthkday(1,0,gy,4,1)  // first Sunday of April 733138=2008-04-06
			rd2=nthkday(1,0,gy,10,1) // first Sunday of October 733320=2008-10-05
			if( rdnow >= rd1 && rdnow <= rd2 ){
				if( rdnow == rd1 ){
					gh = thans.getUTCHours();
					if( gh > tz_hour ){
						offset = std_offset;
					}
				}else
				if( rdnow == rd2 ){

					gh = thans.getUTCHours();
					if( gh <= tz_hour ){
						offset = std_offset;
					}
				}else{
						offset = std_offset;
				}
			}
	     	}else
	     	if( tz_type == "WST" ){	
			rd1=nthkday(-1,0,gy,3,31)  // last Sunday of March 2008-03-30=733131
			rd2=nthkday(-1,0,gy,10,31) // last Sunday of Octob 2008-10-26=733341
			if( rdnow >= rd1 && rdnow <= rd2 ){
				if( rdnow == rd1 ){
					gh = thans.getUTCHours();
					if( gh > tz_hour ){
						offset = std_offset;
					}
				}else
				if( rdnow == rd2 ){

					gh = thans.getUTCHours();
					if( gh <= tz_hour ){
						offset = std_offset;
					}
				}else{
						offset = std_offset;
				}
			}
	     	}else
	     	if( tz_type == "nz" ){	
			// Per http://www.timeanddate.com/worldclock/clockchange.html?n=264
			rd1=nthkday(1,0,gy,4,1)  //  1st Sunday of April 733138=2008-04-06
			rd2=nthkday(-1,0,gy,9,30) // last Sunday of Sep 2008-9-28 = 733320
			if( rdnow >= rd1 && rdnow <= rd2 ){
				if( rdnow == rd1 ){
					gh = thans.getUTCHours();
					if( gh > tz_hour ){
						offset = std_offset;
					}
				}else
				if( rdnow == rd2 ){

					gh = thans.getUTCHours();
					if( gh <= tz_hour ){
						offset = std_offset;
					}
				}else{
						offset = std_offset;
				}
			}
//		}else 
//		if( tz_type == "na" ){ // Namibia
//			rd1=nthkday(1,0,gy,9,1) //   lst Sunday of Sep.
//			rd2=nthkday(1,0,gy,4,1)  //  1st Sunday of Apr. 2008-04-06=
//		}else 
//		if( tz_type == "to" ){ // Tonga
//			rd1=nthkday(1,0,gy,11,1) //   lst Sunday of Nov. 2008-11-12=733348
//			rd2=nthkday(1,0,gy,1,1)   // last Sunday of Jan. 2009-01-04=733411
		}
	}else{	// Northern Hemisphere standard time default:
		thans = new Date(); // Client Local time NOW 
		tmstamp = thans.getTime() // Client Local time from Jan 1, 1970 (1206712481385)
		offset = std_offset; // Set default offset to Standard Time in middle of year
		adj=offset * 3600000
		thans.setTime(tmstamp+adj); // store tmstamp in the time object.
		rdnow=fixedfromgregorian( thans.getUTCFullYear(), (thans.getUTCMonth()+1), thans.getUTCDate() )
		// rdnow for 2008 March 29=733130
		gy=thans.getUTCFullYear()
		thans.setTime(tmstamp); // store tmstamp in the time object.

	     	if( std_offset == dst_offset ){	
			return offset;
		}else
	     	if( tz_type == "us" ){	
			rd1=nthkday(2,0,gy,3,1) // DST 2nd Sun. March 733110=2008-03-09
			rd2=nthkday(1,0,gy,11,1) // first Sun. Nov. 733348=2008-11-2
			if( rdnow >= rd1 && rdnow <= rd2 ){
				if( rdnow == rd1 ){
					gh = thans.getUTCHours();
					if( gh >= tz_hour ){
						offset = dst_offset
;
					}
				}else
				if( rdnow == rd2 ){

					gh = thans.getUTCHours();
					if( gh < tz_hour ){
						offset = dst_offset;
					}
				}else{
						offset = dst_offset;
				}
			}
//		}else 
//		if( tz_type == "mx" ){ // Mexico (Except Sonora) per http://www.timetemperature.com/tzmx/mexico_dst.shtml
//			rd1=nthkday(1,0,gy,4,1)   // first Sunday of April 2008-04-06=733138
//			rd2=nthkday(-1,0,gy,10,31) // last Sunday of Octob 2008-10-26=733341
//		}else 
//		if( tz_type == "py" ){ // Paraguay
//			rd1=nthkday(3,0,gy,10,1)   //  3rd Sunday of Oct. 2008-10-19=733334
//			rd2=nthkday(2,0,gy,3,1)    //  2nd Sunday of Mar. 2008-03-09=733110
//		}else 
//		if( tz_type == "fk" ){ // Falklands
//			rd1=nthkday(1,0,gy,4,1)   //   1st Sunday on/after Sep 8 ???
//			rd2=nthkday(-1,0,gy,10,31) //  1st Sunday on/after Apr 6 ???
//		}else 
//		if( tz_type == "ar" ){ // Argentina
//			rd1=nthkday(1,0,gy,4,1)   //  Sunday 2007-12-30 ???
//			rd2=nthkday(-1,0,gy,10,31) // 2008-March-16 http://uk.reuters.com/article/oilRpt/idUKN2734841120071227
//		}else 
//		if( tz_type == "hn" ){ // Honduras
//			rd1=nthkday(1,0,gy,4,1)   //  May 7  ???
//			rd2=nthkday(-1,0,gy,10,31) // August 31?
//		}else 
//		if( tz_type == "cu" ){ // Cuba
//			rd1=nthkday(1,0,gy,4,1)   //  April 1 ???
//			rd2=nthkday(-1,0,gy,10,31) // last Sunday of Octob 2008-10-26=733341
//		}else 
//		if( tz_type == "ni" ){ // Nicaragua
//			rd1=nthkday(1,0,gy,4,1)   //  April ?
//			rd2=nthkday(-1,0,gy,10,31) // Oct. (dates vary)
		}else 
		if( tz_type == "eu" ){ // Summer Time 2am on the last Sunday in March to 2am on the last Sunday in October
			// Includes Greenland
			rd1=nthkday(-1,0,gy,3,31) // Summer Time // last Sunday in March 733131=2008-03-30 
			rd2=nthkday(-1,0,gy,10,31) // last Sunday in October 733341=2008-10-28
			if( rdnow >= rd1 && rdnow <= rd2 ){
				if( rdnow == rd1 ){
					gh = thans.getUTCHours();
					if( gh >= tz_hour ){
						offset = dst_offset;
					}
				}else
				if( rdnow == rd2 ){

					gh = thans.getUTCHours();
					if( gh < tz_hour ){
						offset = dst_offset;
					}
				}else{
						offset = dst_offset;
				}
			}
//		}else 
//		if( tz_type == "gt" ){ // Guatemala
//			rd1=nthkday(-1,0,gy,4,30)  //  last Sunday of April 2008-04-27=733159
//			rd2=nthkday(-1,0,gy,10,31) //  last Sunday of Octob 2008-10-26=733341
//		}else 
//		if( tz_type == "eg" ){ // Egypt
//			rd1=nthkday(-1,4,gy,4,30)//  last Thursay of April 2008-04-24=733156
//			rd2=nthkday(-1,4,gy,9,30) // last Thursay of Sep. 2008-09-25=733310
//		}else 
//		if( tz_type == "jo" ){ // Jordan
//			rd1=nthkday(-1,4,gy,3,31)//  last Thursay of March 2008-03-27=733128
//			rd2=nthkday(-1,5,gy,9,30) // last Friday  of Sep. 2008-09-26=733311
//		}else 
//		if( tz_type == "tn" ){ // Tunisia
//			rd1=nthkday(-1,0,gy,3,31)  // last Sunday of March 2008-03-30=733131
//			rd2=nthkday(-1,0,gy,10,31) // last Sunday of Octob 2008-10-26=733341
//		}else 
//		if( tz_type == "lb" ){ // Lebanon, Kyrgyzstan
//			rd1=nthkday(-1,0,gy,3,31)  // last Sunday of March 2008-03-30=733131
//			rd2=nthkday(-1,0,gy,10,31) // last Sunday of Octob 2008-10-26=733341
		}else 
		if( tz_type == "ru" ){ // Russia
			rd1=nthkday(-1,0,gy,3,31)  // last Sunday of March 2008-03-30=733131
			rd2=nthkday(-1,0,gy,10,31) // last Sunday of Octob 2008-10-26=733341
//		}else 
//		if( tz_type == "iq" ){ // Iraq
//			rd1=nthkday(1,0,gy,4,1)   //  April 1
//			rd2=nthkday(-1,0,gy,10,31) // Octob 1
//		}else 
//		if( tz_type == "sy" ){ // Syria
//			rd1=nthkday(1,0,gy,4,1)   //  March 30
//			rd2=nthkday(-1,0,gy,10,31) // Sep 23
//		}else 
//		if( tz_type == "mn" ){ // Mongolia
//			rd1=nthkday(4,5,gy,3,1)   // 4th Friday in Mar. 2008-03-28=733129
//			rd2=nthkday(-1,5,gy,9,1) // Last Friday in Sep. 2008-09-26=733311
		}
	} // end northern hemisphere.

	return offset;
}
function wm_12(i){ // using glbal s_1224:
	if( s_1224 == "12"){
		if(i>12){ i=i-12;
		}else
		if(i==0){ i=12;
		}
		return i; 
	}else{ // "24"
		return i; 
	}
}
function wm_ampm(i)	{ 
	if( s_1224 == "12"){
		if(i<13){ ampm="am"; }else{ ampm="pm"; } return ampm; 
	}else{ // "24"
		return ""; 
	}
}
function wm_1224(){ 
	if( s_1224 == "12"){
		s_1224 == "24";
	}else{ // "24"
		s_1224 == "12";
	}
	display();
}
/* Several routines here are based on algorithms from: Calendrical Calculations The millennium edition, E.M. Reingold, N. Dershowitz,
     Cambridge University Press, 2001 www.calendarists.com
     Corrections from errata from the authors up to date 2004-05-03 */
gregorianepoch = 1; // rata die RD 1 = gregorian 1-1-1
julianepoch = -1; // Dec. 30 gregorian 0
dpm = new Array(0,31,28,31,30,31,30,31,31,30,31,30,31); // days per month non-leapyear

function floor(x) {  return Math.floor(x)}

// JavaScript % does not work correctly for negative numbers
function mod(x,y) {
  x=eval(x); y=eval(y);
  return x-y*floor(x/y)
}
function amod(x,y) { // Adjusted remainder function
  x=eval(x); y=eval(y);
  return y+mod(x,-y)
}

function format_hms(hms) { // Formats hms array to customary format hh:mm:ss.ssss...
  return twodigit(hms[0])+":"+twodigit(hms[1])+":"+hms[2]
}

function twodigit(dit) { // Input: integer; if length=1, then put 0 in front.
  if (String(dit).length==1) {return "0"+dit.toString();} else {return dit};
};

// IN: a number, possibly with 1 zero in front; OUT: zero stripped number
// Note: in JS a number starting with a 0 is an octal number!
function stripzero(n) {
  if (n.charAt(0)==0) {return eval(n.slice(1))} else {return eval(n)}
}

/* Problem: if 0 is entered, then problem in the general case; Here also?
If so, make use of:
function stripzero(n) {
  // Strips leading zeros from a number.
  // Return 0 if only one 0 remains
  // In JS a number starting with 0 is octal!
  n=String(n);
  while (n.charAt(0)==0) {n=n.slice(1); if (Number(n)==0) return 0};
  return n
}
*/

function gregorianleapyear(jaar) { // OUT: 1 if leapyear, 0 if not
  jaar = eval(jaar);
  if ( ((mod(jaar,4) == 0) && (mod(jaar,100) != 0)) 
      || (mod(jaar,400) == 0) )
    return 1;
  else
    return 0;
}
function fixedfromgregorian(jr,mnd,dg) { // IN: Gregorian year, month, day; OUT: RD number
  var fg;
  jr=eval(jr);mnd=eval(mnd);dg=eval(dg);
  if (mnd<=2) {
    a=0
  } else {
    if ((mnd>2) && (gregorianleapyear(jr))) {
      a=-1
    } else {
      a=-2
    }
  };
  fg = gregorianepoch -1 + 365*(jr-1) + floor((jr-1)/4) - floor((jr-1)/100)
        + floor((jr-1)/400) + floor((367*mnd-362)/12) + a + dg;
  return fg
}
function gregorianyearfromfixed(rd) { // IN: RD number; OUT: Gregorian year
  var d0,d1,d2,d3,n400,n100,n4,n1,gffyr;
  rd=eval(rd);
  d0 = rd-gregorianepoch;
  n400 = floor(d0/146097);
  d1 = mod(d0,146097);
  n100 = floor(d1/36524);
  d2 = mod(d1,36524);
  n4 = floor(d2/1461);
  d3 = mod(d2,1461);
  n1 = floor(d3/365);
  gffyr = 400*n400+100*n100+4*n4+n1;
  if ((n100==4) || (n1==4)) {return gffyr} else {return gffyr+1};
}
function gregorianfromfixed(rd) { // IN: RD number; OUT: Gregorian year, month, day as array
  var ggfy,ggfm,ggfd,priordays,corr;
  rd=eval(rd);
  ggfy = gregorianyearfromfixed(rd);
  priordays = rd-fixedfromgregorian(ggfy,1,1)
  if (rd<fixedfromgregorian(ggfy,3,1)) {
    corr=0
  } else {
    if ((rd>=fixedfromgregorian(ggfy,3,1)) && (gregorianleapyear(ggfy))) {
      corr=1
    } else {
      corr=2
    }
  };
  ggfm = floor((12*(priordays+corr)+373)/367);
  ggfd = rd-fixedfromgregorian(ggfy,ggfm,1)+1;
  var ggf = new Array(ggfy,ggfm,ggfd);
  return ggf
}
// IN: 2 Gregorian dates (year, month, day); OUT: difference in days
function gregoriandatedifference(gy1,gm1,gd1,gy2,gm2,gd2) {
  return fixedfromgregorian(gy2,gm2,gd2)-fixedfromgregorian(gy1,gm1,gd1)
}
// Computes the RD number of the n-th k-day (Sun=0, Mon=1...) on or after
// a given Gregorian date (year, month, day), counting backward if n<0
function nthkday(n,k,gy,gm,gd) {
  n=eval(n);
  if (n>0) {
    x= 7*n+kdaybefore(fixedfromgregorian(gy,gm,gd),k)
  } else {
    x= 7*n+kdayafter(fixedfromgregorian(gy,gm,gd),k)
  }
// alert("n="+n+" k="+k+" gy="+gy+" gm="+gm+" gd="+gd);
	return x
}

// IN: RD number, weekday (Sun=0, Mon=1...); out: k-th day of the week that falls
// in the 7-day period ending on RD;
// OUT: RD number
// The other functions speak for themselves.
function kdayonorbefore(rd,k) {
  eval(rd); eval(k);
  return rd-dayofweekfromfixed(rd-k)
}
function kdayonorafter(rd,k) {
  eval(rd); eval(k);
  return kdayonorbefore(rd+6,k)
}
function kdaynearest(rd,k) {
  eval(rd); eval(k);
  return kdayonorbefore(rd+3,k)
}
function kdaybefore(rd,k) {
  eval(rd); eval(k);
  return kdayonorbefore(rd-1,k)
}
function kdayafter(rd,k) {
  eval(rd); eval(k);
  return kdayonorbefore(rd+7,k)
}
// IN: RD number; OUT: day of the week - Sun=0, Mon=1, ... , Sat=6
function dayofweekfromfixed(rd) {
  return mod(rd,7)
}
  
// IN: array with year, month, day; OUT: year-month-day format
function formatdate(yar) {
  return yar[0]+"-"+twodigit(yar[1])+"-"+twodigit(yar[2])
}
function show( id ) { 
	document.getElementById('displaycities').style.display = 'none'; 
	document.getElementById('Person').style.display = 'none'; 
//	document.getElementById(id).style.display = 'block'; 
} 
function city_chg(){
	show('changecities'); 
//	displaycities
}
//-->
</script> 
<style>
* { padding:0; margin:0; }
body{ font-family: verdana, arial, helvetica, sans-serif;
	font-size: 0.6em;
	margin: 0px;
	padding: 0;
	text-align: left;}
a:link 	  {TEXT-DECORATION: none; }
a:visited {TEXT-DECORATION: none; }
a:hover   {TEXT-DECORATION: underline; COLOR: Red; }
a:active  {TEXT-DECORATION: none; }
img {border: 0;}
#Info1 {COLOR: Grey; font-size: 0.6em;}
#valid {COLOR: Grey; font-size: 0.6em;}
#container {left=margin: 20px;}

#iconmenu {position: relative; width: 155px; height: 21px; 
	background: url(http://merc.tv/img/icons/g_all.png) 0 0 no-repeat; }
#iconmenu ul {width: 155px; height: 21px; display: block; position: absolute; 
	background: url(http://merc.tv/img/icons/g_all.png) 0 0 no-repeat; 
	list-style: none;}
#iconmenu li {width: 155px; height: 21px; display: block; position: absolute; 
	background: url(http://merc.tv/img/icons/g_all.png) 0 0 no-repeat; 
	list-style: none;}
#iconmenu ul li { margin:0; clear:both; }
#iconmenu a {width: 155px; height: 21px; display: block; border: solid 1px #fff;}
#iconmenu a:hover {border: solid 1px #000;}
#iconmenu #panel1c {left: 0px;}
#iconmenu #panel2c {left: 22px; background-position: -21px 0;}
#iconmenu #panel3c {left: 44px; background-position: -43px 0;}
#iconmenu #panel4c {left: 66px; background-position: -65px 0;}
#iconmenu #panel5c {left: 88px; background-position: -87px 0;}
#iconmenu #panel6c {left: 110px; background-position: -109px 0;}
#iconmenu #panel7c {left: 132px; background-position: -131px 0;}
#iconmenu #panel1c a:hover {background: url(http://merc.tv/img/space.gif) -1px -2px no-repeat;}
#iconmenu #panel2c a:hover {background: url(http://merc.tv/img/space.gif) -44px -2px no-repeat;}
#iconmenu #panel3c a:hover {background: url(http://merc.tv/img/space.gif) -44px -2px no-repeat;}
#iconmenu #panel4c a:hover {background: url(http://merc.tv/img/space.gif) -66px -2px no-repeat;}
#iconmenu #panel5c a:hover {background: url(http://merc.tv/img/space.gif) -88px -2px no-repeat;}
#iconmenu #panel6c a:hover {background: url(http://merc.tv/img/space.gif) -110px -2px no-repeat;}
#iconmenu #panel7c a:hover {background: url(http://merc.tv/img/space.gif) -132px -2px no-repeat;}
#displaycities {margin-left: 8px;}
#bottomad {margin-top: 8px; margin-left: 8px;}
</style>
</head>
<body onload="javascript:init();"><div id="container"><div class="toolbar">
<ul id="iconmenu">
<li id="panel1c"><a href="javascript:wm_1224();" title="Toggle 12/24"></a></li>
<li id="panel2c"><a accesskey="W" href="javascript:init();" title="Current Time"></a></li>
<li id="panel3c"><a accesskey="B" href="javascript:tm_bwd();" title="Behind Westward"></a></li>
<li id="panel4c"><a accesskey="F" href="javascript:tm_fwd();" title="Advance Eastward"></a></li>
<li id="panel5c"><a accesskey="R" href="javascript:fnt_ds();" title="Smaller Font"></a></li>
<li id="panel6c"><a accesskey="E" href="javascript:fnt_is();" title="Larger Font"></a></li>
<li id="panel6c"><a href="javascript:moveTo(0,0);window.resizeTo(309,460);" title="Resize screen small"></a></li>
<!-- a href="javascript:city_chg();"><img alt="change cities" src="http://merc.tv/img/icons/g_delta.gif" /></a -->
</ul>
<span id="Info1"></span>
</div><!-- toolbar -->
<div id="displaycities"><p>
<a title="Click for Weather in Beijing" target="_blank" 
href="http://www.timeanddate.com/weather/china/beijing">
<span id="city01"></span></a><span id="citi01"></span></a><br />

<a title="Click for Weather in Perth" target="_blank" 
href="http://www.timeanddate.com/weather/australia/perth">
<span id="city02"></span></a><span id="citi02"></span></a><br />

<a title="Click for Weather in Darwin" target="_blank" 
href="http://www.timeanddate.com/weather/australia/darwin">
<span id="city03"></span></a><span id="citi03"></span></a><br />

<a title="Click for Weather in Cairns" target="_blank" 
href="http://www.timeanddate.com/weather/australia/cairns">
<span id="city04"></span></a><span id="citi04"></span></a><br />

<a title="Click for Weather in Sydney" target="_blank" 
href="http://www.timeanddate.com/weather/australia/sydney">
<span id="city05"></span></a><span id="citi05"></span></a><br />

<a title="Click for Weather in Wellington" target="_blank" 
href="http://www.timeanddate.com/weather/new-zealand/wellington">
<span id="city06"></span></a><span id="citi06"></span></a><br />

<a title="Click for Weather in San Francisco" target="_blank" 
href="http://www.timeanddate.com/weather/usa/sanfrancisco">
<span id="city07"></span></a><span id="citi07"></span></a><br />

<a title="Click for Weather in Phoenix" target="_blank" 
href="http://www.timeanddate.com/weather/usa/phoenix">
<span id="city08"></span></a><span id="citi08"></span></a><br />

<a title="Click for Weather in Denver" target="_blank" 
href="http://www.timeanddate.com/weather/usa/denver">
<span id="city09"></span></a><span id="citi09"></span></a><br />

<a title="Click for Weather in Chicago" target="_blank" 
href="http://www.timeanddate.com/weather/usa/chicago">
<span id="city10"></span></a><span id="citi10"></span></a><br />

<a title="Click for Weather in Boston" target="_blank" 
href="http://www.timeanddate.com/weather/usa/boston">
<span id="city11"></span></a><span id="citi11"></span></a><br />

<!--
<script type="text/javascript">
document.write(twodigit(wm_12(thans.getUTCHours())) +":"+ twodigit(thans.getUTCMinutes()) +" "+ wm_ampm(thans.getUTCHours()) +" UTC "+thans.getUTCFullYear()+"-"+(thans.getUTCMonth()+1)+"-"+thans.getUTCDate())
</script> 
<br />
-->
<a title="Click for Weather in London" target="_blank" 
href="http://www.timeanddate.com/weather/uk/london">
<span id="city12"></span></a><span id="citi12"></span></a><br />

<a title="GMT +1, GMT +0 during Summer Time 2am on the last Sunday in March to 2am on the last Sunday in October" target="_blank" 
href="http://www.timeanddate.com/weather/switzerland/geneva">
<span id="city13"></span></a><span id="citi13"></span></a><br />

<a title="GMT +5.5, no Daylight Savings in Bangalore" target="_blank" 
href="http://www.timeanddate.com/weather/india/bangalore">
<span id="city14"></span></a><span id="citi14"></span></a><br />

</p>
</div><!-- displaycities -->
<div id="changecities" class="hidden"><span class="topic"> 
</span></div>
<div id="bottomad"><script type="text/javascript"><!--
google_ad_client = "pub-1513434032794226";
google_alternate_ad_url = "http://www.wilsonmar.com/altad.htm";
google_ad_width = 234;
google_ad_height = 60;
google_ad_format = "234x60_as";
google_ad_type = "text";
google_ad_channel ="1658624351";
//--></script>
<script type="text/javascript"
  src="http://pagead2.googlesyndication.com/pagead/show_ads.js">
</script></div>
</div><!-- container -->
</body></html>