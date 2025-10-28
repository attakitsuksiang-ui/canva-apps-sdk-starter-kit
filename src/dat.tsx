  
  import type { TextElementAtPoint } from "@canva/design";


export const datav = (a:any) =>{
  var r =  a.split("\n");
  const textElement: TextElementAtPoint = {
  type: 'text',
  children: [r[0]],
  top: 251.9,
  left: 123.3,
  width: 145.4,
  fontSize: 20.7*1.333,
  color: '#000000',
  textAlign: 'center'
    }
  return textElement;
}
