import { Component } from '@angular/core';
import { CountState } from 'src/store/app.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCount, selectUpdateAt } from 'src/store/app.selectors';
import { CountIncreaseAction } from 'src/store/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
count$: Observable<number>;
updateAt$: Observable<number>;
constructor(private store$: Store<CountState>){
  this.count$ = store$.select(selectCount);
  this.updateAt$ = store$.select(selectUpdateAt);
}

  increase(){
      this.store$.dispatch(new CountIncreaseAction());
  }
  decrease(){

  }
  clear(){

  }
}
