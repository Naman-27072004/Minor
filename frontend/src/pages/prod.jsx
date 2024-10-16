// import { techbazaar } from '/assets/techbazaar.png';

const Prod = () => {
  return (
    <div>
      <div className="flex justify-evenly mt-10">
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbF36jXYoiEFXdfBWJ_RyiFirqqK6SvyJ7uQ&s" className="w-full h-48 object-contain rounded-t-lg mb-4" />
        </div>
        <div className="grid">
          <span className="text-xl font-semibold text-gray-800 mb-2">VIVO Book 14</span>
          <span className="text-gray-600 mb-4">Intel Core i5, 14 inch FHD, 8GB RAM, 512GB SSD</span>
          <span className="text-lg font-bold text-orange-500">₹45999.0</span>
          <span><button className="bg-orange-500 text-white rounded-full px-4 py-2 shadow-md hover:bg-orange-600 transition-colors duration-300">Add to Cart</button></span>
          <span className="text-sm text-gray-500 mt-2">category : Laptops</span>
          <span className="text-sm text-gray-500 mt-2">brand : VIVO</span>
        </div>
      </div>
      <div className="m-1 flex flex-col gap-4 items-center">
        <span className="font-bold text-3xl">Related Product{"'"}s</span>
        <span><button className="bg-orange-500 text-white rounded-full px-4 py-2 shadow-md hover:bg-orange-600 transition-colors duration-300">View all Product{"'"}s</button></span>
        <div>
          products
        </div>
      </div>
      <div className="m-1 flex flex-col gap-4 items-center">
        <span className="font-bold text-3xl">costumer review{"'"}s</span>
        <input type="text" placeholder="Add Your review" className="bg-gray-100 my-1 p-1 outline-none rounded"/>
        <span><button className="bg-orange-500 text-white rounded-full px-4 py-2 shadow-md hover:bg-orange-600 transition-colors duration-300">Submit</button></span>
        <div>Review{"'"}s</div>
      </div>
    </div>
  )

}

export default Prod;