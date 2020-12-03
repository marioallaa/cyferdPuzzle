import * as fs from 'fs';
import { Wolf } from './characters/wolf'
import { Tom } from './characters/thomas'
import { Box } from './box'

fs.readFile('setup.json', 'utf8', ((err, data) => {
  if (err) {
    throw (err);
  }
  let puzzles = JSON.parse(data).puzzles;
  for (let i in puzzles) {
    playGame(puzzles[i])
  }
}))

function playGame(p: any) {
  let field = []
  for (let i in p.layout) {
    let l = p.layout[i]
    field.push(new Box(l.row, l.column, l.borders).toArr())
  }
  let w = new Wolf(p.wolf.row, p.wolf.column, field)
  let t = new Tom(p.thomas.row, p.thomas.column, field)
    while (w.iAm().toString() != t.iAm().toString() ) {

      t.runFromTheBigBadWolf(t.wheresWolf(w))
      w.move1BoxTowards(w.wheresFood(t))
      w.move1BoxTowards(w.wheresFood(t))

      if (w.iAm().toString() == t.iAm().toString()) {
        console.log(`game over, trying again`)
      } else if (field[field.length - 1].toString() == t.iAm().toString()) {
        console.log('finally you won')
      }
    }

}


