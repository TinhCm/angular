import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-action-user',
    templateUrl: './action-user.component.html',
    styleUrls: ['./action-user.component.scss'],
    providers: [MessageService],
})
export class ActionUserComponent {
    constructor(
        private _service: DataService,
        private router: Router,
        private messageService: MessageService,
        private fb: FormBuilder,
    ) {}

    onSubmit(form: any): void {
        this._service.add(form).subscribe((res) => {
            this.router.navigate(['/list-user']);
        });
    }

    form!: FormGroup;

    ngOnInit(): void {
        this.createForm();
    }

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

    submit(): void {
        console.log(this.form.getRawValue());
        this._service.add(this.form.getRawValue()).subscribe((res) => {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Save User Success' });

            setTimeout(() => {
                this.router.navigate(['/list-user']);
            }, 1000);
        });
    }

    remove(i: number) {
        this.address.removeAt(i);
    }
}
