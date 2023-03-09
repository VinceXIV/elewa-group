import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-news-section',
  templateUrl: './elewa-news-section.component.html',
  styleUrls: ['./elewa-news-section.component.scss'],
})
export class ElewaNewsSectionComponent {
  @Input() articlelists = [
      {image: 'https://thumbs.dreamstime.com/b/four-cute-cats-20650677.jpg', timestamp: '11:30', title: `And I'm grinding until I am tired`, body: '', topic: 'elewa'},
      {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-N12wOMy-iPxJQOg_D_FHK5Qsu1NoHVNBHA&usqp=CAU', timestamp: '11:30', title: `Coz they said you aren't grinding`, body: '', topic: 'italanta'},
      {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREzDhHtir8_-QwnyJ8633wNM1bEOEtPodDeg&usqp=CAU', timestamp: '12:13', title: `Until you are tired`, body: '', topic: 'venture-labs'},
      {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTbOdzw8GXUNHXLQ6oWrs6ffc5aRZnLtZHhw&usqp=CAU', timestamp: '10:56', title: `So I am grinding with my eyes wide`, body: '', topic: 'press'},
      {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA0a7e50cvXyNQ1KcxZ2zpyX5DGlGVK13i6w&usqp=CAU', timestamp: '08:43', title: `looking to find a way through the day`, body: '', topic: 'elewa'},
      {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp7cqvRsYWpqVJP-sjK_VkFWqYBF_guiKzMA&usqp=CAU', timestamp: '08:43', title: `And the light`, body: '', topic: 'italanta'},
      {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtMBs2IlGh-6A0MUjuvzlEcgCjHKZwEIe1Jf-a4888atbcHQvsUfoTwxPjIQgw4whSOhE&usqp=CAU', timestamp: '08:43', title: `Dear Lord, you done took so many`, body: '', topic: 'venture-labs'},
      {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-N12wOMy-iPxJQOg_D_FHK5Qsu1NoHVNBHA&usqp=CAU', timestamp: '08:43', title: `Of my people I'm just wondering why`, body: '', topic: 'press'},
      {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-N12wOMy-iPxJQOg_D_FHK5Qsu1NoHVNBHA&usqp=CAU', timestamp: '08:43', title: `You haven't taken my life`, body: '', topic: 'elewa'},
      {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA0a7e50cvXyNQ1KcxZ2zpyX5DGlGVK13i6w&usqp=CAU', timestamp: '08:43', title: `Like, what the helll am I doing right`, body: '', topic: 'italanta'},
      {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA0a7e50cvXyNQ1KcxZ2zpyX5DGlGVK13i6w&usqp=CAU', timestamp: '11:30', title: `And I'm grinding until I am tired`, body: '', topic: 'elewa'},
      {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-N12wOMy-iPxJQOg_D_FHK5Qsu1NoHVNBHA&usqp=CAU', timestamp: '11:30', title: `Coz they said you aren't grinding`, body: '', topic: 'italanta'},
      {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA0a7e50cvXyNQ1KcxZ2zpyX5DGlGVK13i6w&usqp=CAU', timestamp: '12:13', title: `Until you are tired`, body: '', topic: 'venture-labs'},
      {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtMBs2IlGh-6A0MUjuvzlEcgCjHKZwEIe1Jf-a4888atbcHQvsUfoTwxPjIQgw4whSOhE&usqp=CAU', timestamp: '10:56', title: `So I am grinding with my eyes wide`, body: '', topic: 'press'},
      {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-N12wOMy-iPxJQOg_D_FHK5Qsu1NoHVNBHA&usqp=CAU', timestamp: '08:43', title: `looking to find a way through the day`, body: '', topic: 'elewa'},
      {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA0a7e50cvXyNQ1KcxZ2zpyX5DGlGVK13i6w&usqp=CAU', timestamp: '08:43', title: `And the light`, body: '', topic: 'italanta'},
      {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtMBs2IlGh-6A0MUjuvzlEcgCjHKZwEIe1Jf-a4888atbcHQvsUfoTwxPjIQgw4whSOhE&usqp=CAU', timestamp: '08:43', title: `Dear Lord, you done took so many`, body: '', topic: 'venture-labs'},
      {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-N12wOMy-iPxJQOg_D_FHK5Qsu1NoHVNBHA&usqp=CAU', timestamp: '08:43', title: `Of my people I'm just wondering why`, body: '', topic: 'press'},
      {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-N12wOMy-iPxJQOg_D_FHK5Qsu1NoHVNBHA&usqp=CAU', timestamp: '08:43', title: `You haven't taken my life`, body: '', topic: 'elewa'},
      {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtMBs2IlGh-6A0MUjuvzlEcgCjHKZwEIe1Jf-a4888atbcHQvsUfoTwxPjIQgw4whSOhE&usqp=CAU', timestamp: '08:43', title: `Like, what the helll am I doing right`, body: '', topic: 'italanta'}
    ]

  activeTopic = 'all-news'

  getNews() :{image: string, timestamp: string, title: string, body: string}[] {
    if(this.activeTopic == 'all-news'){
      return this.articlelists;
    }

    return this.articlelists.filter(article => {
      return article.topic == this.activeTopic;
    })
  }

  makeActive(topic: string){
    this.activeTopic = topic
    console.log(this.getNews())
  }
}
