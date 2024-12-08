

import Image from "next/image";

Image
function Header(){
    return(
        
        
        <div 
         className='w-full h-[78px] bg-black text-white p-2 text'>Cards 
        <header className="text-center py-4">
            <h1 className="text-2xl font-bold">Catalogue</h1>
            <h2 className="text-xl text-left text-black font-semibold">CR-V</h2>
        </header>
   
        <div className="flex flex-col sm:flex-row justify-center items-center">
            <div className="w-full sm:w-1/2 p-4">
                <img src={"/images/img3.jpg"} alt="CR-V SUV" className="w-full">
                </img>
               
                <p className=" text-lg text-black text-right font-semibold mt-4">SUV</p>
                <p className="text-lg  text-black font-bold">$80.00/day</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Rent Now</button>
                
            </div>
    
         
            
            </div>
        </div>
        
  
    )

  
}
export default 
function Footer(){
    return(
        

    <div className="bg-gray-100">
        <header className="bg-gray-800 text-white p-4">
          <h1 className="text-2xl font-bold">Content</h1>
        </header>
      
        <main className="container mx-auto p-8">
          </main>
      
        <footer className="bg-gray-800 text-white p-4">
          </footer>
      </div>
     
    )}

       
  