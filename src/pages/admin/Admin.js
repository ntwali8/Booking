export const Admin = () => {
    return (
        <>
            <div className="flex flex-col justify-center my-10">
                <p className="text-4xl text-center my-4">
                    Hi, <span className="font-bold">Admin</span>. Welcome to out site
                </p>
                <div className="h-0.5 bg-gray-200 w-full"></div>
                <div className="w-5/6 mx-auto">
                    <p className="my-4 text-center">Check out all bookings</p>
                    <div className="">
                        <div class="flex flex-col">
                            <div class="">
                                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                <div class="overflow-hidden">
                                    <table class="min-w-full">
                                    <thead class="bg-gray-800 text-white rounded-xl">
                                        <tr>
                                            <th scope="col" class="text-sm font-medium   px-6 py-4 text-left">
                                                Name
                                            </th>
                                            <th scope="col" class="text-sm font-medium   px-6 py-4 text-left">
                                                Phone
                                            </th>
                                            <th scope="col" class="text-sm font-medium   px-6 py-4 text-left">
                                                Email
                                            </th>
                                            <th scope="col" class="text-sm font-medium   px-6 py-4 text-left">
                                                Booked Start time
                                            </th>
                                            <th scope="col" class="text-sm font-medium   px-6 py-4 text-left">
                                                Booked End time
                                            </th>
                                            <th scope="col" class="text-sm font-medium   px-6 py-4 text-left">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium  ">1</td>
                                        <td class="text-sm   font-light px-6 py-4 whitespace-nowrap">
                                            Mark
                                        </td>
                                        <td class="text-sm   font-light px-6 py-4 whitespace-nowrap">
                                            Otto
                                        </td>
                                        <td class="text-sm   font-light px-6 py-4 whitespace-nowrap">
                                            @mdo
                                        </td>
                                        </tr>
                                        <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium  ">2</td>
                                        <td class="text-sm   font-light px-6 py-4 whitespace-nowrap">
                                            Jacob
                                        </td>
                                        <td class="text-sm   font-light px-6 py-4 whitespace-nowrap">
                                            Thornton
                                        </td>
                                        <td class="text-sm   font-light px-6 py-4 whitespace-nowrap">
                                            @fat
                                        </td>
                                        </tr>
                                        <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium  ">3</td>
                                        <td class="text-sm   font-light px-6 py-4 whitespace-nowrap">
                                            Larry
                                        </td>
                                        <td class="text-sm   font-light px-6 py-4 whitespace-nowrap">
                                            Wild
                                        </td>
                                        <td class="text-sm   font-light px-6 py-4 whitespace-nowrap">
                                            @twitter
                                        </td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}