import { ItemService } from './../../services/item.service';
import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[];
  editState: boolean = false;
  itemToEdit: Item;

  constructor(public itemService: ItemService ) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
    })
  }

  updateItem(item: Item){
    this.itemService.updateItem(item);
    this.clearState()

  }

  deleteItem(even:any, item:Item){
    this.clearState();
    this.itemService.deleteItem(item);
  }

  editItem($event, Item: Item){
    this.editState=true;
    this.itemToEdit = Item;

  }

  clearState(){
    this.editState=false;
    this.itemToEdit = null;
  }

}
