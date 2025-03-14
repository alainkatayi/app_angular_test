import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  } from 'stream';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  @Input() search = "Initial";
  @Output() searchChange = new EventEmitter<string>()

  @Output() searchEventClicked = new EventEmitter()
  searchClick(){
    this.searchEventClicked.emit();
  }
  updateChange(value: string){
    this.searchChange.emit(value);
  }
}
