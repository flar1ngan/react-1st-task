import CountryArticle from "../../components/countryArticle/CountryArticle"
import Footer from "../../components/footer/footer"
import TopBar from "../../components/topBar/topBar"
import "./articlePage.css"

const ArticlePage = () => {
  return (
    <>
        <TopBar />
        <CountryArticle />
        <Footer/>
    </>
  )
}

export default ArticlePage