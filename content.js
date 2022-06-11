console.log("updated5");

function storage(){
  chrome.storage.local.get(['words'],function(data){
    if(data.words == null){
      chrome.storage.local.set({"words":[]},function(){
        console.log("the storage is set");
      })
    }else{
      console.log(data.words);
    }
  });
}

        window.onload =  function() 
        {
          // if(localStorage.getItem("words") == null){
          //   localStorage.setItem("words",JSON.stringify([]))
          // }
         storage();
        document.getElementsByTagName('textarea')[0].addEventListener("change", fun);
        
        }


    function fun() {
        let x =document.getElementsByTagName('textarea')[0].value;
        // let y = localStorage.getItem("words");
        // let arr = JSON.parse(y);
        // arr.push(x);
        // localStorage.setItem("words",JSON.stringify(arr));
        chrome.storage.local.get(['words'],function(result){
          console.log(result);
          let temp = result.words;
          temp.push(x);
          chrome.storage.local.set({"words":temp},function(){
            console.log("value updated")
          })
        })
        console.log(x);
    }
