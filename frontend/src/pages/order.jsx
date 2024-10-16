import { CiStar } from "react-icons/ci";
const Order = () => {
  return (
    <div>
      <div className=" flex item-center space-x-4 border-2 ml-14">
        <img src="" alt="product" className="w-20 h-20 object-cover" />
        <div className="flex-grow">
          <p className="text-sm font-semibold text-gray-600 mb-1">Delivered on</p>
          <h3 className="text-lg font-bold mb-2 pr-6">product name.</h3>
          <div className="flex flex-row  ">
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
          </div>

          <p className="text-sm text-gray-500">Rate this product now</p>
        </div>

      </div>
    </div>
  )
}

export default Order