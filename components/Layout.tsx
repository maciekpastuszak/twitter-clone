interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default Layout