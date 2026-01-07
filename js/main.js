import { clickableitems } from "./item.js";
import { get, set } from "./storage.js";
import { createcounter } from "./counters.js";
import { ajustargridrows } from "./layout.js";
var itens = document.querySelectorAll("ul>li");
var li2nds = document.querySelectorAll(".li-2nd");
var li1sts = document.querySelectorAll(".li-1st");

clickableitems(itens, set, get);
createcounter(li2nds, 2)
createcounter(li1sts, 1)
ajustargridrows(itens)