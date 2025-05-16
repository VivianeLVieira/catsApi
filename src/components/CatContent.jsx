import { useState, useEffect } from "react";
import Search from "./Search";
import {fetchCats} from "../api"
import Error from "./Error";
import ViewAllCats from "./ViewAllCats";
import Drawer from "./Drawer";

const CatContent = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [catList, setCatList] = useState([]) //temporary list 
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if(searchQuery.length === 0) {
      return 
    }
    setIsLoading(true)
    fetchCats(searchQuery)
      .then((catsFromApi) => {
        // setError({ /to test a possible error coming from API server
        //   msg: "Testing error",
        //   response: {
        //     status: "Not found"
        //   }
        // })
        setCatList(catsFromApi)
        setIsLoading(false)
      })
      .catch((err) => {
        setError(err)
      })
  }, [searchQuery])

  if(error) {
    return <Error error ={error} />
  }
  
  if(isLoading) {
    return <p>Loading...</p>
  }

  return (
    <>
      <Search setSearchQuery={setSearchQuery}/>
      {/* composition example */}
      <Drawer buttonText="view all cats"> 
        <ViewAllCats catList={catList}/>
      </Drawer>
    </>
  );
}

export default CatContent;
