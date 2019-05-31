import { Galc } from './galc.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $("form#age").submit(function(event) {
    event.preventDefault();
    let dob = $("input#dob").val().toString();
    let converter = new Galc(new Date(dob));
    let merc = converter.getMercuryYears();
    let venus = converter.getVenusYears();
    let mars = converter.getMarsYears();
    let jupiter = converter.getJupiterYears();
    $(".merc").text(merc);
    $(".venus").text(venus);
    $(".mars").text(mars);
    $(".jupiter").text(jupiter);
    $("#ageresult").show();
  });
});

$(document).ready(function() {
  $("form#lifeleft").submit(function(event) {
    event.preventDefault();
    let dob = $("input#lifedob").val().toString();
    let converter = new Galc(new Date(dob));
    let merc = converter.getMercuryYearsLeft();
    let venus = converter.getVenusYearsLeft();
    let mars = converter.getMarsYearsLeft();
    let jupiter = converter.getJupiterYearsLeft();
    $(".mercleft").text(merc);
    $(".venusleft").text(venus);
    $(".marsleft").text(mars);
    $(".jupiterleft").text(jupiter);
    $("#leftresult").show();
  });
});
