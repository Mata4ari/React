
interface CellPropsInterface {
  victory:boolean,
  highlight:boolean;
  val:string,
  callback:(row:number,col:number,value:string)=>void,
  row:number,
  col:number,
}


function SudokuCell(props:CellPropsInterface){


  return <td key={props.row*9+props.col}>
            <input type='text' className='inpCell' value={props.val}
            style={{background:props.victory?'yellow':props.highlight?'red':'white'}} onChange={(event) =>
            props.callback(props.row, props.col, event.target.value)}></input>
        </td>
};

export default SudokuCell;