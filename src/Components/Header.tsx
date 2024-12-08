//import { pages } from "next/dist/build/templates/app-pages"//


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
            <main className="container mx-auto p-8">
            </main>
           
           
           </div>
            <header className="text-center py-78px">
            
            <main><h1 className="w-full w-[5,512px] h-[80px] bg-black  flex-justify-space-between font-bold ">Content</h1></main>
            
        </header>
   

 

<div className="bg-white shadow-md  rounded-lg p-6">
<h2 className="text-lg font-semibold mb-4">Rental Summary</h2>

<img src="/images/img5.jpg"  alt="Car"   className="w- alt bg-#3563E" />
<p className="font-medium text-gray-700">Nissan GT – R</p>

<p className="text-sm text-gray-500 mb-2">★★★★☆ 400+ Reviews</p>
<div className="border-t pt-4">
  <div className="flex justify-between text-gray-600">
    <span>Subtotal</span><span>$80.00</span>
  </div>
  <div className="flex justify-between text-gray-600">
    <span>Tax</span><span>$0</span>
  </div>
  <div className="flex justify-between font-semibold text-gray-800 mt-4">
    <span>Total Rental Price</span><span>$80.00</span>
  </div>
</div>
<div className="mt-4">
  <input
    type="text"
    placeholder="Apply promo code"
    className="border rounded-l-lg w-2/3 px-4 py-2" />
  <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg">Apply now</button>
</div>
</div>


<div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-lg  text-black font-semibold mb-4">Billing Info</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Name</label>
          <input
            type="text"
            className="w-full border px-4 py-2 rounded-lg"
            placeholder="Your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Phone Number</label>
          <input
            type="text"
            className="w-full border px-4 py-2 rounded-lg"
            placeholder="Phone number"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Address</label>
          <input
            type="text"
            className="w-full border px-4 py-2 rounded-lg"
            placeholder="Address"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Town / City</label>
          <input
            type="text"
            className="w-full border px-4  py-2 rounded-lg"
            placeholder="Town or city"
          />
        </div>
      </form>
    </div>
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-lg  text-black font-semibold mb-4">Rental Info</h2>
      <form>
  

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Pick-up Location</label>
          <select className="w-full border px-4 py-2 rounded-lg">
            <option>Select your city</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Pick-up Date</label>
          <input
            type="date"
            className="w-full border px-4 py-2 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block  text-black-700 mb-1">Pick-up Time</label>
          <input
          type="time"
            className="w-full border px-4 py-2 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Drop-off Location</label>
          <select className="w-full border px-4 py-2 rounded-lg">
            <option>Select your city</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Drop-off Date</label>
          <input
            type="date"
            className="w-full border px-4 py-2 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Drop-off Time</label>
          <input
            type="time"
            className="w-full border px-4 py-2 rounded-lg"/>
            </div>
          
          <div className="bg-gray-100 p-8 rounded-lg">
        <h2 className="text-2xl  text-black font-bold mb-4">Payment Method</h2>
        <p className="text-gray-600 mb-8">Please enter your payment method</p>
        <label className="block text-gray-700 font-bold mb-2" form="Credit-Card">
            Credit Card
          </label>
        
        <div className="mb-8">
          <label className="block text-gray-700 font-bold mb-2" form="card-number" >
            Card Number
            

            <span></span>
            <div className="bg-gray-20 p-4"></div>
            <div className="flex justify-end"></div>
            <input type="text" id="card-number" className="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
           
           
            <div className="bg-gray-20 p-4">
    <div className="flex justify-end">
        <img src="/images/Capture.PNG " alt="Capture.PNG " className="w-16 h-16"></img>
        <img src="/images/mastercard.PNG " alt="mastercard.PNG " className="w-16 h-16"></img>
    </div>
    </div>

            <label className=" flex justify-end block text-gray-700 text-sm text-right font-bold mb-2">Expiration Date</label>
            <div className="flex justify-end">
        <input type="text" placeholder=" DD/MM/YY" className="  shadow appearance-none border justify-end rounded justify-end right py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlineflex justify-end"></input>
    </div>
          </label>
          
          <label></label>
        <div></div>  
          <label className=" flex justify-end block text-gray-700 text-sm text-right font-bold mb-2">CVC</label>
            <div className="flex justify-end">
        <input type="text" placeholder=" CVC" className="  shadow appearance-none border justify-end rounded justify-end right py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlineflex justify-end"></input>
       
    </div>
          
          
          <label></label>
          







          
      
      //
          <div className="bg-gray-200 p-4">
    <div className="flex justify-end">
       <div></div>
    </div>//
   




          <input type="text" id="card-number" className="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
          <label className="block text-gray-700 font-bold mb-2" form="Card-Holder">
          Card Holder
          </label>
          <input type="text" id="Card-Holder" className="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
        </div>
        <div className="bg-gray-20 p-4">
    <div className="flex justify-end">
        <img src="/images/paypal1.PNG " alt="paypal1.PNG " className="w-16 h-16"></img>
     
    </div>
    </div>

        <label className="block text-gray-700 font-bold mb-2" form="Pay-Pal">
             PayPal



            



          </label>
          <div className="bg-gray-20 p-4">
    <div className="flex justify-end">
        <img src="/images/bitcoin.PNG " alt="bitcoin.PNG " className="w-16 h-16"></img>
     
    </div>
    </div>  

         <label className="block text-gray-700 font-bold mb-2" form="Bitcoin">
           Bitcoin
          </label>
          
        <div className="flex items-center justify-between">
         
          </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
    <h1 className="text-2xl  text-black font-bold mb-4">Confirmation</h1>
    <p className="text-gray-600 mb-8">We are getting to the end. Just few clicks and your rental is ready!</p>

    <div className="flex items-center mb-4">
        <input type="checkbox" className="mr-2 border-gray-300 rounded-sm" id="marketing-checkbox"></input>
        <label form="marketing-checkbox" className="text-gray-600">I agree with sending an Marketing and newsletter emails. No spam, promised!</label>
    </div>
    <div className="flex items-center mb-4">
        <input type="checkbox" className="mr-2 border-gray-300 rounded-sm" id="terms-checkbox"></input>
        <label form="terms-checkbox" className="text-gray-600">I agree with our terms and conditions and privacy policy.</label>
    </div>

    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Rent Now</button>

    <p className="text-xs text-gray-500 mt-4">All your data are safe</p>
</div>
</div>
      </form>
    </div>
  </div>



    )
    
}

export default Header




