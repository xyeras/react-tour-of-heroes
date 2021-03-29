import { useEffect, useState } from 'react';
import HeroCard from '../components/HeroCard'
import { Link } from 'react-router-dom'
import { heroData } from '../data/heroes';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { GiBatMask } from 'react-icons/gi'
import '../App.css';

const Dashboard = () => {

    const [heroes, setHeroes] = useState(heroData);
    const [alert, setAlert] = useState(false);

    useEffect(() => {
        let featured = heroData.filter(hero => hero.featured);

        console.log(featured);

        setHeroes(featured);
    }, [alert]);

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
        <div id="Dashboard">

            <div className="row text-center mt-3">
                <div className="col">
                    <h2>Welcome to the tour of Heroes!</h2>
                    <h4 className="text-secondary">Featured Heroes</h4>
                </div>
            </div>

            <div className="row">
                {heroes.map((hero, index) => {
                    return (
                        <div className="col-sm-12 col-md-3" key={hero.id}>
                            <HeroCard hero={hero} updateFeatured={updateFeatured}/>
                        </div>
                    );
                })};
            </div>

        </div>
                        
    );
};

export default Dashboard;