'use strict';

/**
 * @ngdoc function
 * @name miappangularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the miappangularApp
 */
angular.module('miappangularApp')
  .controller('MainCtrl', function() {
    var ctrl = this;
    ctrl.zonas = [{
        nombre: "Zona1",
        estado: "apagado"
      },
      {
        nombre: "Zona2",
        estado: "apagado"
      },
      {
        nombre: "Zona3",
        estado: "apagado"
      },
      {
        nombre: "Zona4",
        estado: "apagado"
      },
      {
        nombre: "Zona5",
        estado: "apagado"
      },
      {
        nombre: "Zona6",
        estado: "apagado"
      },
      {
        nombre: "Zona7",
        estado: "apagado"
      },
      {
        nombre: "Zona8",
        estado: "apagado"
      },
      {
        nombre: "Zona9",
        estado: "apagado"
      }
    ];
    ctrl.cambiar_estado = function() {
      angular.forEach(ctrl.zonas, function(zona){
          console.log(ctrl.nombre_zona);
          if (zona.nombre === ctrl.nombre_zona) {
              zona.estado = ctrl.estado_zona;
          }
      });
      ctrl.nombre_zona = "";
      ctrl.estado_zona = "";
    };
  });
