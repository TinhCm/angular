import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent {
  constructor(private _service: DataService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    public _apiservie: DataService) {}

    user: any;

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => { 
          this._apiservie.getdataUser(params['id']).subscribe((res) => {
              this.user = res;
          });
      });
    }

  onSubmit(form: any): void {
    this._service.edit(this.user, this.user.id).subscribe(res => {
      this.router.navigate(['/list-user']);
    });
}
}
