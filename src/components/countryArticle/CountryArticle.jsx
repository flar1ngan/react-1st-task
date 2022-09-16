import "./countryArticle.css"
import ArticleElement from '../articleElement/ArticleElement'

const CountryArticle = () => {
  return (
    <div className='countryArticles'>
        <ArticleElement
        image={"https://media.cntraveler.com/photos/5d8cf7d5db6acf000833e6cc/master/pass/Eiffel-Tower_GettyImages-1060266626.jpg"}
        topic={"Paris"}
        smallerTopic={"France"}
        text={"The capital city of France, and the largest city in France. The area is 105 square kilometres (41 square miles), and around 2.15 million people live there. If suburbs are counted, the population of the Paris area rises to 10.7 million people."}
         />
        <ArticleElement
        image={"https://www.traveller.ee/blog/wp-content/uploads/2016/07/RigaOldTown_Droneview03-1360x900.jpg"}
        topic={"Riga"}
        smallerTopic={"Latvia"}
        text={"The capital and largest city of Latvia and is home to 671,000 inhabitants which is a third of Latvia's population. It is also the largest city in the three Baltic states and is home to one tenth of the three Baltic states' combined population."}
         />
        <ArticleElement
        image={"https://www.visittallinn.ee/static/files/068/tn3_fat_margaret_kaupo_kalda_2020.jpg"}
        topic={"Tallinn"}
        smallerTopic={"Estonia"}
        text={"is the most populous, primate, and capital city of Estonia. Situated on a bay in north Estonia, on the shore of the Gulf of Finland of the Baltic Sea, Tallinn has a population of 437,811 (as of 2022) and administratively lies in the Harju maakond (county)."}
         />
    </div>
  )
}

export default CountryArticle
