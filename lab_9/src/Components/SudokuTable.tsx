import SudokuCell from "./SudokuCell";

interface TablePropsInterface {
  highlight:boolean[],
  victory:boolean,
  puzzle:string[],
  inpChange:(row:number,col:number,value:string)=>void,
}


function SudokuTable(props:TablePropsInterface){
  const nums:number[] = [0,1,2,3,4,5,6,7,8];

  return(
  <div className='Bord'>
            <table className='sudokuTable' style={{background:props.victory?'yellow':'white'}}>
              <tbody>
                {
                  nums.map((row)=>{
                    return <tr key={row}>
                      {
                        nums.map((col)=>{
                          return <SudokuCell col={col} row={row} victory={props.victory} highlight={props.highlight[row*9+col]}
                          val={props.puzzle[row*9+col]} callback={props.inpChange} ></SudokuCell>
                        })
                      }
                    </tr>
                  })
                }
              </tbody>
            </table>
        </div>
  )
};

export default SudokuTable;