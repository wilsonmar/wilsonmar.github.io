---
layout: post
date: "2025-07-26"
lastchange: "v035 + flow text :2023-04-03-weather-info.md"
url: "https://wilsonmar.github.io/weather-info"
file: "weather-info"
title: "Weather information"
excerpt: "How to capture weather-related readings and display those metrics for your microclimate."
tags: [weather, observability,rcloud]
image:
  feature: https://res.cloudinary.com/dcajqrroq/image/upload/v1742185185/weather-ws-5000-891x527_z7ypgc.png
  credit: AmbientWeather.com
  creditlink: https://res.cloudinary.com/dcajqrroq/image/upload/v1742185185/weather-ws-5000-891x527_z7ypgc.png
comments: true
created: "2023-04-03"
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1753578028/weather-info-flow-2386x826_yxiras.png"><img alt="weather-info-flow-2386x826.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1753578028/weather-info-flow-2386x826_yxiras.png" /></a>

When a local weather station is installed, it needs <strong>primary and backup power</strong> and additional collector devices such as measurement of solar radiation.
Ambient Weather devices have channels 1-8 to which Arduino or Raspberry Pi DIY can be added locally. <strong>MAC</strong> addresses are used to <strong>configure</strong> internet
to the Ambient Weather Network service which displays a website.
There is also local <strong>dashboard</strong> from a Home Assistant server.
In a similar way, external websites display what Inductive Ignition, Palantir, and other enterprise-scale systems which send out a wide set of <strong>alerts</strong> based on <strong>forecasting</strong> algorithms.


## Measurements and Instruments

This display above is from the <a target="_blank" href="https://ambientweather.com/support/ws-5000-weather-station-support/">Ambient Weather WS-5000 series</a> after <a target="_blank" href="https://www.youtube.com/watch?v=wyFh8edFZiA" title="VIDEO">installation/configuration</a>:

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1753454155/ambient-weather-481x271_rrnlzt.png"><img alt="weather-481x271.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1753454155/ambient-weather-481x271_rrnlzt.png" /></a>

(-) and (+) adjust values: <a target="_blank" href="https://ambientweather.com/glossary.html">Glossary</a><br />
<table border="1" cellpadding="4" cellspacing="0"><tr valign="top"><td>(-)<br />Minus<br />Brightness </td><td>(+)<br />Plus<br />Brightness<br />Adjust </td><td> Backlight<br />On/Off<br />toggle </td><td> Background<br />On/Off<br />toggle </td><td> Pressure<br />Absolute<br />/Relative<br />toggle </td><td> Channel </td><td> History </td><td> Set<br />Mode </td></tr></table>

1. The icon is the <a target="_blank" href="https://ambientweather.net/dashboard/df920bc15d3b38069de0ddc5cc34b374">AmbientWeather.net dashboard for a sample location</a>. (<a target="_blank" href="https://ambientweather.com/support/ws-5000-weather-station-support/">FAQ</a>)
2. Wi-Fi signal strength icon. An exclamation point ! indicates the display is connected to Wi-Fi but not the Internet.

3. Outdoor Sensor Array Low Battery Indicator 
4. Outdoor Sensor Array Signal Quality 

5. Outdoor Temperature (shown with the larger ring) is measured in Centigrade or Fereinheght by therometers. Above and below the current temp. in large numbers in the middle is the high of the day on top and low temp. of the day on the bottom.   The time of day when that's recalculated can be set in Settings.

6. <strong>Humidity</strong> is the <strong>percentage</strong> of water vapor in the air divided by the <a href="#dewpoint">Dew Point</a>.

   A manual psychrometer (aka "sling psychrometer") uses two thermometers. One has a wet wick around the bulb. The thermometer with the wet wick becomes cooler when water evaporates. The temperature difference on the two thermometers provides the Dew Point.

   Manual hygrometers use a polished mirror. As air within the hygrometer is cooled to the dew point, moisture forms on the mirror, which blocks some of the reflected light, indicating that the dew point temperature has been reached.

7. Wind: 
   * Wind direction (blue arrow) is measured in compass degrees by wind vanes (looks like an airplane)
   * Wind speed and Gust in mph is measured by anemometers within 10-minute average wind direction (larger gray arrow).
   * Old anemometers have spinning cups
   * New anemometers have ultrasonic technology that has no moving parts.

8. Leak detector status (channels 1-4, if installed) 
9. Soil moisture, leaf wetness CH4 (Channel 4 among channels 1-8 for each of 8 WH31 Temp/Humidity remote sensors that can be added.
10. Current date and time 
11. Lighting detector last strike, last strike time and strikes per hour (if installed).
12. Indoor, Channel 1-8 humidity 
13. Indoor, Channel 1-8 temperature from <a target="_blank" href="#ambient-weather-instruments">additional instruments</a> such as Ambient Weather's WH31PF Wireless Waterproof Floating Pool and Spa Thermometer
14. CH (Channel) scroll mode indicator 
15. CH7 Channel 7 indicator
16. Rain icon: maximum is 1.4 inch. 
   * "Rate", daily, hourly, weekly, monthly and yearly rain inches
17. Forecast icon based on rate of change of pressure
18. <a name="Pressure"></a>"Barometer Reading": <a target="_blank" href="https://blog.mensor.com/blog/adjusting-barometric-pressure-readings-for-aviation-and-meteorology">BLOG</a>: Atmospheric pressure is also called Barometric pressure because it's measured by <a target="_blank" href="https://cumulus.hosiene.co.uk/viewtopic.php?t=8286">legacy</a> barometers that measure the compression of mercury due to the weight of air above a square inch. The <strong>absolute</strong> pressue measured at Mean Sea Level (MSL) is 14.696 PSI (pounds per square) inch of mercury (due to gravity). That's a constant <strong>1013.25 hPa (hectoPascals)</strong> aka "millibars", also designated as "1 ATM" by the International Standard Atmosphere (ISA) standard. That's the equivalent of <strong>29.92 inHg</strong> (inches of mercury, symbol Hg).

    <a target="_blank" href="https://en.wikipedia.org/wiki/Atmospheric_pressure">Wikipedia</a> notes that the highest sea-level pressure on Earth occurs in Siberia, where record highs are 1,085 hPa (15.74 psi; 32.0 inHg). The lowest measurable sea-level pressure is found at the centres of tropical cyclones and tornadoes, with a record low of 870 hPa (12.6 psi; 26 inHg). The lowest place on Earth, the Dead Sea at 430 metres (1,410 ft) below sea level, has a typical atmospheric pressure of 1,065 hPa. 
    
    <a target="_blank" href="https://crondallweather.co.uk/understanding-the-basics-relative-air-pressure-vs-absolute-air-pressure/">CALCULATOR</a>: Temperature and humidity also affect the density of the air, which in turn affects atmospheric pressure. Pressure is proportional to temperature and inversely related to humidity, and both of these are necessary to compute an accurate figure.

    <strong>Relative (REL)</strong> pressure readings decrease as you gain altitude AND as heavier clouds move away. To differentiate between altitude and weather impact, weather reports of locations are normalized relative to <strong>sea level</strong>. In the US, three digits are all that are transmitted: decimal points and the one or two most significant digits are omitted: 1,013.2 hPa (14.695 psi) is transmitted as 132; 1,000 hPa (100 kPa) is transmitted as 000; 998.7 hPa is transmitted as 987; etc. 

    REMEMBER: A system transmitting the last three digits transmits the same code (800) for 1080.0 hPa as for 980.0 hPa.

    In technical terms, "Atmospheric pressure is thus proportional to the weight per unit area of the atmospheric mass above that location." 

    BTW The weight of a column of freshwater of approximately 10.3 m (33.8 ft) is also "one atmosphere" (101.325 kPa or 14.7 psi). Thus, a diver 10.3 m under water experiences a pressure of about 2 atmospheres (1 atm of air plus 1 atm of water). Conversely, 10.3 m is the maximum height to which water can be raised using suction under standard atmospheric conditions.

19. "Max Daily Gust" of wind in MPH.
20. Moon Phase
21. "10 MinAvg" (10-minute average) wind speed and compass direction

    <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1727494071/compass-800x800_hvwmtu.webp"><img width="300" alt="compass-800x800_hvwmtu.webp" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1727494071/compass-800x800_hvwmtu.webp" /></a>

22. "UV Index" (Ultraviolet Index) is measured by a UV meter (if installed).

23. Under arc: am: Sunrise, pm: sunset. On the website is this tile:

    <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1742678815/weather-amb-web-sun-moon-540x572_ep3qfa.png"><img alt="weather-amb-web-sun-moon-540x572.png" width="300" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1742678815/weather-amb-web-sun-moon-540x572_ep3qfa.png" />

    FUN FACT: About 5 minutes is lost or gained each day.

24. <a target="_blank" href="https://ambientweather.com/solarradiation.html">Solar Radiation</a>, measured in <strong>W/m^2</super> (Watts per square meter), aka Lux or FC (Foot Candles) by <a target="_blank" href="https://www.amazon.com/s?k=pyranometers">pyranometers</a> that have a dome-shaped sensor that can be seen from all angles, resembling a "UFO saucer". 

    The measurement is used to calculate evapotranspiration - the potential for evaporation of moisture from the soil (or the reverse of rainfall) as a function of solar energy, wind, and temperature.

    <a target="_blank" href="https://power.larc.nasa.gov/data-access-viewer/">https://power.larc.nasa.gov/data-access-viewer</a>

    Solar Radiation is not displayed by default on Ambient Weather's website.
    <a target="_blank" href="https://www.perplexity.ai/search/how-to-obtain-stats-from-ambie-iIsLm3BkSZOA.UUU0RQ.4g#0">Can it be obtained from API</a>?

    Historically, sunshine intensity is measured thru direct solar radiation using <strong>pyrheliometers</strong> which have a tubular structure that needs to be aimed at the sun, mounted on a <strong>solar tracker</strong>. 
    BTW Before electronic photoelectric sensors are used by computers, the Campbell-Stokes and Jordan Sunshine Recorders (in the UK) used a glass sphere to focus sunlight onto a recording card replaced each day, creating burn marks that indicate the duration of sunshine that day.     

25. "IN "(Indoor) air quality in ug/m3 by a PM2.5 sensor (if installed)
26. "OUT" (Outdoor) Particulate monitor in ug/m3 by a PM2.5 sensor (if installed)

27. <a name="dewpoint"></a><strong>Dewpoint</strong> is calculated for measuring the comfort level from moisture in the air. A Simplified version of the <a href="https://en.wikipedia.org/wiki/Magnus-Tetens_equation">Magnus-Tetens Formula</a> is:

    AirTemp - ( ( 100 − RelHumidity ) / 5 )

    <a target="_blank" href="https://www.weather.gov/arx/why_dewpoint_vs_humidity">According to NOAA</a> at <a target="_blank" href="https://weather.gov">weather.gov</a>:

    At 45 degrees or below, air feels "refreshing".<br />
    At 50, it's "comfortable". At 55, it's "not bad".<br />
    At 60, it's "muggy". At 65 it's "Very Humid". At 70 it's "tropical". 

    Technically, Dew Point is the <strong>temperature</strong> to which air must be cooled (at constant pressure) in order for it to become saturated (have 100% relative humidity). Dewpoint is the maximum amount of water vapor air can hold at a given temperature. When air cools to its dew point, it reaches 100% relative humidity, and any further cooling causes water vapor to condense into droplets, forming dew or fog.

    In <a target="_blank" href="https://ambientweather.com/dewpoint.html">other words</a>, "The dew point is the temperature at which a given parcel of humid air must be cooled, at constant barometric pressure, for water vapor to condense into water. The condensed water is called dew. The dew point is a saturation temperature."

    For example, if the temperature is 80 and the dew point 70, the relative humidity is 72%. Much more water is in the air at 100% humidity at a temperature of 70 degrees than at 30 degrees. 

28. "Feels Like" will always be cooler than the air temperature because it is calculated based on the impact of wind speed (Wind Chill Factor in cold temperatures) or humidity (Heat Index in hot temperatures) on human skin. high humidity can intensify the sensation of cold by increasing heat loss from your body. Likewise, a cloudy sky prevents sunlight from providing even slight warmth, making the chill feel even sharper. <a target="_blank" href="https://www.weatherandradar.com/discover-the-app/understanding-the-feels-like-temperature-weather-and-radars-sophisticated-cold-measurement-tool--8ef4d0b3-5ae4-4e40-ad4c-ff233488a488">PROTIP</a>: On cold windy days, wear "wind-proof" coats instead of woven sweaters because wind whisks away the thin layer of warm air your body creates to stay cozy, leaving you feeling the full bite of winter's chill.

29. The <strong>lightning icon</strong> appears when when conditions make it possible for lightning storms to form in the area. The dew point is the temperature at which air becomes saturated with moisture at a given pressure, leading to the formation of dew, fog, or frost. <a target="_blank" href="https://www.cbsnews.com/boston/news/what-is-dew-point-humidity-sticky-weather/">BLOG</a>
30. Daily Rain Icon: Rainfall is measured by rain gauges. Modern ones use ultrasonic technology that has less moving parts.

* Tide levels?
* Soil moisture is measured by soil moisture sensors (if installed).

<!-- This is from the Ambient Weather WS-5000 series:<br />
<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1742181715/weather-ws-5000-dash_bjmwjh.png"><img alt="weather-ws-5000-dash.png" width="546" height="390" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1742181715/weather-ws-5000-dash_bjmwjh.png" /></a>
-->

## Maps of Neighborhood Variation

This map of temperatue around a location shows the extent of variation among microclimates within just a mile or two
-- generated by <a target="_blank" href="https://ambientweather.net/dashboard/df920bc15d3b38069de0ddc5cc34b374">AmbientWeather.net</a>

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1742904058/weather-neighbors-890x618_swk59c.png"><img alt="weather-neighbors-890x618.png" width="300" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1742904058/weather-neighbors-890x618_swk59c.png" /></a>

Comparison vs. other weather stations (upwind, downwind, etc.).


## Trends Over Time

This <a target="_blank" href="https://www.weatherbriefing.com/weather-blog/2020/7/5/a-teaching-tool-relationship-between-temperature-relative-humidity-and-dew-point">meteograph</a> shows the relationship of changes among several metrics over time:

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1742712550/weather-dew-temp-1019x312_zsq8kp.jpg"><img alt="weather-dew-temp-1019x312.jpg" width="1019" height="312" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1742712550/weather-dew-temp-1019x312_zsq8kp.jpg" /></a>

The temperature (brown line) warms up (by the sun) during the day. 
Temperature cools down at night. 

As air cools, humidity (purple line) rises to condensate as morning fog or clouds.

Condensation is likely to occur when the air temperature reaches the <a href="#dewpoint">Dew point</a> (green line) rises to the temperature when air becomes saturated with moisture (at a given pressure).
That's when rain and snow occurs.

But remember that temperature (brown line) and dew point (in green) change independently of each other. Each can change without affecting the value of the other.

To see metrics over time with multiple metrics overlaid together, click "Graphs & Tables" on the <a target="_blank" href="https://ambientweather.net/dashboard/df920bc15d3b38069de0ddc5cc34b374">AmbientWeather.net dashboard for a sample location</a>: 

* Outdoor temperature, Dew Point, Feels like
* Wind Speed with Wind Gusts overlaid
* Wind direction (toward the direction of the wind
* Daily Rain with Rain Rate
* Relative Pressure: An upward trend indicates a high pressure system moving in with clear skies, while a downward trend indicates a low pressure sucking in bad weather.
* Humidity
* Sun Height (in yellow line) and Moon Height (in white line)

  The highest point is not exactly Noon. 

* Air quality with Particulate matter overlaid
* Rain with Snow overlaid
* UV Index with Solar Radiation overlaid

<a target="_blank" href="https://ambientweather.com/awn-plus-annual-subscription">AWN+ subscription</a> unlocks premium features like advanced map layers, degree day tiles, enhanced graphing, text alerts, and a 10-Day Hourly Forecast

<a target="_blank" href="https://www.home-assistant.io/integrations/ambient_station/">Home Assistant</a> integration.
for smart Home display trends.

<a target="_blank" href="https://d3js.org/">d3.js</a> is a JavaScript library for producing dynamic, interactive data visualizations in web browsers. <a target="_blank" href="https://learning.oreilly.com/videos/-/10000MNHV2021133/">VIDEO</a>

Upwind locations on the map would experience weather patterns (such as rain) before you (n=in a downwind location).


## Internet Weather Reports

* Ambient Weather has its own cloud (AWN) Network to receive weather reports for its devices.
   * https://ambientweather.com/mwdownloads/download/link/id/1223

* WeatherUnderground.com also accepts video from Ambient Weather AirCams.

* WeatherBug.com (USA)
* pwsweather.com (USA) Weather For You
* windfinder.com (USA)
* wxqa.com (Citizens Weather Observation Program) USA
* openweathermap.org USA

* wow.metoffice.gov.uk
* awekas.at (Austria)


## Python Program Code

I wrote a Python program to retrieve and format weather info from an API calls to openweather.com.

The program makes use of external modules, so can't be run within ProgramWiz.

So run my program within Google's Colab like the pros:

1. Open a Terminal app.
1. Bring the <tt>openweather.py</tt> file to the Terminal.

   Type an exclamation point character in front of each Bash CLI command such as git.

   In Google CoLab???

1. To copy a file from your Google Drive:
   ```
   !cp /content/drive/My\ Drive/Importing\ Scripts\ as\ Modules/utils.py /content
   ```
   Alternately, you can manually select the file using:
   ```
   files.upload()
   ```
1. Set permissions:
   ```
   chmod +x openweather.py
   ```
1. Set .env file containing the API keys
   ???
1. Because T-Mobile does not correctly identify your physical location, provide your US Zip Code when requesting the weather there:

   <a target="_blank" href="https://github.com/wilsonmar/python-samples/blob/main/openweather.py">openweather.py</a> program:
   
1. Execute the program:
   ```
   !./openweather.py -z 59041
   ```
   The weather service converts your Zip Code to a latitude and longitude:
   ```
openweather.org
id: 5661766    at: 06:29 PM (18:29:44) 2025-04-01 TZ: -21600
          Sunrise: 06:55 AM (06:55:20) 2025-04-01 local time
           Sunset: 07:43 PM (19:43:30) 2025-04-01
overcast clouds at Laurel , country=US "lat=45.4959619&lon=-108.9589351"
     Latitude:  45.4959619° North of the Equator &
     Longitude: -108.9589351° East of the Meridian at Greenwich, UK
comfortable Dew Point of 25.78°F vs. 45.91°F at 45% humidity
     Feels like 39.42°F from Wind: 22.01 mph from NNW (313°)
     Visibility to 10000 meters
low -16 pressure at 997 hPa (HectoPascals = 9.97 millibars)
          vs. normal 1013.25 hPa at sea level
                     866    hPa at ground level
   ```

<a target="_blank" href="https://www.youtube.com/shorts/QjTfk1OFCtk">VIDEO</a>:
Readings from outlying weather stations are combined to provide a more accurate reading.
During WWII, the Allies used stations in Iceland, and Ireland to forcast the weather for the Normandie Invasion on June 6, 1944.


<a name="latlong"></a>

## Latitudes & Longitudes

A latitude and longitude make use of the <a target="_blank" href="https://en.wikipedia.org/wiki/Web_Mercator_projection">Web Mercator Projection</a> (EPSG:3857) which display spherical forms because it is much simpler to calculate than <a target="_blank" href="https://en.wikipedia.org/wiki/World_Geodetic_System#WGS_84">WGS 84</a> degrees (EPSG:4326) ellipsoidal datum. Land near the poles, such as Greenland, are distorted and appear larger than <a target="_blank" href="https://youtube.com/shorts/DjhZuN0woDY?si=TR7kQ-593O_4omVm">VIDEO: when moved to the equator for actual size</a>. Google Maps, which uses it since 2005, cut off coverage at 85.051129° north and south.  But the United States Department of Defense through the National Geospatial-Intelligence Agency has declared to be unacceptable for any official use.

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1744354495/weather-greenland-proj-470x289_smuctb.png"><img alt="weather-greenland-proj-470x289.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1744354495/weather-greenland-proj-470x289_smuctb.png" /></a>


<a name="instrument-tech"></a>

## Instrument Technologies

There are several technologies to measure your weather:

* Build your own weather station on a Raspberry Pi, ESP32, etc.

Instrument manufacturers:
* <a target="_blank" href="https://www.acurite.com/">AcuRite</a> "fell apart after a year" 
   * <a target="_blank" href="https://www.youtube.com/watch?v=7cxNahFvGVU">VIDEO</a>
* Ambient Weather
* Davis Instruments
* https://www.scientificsales.com/6252-Davis-Wireless-Vantage-Pro2-Weather-Station-p/6252.htm
* $339 <a target="_blank" href="https://shop.tempest.earth/products/tempest">Tempest</a> <a target="_blank" href="https://tempestwx.com/map/40.7127/-74.0059/8">MAP</a>

* The <a target="_blank" href="https://www.amazon.com/Ambient-Weather-WEATHERBRIDGE-Universal-Compatible/dp/B00FPPYM7M?ref_=ast_sto_dp">$159.50</a> <a target="_blank" href="https://www.ambientweather.com/weather-bridge">Ambient Weather Bridge</a> updates (without the use of a PC or networking fees) weather servers real-time to Twitter,  MySQL, EMail Summaries and Alerts, and aircams. See http://www.meteobridge.com/wiki/index.php/Push_Services

Several locally-run servers receive and display weather information:
   * The Ignition server
   * "Home Assistant"



## Ambient Weather Instruments

Ambient Weather is a company that provides weather stations and data for consumer use.

* <a target="_blank" href="https://www.amazon.com/dp/B087V6N5WZ/">$449.99</a> WS-5000 series has WiFi and no moving parts and a TFT color display <a target="_blank" href="https://ambientweather.com/mwdownloads/download/link/id/1081">manual</a> <a target="_blank" href="https://www.youtube.com/watch?v=b8oQCBA6Tio">VIDEO</a> <a target="_blank" href="https://www.youtube.com/watch?v=I560_a3yPmE">User Observations</a>
* $299.99 WS-2000 has WiFi & display
* $144.99 WS-1965 is a entry-level monitor has moving parts.

Other Ambient Weather devices sold separately, with <a target="_blank" href="https://ambientweather.com/manuals.html">manuals online</a>:

* <a target="_blank" href="https://www.amazon.com/Ambient-Weather-ObserverIP-Stations-separately/dp/B00XNMN2GG/">$77.99</a> 
<a target="_blank" href="https://ambientweather.com/mwdownloads/download/link/id/1081">Network WeatherHub</a> to set up alerts, access your data remotely, and program your home based on weather conditions using IFTTT, Google Home, Alexa, and more. <a target="_blank" href="https://ambientweather.com/mwdownloads/download/link/id/1192">manual</a> http://www.meteobridge.com/ using HTUhttps://angryip.org/download/ 

* PM25 Particulate Monitor <a target="_blank" href="https://ambientweather.com/mwdownloads/download/link/id/1095">manual</a>
* PM25IN Indoor Particulate Monitor <a target="_blank" href="https://ambientweather.com/mwdownloads/download/link/id/1096">manual</a>
* AQIN Air Quality Monitor <a target="_blank" href="https://ambientweather.com/mwdownloads/download/link/id/1097">manual</a>

* WH3ILA Leak Detector <a target="_blank" href="https://ambientweather.com/mwdownloads/download/link/id/1098">manual</a>
* WH3ILC Infrared Motion Detector <a target="_blank" href="https://ambientweather.com/mwdownloads/download/link/id/1099">manual</a>
* WH3ILM Lightning Detector <a target="_blank" href="https://ambientweather.com/mwdownloads/download/link/id/1100">manual</a>
* WH315M Soil Monitor Sensor (part of garden bundle) <a target="_blank" href="https://ambientweather.com/mwdownloads/download/link/id/1101">manual</a>
* Pool <a target="_blank" href="https://ambientweather.com/mwdownloads/download/link/id/1102">manual</a>
* AirCam camera for feeding weather websites <a target="_blank" href="https://ambientweather.com/mwdownloads/download/link/id/1103">manual</a>

## Weather on Roads in Each State

https://www.511mt.net/#&zoom=5.669649843806675&lon=-110.0832903124836&lat=45.86084166111809


<a name="DIY"></a>

## DIY Weather Stations

Others made their own weather stations using Raspberry Pi and other components that include sensors like wind, rainfall, UV Index, Lux Level. 

<a target="_blank" href="https://www.instructables.com/Solar-Powered-WiFi-Weather-Station-V20/">VIDEO:Solar-Powered WiFi Weather Station V20</a> follows the <a target="_blank" href="https://amzn.to/3UMpT9N">Book: on Off-Grid Solar Power from Amazon</a> by Debasish Dutta at @opengreenenergy. Features:
   1. Monitoring Weather parameters like Temperature, Pressure, Humidity, altitude and UV level, etc.
   2. Connect to Wi-Fi, and upload the data to the web ( Blynk App and Thingspeak)
   3. Extra ports to add more sensors
   4. Remote Battery Status Monitoring
   5. Uses a powerful Li-Ion Battery ( 3400 mAh ) and Solar Panel (1W) for independence from external power source

Customers also bought books by
* <a target="_blank" href="https://www.amazon.com/stores/Paul-Holmes/author/B0CN1JF8M4">Paul Holmes: Off-grid solar power</a>
* <a target="_blank" href="https://www.amazon.com/stores/Nick-Seghers/author/B0844W9SJK">Nick Seghers</a>
<a target="_blank" href="https://www.amazon.com/Off-Grid-Solar-Power-Simplified-ebook/dp/B0844TX6ND">Off Grid Solar Power Simplified: For Rvs, Vans, Cabins, Boats and Tiny Homes</a>
* <a target="_blank" href="https://www.amazon.com/Grid-Solar-Power-Bible-Blackout-Free-ebook/dp/B0C3RWGZTZ">Caleb Stone</a> The Off Grid Solar Power Bible: [7 in 1] Easy Illustrated DIY Guide + VIDEO COURSE to Safely Install and Maintain your Own Blackout-Free System. Go from Zero Know-How to Zero Electricity Bills.

## Cameras

https://www.youtube.com/live/8E84ogCRg8Y&t=1m
OpenMV cameras meetup 

## Weather Prediction

NVIDIA provides a free 3-hour beginner tutorial: <a target="_blank" href="https://learn.nvidia.com/courses/course-detail?course_id=course-v1:DLI+S-FX-31+V1">"Applying AI Weather Models with NVIDIA Earth-2"</a>
to explore state-of-the-art FourCastNet AI weather prediction models and learn how to integrate them into custom workflows.

Weather forecasts suffer from two main sources of uncertainty
   * Measurement uncertainty: Observations are sparse and noisy
   * Model uncertainty: Models are not an exact representation of reality

This uncertainty is modeled through multiple forecast runs
Start from slightly perturbed initial conditions
<a target="_blank" href="https://www.arxiv.org/abs/2408.03100">Ensembles</a> of several models allow making probabilistic statements about the future.

In contrast to deterministic forecasts, probabilistic forecasts attempt to model the uncertainty of the future. For weather forecasting, we are facing two main sources of uncertainty. The first one is measurement uncertainty. Weather observations come from weather stations, balloons, buoys, satellites, radar stations, and so on. But these measurements are sparse and not perfect, which introduces uncertainties. The second source of uncertainty are our models, which are not a perfect representation of the physical processes. This is true for both AI and numerical models. Models are used for forecasting but also for assimilating observations into a consistent analysis or reanalysis dataset.

We can make probabilistic statements about the future with the help of ensemble forecasts. Ensembling is a Monte Carlo-like approach where multiple similar but slightly perturbed forecasts are run to produce a distribution of future weather trajectories. For example, if we run 100 forecasts and 23 of these 100 ensemble members predict rain, we can estimate the chance of rain to be 23%. The forecasts cover the same time horizon but are started from slightly different initial conditions. Furthermore, variance is introduced into the forecasting process by either using a probabilistic model or an ensemble of multiple independent models.

Large ensembles are a prime area of application for AI weather models. While numerical systems are usually limited to ensemble sizes of up to 50 or 100 members because of computational constraints, AI systems can easily produce thousands of ensemble members. This makes it possible to characterize high-impact, low-probability events like hurricanes and compound events like heat waves with high humidity.

https://github.com/NVIDIA/earth2studio provides an easy interface for AI weather and climate model inference - from initial testing to projection deployment. It comes with a range of pre-trained models for various applications. Its modular components -- data sources, perturbation methods, models, and IO handlers -- are combined into custom applications without having to touch any of the other parts.

Forecast Prediction Validation is a transferrable skill: Set up the model, fetch data from sources like GFS, and run deterministic forecasts efficiently.

https://github.com/NVlabs/FourCastNet is a global AI weather model based on <a target="_blank" href="https://arxiv.org/abs/2306.03838">Spherical Fourier Neural Operators (SFNO)</a> to create medium-range weather forecasts. 

## Weather Forecasts

Weather forecasts are indispensable for planning and decision-making in the public and private sector, with weather affecting anything from supply chain resiliency to energy production. 

To conduct Monte Carlo probability analysis, we analyze the impact of intentional perturbations. Earth2Studio offers noise-based and model-based perturbation strategies to make this process easier. 
sample of plausible values
   * Noise-based perturbation e.g., Gaussian, Brownian, Perlin, Spherical Gaussian
   Pure noise generated independent of data
   Spatially correlated, with “natural” pattern
   Ideally taking spherical geometry into 
* More sophisticated, model-based methods use the forecast model to determine the amount and spatial structure of noise to be added to the perturbed variables.
   e.g., vector breeding, singular vectors
   Apply model to unperturbed and noise-perturbed data
   Iteratively calculate difference, use as new perturbation
   Identifies variables showing fastest growth/instability

For our exercise, we will perturb initial conditions and skip adding noise to the forecasting process. Initial condition perturbation captures the uncertainty inherent in the measurements and assimilation system. 
The simpler class of methods adds noise from a defined distribution and of a certain amplitude to some or all of the atmospheric variables. 


Downscaling with CorrDiff (and StormCast)

Traditional numerical weather prediction systems are difficult to operate and place heavy demands on time and compute resources. Recent advances in AI weather modeling enable non-expert practitioners to run forecasts tuned to their own needs, validating model outputs, and explore how super-resolution AI models can make fine-grained predictions. 

To build a custom AI weather pipeline:

* Learn the fundamentals of AI weather simulation and understand the difference between AI-based and numerical weather prediction.
* Gain hands-on experience running AI weather simulations with Earth2Studio for weather forecasting, historical analyses, and downscaling.
* Get familiar with the individual parts of a weather inference pipeline: Data sources, perturbation, forecast and diagnostic models, and IO handling.
* Validate the skill and calibration of weather forecasts with metrics commonly applied to deterministic and ensemble weather forecasts.
* Build a custom AI weather model inference pipeline, using the example of coupling a global forecast model with a regional downscaling model.
* Combine AI-generated weather data with downstream applications, following examples related to energy demand and production forecasts.


<a name="amapi"></a>

## Ambient Weather API

https://ambientweather.com/faqs/question/view/id/1811/
The API (Application Programming Interface) allows programmers to RESTful develop programs and applications that obtain weather data from stations sent to

1. Get the MAC address of your model (such as "12:34:56:AB:CD:EF") at:

   https://ambientweather.com/faqs/question/view/id/1450/

1. Type the MAC address for your account at:

   * https://ambientweather.net/devices
   * https://ambientweather.net/account
   <br /><br />

1. Get the AMBIENT_API_KEY value to authenticate all REST API requests.

   <pre>AMBIENT_API_KEY=1234567890abcdefb642b77c9d2c1b5df497a8c1f44f4b4e8fdf11c002ef2113
   </pre>

   AMBIENT_API_KEY grants access to past/present data for a given user's devices. A typical consumer-facing application will initially ask the user to create an apiKey on their AmbientWeather.net account page (https://ambientweather.net/account) and paste it into the app. Developers for personal or in-house apps will also need to create an apiKey on their own account page.

1. Get the AMBIENT_APPLICATION_KEY to identify the developer / application. To create an application key

   <pre>AMBIENT_APPLICATION_KEY='your-application-key-here'</pre>
   
1. Adapt the Python Module for interacting with the Ambient Weather API.

   https://github.com/bachya/aioambient
   by Aaron Bach", email = "bachya1208@gmail.com"
   is a clean, async-friendly library.

   It's preferred over the<br />
   https://github.com/avryhof/ambient_api

1. This need not be a var because when it does change, program code will probably need to be tested if not changed as well:

   <pre>AMBIENT_ENDPOINT=https://rt.ambientweather.net/v1</pre>

1. Device Data Specs Wiki lists all the parameters that a device might send.

   https://github.com/ambient-weather/api-docs/wiki/Device-Data-Specs
   
1. Add code in the calling program to account for API requests being capped at 1 request/second for each user's apiKey and 3 requests/second per applicationKey. When this limit is exceeded, the API will return a 429 response code. Please be kind to our servers :)

   API requests are capped at 1 request/second for each user's apiKey and 3 requests/second per applicationKey. When this limit is exceeded, the API will return a 429 response code. Please be kind to our servers :)

   The devices returned from the /devices endpoint contain a lastData parameter that contains the most up-to-date data we have for the device. Most devices update every minute, some update less frequently. The timestamps are rounded to the nearest minute.

   Queries for past data using the /devices/:macAddress endpoint are returned in 5 minute or 30 minute increments. There can be up to a 10 minute delay before the most recent data becomes available. If you need up-to-the-minute data please use the /devices endpoint or forthcoming realtime API.

   https://ambientweather.docs.apiary.io/# is generated from
   https://github.com/ambient-weather/api-docs


<hr />
<i>{{ page.lastchange }}</i>