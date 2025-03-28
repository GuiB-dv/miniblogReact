import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, query, where, orderBy, onSnapshot } from "firebase/firestore";

export const useFetchDocuments = (docCollection, search = null, uid = null) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const collectionRef = collection(db, docCollection);
    let q;

    if (search) {
      q = query(
        collectionRef,
        where("tagsArray", "array-contains", search),
        orderBy("createdAt", "desc")
      );
    } else if (uid) {
      q = query(
        collectionRef,
        where("uid", "==", uid),
        orderBy("createdAt", "desc")
      );
    } else {
      q = query(collectionRef, orderBy("createdAt", "desc"));
    }

    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        setDocuments(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
        setLoading(false); // Only stop loading after documents are set
      },
      (error) => {
        console.error("Error fetching documents:", error);
        setError(error.message);
        setLoading(false);
      }
    );

    return () => unsubscribe(); // Cleanup on unmount
  }, [docCollection, search, uid]);

  return { documents, loading, error };
};
