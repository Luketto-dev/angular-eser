import { ComicInterface } from "../interfaces/comic";

export class Comic implements ComicInterface {
    id : number
    title : string
    description : string
    thumb : string
    price : string
    series : string
    sale_date : string
    type : string


    constructor(){
        this.id = 0;
        this.title = "";
        this.description = "";
        this.thumb = "";
        this.price = "";
        this.series = "";
        this.sale_date = "";
        this.type = "";

    }
}