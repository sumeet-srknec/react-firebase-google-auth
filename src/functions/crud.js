import { db } from "../firebase/fire";
import { collection, getDoc, getDocs, setDoc, updateDoc, deleteDoc, doc, onSnapshot } from "firebase/firestore";

const generateRandomID = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomID = "";

    for (let i = 0; i < 16; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomID += characters.charAt(randomIndex)
    }

    return randomID;
}

export const createData = async (collectionName, data) => {
    const id = generateRandomID();

    try {
        const docRef = doc(db, collectionName, id);
        await setDoc(docRef, {
            id,
            ...data
        });
    } catch(error) {
        console.error("Error", error);
    }
}

export const readData = async ( collection, id) => {
    try {
        const docRef = doc(db, collection, id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data: ", docSnap.data());
            return docSnap.data();
        } else {
            console.log("No such document");
        }
    } catch (error) {
        console.error("Error reading document", error.message);
        
    }
}

export const updateData = async (collectionName, id, data) => {
    try {
        const docRef = doc(db, collectionName, id);
        await updateDoc(docRef, {
            id: id,
            ...data
        });

        console.log("Document successfully updated");
        
    } catch(error) {
        console.error("Error", error);
    }
}


export const deleteData = async ( collection, id) => {
    try {
        const docRef = doc(db, collection, id);
        await deleteDoc(docRef);

        console.log("Document successfully deleted");
    } catch (error) {
        console.error("Error deleting document", error.message);
        
    }
}

export const readAllData = async(collectionName) => {
    try {
        const newDataArr = [];
        const querySnap = await getDocs(collection(db, collectionName));
        querySnap.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            newDataArr.push(doc.data());
        });

        return newDataArr;
    } catch (error) {
        console.error("Error reading collections", error.message);
        
    }
}

export const listenToCollection = (collectionName, callback) => {
    const collectionRef = collection(db, collectionName);

    return onSnapshot(collectionRef, (querySnap) => {
        const newDataArr = [];
        querySnap.forEach((doc) => {
            newDataArr.push(doc.data());
        });

        callback(newDataArr);
    })
}