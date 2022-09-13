import './App.css'
import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import MovieDetails from './components/MovieDetails';
import { BrowserRouter,Switch,Route } from 'react-router-dom';

function App() {

  let [ searchResult,setSearchResult] = React.useState([])
  let [ searchText,setSearchText ] = React.useState("");

  React.useEffect(() => {

   if(searchText){
    fetch(`
    https://api.themoviedb.org/3/search/movie?api_key=c5a0e90027a3182835d4703f43119fa4&language=en-US&query=${searchText}&page=1&include_adult=false`)
      .then(res => res.json())
      .then(data => {
        setSearchResult(data.results)
      })
   }

  }, [searchText])


  return (
    <BrowserRouter>
      <div>

        <Switch>

          <Route path='/' exact>
            <Navbar setSearchText={setSearchText} />
            <Main searchText={searchText} searchResult={searchResult}/>
          </Route>

          <Route path='/details/:id'>
            <MovieDetails />
          </Route>

        </Switch>
        
      </div>
    </BrowserRouter>
    
  )
}

export default App;
