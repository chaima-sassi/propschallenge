import logo from './logo.svg';
import './App.css';
import Navv from './component/Navv';
import Headerr from './component/Headerr';
import Main from './component/Main';
import Footerrr from './component/Footerrr';


function App() {
  const projectData=[
    {name:"project1",img:"./proj1.jpg",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam."},
    {name:"project2",img:"./proj2.jpg",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam."},
    {name:"project3",img:"./proj3.jpg",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam."},
    {name:"project4",img:"./proj4.jpg",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam."}

  ]
  return (
    <div className='bijoux'>
      <Navv/>
      <Headerr/>
      <Main projectData={projectData}/>
      <Footerrr/>
    </div>
  );
}

export default App;
