import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TopblogsComponent } from "../topblogs/topblogs.component";
import { FormsModule } from '@angular/forms';
import { BlogService, User } from '../blog.services';
import { KeyValue } from '@angular/common';

@Component({
    standalone: true,
    selector: 'app-blog',
    templateUrl: 'blogcard.component.html',
    providers: [],
    styleUrls: ['./blogcard.component.scss'],
    imports: [CommonModule, RouterModule, TopblogsComponent,FormsModule]
})
export class CardComponent implements OnInit {
  blogs: any = [];
  blogsrecent: any = [];
  daysAgo: number[] = [];
  alltags: any = []; // Yayınlanalı kaç gün geçtiğini tutacak dizi
  tagcounts: any = [];
  constructor(private blogService: BlogService) { }

  name!: User;
  ngAfterViewInit(): void {
    this.blogService.whoami().subscribe((data: any) => {

      return this.name = data;
    });
  }
  
  tagValueComparator = (a: KeyValue<string, number>, b: KeyValue<string, number>): number => {
    return b.value - a.value;
  }
  ngOnInit(): void {

     // use blogservice.getalltags func
     

    

    this.blogService.getBlogs().subscribe(blogs => {

      this.blogService.getAllTags().subscribe(tags => {
        this.alltags = tags;
        console.log(this.alltags);
  
        let tagCounts: { [tag: string]: number } = {};
  
        this.alltags.forEach((tag: string) => {
          let count = blogs.filter(blog => blog.tags.includes(tag)).length;
          tagCounts[tag] = count;
        });
  
        this.tagcounts = tagCounts;
      });
      

    
   
      blogs.forEach((blog: any) => {
        if (blog.category == "0") {
          blog.category = "Teknoloji";
        }
        else if (blog.category == "1") {
          blog.category = "Bilim";
        }
        else if (blog.category == "2") {
          blog.category = "İşletme";
        }
        else if (blog.category == "3") {
          blog.category = "Diğer";
        }
      });

      
     
      blogs.forEach((blog: any) => {
        console.log(blog);
        this.blogService.getUser(blog.author).subscribe((data: any) => {
          blog.author = data.username;
        });
        blog.content = blog.content.replace(/<img[^>]*>/g, '');
        if (blog.content.length > 500) {
          blog.content = blog.content.substring(0, 500) + "...";
        }
      });
      //the times format 2024-02-19T00:00:00.000Z to 2024-02-19
      // Ay isimlerini içeren bir dizi oluştur
      const currentDate = new Date(); // Şu anki tarihi al
      const months = [
        "Ocak",
        "Şubat",
        "Mart",
        "Nisan",
        "Mayıs",
        "Haziran",
        "Temmuz",
        "Ağustos",
        "Eylül",
        "Ekim",
        "Kasım",
        "Aralık"
      ];

      // Blogları döngüyle işle ve her birinin yayın tarihini güncelle
      blogs.forEach((blog: any) => {
        // Yayın tarihini "T" karakterine göre ayır ve yıl, ay ve gün kısımlarını al
        const [year, month, day] = blog.publishDate.split("T")[0].split("-");

        // Ayı sayıdan isme dönüştür ve blog nesnesine kaydet
        blog.publishDate = `${parseInt(day)} ${months[parseInt(month) - 1]} ${year}`;
      });

      this.blogs = blogs;
    });



  }


}
