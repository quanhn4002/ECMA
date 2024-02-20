import HeaderComponentsadmin from "../../components/headeradmin";
import FooterComponents from "../../components/Footer";
// import { posts } from '../../db.json' assert { type: 'json'};
import { useEffect, useState } from "../../libs";

const ListDp = function () {
  //satate
  const [posts, setPost] = useState([]); // tạo ra 1 state để lưu trữ dữ liệu từ api

  // call api bằng fetch
  useEffect(() => {
    fetch("http://localhost:3000/datphong")
      .then((reponse) => reponse.json())
      .then((data) => setPost(data));
  }, []);
  useEffect(() => {
    const btndelete = document.querySelectorAll(".btn-delete");
    for (let btn of btndelete) {
      btn.addEventListener("click", () => {
        let id = btn.dataset.id;
        fetch(`http://localhost:3000/datphong/${id}`, {
          method: "DELETE",
        }).then(() => router.navigate("/contact"));
      });
    }
  });

  return `
      ${HeaderComponentsadmin()}
      
       

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">


<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th scope="col" class="px-4 py-2" style="padding-left: 20px;">
             Tên Khách Hàng
            </th>
            <th scope="col" class="px-4 py-2">
            Email
            </th>
            <th scope="col" class="px-4 py-2">
                Phone
            </th>   
            <th scope="col" class="px-4 py-2">
                Checkin
             </th>
             <th scope="col" class="px-4 py-2">
                Checkout
              </th>
               <th scope="col" class="px-4 py-2">
                  Tên Khách Sạn
              </th>
               <th scope="col" class="px-4 py-2">
              Loại Phòng
           </th>
                <th scope="col" class="px-4 py-2">
                Mô Tả
            </th>
       


            <th scope="col" class="px-4 py-2">
                Action
            </th>
        </tr>
    </thead>
    <tbody>
    ${posts
      .map((post) => {
        return `
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">  
            <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white" style="padding-left: 10px;">
            ${post.name}
            </th>
            <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white" >
            ${post.email}
            </th>
            <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white" >
            ${post.phone}
            </th>
            <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white" >
            ${post.checkin}
            </th>
            <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white" >
            ${post.checkout}
            </th>
            <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white" >
            ${post.nameHotel}
            </th>
            <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white" >
            ${post.categoryName}
            </th>
            <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white" >
            ${post.description}
            </th>

            <td class="px-6 py-4">
                <a href="/updateDm/${post.id}" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
               
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline" style="padding-left: 20px;"><button data-id="${post.id}" class="btn-delete">Delete</button></a>
            </td>
        </tr>
      `;
      })
      .join("")}


    
       
    </tbody>
</table>
</div>


      ${FooterComponents()}
    `;
};

export default ListDp;
// danh s
