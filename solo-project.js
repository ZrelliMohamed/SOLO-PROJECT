// it will contain the time intervales betwin each station
RoadOne=[0,1200,3800,6200,14200,17400,23800,23900,29100,31400,37600,37700,43700,50900,55700,59600,63100,66100]
RoadTwo=[0, 1800, 3900, 6300, 9100, 10600, 16300, 16400, 16500, 25700, 25800, 32400, 39300, 47100, 66000, 66100]
stationOfRoudTwo=["Station k" ,"Station k1", "Station k2", "Station k3" ,"Station T ","Station T1", "Station T2", "Station T3" ,"Station Z ","Station Z1" ,"Station Z2", "Station Z3"]
stationOfRoudOne=["station A","Station A1","Station A2","Station A3","Station B","Station B1","Station B2","Station B3","Station B4","Station C",
    "Station C1","Station C2","Station C3"," Station D","Station D1"].reverse()
// hiding a div t9ala9 
$(".leaflet-top.leaflet-right").attr("hidden",true);
// this is adding leafter map commandes 
var map = L.map('map').setView([35.76453018510478, 10.601109088762076], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);
//creation of the two Starting station 
var iconOptions = {
    iconUrl:'2.png',
    iconSize:[50,50]
}
var customIcon = L.icon(iconOptions)
var markerOptions= {
    title:"station 1",
    icon:customIcon
}
var iconOptions1 = {
  iconUrl:'2.png',
  iconSize:[50,50]
}
var customIcon1 = L.icon(iconOptions1)
var markerOptions1= {
  title:"Station 2",
  icon:customIcon1
}
var station1 = new L.Marker([35.722715, 10.586092],markerOptions);
station1.addTo(map);
var station2 = new L.Marker([35.821857, 10.634459],markerOptions1);
station2.addTo(map);
//customizing our icon 
var iconOptions = {
    iconUrl:'1.png',
    iconSize:[50,50]
}
var customIcon = L.icon(iconOptions)
var markerOptions= {
    title:"Buss 1",
    icon:customIcon
}
var iconOptions1 = {
  iconUrl:'1.png',
  iconSize:[50,50]
}
var customIcon1 = L.icon(iconOptions1)
var markerOptions1= {
  title:"Buss 2",
  icon:customIcon1
}
// this two marker added after i make all the marker null
var marker1 = new L.Marker([35.722715, 10.586092],markerOptions);
marker1.addTo(map);
var marker2 = new L.Marker([35.821857, 10.634459],markerOptions1);
marker2.addTo(map);
L.Routing.control({

    // disable the markers on the map
    createMarker: function(){
        return null
    },
    // Our Buss routes
    waypoints: [
      L.latLng(35.722715, 10.586092), 
      L.latLng(35.720032, 10.577448),
      L.latLng(35.722048, 10.572816),
      L.latLng(35.733232, 10.574890),  
      L.latLng(35.735895, 10.582530),
      L.latLng(35.752144, 10.592646),
      L.latLng(35.798336, 10.620879),
       L.latLng(35.803511, 10.614998),
     L.latLng(35.813543, 10.629553),
      L.latLng(35.821857, 10.634459),
    ],
    // style of the line
    lineOptions:{
        styles: [{
            color:'blue',opacity:1
        }]
    },
    // this make the line by default and the user can not change the route Line
    routeWhileDragging: false,
    draggableWaypoints:false,
        

  }).on("routesfound",function(e){
    console.log(e); 
    e.routes[0].coordinates.forEach( (c,i) => {
        setTimeout(() => {
          if(marker1.getLatLng().lat===35.82186&& marker1.getLatLng().lng===10.63446 ) {
        
            $("#CurrentPlaces1").html("station A")
          }
          if(marker1.getLatLng().lat===35.81333 &&marker1.getLatLng().lng===10.62914){
         
            $("#CurrentPlaces1").html("Station A1")
        }
        if(marker1.getLatLng().lat===35.81871 &&marker1.getLatLng().lng===10.63194){
         
            $("#CurrentPlaces1").html("Station A2")
        }
        if(marker1.getLatLng().lat===35.80854 &&marker1.getLatLng().lng===10.62202){
         
            $("#CurrentPlaces1").html("Station A3")
        }
        if(marker1.getLatLng().lat===35.79897 &&marker1.getLatLng().lng===10.62092){
        
            $("#CurrentPlaces1").html("Station B")
        }
        if(marker1.getLatLng().lat===35.78393 &&marker1.getLatLng().lng===10.61785){
         
            $("#CurrentPlaces1").html("Station B1")
        }
        if(marker1.getLatLng().lat===35.76686 &&marker1.getLatLng().lng===10.60348){
        
            $("#CurrentPlaces1").html("Station B2")
        }
        if(marker1.getLatLng().lat===35.75122 &&marker1.getLatLng().lng===10.59192) {
        
            $("#CurrentPlaces1").html("Station B3")
        }  
        if(marker1.getLatLng().lat===35.73851 &&marker1.getLatLng().lng===10.58365){
            
            $("#CurrentPlaces1").html("Station B4")
        }
        if(marker1.getLatLng().lat===35.73502 &&marker1.getLatLng().lng===10.57808){
        
            $("#CurrentPlaces1").html("Station C ")
        }
        if(marker1.getLatLng().lat===35.73295 &&marker1.getLatLng().lng===10.57483){
         
            $("#CurrentPlaces1").html("Station C1")
        }
        if(marker1.getLatLng().lat===35.72466 &&marker1.getLatLng().lng===10.57137){
         
            $("#CurrentPlaces1").html("Station C2")
        }
        if(marker1.getLatLng().lat===35.72087 &&marker1.getLatLng().lng===10.57367){
         
            $("#CurrentPlaces1").html("Station C3")
        }
        if(marker1.getLatLng().lat===35.72024 &&marker1.getLatLng().lng===10.58176){
        
            $("#CurrentPlaces1").html("Station D")
        }
        if(marker1.getLatLng().lat===35.722715&&marker1.getLatLng().lng=== 10.586092){
        
            $("#CurrentPlaces1").html("Station D1")
        }
         if(marker1.getLatLng().lat===10.59756&&marker2.getLatLng().lng===10.59756 ) {
        
            $("#CurrentPlaces1").html("they are in same places")
          }
            marker1.setLatLng([c.lat,c.lng])
            $(".leaflet-top.leaflet-right").attr("hidden",true);
            
        }, 100*i);
    });
 

  }).addTo(map);
  
 
  L.Routing.control({

    // disable the markers on the map
    createMarker: function(){
        return null
    },
    // Our Buss routes
    waypoints: [
      L.latLng(35.722715, 10.586092), 
      L.latLng(35.720032, 10.577448),
      L.latLng(35.722048, 10.572816),
      L.latLng(35.733232, 10.574890),  
      L.latLng(35.735895, 10.582530),
      L.latLng(35.752144, 10.592646),
      L.latLng(35.798336, 10.620879),
       L.latLng(35.803511, 10.614998),
     L.latLng(35.813543, 10.629553),
      L.latLng(35.821857, 10.634459),
    ],
    // style of the line
    lineOptions:{
        styles: [{
            color:'blue',opacity:1
        }]
    },
    // this make the line by default and the user can not change the route Line
    routeWhileDragging: false,
    draggableWaypoints:false,
        
    
  }).on("routesfound",function(e){
    e.routes[0].coordinates.reverse().forEach( (c,i) => {
        setTimeout(() => {
          if(marker2.getLatLng().lat===35.821857&& marker2.getLatLng().lng===10.634459){
         $("#CurrentPlaces2").html("Station k")
        }
        if(marker2.getLatLng().lat===35.81961 && marker2.getLatLng().lng===10.63242){
        $("#CurrentPlaces2").html("Station k1")
        }
        if(marker2.getLatLng().lat===35.81746 && marker2.getLatLng().lng===10.63123){
        $("#CurrentPlaces2").html("Station k2")
        }
        if(marker2.getLatLng().lat===35.81347 && marker2.getLatLng().lng===10.62946){
        $("#CurrentPlaces2").html("Station k3")
        }
        if(marker2.getLatLng().lat===35.80899 && marker2.getLatLng().lng===10.62267){
         $("#CurrentPlaces2").html("Station T")
        }
        if(marker2.getLatLng().lat===35.80854 && marker2.getLatLng().lng===10.62202){
        $("#CurrentPlaces2").html("Station T1")
        }
        if(marker2.getLatLng().lat===35.79834 && marker2.getLatLng().lng===10.62086){
        $("#CurrentPlaces2").html("Station T2")
        }
        if(marker2.getLatLng().lat===35.776   && marker2.getLatLng().lng===10.60924){
        $("#CurrentPlaces2").html("Station T3")
        }
        if(marker2.getLatLng().lat===35.75703 && marker2.getLatLng().lng===10.59861){
        $("#CurrentPlaces2").html("Station Z")
        }
        if(marker2.getLatLng().lat===35.74504 && marker2.getLatLng().lng===10.5873){
        $("#CurrentPlaces2").html("Station Z1")
        }
        if(marker2.getLatLng().lat===35.73611 && marker2.getLatLng().lng===10.5822){
        $("#CurrentPlaces2").html("Station Z2")
        }
        if(marker2.getLatLng().lat===35.72263 && marker2.getLatLng().lng===10.58616){
        $("#CurrentPlaces2").html("Station Z3")
        }
            marker2.setLatLng([c.lat,c.lng])
            $(".leaflet-top.leaflet-right").attr("hidden",true);
        }, 100*i);
    });

  }).addTo(map);

  function doitAgain(){
    var iconOptions = {
        iconUrl:'1.png',
        iconSize:[50,50]
    }
    var customIcon = L.icon(iconOptions)
    var markerOptions= {
        title:"Buss 1",
        icon:customIcon
    }
   
    // this two marker added after i make all the marker null
    var marker1 = new L.Marker([35.722715, 10.586092],markerOptions);
    marker1.addTo(map);
    
    L.Routing.control({
    
        // disable the markers on the map
        createMarker: function(){
            return null
        },
        // Our Buss routes
        waypoints: [
          L.latLng(35.722715, 10.586092), 
          L.latLng(35.720032, 10.577448),
          L.latLng(35.722048, 10.572816),
          L.latLng(35.733232, 10.574890),  
          L.latLng(35.735895, 10.582530),
          L.latLng(35.752144, 10.592646),
          L.latLng(35.798336, 10.620879),
           L.latLng(35.803511, 10.614998),
         L.latLng(35.813543, 10.629553),
          L.latLng(35.821857, 10.634459),
        ],
        // style of the line
        lineOptions:{
            styles: [{
                color:'blue',opacity:1
            }]
        },
        // this make the line by default and the user can not change the route Line
        routeWhileDragging: false,
        draggableWaypoints:false,
            
    
      }).on("routesfound",function(e){
        console.log(e); 
        e.routes[0].coordinates.forEach( (c,i) => {
            setTimeout(() => {
              if(marker1.getLatLng().lat===35.82186&& marker1.getLatLng().lng===10.63446 ) {
              
                $("#CurrentPlaces1").html("station A")
              }
              if(marker1.getLatLng().lat===35.81333 &&marker1.getLatLng().lng===10.62914){
                
                $("#CurrentPlaces1").html("Station A1")
            }
            if(marker1.getLatLng().lat===35.81871 &&marker1.getLatLng().lng===10.63194){
                
                $("#CurrentPlaces1").html("Station A2")
            }
            if(marker1.getLatLng().lat===35.80854 &&marker1.getLatLng().lng===10.62202){
                
                $("#CurrentPlaces1").html("Station A3")
            }
            if(marker1.getLatLng().lat===35.79897 &&marker1.getLatLng().lng===10.62092){
              
                $("#CurrentPlaces1").html("Station B")
            }
            if(marker1.getLatLng().lat===35.78393 &&marker1.getLatLng().lng===10.61785){
                
                $("#CurrentPlaces1").html("Station B1")
            }
            if(marker1.getLatLng().lat===35.76686 &&marker1.getLatLng().lng===10.60348){
                
                $("#CurrentPlaces1").html("Station B2")
            }
            if(marker1.getLatLng().lat===35.75122 &&marker1.getLatLng().lng===10.59192) {
                
                $("#CurrentPlaces1").html("Station B3")
            }  
            if(marker1.getLatLng().lat===35.73851 &&marker1.getLatLng().lng===10.58365){
                c
                $("#CurrentPlaces1").html("Station B4")
            }
            if(marker1.getLatLng().lat===35.73502 &&marker1.getLatLng().lng===10.57808){
                
                $("#CurrentPlaces1").html("Station C ")
            }
            if(marker1.getLatLng().lat===35.73295 &&marker1.getLatLng().lng===10.57483){
                
                $("#CurrentPlaces1").html("Station C1")
            }
            if(marker1.getLatLng().lat===35.72466 &&marker1.getLatLng().lng===10.57137){
                
                $("#CurrentPlaces1").html("Station C2")
            }
            if(marker1.getLatLng().lat===35.72087 &&marker1.getLatLng().lng===10.57367){
                
                $("#CurrentPlaces1").html("Station C3")
            }
            if(marker1.getLatLng().lat===35.72024 &&marker1.getLatLng().lng===10.58176){
              
                $("#CurrentPlaces1").html("Station D")
            }
            if(marker1.getLatLng().lat===35.722715&&marker1.getLatLng().lng=== 10.586092){
                
                $("#CurrentPlaces1").html("Station D1")
            }
             if(marker1.getLatLng().lat===10.59756&&marker2.getLatLng().lng===10.59756 ) {
                
                $("#CurrentPlaces1").html("they are in same places")
              }
                marker1.setLatLng([c.lat,c.lng])
                $(".leaflet-top.leaflet-right").attr("hidden",true);
    
            }, 100*i);
        });
     
    
      })
    
      .addTo(map);
  }
  function doitAgainReversed(){
    var iconOptions1 = {
      iconUrl:'1.png',
      iconSize:[50,50]
    }
    var customIcon1 = L.icon(iconOptions1)
    var markerOptions1= {
      title:"Buss 2",
      icon:customIcon1
    }
    var marker2 = new L.Marker([35.821857, 10.634459],markerOptions1);
    marker2.addTo(map);
    L.Routing.control({

        // disable the markers on the map
        createMarker: function(){
            return null
        },
        // Our Buss routes
        waypoints: [
          L.latLng(35.722715, 10.586092), 
          L.latLng(35.720032, 10.577448),
          L.latLng(35.722048, 10.572816),
          L.latLng(35.733232, 10.574890),  
          L.latLng(35.735895, 10.582530),
          L.latLng(35.752144, 10.592646),
          L.latLng(35.798336, 10.620879),
           L.latLng(35.803511, 10.614998),
         L.latLng(35.813543, 10.629553),
          L.latLng(35.821857, 10.634459),
        ],
        // style of the line
        lineOptions:{
            styles: [{
                color:'blue',opacity:1
            }]
        },
        // this make the line by default and the user can not change the route Line
        routeWhileDragging: false,
        draggableWaypoints:false,
            
    
      }).on("routesfound",function(e){
        e.routes[0].coordinates.reverse().forEach( (c,i) => {
            setTimeout(() => {
              if(marker2.getLatLng().lat===35.821857&& marker2.getLatLng().lng===10.634459){
                console.log("Station k")
                $("#CurrentPlaces2").html("Station k")
            }
            if(marker2.getLatLng().lat===35.81961 && marker2.getLatLng().lng===10.63242){
                console.log("Station k1")
                $("#CurrentPlaces2").html("Station k1")
            }
            if(marker2.getLatLng().lat===35.81746 && marker2.getLatLng().lng===10.63123){
                console.log("Station k2")
                $("#CurrentPlaces2").html("Station k2")
            }
            if(marker2.getLatLng().lat===35.81347 && marker2.getLatLng().lng===10.62946){
                console.log("Station k3")
                $("#CurrentPlaces2").html("Station k3")
            }
            if(marker2.getLatLng().lat===35.80899 && marker2.getLatLng().lng===10.62267){
                console.log("Station T")
                $("#CurrentPlaces2").html("Station T")
            }
            if(marker2.getLatLng().lat===35.80854 && marker2.getLatLng().lng===10.62202){
                console.log("Station T1")
                $("#CurrentPlaces2").html("Station T1")
            }
            if(marker2.getLatLng().lat===35.79834 && marker2.getLatLng().lng===10.62086){
                console.log("Station T2")
                $("#CurrentPlaces2").html("Station T2")
            }
            if(marker2.getLatLng().lat===35.776   && marker2.getLatLng().lng===10.60924){
                console.log("Station T3")
                $("#CurrentPlaces2").html("Station T3")
            }
            if(marker2.getLatLng().lat===35.75703 && marker2.getLatLng().lng===10.59861){
                console.log("Station Z")
                $("#CurrentPlaces2").html("Station Z")
            }
            if(marker2.getLatLng().lat===35.74504 && marker2.getLatLng().lng===10.5873){
                console.log("Station Z1")
                $("#CurrentPlaces2").html("Station Z1")
            }
            if(marker2.getLatLng().lat===35.73611 && marker2.getLatLng().lng===10.5822){
                console.log("Station Z2")
                $("#CurrentPlaces2").html("Station Z2")
            }
            if(marker2.getLatLng().lat===35.72263 && marker2.getLatLng().lng===10.58616){
                console.log("Station Z3")
                $("#CurrentPlaces2").html("Station Z3")
            }
            
    
                marker2.setLatLng([c.lat,c.lng])
                $(".leaflet-top.leaflet-right").attr("hidden",true);
                
            }, 100*i);
        });
    
      }).addTo(map);
  }
for (var i = 1; i < 10; i++) {
  setTimeout(function(){
    $(".leaflet-top.leaflet-right").attr("hidden",true);
    doitAgain()
    // map.removeLayer(marker1)
  },70300*i) 
  //length of the road trip is 66300 
  setTimeout(function(){
    $(".leaflet-top.leaflet-right").attr("hidden",true);
    doitAgainReversed()
    // map.removeLayer(marker2)
  },70300*i)

}

// estimation Time here is a party
$("#station").on('change',function(){
    // console.log(document.getElementById("Location").selectedIndex-1)
    // console.log( $("#CurrentPlaces1").html())
    // console.log( $("#CurrentPlaces2").html())
    // id of div is :Time
    if(document.getElementById("Destination").selectedIndex===1){
      var currentp=  $("#CurrentPlaces1").html()
     
      var chosedp=posSt(currentp,stationOfRoudOne)
      console.log(chosedp)
      if(document.getElementById("Location").selectedIndex-1>chosedp){ 
        $("#Time").empty()
        $("#Time").append( RoadOne[document.getElementById("Location").selectedIndex-1]-RoadOne[chosedp])
       setTimeout(() => {
        console.log("buss is almost here +- 3 Station");
        $("#Time").empty()
        $("#Time").append("buss is almost here +- 3 Station")
       }, RoadOne[document.getElementById("Location").selectedIndex-1]-RoadOne[chosedp]);
       
      }else{
        // affichi car fatettou w next car wa9tech
      }


    }
    if(document.getElementById("Destination").selectedIndex===2){
       var currentp= $("#CurrentPlaces2").html()
       var chosedp=posSt(currentp,stationOfRoudTwo)
       console.log(chosedp)
       if(document.getElementById("Location").selectedIndex-1>chosedp){ 
        $("#Time").empty()
        $("#Time").append( RoadTwo[document.getElementById("Location").selectedIndex-1]-RoadTwo[chosedp])
        setTimeout(() => {
         console.log("buss is almost here +-3 station");
         $("#Time").empty()
         $("#Time").append("buss is almost here +-3 station")
        }, RoadTwo[document.getElementById("Location").selectedIndex-1]-RoadTwo[chosedp]);
        
       }else {
        // affichi car fatettou w next car wa9tech
       }
    }
})

$("#Destination").change(function(){
    console.log(document.getElementById("Destination").selectedIndex)
    if(document.getElementById("Destination").selectedIndex===1){
        //mechi lsoussa
        $("#station").empty()
        var str="<br><p>Station :</p><select id='Location'><option hidden></option>"
        for (var i = 0; i < stationOfRoudOne.length; i++) {
           str+="<option value='"+stationOfRoudOne[i]+"'>"+stationOfRoudOne[i]+"</option>" 
        }
        str+="</select>"
        $("#station").append(str)
    }
    if(document.getElementById("Destination").selectedIndex===2){
        //mechi lMsaken
        $("#station").empty()
        var str="<br><p>Station :</p><select id='Location'><option hidden></option>"
        for (var i = 0; i < stationOfRoudTwo.length; i++) {
           str+="<option value='"+stationOfRoudTwo[i]+"'>"+stationOfRoudTwo[i]+"</option>" 
        }
        str+="</select>"
        $("#station").append(str)
    }

})

//helper function 
function posSt (string,array){
    for (var i = 0; i < array.length; i++) {

        if(array[i]===string)
        {console.log(string)
        return i
        }
    }
}






