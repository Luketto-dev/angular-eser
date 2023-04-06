import { Injectable } from '@angular/core';
import { Comic } from '../classes/Comic';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {
  comics : Comic [] = [
    {
      id : 1,
      title : "Action Comics #1000: The Deluxe Edition",
      description : "The celebration of 1,000 issues of Action Comics continues with a new, Deluxe Edition of the amazing comic that won raves when it hit comics shops in April! This hardcover includes all the stories from that issue, plus the tale by writer Paul Levitz and artist Neal Adams that appeared in the Action Comics: 80 Years Of Superman hardcover, as well as all the variant covers, design sketches by Jim Lee for Superman’s new look, scripts for the stories, the original art from the lost story featuring art by Curt Swan and more! Plus: a complete reprint of the stories that started it all—the Superman stories Action Comics #1 and 2 from 1938!",
      thumb : 'https://picsum.photos/200/200',
      price : "$19.99",
      series : "Action Comics",
      sale_date : "2018-10-02",
      type : "comic book",
    },
    {
      id : 2,
      title : "American Vampire 1976 #1",
      description : "The celebration of 1,000 issues of Action Comics continues with a new, Deluxe Edition of the amazing comic that won raves when it hit comics shops in April! This hardcover includes all the stories from that issue, plus the tale by writer Paul Levitz and artist Neal Adams that appeared in the Action Comics: 80 Years Of Superman hardcover, as well as all the variant covers, design sketches by Jim Lee for Superman’s new look, scripts for the stories, the original art from the lost story featuring art by Curt Swan and more! Plus: a complete reprint of the stories that started it all—the Superman stories Action Comics #1 and 2 from 1938!",
      thumb : "https://picsum.photos/200/200",
      price : "$19.99",
      series : "Action Comics",
      sale_date : "2018-10-02",
      type : "comic book",
    },
    {
      id : 3,
      title : "Aquaman Vol. 4: Underworld",
      description : "The celebration of 1,000 issues of Action Comics continues with a new, Deluxe Edition of the amazing comic that won raves when it hit comics shops in April! This hardcover includes all the stories from that issue, plus the tale by writer Paul Levitz and artist Neal Adams that appeared in the Action Comics: 80 Years Of Superman hardcover, as well as all the variant covers, design sketches by Jim Lee for Superman’s new look, scripts for the stories, the original art from the lost story featuring art by Curt Swan and more! Plus: a complete reprint of the stories that started it all—the Superman stories Action Comics #1 and 2 from 1938!",
      thumb : "https://picsum.photos/200/200",
      price : "$19.99",
      series : "Action Comics",
      sale_date : "2018-10-02",
      type : "comic book",
    },
    {
      id : 4,
      title : "Batgirl #1",
      description : "The celebration of 1,000 issues of Action Comics continues with a new, Deluxe Edition of the amazing comic that won raves when it hit comics shops in April! This hardcover includes all the stories from that issue, plus the tale by writer Paul Levitz and artist Neal Adams that appeared in the Action Comics: 80 Years Of Superman hardcover, as well as all the variant covers, design sketches by Jim Lee for Superman’s new look, scripts for the stories, the original art from the lost story featuring art by Curt Swan and more! Plus: a complete reprint of the stories that started it all—the Superman stories Action Comics #1 and 2 from 1938!",
      thumb : "https://picsum.photos/200/200",
      price : "$19.99",
      series : "Action Comics",
      sale_date : "2018-10-02",
      type : "comic book",
    },
    {
      id : 5,
      title : "Batman #56",
      description : "The celebration of 1,000 issues of Action Comics continues with a new, Deluxe Edition of the amazing comic that won raves when it hit comics shops in April! This hardcover includes all the stories from that issue, plus the tale by writer Paul Levitz and artist Neal Adams that appeared in the Action Comics: 80 Years Of Superman hardcover, as well as all the variant covers, design sketches by Jim Lee for Superman’s new look, scripts for the stories, the original art from the lost story featuring art by Curt Swan and more! Plus: a complete reprint of the stories that started it all—the Superman stories Action Comics #1 and 2 from 1938!",
      thumb : "https://picsum.photos/200/200",
      price : "$19.99",
      series : "Action Comics",
      sale_date : "2018-10-02",
      type : "comic book",
    },
    {
      id : 6,
      title : "Batman Beyond #1",
      description : "The celebration of 1,000 issues of Action Comics continues with a new, Deluxe Edition of the amazing comic that won raves when it hit comics shops in April! This hardcover includes all the stories from that issue, plus the tale by writer Paul Levitz and artist Neal Adams that appeared in the Action Comics: 80 Years Of Superman hardcover, as well as all the variant covers, design sketches by Jim Lee for Superman’s new look, scripts for the stories, the original art from the lost story featuring art by Curt Swan and more! Plus: a complete reprint of the stories that started it all—the Superman stories Action Comics #1 and 2 from 1938!",
      thumb :"https://picsum.photos/200/200",
      price : "$19.99",
      series : "Action Comics",
      sale_date : "2018-10-02",
      type : "comic book",
    },
    {
      id : 7,
      title : "Batman/Superman #1",
      description : "The celebration of 1,000 issues of Action Comics continues with a new, Deluxe Edition of the amazing comic that won raves when it hit comics shops in April! This hardcover includes all the stories from that issue, plus the tale by writer Paul Levitz and artist Neal Adams that appeared in the Action Comics: 80 Years Of Superman hardcover, as well as all the variant covers, design sketches by Jim Lee for Superman’s new look, scripts for the stories, the original art from the lost story featuring art by Curt Swan and more! Plus: a complete reprint of the stories that started it all—the Superman stories Action Comics #1 and 2 from 1938!",
      thumb : "https://picsum.photos/200/200",
      price : "$19.99",
      series : "Action Comics",
      sale_date : "2018-10-02",
      type : "comic book",
    },
    {
      id : 8,
      title : "Batman/Superman Annual #1",
      description : "The celebration of 1,000 issues of Action Comics continues with a new, Deluxe Edition of the amazing comic that won raves when it hit comics shops in April! This hardcover includes all the stories from that issue, plus the tale by writer Paul Levitz and artist Neal Adams that appeared in the Action Comics: 80 Years Of Superman hardcover, as well as all the variant covers, design sketches by Jim Lee for Superman’s new look, scripts for the stories, the original art from the lost story featuring art by Curt Swan and more! Plus: a complete reprint of the stories that started it all—the Superman stories Action Comics #1 and 2 from 1938!",
      thumb : "https://picsum.photos/200/200",
      price : "$19.99",
      series : "Action Comics",
      sale_date : "2018-10-02",
      type : "comic book",
    },
    {
      id : 9,
      title : "Batman: The Joker War Zone #1",
      description : "The celebration of 1,000 issues of Action Comics continues with a new, Deluxe Edition of the amazing comic that won raves when it hit comics shops in April! This hardcover includes all the stories from that issue, plus the tale by writer Paul Levitz and artist Neal Adams that appeared in the Action Comics: 80 Years Of Superman hardcover, as well as all the variant covers, design sketches by Jim Lee for Superman’s new look, scripts for the stories, the original art from the lost story featuring art by Curt Swan and more! Plus: a complete reprint of the stories that started it all—the Superman stories Action Comics #1 and 2 from 1938!",
      thumb : "https://picsum.photos/200/200",
      price : "$19.99",
      series : "Action Comics",
      sale_date : "2018-10-02",
      type : "comic book",
    },
    {
      id : 10,
      title : "Batman: Three Jokers #1",
      description : "The celebration of 1,000 issues of Action Comics continues with a new, Deluxe Edition of the amazing comic that won raves when it hit comics shops in April! This hardcover includes all the stories from that issue, plus the tale by writer Paul Levitz and artist Neal Adams that appeared in the Action Comics: 80 Years Of Superman hardcover, as well as all the variant covers, design sketches by Jim Lee for Superman’s new look, scripts for the stories, the original art from the lost story featuring art by Curt Swan and more! Plus: a complete reprint of the stories that started it all—the Superman stories Action Comics #1 and 2 from 1938!",
      thumb :  "https://picsum.photos/200/200",
      price : "$19.99",
      series : "Action Comics",
      sale_date : "2018-10-02",
      type : "comic book",
    },
    {
      id : 11,
      title : "Batman: White Knight Presents: Harley Quinn #1",
      description : "The celebration of 1,000 issues of Action Comics continues with a new, Deluxe Edition of the amazing comic that won raves when it hit comics shops in April! This hardcover includes all the stories from that issue, plus the tale by writer Paul Levitz and artist Neal Adams that appeared in the Action Comics: 80 Years Of Superman hardcover, as well as all the variant covers, design sketches by Jim Lee for Superman’s new look, scripts for the stories, the original art from the lost story featuring art by Curt Swan and more! Plus: a complete reprint of the stories that started it all—the Superman stories Action Comics #1 and 2 from 1938!",
      thumb : "https://picsum.photos/200/200",
      price : "$19.99",
      series : "Action Comics",
      sale_date : "2018-10-02",
      type : "comic book",
    },
    {
      id : 12,
      title : "Catwoman Vol. 1: Copycats",
      description : "The celebration of 1,000 issues of Action Comics continues with a new, Deluxe Edition of the amazing comic that won raves when it hit comics shops in April! This hardcover includes all the stories from that issue, plus the tale by writer Paul Levitz and artist Neal Adams that appeared in the Action Comics: 80 Years Of Superman hardcover, as well as all the variant covers, design sketches by Jim Lee for Superman’s new look, scripts for the stories, the original art from the lost story featuring art by Curt Swan and more! Plus: a complete reprint of the stories that started it all—the Superman stories Action Comics #1 and 2 from 1938!",
      thumb : "https://picsum.photos/200/200",
      price : "$19.99",
      series : "Action Comics",
      sale_date : "2018-10-02",
      type : "comic book",
    },
  ];

  constructor() {

    
  }

  getComics() {
    return this.comics;
  }
}
