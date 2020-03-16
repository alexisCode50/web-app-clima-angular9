import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  location = { cityName: 'Merida' };
  weather = undefined;

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getClima(this.location.cityName)
  }

  getClima(cityName: string){
    this.api.getWeather(cityName)
    .subscribe(res => {
      console.log(res)
      this.weather = res;
    },
    err => {
      console.log(err)
    }
    )
  }

  submitLocation(cityName: HTMLInputElement) {
    if (cityName.value) {
      this.getClima(cityName.value);

      cityName.value = '';
    } else {
      alert('Please. Insert some values');
    }
    cityName.focus();
    return false;
  }

}
