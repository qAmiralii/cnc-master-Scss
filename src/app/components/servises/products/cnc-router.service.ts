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
  routers = [
    { id: 100, title: "3D Furniture Base Design Pack Code 5", price: "40$", pic: '100.jpg', tPrice: 3600000, for: "wood" },
    { id: 101, title: "3D Furniture Base Design Pack Code 4", price: "45$", pic: '101.jpg', tPrice: 3600000, for: "wood" },
    { id: 102, title: "3D Furniture Base Design Pack Code 3", price: "45$", pic: '102.jpg', tPrice: 3600000, for: "wood" },
    { id: 103, title: "3D Furniture Base Design Pack Code 2", price: "30$", pic: '103.jpg', tPrice: 3600000, for: "wood" },
    { id: 104, title: "3D Furniture Base Design Pack Code 1", price: "25$", pic: '104.jpg', tPrice: 3600000, for: "wood" },
  ]
  relief = [
    { id: 105, title: "3D design file code 59", price: "40$", pic: '105.jpg', tPrice: 3600000, for: "wood" },
    { id: 106, title: "3D design file code 58", price: "35$", pic: '106.jpg', tPrice: 3600000, for: "wood" },
    { id: 107, title: "3D design file code 57", price: "20$", pic: '107.jpg', tPrice: 3600000, for: "wood" },
    { id: 108, title: "3D design file code 56", price: "25$", pic: '108.jpg', tPrice: 3600000, for: "wood" },
    { id: 109, title: "3D design file code 55", price: "35$", pic: '109.jpg', tPrice: 3600000, for: "wood" },
    { id: 110, title: "3D design file code 54", price: "45$", pic: '110.jpg', tPrice: 3600000, for: "wood" },
    { id: 111, title: "3D design file code 53", price: "27$", pic: '111.jpg', tPrice: 3600000, for: "wood" },
    { id: 112, title: "3D design file code 52", price: "15$", pic: '112.jpg', tPrice: 3600000, for: "wood" },
    { id: 113, title: "3D design file code 51", price: "25$", pic: '113.jpg', tPrice: 3600000, for: "wood" },
    { id: 114, title: "3D design file code 50", price: "15$", pic: '114.jpg', tPrice: 3600000, for: "wood" },
    { id: 115, title: "3D design file code 49", price: "35$", pic: '115.jpg', tPrice: 3600000, for: "wood" },
  ]
}
