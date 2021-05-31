import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FirebaseService } from '../../../shared/services/firebase.service';
import { ContactShipper } from '../../models/contact-shipper';
import { catchError, delay, take } from 'rxjs/operators';
import { of } from 'rxjs';
import { SnackBarService } from '../../../shared/services/snack-bar.service';

@Component({
  selector: 'fs-shipper-form',
  templateUrl: 'fs-shipper-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FSShipperFormComponent implements OnInit {
  loadingSubmit = false;
  submitSuccess = false;
  submitError = false;

  shipperForm = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    mail: ['', [Validators.required]],
    number: ['', [Validators.required]],
    rut: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private firebaseService: FirebaseService,
    private snackbarService: SnackBarService,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit() { }

  submitForm(event: Event) {
    event.preventDefault();
    this.loadingSubmit = true;
    this.submitError = false;
    this.submitSuccess = false;
    const shipper: ContactShipper = {
      name: this.shipperForm.value.firstName,
      lastName: this.shipperForm.value.lastName,
      mail: this.shipperForm.value.mail,
      number: this.shipperForm.value.number,
    };
    this.firebaseService.addToCollection<ContactShipper>(shipper, 'contact-shippers').pipe(
      catchError((error) => {
        console.log(error);
        return of(null);
      }),
      delay(1000),
      take(1),
    ).subscribe((doc) => {
      console.log(doc);
      this.loadingSubmit = false;
      if (doc) {
        this.snackbarService.showMessage('Gracias por postular! Te contactaremos pronto!');
        this.submitSuccess = true;
      } else {
        const ref = this.snackbarService.showError('Ha ocurrido un error. Por favor intenta mas tarde');
        console.log(ref);
        ref.afterOpened().subscribe((s) => console.log(s));
        this.submitError = true;
      }
      this.cdr.detectChanges();
    });
  }
}