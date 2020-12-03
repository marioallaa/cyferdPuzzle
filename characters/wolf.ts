import { strict } from "assert";
import { Box } from "../box";

export class Wolf{

  constructor(private r: number, private c:number, private field: any) {
    console.log('Wolf: Woo')
  }

  iAm() {  // current location
    return [ this.r, this.c ]
  }

  borders() {
    let _ = ''
    this.field.forEach((_box: any) => {
      if (this.iAm().toString() === _box[0].toString()) {
        _ = _box[1].toString()
      }
    });
    return _.split('')
  }

  clear() {
    let pos = ['R', 'T', 'L', 'B']
    this.borders().forEach((direction: string) => {
      pos.forEach((_direction: string, i) => {
        if (direction === _direction) {
          pos.splice(i, 1)
        }
      })
    })
    return pos
  }

  possibilities(clear: string[]) {
    let possibleBoxes: any[] = []
    clear.forEach((direction: String) => {
      if (direction === 'R') {
        let b: number[] = this.iAm()
        b[1] = b[1] + 1
        possibleBoxes.push(b)
      }
      if (direction === 'L') {
        let b: number[] = this.iAm()
        b[1] = b[1] - 1
        possibleBoxes.push(b)
      }
      if (direction === 'T') {
        let b: number[] = this.iAm()
        b[0] = b[0] - 1
        possibleBoxes.push(b)
      }
      if (direction === 'B') {
        let b: number[] = this.iAm()
        b[0] = b[0] + 1
        possibleBoxes.push(b)
      }
    });
    return possibleBoxes;
  }

  wheresFood(food: any) {
    if (food.iAm()[0] > this.iAm()[0]) { return ['B'] }
    else if (food.iAm()[0] < this.iAm()[0]) { return ['T'] }
    else if (food.iAm()[1] > this.iAm()[1]) { return ['R'] }
    else if (food.iAm()[1] < this.iAm()[1]) { return ['L'] }
    else { return ['F'] } //game over
  }

  move1BoxTowards(food: string[]) {
    if (this.borders().toString().includes(food.toString())) {
      console.log('wolf: \t', this.iAm(), ['F'])
      return null
    } else {
      try {
      this.r = this.possibilities(food)[0][0]
      this.c = this.possibilities(food)[0][1]
      console.log('wolf: \t', this.iAm())
      } catch (error) {
      }
    }
  }

}