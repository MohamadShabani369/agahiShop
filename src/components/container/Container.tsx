import type React from "react"

interface IContainer {
    children : React.ReactNode
}


function Container({children} : IContainer) {
  return (
    <div className="container  mx-auto px-4 sm:px-6 lg:px-8">
        {children}
    </div>
  )
}

export default Container