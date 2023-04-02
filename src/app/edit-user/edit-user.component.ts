import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-edit-user',
    templateUrl: './edit-user.component.html',
    styleUrls: ['./edit-user.component.scss'],
    providers: [MessageService],
})
export class EditUserComponent implements OnInit {
    constructor(
        private _service: DataService,
        private activatedRoute: ActivatedRoute,
        public _apiservie: DataService,
        private fb: FormBuilder,
        private router: Router,
        private messageService: MessageService,
    ) {}

    user: any;

    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this._apiservie.getdataUser(params['id']).subscribe((res) => {
                this.user = res;
                this.setValue();
            });
        });

        this.createForm();
    }

    submit(): void {
        this._service.edit(this.form.getRawValue(), this.user.id).subscribe((res) => {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Save User Success' });
            setTimeout(() => {
                this.router.navigate(['/list-user']);
            }, 1000);
        });
    }

    form!: FormGroup;

    createForm() {
        this.form = this.fb.group({
            name: [null],
            age: [null],
            decription: [null],
            address: this.fb.array([]),
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
        this.user.address.map((addr: any) => {
            const addressArray = this.fb.group({
                phuong: addr.phuong,
                quan: addr.quan,
                thanhPho: addr.thanhPho,
            });

            this.address.push(addressArray);
        });

        this.form.patchValue({
            name: this.user.name,
            age: this.user.age,
            decription: this.user.decription,
        });
    }
}
