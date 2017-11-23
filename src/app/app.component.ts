import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: Object;
  title = 'app';



  coreData = [];

  ngOnInit(): void {
    this.loadData();
  }


  constructor(private dataService: DataService) { }

  loadData() {
    this.dataService.loadData().subscribe(data => {
      this.data = JSON.stringify(data);
      let parsedData: RawFormat = <RawFormat>this.data;

      console.log(parsedData);
    });
  }

}


export interface RawFormat {
  chapters: Array<string>;
  sections: Array<string>;
}

