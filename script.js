getcatinfo(0);
async function getcatinfo(x){
  if(x===0){
  var catinfo = await fetch("https://cataas.com/api/cats")
  }
  else{
    
    var catinfo =await fetch(`https://cataas.com/api/cats?tags=${x}`)
  }
  const catinfox = await catinfo.json();
  
  const searchbar = document.createElement("div");
  searchbar.className = "search";
  searchbar.innerHTML = `
<input type="text" class="search-bar" placeholder="Search by Type">
                <button onclick="search()">submit</button>
                `;
  
  

  const catList = document.createElement("div");
  catList.className = "cat-list";
  catinfox.forEach((catindex)=>{
    const catContainer = document.createElement("div");
    catContainer.className = "cat-container";
    catContainer.innerHTML = `
       <div>
      <img class="image" src="https://cataas.com/cat/${catindex.id}">
        <h3 class="cat-id">The id of this cat is ${catindex.id}</h3>
         <p class="cat-time">This cat's profile was created on ${new Date(
          catindex.created_at
        ).toDateString()}</p>
        <p class="cat-tags">This cat is famous for ${catindex.tags}</p>
        
      </div>
      
      `;

    catList.append(catContainer);
  })
   
  

  document.body.append(searchbar,catList);
}
    
async function search(){
    let type = document.querySelector(".search-bar").value;
    getcatinfo(type);
    document.querySelector(".cat-list").innerHTML="";
    
  }
  

 