import {AiFillCaretDown} from 'react-icons/ai'
import {skills} from '../../../../utils/data'
import { CloseCircle,Edit2,Edit } from "iconsax-react"
import Link from "next/link"


const [dropdown,setDropDown] = useState(false)


const profileSettings = () =>{
    return(
       <section>
        <div className="flex justify-between">

        <div className="flex relative ml-[20px]"> 
          <div className="bg-purple500 w-[130px] h-[130px] rounded-full absolute ml-2"></div>
          <button className="h-10 w-10 rounded-full bg-inputBg grid place-content-center relative left-[100px] top-[80px] ">
            <Edit2 color="#000" />
          </button>
          <span className="flex text-gray-400 top-[60px] ml-[150px] relative">Edit your profile Image here</span>
          </div>
        
          <Link href={'#'}>
            <div className="flex justify-between w-[150px] h-[40px] bg-violet-950 rounded p-2 relative top-[50px]">
            <h4 className="text-xs m-1">Edit Cover Photo</h4>
            <Edit color="#fff"/>
            </div>
            </Link>
          </div>

      <div className="mt-[150px]">
        <form className="grid grid-cols-2 grid-rows-3">
          <div className="mb-2">
          <label htmlFor="name1" className="relative top-[-40px] left-[45px] text-gray-400">Name</label>
          <input type="text" name="name" id="name" className="h-[40px] w-[292px] bg-transparent mt-[40px] border-2 border-purple500 rounded-md text-white"></input>
          </div>
          <div className="mb-7 ">
          <label htmlFor="name1" className="relative top-[-40px]  text-gray-400">Username</label>
          <input type="text" name="username" id="username" className="h-[40px] w-[292px] bg-transparent mt-[40px] border-2 border-purple500 rounded-md ml-[-75px] text-white"></input>
          </div>

          <div className="mb-7 ml-[10px]">
          <label htmlFor="bio" className="relative top-[-110px] left-[35px] text-gray-400">Bio</label>
          <textarea type="text" name="bio" id="bio" placeholder="Not more than 150 words"className="h-[40px] w-[292px] bg-transparent mt-[40px]  border-2 border-purple500 rounded-md min-h-[100px] ml-[10px] placeholder-gray-500 text-white placeholder:relative placeholder:top-[-35px] placeholder:left-[10px]"></textarea>
          </div>
       
           <div className="mb-7 ml-[10px] mt-[30px]">
          <label htmlFor="profession" className="relative top-[-40px]  text-gray-400">Profession</label>
          <input type="text" name="profession" id="profession" className="h-[40px] w-[292px] bg-transparent mt-[40px] border-2 border-purple500 rounded-md ml-[-80px] text-white "></input>
          <button className="relative top-[5px] left-[-30px]">
          <AiFillCaretDown color="#8B0CFF" />
          </button>
          </div>

          
          <div className="mb-7 ml-[45px] mt-[30px]">
          <label htmlFor="bio" className="relative top-[-40px]  text-gray-400">Gender</label>
          <input type="text" name="profession" id="profession" className="h-[53px] w-[135px] bg-transparent mt-[40px] border-2 border-purple500 rounded-md ml-[-55px] placeholder:relative placeholder:left-[10px]" placeholder="Male"></input>
          <button className="relative top-[5px] left-[-30px]">
          <AiFillCaretDown color="#8B0CFF" />
          </button>
         {dropdown && (
           <div> 
                 <button className="flex gap-4 items-center pt-2 px-3">
                  {' '}
                  <IoPersonCircle className="text-purple500" size={25} />
                  Leo Net
                </button>
                <button className="pt-2 px-4 text-left border-t border-t-purple500">
                  Add Account
                </button>
                <button className="p-2 px-4 text-left border-t border-t-purple500">
                  Log Out
                </button>  
           </div>
         )}

        
          </div>
         
          <div className="mb-2">
          <label htmlFor="name1" className="relative left-[10px] top-[37px] text-gray-400">Skills</label>
          <input contentEditable={"false"} type="text" name="name" id="name" className="h-[58px] w-[369px] bg-transparent mt-[40px] border-2 border-purple500 rounded-md ml-[10px]"></input>
          <div className="w-[350px]  relative top-[-45px] left-[30px]">
            <ul className="flex justify-between w-[100%] ml-[-10px]">
              {skills.map((skill,i) =>{
                return(
              <li className="flex justify-between mr-[5px] bg-purple500 bg-opacity-20 p-1.5 pr-2 w-[30%] rounded-md" key={i}>
               <h6 className="text-sm100 text-white mr-2 mt-[3px]">{skill}</h6>
               <button>
                <CloseCircle  color="#8B0CFF"/>
                </button>
              </li>
                )
              })}
              
            </ul>
          </div>
          </div>
        </form>
        </div>
       </section>
    )
}

export default profileSettings