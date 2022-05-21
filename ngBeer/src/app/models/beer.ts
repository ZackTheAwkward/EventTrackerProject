export class Beer {
  id: number;
  company: string;
  name: string;
  abv: number;
  type: string;
  description: string;
  imageUrl: string;

constructor(
  id: number = 0,
  company: string = '',
  name: string = '',
  abv: number = 0,
  type: string = '',
  description: string = '',
  imageUrl: string = ''
) {

  this.id = id;
  this.company = company;
  this.name = name;
  this.abv = abv;
  this.type = type;
  this.description = description;
  this.imageUrl = imageUrl;


}


}

