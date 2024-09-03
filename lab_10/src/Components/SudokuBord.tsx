import React from 'react';
import { useState, useEffect } from 'react';
import Button from './Button';
import { getSudoku } from 'sudoku-gen';
import SudokuTable from './SudokuTable';
import { Sudoku } from 'sudoku-gen/dist/types/sudoku.type';
import { HotKeys } from 'react-hotkeys';

function SudokuBord() {

  const [puzzle, setPuzzle]:[string[], React.Dispatch<React.SetStateAction<string[]>>] = useState<string[]>([]);
  const [highlight, setHighlight]:[boolean[], React.Dispatch<React.SetStateAction<boolean[]>>] = useState<boolean[]>(new Array(81).fill(false));
  const [victory, setVictory]:[boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState<boolean>(false);

  useEffect(() => {
    checkField(); 
  }, [puzzle]);

  function gen(){
    setHighlight(new Array(81).fill(false));
    let sudo:string[]=[];
    let Sudoku:Sudoku = getSudoku();
    let str:string=Sudoku.puzzle;
    for(let i = 0;i<str.length;i++){
      if(str[i]==='-')
        sudo[i]='';
      else
        sudo[i]=str[i];
    }

    setPuzzle(sudo);
    setVictory(false);
  }

  function checkField(){
    let newHighlight:boolean[] = new Array(81).fill(false);
    newHighlight = checkRows(newHighlight,puzzle);
    newHighlight =checkColumns(newHighlight,puzzle);
    newHighlight=checkSections(newHighlight,puzzle);
    setHighlight(newHighlight);
    if(!newHighlight.find(i=>i===true)){
      checkVictory();
    }
  }

  function checkVictory(){
    if(puzzle.length===0)
      return;
    for(let i=0;i<puzzle.length;i++){
      if(puzzle[i]==='')
        return;
    }
    setVictory(true);
  }

  function checkSections(newHighlight:boolean[],puzzle:string[]):boolean[]{
    for(let i1=0;i1<3;i1++){
      for(let j1=0;j1<3;j1++){
        let numbers:Set<string> = new Set()
        let invalidRow:boolean = false;
        for(let i=0;i<3;i++){
          for(let j=0;j<3;j++){
            if(numbers.has(puzzle[i*9+i1*27+j+j1*3])&&/^[1-9]$/.test(puzzle[i*9+i1*27+j+j1*3])){
              invalidRow=true;
            }
            numbers.add(puzzle[i*9+i1*27+j+j1*3])
          }
        }
        if(invalidRow){
          for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
              newHighlight[i*9+i1*27+j+j1*3] = true
            }
          }
        }
      }
    }
    return newHighlight;
  }

  function checkColumns(newHighlight:boolean[],puzzle:string[]):boolean[]{
    for(let i =0;i<9;i++){
      let numbers:Set<string> = new Set()
      let invalidRow:boolean = false;
      for(let k=0;k<9;k++){
        if(numbers.has(puzzle[k*9+i])&&/^[1-9]$/.test(puzzle[k*9+i])){
          invalidRow=true;
          break;
        }
        numbers.add(puzzle[k*9+i])
      }
      if(invalidRow){
        for(let k=0;k<9;k++){
          newHighlight[k*9+i] = true
        }
      }
    }
    return newHighlight;
  }

  function checkRows(newHighlight:boolean[],puzzle:string[]):boolean[]{
    for(let i =0;i<9;i++){
      let numbers:Set<string> = new Set()
      let invalidRow:boolean = false;
      for(let k=0;k<9;k++){
        if(numbers.has(puzzle[i*9+k])&&/^[1-9]$/.test(puzzle[i*9+k])){
          invalidRow=true;
          break;
        }
        numbers.add(puzzle[i*9+k])
      }
      if(invalidRow){
        for(let k=0;k<9;k++){
          newHighlight[i*9+k] = true
        }
      }
    }
    return newHighlight;
  }

  function getHelp(){
    let newPuzzle:string[]=[];
    let n:number;
    let k=0;
    while(k<1000){
      k++;
      newPuzzle=[...puzzle];
      n=Math.floor(Math.random()*81);
      if(newPuzzle[n]!=='') continue;

      for(let j=1;j<10;j++){
        newPuzzle[n]=j.toString();
        let newHighlight:boolean[] = new Array(81).fill(false);
        newHighlight = checkRows(newHighlight,newPuzzle);
        newHighlight =checkColumns(newHighlight,newPuzzle);
        newHighlight=checkSections(newHighlight,newPuzzle);
        if(!newHighlight.find(i=>i===true)){
          setPuzzle(newPuzzle);
          return;
        }
      }
    }
  }

  function handleInputChange(row: number, col: number, value: string) {
    const isValidInput:boolean = /^$|^[1-9]$/.test(value);
    if(isValidInput){
    const newPuzzle:string[] = [...puzzle];
    newPuzzle[row * 9 + col] = value;
    setPuzzle(newPuzzle);
    }
  }

  useEffect(() => {
    const handleKeyPress = (event:KeyboardEvent) => {
      if (event.key === 'n') {
        gen();
      } else if (event.key === 'm') {
        getHelp();
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [puzzle]);

  return (
    <div>
        <SudokuTable puzzle={puzzle} highlight={highlight} inpChange={handleInputChange} victory={victory}></SudokuTable>
        <div className='btContainer'>
        <Button name='Новая игра' callback={gen}></Button>
        <Button name='Подсказка' callback={getHelp}></Button>
        </div>
    </div>
  );
}

export default SudokuBord;