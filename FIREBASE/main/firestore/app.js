
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
 import { getFirestore,collection, addDoc , getDocs, doc, setDoc,deleteDoc  } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
 
 const firebaseConfig = {
   apiKey: "AIzaSyB9z6SMTOt5NIsqqqQzb8I-Gb8q_wrSBvM",
   authDomain: "auth-18c9d.firebaseapp.com",
   projectId: "auth-18c9d",
   storageBucket: "auth-18c9d.appspot.com",
   messagingSenderId: "837189411819",
   appId: "1:837189411819:web:2bea68129dcdcd4936efae",
   measurementId: "G-RYY383NERQ"
 };

//  const app = initializeApp(firebaseConfig);
//  const db = getFirestore(app);
//  const docRef =collection(db, "books")
// // -------create data------------------------

// let sub=document.getElementById("sub");
// sub.addEventListener("click", async (event) => {
//     event.preventDefault();

//     let bookName = document.querySelector("#bookName").value;
//     let bookAuthor = document.querySelector("#bookAuthor").value;
//     let bookGenre = document.querySelector("#bookGenre").value;
//     let key = document.querySelector("#key").value;


// try {
//   await setDoc(doc(docRef,key), {
//         bookName: bookName,
//         bookAuthor: bookAuthor,
//         bookGenre: bookGenre
//     });
//     alert("done")
//     console.log("Document written with ID: ", docRef.id);
//   window.location.reload();

//   } catch (e) {
//     alert("not done")
    
//     console.error("Error adding document: ", e);
//   }
// })

// // ---------------end--------------------------------


// // -------read data------------------------

// const querySnapshot = await getDocs(collection(db, "books"));
// querySnapshot.forEach((doc) => {
// //   console.log(`${doc.id} , ${doc.data()}`);
//   console.log(`${doc.id} => ${doc.data()} and the object is ${doc.data().bookAuthor} ,${doc.data().bookGenre} ,${doc.data().bookName}` );

// });
// // ---------------end--------------------------------


// // -------delete data------------------------

// // -------delete data------------------------
// let del = document.getElementById("del");
// del.addEventListener("click", async () => {
//   let dkey = document.getElementById("keyd").value;

//   try {
//     await deleteDoc(doc(db, "books", dkey));
//     alert("Document deleted successfully.");
//     console.log("Document with ID: ", dkey, " deleted.");
//     window.location.reload();
//   } catch (e) {
//     alert("Error deleting document: " + e.message);
//     console.error("Error deleting document: ", e);
//   }
// });





const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const booksCollection = collection(db, "books");

// --- Add Book to Database ---
const bookAddForm = document.getElementById("bookAddForm");
bookAddForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const bookName = document.getElementById("bookName").value;
  const bookAuthor = document.getElementById("bookAuthor").value;
  const bookGenre = document.getElementById("bookGenre").value;
  const key = document.getElementById("key").value;

  try {
    await setDoc(doc(booksCollection, key), {
      bookName: bookName,
      bookAuthor: bookAuthor,
      bookGenre: bookGenre
    });
    alert("Book added to the database.");
    console.log("Document written with ID: ", key);
    window.location.reload();
  } catch (error) {
    alert("Error adding book to the database: " + error.message);
    console.error("Error adding document: ", error);
  }
});

// --- Delete Book from Database ---
const bookDeleteForm = document.getElementById("bookdeleteForm");
bookDeleteForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const key = document.getElementById("keyd").value;

  try {
    await deleteDoc(doc(booksCollection, key));
    alert("Book deleted successfully.");
    console.log("Document with ID: ", key, " deleted.");
    window.location.reload();
  } catch (error) {
    alert("Error deleting book from the database: " + error.message);
    console.error("Error deleting document: ", error);
  }
});
// --- Read Data ---
const fetchBooks = async () => {
    try {
      const querySnapshot = await getDocs(booksCollection);
      querySnapshot.forEach((doc) => {
        console.log(
          `${doc.id} => ${doc.data().bookAuthor}, ${doc.data().bookGenre}, ${doc.data().bookName}`
        );
  
        let bookDisplay = document.getElementById("bookdisplay");
        bookDisplay.innerHTML += `
          <div class="classtitle">
          <p>ID: ${doc.id}</p>
            <h3>${doc.data().bookName}</h3>
            <p>${doc.data().bookAuthor} -- ${doc.data().bookGenre}</p>
          </div>
        `;
      });
    } catch (error) {
      console.error("Error fetching books: ", error);
    }
  };
  
  fetchBooks();
  