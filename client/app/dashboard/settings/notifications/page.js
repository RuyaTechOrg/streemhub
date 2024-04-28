import { notifications } from "../../../../utils/data"

function notificationSettings(){
    return(
            <div>
            <div>
                <h3 className="text-purple500 mb-[10px]">Notification Settings</h3>
                <span className="text-gray-500">We may still need to send you important notifications about your account outside of your<br/> notification settings,</span>
            </div>
           {notifications.map(({title,text},i) =>{
            return(
                <div className="grid grid-cols-2 grid-rows-2 mt-10 border-b border-purple500 h-[140px]" key={i}>
                <div>
                <h4>{title}</h4>
                <span className="text-sm text-gray-500">{text}</span>
                </div>
                <div> 
                <div className="ml-[200px] mb-[20px] ">
              <input type="checkbox" id="hs-basic-usage" className="relative w-[4.25rem] h-5 bg-black checked:bg-purple500 border-purple500 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 border border-transparent ring-1 ring-purple500  focus:ring-purple500 ring-offset-white focus:outline-purple500 appearance-none dark:bg-gray-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800 before:inline-block before:w-4 before:h-4  before:bg-purple500 checked:before:bg-black before:translate-x-0 checked:before:translate-x-[50px] before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200"/>
                <label className="text-gray-500 relative top-[-4px] ml-[10px]">Push</label>
                </div>
                <div className="ml-[200px]">
                <input type="checkbox" id="hs-basic-usage" className="relative w-[4.25rem] h-5 bg-black checked:bg-purple500 border-purple500 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 border border-transparent ring-1 ring-purple500  focus:ring-purple500 ring-offset-white focus:outline-purple500 appearance-none dark:bg-gray-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800 before:inline-block before:w-4 before:h-4  before:bg-purple500 checked:before:bg-black before:translate-x-0 checked:before:translate-x-[50px] before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200"  />
                <label className="text-gray-500 relative top-[-4px] ml-[10px]">Email</label>
                </div>
                </div>
            </div>     
            )
           })}
        </div>
    )
}

export default notificationSettings