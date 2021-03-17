import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CocktailService } from '../cocktail.service';
import { User } from '../interfaces/user';
import { WineService } from '../wines.service';



@Component({
  selector: 'wines',
  templateUrl: './wines.component.html',
  styleUrls: ['./wines.component.css']
})
export class WinesComponent implements OnInit {

  userId;
  list=[]; //for the checkboxxxxxxx
  isChecked=[];
  users:User[];
  users$;
  addItemFormOpen;
  rowToEdit:number = -1; 
  itemToEdit = {math:null,  psico:null, pay:null};

  completed: false;

  deleteSelected(){
    let pato;
    for( pato in this.list){
      if(this.list[pato]==true){
        this.wineService.deleteWine(this.userId,this.users[pato].uid)
      }
    }
  }
 
  checkSelected(i){
   this.isChecked[i]=!this.isChecked[i]
   if(this.isChecked[i]==true){
     this.list[i]=true;
   }else{
     this.list[i]=false;
   }
   
  }

  deleteWine(index){
    let id = this.users[index].uid;
    console.log(id);
    this.wineService.deleteWine(this.userId, id);
   }

  

   
    
  
  displayedColumns: string[] = ['wine color','alcohol','volatile', 'acidity', 'chlorides','density','Delete', 'Check', 'prediction'];
 
  constructor(private cocketailsService:CocktailService,
    private authService:AuthService, private wineService:WineService ) { }

  ngOnInit(): void {
    this.authService.getUser().subscribe(
      user => {
          this.userId = user.uid;
         
          this.users$ = this.wineService.getWines(this.userId);
          this.users$.subscribe(
            docs => {         
              this.users = [];
              var i = 0;
              for (let document of docs) {
 
                const wine:User = document.payload.doc.data();
                wine.uid = document.payload.doc.id;
                console.log('here')
                   this.users.push(wine);
              }                        
            }
          )
      })
      
  }   
}
