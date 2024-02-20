import HeaderComponentsadmin from "../../components/headeradmin";
import { router, useEffect, useState } from "../../libs";


const updatedm= function (id) {
    const [post, setPost] = useState({});
    useEffect(() => {
        fetch(`http://localhost:3000/danhmuckhachsan/${id}`)
          .then((reponse) => reponse.json())
          .then((data) => setPost(data));
      }, []);

  useEffect(() => {
    const formupatedm = document.querySelector("#form-upatedm");
    formupatedm.addEventListener("submit", (e) => {
      e.preventDefault();
      const categoryName = document.querySelector("#categoryName");

      let newCategory = {
        "categoryName": categoryName.value,
      };

      fetch(`http://localhost:3000/danhmuckhachsan/${id}`, {
        method: "PUT",
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
            Update Category
          </div>
          <form class="py-4 px-6" action="" id="form-upatedm">
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="name">
              categoryName
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="categoryName" type="text" placeholder="Enter your name" value ="${post.categoryName}">
            </div>
            <div class="flex items-center justify-center mb-4">
            <button
              class="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
              type="submit">
              Thêm
            </button>
          </div>
          
    </div>
  
  `;
};

export default updatedm;
