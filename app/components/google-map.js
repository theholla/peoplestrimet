import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),
  inputtedAddress: "portland, oregon",


  actions: {
    showMap(alerts) {

      var container = this.$('.map-display')[0];//map container to hold the map
      var options = {
        center: this.get('map').center(45.5434085,-122.6544225),

      };

      var myMap = this.get('map').findMap(container, options);

      var geocoder = new google.maps.Geocoder();
      var address = this.get('inputtedAddress');

      geocoder.geocode( { 'address': address }, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          var lat=results[0].geometry.location.lat();
          var long=results[0].geometry.location.lng();

          myMap.setCenter(new google.maps.LatLng(lat, long));
          myMap.setZoom(11);
        } else {
          alert("Geocode was not successful for the following reason: " + status);
        }
      });

      for (var i = 0; i < alerts.get('length'); i++) {
        var myAlert = alerts.objectAt(i);
        var text = '<b>' + myAlert.get('line') + '</b><br>' + myAlert.get('issue');
        var lat = myAlert.get('latitude');
        var lng = myAlert.get('longitude');
        var lastOpened;
        var infowindow = new google.maps.InfoWindow({
          content: text,
          maxWidth: 300
        });

        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(lat, lng),
          map: myMap,
          icon: 'http://maps.google.com/mapfiles/kml/pal3/icon33.png',
          infowindow: infowindow
        });
        marker.setMap(myMap);

        google.maps.event.addListener(marker, 'click', function() {
          // Only open one infowindow at a time
          if (lastOpened !== undefined) {
            lastOpened.close();
          }
          this.infowindow.open(myMap, this);
          lastOpened = this.infowindow;
        });
      }
    }


  }


});
