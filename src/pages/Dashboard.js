import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { heroData } from '../data/heroes';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { GiBatMask } from 'react-icons/gi'

const Dashboard = () => {

    const [heroes, setHeroes] = useState(heroData);

    useEffect(() => {
        let featured = heroData.filter(hero => hero.featured);

        console.log(featured);

        setHeroes(featured);
    }, []);

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
                            <div className="card mb-3">
                                <div className="card-header text-center">{hero.publisher}</div>
                                <img src={hero.image_url} alt={hero.superhero} className="card-img-top" />
                                <div className="card-body">
                                    <h4 className='card-title'>
                                        {hero.superhero === 'Batman' ? <GiBatMask /> : ''}
                                        {hero.superhero}
                                        </h4>
                                    <h6 className="text-secondary">{hero.alter_ego}</h6>
                                    <div className="my-2">
                                        <strong>First Apperance: </strong>
                                        {hero.first_appearance}
                                    </div>

                                    <div className="my-2">
                                        <strong>
                                            Characters: 
                                        </strong>
                                        {hero.characters.map((character, i) => {
                                            return <small key={i}> {character}{i === hero.characters.length - 1 ? '' : ', ' } </small>
                                        })}
                                    </div>

                                    <div className="my-2 d-flex justify-content-between">
                                        <Link to={`/heroes/${hero.id}`} className="card-link">View Details
                                        </Link>
                                        <a href='javascript:void(0)' className='card-link'>
                                            {hero.featured ? <FaStar /> : <FaRegStar />}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
    );
};

export default Dashboard;