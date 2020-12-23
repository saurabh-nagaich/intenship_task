import React from 'react'
import "./assest/css/bootstrap-responsive.min.css"
import "./assest/css/bootstrap.min.css"
import "./assest/themes/bootshop/bootstrap.min.css"
import  "./assest/themes/css/base.css" 
import "./assest/themes/css/bootstrap-responsive.min.css"
import "./assest/themes/css/font-awesome.css"
import "./assest/themes/js/google-code-prettify/prettify.css"

import './App.css';
import Heder from './component/Heder';
import Slider from './component/Slider'
import Footer from './component/Footer'
import MainBody from './component/MainBody'

function App() {
  return (
    <div className="App">
      <Heder />
      {/* <Slider /> */}
      <MainBody />
      <Footer />
    </div>
  );
}

export default App;
