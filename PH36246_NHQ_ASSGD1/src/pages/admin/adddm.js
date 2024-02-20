import HeaderComponentsadmin from "../../components/headeradmin";

import { router, useEffect } from "../../libs";

const addDm = function () {
  useEffect(() => {
    const formadddm = document.querySelector("#form-adddm");

    const categoryName = document.querySelector("#categoryName");
   formadddm.addEventListener("submit", (e) => {
      e.preventDefault();

      let newCategory = {
        "categoryName": categoryName.value,
      };

      fetch("http://localhost:3000/danhmuckhachsan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCategory),
      }).then(() => router.navigate("./admin/listdm"));
    });
  });

  return `
    ${HeaderComponentsadmin()}
   
        <div class="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden w-76">
          <div class="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
           THÊM LOẠI PHÒNG
          </div>
          <form class="py-4 px-6" action="" method="POST" id="form-adddm">
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="name">
              categoryName
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="categoryName" type="text" placeholder="Enter your name">
            </div>
            <div class="flex items-center justify-center mb-4">
            <button
              class="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
              type="submit">
              Thêm
            </button>
            </div>
          </form>
          
    </div>
  
  `;
};

export default addDm;
