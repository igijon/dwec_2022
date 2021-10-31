/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function drag(ev) {
    ev.dataTransfer.setData("pokemon", ev.target.id);
 }
 
 function allowDrop(ev) {
   ev.preventDefault();
 }
 
 function drop(ev) {
   var data = ev.dataTransfer.getData("pokemon");
   ev.target.appendChild(document.getElementById(data));
 }
 
 