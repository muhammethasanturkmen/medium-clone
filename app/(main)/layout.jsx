import Header from "@/components/main/header"
export default  function MainLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}