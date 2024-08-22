import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Category {
  id: string;
  name: string;
  description: string;
}

interface ApiResponse {
  ok: boolean;
  categories: Category[];
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']  // Correct property for styles
})
export class AdminComponent implements OnInit {
  categories: Category[] = [];
  loading: boolean = true;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.http.get<ApiResponse>('http://localhost:3000/api/v1/categories/').subscribe(
      (response) => {
        if (response.ok) {
          this.categories = response.categories;
          this.loading = false;
        } else {
          this.error = 'Error: Response not OK';
          this.loading = false;
        }
      },
      (error) => {
        this.error = 'Error fetching data: ' + error.message;
        this.loading = false;
      }
    );
  }
}
