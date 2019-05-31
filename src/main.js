import { Galc } from './galc.js';
import './css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    $("#result").show();
  });
});
