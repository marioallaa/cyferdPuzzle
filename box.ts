
export class Box {

  constructor(
    private r: number,
    private c: number,
    private b: string
  ) { }

  toArr() {
    return [[this.r, this.c,], this.b]
  }

}