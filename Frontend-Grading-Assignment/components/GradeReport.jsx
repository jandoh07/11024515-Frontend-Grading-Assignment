import { records,records2, records3 } from "./records"
import { useState } from "react"


const GradeReport = () => {
  const[active, setActive] = useState('All')
  const[sem, setSem] = useState('All')
  return (
    <div>
      <div action="" className="flex m-4">
        <span className="flex">
          <h2>Year:</h2>
          <ul id="" className="cursor-pointer" >
            <li onClick={() => (setActive('All'))} className="cursor-pointer hover:text-slate-500">All</li>
            <li onClick={() => (setActive('2022/23'))} className="cursor-pointer hover:text-slate-500">2022/23</li>
            <li onClick={() => (setActive('2023/24'))} className="cursor-pointer hover:text-slate-500">2023/24</li>
          </ul>
        </span>
        <span className="flex">
          <h2>Semester:</h2>
          <ul id="">
            <li onClick={() => (setSem('All'))} className="cursor-pointer hover:text-slate-500" >All</li>
            <li onClick={() => (setSem('1st'))} className="cursor-pointer hover:text-slate-500" >1st</li>
            <li onClick={() => (setSem('2nd'))} className="cursor-pointer hover:text-slate-500" >2nd</li>
          </ul>
        </span>
      </div>

      <div>
        <div className={active ==="All" ? 'block' : active ==="2022/23" ? 'block' : 'hidden'}>
          <ul className={`m-4 ${sem ==="All" ? 'block' : sem ==="1st" ? 'block' : 'hidden'}`}>
              <li className="text-sm grid sm:grid-cols-[7%_34%_5%_5%_5%] grid-cols-[15%_50%_8%_8%_8%] border-solid border-slate-500 border-b-2">
                <p className="">2022/23</p>
                <p className="">First Semester</p>
                <p className="">CCP</p>
                <p className="">CCT</p>
                <p className="">CGPA</p>
              </li>
              <li className="text-sm grid sm:grid-cols-[7%_34%_5%_5%_5%] grid-cols-[15%_50%_10%_10%_10%] border-solid border-slate-500 border-b-2">
                <p className="">Code</p>
                <p className="">Course Title</p>
                <p className="">Credit</p>
                <p className="">Grade</p>
                <p className="">GPT</p>
              </li>
              
            {records.map((record) => (
              <li key={record.code} className="text-sm grid sm:grid-cols-[7%_34%_5%_5%_5%] grid-cols-[15%_50%_10%_10%_10%]">
                <p className="">{record.code}</p>
                <p className="">{record.title}</p>
                <p className="">{record.credit}</p>
                <p className="">{record.grade}</p>
                <p className="">{record.gpt}</p>
              </li>
            ))}
          </ul>
          <ul className={`m-4 ${sem ==="All" ? 'block' : sem ==="2nd" ? 'block' : 'hidden'}`}>
              <li className="text-sm grid sm:grid-cols-[7%_34%_5%_5%_5%] grid-cols-[15%_50%_10%_10%_10%] border-solid border-slate-500 border-b-2">
                <p className="">2022/23</p>
                <p className="">Second Semester</p>
                <p className="">CCP</p>
                <p className="">CCT</p>
                <p className="">CGPA</p>
              </li>
              <li className="text-sm grid sm:grid-cols-[7%_34%_5%_5%_5%] grid-cols-[15%_50%_10%_10%_10%]">
                <p>Code</p>
                <p>Course Title</p>
                <p>Credit</p>
                <p>Grade</p>
                <p>GPT</p>
              </li>
              <hr />
            {records2.map((record) => (
              <li key={record.code} className="text-sm grid sm:grid-cols-[7%_34%_5%_5%_5%] grid-cols-[15%_50%_10%_10%_10%]">
                <p className="">{record.code}</p>
                <p className="">{record.title}</p>
                <p className="">{record.credit}</p>
                <p className="">{record.grade}</p>
                <p className="">{record.gpt}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
        <ul className={`m-4 ${sem ==="All" ? 'block' : sem ==="1st" ? 'block' : 'hidden'}`}>
              <li className="text-sm grid sm:grid-cols-[7%_34%_5%_5%_5%] grid-cols-[15%_50%_10%_10%_10%] border-solid border-slate-500 border-b-2">
                <p className="">2023/24</p>
                <p className="">First Semester</p>
                <p className="">CCP</p>
                <p className="">CCT</p>
                <p className="">CGPA</p>
              </li>

              <li className="text-sm grid sm:grid-cols-[7%_34%_5%_5%_5%] grid-cols-[15%_50%_10%_10%_10%] border-solid border-slate-500 border-b-2">
                <p className="">Code</p>
                <p className="">Course Title</p>
                <p className="">Credit</p>
                <p className="">Grade</p>
                <p className="">GPT</p>
              </li>
              
            {records3.map((record) => (
              <li key={record.code} className="text-sm grid sm:grid-cols-[7%_34%_5%_5%_5%] grid-cols-[15%_50%_10%_10%_10%]">
                <p className="">{record.code}</p>
                <p className="">{record.title}</p>
                <p className="">{record.credit}</p>
                <p className="">{record.grade}</p>
                <p className="">{record.gpt}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default GradeReport