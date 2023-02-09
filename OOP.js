
class Machine {
  constructor() {
    this.turn = false;
  }

  turnOn() {
    this.turn = true;
  }

  turnOff() {
    this.turn = false;
  }
}

class HomeAppliance extends Machine {
  constructor() {
    super();
    this.plug = false;
  }

  plugIn() {
    this.plug = true;
      console.log('включить в сеть');
  }

  plugOff() {
    this.plug = false;
      console.log('выключить из сети');
  }
}

class WashingMachine extends HomeAppliance {
  constructor() {
    super();
  }

  run() {
    if (this.plug === true) {
      console.log('Запуск!');
    } else {
      console.log('Нету электричества')
    }
  }
}

class LightSource extends HomeAppliance {
  constructor(lightNumber) {
    super();
    this.lightNumber = lightNumber;
  }

  plugIn() {
    this.plug = true;
    console.log('Включен в розетку');
  }

  plugOff() {
    this.plug = false;
    console.log('Вытащен из розетки');
  }

  turnOn() {
    if (this.plug === true) {
      console.log('Включить светильник');
    } else {
      console.log('Нету электричества')
    }
  }

  turnOff() {
    console.log('Светильник выключен')
  }

  setLevel(level) {
    if (this.plug===true) {
      if (level >= 1 && level <= 100) {
        this.lightNumber = level;
        console.log(this.lightNumber);
      } else {
        console.log('No energy');
      }
    } else {
      console.log('Нету электричества')
    }
      
  }
}

class AutoVehicle extends Machine {
  constructor() {
    super();
    this.x = 0;
    this.y = 0;
  }

  setPosition(x = this.x, y = this.y) {
    this.x = x;
    this.y = y;
    console.log(`Машина на координатах: ${x}, ${y}`)
  }
}

class Car extends AutoVehicle {
  constructor() {
    super();
    this.speed = 10;
  }

  setSpeed(speed) {
    if (speed) {
      console.log(this.speed = speed);
    } else {
      console.log(this.speed);
    }
  }

  run(x, y) {
    if (this.turn === true) {
      console.log('Машина поехала')
      let timeIntrval = setInterval(() => {
        
          let i = this.x;
          let l = this.y;
          let x2 = x - i;
          let y2 = y - l;
          let speedX = Math.abs(x2 - this.speed);

          if (x2 > this.speed) {
            console.log(i += this.speed);
          } else if (x2 <= this.speed) {
            console.log(i += x2);
            if (speedX < y2) {
              console.log(l += speedX)
            } else if (y2 <= this.speed) {
              console.log(l += y2);
            }
          }

          this.setPosition(i, l)

          if (this.x === x && this.y === y) {
            clearInterval(timeIntrval);
            console.log('Машина доехала до места назначения')
          }
        

      }, 1000);
    } else {
      console.log('Заведите машину')
    }

  }
}


const bosch = new WashingMachine();

bosch.plugIn();

bosch.turnOn();

bosch.run();



