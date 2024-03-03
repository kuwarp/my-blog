import React, {useEffect,useState} from 'react'

import Verbose from "./Verbose";
import Loader from './components/Loader';


const App = () => {
 
//   const [spinner, setSpinner] = useState(true);
//   useEffect(() => {
//     setTimeout(() => {
//       setSpinner(false);
//     },10000);
//   }, []);
//   if (!spinner){

  
//  return(
//   <>
  
//   </>
//  )
// }
// else {
//   return <Loader />;
// }
return(
  <>
  
  <Verbose  />
  </>
)
}
export default App
