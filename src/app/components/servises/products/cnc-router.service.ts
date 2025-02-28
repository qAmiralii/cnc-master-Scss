import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CncRouterService {
  category = 0.0;

  cncRouterProducts = [
    { id: 101, title: "Milling Machine 1325 Cnc Router Aluminium Machine Mould Cnc Metal for Engraving Carving Metal Aluminum", price: "5600$", pic: 'cncrouter/101.png', tPrice: 3600000, for: "router" },
    { id: 102, title: "Blue Elephant CNC 2040 ATC CNC Router Machine 2000*4000mm with Rotary Device for Sale ", price: "1005$", pic: 'cncrouter/102.png', tPrice: 3600000, for: "router" },
    { id: 103, title: "China Factory Supplier 4 Axis 3d Cnc Carving Machine Wood Cnc 1325 1530 Atc Wood Cnc Router Engraver From alibaba", price: "825$", pic: 'cncrouter/103.png', tPrice: 3600000, for: "router" },
    { id: 104, title: "Factory Direct Sale SM-1325 Woodworking Cnc Router Wood Carving Machine for Furniture Industry", price: "1005$", pic: 'cncrouter/104.png', tPrice: 3600000, for: "router" },
    { id: 105, title: "Cheap Wood Router 1325 1530 4x8 Cnc Router 3d 3 Axis Wood Cnc Machine 4 Axis Wood Design engrave Machine", price: "4500$", pic: 'cncrouter/105.png', tPrice: 3600000, for: "router" },
    { id: 106, title: "Milling Machine 1325 Cnc Router Aluminium Machine Mould Cnc Metal for Engraving Carving Metal Aluminum", price: "3050$", pic: 'cncrouter/106.png', tPrice: 3600000, for: "router" },

  ]
  
  relief = [

  ]
}
