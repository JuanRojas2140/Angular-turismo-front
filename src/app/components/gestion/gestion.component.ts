import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {
  public productRegisterForm: any;

  public submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.productRegisterForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(20)]],
      price: ['', [Validators.required]],
	    description: ['', [Validators.required, Validators.maxLength(60)]],
      image: ['', [Validators.required,]],
      review: ['', [Validators.required, Validators.maxLength(40)]],


    });


  }

  ngOnInit(): void {
  }
  public onSubmit(): void {

    this.submitted = true;

    if (this.productRegisterForm.valid) {

      const product: any = {
        name: this.productRegisterForm.get('name').value,
        price: this.productRegisterForm.get('price').value,
        description: this.productRegisterForm.get('description').value,
        image: this.productRegisterForm.get('image').value,
        review: this.productRegisterForm.get('review').value,
      };
      console.log(product);

      this.productRegisterForm.reset();
      this.submitted = false;
    }
  }


}
