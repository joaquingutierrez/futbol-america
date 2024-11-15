import "./style.css"
import argentina_img from "../../assets/countries/argentina.png"
import brasil_img from "../../assets/countries/brasil.png"
import chile_img from "../../assets/countries/chile.png"
import uruguay_img from "../../assets/countries/uruguay.png"


const CountryChoice = ({handleChange}) => {

    const handleClick = (choice) => {
        handleChange(choice)
    }
    
    return (
        <section className="countrySelectionContainer">
            <div onClick={()=>handleClick("Argentina")}><img src={argentina_img} alt="Argentina" /></div>
            <div onClick={()=>handleClick("Brazil")}><img src={brasil_img} alt="Argentina" /></div>
            <div onClick={()=>handleClick("Chile")}><img src={chile_img} alt="Argentina" /></div>
            <div onClick={()=>handleClick("Uruguay")}><img src={uruguay_img} alt="Argentina" /></div>
        </section>
    )
}

export default CountryChoice