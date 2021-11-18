import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-page-center',
  templateUrl: './page-center.component.html',
  styleUrls: ['./page-center.component.scss']
})
export class PageCenterComponent implements OnInit {
  @ViewChild('body',{static: false}) body: ElementRef | undefined;
  constructor(
    private _renderer: Renderer2
  ) { }
  ngOnInit(): void {
  }

  changeBackgroundColor(color: string){
  this._renderer.setStyle(this.body?.nativeElement,'background-color',color);
  }
}
