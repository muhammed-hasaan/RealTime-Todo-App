import { db } from "./firebase.mjs";
import { collection, getDoc, addDoc, doc, deleteDoc, query, onSnapshot, updateDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";


var btn = document.getElementById("add");
btn.addEventListener("click", async () => {
    var data = document.getElementById("input1").value;
    // console.log(data);
    try {
        const docRef = await addDoc(collection(db, "users"), {
            dataname: data
        });
        console.log("Document written with ID: ", docRef.id);
        btn.disabled = false
    } catch (e) {
        console.error("Error adding document: ", e);
    }

    // window.location.reload()
})
document.addEventListener("keydown", async (e) => {
    if (e.keyCode == 13) {
        var data1 = document.getElementById("input1").value;
        // console.log(data);
        try {
            const docRef = await addDoc(collection(db, "users"), {
                dataname: data1
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
})

// var changearr = [];
const q = query(collection(db, "users"));
onSnapshot(q, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
        console.log(change.doc.id);
        // changearr.push(change.doc.data().data);
        var output = document.getElementById("output");
        output.innerHTML +=
            `
                <div class="added">
                <h3 style="display:flex; justify-content:centre; align-item:center;margin-top:13px;">${change.doc.data().dataname}</h3>
               <div>
               <i style="margin-top:13px; padding-right:20px;" onclick="edit('${change.doc.id}')" class="fa-solid fa-pen-to-square"></i>
               <i style="margin-top:13px;" onclick="deleteitem('${change.doc.id}')" class="fa-solid fa-trash"></i>
               </div>
               </div>
               `
        //    <button style=" height:50px; width:50px;" onclick="edit('${change.doc.id}')">Edit</button>
        //    <button style=" height:50px; width:50px;" onclick="deleteitem('${change.doc.id}')">Delete</button>
        console.log(output);
    })
});
async function deleteitem(id) {
    await deleteDoc(doc(db, "users", id));
    window.location.reload()
}

async function edit(name) {
    const docRef = doc(db, 'users', name);
    const docSnapshot = await getDoc(docRef);
    var prop = prompt("Update your value");
    await updateDoc(docRef, {
        dataname: prop
    });
    window.location.reload();
    console.log("Document does not exist.");
}
window.edit = edit;





window.deleteitem = deleteitem