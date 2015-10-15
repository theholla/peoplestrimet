import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),

  actions: {
    showMap(alerts) {
      var bounds = new google.maps.LatLngBounds();
      var container = this.$('.map-display')[0];
      var options = {
        center: this.get('map').center(45.5200, -122.6819),
      };

      var myMap = this.get('map').findMap(container, options);

      var geocoder = new google.maps.Geocoder();
      var address = "beaverton";

      geocoder.geocode( { 'address': address }, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          var lat=results[0].geometry.location.lat();
          var long=results[0].geometry.location.lng();

          myMap.setCenter(new google.maps.LatLng(lat, long));
          // myMap.center(lat, long);
        } else {
          alert("Geocode was not successful for the following reason: " + status);
        }
      });

      for (var i = 0; i < this.alerts.get('length'); i++) {

        var myAlert = this.alerts.objectAt(i);
        var text = '<b>' + myAlert.get('stop') + '</b><br>' + myAlert.get('line');
        var lat = myAlert.get('latitude');
        var lng = myAlert.get('longitude');
        var lastOpened;

        var infowindow = new google.maps.InfoWindow({
          content: text,
          maxWidth: 200
        });

        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(lat, lng),
          map: myMap,
          infowindow: infowindow
        });

        bounds.extend(marker.getPosition());

        google.maps.event.addListener(marker, 'click', function() {
          // Only open one infowindow at a time
          if (lastOpened !== undefined) {
            lastOpened.close();
          }
          this.infowindow.open(myMap, this);
          lastOpened = this.infowindow;
        });
        myMap.fitBounds(bounds);

      } // closes for loop
    } // closes showMap

  } // closes action
});
