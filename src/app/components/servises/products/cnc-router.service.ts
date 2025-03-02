import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CncRouterService {
  menucategory = "all";

  cncRouterProducts = [
    { id: 101, title: "Milling Machine 1325 Cnc Router Aluminium Machine Mould Cnc Metal for Engraving Carving Metal Aluminum", price: "5600$", pic: 'cncrouter/101.png', tPrice: 3600000, for: "router" },
    { id: 102, title: "Blue Elephant CNC 2040 ATC CNC Router Machine 2000*4000mm with Rotary Device for Sale ", price: "1005$", pic: 'cncrouter/102.png', tPrice: 3600000, for: "router" },
    { id: 103, title: "China Factory Supplier 4 Axis 3d Cnc Carving Machine Wood Cnc 1325 1530 Atc Wood Cnc Router Engraver From alibaba", price: "825$", pic: 'cncrouter/103.png', tPrice: 3600000, for: "router" },
    { id: 104, title: "Factory Direct Sale SM-1325 Woodworking Cnc Router Wood Carving Machine for Furniture Industry", price: "1005$", pic: 'cncrouter/104.png', tPrice: 3600000, for: "router" },
    { id: 105, title: "Cheap Wood Router 1325 1530 4x8 Cnc Router 3d 3 Axis Wood Cnc Machine 4 Axis Wood Design engrave Machine", price: "4500$", pic: 'cncrouter/105.png', tPrice: 3600000, for: "router" },
    { id: 106, title: "Milling Machine 1325 Cnc Router Aluminium Machine Mould Cnc Metal for Engraving Carving Metal Aluminum", price: "3050$", pic: 'cncrouter/106.png', tPrice: 3600000, for: "router" },
    { id: 101, category:"reliefAnimal" , title: "A 3D relief model of a Blue Jay perched on a branch.", price: "17$", pic: 'relief/animals/animal101.png', tPrice: 3600000, for: "router" },
    { id: 102, category:"reliefAnimal" ,title: "A 3D Relief Model of a Turkey", price: "8$", pic: 'relief/animals/animal102.png', tPrice: 3600000, for: "router" },
    { id: 103, category:"reliefAnimal" ,title: "A 3D relief model of an alert Stag on a patch of grass.", price: "22.5$", pic: 'relief/animals/animal103.png', tPrice: 3600000, for: "router" },
    { id: 104, category:"reliefAnimal" ,title: "A 3D Relief Model of three dogs", price: "17$", pic: 'relief/animals/animal104.png', tPrice: 3600000, for: "router" },
    { id: 105, category:"reliefAnimal" ,title: "A 3D Relief Model of a Wolf in a nature frame", price: "23$", pic: 'relief/animals/animal105.png', tPrice: 3600000, for: "router" },
    { id: 106, category:"reliefAnimal" ,title: "A 3D relief model of a horse standing on its hind legs.", price: "17$", pic: 'relief/animals/animal106.png', tPrice: 3600000, for: "router" },
    { id: 107, category:"reliefAnimal" ,title: "A 3D Relief Model of a Zebra in an African Nature Scene", price: "36$", pic: 'relief/animals/animal107.png', tPrice: 3600000, for: "router" },
    { id: 108, category:"reliefAnimal" ,title: "A 3D relief model of a horse head in a horseshoe surround.", price: "22$", pic: 'relief/animals/animal108.png', tPrice: 3600000, for: "router" },
    { id: 109, category:"reliefAnimal" ,title: "A 3D Relief Model of a Cougar and Elk in nature", price: "24$", pic: 'relief/animals/animal109.png', tPrice: 3600000, for: "router" },
    { id: 110, category:"reliefAnimal" ,title: "A 3D Relief Model of a sitting Bunny Rabbit", price: "11$", pic: 'relief/animals/animal110.png', tPrice: 3600000, for: "router" },
    { id: 111, category:"reliefAnimal" ,title: "A 3D Relief Model of a Raccoon emerging from a tree trunk.", price: "37$", pic: 'relief/animals/animal111.png', tPrice: 3600000, for: "router" },
    { id: 101, category:"wallPanel" ,title: "3DWP-2067 3D Wall Panel 3D Model 8x4 Size CNC Design Artcam File & STL 3D Model Download", price: "27$", pic: 'wallPanel/wall101.png', tPrice: 3600000, for: "router" },
    { id: 102, category:"wallPanel" ,title: "3DWP-2043 3D Wall Panel 3D Model 8x4 Size CNC Design Artcam File & STL 3D Model Download", price: "17$", pic: 'wallPanel/wall102.png', tPrice: 3600000, for: "router" },
    { id: 103, category:"wallPanel" ,title: "3DWP-2001 3D Wall Panel 8x4 CNC Design 3D Model Relief And STL Download", price: "25$", pic: 'wallPanel/wall103.png', tPrice: 3600000, for: "router" },
    { id: 104, category:"wallPanel" ,title: " 3D Wall Panel 3D Model 8x4 Size CNC Design Artcam File & STL 3D Model ", price: "32$", pic: 'wallPanel/wall104.png', tPrice: 3600000, for: "router" },
    { id: 105, category:"wallPanel" ,title: "decor set wall panel wall relief mural CNC 34 3D model", price: "20$", pic: 'wallPanel/wall105.png', tPrice: 3600000, for: "router" },
    { id: 106, category:"wallPanel" ,title: "3D Wall Paneling, MDF Wall Decorative Panels, CNC MDF Cutting, Thickness", price: "20$", pic: 'wallPanel/wall106.png', tPrice: 3600000, for: "router" },
    { id: 107, category:"wallPanel" ,title: "decor set wall panel wall relief mural CNC 64 3D model", price: "18$", pic: 'wallPanel/wall107.png', tPrice: 3600000, for: "router" },
    { id: 108, category:"wallPanel" ,title: "Wall panel PAN 002 | CNC Woodworking and Panels", price: "20$", pic: 'wallPanel/wall108.png', tPrice: 3600000, for: "router" },
    { id: 109, category:"wallPanel" ,title: "3D Wall Paneling, MDF Wall Decorative Panels, CNC MDF Cutting, Thickness: 12mm To 25mm", price: "25$", pic: 'wallPanel/wall109.png', tPrice: 3600000, for: "router" },
    { id: 110, category:"wallPanel" ,title: "    3D Wall panel Model for CNC and STL 3D printers 40", price: "30$", pic: 'wallPanel/wall110.png', tPrice: 3600000, for: "router" },


  ]

  relief = [
    { id: 101, title: "A 3D relief model of a Blue Jay perched on a branch.", price: "17$", pic: 'relief/animals/animal101.png', tPrice: 3600000, for: "router" },
    { id: 102, title: "A 3D Relief Model of a Turkey", price: "8$", pic: 'relief/animals/animal102.png', tPrice: 3600000, for: "router" },
    { id: 103, title: "A 3D relief model of an alert Stag on a patch of grass.", price: "22.5$", pic: 'relief/animals/animal103.png', tPrice: 3600000, for: "router" },
    { id: 104, title: "A 3D Relief Model of three dogs", price: "17$", pic: 'relief/animals/animal104.png', tPrice: 3600000, for: "router" },
    { id: 105, title: "A 3D Relief Model of a Wolf in a nature frame", price: "23$", pic: 'relief/animals/animal105.png', tPrice: 3600000, for: "router" },
    { id: 106, title: "A 3D relief model of a horse standing on its hind legs.", price: "17$", pic: 'relief/animals/animal106.png', tPrice: 3600000, for: "router" },
    { id: 107, title: "A 3D Relief Model of a Zebra in an African Nature Scene", price: "36$", pic: 'relief/animals/animal107.png', tPrice: 3600000, for: "router" },
    { id: 108, title: "A 3D relief model of a horse head in a horseshoe surround.", price: "22$", pic: 'relief/animals/animal108.png', tPrice: 3600000, for: "router" },
    { id: 109, title: "A 3D Relief Model of a Cougar and Elk in nature", price: "24$", pic: 'relief/animals/animal109.png', tPrice: 3600000, for: "router" },
    { id: 110, title: "A 3D Relief Model of a sitting Bunny Rabbit", price: "11$", pic: 'relief/animals/animal110.png', tPrice: 3600000, for: "router" },
    { id: 111, title: "A 3D Relief Model of a Raccoon emerging from a tree trunk.", price: "37$", pic: 'relief/animals/animal111.png', tPrice: 3600000, for: "router" },


  ]
  reliefAnimal = [
    { id: 101, title: "A 3D relief model of a Blue Jay perched on a branch.", price: "17$", pic: 'relief/animals/animal101.png', tPrice: 3600000, for: "router" },
    { id: 102, title: "A 3D Relief Model of a Turkey", price: "8$", pic: 'relief/animals/animal102.png', tPrice: 3600000, for: "router" },
    { id: 103, title: "A 3D relief model of an alert Stag on a patch of grass.", price: "22.5$", pic: 'relief/animals/animal103.png', tPrice: 3600000, for: "router" },
    { id: 104, title: "A 3D Relief Model of three dogs", price: "17$", pic: 'relief/animals/animal104.png', tPrice: 3600000, for: "router" },
    { id: 105, title: "A 3D Relief Model of a Wolf in a nature frame", price: "23$", pic: 'relief/animals/animal105.png', tPrice: 3600000, for: "router" },
    { id: 106, title: "A 3D relief model of a horse standing on its hind legs.", price: "17$", pic: 'relief/animals/animal106.png', tPrice: 3600000, for: "router" },
    { id: 107, title: "A 3D Relief Model of a Zebra in an African Nature Scene", price: "36$", pic: 'relief/animals/animal107.png', tPrice: 3600000, for: "router" },
    { id: 108, title: "A 3D relief model of a horse head in a horseshoe surround.", price: "22$", pic: 'relief/animals/animal108.png', tPrice: 3600000, for: "router" },
    { id: 109, title: "A 3D Relief Model of a Cougar and Elk in nature", price: "24$", pic: 'relief/animals/animal109.png', tPrice: 3600000, for: "router" },
    { id: 110, title: "A 3D Relief Model of a sitting Bunny Rabbit", price: "11$", pic: 'relief/animals/animal110.png', tPrice: 3600000, for: "router" },
    { id: 111, category:"reliefAnimal" , title: "A 3D Relief Model of a Raccoon emerging from a tree trunk.", price: "37$", pic: 'relief/animals/animal111.png', tPrice: 3600000, for: "router" },
  ]
  wallPanel = [
    { id: 101, category:"wallPanel" , title: "3DWP-2067 3D Wall Panel 3D Model 8x4 Size CNC Design Artcam File & STL 3D Model Download", price: "27$", pic: 'wallPanel/wall101.png', tPrice: 3600000, for: "router" },
    { id: 102, category:"wallPanel" , title: "3DWP-2043 3D Wall Panel 3D Model 8x4 Size CNC Design Artcam File & STL 3D Model Download", price: "17$", pic: 'wallPanel/wall102.png', tPrice: 3600000, for: "router" },
    { id: 103, category:"wallPanel" , title: "3DWP-2001 3D Wall Panel 8x4 CNC Design 3D Model Relief And STL Download", price: "25$", pic: 'wallPanel/wall103.png', tPrice: 3600000, for: "router" },
    { id: 104, category:"wallPanel" , title: " 3D Wall Panel 3D Model 8x4 Size CNC Design Artcam File & STL 3D Model ", price: "32$", pic: 'wallPanel/wall104.png', tPrice: 3600000, for: "router" },
    { id: 105, category:"wallPanel" , title: "decor set wall panel wall relief mural CNC 34 3D model", price: "20$", pic: 'wallPanel/wall105.png', tPrice: 3600000, for: "router" },
    { id: 106, category:"wallPanel" , title: "3D Wall Paneling, MDF Wall Decorative Panels, CNC MDF Cutting, Thickness", price: "20$", pic: 'wallPanel/wall106.png', tPrice: 3600000, for: "router" },
    { id: 107, category:"wallPanel" , title: "decor set wall panel wall relief mural CNC 64 3D model", price: "18$", pic: 'wallPanel/wall107.png', tPrice: 3600000, for: "router" },
    { id: 108, category:"wallPanel" , title: "Wall panel PAN 002 | CNC Woodworking and Panels", price: "20$", pic: 'wallPanel/wall108.png', tPrice: 3600000, for: "router" },
    { id: 109, category:"wallPanel" , title: "3D Wall Paneling, MDF Wall Decorative Panels, CNC MDF Cutting, Thickness: 12mm To 25mm", price: "25$", pic: 'wallPanel/wall109.png', tPrice: 3600000, for: "router" },
    { id: 110, category:"wallPanel" , title: "    3D Wall panel Model for CNC and STL 3D printers 40", price: "30$", pic: 'wallPanel/wall110.png', tPrice: 3600000, for: "router" },

  ]
}
