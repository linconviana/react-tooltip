

import Tippy from "@tippy.js/react";
import 'tippy.js/dist/tippy.css';


//https://www.npmjs.com/package/react-tooltip
import ReactTooltip from "react-tooltip";


export default function App() {

    return (
    <>

<div style={{display:'flex', justifyContent:'space-evenly', margin:'50px'}}>

      <a data-tip data-for='face'>teste link</a>
      <ReactTooltip id='face' >
        <span>Hello tooltip</span>
      </ReactTooltip> 

      <a data-tip data-for='face1'>teste link</a>
      <ReactTooltip id='face1' type='error' place='bottom'>
        <span>Hello tooltip</span>
      </ReactTooltip>

      <a data-tip data-for='face2'>teste link</a>
      <ReactTooltip id='face2' type='warning' place='left'>
        <span>Hello tooltip alert</span>
      </ReactTooltip>

      <a data-tip data-for='face3'>teste link</a>
      <ReactTooltip id='face3' type='success' place='right'>
        <span>Hello tooltip verde</span>
      </ReactTooltip>

      <a data-tip data-for='face4'>teste link</a>
      <ReactTooltip id='face4' type='info' place='top' effect='solid'>
        <span>Hello tooltip verde</span>
      </ReactTooltip>

      <a data-tip data-for='face5'>teste link</a>
      <ReactTooltip id='face5' type='dark' place='top' effect='float'>
        <span>Hello tooltip verde</span>
      </ReactTooltip>

      <a data-tip data-for='face6'>teste link</a>
      <ReactTooltip id='face6' type='light' place='top' effect='float'>
        <span>Hello tooltip verde</span>
      </ReactTooltip>

      <a data-tip data-for='face7' data-delay-show='1000'>teste link delay</a>
      <ReactTooltip id='face7' type='success' place='top' effect='solid' delayShow={1000}>
        <span>Hello tooltip verde com delay</span>
      </ReactTooltip>

      <a data-tip data-for='face8'>teste link desabilitado</a>
      <ReactTooltip id='face8' type='error' effect='solid' disable={true}>
        <span>Hello tooltip verde</span>
      </ReactTooltip>

</div>
      
      <br /><br />
      <Tippy content='Basic tooltip teste'>
        
       <button>hover</button>
      </Tippy>

      <br /><br />
      <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
      <Tippy content='Basic tooltip teste'>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr></Tippy>
        <Tippy content='Basic tooltip teste'>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr></Tippy>
        <Tippy content='Basic tooltip teste'>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr></Tippy>
      </tbody>
    </table>

    <br /><br />
      <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>

        <tr data-tip data-for='face10'>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>

        <tr data-tip data-for='face10'>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr data-tip data-for='face10'>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
        <ReactTooltip id='face10' type='success' place='top'>
        <span>Hello tooltip verde</span>
      </ReactTooltip>
      </tbody>
    </table>
     </>
  );
}
