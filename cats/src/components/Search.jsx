const Search = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    props.setSearchQuery(data.get("breedType"));
  };

  // const handleChange = (event) => { //setting searchQuery on handleSubmit to avoid unnecessary requests to the server
    //props.setSearchQuery(event.target.value);
  // };

  return (
    <div>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          name="breedType"
          placeholder="Search by breed"
          type="text"
          //onChange={handleChange}
        ></input>
        <input placeholder="Search by temperament" type="text"></input>
        <input placeholder="Search by country of origin" type="text"></input>
        <input type="submit" value="Search"></input>
      </form>
    </div>
  );
}

export default Search;
