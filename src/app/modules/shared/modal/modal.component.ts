import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() showModal = false;

  @Output() showModalChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  private _element: any = null;

  constructor(private _elementRef: ElementRef) { }

  ngOnInit(): void {
    this._element = this._elementRef.nativeElement;
    document.body.appendChild(this._element);
  }

  public closeModal(event: Event) {
    event.preventDefault();
    this.showModalChange.emit(false);
  }

}
