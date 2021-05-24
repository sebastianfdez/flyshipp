import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'fs-shipper-form',
  templateUrl: 'fs-shipper-form.component.html'
})

export class FSShipperFormComponent implements OnInit {
  shipperForm = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    mail: ['', [Validators.required]],
    number: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() { }
}