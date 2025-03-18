export class News {
    id: number = 1001;
    title: string = "Title";
    img: string = "";
    content: string = "content";
    constructor(Id: number, Title: string, Img: string, Content: string) {
        this.id = Id;
        this.title = Title;
        this.img = Img;
        this.content = Content;
    }
}