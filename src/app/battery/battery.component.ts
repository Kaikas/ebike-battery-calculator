import { Component, OnInit } from '@angular/core';

import { Battery } from './battery';

@Component({
  selector: 'app-battery',
  templateUrl: './battery.component.html',
  styleUrls: ['./battery.component.css']
})
export class BatteryComponent implements OnInit {

  model = new Battery(0, 0, 0, 0, 0, 0);
 
  /*
  weight_person = parseFloat(document.getElementById("weight_person").value);
       var weight_ebike = parseFloat(document.getElementById("weight_ebike").value);
       var height_difference = parseFloat(document.getElementById("height_difference").value);
       var g = parseFloat("9.81");
       var height_resistance = ((weight_person + weight_ebike) * g * height_difference) / 3600;
       var distance = parseFloat(document.getElementById("distance").value);
       var time = parseFloat(document.getElementById("time").value);
       var speed = (distance / (time / parseFloat("60"))) * 1000 / 3600;
       var rolling_resistance_coefficient = parseFloat(document.getElementById("roll_resistance_coefficient").value);
       var roll_resistance = (weight_person + weight_ebike) * speed * g * rolling_resistance_coefficient * time * 60 / 3600;
       var air_resistance_coefficient = 1.1;
       var air_resistance_surface = 0.45;
       var air_density = 1.05;
       var air_resistance = air_resistance_coefficient * air_resistance_surface * air_density * Math.pow(speed, 3) * time * 60 / 3600;
       // rueckgewinnung durch bergab fahren
       var energy_recovery = height_resistance - (height_resistance *  0.4)
       var watt_cyclist = parseFloat(document.getElementById("watt_cyclist").value);
       var energy_cyclist = watt_cyclist * time * 60 / 3600;
       // 90% wirkungsgrad akku
       var watt_battery = parseFloat(document.getElementById("watt_battery").value) * 0.9;
       // innere widerstaende schaltung etc 4%
       var energy_resistance = (air_resistance + roll_resistance + height_resistance) * 1.04 - energy_recovery - energy_cyclist;
       var percent = Math.round((watt_battery - energy_resistance) / watt_battery * 100);
       document.getElementById("solution").innerHTML = percent;
*/
  result = "";

  calculateBattery(distance: number, time: number, height_difference: number, weight_person: number, weight_ebike: number, rolling_resistance_coefficient: number, watt_cyclist: number, watt_battery: number) {
    // Calculate height resistance. Resistance in Wh needed to travel height difference.
    var resistance_height = ((Number(weight_person) + Number(weight_ebike)) * 9.81 * height_difference) / 3600;


    this.result = String(resistance_height);
  }

  constructor() { }

  ngOnInit() {
  }

}
