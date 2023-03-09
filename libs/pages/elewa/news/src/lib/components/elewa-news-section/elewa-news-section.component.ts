import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-news-section',
  templateUrl: './elewa-news-section.component.html',
  styleUrls: ['./elewa-news-section.component.scss'],
})
export class ElewaNewsSectionComponent {
  @Input() articlelists = [
      {image: 'https://thumbs.dreamstime.com/b/four-cute-cats-20650677.jpg', timestamp: '11:30', title: `And I'm grinding until I am tired`, body: '', type: 'elewa'},
      {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-N12wOMy-iPxJQOg_D_FHK5Qsu1NoHVNBHA&usqp=CAU', timestamp: '11:30', title: `Coz they said you aren't grinding`, body: '', type: 'iTalanta'},
      {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREzDhHtir8_-QwnyJ8633wNM1bEOEtPodDeg&usqp=CAU', timestamp: '12:13', title: `Until you are tired`, body: '', type: 'ventureLabs'},
      {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTbOdzw8GXUNHXLQ6oWrs6ffc5aRZnLtZHhw&usqp=CAU', timestamp: '10:56', title: `So I am grinding with my eyes wide`, body: '', type: 'press'},
      {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA0a7e50cvXyNQ1KcxZ2zpyX5DGlGVK13i6w&usqp=CAU', timestamp: '08:43', title: `looking to find a way through the day`, body: '', type: 'elewa'},
      {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp7cqvRsYWpqVJP-sjK_VkFWqYBF_guiKzMA&usqp=CAU', timestamp: '08:43', title: `And the light`, body: '', type: 'iTalanta'},
      {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtMBs2IlGh-6A0MUjuvzlEcgCjHKZwEIe1Jf-a4888atbcHQvsUfoTwxPjIQgw4whSOhE&usqp=CAU', timestamp: '08:43', title: `Dear Lord, you done took so many`, body: '', type: 'ventureLabs'},
      {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-N12wOMy-iPxJQOg_D_FHK5Qsu1NoHVNBHA&usqp=CAU', timestamp: '08:43', title: `Of my people I'm just wondering why`, body: '', type: 'press'},
      {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-N12wOMy-iPxJQOg_D_FHK5Qsu1NoHVNBHA&usqp=CAU', timestamp: '08:43', title: `You haven't taken my life`, body: '', type: 'elewa'},
      {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA0a7e50cvXyNQ1KcxZ2zpyX5DGlGVK13i6w&usqp=CAU', timestamp: '08:43', title: `Like, what the helll am I doing right`, body: '', type: 'iTalanta'},
      {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA0a7e50cvXyNQ1KcxZ2zpyX5DGlGVK13i6w&usqp=CAU', timestamp: '11:30', title: `And I'm grinding until I am tired`, body: '', type: 'elewa'},
      {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-N12wOMy-iPxJQOg_D_FHK5Qsu1NoHVNBHA&usqp=CAU', timestamp: '11:30', title: `Coz they said you aren't grinding`, body: '', type: 'iTalanta'},
      {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA0a7e50cvXyNQ1KcxZ2zpyX5DGlGVK13i6w&usqp=CAU', timestamp: '12:13', title: `Until you are tired`, body: '', type: 'ventureLabs'},
      {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtMBs2IlGh-6A0MUjuvzlEcgCjHKZwEIe1Jf-a4888atbcHQvsUfoTwxPjIQgw4whSOhE&usqp=CAU', timestamp: '10:56', title: `So I am grinding with my eyes wide`, body: '', type: 'press'},
      {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-N12wOMy-iPxJQOg_D_FHK5Qsu1NoHVNBHA&usqp=CAU', timestamp: '08:43', title: `looking to find a way through the day`, body: '', type: 'elewa'},
      {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA0a7e50cvXyNQ1KcxZ2zpyX5DGlGVK13i6w&usqp=CAU', timestamp: '08:43', title: `And the light`, body: '', type: 'iTalanta'},
      {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtMBs2IlGh-6A0MUjuvzlEcgCjHKZwEIe1Jf-a4888atbcHQvsUfoTwxPjIQgw4whSOhE&usqp=CAU', timestamp: '08:43', title: `Dear Lord, you done took so many`, body: '', type: 'ventureLabs'},
      {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-N12wOMy-iPxJQOg_D_FHK5Qsu1NoHVNBHA&usqp=CAU', timestamp: '08:43', title: `Of my people I'm just wondering why`, body: '', type: 'press'},
      {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-N12wOMy-iPxJQOg_D_FHK5Qsu1NoHVNBHA&usqp=CAU', timestamp: '08:43', title: `You haven't taken my life`, body: '', type: 'elewa'},
      {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtMBs2IlGh-6A0MUjuvzlEcgCjHKZwEIe1Jf-a4888atbcHQvsUfoTwxPjIQgw4whSOhE&usqp=CAU', timestamp: '08:43', title: `Like, what the helll am I doing right`, body: '', type: 'iTalanta'}
    ]
}
