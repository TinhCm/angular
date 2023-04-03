import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { ConfirmEventType, ConfirmationService, MenuItem, MessageService } from 'primeng/api';

@Component({
    selector: 'app-list-user',
    templateUrl: './list-user.component.html',
    styleUrls: ['./list-user.component.scss'],
    providers: [MessageService, ConfirmationService],
})
export class ListUserComponent implements OnInit {
    newdata: any;
    items: MenuItem[] = [];

    home!: MenuItem;
    constructor(
        public _apiservie: DataService,
        private _service: DataService,
        private messageService: MessageService,
        private router: Router,
        private confirmationService: ConfirmationService,
    ) {}

    ngOnInit() {
        this._apiservie.getdata().subscribe((res) => {
            this.newdata = res;
        });

        this.items = [{ label: 'List User', routerLink: '/list-user' }];
        this.home = { icon: 'pi pi-home', routerLink: '/' };
    }

    onClick(item: any): void {
        this._service.sendMessage(item);
        this.router.navigate([`/detail/${item.id}`]);
    }

    addUser() {
        this.router.navigate(['/add-user']);
    }

    delete(item: any): void {
        // this._service.delete(item.id).subscribe((res) => {
        //     this._apiservie.getdata().subscribe((res) => {
        //         this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Delete User Success' });
        //         setTimeout(() => {
        //             this.newdata = res;
        //         }, 1000);
        //     });
        // });

        this.confirmationService.confirm({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            accept: () => {
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });
            },
            reject: (type: any) => {
                switch (type) {
                    case ConfirmEventType.REJECT:
                        this.messageService.add({
                            severity: 'error',
                            summary: 'Rejected',
                            detail: 'You have rejected',
                        });
                        break;
                    case ConfirmEventType.CANCEL:
                        this.messageService.add({
                            severity: 'warn',
                            summary: 'Cancelled',
                            detail: 'You have cancelled',
                        });
                        break;
                }
            },
        });
    }

    edit(item: any) {
        this._service.sendMessage(item);
        this.router.navigate([`/edit-user/${item.id}`]);
    }
}
