import './App.css';
import DemoContent from "@envelope/core/DemoContent";
import DemoSidebarContent from "@envelope/core/DemoSidebarContent/DemoSidebarContent";
import useTimeout from "@envelope/hook/useTimeout";
import {useEffect, useState} from "react";


function App() {

    const [num, setNum] = useState(0);


    useTimeout(() => {
        console.log('顶个时')
        setNum(num + 1)
    }, 2000)

  return (
    <div className="App">

        <div>
            {
                num
            }
        </div>

        <div className='w-full h-[200px]'>hello</div>

        <DemoContent />

    </div>
  );
}

export default App;
