import { useState } from "react";



export default function Functionality(){

    const [journal, setJournal] = useState(
        {
            tittle: "",
            Author: "",
            Pages: "",
            Expandable: "true",
            Categories: [],
        }
    );
    
    const comment = {creator: "",commentary: ""}
    
    const user = [
        {id: "", name: "", },
        {loggedIn: "", active: ""}
    ]
    
    const addCategory = (category) => {
        setJournal((prev) => ({
          ...prev,
          categories: [...prev.categories, category],
        }));
      };
    
    
    const addPage = () => {
        setJournal((prev) => ({
            ...prev,
            pages: [...prev.pages, { id: Date.now(), content: "" }],
        }));
    };
    
    const [currentPage, setCurrentPage] = useState(0);
    
    const goToNextPage = () => {
      setCurrentPage((prev) => prev + 1);
    };
    
    const goToPrevPage = () => {
      setCurrentPage((prev) => prev - 1);
    };
    
    
    const saveJournal = () => {
        localStorage.setItem("journal", JSON.stringify(journal));
      };
      
    
    const loadJournal = () => {
    const savedJournal = localStorage.getItem("journal");
        if (savedJournal) {
            setJournal(JSON.parse(savedJournal));
        }
    };
   return
   <div>
    empty
   </div> 
}

