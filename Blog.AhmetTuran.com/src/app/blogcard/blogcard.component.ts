import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TopblogsComponent } from "../topblogs/topblogs.component";
import { BlogService, User } from '../blog.services';

@Component({
    standalone: true,
    selector: 'app-blog',
    templateUrl: 'blogcard.component.html',
    providers: [],
    styleUrls: ['./blogcard.component.scss'],
    imports: [CommonModule, RouterModule, TopblogsComponent]
})
export class CardComponent implements OnInit {
  blogs: any = [];
  blogsrecent: any = [];
  daysAgo: number[] = []; // Yayınlanalı kaç gün geçtiğini tutacak dizi

  constructor(private blogService: BlogService) { }

  name!: User;
  ngAfterViewInit(): void {
    this.blogService.whoami().subscribe((data: any) => {

      return this.name = data;
    });
  }

  ngOnInit(): void {

    this.blogService.getBlogs().subscribe(blogs => {
   
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
