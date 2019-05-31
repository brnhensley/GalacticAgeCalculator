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
    let mercLeft = converter.getMercuryYearsLeft();
    let venusLeft = converter.getVenusYearsLeft();
    let marsLeft = converter.getMarsYearsLeft();
    let jupiterLeft = converter.getJupiterYearsLeft();
    $(".merc").text(merc);
    $(".venus").text(venus);
    $(".mars").text(mars);
    $(".jupiter").text(jupiter);
    $(".mercleft").text(mercLeft);
    $(".venusleft").text(venusLeft);
    $(".marsleft").text(marsLeft);
    $(".jupiterleft").text(jupiterLeft);
    $("#ageresult").show();
  });
});
