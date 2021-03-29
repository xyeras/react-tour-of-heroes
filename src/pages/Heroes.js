import { useState, useEffect } from 'react';
import { heroData } from '../data/heroes';
import { Link } from 'react-router-dom';
import HeroCard from '../components/HeroCard'

const Heroes = () => {

    const [heroes, setHeroes] = useState([]);
    const [alert, setAlert] = useState(false);

    useEffect(() => {
        setHeroes(heroData);
    }, [])

    const updateFeatured = (heroId) => {

        let foundHero = heroData.find(hero => hero.id === +heroId);

        foundHero.featured = !foundHero.featured;

        setAlert(true);
        setTimeout(() => {
            setAlert(false);
        });
        
        console.log(foundHero);

    };

    return (
        <div id="heroes">

            <div className="row text-center mt-3">
                <div className="col">
                    <h2>View our Hero Database!</h2>
                </div>
            </div>

            <div className="row">
                    {heroes.map(hero => {
                        return (
                        <div className="col-sm-12 col-md-3">
                            <HeroCard hero={hero} updateFeatured={updateFeatured} />
                        </div>
                        );
                    })};
            </div>

        </div>
    );
};

export default Heroes;