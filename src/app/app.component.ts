import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rcl';
  dice_right = "./assets/dice_r.png";
  dice_center = "./assets/dice_c.png";
  dice_left = "./assets/dice_l.png";
  rotate:boolean = false;
  visible:boolean = true;
  numberOfDice:number=0;
  blockThrowDice:boolean = false;
  visible_r:boolean=true;
  visible_c:boolean=true;
  visible_l:boolean=true;
  visible_seccion:boolean = true;

  throwDice(): void {

    this.rotate = true;
    this.blockThrowDice = false;

    setTimeout(() => {
      let number_dice_one = Math.round(Math.random() * 5) + 1;
      let number_dice_two = Math.round(Math.random() * 5) + 1;
      let number_dice_three = Math.round(Math.random() * 5) + 1;
      this.selectDiceRight(number_dice_one);
      this.selectDiceCenter(number_dice_two);
      this.selectDiceLeft(number_dice_three)
      this.rotate = false;
      this.visible_seccion = true;
    }, 4000);

  }

  selectDiceRight(number:number): void{
    if (number === 1 || number == 2) {
      this.dice_right = "./assets/dice_d.png";
    } else if(number === 3){
      this.dice_right = "./assets/dice_r.png";
    } else if(number === 4){
      this.dice_right = "./assets/dice_c.png";
    } else if(number ===5){
      this.dice_right = "./assets/dice_l.png";
    } else if(number === 6){
      this.dice_right = "./assets/dice_w.png";
    }
  }

  selectDiceCenter(number:number): void{
    if (number === 1 || number == 2) {
      this.dice_center = "./assets/dice_d.png";
    } else if(number === 3){
      this.dice_center = "./assets/dice_r.png";
    } else if(number === 4){
      this.dice_center = "./assets/dice_c.png";
    } else if(number ===5){
      this.dice_center = "./assets/dice_l.png";
    } else if(number === 6){
      this.dice_center = "./assets/dice_w.png";
    }
  }

  selectDiceLeft(number:number): void{
    if (number === 1 || number == 2) {
      this.dice_left = "./assets/dice_d.png";
    } else if(number === 3){
      this.dice_left = "./assets/dice_r.png";
    } else if(number === 4){
      this.dice_left = "./assets/dice_c.png";
    } else if(number ===5){
      this.dice_left = "./assets/dice_l.png";
    } else if(number === 6){
      this.dice_left = "./assets/dice_w.png";
    }
  }

  quantityDice(quantity:number):void{
    
    this.numberOfDice = quantity;
    this.visible_seccion = false;
    if(this.numberOfDice == 1){
      this.visible_r = false;
      this.visible_l = false;
    } else if(this.numberOfDice == 2){
      this.visible_r = true;
      this.visible_l = false;
    }else{
      this.visible_r = true;
      this.visible_l = true;
    }

    this.blockThrowDice = true;
  }
}
