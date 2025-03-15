export class Product {
    private static _id = 101;
    id: number = 101;
    title: string = '';
    category: string = '';
    price: string = '';
    pic: string = '';
    tprice: number = 0;
    count: number = 1;
    constructor(id : number,title: string, price: string, pic: string, category: string, tprice: number) {
        this.id = id;
        this.title = title;
        this.category = category
        this.price = price;
        this.tprice = tprice;
        this.pic = pic;
    }





}