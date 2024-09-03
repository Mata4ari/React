
interface ButtonPropsInterface {
  name:string,
  callback:()=>void,
}


function Button(props:ButtonPropsInterface){
  
  function OnClick()
  {
    props.callback();
  }

  return <button onClick={OnClick}>{props.name}</button>
};

export default Button;