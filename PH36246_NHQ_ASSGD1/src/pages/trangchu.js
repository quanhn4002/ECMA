// trangchu.js
import FooterComponents from '../components/Footer';
import HeaderComponents from '../components/header';
import { khachsan } from '../../db.json' assert { type: "json" };

const trangchu = function () {
    return `
        ${HeaderComponents()}
        <h2 class="flex justify-center py-6 text-4xl font-extrabold dark:text-white">
            Khách sạn
        </h2>
        <div class="mx-auto mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-3 xl:gap-x-8 gap-4 ml-3 mr-3 h-72 ">

            ${khachsan.map(function (item) {
                return `
                    <div class="bg-white group relative">
                        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                            <img src="${item.image}" alt="Front of men's Basic Tee in black." class="h-32 w-full object-cover object-center lg:h-full lg:w-full">
                        </div>
                        <div class="mt-4 flex justify-between">
                            <div>
                                <h3 class="text-xl text-gray-700">
                                    <a href="#">
                                        <span aria-hidden="true" class="absolute inset-0"></span>
                                        ${item.name}
                                    </a>
                                </h3>
                                 <p class="mt-1 text-sm text-gray-500"> ${item.location}</p>
                            </div>
                            <p class="text-l font-medium text-red-900">$${item.priceRange}</p>
                            </div>
                            <p class="text-l font-medium text-grey-900"> Available Rooms:${item.numRooms}</p>
                    </div>
                `;
            }).join('')}
        </div>
        ${FooterComponents()}
    `;
};

export default trangchu;
