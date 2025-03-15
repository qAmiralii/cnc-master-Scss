import { Injectable } from '@angular/core';
import { Product } from '../../../models/product';

@Injectable({
  providedIn: 'root'
})
export class CncRouterService {
  menucategory = "all";

  cncProducts: Product[] = [
    new Product(101, 'A 3D relief model of a Blue Jay perched on a branch.', "17$", "relief/animals/animal101.png", 'reliefAnimal', 3600000),
    new Product(102, 'A 3D Relief Model of a Turkey', '8$', "relief/animals/animal102.png", "reliefAnimal", 120000),
    new Product(103, 'A 3D relief model of an alert Stag on a patch of grass.', '22.5$', "relief/animals/animal103.png", "reliefAnimal", 0),
    new Product(104, 'A 3D Relief Model of three dogs', '17$', "relief/animals/animal104.png", "reliefAnimal", 0),
    new Product(105, 'A 3D Relief Model of a Wolf in a nature frame', '23$', "relief/animals/animal105.png", "reliefAnimal", 0),
    new Product(106, 'A 3D relief model of a horse standing on its hind legs.', '17$', "relief/animals/animal106.png", "reliefAnimal", 0),
    new Product(107, 'A 3D Relief Model of a Zebra in an African Nature Scene', '36$', "relief/animals/animal107.png", "reliefAnimal", 0),
    new Product(108, 'A 3D relief model of a horse head in a horseshoe surround.', '22$', "relief/animals/animal108.png", "reliefAnimal", 0),
    new Product(109, 'A 3D Relief Model of a Cougar and Elk in nature', '24$', "relief/animals/animal109.png", "reliefAnimal", 0),
    new Product(110, 'A 3D Relief Model of a sitting Bunny Rabbit', '11$', "relief/animals/animal110.png", "reliefAnimal", 0),
    new Product(111, 'A 3D Relief Model of a Raccoon emerging from a tree trunk.', '37$', "relief/animals/animal111.png", "reliefAnimal", 0),

    new Product(101, ' 3D Wall Panel 3D Model 8x4 Size CNC Design Artcam File & STL 3D Model Download', '27$', "wallPanel/wall101.png", "wallPanel", 0),
    new Product(102, '3D Wall Panel 3D Model 8x4 Size CNC Design Artcam File & STL 3D Model', '29$', "wallPanel/wall102.png", "wallPanel", 0),
    new Product(102, '3D Wall Panel 8x4 CNC Design 3D Model Relief And STL ', '28$', "wallPanel/wall103.png", "wallPanel", 0),
    new Product(102, '3D Wall Panel 3D Model 8x4 Size CNC Design Artcam File & STL 3D Model', '30$', "wallPanel/wall104.png", "wallPanel", 0),
    new Product(102, 'decor set wall panel wall relief mural CNC 34 3D model', '29$', "wallPanel/wall105.png", "wallPanel", 0),
    new Product(102, '3D Wall Paneling, MDF Wall Decorative Panels, CNC MDF Cutting, Thickness', '27$', "wallPanel/wall106.png", "wallPanel", 0),
    new Product(102, 'decor set wall panel wall relief mural CNC 64 3D model', '28$', "wallPanel/wall107.png", "wallPanel", 0),
    new Product(102, 'Wall panel PAN 002 | CNC Woodworking and Panels', '29$', "wallPanel/wall108.png", "wallPanel", 0),
    new Product(102, '3D Wall Paneling, MDF Wall Decorative Panels, CNC MDF Cutting, Thickness: 12mm To 25mm', '30$', "wallPanel/wall109.png", "wallPanel", 0),
    new Product(102, '3D Wall panel Model for CNC and STL 3D printers 40', '28$', "wallPanel/wall110.png", "wallPanel", 0),

    new Product(101,'Milling Machine 1325 Cnc Router Aluminium Machine Mould Cnc Metal for Engraving Carving Metal Aluminum','$1,200','cncrouter/101.png','cnc-machine',30000000),
    new Product(102,'Blue Elephant CNC 2040 ATC CNC Router Machine 2000*4000mm with Rotary Device for Sale ','$5,200','cncrouter/102.png','cnc-machine',35000000),
    new Product(103,'China Factory Supplier 4 Axis 3d Cnc Carving Machine Wood Cnc 1325 1530 Atc Wood Cnc Router Engraver From alibaba','$1,200','cncrouter/103.png','cnc-machine',40000000),
    new Product(104,'Factory Direct Sale SM-1325 Woodworking Cnc Router Wood Carving Machine for Furniture Industry','$1,200','cncrouter/104.png','cnc-machine',61000000),
    new Product(105,'Cheap Wood Router 1325 1530 4x8 Cnc Router 3d 3 Axis Wood Cnc Machine 4 Axis Wood Design engrave Machine','$1,200','cncrouter/105.png','cnc-machine',52000000),
    new Product(106,'Milling Machine 1325 Cnc Router Aluminium Machine Mould Cnc Metal for Engraving Carving Metal Aluminum','$1,200','cncrouter/106.png','cnc-machine',40000000),
  
  ]
}
