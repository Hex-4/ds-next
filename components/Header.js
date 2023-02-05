function Header({ text, fillscreen, content }) {
    if (fillscreen == true)
      if (text)
        return (
          <div className="from-blue-500 to-green-500 h-screen w-screen p-36 transiton-all bg-gradient-to-bl">
            <h1 className="header text-center">{text}</h1>
          </div>
        );
      else
        return (
          <div className="from-blue-500 to-green-500 h-screen w-screen p-36 transiton-all bg-gradient-to-bl">
            {content}
          </div>
        );
    if (fillscreen == false)
      if (text)
        return (
          <div className="from-blue-500 to-green-500 w-screen p-36 transiton-all bg-gradient-to-bl">
            <h1 className="header text-center">{text}</h1>
          </div>
        );
      else
        return (
          <div className="from-blue-500 to-green-500 w-screen p-36 transiton-all bg-gradient-to-bl">
            {content}
          </div>
        );
  }
  
  export default Header;
  