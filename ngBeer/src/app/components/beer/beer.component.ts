import { BeerService } from './../../services/beer.service';
import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/models/beer';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

title: string = 'Beer';

selected: Beer | null = null;

editBeer: Beer | null = null;

newBeer: Beer = new Beer();

beerCount: Beer[] = [];

beers: Beer[] = [];




  constructor(private beerServ: BeerService) { }

  ngOnInit(): void {
    this.loadBeer();
  }

  reload() {
    this.beerServ.index().subscribe(
      (data) => (this.beers = data),
      (err) => console.error(err)
    );
  }
loadBeer() {
  this.beerServ.index().subscribe(
    success => this.beers = success,
    err => console.log('Observable got an error' + err)
  );
}
setBeer(beer: Beer) {
  this.selected = beer;
}

createBeer(beer: Beer){
  this.beerServ.create(beer).subscribe(
    data => {
      this.loadBeer();
      this.newBeer = new Beer();
    },
    err => console.log('Observable got an error' + err)
  )
}

setEditBeer(){
  this.editBeer = Object.assign({}, this.selected);
}

updateBeer(beer: Beer) {
  this.beerServ.update(beer).subscribe(
    (data) => {
      this.reload();
      this.editBeer = null;
      if (this.selected) {
        this.selected = Object.assign({}, beer);
      }
    },
    (err) => console.error(err)
  );

}
deleteBeer(id: number) {
  this.beerServ.destroy(id).subscribe(
    (data) => this.reload(),
    (err) => console.error(err)
  );
}




}
