import { useState, useEffect } from "react";
import Search from "./Search";
import {fetchCats} from "../api"
import Error from "./Error";

const CatContent = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [catList, setCatList] = useState([]) //temporary list 
  const [isLoading, setIsLoading] = useState(false)
  const [error, serError] = useState(null)

  useEffect(() => {
    if(searchQuery.length === 0) {
      return 
    }
    setIsLoading(true)
    fetchCats(searchQuery)
      .then((catsFromApi) => {
        setCatList(catsFromApi)
        setIsLoading(false)
      })
      .catch((err) => {
        serError(err)
      })
  }, [searchQuery])
    
  if(error) {
    return <Error error ={error} />
  }
  if(isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <Search setSearchQuery={setSearchQuery}/>
    </div>
  );
}

export default CatContent;
