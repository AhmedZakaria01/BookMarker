var nameInput = document.getElementById("name");
var urlInput = document.getElementById("url");
var submit = document.getElementById("submit");
var bookMarkTable = document.querySelector("#tableBody");






var bookMarkArray = [];

if (localStorage.getItem("item")!= null) {
     bookMarkArray = JSON.parse( localStorage.getItem("item"))
     displayBookMark()
}




//  function lma ados 3la el btn
//  hyro7 yndah 3la el add
// hyd5ol gowa el add 
// hy3by el values bta3t el inputs f Object 3shan lehom 3laka bb3d fa hgm3hom m3 b3d
// kda el object da kol mra hados hyshel el adem w y7ot el gded fa m7tag a3ml array a3by feh
// 3mlna aarray w 3mlna push lel Object gowa el array




// When he clicks Submit
submit.addEventListener("click",function () {
     // call function ADD
     addBookMark()
     clearForm()
     displayBookMark()
})


function addBookMark () {
     //Get All input Values inside an Object
      bookMarkObject = {
          name:nameInput.value,
          url:urlInput.value
     }
     // Push The Object Inside The Array
     bookMarkArray.push(bookMarkObject)
     // console.log(bookMarkArray);
     displayBookMark()
     localStorage.setItem("item",JSON.stringify( bookMarkArray))


}

function clearForm() {
     nameInput.value = ""
     urlInput.value = ""
}


function displayBookMark() {
     // hn3ml Cartona n3by feha el rows bta3t el html
     var cartona = ``
// f kol mara b3ml add el object bytkwen w yt3mlo push gowa el array fa ana h3ml loop 3la el array da
// fa lw el array el lenght bta3o b 1 hy3ml 1 row   elc...
     for (var i = 0; i < bookMarkArray.length; i++) {
          // hn3by fl kartona w hn3ml bookmarkArray[i]  3shan ngeb el index y3ni anhy object w.name w . url 3shan n5osh gowah
          cartona += `
         
       
          <tr>
            <td>${i + 1}</td>
            <td>${bookMarkArray[i].name}</td>
            <td><a href="https://${bookMarkArray[i].url}"   target="_blank" > <button class="btn btn-outline-info btn-sm">Visit</button> </a> </td>
            <td><button onclick="deleteBookMark(${i})" class="btn btn-outline-danger btn-sm">Delete</button></td>
          </tr>
          `
          // b3d ma 3abena el objects fl array w 3mlna 3laha loop w 3abena el klam da kolo hn7ot b2a el cartona fl Html
          bookMarkTable.innerHTML = cartona;
     }
}

function deleteBookMark(deleteIndex) {
     bookMarkArray.splice(deleteIndex, 1)
     localStorage.setItem("item", JSON.stringify(bookMarkArray))
     displayBookMark()
}


