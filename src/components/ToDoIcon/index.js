import React from 'react';
import { iconsDefs } from "../../assets/icons";

export function ToDoIcon(props) {
   const icon = iconsDefs[props.type];
   if (!icon)
      return null;

   const style = { color: props.color, fontSize: props.size };

   return (
      <svg className={props.className} height={icon.height} width={icon.width} viewBox={icon.viewBox} style={style}>
         {icon.body}
      </svg>
   );
}
