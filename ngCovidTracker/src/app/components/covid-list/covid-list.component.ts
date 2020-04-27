import { CovidService } from './../../services/covid.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Covid } from 'src/app/model/covid';
import { HttpHeaders } from '@angular/common/http';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-covid-list',
  templateUrl: './covid-list.component.html',
  styleUrls: ['./covid-list.component.css']
})
export class CovidListComponent implements OnInit {

  title = 'ngCovid';
  covids: Covid[] = [];
  selected: Covid = null;
  newCovid:  Covid = new Covid();
  editCovid: Covid = null;
  showComplete = false;
  addForm = null;
  mainPage = true;
  list = null;


  constructor(
    private covidSvc : CovidService,
    private currentRoute : ActivatedRoute,
    private router : Router
  ) { }




  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(54, 162, 235, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(54, 162, 235, 0.7)'
      ],
      hoverBackgroundColor: 'rgba(54, 162, 235, .2)',
      borderColor: 'rgba(54, 162, 235, 0.7)',
      hoverBorderColor: 'rgba(54, 162, 235, .2)',
      borderWidth: 0,
    }
  ];


  show_value(x): number {
    return document.getElementById('slider_value').innerHTML = x;
  }



  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'my-auth-token'
    })
  };

  ngOnInit(): void {
    if (!this.selected && this.currentRoute.snapshot.paramMap.get('id')) {
      this.covidSvc.show(parseInt(this.currentRoute.snapshot.paramMap.get('id'))).subscribe(
        data =>{
          this.selected = data;
        },
        err =>{
          this.router.navigateByUrl('notFound')
          console.error("CovidListComponent.reload() error" + err);
        }
      );

}else{
 this.reload();
}

  }

  getNumCovids():  number  {
    return this.covids.length;
  };

  displayCovid(covid : Covid): void {
    this.selected = covid;
    // this.router.navigateByUrl(`/covid/${covid.id}`)
  }

  displayTable() : void {
    this.selected = null;
     this.router.navigateByUrl('/covid');
  }

  addCovid(covid: Covid) {
    this.router.navigateByUrl('/covid')
    this.covidSvc.create(covid).subscribe(
      data => {

        this.reload();
        this.newCovid = new Covid();


      },
      err => console.log('AddFast got an error: ' + err)
    );

  }


  setEditCovid() {
    this.editCovid = Object.assign({}, this.selected);
  }

  updateCovid(covid: Covid, covidId: number) {
    console.log('in update comp ' + covid.id + '  ' + covid.state);
    this.covidSvc.update(covid,covid.id).subscribe(
      data => {

        this.editCovid = null;
        this.reload();

      },
      err => console.log('Update got an error: ' + err)
    );

  }

  deleteCovid(id: number) {
    console.log(id);
    this.covidSvc.delete(id).subscribe(
      newTodo => {
        this.reload();
      },
      err => console.log('Delete got an error: ' + err)
    );

  }


  reload(){
    this.covidSvc.index().subscribe(
      data=> this.covids = data,
      err => {
        console.error ('Error in the reload()'+ err);
      }

    )
  }

}
