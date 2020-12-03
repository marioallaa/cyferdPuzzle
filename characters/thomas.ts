export class Tom{
  constructor(private r: number, private c:number, private field: any) {
    console.log('Thomas: im scared')
  }

  iAm() {  // current location
    return [ this.r, this.c ]
  }

  borders() {
    let r = ''
    this.field.forEach((_box: any) => {
      if (this.iAm().toString() === _box[0].toString()) {
        r = _box[1].toString()
      }
    });
    return r.split('')
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


  wheresWolf(wolf: any) {
    if (wolf.iAm()[0] > this.iAm()[0]) { return ['B'] }
    else if (wolf.iAm()[0] < this.iAm()[0]) { return ['T'] }
    else if (wolf.iAm()[1] > this.iAm()[1]) { return ['R'] }
    else if (wolf.iAm()[1] < this.iAm()[1]) { return ['L'] }
    else { return ['F'] } //game over
  }

  rnd(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  runFromTheBigBadWolf(wolf: string[]) {
    let way: string[] = []
    way = this.clear()
    if (!this.borders().toString().includes(wolf.toString())) {
      way = way.concat(wolf)
    }
    let i = this.rnd(0, way.length)
    this.r = this.possibilities(way)[i][0]
    this.c = this.possibilities(way)[i][1]
    console.log('thomas: ', this.iAm())
  }

}