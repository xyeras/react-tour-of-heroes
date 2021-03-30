import { useState, useEffect } from 'react';
import { heroData } from '../data/heroes';
import HeroCard from '../components/HeroCard'

const Heroes = () => {

    const [heroes, setHeroes] = useState([]);
    const [alert, setAlert] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {

        // setHeroes(heroData);

        const foundHeroes = heroData.filter(hd => {
            return (
                hd.superhero.toLowerCase().includes(searchTerm.toLowerCase()) +
                hd.alter_ego.toLowerCase().includes(searchTerm.toLowerCase()) +
                hd.publisher.toLowerCase().includes(searchTerm.toLowerCase())
            );
        });

        searchTerm === '' ? setHeroes(heroData) : setHeroes(foundHeroes);

    }, [alert, searchTerm]);

    const updateFeatured = (heroId) => {

        let foundHero = heroData.find(hero => hero.id === +heroId);

        foundHero.featured = !foundHero.featured;

        setAlert(true);
        setTimeout(() => {
            setAlert(false);
        }, 2000);
        
        console.log(foundHero);

    };

    const handleChange = event => {

        console.log(event.target.value);
        setSearchTerm(event.target.value);

    }

    return (
        <div id="Heroes">

            <div className="row text-center mt-3">
                <div className="col">
                    <h2>View our Hero Database!</h2>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <div className="form=group">
                        <input
                            type="text"
                            className="form-control"
                            id="hero-search"
                            placeholder="Search for a Superhero"
                            value={searchTerm}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    {alert ? (
                        <div class="alert alert-success">
                            Success
                        </div>
                    ) :
                        ( <div></div> )
                    }
                </div>
            </div>

            <div className="row">
                    {heroes.map(hero => {
                        return (
                        <div className="col-sm-12 col-md-3" key={hero.id}>
                            <HeroCard hero={hero} updateFeatured={updateFeatured} />
                        </div>
                        )
                    })}
            </div>

        </div>
    );
};

export default Heroes;