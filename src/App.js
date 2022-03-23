function App(){
  
  const [quotes, setQuotes] = React.useState([]);
  const [randomQuotes, setRandomQuotes] = React.useState("");
   
   React.useEffect(() => {
      async function fetchData(){
        const response = await fetch("https://type.fit/api/quotes")
        const data = await response.json();
        
        setQuotes(data);
        let randIndex= Math.floor(Math.random() * data.length)
        setRandomQuote(data[randIndex])
      }
      fetchData();
   }, [])
  
    const getNewQuote = () => {
      let randIndex= Math.floor(Math.random() * quotes.length)
        setRandomQuote(quotes[randIndex])
    }
  
   return (
  <div className="contatiner pt-5">
       <div className="jumbotron">
         <div className-"card">
           <siv className="card-header">Inspirational Quotes</div>
           <div className="card-body">
             {randomQuote ? (
                <>
                 <h5 className="card-title">- {randomQuote.author || "No author"}</h5>
                 <p className="card-text">&quot;{randomQuote.text}</p>
                </>
             ) : (
             <h2>Loading</h2>
             )}
             
             <div className="row">
               <button onClick={getNewQuote} className="btn btn-primary ml-3">New Quote</button>
               <a href="" className="btn btn-warning"></a>
               <a href="" className="btn btn-danger"></a>
           </div>
         </div>
       </div>
       
    
  </div>
      );
}

ReactDOM.render(<App/>, document.getElementById('app'))