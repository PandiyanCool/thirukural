import { Component, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: Object;
  title = 'app';

  displayedColumns = ['number', 'section', 'kural', 'chapter'];

  dataSource = new MatTableDataSource<Kurals>(KURAL_DETAILS);

  @ViewChild(MatPaginator) paginator: MatPaginator;


  coreData = [];

  ngOnInit(): void {
    this.loadData();
  }


  constructor(private dataService: DataService) { }

  loadData() {
    this.dataService.loadData().subscribe(data => {
      this.data = JSON.stringify(data);
      //  let parsedData: Kurals = <Kurals>this.data.kurals;

      //  console.log(this.data.chapters);

    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}


export interface RawFormat {
  chapters: Array<string>;
  sections: Array<string>;
}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface Kurals {
  chapter: string;
  kural: string[];
  number: number;
  section: string;
}



const KURAL_DETAILS: Kurals[] = [{
  chapter: 'கடவுள் வாழ்த்து',
  kural: ['அகர முதல எழுத்தெல்லாம் ஆதி', 'பகவன் முதற்றே உலகு.'],
  number: 1,
  section: 'அறத்துப்பால்'
}, {
  chapter: 'கடவுள் வாழ்த்து',
  kural: ['கற்றதனால் ஆய பயனென்கொல்',
    'வாலறிவன் நற்றாள் தொழாஅர் எனின்.'],
  number: 2,
  section: 'அறத்துப்பால்'
},
{
  chapter: 'கடவுள் வாழ்த்து',
  kural: ['மலர்மிசை ஏகினான் மாணடி சேர்ந்தார்',
    'நிலமிசை நீடுவாழ் வார்.'],
  number: 3,
  section: 'அறத்துப்பால்'
},
{
  chapter: 'கடவுள் வாழ்த்து',
  kural: ['வேண்டுதல் வேண்டாமை இலானடி சேர்ந்தார்க்கு',
    'யாண்டும் இடும்பை இல.'],
  number: 4,
  section: 'அறத்துப்பால்'
},
{
  chapter: 'கடவுள் வாழ்த்து',
  kural: ['இருள்சேர் இருவினையும் சேரா இறைவன்',
    'பொருள்சேர் புகழ்புரிந்தார் மாட்டு.'],
  number: 5,
  section: 'அறத்துப்பால்'
},
{
  chapter: 'கடவுள் வாழ்த்து',
  kural: ['பொறிவாயில் ஐந்தவித்தான் பொய்தீர் ஒழுக்க',
    'நெறிநின்றார் நீடுவாழ் வார்.'],
  number: 6,
  section: 'அறத்துப்பால்'
},
{
  chapter: 'கடவுள் வாழ்த்து',
  kural: ['தனக்குவமை இல்லாதான் தாள்சேர்ந்தார்க் கல்லால்',
    'மனக்கவலை மாற்றல் அரிது.'],
  number: 7,
  section: 'அறத்துப்பால்'
},
{
  chapter: 'கடவுள் வாழ்த்து',
  kural: ['அறவாழி அந்தணன் தாள்சேர்ந்தார்க் கல்லால்',
    'பிறவாழி நீந்தல் அரிது.'],
  number: 8,
  section: 'அறத்துப்பால்'
},
{
  chapter: 'கடவுள் வாழ்த்து',
  kural: ['கோளில் பொறியின் குணமிலவே எண்குணத்தான்',
    'தாளை வணங்காத் தலை.'],
  number: 9,
  section: 'அறத்துப்பால்'
},
{
  chapter: 'கடவுள் வாழ்த்து',
  kural: ['பிறவிப் பெருங்கடல் நீந்துவர் நீந்தார்',
    'இறைவன் அடிசேரா தார்.'],
  number: 10,
  section: 'அறத்துப்பால்'
}];


