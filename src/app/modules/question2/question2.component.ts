import { Component, OnInit } from '@angular/core';
import {data} from "../../models/static/data";

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.scss']
})
export class Question2Component implements OnInit {

  get filteredResult(): any[] {
    return this._filteredResult;
  }

  get showModal(): boolean {
    return this._showModal;
  }

  set showModal(value: boolean) {
    this._showModal = value;
  }

  get availableSlots(): number {
    return this._tableData.filter((_data) => !!_data.is_slot_available).length;
  }

  private _tableData = data;

  private _showModal = false;

  private _filteredResult = [];

  constructor() { }

  ngOnInit(): void {
    this.filter();
  }

  public filter(search = '') {
    if (!!search) {
      this._filteredResult = this._tableData.filter((_data) => {
        return _data.site_name.toLowerCase().match(search.toLowerCase().trim());
      });
    } else {
      this._filteredResult = this._tableData;
    }
  }

  public bookSlot(event: Event, index: number) {
    event.preventDefault();
    this._showModal = true;
    this._tableData[index].is_slot_available = false;
  }

}
