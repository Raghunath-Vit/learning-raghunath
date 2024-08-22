import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface Category {
  _id: string;
  name: string;
}

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  productForm: FormGroup;
  loading: boolean = false;
  error: string | null = null;
  categories: Category[] = [];
  private apiUrl = 'http://localhost:3000/api/v1/products/';
  private categoriesUrl = 'http://localhost:3000/api/v1/categories/';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      code: ['', Validators.required],
      excerpt: ['', Validators.required],
      description: [''],
      category: [null, Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      stock: [0, [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories(): void {
    this.http.get<{ ok: boolean, categories: Category[] }>(this.categoriesUrl).subscribe(
      (response) => {
        if (response.ok) {
          this.categories = response.categories;
        } else {
          console.error('Error fetching categories');
        }
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.productForm.invalid) {
      return;
    }

    this.loading = true;

    this.http.post(this.apiUrl, this.productForm.value).subscribe(
      (response) => {
        this.loading = false;
        this.router.navigate(['/product-home']); // Redirect on successful submission
      },
      (error) => {
        this.loading = false;
        this.error = 'Error submitting form: ' + error.message;
      }
    );
  }
}
