// components/Layout.js
function Layout(props) {
    return (
      <div className="page-layout">
        {props.children}
        <style jsx global>{`
          body {
            background: #D9ECF2;
          }
  
        `}</style>
      </div>
    )
  }
  
  export default Layout