import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
.app__container{
  display: flex; 
  margin-top:20px;
  
  margin-bottom:20px;
  justify-content:space-between;
}
.app__item__container:nth-child(1){
 max-width:230px;
}
.app__item__container:nth-child(2){
 margin:0 12px;
 padding: 20px;
 width:100%;
 background-color:#fafbfd;
 border-radius: 10px;
 
}

`
