import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-petit-carree',
  templateUrl: './petit-carree.component.html',
  styleUrls: ['./petit-carree.component.scss']
})
export class PetitCarreeComponent implements OnInit {
  @Input() color:string = ""
  @Output() changeColor = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onChangeColor($color: string) {
  this.changeColor.emit($color);
  }
}
