import { Button,Text,MultilineInput } from "@canva/app-ui-kit";
import { FormattedMessage, useIntl } from "react-intl";
import * as styles from "styles/components.css";
import { addElementAtPoint } from "@canva/design";
import type { TextElementAtPoint } from "@canva/design";
import { useState } from 'react';
import {datav} from "./dat"

export const App =  () => {
  const [input, setInput] = useState("input");
  const [value, setValue] = useState(" ");


const onClick = async() =>{
await addElementAtPoint(datav(input));

}

const onCh = async(e:string) =>{
  setInput(e);
}

  const intl = useIntl();

  return (
    <div className={styles.scrollContainer}>
      
        <Text>
          {value}
        </Text>
       
        <MultilineInput
        onChange={onCh}
        value={input}
        />          
        <Button variant="primary" onClick={onClick} stretch>
          {intl.formatMessage({
            defaultMessage: "สร้างข้อความ",
            description:
              "Button text to do something cool. Creates a new text element when pressed.",
          })}
        </Button>        
          
      
    </div>
  );
};
