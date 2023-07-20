import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { collection, addDoc, getFirestore, getDocs, doc, updateDoc, deleteField, deleteDoc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyBX0Tuxe2RCcsVN_o2vU_pPkkujDFRv-f0",
  authDomain: "learnfirebase-c3c75.firebaseapp.com",
  projectId: "learnfirebase-c3c75",
  storageBucket: "learnfirebase-c3c75.appspot.com",
  messagingSenderId: "197023284500",
  appId: "1:197023284500:web:61a3169f1b0d618b3f5601",
  measurementId: "G-GTB7JMSFXQ"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore (app);






 const colRef=collection(db, "books") ;
 getDocs(colRef)
 .then((snapshot=>{
  let book=[];
  snapshot.docs.forEach((doc)=>{
 book.push({...doc.data() , id:doc.id});
  })
  console.log(book);
}));
// colRef.forEach(async(doc)=>{
//   let book=[];
//   book.push(doc.data() , doc.id);
//   
// })
 
//  }));




//  adding

let add=document.getElementById("add");
add.addEventListener("submit", async (event) => {
  event.preventDefault();

  let bookName = document.querySelector("#bookName").value;
  let bookAuthor = document.querySelector("#bookAuthor").value;
  let bookGenre = document.querySelector("#bookGenre").value;

  try {
      //authentication

      let my_flag = false;
      getDocs(colRef)
      .then((snapshot=>{
      snapshot.forEach(  (daa) => {

          if(daa.data().bookName == bookName){
              my_flag = true;
          }

      })
    }))
  
      if (!my_flag){
          
          const docRef = await addDoc(
          colRef,
          {
              bookName: bookName,
              bookAuthor: bookAuthor,
              bookGenre: bookGenre
          });
      console.log("Document written with ID: ", docRef.id);
      window.location.reload();

      }else{
          alert("Book already exist")
      }
    } 
    catch (e) {
      console.error("Error adding document: "+ e);
  }
})

      //end authentication


      // delete

 let del=document.getElementById("inp").value;

document.addEventListener("onclick",(data) => {
  data.preventDefault()
let docs=doc(db,"books",del)
deleteDoc(docs)
.then(()=>{
  del.reset()
})
})


   
