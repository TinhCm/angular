import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-edit-user',
    templateUrl: './edit-user.component.html',
    styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent {
    constructor(
        private _service: DataService,
        private activatedRoute: ActivatedRoute,
        public _apiservie: DataService,
        private fb: FormBuilder,
        private router: Router,
    ) {}

    user: any;
    getAddress: any;

    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this._apiservie.getdataUser(params['id']).subscribe((res) => {
                this.user = res;
                this.setValue();
                console.log('Danh sach: ' + this.user);
            });
        });

        this.createForm();
    }

    submit(): void {
        console.log(this.form.getRawValue());
        console.log('KQ: ' + this.user.id);

        this._service.edit(this.form.getRawValue(), this.user.id).subscribe((res) => {
            this.router.navigate(['/list-user']);
        });
    }

    form!: FormGroup;

    createForm() {
        this.form = this.fb.group({
            name: [null],
            age: [null],
            decription: [null],
            address: this.fb.array([this.addressForm()]),
        });
    }

    get address() {
        return this.form.get('address') as FormArray;
    }

    addressForm() {
        return this.fb.group({
            phuong: [null],
            quan: [null],
            thanhPho: [null],
        });
    }

    addNewAddr() {
        this.address.push(this.addressForm());
    }

    remove(i: number) {
        this.address.removeAt(i);
    }

    setValue() {
        console.log(this.user.address);
        this.form.setValue({
            name: this.user.name,
            age: this.user.age,
            decription: this.user.decription,
            address: this.user.address,
        });
    }
}
