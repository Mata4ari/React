import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoviesCatalog from '../Components/MoviesCatalog';
import { MovieType,movieAPI } from '../api';
import { useState,useEffect } from 'react';
import SearchBar from './SearchBar';



function Page() {
  const [text, setText] = useState<string>('spider');

  function OnSearchClick(text:string){
    setText(text);
    console.log(text);
  }


  return (
    <div>
      <Router>
        <Header></Header>
        <SearchBar onSearch={OnSearchClick}></SearchBar>
        <Routes>
          <Route path="/movies" element={<MoviesCatalog category='movie' title={text}></MoviesCatalog>} />
          <Route path="/cartoons" element={<MoviesCatalog category='series' title={text}></MoviesCatalog>} />
          <Route path="/shows" element={<MoviesCatalog category='series' title={text}></MoviesCatalog>} />
        </Routes>
        <Footer></Footer>
        </Router>
    </div>
  );
}

export default Page;