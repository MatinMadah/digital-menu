import { Headerlogo } from './assets/Headerlogo'
import { Contacts } from './assets/Contacts'
import { Buttons } from './assets/Buttons'
import { Titles } from './assets/Titles'
function App() {
  return (
    <>
        <body>
    <div id='Main' dir='rtl' className="bg-[#232323] font-IYME">
        <div className="flex items-center justify-center h-screen">
            <div className="h-full  lg:w-1/3 bg-[#232323]">
               <div id='header' className='mt-2 mx-10 px-5'>
                    <Headerlogo/>
                    <div className='mt-4 flex flex-nowrap items-center justify-between'>
                    <Contacts Text="صفحه اینستاگرام" Source="https://mt2.ir/assets/images/instagramlogo.png"/>
                    <Contacts Text="44444444" Source="https://mt2.ir/assets/images/phone.png"/>
                    </div>
                </div> 
                <div id='Sort' className='flex flex-row items-center mx-16 mt-14'>
                    <Buttons Text="خوراک" Source="http://menutik.ir/panel/storeImage/18/5/category/18_952454325.png" />
                    <Buttons Text="سالاد ها "Source="http://menutik.ir/panel/storeImage/18/5/category/18_708506862.png" />
                    <Buttons Text="غذای اصلی"Source="http://menutik.ir/panel/storeImage/18/5/category/18_1015704951.png" />
                </div>
            </div>
        </div>
    </div>
</body>
    </>
  )
}

export default App
