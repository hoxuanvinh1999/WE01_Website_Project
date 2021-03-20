let part1 = document.getElementById("part1")
let part2 = document.getElementById("part2")
let part3 = document.getElementById("part3")
let part4 = document.getElementById("part4")
let part5 = document.getElementById("part5")
let part6 = document.getElementById("part6")
let part7 = document.getElementById("part7")

let sub1 = document.getElementById("sub1")
let sub2 = document.getElementById("sub2")
let sub3 = document.getElementById("sub3")
let sub4 = document.getElementById("sub4")
let sub5 = document.getElementById("sub5")
let sub6 = document.getElementById("sub6")
let sub7 = document.getElementById("sub7")

var check = [ 0, 0, 0, 0, 0, 0, 0]
var listpart = [part1, part2, part3, part4, part5, part6, part7]
var listsub = [sub1, sub2, sub3, sub4, sub5, sub6, sub7]

part1.onclick= function(){Display(0)}
part2.onclick= function(){Display(1)}
part3.onclick= function(){Display(2)}
part4.onclick= function(){Display(3)}
part5.onclick= function(){Display(4)}
part6.onclick= function(){Display(5)}
part7.onclick= function(){Display(6)}

function Display(number){
    for (let i=0; i<7; i++ )
    {
        if (i != number){
            listsub[i].style.display = 'none'
        }
        else{
            listsub[i].style.display = 'block'
        }
    }    
}