import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuItem, MessageService, TreeNode } from 'primeng/api';

@Component({
    selector: 'app-action-user',
    templateUrl: './action-user.component.html',
    styleUrls: ['./action-user.component.scss'],
    providers: [MessageService],
})
export class ActionUserComponent {
    form!: FormGroup;
    messageError: string[] = [];
    items: MenuItem[] = [];
    home!: MenuItem;

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

    ngOnInit(): void {
        this.createForm();
        this.items = [{ label: 'List Users', routerLink: '/list-user' }, { label: 'Add User' }];

        this.home = { icon: 'pi pi-home', routerLink: '/' };
    }

    createForm() {
        this.form = this.fb.group({
            name: [null, Validators.required],
            age: [null, Validators.required],
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

    listErr() {
        if (!this.form.controls['name'].valid) {
            this.messageError.push('Vui lòng nhập tên');
        }
        if (!this.form.controls['age'].valid) {
            this.messageError.push('Vui lòng nhập tuổi');
        }
    }

    submit(): void {
        this.listErr();
        if (this.messageError.length === 0) {
            this._service.add(this.form.getRawValue()).subscribe((res) => {
                this.showMessage('Save Success', 'Success', 'success');
                setTimeout(() => {
                    this.form.reset();
                }, 1000);
            });
        } else {
            for (let i of this.messageError) {
                this.showMessage(i, 'Error', 'error');
            }
            this.messageError.splice(0);
        }
    }

    remove(i: number) {
        this.address.removeAt(i);
    }

    showMessage(messasge: any, summary: any, severity: any) {
        this.messageService.add({ severity: severity, summary: summary, detail: messasge });
    }
}
