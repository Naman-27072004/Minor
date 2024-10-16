export const Order_details = () => {
    return (
        <div className="m-1 flex flex-col gap-4 items-center">
            <span className="font-bold text-3xl">Order details</span>
            <span className="text-sm text-gray-500 mt-2">Order ID: </span>
            <div className="flex justify-evenly">
                <div className="grid">
                    <span className="text-xl font-semibold text-gray-800 mb-2">VIVO Book 14</span>
                    <span className="text-gray-600 mb-4">Intel Core i5, 14 inch FHD, 8GB RAM, 512GB SSD</span>
                    <span className="text-lg font-bold text-orange-500">₹45999.0</span>
                    <button className="bg-orange-500 text-white rounded-full px-4 py-2 shadow-md hover:bg-orange-600 transition-colors duration-300">Cancel this order</button>
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbF36jXYoiEFXdfBWJ_RyiFirqqK6SvyJ7uQ&s" alt="" className="w-full h-48 object-contain rounded-t-lg mb-4"/>
                </div>
            </div>

            <span className="font-bold text-3xl">rate your experience</span>
            <span>rate the product</span>
        </div>
    )
}
